import { container, DependencyContainer, InjectionToken } from 'tsyringe';
import { BaseHttpService, EntityHttpService, EntityNameService, TenantHttpService } from 'audako-core';

const SERVICE_TOKEN_LOOKUP = {
  [TenantHttpService.toString()]: 'TenantHttpService',
  [EntityHttpService.toString()]: 'EntityHttpService',
  [EntityNameService.toString()]: 'EntityNameService',
  [BaseHttpService.toString()]: 'BaseHttpService',
};

export function resolveService<T>(service: InjectionToken<T>, defaultValue?: T): T {
  let windowContainer = window['dependencyContainer'] as DependencyContainer;
  let token: InjectionToken<T> = SERVICE_TOKEN_LOOKUP[service.toString()] ?? service;

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

    if (defaultValue) {
      return defaultValue;
    }

    throw new Error(`Service ${token?.toString()} not found`);
  }
}

export function tryRegisterService<T>(token: InjectionToken<T>, instance: T): void {

  try {
    if (container.isRegistered(token)) {
      return;
    }

    container.register(token, {useValue: instance})
  }
  catch {
    throw new Error(`Failed to register service: ${token?.toString()}`);
  }
}
