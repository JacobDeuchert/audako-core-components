import { InjectionToken } from 'tsyringe';
export declare function resolveService<T>(serviceToken: InjectionToken<T>, defaultValue?: T): T;
export declare function tryRegisterService<T>(token: InjectionToken<T>, instance: T): void;
