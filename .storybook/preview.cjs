import { TenantHttpService, EntityHttpService, EntityNameService} from 'audako-core';

import 'reflect-metadata';
import { container } from 'tsyringe';

let httpConfig = {
  "Services": {
    "BaseUri": "https://water.audako.net/api",
    "Structure": "/structure",
    "Driver": "/driver",
    "Live": "/live",
    "Historian": "/historian",
    "Maintenance": "/maintenance",
    "Event": "/event",
    "Camera": "/camera",
    "Reporting": "/reporting",
    "Messenger": "/messenger",
    "Ticket": "/tickets",
    "Calendar": "/calendar",
    "Manufacturing": "/manufacturing"
  },
  "Authentication": {
    "BaseUri": "https://login.audako.net/auth/realms/master",
    "ClientId": "water-ui"
  },
  "Configuration": {
    "MaintenanceEnabled": "true",
    "WikiUrl": "https://docs.audako.net",
    "MultiCopyEnabled": "false",
    "CloudSystem": "false",
    "ExperimentalFeatures": null,
    "GatewayMqttEndpoint": null,
    "GatewayImage": null
  }
};
let access_token = "";

let entityHttpService = new EntityHttpService(httpConfig, access_token);

container.register('TenantHttpService', { useValue: new TenantHttpService(httpConfig, access_token)});
container.register('EntityHttpService', {useValue: entityHttpService});
container.register('EntityNameService', {useValue: new EntityNameService(entityHttpService)});

console.log(process?.env);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
