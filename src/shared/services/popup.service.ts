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
  closeOnEscape?: boolean;
  positioning: 'center' | 'anchor' | 'custom';
  // 'custom': the popup's top left corner. 'anchor': y is the gap between
  // anchor and popup, x shifts the popup sideways.
  customPosition?: Position;
  anchorElement?: HTMLElement | null;
  // 'top' puts the popup's top edge at the anchor, so it opens below it;
  // 'bottom' opens above. Either flips when the other side has more room.
  anchorVertical?: 'top' | 'bottom';
  // Which edges of popup and anchor line up.
  anchorHorizontal?: 'left' | 'right';
  defaultClassList?: string;
  inTransitionClassList?: string;
  inTransitionDuration?: number;
  outTransitionClassList?: string;
  outTransitionDuration?: number;
}

// Distance popups keep from the viewport edges.
const VIEWPORT_MARGIN = 8;

const defaultOptions: PopupOptions = {
  backdrop: true,
  positioning: 'center',
  closeOnClickOutside: true,
  closeOnEscape: true,
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

  private rootElement: HTMLElement | ShadowRoot;

  constructor(rootElement: HTMLElement | ShadowRoot) {
    this.rootElement = rootElement;
    this._popupContainer = {};
  }

  public openPopup(containerId: string, popupElement: HTMLElement, options?: PopupOptions): PopupRef {
    
    options = { ...defaultOptions, ...options };


    const popupId = uuidv4();

    const popupClosed = new Subject<void>();

    const container = this._popupContainer[containerId] ?? this._createPopupContainer(containerId, options);
    const popupWrapper = this._createPopupWrapper(popupElement, options);

    if (options.inTransitionClassList) {
      popupWrapper.style.transition = `all ${options.inTransitionDuration ?? 100}ms`;
      popupWrapper.classList.add(options.inTransitionClassList);
    }

    container.appendChild(popupWrapper);

    let closeOnEscapeRef = null;
    let closed = false;

    // Positioned again whenever its size changes (fonts and async content
    // settle after opening) and when the anchor moves with the page.
    const position = () => this._positionPopup(container, popupWrapper, options);
    const repositionOnScroll = (event: Event) => {
      if (!event.composedPath().includes(popupWrapper)) {
        position();
      }
    };
    const resizeObserver = new ResizeObserver(position);

    const close = () => {
      if (closed) {
        return;
      }
      closed = true;
      resizeObserver.disconnect();
      window.removeEventListener('resize', position);
      window.removeEventListener('scroll', repositionOnScroll, true);
      this._removePopupWrapper(popupWrapper, options);
      popupClosed.next(null);
      popupClosed.complete();
      document.removeEventListener('keydown', closeOnEscapeRef);
    }


    closeOnEscapeRef = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        close();
      }
    }
    


    if (options.closeOnClickOutside) {
      container.addEventListener('click', (e) => {
        if (e.target === container) {
          close();
        }
      });
    }

    if (options.closeOnEscape) {
      document.addEventListener('keydown',  closeOnEscapeRef);
    }


    position();
    resizeObserver.observe(popupWrapper);
    window.addEventListener('resize', position);
    window.addEventListener('scroll', repositionOnScroll, true);

    popupElement.style.visibility = 'visible';

    if (options.inTransitionClassList) {
      popupElement.classList.add(options.inTransitionClassList);
      popupElement.style.transition = `all ${options.inTransitionDuration ?? 100}ms`;
    }

    const popupRef = {
      popupId: popupId,
      afterClosed: firstValueFrom(popupClosed),
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
    this._popupContainer[id]?.remove();

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
    const style = popupWrapper.style;
    style.position = 'absolute';

    if (options.positioning === 'center') {
      style.top = '50%';
      style.left = '50%';
      style.transform = 'translate(-50%, -50%)';
      return;
    }

    const viewport = containerElement.getBoundingClientRect();

    // Measured at the origin, where nothing narrows it.
    style.top = '0px';
    style.left = '0px';
    style.removeProperty('--popup-max-height');
    const { width } = popupWrapper.getBoundingClientRect();
    let { height } = popupWrapper.getBoundingClientRect();

    const offset = options.customPosition ?? { x: 0, y: 0 };
    let top = offset.y;
    let left = offset.x;

    const anchor = options.positioning === 'anchor' ? options.anchorElement?.getBoundingClientRect() : null;

    if (anchor) {
      const gap = offset.y;
      const spaceBelow = viewport.height - VIEWPORT_MARGIN - anchor.bottom - gap;
      const spaceAbove = anchor.top - gap - VIEWPORT_MARGIN;

      const preferBelow = options.anchorVertical !== 'bottom';
      const preferredSpace = preferBelow ? spaceBelow : spaceAbove;
      const otherSpace = preferBelow ? spaceAbove : spaceBelow;
      // The preferred side when the popup fits there, else the roomier one.
      const usePreferred = height <= preferredSpace || preferredSpace >= otherSpace;
      const below = usePreferred ? preferBelow : !preferBelow;

      // Too tall for either side: cap it at the room there is, so its own
      // content scrolls (PopupSurface reads the variable).
      const space = below ? spaceBelow : spaceAbove;
      if (height > space) {
        style.setProperty('--popup-max-height', `${Math.max(space, 0)}px`);
        height = popupWrapper.getBoundingClientRect().height;
      }

      top = below ? anchor.bottom + gap : anchor.top - gap - height;
      left = (options.anchorHorizontal === 'right' ? anchor.right - width : anchor.left) + offset.x;
    }

    style.top = `${clamp(top, VIEWPORT_MARGIN, viewport.height - VIEWPORT_MARGIN - height)}px`;
    style.left = `${clamp(left, VIEWPORT_MARGIN, viewport.width - VIEWPORT_MARGIN - width)}px`;
  }
}

// Keeps a popup inside the viewport; one larger than the viewport sticks to
// the top or left edge.
function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(value, max));
}
