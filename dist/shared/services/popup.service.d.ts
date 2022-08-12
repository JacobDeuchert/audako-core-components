export declare class PopupService {
    _popupContainer: any;
    rootElement: any;
    constructor(rootElement: any);
    openPopup(containerId: any, popupElement: any, options: any): {
        popupId: any;
        afterClosed: Promise<void>;
        close: () => void;
    };
    _removePopupWrapper(popupWrapper: any, options: any): void;
    _removeContainer(id: any): void;
    _createPopupContainer(id: any, options: any): HTMLDivElement;
    _createPopupWrapper(popupElement: any, options: any): HTMLDivElement;
    _positionPopup(containerElement: any, popupWrapper: any, options: any): void;
    _getTopPosition(y: any, popupHeight: any, containerHeight: any, anchorHeight?: number, anchorVertical?: string): any;
    _getLeftPosition(x: any, popupWidth: any, containerWidth: any, anchorHorizontal?: string): any;
}
