import {container, DependencyContainer, InjectionToken} from 'tsyringe';

export function resolveService<T>(service: InjectionToken<T>): T {
  let windowContainer = window['dependencyContainer'] as DependencyContainer;

  try {
    if (windowContainer) {
      return windowContainer.resolve(service);
    } else {
      return container.resolve(service);
    }
  } catch {
    if (window[service?.toString()]) {
      return window[service?.toString()] as T;
    }

    throw new Error(`Service ${service.toString()} not found`);
  }
}
