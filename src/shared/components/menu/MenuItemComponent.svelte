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
    <div class={tw`mr-2`}>
      <i class={tw`fas fa-${icon} text-lg`}></i>
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
</style>