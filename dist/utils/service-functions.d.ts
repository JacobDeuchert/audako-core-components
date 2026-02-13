import { type DependencyContainer, type InjectionToken } from 'tsyringe';
export declare function resolveService<T>(serviceToken: InjectionToken<T>, defaultValue?: T): T;
export declare function tryResolveService<T>(serviceToken: InjectionToken<T>, defaultValue?: T): T;
export declare function tryRegisterService<T>(token: InjectionToken<T>, instance: T, overwrite?: boolean): T;
export declare function setGlobalDependencyContainer(dependencyContainer: DependencyContainer): void;
