import { ApiContext, type AsyncValue, type HttpConfig } from '@audako/core';
export { resolveService, tryRegisterService, setGlobalDependencyContainer } from './utils/service-functions';
export type { TextOption } from './shared/components/select/SelectTypes';
export type { MenuItem } from './shared/components/menu/MenuTypes';
export declare const EntitySelect: CustomElementConstructor;
export declare const TenantSelect: CustomElementConstructor;
export declare const Select: CustomElementConstructor;
export declare const Menu: CustomElementConstructor;
export { EntitySelectDialogService } from './components/entity-select/entity-select-dialog.service';
export declare function registerCustomElements(): void;
/**
 * Registers core's services on one shared ApiContext. Pass a context you
 * already hold, or the config and token to have one built here; the platform
 * version is then detected on the first request.
 */
export declare function registerCoreServices(ctx: ApiContext): void;
export declare function registerCoreServices(httpConfig: HttpConfig, accessToken: AsyncValue<string>): void;
export * from '@audako/core';
