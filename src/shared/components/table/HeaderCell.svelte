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

let sortDirection = $state<'asc' | 'desc' | null>(null);

const activeTableSort = getContext<Writable<Sort>>('audako:table:sort');

const sortUnsubscribe = activeTableSort.subscribe((sort) => {
  sortDirection = id && sort?.active === id ? sort.direction : null;
});

function toggleSort(): void {
  if (!sortable) {
    return;
  }

  if (sortDirection === 'asc') {
    sortDirection = 'desc';
  } else if (sortDirection === 'desc') {
    sortDirection = null;
  } else {
    sortDirection = 'asc';
  }

  activeTableSort.set(sortDirection ? { active: id, direction: sortDirection } : null);
}

onDestroy(sortUnsubscribe);
</script>

<div
  class="flex h-full items-center gap-1 {sortable ? 'cursor-pointer' : 'cursor-default'} {container$class}"
  onclick={() => toggleSort()}
>
  <div class="min-w-0 truncate">
    {@render children?.()}
  </div>

  {#if sortable}
    <span
      class="material-symbols-rounded text-[14px] transition-opacity"
      class:opacity-0={sortDirection == null}
    >
      {sortDirection === 'desc' ? 'arrow_downward' : 'arrow_upward'}
    </span>
  {/if}
</div>
