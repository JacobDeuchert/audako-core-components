<script lang="ts">
import type { Snippet } from 'svelte';

interface Props {
  flexrow$class?: string;
  onclick?: (event: MouseEvent) => void;
  children?: Snippet;
}

let { flexrow$class = '', onclick, children }: Props = $props();
</script>

<div class="audako-tablebody-flexrow {flexrow$class}" onclick={(event) => onclick?.(event)}>
  {@render children?.()}
</div>

<style>
/* svelte-preprocess supported <style global>; vitePreprocess does not, so
   these table layout rules must be explicitly global - the > * selectors
   target cells rendered by HeaderCell/DataCell, which carry a different
   scoping hash. */
:global {
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
}
</style>
