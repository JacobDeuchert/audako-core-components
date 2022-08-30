import 'reflect-metadata';
import { registerCustomElements } from 'audako-core-components';
import { EntityHttpService, EntityNameService, TenantHttpService } from 'audako-core';
import { container } from 'tsyringe';



window['dependencyContainer'] = container;

let config = {
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

const token = '';


const entityHttpService = new EntityHttpService(config, token);
const tenantHttpService = new TenantHttpService(config, token);
const entityNameService = new EntityNameService(entityHttpService);

container.register('EntityHttpService', { useValue: entityHttpService });
container.register('TenantHttpService', { useValue: tenantHttpService });
container.register('EntityNameService', { useValue: entityNameService });

registerCustomElements();
