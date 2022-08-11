import TenantSelect from './TenantSelect.svelte';
import css from '../../index.css';

export class TenantSelectWebComponent extends HTMLElement {
  private _element: TenantSelect;

  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: 'open' });

    let style = document.createElement('style');
    console.log(css);

    // @ts-ignore
    style.textContent = css as any;
    shadowRoot.appendChild(style);

    this._element = new TenantSelect({
      target: shadowRoot,
      props: {},
    });
  }

  disconnectedCallback(): void {
    this._element.$destroy();
  }
}
