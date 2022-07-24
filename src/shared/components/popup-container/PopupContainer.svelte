<script lang="ts">
import { fromEvent, Subscription } from 'rxjs';

export let closeOnClick = true;
export let sizeToAnchor = false;
export let anchorElement: HTMLElement = null;
export let position: { x: number; y: number } = null;
export let popupClass: string = '';
export let preferedVerticalAlignment: 'top' | 'bottom' = 'top';
export let preferedHorizontalAlignment: 'left' | 'right' = 'left';
export let positionOffset: { x: number; y: number } = { x: 0, y: 0 };

let popupElement: HTMLDivElement;

let closeSubscription: Subscription;
let globalPopupContainer = (document.querySelector('#animator-popup-container') as HTMLDivElement) ?? createPopupContainer();

export function openPopup() {
  setOpenStyle();

  if (closeOnClick) {
    closeSubscription?.unsubscribe();

    closeSubscription = fromEvent(globalPopupContainer, 'click').subscribe((e) => {
      console.log('click', e.target);
      closePopup();
    });
  }
}

export function closePopup() {
  closeSubscription?.unsubscribe();
  setCloseStyle();
}

function setOpenStyle() {
  globalPopupContainer.style.zIndex = '1000';
  globalPopupContainer.appendChild(popupElement);
  popupElement.style.display = 'block';

  if (anchorElement) {
    positionPopupToAnchor();
  } else if (position) {
    positionPopupAtPosition();
  }
}

function setCloseStyle() {
  popupElement.style.display = 'none';
  globalPopupContainer.style.zIndex = '-1';
}

function positionPopupToAnchor() {
  const containerRect = globalPopupContainer.getBoundingClientRect();
  const anchorRect = anchorElement.getBoundingClientRect();

  const popupRect = popupElement.getBoundingClientRect();
  console.log(containerRect, anchorRect, popupRect);

  if (sizeToAnchor) {
    popupElement.style.minWidth = `${anchorRect.width + 8}px`;
  }

  popupElement.style.top = `${
    getTopPosition(anchorRect.top, popupRect.height, containerRect.height, anchorRect.height) + positionOffset.y
  }px`;
  popupElement.style.left = `${getLeftPosition(anchorRect.left - 4, popupRect.width, containerRect.width) + positionOffset.x}px`;
}

function positionPopupAtPosition() {
  const containerRect = globalPopupContainer.getBoundingClientRect();
  const popupRect = popupElement.getBoundingClientRect();

  popupElement.style.top = `${getTopPosition(position.y, popupRect.height, containerRect.height) + positionOffset.y}px`;
  popupElement.style.left = `${getLeftPosition(position.x, popupRect.width, containerRect.width) + positionOffset.x}px`;
}

function getTopPosition(y: number, popupHeight: number, containerHeight: number, anchorHeight: number = 0) {
  if (preferedVerticalAlignment == 'top') {
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

function getLeftPosition(x: number, popupWidth: number, containerWidth: number) {
  if (preferedHorizontalAlignment == 'left') {
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

function createPopupContainer(): HTMLDivElement {
  const selectContainer = document.createElement('div');
  selectContainer.id = 'animator-popup-container';
  selectContainer.classList.add('animator-popup-container');
  document.body.appendChild(selectContainer);
  return selectContainer;
}
</script>

<div
  class="hidden absolute p-1 flex-col max-h-[400px] shadow-lg overflow-y-auto overflow-x-hidden bg-surface rounded-md border-surface-border border {popupClass}"
  bind:this={popupElement}
>
  <slot />
</div>

<style>
:global(.animator-popup-container) {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}
</style>
