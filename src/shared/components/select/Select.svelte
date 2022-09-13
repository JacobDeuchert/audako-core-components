<script lang="ts">
import { Subject } from 'rxjs';
import { createEventDispatcher, setContext } from 'svelte';
import { Writable, writable } from 'svelte/store';
import { onDestroy } from 'svelte';
import PopupContainer from '../popup-container/PopupContainer.svelte';
import SelectOption from './SelectOption.svelte';
import type { TextOption } from './SelectTypes';
import { TWCallable, tw as defaultTw} from 'twind';

export let value: any | any[] = null;
export let multiple: boolean = false;

export let placeholder: string = null;
export let textfield$class: string = '';
export let container$class: string = '';
export let suffixIcon$class: string = '';
export let options: TextOption[] = [];
export let tw: TWCallable = defaultTw;

$: {setContext('tw', tw); console.log( 'setcontext', tw)};


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
    displayedValue = value.join(', ');
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

function render(node) {
  console.log('Render', node);
}
</script>

<div use:render class={tw`flex items-center w-full focus-within:border-primary border-gray-500 border-b-2 p-1 relative cursor-pointer ${container$class}`} on:click={openMenu}>
  <slot name="prefix" />
  <input
    {disabled}
    {placeholder}
    readonly
    bind:value={displayedValue}
    bind:this={textfield}
    class={tw`w-full outline-none cursor-pointer ${textfield$class}` }
  />

  <div class={tw`material-symbols-rounded absolute right-1 pointer-events-none cursor-pointer text-md top-2 ${suffixIcon$class}`}>
    arrow_drop_down
  </div>
</div>
<!-- <Textfield disabled="{disabled}" input$placeholder={placeholder} bind:value="{displayedValue}" readonly={true} class="{textfield$class}" input$class="text-ellipsis" on:click="{openMenu}" bind:this={textfield}>
      <slot name="prefix"></slot>
    </Textfield> -->

<PopupContainer sizeToAnchor={true} popupClass="max-h-[400px] " anchorElement={textfield} bind:this={popupContainer}>
  <slot />

  {#each options as option}
    <SelectOption value={option.value}>
      {option.label}
    </SelectOption>
  {/each}
</PopupContainer>