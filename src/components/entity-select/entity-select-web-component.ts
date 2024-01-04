import EntitySelect from './EntitySelect.svelte';
import { resolveService, tryRegisterService } from '@/utils/service-functions';
import { PopupService } from '@/shared/services/popup.service';
import { EntityType } from 'audako-core';
import { css, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { ThemingService } from '@/shared/services/theming.service';

const {tw, styleSheet}= resolveService(ThemingService, new ThemingService()).createTwindContext();

const styles = css`
  .material-symbols-rounded {
    font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 100, 'opsz' 48;
    font-family: 'Material Symbols Rounded';
    font-weight: normal;
    font-style: normal;
    font-size: 24px;
    line-height: 1;
    letter-spacing: normal;
    text-transform: none;
    display: inline-block;
    white-space: nowrap;
    word-wrap: normal;
    direction: ltr;
  }
`


export class EntitySelectWebComponent extends LitElement {
  private _element: EntitySelect;

  @property({type: String, attribute: 'entitytype'})
  declare entityType: EntityType;

  @property({type: Boolean, attribute: 'multiple'})
  declare multiple: boolean;

  static styles = [styleSheet.target, styles];

  constructor() {
    super();
    tryRegisterService(PopupService, new PopupService(document.body));
  }

  render() {
    this._element?.$destroy();
    const div = document.createElement('div');
    div.style.width = '100%';
    div.style.height = '100%';
    div.style.overflow = 'hidden';

    this._trySetupEntitySelect(this.shadowRoot);

    return div;
  }

  private _trySetupEntitySelect(target: any): void {
    console.log('SETUP HELLOOO');
    
    if (!this._isValidEntityType(this.entityType)) {
      return;
    }

    const selectMultiple = this.getAttribute('multiple') === 'true' || this.multiple;
    const additionalFilter = JSON.parse(this.getAttribute('filter') || '{}');

    this._element = new EntitySelect({
      target: target,
      props: {
        entityType: this.entityType,
        selectMultiple,
        additionalFilter,
        tw: tw
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
