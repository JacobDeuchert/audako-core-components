<script lang="ts">
import { tw as defaultTw, type TWCallable} from 'twind';
import PopupContainer from '../popup-container/PopupContainer.svelte';
import MenuItemComponent from './MenuItemComponent.svelte';
import type { MenuItem } from './MenuTypes';

export let anchorSelector: string;
export let preferedVerticalAlignment: 'top' | 'bottom' = 'top';
export let preferedHorizontalAlignment: 'left' | 'right' = 'left';
export let positionOffset: { x: number; y: number } = { x: 0, y: 10 };
export let container$class: string;
export let tw: TWCallable = defaultTw;
export let closeOnClick = true;
export let items: MenuItem[] = [];

let anchorElement: HTMLElement;
$: {
  
  anchorElement = document.querySelector(anchorSelector);
  console.log('anchorSelector', anchorSelector, anchorElement);
}



let popupContainer: PopupContainer;

export function openMenu(): void {
  console.log('openMenu', anchorElement, items);
  popupContainer.openPopup();
  
}

export function closeMenu(): void {
  popupContainer.closePopup();
}
</script>

<PopupContainer {closeOnClick} bind:anchorElement bind:this={popupContainer} bind:preferedHorizontalAlignment bind:preferedVerticalAlignment position={positionOffset}>
  
  <div class="{tw`bg-white rounded shadow-lg ${container$class}`}">
    {#each items as item}
      <MenuItemComponent {tw} label={item.label} icon={item.label} on:click={(e) => item.action(e)}>
      </MenuItemComponent>
    {/each}
  </div>

</PopupContainer>