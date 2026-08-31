<script lang="ts">
import { getContext, onDestroy, type Snippet } from 'svelte';
import type { Writable } from 'svelte/store';
import type { Sort } from './table.types';

interface Props {
  id: string;
  sortable?: boolean;
  container$class?: string;
  children?: Snippet;
}

let { id, sortable = false, container$class = '', children }: Props = $props();

let sortDirection = $state<'asc' | 'desc' | null>('asc');

const activeTableSort = getContext<Writable<Sort>>('audako:table:sort');

const sortUnsubscribe = activeTableSort.subscribe((sort) => {
  sortDirection = id && sort?.active === id ? sort.direction : null;
});

function toggleSort(): void {
  if (sortDirection === 'asc') {
    sortDirection = 'desc';
  } else if (sortDirection === 'desc') {
    sortDirection = null;
  } else {
    sortDirection = 'asc';
  }

  activeTableSort.set(
    sortDirection
      ? {
          active: id,
          direction: sortDirection,
        }
      : null
  );
}

onDestroy(sortUnsubscribe);
</script>

<div class="header-cell {sortable ? 'cursor-pointer' : ''} {container$class}" onclick={() => toggleSort()}>
  <div>
    {@render children?.()}
  </div>

  {#if sortable}
    <span
      class="material-symbols-rounded text-xs transition-all"
      style="{sortDirection == 'asc' ? 'transform: rotateX(0);' : 'transform: rotateX(-180deg);'}{sortDirection == null
        ? 'opacity: 0;'
        : 'opacity: 1;'}"
    >
      north
    </span>
  {/if}
</div>

<style>
  .header-cell {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
  }
</style>
