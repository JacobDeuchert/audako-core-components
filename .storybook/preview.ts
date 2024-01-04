import type { Preview } from '@storybook/web-components';
import { EntityHttpService, TenantHttpService, EntityNameService } from 'audako-core';
import 'reflect-metadata';
import { container } from 'tsyringe';
import {PopupService} from '../src/shared/services/popup.service';
import { registerCustomElements } from '../src/main';
import './preview.css';

let httpConfig = {
  Services: {
    BaseUri: 'https://water.audako.net/api',
    Structure: '/structure',
    Driver: '/driver',
    Live: '/live',
    Historian: '/historian',
    Maintenance: '/maintenance',
    
    Event: '/event',
    Camera: '/camera',
    Reporting: '/reporting',
    Messenger: '/messenger',
    Ticket: '/tickets',
    Calendar: '/calendar',
    Manufacturing: '/manufacturing',
  },
  Authentication: {
    BaseUri: 'https://login.audako.net/auth/realms/master',
    ClientId: 'water-ui',
  },
  Configuration: {
    MaintenanceEnabled: 'true',
    WikiUrl: 'https://docs.audako.net',
    MultiCopyEnabled: 'false',
    CloudSystem: 'false',
    ExperimentalFeatures: null,
    GatewayMqttEndpoint: null,
    GatewayImage: null,
  },
};
let access_token ='eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJjVTQtRzFpOFRENEJFOWI0RU8xeFZhSjdlUFRaeWx1NWFYNjFxRDF2MjZJIn0.eyJleHAiOjE3MDQzOTQzNzMsImlhdCI6MTcwNDM2NTU3MywiYXV0aF90aW1lIjoxNzA0MzY1NTczLCJqdGkiOiIwYzk5ZmE0ZS0zMDA2LTQxMjItOTMwNS1hY2I4MWYyMzI0ZTMiLCJpc3MiOiJodHRwczovL2xvZ2luLmF1ZGFrby5uZXQvYXV0aC9yZWFsbXMvbWFzdGVyIiwiYXVkIjpbImRvY2tlci1yZWdpc3RyeSIsImFjY291bnQiXSwic3ViIjoiYTI5ZjM2NDEtNWVjNC00OWYwLTkzYzItMzc4OTRhOTY1Yzg2IiwidHlwIjoiQmVhcmVyIiwiYXpwIjoid2F0ZXItdWkiLCJub25jZSI6Ik5taGtMVWxDV0dNMWFHNDRVRlYzVmpCSGFUbE1ialpQWW1WQ1RYSkplazV2WTNoUldGbGxXSEJ3Y2xWNiIsInNlc3Npb25fc3RhdGUiOiI3MzFmN2MwZi1iMjgzLTQ4N2QtYmFkZC1jODNhYjM2NzgzNGQiLCJhY3IiOiIxIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwidW1hX2F1dGhvcml6YXRpb24iXX0sInJlc291cmNlX2FjY2VzcyI6eyJkb2NrZXItcmVnaXN0cnkiOnsicm9sZXMiOlsiZG9ja2VyLXN1YnNjcmliZXIiLCJkb2NrZXItcHVibGlzaGVyIl19LCJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6Im9wZW5pZCBlbWFpbCBwcm9maWxlIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsIm5hbWUiOiJKYWNvYiBEZXVjaGVydCIsInByZWZlcnJlZF91c2VybmFtZSI6ImouZGV1Y2hlcnRAbmFyei5uZXQiLCJnaXZlbl9uYW1lIjoiSmFjb2IiLCJsb2NhbGUiOiJkZSIsImZhbWlseV9uYW1lIjoiRGV1Y2hlcnQiLCJlbWFpbCI6ImouZGV1Y2hlcnRAbmFyei5uZXQifQ.Uw8uY4IXNAnqLFOzyj9s1Ll3WZIw0t7VpSHs_FZx0apQhH6CDhN1yc-qDUByh6I0vbaeh2qLQnNRJOgbBAP_jBuuT9x0JmjRCIUG-9jxjouY4EgZugw85vlBaRehYArU2ybvaCauIlTk-viSfCZSfGhYEAuQ16bh_6aB7BXEnIvhBsz1EEuJs_L1uiqu9W4bKotiIj3M82P3gDzoiT9cC2JM07h_mMIvR4CqmMvpeOBLV1Wfd2KyCi1xqzUDtQsu6l9hdsAE0Rg2qqP4RzbnNOoLNvIO16Wkz130CIB9omEGP5btXqbsz1xlgR61p58pFV0Ngod1Vn7zbgyifJlucQ';

let entityHttpService = new EntityHttpService(httpConfig, access_token);

container.register('TenantHttpService', { useValue: new TenantHttpService(httpConfig, access_token) });
container.register('EntityHttpService', { useValue: entityHttpService });
container.register('EntityNameService', { useValue: new EntityNameService(entityHttpService) });
container.register('PopupContainerService', { useValue: new PopupService(document.body) });

registerCustomElements();



const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'light',
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
