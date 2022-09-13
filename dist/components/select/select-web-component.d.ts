import type { TextOption } from '@/shared/components/select/SelectTypes';
import { LitElement } from 'lit';
export declare class SelectWebComponent extends LitElement {
    multiple: boolean;
    options: TextOption[];
    container$class: string;
    textfield$class: string;
    suffix$class: string;
    static styles: (CSSStyleSheet | import("lit").CSSResult)[];
    private _select;
    constructor();
    render(): any;
    disconnectedCallback(): void;
}
