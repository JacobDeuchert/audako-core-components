import { EntityType } from 'audako-core';
import { LitElement } from 'lit';
export declare class EntitySelectWebComponent extends LitElement {
    private _element;
    entityType: EntityType;
    multiple: boolean;
    static styles: (CSSStyleSheet | import("lit").CSSResult)[];
    constructor();
    render(): HTMLDivElement;
    private _trySetupEntitySelect;
    private _isValidEntityType;
}
