<script lang="ts">
  import type { InputComponentDev } from '@smui/textfield';
  import Checkbox from '../../shared/components/Checkbox/Checkbox.svelte';
  import { Subject, takeUntil } from 'rxjs';
  import { onDestroy, onMount } from 'svelte';
  import {
    EntitySelectGlobalState,
    EntitySelectGlobalStore,
    EntitySelectTypeStore,
    EntityTypeState,
  } from './entity-select-stores';
import type { EntityType } from 'audako-core';

  
  export let entityType: EntityType;

  let withSubGroups = false;
  let filter: string = '';

  let filterInput: InputComponentDev;

  let unsub = new Subject<void>();

  var typeStore = EntitySelectTypeStore(entityType);

  typeStore.pipe(takeUntil(unsub)).subscribe((state: EntityTypeState) => {
    filter = state.filter;
  });

  let globalStore = EntitySelectGlobalStore;

  globalStore.pipe(takeUntil(unsub)).subscribe((state: EntitySelectGlobalState) => {
    withSubGroups = state.queryWithSubGroups;
  });

  function onInputFilter(event: Event): void {
    filter = (event.target as HTMLInputElement).value;
    typeStore.update((state) => ({ ...state, filter: filter }));
  }

  $: onSubGroupsToggled(withSubGroups);

  function onSubGroupsToggled(withSubGroups: boolean): void {
    console.log('onSubGroupsToggled', withSubGroups);
    if (withSubGroups != EntitySelectGlobalStore.value.queryWithSubGroups) {
      EntitySelectGlobalStore.update((state) => ({ ...state, queryWithSubGroups: withSubGroups }));
    }
  }

  onMount(() => {
    if (filterInput) {
      const inputElement = filterInput.getElement() as HTMLInputElement;
      inputElement.focus();
      inputElement.select();
    }
  });

  onDestroy(() => {
    unsub.next();
    unsub.complete();
  });
</script>

<div class="flex flex-col">

  <div class="flex items-center w-full focus-within:border-blue-300 border-gray-200  border-2 rounded-md p-2">
    <span class="material-symbols-rounded mr-2">search</span>
    <input placeholder="Search" class="w-full outline-none">
  </div>

  <div class="flex justify-end mt-2">
    <Checkbox label="Mit Untergruppen" bind:checked={withSubGroups}></Checkbox>
  </div>
</div>
