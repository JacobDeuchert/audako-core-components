import { DataSourceHttpService, EntityHttpService, EntityNameService, HttpConfig, LiveValueService, TenantHttpService } from 'audako-core';
import { EntitySelectDialogService } from './components/entity-select/entity-select-dialog.service';
import { EntitySelectWebComponent } from './components/entity-select/entity-select-web-component';
import { TenantSelectWebComponent } from './components/tenant-select/tenant-select-web-component';
import { tryRegisterService } from './utils/service-functions';
export { resolveService, tryRegisterService } from './utils/service-functions';
export const EntitySelect = EntitySelectWebComponent;
export const TenantSelect = TenantSelectWebComponent;

export {EntitySelectDialogService} from './components/entity-select/entity-select-dialog.service';

export function registerCustomElements() {
  _defineCustomElement('audako-entity-select', EntitySelect);
  _defineCustomElement('audako-tenant-select', TenantSelect);
}

export function registerCoreServices(httpConfig: HttpConfig, accessToken: string | Promise<string>): void {
  const entityHttpService = new EntityHttpService(httpConfig, accessToken)
  
  tryRegisterService(LiveValueService, new LiveValueService(httpConfig, accessToken));
	tryRegisterService(EntityHttpService, entityHttpService);
	tryRegisterService(TenantHttpService, new TenantHttpService(httpConfig, accessToken));
	tryRegisterService(EntityNameService, new EntityNameService(entityHttpService));
	tryRegisterService(DataSourceHttpService, new DataSourceHttpService(httpConfig, accessToken));
  tryRegisterService(EntitySelectDialogService, new EntitySelectDialogService());

}

function _defineCustomElement(tagName: string, component: any) {
  if (customElements.get(tagName)) {
    return;
  }

  customElements.define(tagName, component);
}


// export all from audako-core
export * from 'audako-core';