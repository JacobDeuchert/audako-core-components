<script lang="ts">
import { Subject } from 'rxjs';

import { createEventDispatcher, setContext } from 'svelte';
import { Writable, writable } from 'svelte/store';
import { onDestroy } from 'svelte';
import PopupContainer from '../popup-container/PopupContainer.svelte';

export let value: any | any[] = null;
export let multiple: boolean = false;

export let placeholder: string = null;
export let textfield$class: string = '';
export let container$class: string = '';
export let suffixIcon$class: string = '';

export let disabled: boolean = false;

let displayedValue: string = '';

let textfield: HTMLInputElement;
let popupContainer: PopupContainer;

let eventDispatcher = createEventDispatcher();

let valueStore = writable(value);
const valueUnsubscribe = valueStore.subscribe((storeValue) => {
  value = storeValue;
  console.log('Select Value', value);
});

// create seperate subject to listen to changes from the select only
let valueChanged: Subject<any | any[]> = new Subject<any | any[]>();
const valueChangedSubscruption = valueChanged.subscribe((value) => {
  eventDispatcher('valueChanged', value);
});

let displayValueStore = writable<string | string[]>(multiple ? [] : '');

let displayValueUnsubscribe = displayValueStore.subscribe((value) => {
  console.log('displayValueStore', value);
  setDisplayedValue(value);
});

function openMenu(e?: MouseEvent) {
  console.log('open menu');
  if (e) {
    e.preventDefault();
    e.stopPropagation();
  }

  if (disabled) {
    return;
  }

  popupContainer?.openPopup();
}

function setDisplayedValue(value: string | string[]): void {
  if (Array.isArray(value)) {
    displayedValue = value.join(',');
  } else {
    displayedValue = value;
  }
}

setContext('audako:select:multiple', multiple);
setContext<Writable<any | any[]>>('audako:select:value', valueStore);
setContext<Subject<any | any[]>>('audako:select:value:changed', valueChanged);
setContext<Writable<string | string[]>>('audako:select:displayValue', displayValueStore);
setContext<() => void>('audako:select:close', () => popupContainer.closePopup());

onDestroy(() => {
  valueUnsubscribe();
  valueChangedSubscruption.unsubscribe();
  displayValueUnsubscribe();
});
</script>

<div class="flex items-center w-full focus-within:border-blue-300 border-gray-500 border-b-2 p-1 relative {container$class}">
  <slot name="prefix" />
  <input
    {disabled}
    {placeholder}
    readonly
    bind:value={displayedValue}
    bind:this={textfield}
    on:click={openMenu}
    class="w-full outline-none {textfield$class}"
  />

  <div class="material-symbols-rounded absolute right-1 pointer-events-none cursor-pointer text-md top-2 {suffixIcon$class}">
    arrow_drop_down
  </div>
</div>
<!-- <Textfield disabled="{disabled}" input$placeholder={placeholder} bind:value="{displayedValue}" readonly={true} class="{textfield$class}" input$class="text-ellipsis" on:click="{openMenu}" bind:this={textfield}>
      <slot name="prefix"></slot>
    </Textfield> -->

<PopupContainer sizeToAnchor={true} popupClass="max-h-[400px] " anchorElement={textfield} bind:this={popupContainer}>
  <slot />
</PopupContainer>
