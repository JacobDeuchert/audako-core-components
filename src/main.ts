import { DataSourceHttpService, EntityHttpService, EntityNameService, HistoricalValueService, type HttpConfig, LiveValueService, TenantHttpService } from 'audako-core';
import type { Observable } from 'rxjs';
import { container } from 'tsyringe';
import { EntitySelectDialogService } from './components/entity-select/entity-select-dialog.service';
import { EntitySelectWebComponent } from './components/entity-select/entity-select-web-component';
import { SelectWebComponent } from './components/select/select-web-component';
import { TenantSelectWebComponent } from './components/tenant-select/tenant-select-web-component';
import { ThemingService } from './shared/services/theming.service';
import { resolveService, tryRegisterService } from './utils/service-functions';
import { MenuWebComponent } from './components/menu/menu-web-component';
export { resolveService, tryRegisterService } from './utils/service-functions';
export type { TextOption } from './shared/components/select/SelectTypes';
export type { MenuItem } from './shared/components/menu/MenuTypes';
export const EntitySelect = EntitySelectWebComponent;
export const TenantSelect = TenantSelectWebComponent;

export {EntitySelectDialogService} from './components/entity-select/entity-select-dialog.service';

export function registerCustomElements() {
  _defineCustomElement('audako-entity-select', EntitySelect);
  _defineCustomElement('audako-tenant-select', TenantSelect);
  _defineCustomElement('audako-select', SelectWebComponent);
  _defineCustomElement('audako-menu', MenuWebComponent);

  resolveService(ThemingService, new ThemingService()).createTwindContext(true);
}

export function registerCoreServices(httpConfig: HttpConfig, accessToken: string | Promise<string> | Observable<string>): void {
  const entityHttpService = new EntityHttpService(httpConfig, accessToken)
  
  tryRegisterService(LiveValueService, new LiveValueService(httpConfig, accessToken));
	tryRegisterService(EntityHttpService, entityHttpService);
	tryRegisterService(TenantHttpService, new TenantHttpService(httpConfig, accessToken));
	tryRegisterService(EntityNameService, new EntityNameService(entityHttpService));
	tryRegisterService(DataSourceHttpService, new DataSourceHttpService(httpConfig, accessToken));
  tryRegisterService(EntitySelectDialogService, new EntitySelectDialogService());
  tryRegisterService(HistoricalValueService, new HistoricalValueService(httpConfig, accessToken));
}

function _defineCustomElement(tagName: string, component: any, options?: ElementDefinitionOptions) {
  if (customElements.get(tagName)) {
    return;
  }

  customElements.define(tagName, component, options);
}

// export all from audako-core
export * from 'audako-core';