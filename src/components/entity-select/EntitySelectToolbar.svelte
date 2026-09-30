<script lang="ts">
import { debounceTime, Subject, takeUntil } from 'rxjs';
import { onDestroy, onMount, type Snippet } from 'svelte';
import type { EntityType } from '@audako/core';

import IconButton from '../../shared/components/icon-button/IconButton.svelte';
import { type EntitySelectGlobalState, EntitySelectGlobalStore, EntitySelectTypeStore } from './entity-select-stores';

interface Props {
  entityType: EntityType;
  totalCount?: number;
  // Entity-specific filter control (chip or panel trigger), rendered between
  // the full-text filter and the subgroup toggle.
  filterControl?: Snippet;
}

let { entityType, totalCount = 0, filterControl }: Props = $props();

let typeStore = EntitySelectTypeStore(entityType);

let withSubGroups = $state(false);
let filter: string = $state(typeStore.value.filter);

let filterInput: HTMLInputElement;

let unsub = new Subject<void>();
let filterChanged = new Subject<string>();

EntitySelectGlobalStore.pipe(takeUntil(unsub)).subscribe((state: EntitySelectGlobalState) => {
  withSubGroups = state.queryWithSubGroups;
});

filterChanged.pipe(takeUntil(unsub), debounceTime(200)).subscribe((filter: string) => {
  typeStore.update((state) => ({ ...state, filter }));
});

$effect(() => {
  filterChanged.next(filter);
});

function toggleSubGroups(): void {
  EntitySelectGlobalStore.update((state) => ({ ...state, queryWithSubGroups: !state.queryWithSubGroups }));
}

onMount(() => {
  setTimeout(() => {
    filterInput?.focus();
    filterInput?.select();
  }, 0);
});

onDestroy(() => {
  unsub.next();
  unsub.complete();
});
</script>

<div class="mb-[10px] flex items-center gap-3">
  <div class="flex-none text-section text-ink">Einträge gesamt: {totalCount}</div>

  <div
    class="flex h-10 min-w-[120px] flex-1 items-center rounded-control border border-line pl-3 pr-[10px] transition-colors focus-within:border-primary"
  >
    <input
      placeholder="Filter"
      class="w-full bg-transparent text-cell text-ink outline-none placeholder:text-ink-tertiary"
      bind:this={filterInput}
      bind:value={filter}
    />
    <span class="material-symbols-rounded ml-2 select-none text-[18px] text-ink-tertiary">search</span>
  </div>

  {@render filterControl?.()}

  <IconButton
    size={40}
    iconSize={22}
    variant={withSubGroups ? 'primary' : 'neutral'}
    title={withSubGroups ? 'Untergruppen einbezogen' : 'Nur diese Gruppe'}
    icon="account_tree"
    onclick={() => toggleSubGroups()}
  />
</div>
