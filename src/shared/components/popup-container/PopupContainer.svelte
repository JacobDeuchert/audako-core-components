<script lang="ts">
import { PopupOptions, PopupRef, PopupService } from '@/shared/services/popup.service';
import { resolveService } from '@/utils/service-functions';
export let closeOnClick = true;
export let sizeToAnchor = false;
export let anchorElement: HTMLElement = null;
export let position: { x: number; y: number } = null;
export let popupClass: string = '';
export let preferedVerticalAlignment: 'top' | 'bottom' = 'top';
export let preferedHorizontalAlignment: 'left' | 'right' = 'left';
export let positionOffset: { x: number; y: number } = { x: 0, y: 0 };

let popupContainerService = resolveService<PopupService>('PopupContainerService', new PopupService(document.body));

let popupElement: HTMLDivElement;
let popupRef: PopupRef;

export function openPopup() {

  console.log('openPopup');

  const popupOptions: PopupOptions= {
    backdrop: false,
    closeOnClickOutside: closeOnClick,
    positioning: sizeToAnchor ? 'anchor' : 'custom',
    anchorElement: anchorElement,
    customPosition: sizeToAnchor ? positionOffset : position,
    anchorHorizontal: preferedHorizontalAlignment,
    anchorVertical: preferedVerticalAlignment,
  }

  popupElement.style.display = 'block';
  popupRef = popupContainerService.openPopup('popup-container', popupElement, popupOptions);
}

export function closePopup() {
  popupRef?.close();
  popupElement.style.display = 'none';
}

</script>

<div
  class="hidden absolute p-1 flex-col max-h-[400px] shadow-lg overflow-y-auto overflow-x-hidden bg-surface rounded-md border-surface-border border {popupClass}"
  bind:this={popupElement}
>
  <slot />
</div>
