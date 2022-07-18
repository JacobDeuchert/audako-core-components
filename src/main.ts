import { EntitySelectWebComponent } from './components/entity-select/entity-select-web-component';
import { TenantSelectWebComponent } from './components/tenant-select/tenant-select-web-component';
export const EntitySelect = EntitySelectWebComponent;
export const TenantSelect = TenantSelectWebComponent;

export function registerCustomElements() {
    _defineCustomElement('audako-entity-select', EntitySelect);
    _defineCustomElement('audako-tenant-select', TenantSelect);
}

function _defineCustomElement(tagName: string, component: any) {
    if (customElements.get(tagName)) {
        return;
    }

    customElements.define(tagName, component);
}