import type { TextOption } from '@/shared/components/select/SelectTypes';
import { LitElement } from 'lit';
export declare class SelectWebComponent extends LitElement {
    value: string;
    arrayValue: string;
    multiple: boolean;
    options: TextOption[];
    placeholder: string;
    container$class: string;
    textfield$class: string;
    suffix$class: string;
    static styles: (CSSStyleSheet | import("lit").CSSResult)[];
    private _select;
    constructor();
    render(): any;
    disconnectedCallback(): void;
}
