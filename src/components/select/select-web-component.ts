import type { TextOption } from '@/shared/components/select/SelectTypes';
import { ThemingService } from '@/shared/services/theming.service';
import { resolveService } from '@/utils/service-functions';
import { css, html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { create, cssomSheet, TWCallable } from 'twind';
import Select from '../../shared/components/select/Select.svelte';


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

export class SelectWebComponent extends LitElement {

  @property({attribute: 'multiple', type: Boolean})
  declare multiple: boolean;

  @property({attribute: 'options', type: Array, hasChanged: (oldValue, newValue) => {
    console.log(oldValue, newValue);
    return oldValue !== newValue;
  }})
  declare options: TextOption[];


  static styles = [styleSheet.target, styles];

  private _select: Select;
  constructor() {
    super();
    this.multiple = false;
    this.options = [];
  }

  render() {
    const div = document.createElement('div');
    
    this._select = new Select({
      target: this.shadowRoot,
      props: {
        multiple: this.multiple,
        options: this.options,
        tw: tw
      }
    });    

    this._select.$on('valueChanged', (event: CustomEvent) => {
      console.log(event);

      this.dispatchEvent(new CustomEvent('valueChanged', {
        detail: event.detail
      }));
    });

    return null;
  }
  
  disconnectedCallback(): void {
    super.disconnectedCallback();
    this._select?.$destroy();

  }
}
