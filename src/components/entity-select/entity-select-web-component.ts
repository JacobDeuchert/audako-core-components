import EntitySelect from './EntitySelect.svelte';
import css from '../../index.css';
import { tryRegisterService } from '@/utils/service-functions';
import { PopupService } from '@/shared/services/popup.service';
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

    this._element = new EntitySelect({
      target: shadowRoot,
      props: {},
    });
  }

  disconnectedCallback(): void {
    this._element.$destroy();
  }
}
