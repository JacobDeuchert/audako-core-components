<script lang="ts">
import { createEventDispatcher } from 'svelte';
import type { TWCallable } from 'twind';

  export let icon: string = null;
  export let label: string = null;
  export let tw: TWCallable;

  let dispatcher = createEventDispatcher();

</script>

<div on:click="{(e) => dispatcher('click', e)}" class={tw`hover-highlight flex items-center pl-3 pb-2 pt-2 pr-3 cursor-pointer relative rounded-md`}>

  {#if icon}
    <div class={tw`mr-2 flex item-center`}>
      <span class={tw`material-symbols-rounded z-[1] select-none flex items-center`}>
        <slot>{icon}</slot>
      </span>
    </div>
  {/if}
  <div class={tw`flex-grow`}>
    {label}
  </div>
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


.material-symbols-rounded {
    font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 100, 'opsz' 48;
    font-family: 'Material Symbols Rounded';
    font-weight: normal;
    font-style: normal;
    font-size: 24px;
    line-height: 1;
    letter-spacing: normal;
    text-transform: none;
    display: inline-block;
    white-space: nowrap;
    word-wrap: normal;
    direction: ltr;
  }
</style>