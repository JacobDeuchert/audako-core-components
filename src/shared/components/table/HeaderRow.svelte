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
    min-width: fit-content;
    position: sticky;
    top: 0;
    z-index: 1;
    background: var(--color-surface);
    border-bottom: 1px solid var(--color-line);
    font-size: var(--text-cell);
    color: var(--color-ink-secondary);
  }

  .audako-tableheader-flexrow > * {
    flex: 1;
    height: 100%;
    min-width: 0;
    display: flex;
    align-items: center;
  }

  /* The vertical rules between header cells are what make the header read
     like the production table. */
  .audako-tableheader-flexrow > * + * {
    padding-left: 12px;
    border-left: 1px solid var(--color-line);
  }

  .audako-tableheader-flexrow > *:first-child {
    padding-left: 16px;
  }

  .audako-tableheader-flexrow > *:last-child {
    padding-right: 16px;
  }
}
</style>
