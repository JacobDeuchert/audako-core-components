export declare type Position = {
    x: number;
    y: number;
};
export declare type PopupOptions = {
    backdrop: boolean;
    closeOnClickOutside: boolean;
    positioning: 'center' | 'anchor' | 'custom';
    customPosition?: Position;
    anchorElement?: HTMLElement | null;
    anchorVertical?: 'top' | 'bottom';
    anchorHorizontal?: 'left' | 'right';
    defaultClassList?: string;
    inTransitionClassList?: string;
    inTransitionDuration?: number;
    outTransitionClassList?: string;
    outTransitionDuration?: number;
};
export declare type PopupRef = {
    popupId: string;
    afterClosed: Promise<void>;
    close: () => void;
};
export declare class PopupService {
    private _popupContainer;
    private rootElement;
    constructor(rootElement: HTMLElement);
    openPopup(containerId: string, popupElement: HTMLElement, options?: PopupOptions): PopupRef;
    private _removePopupWrapper;
    private _removeContainer;
    private _createPopupContainer;
    private _createPopupWrapper;
    private _positionPopup;
    private _getTopPosition;
    private _getLeftPosition;
}
