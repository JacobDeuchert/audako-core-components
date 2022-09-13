import { resolveService } from '@/main';
import { ThemingService } from '@/shared/services/theming.service';
import { css, LitElement } from 'lit';
import TenantSelect from './TenantSelect.svelte';

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
export class TenantSelectWebComponent extends LitElement {
  private _element: TenantSelect;

  constructor() {
    super();
  }

  render(): HTMLDivElement {
    const div = document.createElement('div');
    this._createTenantSelect(div);
    return div;
  }

  private _createTenantSelect(element): void {
    this._element = new TenantSelect({
      target: element,
      props: {
        tw: tw
      },
    });
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this._element.$destroy();
  }
}
