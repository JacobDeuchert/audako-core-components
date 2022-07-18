import {container, DependencyContainer, InjectionToken} from 'tsyringe';
import { BaseHttpService, EntityHttpService, EntityNameService, TenantHttpService } from 'audako-core';

const SERVICE_TOKEN_LOOKUP = {
    [TenantHttpService.toString()]:  'TenantHttpService',
    [EntityHttpService.toString()]:  'EntityHttpService',
    [EntityNameService.toString()]:  'EntityNameService',
    [BaseHttpService.toString()]:  'BaseHttpService',
}

export function resolveService<T>(service: InjectionToken<T>): T {
  let windowContainer = window['dependencyContainer'] as DependencyContainer;
  let token: InjectionToken<T> = SERVICE_TOKEN_LOOKUP[service.toString()] ?? service;

  console.log(window, windowContainer, token, token.toString());

  try {
    if (windowContainer) {
      return windowContainer.resolve(token);
    } else {
      return container.resolve(token);
    }
  } catch {
    if (window[token?.toString()]) {
      return window[token?.toString()] as T;
    }

    throw new Error(`Service ${token?.toString()} not found`);
  }
}
