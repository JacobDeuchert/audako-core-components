<script lang="ts">
  import type { InputComponentDev } from '@smui/textfield';

  import { Icon } from '@smui/icon-button';
  import TextField from '@smui/textfield';
  import Checkbox from '@smui/checkbox';
  import FormField from '@smui/form-field';

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
  <TextField
    bind:input={filterInput}
    bind:value={filter}
    on:input={(e) => onInputFilter(e)}
    class="w-full"
    variant="filled"
    input$placeholder="Search"
  >
    <Icon class="material-icons self-center pl-2 pr-2" slot="leadingIcon">search</Icon>
  </TextField>

  <div class="flex justify-end mt-2">
    <FormField>
      <Checkbox bind:checked={withSubGroups} />

      <span slot="label"> Mit Untergruppen </span>
    </FormField>
  </div>
</div>
