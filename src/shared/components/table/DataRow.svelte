<script lang="ts">
import { createEventDispatcher } from 'svelte';



  export let flexrow$class = '';

  let eventDispatcher = createEventDispatcher();

  function onClick(event: MouseEvent): void {
    eventDispatcher('click', event);
  }

</script>

<div class="audako-tablebody-flexrow w-full {flexrow$class}" on:click="{onClick}">
  <slot />
</div>

<style>
.audako-tablebody-flexrow {
  display: flex;
  height: 40px;
}

:global(.audako-tablebody-flexrow > *) {
  flex: 1;
  height: 100%;
  padding: 4px 0;
  display: flex;
  align-items: center;
  padding: 0 4px;
}

:global(.audako-tablebody-flexrow > *:first-child) {
  padding-left: 12px;
}

:global(.audako-tablebody-flexrow > *:last-child) {
  padding-right: 12px;
}
</style>
