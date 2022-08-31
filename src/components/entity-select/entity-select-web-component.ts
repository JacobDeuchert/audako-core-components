import EntitySelect from './EntitySelect.svelte';
import css from '../../index.css';
import { tryRegisterService } from '@/utils/service-functions';
import { PopupService } from '@/shared/services/popup.service';
import { EntityType } from 'audako-core';
export class EntitySelectWebComponent extends HTMLElement {
  private _element: EntitySelect;

  private _shadowRoot: ShadowRoot;

  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: 'open' });

    let style = document.createElement('style');
    console.log(css);

    // @ts-ignore
    style.textContent = css as any;
    this._shadowRoot.appendChild(style);

    tryRegisterService(PopupService, new PopupService(document.body));
  }

  connectedCallback(): void {
    this._trySetupEntitySelect();
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string): void {

    this._element?.$destroy();
    this._trySetupEntitySelect();
  }

  disconnectedCallback(): void {
    this._element.$destroy();
  }

  private _trySetupEntitySelect(): void {
    const entityType = this.getAttribute('entitytype') as EntityType;
    console.log(entityType);

    if (!this._isValidEntityType(entityType)) {
      return;
    }

    const selectMultiple = this.getAttribute('multiple') === 'true';
    const additionalFilter = JSON.parse(this.getAttribute('filter') || '{}');

    this._element = new EntitySelect({
      target: this._shadowRoot,
      props: {
        entityType,
        selectMultiple,
        additionalFilter,
      },
    });

    this._element.$on('selectedEntities', (entity) => {
      console.log('selectedEntities', entity);

      this.dispatchEvent(
        new CustomEvent('selected', {
          detail: entity.detail,
          bubbles: true,
          composed: true,
        })
      );
    });

    console.log('connectedCallback', this._element);
  }

  private _isValidEntityType(entityType: EntityType): boolean {
    return Object.values(EntityType).includes(entityType);
  }
}
