import { TenantHttpService, EntityHttpService, EntityNameService } from 'audako-core';
import {PopupService} from '../src/shared/services/popup.service';
import 'reflect-metadata';
import { container } from 'tsyringe';
import { registerCustomElements } from '../src/main';

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
let access_token ='eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJjVTQtRzFpOFRENEJFOWI0RU8xeFZhSjdlUFRaeWx1NWFYNjFxRDF2MjZJIn0.eyJleHAiOjE2NjE5MTE5ODksImlhdCI6MTY2MTg4MzE4OSwiYXV0aF90aW1lIjoxNjYxODgzMTg5LCJqdGkiOiI3ODExNGFkMi02NmU2LTQ5MDAtYThkZi1kMDkzYzdmMGJkOGMiLCJpc3MiOiJodHRwczovL2xvZ2luLmF1ZGFrby5uZXQvYXV0aC9yZWFsbXMvbWFzdGVyIiwiYXVkIjpbImRvY2tlci1yZWdpc3RyeSIsImFjY291bnQiXSwic3ViIjoiYTI5ZjM2NDEtNWVjNC00OWYwLTkzYzItMzc4OTRhOTY1Yzg2IiwidHlwIjoiQmVhcmVyIiwiYXpwIjoid2F0ZXItdWkiLCJub25jZSI6ImJ6RlBSWFoxU1cwNVpWUnFNM1p2ZG0xTFQwbHZjMUExVURRMFExbEpiV0l1ZUVSLVpsWTRWa1JUY1ZFeSIsInNlc3Npb25fc3RhdGUiOiI3YzM3OGQzYS0yOGIxLTQwNmUtOGUyMy1kNTkxOWJiMGEzMGEiLCJhY3IiOiIxIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwidW1hX2F1dGhvcml6YXRpb24iXX0sInJlc291cmNlX2FjY2VzcyI6eyJkb2NrZXItcmVnaXN0cnkiOnsicm9sZXMiOlsiZG9ja2VyLXN1YnNjcmliZXIiLCJkb2NrZXItcHVibGlzaGVyIl19LCJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6Im9wZW5pZCBlbWFpbCBwcm9maWxlIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsIm5hbWUiOiJKYWNvYiBEZXVjaGVydCIsInByZWZlcnJlZF91c2VybmFtZSI6ImouZGV1Y2hlcnRAbmFyei5uZXQiLCJnaXZlbl9uYW1lIjoiSmFjb2IiLCJsb2NhbGUiOiJkZSIsImZhbWlseV9uYW1lIjoiRGV1Y2hlcnQiLCJlbWFpbCI6ImouZGV1Y2hlcnRAbmFyei5uZXQifQ.da40n-ku18mP2ykFHbiKPZJxIpZUvGNRIGYpOqfu3y_oyTvWrJZ_scdKPbOgFyt73JKIZK9MG_2Tk90nMqDZcDqqXYDlH5BbCiHm1tIimR4HMP77r7zVU3blVvWnLzhvco4h70Ei60n7befpAPLk9O6Hb8Uu9Yes69U9NI84aFHB2d9xkKAm0kKx_ANcfj0_4ozpuh8w7JkAORTsIZOd_xTzl6Xb-9QgTFS_TEbdXnzJCgxpo4iM258ojv6lR4YcF6y5ooNLSzwi4Y0KYRcbJJLg2Bw_08112dl6scGcWVu6ahSW3oabVX7jXoJJNFnqo5Q1K6IiTxEEzk0MKHiIMw';

let entityHttpService = new EntityHttpService(httpConfig, access_token);

container.register('TenantHttpService', { useValue: new TenantHttpService(httpConfig, access_token) });
container.register('EntityHttpService', { useValue: entityHttpService });
container.register('EntityNameService', { useValue: new EntityNameService(entityHttpService) });
container.register('PopupContainerService', { useValue: new PopupService(document.body) });

registerCustomElements();


console.log(process?.env);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
