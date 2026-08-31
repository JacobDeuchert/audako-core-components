<script lang="ts">
import type { Snippet } from 'svelte';

interface Props {
  children?: Snippet;
}

let { children }: Props = $props();
</script>

<div class="audako-tableheader-flexrow">
  {@render children?.()}
</div>

<style>
/* svelte-preprocess supported <style global>; vitePreprocess does not, so
   these table layout rules must be explicitly global - the > * selectors
   target cells rendered by HeaderCell/DataCell, which carry a different
   scoping hash. */
:global {
  .audako-tableheader-flexrow {
    display: flex;
    height: 40px;
    position: sticky;
    top: 0;
    background: white;
    font-weight: 700;
  }
  
  .audako-tableheader-flexrow > * {
    flex: 1;
    height: 100%;
    padding: 4px 0;
    display: flex;
    align-items: center;
  }
  
  .audako-tableheader-flexrow > *:first-child {
    padding-left: 12px !important;
  }
  
  .audako-tableheader-flexrow > *:last-child {
    padding-right: 12px !important;
  }
}
</style>
