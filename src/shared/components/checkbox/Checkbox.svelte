<script lang="ts">
import { createEventDispatcher, getContext } from 'svelte';
import type { TWCallable } from 'twind';





export let label: string = '';
export let checked: boolean = false;
export let indeterminate: boolean = false;
export let tw: TWCallable = getContext('tw');

let eventDispatcher = createEventDispatcher();

let checkboxElement: HTMLInputElement;

$: {

  if (indeterminate && checkboxElement && !checked) {
    checkboxElement.indeterminate = true;
  } else if (checkboxElement) {
    checkboxElement.indeterminate = false;
    checkboxElement.checked = checked;
  }
}

function onClick(event: MouseEvent): void {
  checked = !checked;
  eventDispatcher('change', { checked });
}
</script>

<div class={tw`flex items-center cursor-pointer`} on:click={(event) => onClick(event)}>
  <input type="checkbox" class={tw`mr-2 h-[18px] w-[18px] cursor-pointer`} bind:this={checkboxElement} bind:checked />
  <div>{label}</div>
</div>
