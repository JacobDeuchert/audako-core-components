import { container, InjectionToken } from 'tsyringe';

export function resolveService<T>(service: InjectionToken<T>): T {
    try {
        return container.resolve(service);
    } catch {
        if (window[service?.toString()]) {
            return window[service?.toString()] as T;
        }

        throw new Error(`Service ${service.toString()} not found`);
    }
  
}
