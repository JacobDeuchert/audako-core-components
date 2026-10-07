<script lang="ts">
import PopupContainer from '../popup-container/PopupContainer.svelte';
import PopupSurface from '../popup-container/PopupSurface.svelte';
import MenuItemComponent from './MenuItemComponent.svelte';
import type { MenuItem } from './MenuTypes';

interface Props {
  anchorSelector: string;
  preferedVerticalAlignment?: 'top' | 'bottom';
  preferedHorizontalAlignment?: 'left' | 'right';
  positionOffset?: { x: number; y: number };
  container$class?: string;
  closeOnClick?: boolean;
  items?: MenuItem[];
}

let {
  anchorSelector,
  preferedVerticalAlignment = 'top',
  preferedHorizontalAlignment = 'left',
  positionOffset = { x: 0, y: 4 },
  container$class = '',
  closeOnClick = true,
  items = [],
}: Props = $props();

// Looked up on open rather than derived: a component created before its
// anchor is in the document would otherwise keep `null` and open unanchored.
let anchorElement: HTMLElement | null = $state(null);

let popupContainer: PopupContainer;

export function openMenu(): void {
  anchorElement = anchorSelector ? document.querySelector<HTMLElement>(anchorSelector) : null;
  popupContainer.openPopup();
}

export function closeMenu(): void {
  popupContainer.closePopup();
}
</script>

<PopupContainer
  {closeOnClick}
  {anchorElement}
  bind:this={popupContainer}
  {preferedHorizontalAlignment}
  {preferedVerticalAlignment}
  position={positionOffset}
>
  <PopupSurface>
    <!-- An item click bubbles up here and closes the menu, unless the item's
         action stops its propagation. Keyboard handling is the items' job. -->
    <!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_static_element_interactions -->
    <div class={container$class} onclick={() => closeMenu()}>
      {#each items as item}
        <MenuItemComponent label={item.label} icon={item.icon} onclick={(e) => item.action?.(e)} />
      {/each}
    </div>
  </PopupSurface>
</PopupContainer>
