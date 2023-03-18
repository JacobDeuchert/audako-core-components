<script lang="ts">
import type { Subject } from 'rxjs';
import { getContext, onMount } from 'svelte';
import type { Writable } from 'svelte/store';
import { tw } from 'twind';
import Checkbox from '../checkbox/Checkbox.svelte';


export let value = null;

let isSelected = false;
let currentValue: any | any[] = null;
let currentDisplayedValue: string | string[] = null;
let labelElement: HTMLSpanElement;
let optionLabel: string;

const multiple = getContext<boolean>('audako:select:multiple');
const closeMenu = getContext<() => void>('audako:select:close');
const valueStore = getContext<Writable<any | any[]>>('audako:select:value');
const valueChanged = getContext<Subject<any | any[]>>('audako:select:value:changed');
const displayValueStore = getContext<Writable<string | string[]>>('audako:select:displayValue');

onMount(() => {
  optionLabel = labelElement.innerText?.trim();

  displayValueStore.subscribe((value) => {
    currentDisplayedValue = value;
  });

  valueStore.subscribe((selectedValue) => {
    currentValue = selectedValue;

    if (multiple) {
      isSelected = selectedValue?.includes(value);
    } else {
      isSelected = selectedValue === value;
    }

    setDisplayValue();
  });
});

function onClickOption(e: MouseEvent): void {
  e.preventDefault();
  e.stopPropagation();

  let newValue = null;

  if (multiple) {
    if (isSelected) {
      newValue = currentValue.filter((v) => v !== value);
    } else {
      newValue = Array.isArray(currentValue) ? [...currentValue, value] : [value];
    }
  } else {
    newValue = value;
    closeMenu();
  }

  valueStore.set(newValue);
  valueChanged.next(newValue);
}

function setDisplayValue() {
  if (multiple) {
    const displayValue = currentDisplayedValue as string[];
    if (isSelected && !displayValue.includes(optionLabel)) {
      displayValueStore.set([...displayValue, optionLabel]);
    } else if (!isSelected && displayValue.includes(optionLabel)) {
      displayValueStore.set(displayValue.filter((v) => v !== optionLabel));
    }
  } else {
    if (isSelected) {
      displayValueStore.set(optionLabel);
    }
  }
}

let highlightedStyle = 'bg-[rgba(0,0,0,0.1)] shadow-md';
</script>

<div
  class={tw`flex hover:(${highlightedStyle}) items-center ${multiple ? '' : 'pl-3 pb-2 pt-2'} pr-3 cursor-pointer relative rounded-md ${isSelected &&
  !multiple
    ? highlightedStyle
    : ''}`}
  on:click={onClickOption}
>
  {#if isSelected && !multiple}
    <div class={tw`h-[20px] w-[4px] rounded-full bg-primary absolute left-0 top-[50%] translate-y-[-50%]`} />
  {/if}
  {#if multiple}
    <div class={tw`p-1`}>
      <Checkbox tw={tw} bind:checked={isSelected} />
    </div>
  {/if}
  <span bind:this={labelElement}>
    <slot />
  </span>
</div>


<style>
  .hover-highlight:hover {
  background: rgba(0, 0, 0, 0.1) !important;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1) !important;
  backdrop-filter: blur(19.2px) !important;
}

.highlighted {
  background: rgba(0, 0, 0, 0.1) !important;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1) !important;
  backdrop-filter: blur(19.2px) !important;
}
</style>