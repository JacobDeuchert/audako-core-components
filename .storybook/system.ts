import type { HttpConfig } from '@audako/core';

// Which audako system the stories talk to. Resolution order:
//
//   1. `?system=<url>` on the Storybook URL (also remembered for next time)
//   2. the last system picked in the toolbar tool (localStorage)
//   3. VITE_AUDAKO_SYSTEM from the gitignored .env.local
//
// Everything else (API base, Keycloak realm, client id) comes from that
// system's own application.config, fetched through the dev-server proxy in
// main.ts because the file is served without CORS headers.

const SYSTEM_KEY = 'audako:system';
const RECENT_KEY = 'audako:recent-systems';
const MAX_RECENT = 8;

/** The Storybook manager window. Same origin as the preview iframe. */
export const topWindow: Window = window.top ?? window;

/** Accepts `foo.audako.net`, `https://foo.audako.net/some/deep/link` etc. and returns the origin. */
export function normalizeSystemUrl(input: string): string {
  const trimmed = input.trim();
  const withScheme = /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
  return new URL(withScheme).origin;
}

export function recentSystems(): string[] {
  try {
    return JSON.parse(localStorage.getItem(RECENT_KEY) ?? '[]');
  } catch {
    return [];
  }
}

function remember(system: string): void {
  localStorage.setItem(SYSTEM_KEY, system);
  const recent = [system, ...recentSystems().filter((s) => s !== system)].slice(0, MAX_RECENT);
  localStorage.setItem(RECENT_KEY, JSON.stringify(recent));
}

export function resolveSystem(): string | undefined {
  const fromQuery = new URL(topWindow.location.href).searchParams.get('system');
  if (fromQuery) {
    remember(normalizeSystemUrl(fromQuery));
  }

  const stored = localStorage.getItem(SYSTEM_KEY) ?? import.meta.env.VITE_AUDAKO_SYSTEM;
  return stored ? normalizeSystemUrl(stored) : undefined;
}

/** Switches to another system. Services are registered once, so this reloads Storybook. */
export function selectSystem(input: string): void {
  const system = normalizeSystemUrl(input);
  remember(system);
  // The manager keeps unknown query params, so a stale ?system= would win
  // over the new pick; update it rather than trying to strip it.
  const url = new URL(topWindow.location.href);
  if (url.searchParams.has('system')) {
    url.searchParams.set('system', system);
    topWindow.location.assign(url);
  } else {
    topWindow.location.reload();
  }
}

export async function loadHttpConfig(system: string): Promise<HttpConfig> {
  const response = await fetch(`/__audako/config?system=${encodeURIComponent(system)}`);
  if (!response.ok) {
    throw new Error(`Loading ${system}/assets/conf/application.config failed (${response.status}): ${await response.text()}`);
  }
  return response.json();
}
