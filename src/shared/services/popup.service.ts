import type { Disposable } from '../types/disposable';
import {v4 as uuidv4} from 'uuid';
import { firstValueFrom, Subject } from 'rxjs';

export type Position = {
  x: number;
  y: number;
}

export type PopupOptions = {
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
}

const defaultOptions: PopupOptions = {
  backdrop: true,
  positioning: 'center',
  closeOnClickOutside: true,
  anchorElement: null,
  customPosition: {
    x: 0,
    y: 0,
  }
}

export type PopupRef = {
  popupId: string;
  afterClosed: Promise<void>;
  close: () => void;
}

type PopupEntry = {
  ref: PopupRef;
  options: PopupOptions;
}

export class PopupService {

  private _popupContainer: {[id: string]: HTMLDivElement};

  private rootElement: HTMLElement;

  constructor(rootElement: HTMLElement) {
    this.rootElement = rootElement;
    this._popupContainer = {};
  }

  public openPopup(containerId: string, popupElement: HTMLElement, options?: PopupOptions): PopupRef {
    
    options = { ...defaultOptions, ...options };

    console.log('openPopup', options);

    const popupId = uuidv4();

    const popupClosed = new Subject<void>();

    const container = this._popupContainer[containerId] ?? this._createPopupContainer(containerId, options);
    const popupWrapper = this._createPopupWrapper(popupElement, options);

    if (options.inTransitionClassList) {
      popupWrapper.style.transition = `all ${options.inTransitionDuration ?? 100}ms`;
      popupWrapper.classList.add(options.inTransitionClassList);
    }

    container.appendChild(popupWrapper);

    const close = () => {
      console.log('close');
      this._removePopupWrapper(popupWrapper, options);
      popupClosed.next(null);
      popupClosed.complete();
    }


    if (options.closeOnClickOutside) {
      container.addEventListener('click', (e) => {
        if (e.target === container) {
          close();
        }
      });
    }


    this._positionPopup(container, popupWrapper, options);

    popupElement.style.visibility = 'visible';

    if (options.inTransitionClassList) {
      popupElement.classList.add(options.inTransitionClassList);
      popupElement.style.transition = `all ${options.inTransitionDuration ?? 100}ms`;
    }

    const popupRef = {
      popupId: popupId,
      afterClosed: firstValueFrom(popupClosed).then(()=> console.log('afterClosed')),
      close: close
    }

    return popupRef;
  }

  private _removePopupWrapper(popupWrapper: HTMLElement, options: PopupOptions): void {
    const popupContainer = popupWrapper.parentElement;

    const removeWrapper = () => {
      popupWrapper.remove();
        if (popupContainer.children.length === 0) {
          this._removeContainer(popupContainer.id);
        }
    }

    if (options.outTransitionClassList) {
      popupWrapper.style.transition = `all ${options.outTransitionDuration ?? 100}ms`;
      popupWrapper.classList.remove(options.inTransitionClassList);
      popupWrapper.classList.add(options.outTransitionClassList);

      setTimeout(() => {
        removeWrapper();
      }, options.outTransitionDuration ?? 100);
    } else {
      removeWrapper();
    }
    
  }

  private _removeContainer(id: string): void {
    const container = document.getElementById(id);
    container.remove();

    this._popupContainer[id] = undefined;
  }

  private _createPopupContainer(id: string, options: PopupOptions): HTMLDivElement {

    const containerIndex = Object.keys(this._popupContainer).length;

    const popupContainer = document.createElement('div');
    popupContainer.id = id;
    popupContainer.classList.add(`${id}`);
    popupContainer.style.position = 'fixed';
    popupContainer.style.top = '0';
    popupContainer.style.left = '0';
    popupContainer.style.width = '100%';
    popupContainer.style.height = '100%';
    popupContainer.style.overflowY = 'hidden';
    popupContainer.style.overflowX = 'hidden';
    popupContainer.style.zIndex = (1000 + containerIndex).toString();

    if (options.backdrop) {
      popupContainer.style.backgroundColor = 'rgba(0,0,0,0.5)';
    }

    this.rootElement.appendChild(popupContainer);
    this._popupContainer[id] = popupContainer;
    return popupContainer;
  }

  private _createPopupWrapper(popupElement: HTMLElement, options: PopupOptions): HTMLElement {
    const popupWrapper = document.createElement('div');
    popupWrapper.classList.add('popup-wrapper');
    popupWrapper.style.position = 'absolute';
    popupWrapper.appendChild(popupElement);
    return popupWrapper;
  }

  private _positionPopup(containerElement: HTMLElement, popupWrapper: HTMLElement, options: PopupOptions): void {
    const popupStyle = popupWrapper.style;

    const containerRect = containerElement.getBoundingClientRect();
    const popupRect  = popupWrapper.getBoundingClientRect();
    const anchorRect = options.anchorElement?.getBoundingClientRect();
    
    popupStyle.position = 'absolute';

    if (options.positioning === 'center') {
      popupStyle.top = '50%';
      popupStyle.left = '50%';
      popupStyle.transform = 'translate(-50%, -50%)';
    } else if (options.positioning === 'anchor') {
      popupWrapper.style.top = `${this._getTopPosition(anchorRect.top, popupRect.height, containerRect.height, anchorRect.height) + (options.customPosition?.y ?? 0)}px`;
      popupWrapper.style.left = `${this._getLeftPosition(anchorRect.left - 4, popupRect.width, containerRect.width) + (options.customPosition?.x ?? 0)}px`;
    } else if (options.positioning === 'custom') {
      popupWrapper.style.top = `${this._getTopPosition(options.customPosition.y, popupRect.height, containerRect.height) + (options.customPosition?.y ?? 0)}px`;
      popupWrapper.style.left = `${this._getLeftPosition(options.customPosition.x, popupRect.width, containerRect.width) + (options.customPosition?.x ?? 0)}px`;
    }
  }

  private _getTopPosition(y: number, popupHeight: number, containerHeight: number, anchorHeight: number = 0, anchorVertical: 'top' | 'bottom' = 'bottom') {
    if (anchorVertical == 'top') {
      if (y + popupHeight + 40 < containerHeight) {
        return y + anchorHeight / 3;
      } else {
        return y - popupHeight + anchorHeight / 3;
      }
    } else {
      if (y - popupHeight > 40) {
        return y - popupHeight + anchorHeight / 3;
      } else {
        return y + anchorHeight / 3;
      }
    }
  }
  
  private _getLeftPosition(x: number, popupWidth: number, containerWidth: number, anchorHorizontal: 'left' | 'right' = 'right') {
    if (anchorHorizontal == 'left') {
      if (x + popupWidth + 40 < containerWidth) {
        return x;
      } else {
        return x + popupWidth;
      }
    } else {
      if (x - popupWidth > 40) {
        return x - popupWidth;
      } else {
        return x + popupWidth;
      }
    }
  }
}
