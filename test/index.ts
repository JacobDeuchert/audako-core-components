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

const token =
  'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJjVTQtRzFpOFRENEJFOWI0RU8xeFZhSjdlUFRaeWx1NWFYNjFxRDF2MjZJIn0.eyJleHAiOjE2NjAzMjU4NTMsImlhdCI6MTY2MDI5NzA1MywiYXV0aF90aW1lIjoxNjYwMjk3MDUzLCJqdGkiOiI0ZWQzNGQ2MS01MzM2LTRiZjEtYjIxNy1jNzU2Y2M2ZTQzOWYiLCJpc3MiOiJodHRwczovL2xvZ2luLmF1ZGFrby5uZXQvYXV0aC9yZWFsbXMvbWFzdGVyIiwiYXVkIjpbImRvY2tlci1yZWdpc3RyeSIsImFjY291bnQiXSwic3ViIjoiYTI5ZjM2NDEtNWVjNC00OWYwLTkzYzItMzc4OTRhOTY1Yzg2IiwidHlwIjoiQmVhcmVyIiwiYXpwIjoid2F0ZXItdWkiLCJub25jZSI6IllYWkxNbWhxYUd4QlIyMWhXa2hITlRKYVZtOWtOVjg0Y0c1MlJFVnNVVlJaU21wUGVGQnhkMk5NZWxCciIsInNlc3Npb25fc3RhdGUiOiJjZDE0MzM5ZS04MTZjLTQyM2MtODM5Zi0zZjA5YTBiZjkwYjUiLCJhY3IiOiIxIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwidW1hX2F1dGhvcml6YXRpb24iXX0sInJlc291cmNlX2FjY2VzcyI6eyJkb2NrZXItcmVnaXN0cnkiOnsicm9sZXMiOlsiZG9ja2VyLXN1YnNjcmliZXIiLCJkb2NrZXItcHVibGlzaGVyIl19LCJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6Im9wZW5pZCBlbWFpbCBwcm9maWxlIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsIm5hbWUiOiJKYWNvYiBEZXVjaGVydCIsInByZWZlcnJlZF91c2VybmFtZSI6ImouZGV1Y2hlcnRAbmFyei5uZXQiLCJnaXZlbl9uYW1lIjoiSmFjb2IiLCJsb2NhbGUiOiJkZSIsImZhbWlseV9uYW1lIjoiRGV1Y2hlcnQiLCJlbWFpbCI6ImouZGV1Y2hlcnRAbmFyei5uZXQifQ.Dg-FwWA1qGR0Rp_jOYro6wNjPa3z4mgcvAKZ2bhWpUgTo01jLN8yw6XXs1kqQYeLDPcQJTs3iMoH_vtYIf3S3W_PKJGkXcEv-k8iE7XxR-iy2LfZYFc3ixd77j3-A_JqZTq33bQaESTEiXaQwIX0HnNiHIZMGG1VvrYIwOis6I_X7ciggvEz05jaoaLEX0rBBAbvcUIq08Sh-g88a52o3a6rLrcXFIXHvmX571rwfZH5l9D9CDyoth2cfchia5C9oHXNoDPkAi5EagEup-nlpdz8c3EMxmjOucAvZHLQRlRg6__hFmTUXij_kFHaszYcNdH_x3cxVE0CRWu6BHsgrA';


const entityHttpService = new EntityHttpService(config, token);
const tenantHttpService = new TenantHttpService(config, token);
const entityNameService = new EntityNameService(entityHttpService);

container.register('EntityHttpService', { useValue: entityHttpService });
container.register('TenantHttpService', { useValue: tenantHttpService });
container.register('EntityNameService', { useValue: entityNameService });

registerCustomElements();
