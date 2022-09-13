import type { TextOption } from '@/shared/components/select/SelectTypes';
import { LitElement } from 'lit';
export declare class SelectWebComponent extends LitElement {
    multiple: boolean;
    options: TextOption[];
    static styles: (CSSStyleSheet | import("lit").CSSResult)[];
    constructor();
    render(): any;
}
