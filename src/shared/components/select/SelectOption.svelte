<script lang="ts">
import type { Subject } from 'rxjs';
import { getContext, onMount, type Snippet } from 'svelte';
import type { Writable } from 'svelte/store';
import Checkbox from '../checkbox/Checkbox.svelte';

interface Props {
  value?: any;
  children?: Snippet;
}

let { value = null, children }: Props = $props();

let isSelected = $state(false);
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

</script>

<div
  class="option"
  class:selected={isSelected && !multiple}
  part="option {isSelected && !multiple ? 'option-selected' : ''}"
  onclick={onClickOption}
>
  {#if isSelected && !multiple}
    <div class="marker"></div>
  {/if}
  {#if multiple}
    <Checkbox readonly checked={isSelected} />
  {/if}
  <span bind:this={labelElement}>
    {@render children?.()}
  </span>
</div>

<style>
.option {
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 10px;
  border-radius: var(--radius-control);
  font-size: var(--text-cell);
  cursor: pointer;
}

.option.selected {
  background-color: var(--color-neutral-hover);
}

@media (hover: hover) {
  .option:hover {
    background-color: var(--color-neutral-hover);
  }
}

.marker {
  position: absolute;
  top: 50%;
  left: 0;
  height: 20px;
  width: 3px;
  translate: 0 -50%;
  border-radius: 9999px;
  background-color: var(--color-primary);
}
</style>

