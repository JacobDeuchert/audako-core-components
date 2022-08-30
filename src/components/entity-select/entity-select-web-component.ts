import EntitySelect from './EntitySelect.svelte';
import css from '../../index.css';
import { tryRegisterService } from '@/utils/service-functions';
import { PopupService } from '@/shared/services/popup.service';
import { EntityType } from 'audako-core';
export class EntitySelectWebComponent extends HTMLElement {
  private _element: EntitySelect;

  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: 'open' });

    let style = document.createElement('style');
    console.log(css);

    // @ts-ignore
    style.textContent = css as any;
    shadowRoot.appendChild(style);

    tryRegisterService(PopupService, new PopupService(document.body));

    const entityType = this.getAttribute('entityType') as EntityType;
    
    if (!this._isValidEntityType(entityType)) {
      throw new Error(`Invalid entity type: ${entityType}`);
    }

    const selectMultiple = this.getAttribute('selectMultiple') === 'true';
    const additionalFilter = JSON.parse(this.getAttribute('additionalFilter') || '{}');

    this._element = new EntitySelect({
      target: shadowRoot,
      props: {
        entityType,
        selectMultiple,
        additionalFilter,
      },
    });

    this._element.$on('selectedEntities', (entity) => {

      this.dispatchEvent(new CustomEvent('entitySelected', {
        detail: entity.detail,
        bubbles: true,
        cancelable: false,
        composed: true
      }));
    });
  }

  disconnectedCallback(): void {
    this._element.$destroy();
  }

  private _isValidEntityType(entityType: EntityType): boolean {
    return Object.values(EntityType).includes(entityType);
  }
}
