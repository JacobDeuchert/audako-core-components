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
let access_token = "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJjVTQtRzFpOFRENEJFOWI0RU8xeFZhSjdlUFRaeWx1NWFYNjFxRDF2MjZJIn0.eyJleHAiOjE2NTgyNzc4MTksImlhdCI6MTY1ODI0OTAxOSwiYXV0aF90aW1lIjoxNjU4MjQ5MDE5LCJqdGkiOiJlNjg0ZmM0Yi0xZWZlLTRmNGUtYjMwMi1lM2JmYTAzYmJlN2YiLCJpc3MiOiJodHRwczovL2xvZ2luLmF1ZGFrby5uZXQvYXV0aC9yZWFsbXMvbWFzdGVyIiwiYXVkIjpbImRvY2tlci1yZWdpc3RyeSIsImFjY291bnQiXSwic3ViIjoiYTI5ZjM2NDEtNWVjNC00OWYwLTkzYzItMzc4OTRhOTY1Yzg2IiwidHlwIjoiQmVhcmVyIiwiYXpwIjoid2F0ZXItdWkiLCJub25jZSI6IlpXeHZiRnBFVm14clZEVjJVbVpMTWxOWFRFZFpiRzEtZG5vdFVGWmhOR2RZVmxKMFptVk9TQzFzT1dKYSIsInNlc3Npb25fc3RhdGUiOiI4YmY4NDkyMC1jMjZhLTRjZjItOTJlNC0xNzkxZmZjNzBlNjYiLCJhY3IiOiIxIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwidW1hX2F1dGhvcml6YXRpb24iXX0sInJlc291cmNlX2FjY2VzcyI6eyJkb2NrZXItcmVnaXN0cnkiOnsicm9sZXMiOlsiZG9ja2VyLXN1YnNjcmliZXIiLCJkb2NrZXItcHVibGlzaGVyIl19LCJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6Im9wZW5pZCBlbWFpbCBwcm9maWxlIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsIm5hbWUiOiJKYWNvYiBEZXVjaGVydCIsInByZWZlcnJlZF91c2VybmFtZSI6ImouZGV1Y2hlcnRAbmFyei5uZXQiLCJnaXZlbl9uYW1lIjoiSmFjb2IiLCJsb2NhbGUiOiJkZSIsImZhbWlseV9uYW1lIjoiRGV1Y2hlcnQiLCJlbWFpbCI6ImouZGV1Y2hlcnRAbmFyei5uZXQifQ.RBh6LLgj-JA1GFLwjEyVmwBOjF6o70RCJF_lI888lFlDJPqe831MDdg1LCnLRacLdfvnJRKRhxlFDj0E5JKLUsNhFe3qsNJGl2Cn2LMsmckda9NcerGcPbPrM9h-6kzJdhlp6yQ39lrVBP-trEKHv5GQLsZ925uCrECp74FUmZIfEJXL7s-NQAPLWVd2e3LoaRSX6lWDxT2Z4tOp7oioCBv7dBCWepTqyZxkJ4UYxbr5VdmA5ihGPgFxb9kscKPtc1d3ARadMLUKpwKTv45D_YPXq8bMteKL7OJyYOr2iUGIzM3KseVcjTlI3z0Vzs-rVbrLeFuGGMWsmkxn3GF5ww";

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
