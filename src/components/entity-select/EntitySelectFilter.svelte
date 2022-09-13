<script lang="ts">
import Checkbox from '../../shared/components/checkbox/Checkbox.svelte';
import { debounceTime, Subject, takeUntil } from 'rxjs';
import { createEventDispatcher, getContext, onDestroy, onMount } from 'svelte';
import { EntitySelectGlobalState, EntitySelectGlobalStore, EntitySelectSelectionStore, EntitySelectTypeStore, EntityTypeState } from './entity-select-stores';
import type { ConfigurationEntity, EntityType } from 'audako-core';
import IconButton from '../../shared/components/icon-button/IconButton.svelte';
import type { TWCallable } from 'twind';

export let entityType: EntityType;
export let selectMultiple = false;

let tw = getContext<TWCallable>('tw');

let eventDispatcher = createEventDispatcher();

let typeStore = EntitySelectTypeStore(entityType);

let withSubGroups = false;
let filter: string = typeStore.value.filter;

let filterInput: HTMLInputElement;

let unsub = new Subject<void>();

let filterChanged = new Subject<string>();
let selectedEntities: Partial<ConfigurationEntity>[] = [];



EntitySelectGlobalStore.pipe(takeUntil(unsub)).subscribe((state: EntitySelectGlobalState) => {
  withSubGroups = state.queryWithSubGroups;
});

filterChanged.pipe(takeUntil(unsub), debounceTime(200)).subscribe((filter: string) => {
  typeStore.update((state) => ({ ...state, filter }));
});

EntitySelectSelectionStore.pipe(takeUntil(unsub)).subscribe((state) => {
  selectedEntities = state.selectedEntities;
});

$: filterChanged.next(filter);

$: onSubGroupsToggled(withSubGroups);

function onSubGroupsToggled(withSubGroups: boolean): void {
  console.log('onSubGroupsToggled', withSubGroups);
  if (withSubGroups != EntitySelectGlobalStore.value.queryWithSubGroups) {
    EntitySelectGlobalStore.update((state) => ({ ...state, queryWithSubGroups: withSubGroups }));
  }
}

function onAcceptSelection(): void {
  eventDispatcher('acceptSelection');
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

<div class={tw`flex flex-col`}>
  <div class={tw`flex items-center`}>
    <div class={tw`flex items-center w-full focus-within:border-blue-300 border-gray-200  border-2 rounded-md p-2`}>
      <span class={tw`material-symbols-rounded mr-2`}>search</span>
      <input placeholder="Search" class={tw`w-full outline-none`} bind:this={filterInput} bind:value={filter} />
    </div>
    {#if selectMultiple}
      <div class={tw`mx-2 relative`}>
        <IconButton on:click={() => onAcceptSelection()} icon="done_all" />
        {#if selectedEntities.length > 0}
          <div class={tw`pointer-events-none z-10 absolute bg-primary rounded-full top-0 text-xs text-center text-on-primary right-[-5px] px-[5px] py-[1px]`}>{selectedEntities.length}</div>
        {/if}
      </div>
    {/if}
  </div>

  <div class={tw`flex justify-end mt-2`}>
    <Checkbox label="Mit Untergruppen" bind:checked={withSubGroups} />
  </div>
</div>
