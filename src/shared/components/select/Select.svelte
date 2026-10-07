<script lang="ts">
import { Subject } from 'rxjs';
import { onDestroy, setContext, type Snippet } from 'svelte';
import { type Writable, writable } from 'svelte/store';
import PopupContainer from '../popup-container/PopupContainer.svelte';
import PopupSurface from '../popup-container/PopupSurface.svelte';
import SelectOption from './SelectOption.svelte';
import type { TextOption } from './SelectTypes';

interface Props {
  // Kept in sync with the internal value store, so it must be bindable.
  value?: any | any[];
  multiple?: boolean;
  placeholder?: string;
  textfield$class?: string;
  container$class?: string;
  suffixIcon$class?: string;
  options?: TextOption[];
  disabled?: boolean;
  onvalueChanged?: (value: any | any[]) => void;
  children?: Snippet;
  prefix?: Snippet;
}

let {
  value = $bindable(null),
  multiple = false,
  placeholder = null,
  textfield$class = '',
  container$class = '',
  suffixIcon$class = '',
  options = [],
  disabled = false,
  onvalueChanged,
  children,
  prefix,
}: Props = $props();

let displayedValue: string = $state('');

// The whole field, not just the input: the popup lines up with its edges.
let field: HTMLDivElement = $state(null);
let popupContainer: PopupContainer;

let valueStore = writable(value);
const valueUnsubscribe = valueStore.subscribe((storeValue) => {
  value = storeValue;
});

// create seperate subject to listen to changes from the select only
let valueChanged: Subject<any | any[]> = new Subject<any | any[]>();
const valueChangedSubscruption = valueChanged.subscribe((value) => {
  onvalueChanged?.(value);
});

let displayValueStore = writable<string | string[]>(multiple ? [] : '');

let displayValueUnsubscribe = displayValueStore.subscribe((value) => {
  setDisplayedValue(value);
});

function openMenu(e?: MouseEvent) {
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
  if (value === null || value === undefined || value.length === 0) {
    displayedValue = null;
    return;
  }

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
</script>

<div class="select {container$class}" part="select" onclick={openMenu} bind:this={field}>
  {@render prefix?.()}
  <input
    {disabled}
    {placeholder}
    readonly
    bind:value={displayedValue}
    class="input {textfield$class}"
  />
  <div class="material-symbols-rounded suffix {suffixIcon$class}">arrow_drop_down</div>
</div>

<PopupContainer sizeToAnchor={true} anchorElement={field} bind:this={popupContainer}>
  <PopupSurface>
    {@render children?.()}

    {#each options as option}
      <SelectOption value={option.value}>
        {option.label}
      </SelectOption>
    {/each}
  </PopupSurface>
</PopupContainer>

<style>
.select {
  position: relative;
  display: flex;
  width: 100%;
  align-items: center;
  padding-inline: 8px;
  border: 1px solid var(--color-line);
  border-radius: var(--radius-control);
  font-size: var(--text-cell);
  color: var(--color-ink);
  cursor: pointer;
  transition: var(--transition-colors);
}

.select:focus-within {
  border-color: var(--color-primary);
}

.input {
  width: 100%;
  outline: none;
  cursor: pointer;
}

.suffix {
  color: var(--color-ink-secondary);
  pointer-events: none;
}
</style>
