import 'reflect-metadata';
import { registerCustomElements } from 'audako-core-components';
import { ApiContext, EntityHttpService, EntityNameService, TenantHttpService } from '@audako/core';
import { container } from 'tsyringe';



window['dependencyContainer'] = container;

// Mirrors https://staging.test.audako.net/assets/conf/application.config
let config = {
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

const token = 'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJjVTQtRzFpOFRENEJFOWI0RU8xeFZhSjdlUFRaeWx1NWFYNjFxRDF2MjZJIn0.eyJleHAiOjE3ODgxOTI3ODQsImlhdCI6MTc4ODE3NTQ1MywiYXV0aF90aW1lIjoxNzg4MTU2Nzg0LCJqdGkiOiIyMWExOGE1NC0wMDM0LTQ5N2QtOTVjMi1mMmVkMzEzZDNmMDkiLCJpc3MiOiJodHRwczovL2xvZ2luLmF1ZGFrby5uZXQvYXV0aC9yZWFsbXMvbWFzdGVyIiwiYXVkIjpbImluZnJhbWFuLWFwaS10ZXN0IiwiZG9ja2VyLXJlZ2lzdHJ5IiwiaW5mcmFtYW4tYXBpIiwibWFzdGVyLXJlYWxtIiwiYWNjb3VudCJdLCJzdWIiOiJhMjlmMzY0MS01ZWM0LTQ5ZjAtOTNjMi0zNzg5NGE5NjVjODYiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJ3YXRlci11aSIsInNpZCI6IjIzZjg3ZjBhLTQ5OGMtNDcyMy05ZWY5LTkzYzUxNzUwY2MxYSIsImFsbG93ZWQtb3JpZ2lucyI6WyJodHRwczovL2xvY2FsaG9zdCIsIm5ldC5hdWRha28uYXBwIl0sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJvZmZsaW5lX2FjY2VzcyIsInVtYV9hdXRob3JpemF0aW9uIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiaW5mcmFtYW4tYXBpLXRlc3QiOnsicm9sZXMiOlsiaW5mcmFtYW4tYWRtaW4tdGVzdCJdfSwiZG9ja2VyLXJlZ2lzdHJ5Ijp7InJvbGVzIjpbImRvY2tlci1zdWJzY3JpYmVyIiwiZG9ja2VyLXB1Ymxpc2hlciJdfSwiaW5mcmFtYW4tYXBpIjp7InJvbGVzIjpbImluZnJhbWFuLWFkbWluIl19LCJtYXN0ZXItcmVhbG0iOnsicm9sZXMiOlsidmlldy11c2VycyIsInF1ZXJ5LWdyb3VwcyIsInF1ZXJ5LXVzZXJzIl19LCJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6Im9wZW5pZCBlbWFpbCBwcm9maWxlIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsIm5hbWUiOiJKYWNvYiBEZXVjaGVydCIsInByZWZlcnJlZF91c2VybmFtZSI6ImouZGV1Y2hlcnRAbmFyei5uZXQiLCJnaXZlbl9uYW1lIjoiSmFjb2IiLCJsb2NhbGUiOiJkZSIsImZhbWlseV9uYW1lIjoiRGV1Y2hlcnQiLCJlbWFpbCI6ImouZGV1Y2hlcnRAbmFyei5uZXQifQ.LmnUxkSIkh0w-oth02qKSbXKjb_V3do8O9nWBoKt32KLbz6wYcZdplN5jygg8fu1r8xaIUAFA4Q4ANvwNSMMFbMIlQIKakANUbg4v3Zs-iCtj4HDLN4zsPoI9bBrMbR1TFH9lwEWpW59glyUMDRkqH9dAn8lilSTiERPIJse64RdM5Mv1FXTqMasNACTmLcOgsRsmTDj4goZ2c30L1NnYcxKR32bRZu6YQUVE2zl-hjr1tGJD0uzm9xQLCGRfVeddJJ8PehbN8nGbpP8cuBVNhzh05PrmGioabsgWMIKaPHCSeT8YqKvbV8zbF6n2JqoY5EQgTgtVFWNDf4Cx3T9Jg';


const ctx = new ApiContext(config, token);
const entityHttpService = new EntityHttpService(ctx);
const tenantHttpService = new TenantHttpService(ctx);
const entityNameService = new EntityNameService(entityHttpService);

container.register('EntityHttpService', { useValue: entityHttpService });
container.register('TenantHttpService', { useValue: tenantHttpService });
container.register('EntityNameService', { useValue: entityNameService });

registerCustomElements();
