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
let access_token ='';

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
