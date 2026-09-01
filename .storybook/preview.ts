import type { Preview } from '@storybook/svelte-vite';
import { EntityHttpService, TenantHttpService, EntityNameService, LiveValueService } from 'audako-core';
import 'reflect-metadata';
import { container } from 'tsyringe';
import { PopupService } from '../src/shared/services/popup.service';
import { registerCustomElements } from '../src/main';
// Stories render plain Svelte components into the document, so the Tailwind
// sheet is loaded globally here. Custom elements adopt it into their shadow
// roots separately via withShadowStyles.
import '../src/styles/tailwind.css';

// Mirrors https://staging.test.audako.net/assets/conf/application.config
let httpConfig = {
  Services: {
    BaseUri: 'https://staging.test.audako.net/api',
    Structure: '/v1/structure',
    Driver: '/v1/driver',
    Live: '/live',
    Historian: '/v1/historian',
    Maintenance: '/maintenance',
    Event: '/v1/event',
    Camera: '/v1/camera',
    Reporting: '/v1/reporting',
    Messenger: '/messenger',
    Ticket: '/tickets',
    Calendar: '/v1/calendar',
    Manufacturing: '/manufacturing',
    Runtime: '/runtime',
    ExternalApi: '/ext',
  },
  Authentication: {
    BaseUri: 'https://staging.test.audako.net/auth/realms/master',
    ClientId: 'webapp',
  },
  Configuration: {
    MaintenanceEnabled: 'true',
    WikiUrl: 'https://docs.audako.net/',
    MultiCopyEnabled: 'false',
    CloudSystem: 'false',
    ExperimentalFeatures: null,
    GatewayMqttEndpoint: null,
    GatewayImage: null,
    LeafletTileUrl: null,
  },
};
const TOKEN_STORAGE_KEY = 'audako:access-token';

// audako-core accepts a getter for AsyncValue (Lazy<T> = () => T), so the token
// is read per request rather than captured at startup. That means you can drop
// in a fresh one without restarting Storybook:
//
//   localStorage.setItem('audako:access-token', '<jwt>')
//
// and reload the story. Otherwise it falls back to VITE_ACCESS_TOKEN from
// .env.local, which is gitignored - do not hardcode a token here.
function getAccessToken(): string {
  const stored = typeof localStorage !== 'undefined' ? localStorage.getItem(TOKEN_STORAGE_KEY) : null;
  return stored ?? import.meta.env.VITE_ACCESS_TOKEN ?? '';
}

let entityHttpService = new EntityHttpService(httpConfig, getAccessToken);

container.register('TenantHttpService', { useValue: new TenantHttpService(httpConfig, getAccessToken) });
container.register('EntityHttpService', { useValue: entityHttpService });
container.register('EntityNameService', { useValue: new EntityNameService(entityHttpService) });
container.register('LiveValueService', { useValue: new LiveValueService(httpConfig, getAccessToken) });
container.register('PopupContainerService', { useValue: new PopupService(document.body) });

registerCustomElements();

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
