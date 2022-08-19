import { EntitySelectWebComponent } from './components/entity-select/entity-select-web-component';
import { TenantSelectWebComponent } from './components/tenant-select/tenant-select-web-component';
export { resolveService, tryRegisterService } from './utils/service-functions';
export declare const EntitySelect: typeof EntitySelectWebComponent;
export declare const TenantSelect: typeof TenantSelectWebComponent;
export { EntitySelectDialogService } from './components/entity-select/entity-select-dialog.service';
export declare function registerCustomElements(): void;
export * from 'audako-core';
