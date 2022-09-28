import { container, DependencyContainer, InjectionToken } from 'tsyringe';
import {
  BaseHttpService,
  EntityHttpService,
  EntityNameService,
  TenantHttpService,
  LiveValueService,
  DataSourceHttpService,
} from 'audako-core';

const SERVICE_TOKEN_LOOKUP = {
  [TenantHttpService.toString()]: 'TenantHttpService',
  [DataSourceHttpService.toString()]: 'DataSourceHttpService',
  [EntityHttpService.toString()]: 'EntityHttpService',
  [EntityNameService.toString()]: 'EntityNameService',
  [BaseHttpService.toString()]: 'BaseHttpService',
  [LiveValueService.toString()]: 'LiveValueService',
};

export function resolveService<T>(serviceToken: InjectionToken<T>, defaultValue: T = null): T {
  let stringToken = SERVICE_TOKEN_LOOKUP[serviceToken.toString()] ?? serviceToken.toString();

  let dependencyContainer = (window['dependencyContainer'] as DependencyContainer) ?? container;
  if (dependencyContainer.isRegistered(serviceToken)) {
    return dependencyContainer.resolve(serviceToken);
  } else if (dependencyContainer.isRegistered(stringToken)) {
    return dependencyContainer.resolve(stringToken);
  } else if (window[stringToken]) {
    return window[stringToken] as T;
  } else if (defaultValue) {
    return defaultValue;
  }
  throw new Error(`Service ${stringToken?.toString()} not found`);
}


export function tryResolveService<T>(serviceToken: InjectionToken<T>, defaultValue: T = null): T {
  try {
    return resolveService(serviceToken, defaultValue);
  } catch (e) {
    return defaultValue;
  }
}

export function tryRegisterService<T>(token: InjectionToken<T>, instance: T): T {

  const dependencyContainer = (window['dependencyContainer'] as DependencyContainer) ?? container;

  try {
    if (dependencyContainer.isRegistered(token)) {
      return;
    }

    dependencyContainer.register(token, { useValue: instance });
  } catch {
    throw new Error(`Failed to register service: ${token?.toString()}`);
  }

  return instance;
}
