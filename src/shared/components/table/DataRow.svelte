<script lang="ts">
import type { Snippet } from 'svelte';

interface Props {
  // Marks the current row (grey background). Selection itself is shown by the
  // checkbox alone - it is never tinted with the accent colour.
  active?: boolean;
  // No permission: red tint, not clickable.
  blocked?: boolean;
  flexrow$class?: string;
  onclick?: (event: MouseEvent) => void;
  children?: Snippet;
}

let { active = false, blocked = false, flexrow$class = '', onclick, children }: Props = $props();

function onClickRow(event: MouseEvent): void {
  if (blocked) {
    return;
  }

  onclick?.(event);
}
</script>

<div
  class="audako-tablebody-flexrow {flexrow$class}"
  class:audako-tablebody-flexrow-active={active && !blocked}
  class:audako-tablebody-flexrow-blocked={blocked}
  onclick={(event) => onClickRow(event)}
>
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
    height: 38px;
    width: 100%;
    cursor: pointer;
    border-bottom: 1px solid var(--color-row-line);
    font-size: var(--text-cell);
    color: var(--color-ink);
  }

  .audako-tablebody-flexrow:hover {
    background: var(--color-row-hover);
  }

  .audako-tablebody-flexrow-active,
  .audako-tablebody-flexrow-active:hover {
    background: var(--color-row-active);
  }

  .audako-tablebody-flexrow-blocked,
  .audako-tablebody-flexrow-blocked:hover {
    background: var(--color-danger-tint);
    color: var(--color-danger);
    cursor: default;
  }

  .audako-tablebody-flexrow > * {
    flex: 1;
    height: 100%;
    min-width: 0;
    display: flex;
    align-items: center;
  }

  .audako-tablebody-flexrow > * + * {
    padding-left: 12px;
  }

  .audako-tablebody-flexrow > *:first-child {
    padding-left: 16px;
  }

  .audako-tablebody-flexrow > *:last-child {
    padding-right: 16px;
  }
}
</style>
