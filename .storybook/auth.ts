import { topWindow } from './system';

// Keycloak login for Storybook: authorization code flow with PKCE against the
// selected system's realm, as a full-page redirect of the manager window
// (Keycloak refuses to render inside the preview iframe).
//
//   1. The first API call without a token calls startLogin(), which stores
//      the PKCE verifier and the current Storybook URL in sessionStorage and
//      sends the manager window to Keycloak.
//   2. Keycloak redirects to /auth-callback.html (.storybook/static), which
//      stashes the query string and goes back to the stored Storybook URL.
//   3. On the next preview load completeLogin() exchanges the code.
//
// Each system's Keycloak client needs the Storybook origin (e.g.
// `https://devvm:6006`) in its web origins, for the token request, and
// `<origin>/*` in its valid redirect URIs. Tokens are kept per system; Keycloak rotates the refresh
// token on every grant, so the rotated one is written back and the exchange
// is single-flight (reusing an old refresh token counts as replay).

export interface AuthConfig {
  /** Realm URL, e.g. https://host/auth/realms/master */
  baseUri: string;
  clientId: string;
}

interface PendingLogin {
  system: string;
  state: string;
  verifier: string;
  redirectUri: string;
  returnUrl: string;
  startedAt: number;
}

interface CachedToken {
  value: string;
  refreshAt: number;
}

const PENDING_KEY = 'audako:login-pending';
// Written by .storybook/static/auth-callback.html.
const CALLBACK_KEY = 'audako:login-callback';
const REDIRECT_PATH = '/auth-callback.html';

// Refresh at 75% of the lifetime, same margin the main UI uses.
const REFRESH_AT_FRACTION = 0.75;
// Do not start another redirect this soon after the last one: a login that
// bounces straight back without a token would otherwise loop forever.
const LOGIN_RETRY_MS = 15_000;

const refreshTokenKey = (system: string) => `audako:refresh-token:${system}`;
const idTokenKey = (system: string) => `audako:id-token:${system}`;

function base64Url(bytes: Uint8Array): string {
  return btoa(String.fromCharCode(...bytes))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
}

function randomString(): string {
  return base64Url(crypto.getRandomValues(new Uint8Array(32)));
}

// Plain SHA-256 for insecure contexts: browsers only expose crypto.subtle on
// https and localhost, so it is missing when Storybook is opened through the
// VM's network address.
function sha256(data: Uint8Array): Uint8Array {
  const k = new Uint32Array(64);
  const isPrime = (n: number) => {
    for (let d = 2; d * d <= n; d++) if (n % d === 0) return false;
    return true;
  };
  for (let n = 2, i = 0; i < 64; n++) {
    if (isPrime(n)) k[i++] = (Math.cbrt(n) % 1) * 2 ** 32;
  }

  const h = new Uint32Array([
    0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19,
  ]);

  const length = Math.ceil((data.length + 9) / 64) * 64;
  const padded = new Uint8Array(length);
  padded.set(data);
  padded[data.length] = 0x80;
  const view = new DataView(padded.buffer);
  view.setUint32(length - 4, data.length * 8);

  const rotr = (x: number, n: number) => (x >>> n) | (x << (32 - n));
  const w = new Uint32Array(64);

  for (let offset = 0; offset < length; offset += 64) {
    for (let i = 0; i < 16; i++) w[i] = view.getUint32(offset + i * 4);
    for (let i = 16; i < 64; i++) {
      const s0 = rotr(w[i - 15], 7) ^ rotr(w[i - 15], 18) ^ (w[i - 15] >>> 3);
      const s1 = rotr(w[i - 2], 17) ^ rotr(w[i - 2], 19) ^ (w[i - 2] >>> 10);
      w[i] = w[i - 16] + s0 + w[i - 7] + s1;
    }

    let [a, b, c, d, e, f, g, hh] = h;
    for (let i = 0; i < 64; i++) {
      const t1 = hh + (rotr(e, 6) ^ rotr(e, 11) ^ rotr(e, 25)) + ((e & f) ^ (~e & g)) + k[i] + w[i];
      const t2 = (rotr(a, 2) ^ rotr(a, 13) ^ rotr(a, 22)) + ((a & b) ^ (a & c) ^ (b & c));
      hh = g;
      g = f;
      f = e;
      e = (d + t1) >>> 0;
      d = c;
      c = b;
      b = a;
      a = (t1 + t2) >>> 0;
    }

    h[0] += a;
    h[1] += b;
    h[2] += c;
    h[3] += d;
    h[4] += e;
    h[5] += f;
    h[6] += g;
    h[7] += hh;
  }

  const out = new Uint8Array(32);
  const outView = new DataView(out.buffer);
  h.forEach((word, i) => outView.setUint32(i * 4, word));
  return out;
}

async function codeChallenge(verifier: string): Promise<string> {
  const data = new TextEncoder().encode(verifier);
  const digest = crypto.subtle ? new Uint8Array(await crypto.subtle.digest('SHA-256', data)) : sha256(data);
  return base64Url(digest);
}

function readPending(): PendingLogin | undefined {
  try {
    return JSON.parse(sessionStorage.getItem(PENDING_KEY) ?? 'null') ?? undefined;
  } catch {
    return undefined;
  }
}

export function hasSession(system: string): boolean {
  return !!localStorage.getItem(refreshTokenKey(system));
}

/** Sends the manager window to the Keycloak login page. */
export async function startLogin(system: string, auth: AuthConfig): Promise<void> {
  const pending: PendingLogin = {
    system,
    state: randomString(),
    verifier: randomString(),
    redirectUri: `${location.origin}${REDIRECT_PATH}`,
    returnUrl: topWindow.location.href,
    startedAt: Date.now(),
  };
  sessionStorage.setItem(PENDING_KEY, JSON.stringify(pending));

  const url = new URL(`${auth.baseUri}/protocol/openid-connect/auth`);
  url.search = new URLSearchParams({
    client_id: auth.clientId,
    response_type: 'code',
    scope: 'openid',
    redirect_uri: pending.redirectUri,
    state: pending.state,
    code_challenge: await codeChallenge(pending.verifier),
    code_challenge_method: 'S256',
  }).toString();
  topWindow.location.assign(url);
}

async function requestToken(auth: AuthConfig, params: Record<string, string>) {
  const response = await fetch(`${auth.baseUri}/protocol/openid-connect/token`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ client_id: auth.clientId, ...params }),
  });
  if (!response.ok) {
    const body = await response.text().catch(() => '');
    throw Object.assign(new Error(`Token request failed (${response.status}): ${body}`), { status: response.status });
  }
  return (await response.json()) as { access_token: string; expires_in: number; refresh_token?: string; id_token?: string };
}

/**
 * Finishes a login that came back through auth-callback.html. No-op when
 * there is none. Throws when Keycloak reported an error or the state does not
 * match, so the caller can show it instead of redirecting again.
 */
export async function completeLogin(system: string, auth: AuthConfig): Promise<void> {
  const callback = sessionStorage.getItem(CALLBACK_KEY);
  if (callback === null) return;
  sessionStorage.removeItem(CALLBACK_KEY);

  const pending = readPending();
  sessionStorage.removeItem(PENDING_KEY);

  const params = new URLSearchParams(callback);
  if (params.has('error')) {
    throw new Error(`Login failed: ${params.get('error_description') ?? params.get('error')}`);
  }
  if (!pending || pending.state !== params.get('state') || pending.system !== system) {
    throw new Error('Login failed: the callback does not match the pending login. Try again.');
  }

  const data = await requestToken(auth, {
    grant_type: 'authorization_code',
    code: params.get('code') ?? '',
    redirect_uri: pending.redirectUri,
    code_verifier: pending.verifier,
  });
  store(system, data);
}

function store(system: string, data: { refresh_token?: string; id_token?: string }): void {
  if (data.refresh_token) localStorage.setItem(refreshTokenKey(system), data.refresh_token);
  if (data.id_token) localStorage.setItem(idTokenKey(system), data.id_token);
}

/** Drops the local tokens and ends the Keycloak session, then comes back here. */
export function logout(system: string, auth: AuthConfig): void {
  const idToken = localStorage.getItem(idTokenKey(system));
  localStorage.removeItem(refreshTokenKey(system));
  localStorage.removeItem(idTokenKey(system));

  const url = new URL(`${auth.baseUri}/protocol/openid-connect/logout`);
  url.search = new URLSearchParams({
    client_id: auth.clientId,
    post_logout_redirect_uri: topWindow.location.href,
    ...(idToken ? { id_token_hint: idToken } : {}),
  }).toString();
  topWindow.location.assign(url);
}

/**
 * Builds the AsyncValue<string> getter audako-core's services expect. It is
 * called per request and resolves to a valid token, redirecting to the login
 * page when there is no usable session. Pass `autoLogin: false` after a
 * failed login so a rejected login does not bounce back and forth.
 */
export function createAccessTokenGetter(
  system: string,
  auth: AuthConfig,
  { autoLogin = true }: { autoLogin?: boolean } = {},
): () => Promise<string> {
  let cached: CachedToken | undefined;
  let inflight: Promise<string> | undefined;

  const loginRequired = async (reason: string): Promise<never> => {
    const pending = readPending();
    if (!autoLogin || (pending && Date.now() - pending.startedAt < LOGIN_RETRY_MS)) {
      throw new Error(
        `[storybook] ${reason}; not redirecting automatically after a failed or abandoned login. Use the audako system tool in the toolbar to log in.`,
      );
    }
    await startLogin(system, auth);
    throw new Error(`[storybook] ${reason}; redirecting to login.`);
  };

  const refresh = async (): Promise<string> => {
    const refreshToken = localStorage.getItem(refreshTokenKey(system));
    if (!refreshToken) return loginRequired(`No session for ${system}`);

    try {
      const data = await requestToken(auth, { grant_type: 'refresh_token', refresh_token: refreshToken });
      store(system, data);
      cached = { value: data.access_token, refreshAt: Date.now() + data.expires_in * 1000 * REFRESH_AT_FRACTION };
      return cached.value;
    } catch (error) {
      // A rejected refresh token will not recover on retry (expired session,
      // replayed token); drop it and log in again. Anything else, e.g. a
      // network error, is left alone and surfaces to the caller.
      const status = (error as { status?: number }).status;
      if (status === 400 || status === 401) {
        localStorage.removeItem(refreshTokenKey(system));
        return loginRequired(`Session for ${system} expired`);
      }
      throw error;
    }
  };

  return async () => {
    if (cached && Date.now() < cached.refreshAt) return cached.value;
    inflight ??= refresh().finally(() => {
      inflight = undefined;
    });
    return inflight;
  };
}
