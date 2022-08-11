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
  'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJjVTQtRzFpOFRENEJFOWI0RU8xeFZhSjdlUFRaeWx1NWFYNjFxRDF2MjZJIn0.eyJleHAiOjE2NTg3MjA4MTEsImlhdCI6MTY1ODY5MjAxMSwiYXV0aF90aW1lIjoxNjU4NjkyMDExLCJqdGkiOiI0ODlmZTJlMC05YWM1LTQyMDAtYTJhNS1hNDBmMWFkNjIzYTIiLCJpc3MiOiJodHRwczovL2xvZ2luLmF1ZGFrby5uZXQvYXV0aC9yZWFsbXMvbWFzdGVyIiwiYXVkIjpbImRvY2tlci1yZWdpc3RyeSIsImFjY291bnQiXSwic3ViIjoiYTI5ZjM2NDEtNWVjNC00OWYwLTkzYzItMzc4OTRhOTY1Yzg2IiwidHlwIjoiQmVhcmVyIiwiYXpwIjoid2F0ZXItdWkiLCJub25jZSI6Ik1UZExPV3N5TW01RGQyRklUMGRvUjFSS1JFNU5lVzVvU0dGd1NtWkthVzlFYVZGSGFuSi1XakZHVUcxLSIsInNlc3Npb25fc3RhdGUiOiIyYWU5YjgyMi1lZGI2LTQzODktYjM2YS0wMmM5MGQ0YzMyNjAiLCJhY3IiOiIxIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwidW1hX2F1dGhvcml6YXRpb24iXX0sInJlc291cmNlX2FjY2VzcyI6eyJkb2NrZXItcmVnaXN0cnkiOnsicm9sZXMiOlsiZG9ja2VyLXN1YnNjcmliZXIiLCJkb2NrZXItcHVibGlzaGVyIl19LCJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6Im9wZW5pZCBlbWFpbCBwcm9maWxlIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsIm5hbWUiOiJKYWNvYiBEZXVjaGVydCIsInByZWZlcnJlZF91c2VybmFtZSI6ImouZGV1Y2hlcnRAbmFyei5uZXQiLCJnaXZlbl9uYW1lIjoiSmFjb2IiLCJsb2NhbGUiOiJkZSIsImZhbWlseV9uYW1lIjoiRGV1Y2hlcnQiLCJlbWFpbCI6ImouZGV1Y2hlcnRAbmFyei5uZXQifQ.V2VmgX6hSX8Q8hEOzTx8nt_85XA67gz_lnOrMBM1P85Kp-vvK6sPRyUt-BBSKs3oWN-MybT2Mp9a5UiYzB6XiAqSbqAOGxU8n_sQeRtpOq7asEZcHcSLYAVCxWc4DepWdCFKdmnEX3uxBG55KUIJG_t9r7vV5hHXLp3BcAtZxnEB9o78WYfxSehO5ZR6jGQvq5yqWAIT3SDq32WWpuapRspFrKAe0pNlNROG5ArWRqe5KfJzSxUgwcfLVX0i0nwcaj7na6ayF4U05qoAUt9-HW_vdw73Bxl8_ITzRnfvzUaAiCUsQ0tF8zA-gqCebVasA62CfD4TVbO39VqVf0Lp3A';


const entityHttpService = new EntityHttpService(config, token);
const tenantHttpService = new TenantHttpService(config, token);
const entityNameService = new EntityNameService(entityHttpService);

container.register('EntityHttpService', { useValue: entityHttpService });
container.register('TenantHttpService', { useValue: tenantHttpService });
container.register('EntityNameService', { useValue: entityNameService });


registerCustomElements();
