import 'reflect-metadata';
import { registerCustomElements } from 'audako-core-components';
import { TenantHttpService } from 'audako-core';
import { container } from 'tsyringe';

window['dependencyContainer'] = container;

let config = {
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

const token = 'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJjVTQtRzFpOFRENEJFOWI0RU8xeFZhSjdlUFRaeWx1NWFYNjFxRDF2MjZJIn0.eyJleHAiOjE2NTgwMjczMDYsImlhdCI6MTY1Nzk5ODUwNiwiYXV0aF90aW1lIjoxNjU3OTk4NTA2LCJqdGkiOiI4Y2E0NDVlYi04MzU2LTRmMmQtYjdlMS0yZGMyNTliOTVmZjYiLCJpc3MiOiJodHRwczovL2xvZ2luLmF1ZGFrby5uZXQvYXV0aC9yZWFsbXMvbWFzdGVyIiwiYXVkIjpbImRvY2tlci1yZWdpc3RyeSIsImFjY291bnQiXSwic3ViIjoiYTI5ZjM2NDEtNWVjNC00OWYwLTkzYzItMzc4OTRhOTY1Yzg2IiwidHlwIjoiQmVhcmVyIiwiYXpwIjoid2F0ZXItdWkiLCJub25jZSI6ImVtWXVjbWxNWXpCRWIwWmxVR3gzY2tseWFFVXljVmRqVjNGVlltRjFSRWRHWWpKcmF6bGtVMGx5U1dReiIsInNlc3Npb25fc3RhdGUiOiIxNmU1ODYwZi0wMTQwLTRjMmMtYWFiOS1mY2M0YjIwYTMyZmMiLCJhY3IiOiIxIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwidW1hX2F1dGhvcml6YXRpb24iXX0sInJlc291cmNlX2FjY2VzcyI6eyJkb2NrZXItcmVnaXN0cnkiOnsicm9sZXMiOlsiZG9ja2VyLXN1YnNjcmliZXIiLCJkb2NrZXItcHVibGlzaGVyIl19LCJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6Im9wZW5pZCBlbWFpbCBwcm9maWxlIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsIm5hbWUiOiJKYWNvYiBEZXVjaGVydCIsInByZWZlcnJlZF91c2VybmFtZSI6ImouZGV1Y2hlcnRAbmFyei5uZXQiLCJnaXZlbl9uYW1lIjoiSmFjb2IiLCJsb2NhbGUiOiJkZSIsImZhbWlseV9uYW1lIjoiRGV1Y2hlcnQiLCJlbWFpbCI6ImouZGV1Y2hlcnRAbmFyei5uZXQifQ.JuX0n1hqRmJ9hdFRRhvGgDxXak_oA2yeU4Ds8IQsFd31yNnERC3U8IEUwkNSYe1T1edj9pmu8VavRTMF7HrOUgZTP431fJjCGZPpdg1JBuR49af5e0YEmwjKeFJNt0ZUzCJVWqVcvQpVSLz4LjnATvRPQo9qIRg7P5F-rqNQuU_lJTPblPAX_LTiPkE5zEY87NcpI8rn13FN9iBe_orqm6-4UQ0505Yp_aPQyK0lbjWhA09rRdxW76k0ZBh0Kdp585zVmvwmsbDzXg2tFE2o_6saXItvwlGvvz_J_Frt3lHJz_yDtdDe-EgeKpZ1Zp6z-edjsSRAwtrLOmpwQB87PA';

container.register('TenantHttpService', {
    useValue: new TenantHttpService(config, token)
});


registerCustomElements();

