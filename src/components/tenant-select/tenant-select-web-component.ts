import TenantSelect from './TenantSelect.svelte';
export class TenantSelectWebComponent extends HTMLElement {
  private _element: TenantSelect;

  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: 'open' });
    this._element = new TenantSelect({
      target: shadowRoot,
      props: {},
    });
  }

  disconnectedCallback(): void {
    this._element.$destroy();
  }
}
