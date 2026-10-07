<script lang="ts">
import PopupContainer from '../popup-container/PopupContainer.svelte';
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
  positionOffset = { x: 0, y: 10 },
  container$class = '',
  closeOnClick = true,
  items = [],
}: Props = $props();

const anchorElement = $derived(anchorSelector ? (document.querySelector(anchorSelector) as HTMLElement) : null);

let popupContainer: PopupContainer;

export function openMenu(): void {
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
  <div class="menu {container$class}">
    {#each items as item}
      <MenuItemComponent label={item.label} icon={item.icon} onclick={(e) => item.action(e)} />
    {/each}
  </div>
</PopupContainer>

<style>
.menu {
  border-radius: 4px;
  background-color: #ffffff;
  box-shadow: var(--shadow-lg);
}
</style>
