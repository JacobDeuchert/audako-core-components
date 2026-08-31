<script lang="ts">
import Checkbox from '../../shared/components/checkbox/Checkbox.svelte';
import { debounceTime, Subject, takeUntil } from 'rxjs';
import { onDestroy, onMount } from 'svelte';
import { type EntitySelectGlobalState, EntitySelectGlobalStore, EntitySelectSelectionStore, EntitySelectTypeStore } from './entity-select-stores';
import type { ConfigurationEntity, EntityType } from 'audako-core';
import IconButton from '../../shared/components/icon-button/IconButton.svelte';

interface Props {
  entityType: EntityType;
  selectMultiple?: boolean;
  onacceptSelection?: () => void;
}

let { entityType, selectMultiple = false, onacceptSelection }: Props = $props();

let typeStore = EntitySelectTypeStore(entityType);

let withSubGroups = $state(false);
let filter: string = $state(typeStore.value.filter);

let filterInput: HTMLInputElement;

let unsub = new Subject<void>();

let filterChanged = new Subject<string>();
let selectedEntities: Partial<ConfigurationEntity>[] = $state([]);

EntitySelectGlobalStore.pipe(takeUntil(unsub)).subscribe((state: EntitySelectGlobalState) => {
  withSubGroups = state.queryWithSubGroups;
});

filterChanged.pipe(takeUntil(unsub), debounceTime(200)).subscribe((filter: string) => {
  typeStore.update((state) => ({ ...state, filter }));
});

EntitySelectSelectionStore.pipe(takeUntil(unsub)).subscribe((state) => {
  selectedEntities = state.selectedEntities;
});

$effect(() => {
  filterChanged.next(filter);
});

$effect(() => {
  onSubGroupsToggled(withSubGroups);
});

function onSubGroupsToggled(withSubGroups: boolean): void {
  if (withSubGroups != EntitySelectGlobalStore.value.queryWithSubGroups) {
    EntitySelectGlobalStore.update((state) => ({ ...state, queryWithSubGroups: withSubGroups }));
  }
}

onMount(() => {
  focusInput();
});

function focusInput() {
  if (filterInput) {
    setTimeout(() => {
      filterInput.focus();
      filterInput.select();
    }, 0);
  }
}

onDestroy(() => {
  unsub.next();
  unsub.complete();
});
</script>

<div class="flex flex-col">
  <div class="flex items-center">
    <div class="flex items-center w-full focus-within:border-blue-300 border-gray-200 border-2 rounded-md p-2">
      <span class="material-symbols-rounded mr-2">search</span>
      <input placeholder="Search" class="w-full outline-none" bind:this={filterInput} bind:value={filter} />
    </div>
    {#if selectMultiple}
      <div class="mx-2 relative">
        <IconButton onclick={() => onacceptSelection?.()} icon="done_all" />
        {#if selectedEntities.length > 0}
          <div class="pointer-events-none z-10 absolute bg-primary rounded-full top-0 text-xs text-center text-on-primary right-[-5px] px-[5px] py-[1px]">{selectedEntities.length}</div>
        {/if}
      </div>
    {/if}
  </div>

  <div class="flex justify-end mt-2">
    <Checkbox label="Mit Untergruppen" bind:checked={withSubGroups} />
  </div>
</div>
