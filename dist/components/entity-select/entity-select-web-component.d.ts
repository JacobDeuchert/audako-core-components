export declare class EntitySelectWebComponent extends HTMLElement {
    private _element;
    private _shadowRoot;
    constructor();
    connectedCallback(): void;
    attributeChangedCallback(name: string, oldValue: string, newValue: string): void;
    disconnectedCallback(): void;
    private _trySetupEntitySelect;
    private _isValidEntityType;
}
