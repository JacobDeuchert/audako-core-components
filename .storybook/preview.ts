import type { Preview } from '@storybook/svelte-vite';
import { ApiContext, EntityHttpService, TenantHttpService, EntityNameService, LiveValueService } from '@audako/core';
import 'reflect-metadata';
import { container } from 'tsyringe';
import { addons } from 'storybook/preview-api';
import { completeLogin, createAccessTokenGetter, hasSession, logout, startLogin, type AuthConfig } from './auth';
import { loadHttpConfig, recentSystems, resolveSystem, selectSystem } from './system';
import { CONNECT_EVENTS, type ConnectState, type ConnectStatus } from './connect';
import { registerCustomElements } from '../src/main';
// Stories render plain Svelte components into the document, so the base
// sheet (tokens, reset, icon font) is loaded globally here. Custom elements
// adopt it into their shadow roots separately via withShadowStyles.
import '../src/styles/base.css';

// Pick a system with ?system=<url> or the audako system tool in the toolbar;
// its config is loaded from the system itself (see system.ts) and the
// first API call without a session redirects to its Keycloak login (auth.ts).
const system = resolveSystem();
const connection = system ? connect(system) : undefined;
// Failures are shown in the toolbar tool; keep them out of the console noise.
connection?.catch(() => {});

async function connect(system: string) {
  const httpConfig = await loadHttpConfig(system);
  if (!httpConfig.Authentication) {
    throw new Error(`${system} has no Authentication section in its application.config`);
  }
  const auth: AuthConfig = { baseUri: httpConfig.Authentication.BaseUri, clientId: httpConfig.Authentication.ClientId };

  let loginError: string | undefined;
  try {
    await completeLogin(system, auth);
  } catch (error) {
    loginError = (error as Error).message;
  }

  const getAccessToken = createAccessTokenGetter(system, auth, { autoLogin: !loginError });
  return { system, httpConfig, auth, getAccessToken, loginError };
}

function requireConnection() {
  return connection ?? Promise.reject(new Error('[storybook] No audako system selected, use the audako system tool in the toolbar.'));
}

// One context for all services; it detects the platform version on the first request.
const ctx = new ApiContext(
  () => requireConnection().then((c) => c.httpConfig),
  () => requireConnection().then((c) => c.getAccessToken()),
);
let entityHttpService = new EntityHttpService(ctx);

container.register('TenantHttpService', { useValue: new TenantHttpService(ctx) });
container.register('EntityHttpService', { useValue: entityHttpService });
container.register('EntityNameService', { useValue: new EntityNameService(entityHttpService) });
container.register('LiveValueService', { useValue: new LiveValueService(ctx) });

registerCustomElements();

// State and actions for the connect tool in the toolbar (manager.tsx).
const channel = addons.getChannel();
let connectState: ConnectState = { system, recent: recentSystems(), status: system ? 'loading' : 'none' };
const publishConnectState = () => channel.emit(CONNECT_EVENTS.STATE, connectState);

connection?.then(
  (c) => {
    const status: ConnectStatus = c.loginError
      ? { status: 'error', message: c.loginError }
      : { status: 'ready', loggedIn: hasSession(c.system) };
    connectState = { ...connectState, ...status };
    publishConnectState();
  },
  (error) => {
    connectState = { ...connectState, status: 'error', message: String(error?.message ?? error) };
    publishConnectState();
  },
);

channel.on(CONNECT_EVENTS.REQUEST_STATE, publishConnectState);
channel.on(CONNECT_EVENTS.SELECT, (url: string) => selectSystem(url));
channel.on(CONNECT_EVENTS.LOGIN, () => connection?.then((c) => startLogin(c.system, c.auth)));
channel.on(CONNECT_EVENTS.LOGOUT, () => connection?.then((c) => logout(c.system, c.auth)));
publishConnectState();

const preview: Preview = {
  parameters: {
    // `actions.argTypesRegex` was removed in Storybook 8; use the `fn()` spy
    // from storybook/test on individual args instead.
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
