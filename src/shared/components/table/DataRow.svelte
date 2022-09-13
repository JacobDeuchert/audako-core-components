<script lang="ts">
import { createEventDispatcher } from 'svelte';

  export let flexrow$class = '';

  let eventDispatcher = createEventDispatcher();

  function onClick(event: MouseEvent): void {
    eventDispatcher('click', event);
  }

</script>

<div class="audako-tablebody-flexrow {flexrow$class}" on:click="{onClick}">
  <slot />
</div>

<style global>
.audako-tablebody-flexrow {
  display: flex;
  height: 40px;
  width: 100%;
}

.audako-tablebody-flexrow > * {
  flex: 1;
  height: 100%;
  padding: 4px 0;
  display: flex;
  align-items: center;
  padding: 0 4px;
}

.audako-tablebody-flexrow > *:first-child {
  padding-left: 12px;
}

.audako-tablebody-flexrow > *:last-child {
  padding-right: 12px;
}
</style>
