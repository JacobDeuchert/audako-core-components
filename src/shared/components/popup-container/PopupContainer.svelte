<script lang="ts">
import { type PopupOptions, type PopupRef, PopupService } from '@/shared/services/popup.service';
import { resolveService } from '@/utils/service-functions';
import { getPopupRoot, shareComponentStyles } from '@/styles/shadow-styles';
import type { Snippet } from 'svelte';

interface Props {
  closeOnClick?: boolean;
  closeOnEscape?: boolean;
  sizeToAnchor?: boolean;
  anchorElement?: HTMLElement;
  position?: { x: number; y: number };
  popupClass?: string;
  preferedVerticalAlignment?: 'top' | 'bottom';
  preferedHorizontalAlignment?: 'left' | 'right';
  positionOffset?: { x: number; y: number };
  children?: Snippet;
}

let {
  closeOnClick = true,
  closeOnEscape = true,
  sizeToAnchor = false,
  anchorElement = null,
  position = null,
  popupClass = '',
  preferedVerticalAlignment = 'top',
  preferedHorizontalAlignment = 'left',
  positionOffset = { x: 0, y: 4 },
  children,
}: Props = $props();

let popupContainerService = resolveService<PopupService>('PopupContainerService', new PopupService(getPopupRoot()));

let popupElement: HTMLDivElement;
let popupRef: PopupRef;
let popupElementWrapper: HTMLDivElement;

export function openPopup() {
  const popupOptions: PopupOptions = {
    backdrop: false,
    closeOnClickOutside: closeOnClick,
    closeOnEscape: closeOnEscape,
    positioning: anchorElement ? 'anchor' : 'custom',
    anchorElement: anchorElement,
    customPosition: sizeToAnchor ? positionOffset : position,
    anchorHorizontal: preferedHorizontalAlignment,
    anchorVertical: preferedVerticalAlignment,
  };

  // Measured inside the popup root so it is sized with the component styles,
  // which have to follow the content there.
  shareComponentStyles(popupElementWrapper, getPopupRoot());
  getPopupRoot().appendChild(popupElement);
  popupElement.style.display = 'block';

  const anchorWidth = anchorElement?.offsetWidth;
  const popupWidth = popupElement.offsetWidth;

  if (anchorWidth && sizeToAnchor && popupWidth < anchorWidth) {
    popupElement.style.width = `${anchorWidth}px`;
  }

  popupElement.style.position = 'static';

  popupRef = popupContainerService.openPopup('popup-container', popupElement, popupOptions);

  popupRef.afterClosed.then(() => {
    resetStyle();
    popupElementWrapper.appendChild(popupElement);
  });
}

export function closePopup() {
  popupRef?.close();
}

function resetStyle() {
  popupElement.style.display = 'none';
  popupElement.style.position = 'absolute';
  popupElement.style.width = 'auto';
}
</script>

<!-- Positioning and layering only; the content brings its own surface
     (usually PopupSurface). -->
<div class="popup-element-wrapper" style="position: absolute" bind:this={popupElementWrapper}>
  <div style="display: none" class="popup {popupClass}" bind:this={popupElement}>
    {@render children?.()}
  </div>
</div>

<style>
.popup {
  position: absolute;
}
</style>
