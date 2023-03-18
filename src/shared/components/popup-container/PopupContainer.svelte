<script lang="ts">
import { type PopupOptions, type PopupRef, PopupService } from '@/shared/services/popup.service';
import { resolveService } from '@/utils/service-functions';
import { tw } from 'twind';


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
let popupElementWrapper: HTMLDivElement;

let popupWidth: number;
let popupHeight: number;

export function openPopup() {

  const popupOptions: PopupOptions= {
    backdrop: false,
    closeOnClickOutside: closeOnClick,
    positioning: sizeToAnchor ? 'anchor' : 'custom',
    anchorElement: anchorElement,
    customPosition: sizeToAnchor ? positionOffset : position,
    anchorHorizontal: preferedHorizontalAlignment,
    anchorVertical: preferedVerticalAlignment,
  }

  document.body.appendChild(popupElement);
  popupElement.style.display = 'block';
  
  console.log(popupElement.getBoundingClientRect(), popupElement);

  const anchorWidth = anchorElement?.offsetWidth;
  const popupWidth = popupElement.offsetWidth;

  
  if (anchorWidth && sizeToAnchor && popupWidth < anchorWidth) {
    console.log('setting width');
    popupElement.style.width = `${anchorWidth}px`;
  }

  popupElement.style.position = 'static';

  popupRef = popupContainerService.openPopup('popup-container', popupElement, popupOptions);

  popupRef.afterClosed.then(() => {
    resetStyle();
    popupElementWrapper.appendChild(popupElement);
    
    // console.log('closing popup', popupElement);
    console.log('closing popup', popupElement.getBoundingClientRect());
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

<div class="popup-element-wrapper" style="position: absolute" bind:this={popupElementWrapper}>
  <div
    style="display: none"
    class={tw` absolute p-1 flex-col max-h-[400px] shadow-lg overflow-y-auto overflow-x-hidden bg-surface rounded-md border-surface-border border ${popupClass}`}
    bind:this={popupElement}
  >
    <slot />
  </div>
</div>
