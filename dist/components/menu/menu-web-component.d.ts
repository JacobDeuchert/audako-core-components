import { LitElement } from 'lit';
import type { MenuItem as MenuItem } from '@/shared/components/menu/MenuTypes';
export declare class MenuWebComponent extends LitElement {
    items: MenuItem[];
    closeOnClick: boolean;
    container$class: string;
    anchorSelector: string;
    static styles: (CSSStyleSheet | import("lit").CSSResult)[];
    private _menu;
    constructor();
    render(): any;
    createRenderRoot(): this;
    openMenu(): void;
    closeMenu(): void;
    disconnectedCallback(): void;
}
