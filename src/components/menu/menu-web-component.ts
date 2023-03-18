import { ThemingService } from '@/shared/services/theming.service';
import { resolveService } from '@/utils/service-functions';
import { css, html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import Menu from '../../shared/components/menu/Menu.svelte';
import type { MenuItem as MenuItem } from '@/shared/components/menu/MenuTypes';


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

export class MenuWebComponent extends LitElement {


  @property({attribute: 'items', type: Array})
  declare items: MenuItem[];

  @property({attribute: 'closeonclick', type: Boolean})
  declare closeOnClick: boolean;


  @property({attribute: 'container$class', type: String})
  declare container$class: string;

  @property({attribute: 'anchorselector', type: String})
  declare anchorSelector: string;

  static styles = [styleSheet.target, styles];

  private _menu: Menu;
  constructor() {
    super();
    this.items = [];
  }

  render() {

    console.log('rendering menu', this.anchorSelector);


    this._menu?.$destroy();
    this._menu = new Menu({
      target: document.createElement('div'),
      props: {
        anchorSelector: this.anchorSelector,
        items: this.items,
        container$class: this.container$class
      }
    });    

    return null;
  }

  createRenderRoot() {
    return this;
  }

  public openMenu() {
    this._menu?.openMenu();
  }

  public closeMenu() {
    this._menu?.closeMenu();
  }
  
  disconnectedCallback(): void {
    super.disconnectedCallback();
    this._menu?.$destroy();
  }
}
