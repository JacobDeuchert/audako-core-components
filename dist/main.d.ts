import { type HttpConfig } from 'audako-core';
import type { Observable } from 'rxjs';
import { EntitySelectWebComponent } from './components/entity-select/entity-select-web-component';
import { TenantSelectWebComponent } from './components/tenant-select/tenant-select-web-component';
export { resolveService, tryRegisterService } from './utils/service-functions';
export type { TextOption } from './shared/components/select/SelectTypes';
export type { MenuItem } from './shared/components/menu/MenuTypes';
export declare const EntitySelect: typeof EntitySelectWebComponent;
export declare const TenantSelect: typeof TenantSelectWebComponent;
export { EntitySelectDialogService } from './components/entity-select/entity-select-dialog.service';
export declare function registerCustomElements(): void;
export declare function registerCoreServices(httpConfig: HttpConfig, accessToken: string | Promise<string> | Observable<string>): void;
export * from 'audako-core';
