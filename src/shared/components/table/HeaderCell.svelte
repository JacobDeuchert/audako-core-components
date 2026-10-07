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

<div class="header-cell {container$class}" class:sortable onclick={() => toggleSort()}>
  <div class="label">
    {@render children?.()}
  </div>

  {#if sortable}
    <span class="material-symbols-rounded sort-icon" class:unsorted={sortDirection == null}>
      {sortDirection === 'desc' ? 'arrow_downward' : 'arrow_upward'}
    </span>
  {/if}
</div>

<style>
.header-cell {
  display: flex;
  height: 100%;
  align-items: center;
  gap: 4px;
  cursor: default;
}

.header-cell.sortable {
  cursor: pointer;
}

.label {
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.sort-icon {
  transition: opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1);
}

.sort-icon.unsorted {
  opacity: 0;
}
</style>
