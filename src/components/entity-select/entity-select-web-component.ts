import EntitySelect from './EntitySelect.svelte';
import css from 'svelte-material-ui/bare.css';
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

    this._element = new EntitySelect({
      target: shadowRoot,
      props: {},
    });
  }

  disconnectedCallback(): void {
    this._element.$destroy();
  }
}
