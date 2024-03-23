<script lang="ts">
import { createEventDispatcher, getContext } from 'svelte';
import type { TWCallable } from 'twind';

export let readonly: boolean = false;
export let label: string = '';
export let checked: boolean = false;
export let indeterminate: boolean = false;
export let tw: TWCallable = getContext('tw');

let eventDispatcher = createEventDispatcher();

let checkboxElement: HTMLInputElement;

$: {
  console.log('checked', checked);

  if (indeterminate && checkboxElement && !checked) {
    checkboxElement.indeterminate = true;
  } else if (checkboxElement) {
    checkboxElement.indeterminate = false;
    setElementChecked(checked);
  }
}

function onClick(event: MouseEvent): void {
  if (readonly) {
    return;
  }

  checked = !checked;
  console.log('checked', checked);
  eventDispatcher('change', { checked });
}

function setElementChecked(value: boolean): void {
  setTimeout(() => {
    if (checkboxElement?.checked !== value) {
      checkboxElement.checked = value;
    }
  });
}
</script>

<div class={tw`flex items-center cursor-pointer`} on:click={(event) => onClick(event)}>
  <input
    type="checkbox"
    class={tw`mr-2 h-[18px] w-[18px] cursor-pointer`}
    bind:this={checkboxElement}
    on:click={(event) => (readonly ? event.preventDefault() : {})}
  />
  <div>{label}</div>
</div>
