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

<div class="toolbar" part="toolbar">
  <div class="total">Einträge gesamt: {totalCount}</div>

  <div class="filter" part="search-field">
    <input placeholder="Filter" bind:this={filterInput} bind:value={filter} />
    <span class="material-symbols-rounded">search</span>
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

<style>
.toolbar {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 10px;
}

.total {
  flex: none;
  font-size: var(--text-section);
  color: var(--color-ink);
}

.filter {
  display: flex;
  height: 40px;
  min-width: 120px;
  flex: 1;
  align-items: center;
  padding-left: 12px;
  padding-right: 10px;
  border: 1px solid var(--color-line);
  border-radius: var(--radius-control);
  transition: var(--transition-colors);
}

.filter:focus-within {
  border-color: var(--color-primary);
}

.filter input {
  width: 100%;
  font-size: var(--text-cell);
  color: var(--color-ink);
  outline: none;
}

.filter input::placeholder {
  color: var(--color-ink-tertiary);
}

.filter .material-symbols-rounded {
  margin-left: 8px;
  color: var(--color-ink-tertiary);
}
</style>
