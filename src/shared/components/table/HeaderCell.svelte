<script lang="ts">
import { createEventDispatcher, getContext, onDestroy } from 'svelte';
import type { Writable } from 'svelte/store';
import type { Sort } from './table.types';

export let sortable: boolean = false;
export let id: string;

export let container$class: string = '';

let sortDirection: 'asc' | 'desc' | null = 'asc';

let activeTableSort = getContext<Writable<Sort>>('audako:table:sort');

console.log(activeTableSort);

let sortUnsubscribe = activeTableSort.subscribe((sort) => {
  if (id && sort?.active === id) {
    sortDirection = sort.direction;
  } else {
    sortDirection = null;
  }
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

onDestroy(() => {
  sortUnsubscribe();
});
</script>

<div class="header-cell {sortable ? 'cursor-pointer' : ''} {container$class}" on:click={() => toggleSort()}>
  <div>
    <slot />
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
