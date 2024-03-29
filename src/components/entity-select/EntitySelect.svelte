<script lang="ts">
import EntitySelectSidebar from './EntitySelectSidebar.svelte';
import { createEventDispatcher, onDestroy, setContext } from 'svelte';
import EntitySelectTable from './EntitySelectTable.svelte';
import EntitySelectFilter from './EntitySelectFilter.svelte';
import { EntitySelectGlobalStore, EntitySelectSelectionStore, EntitySelectTypeStore } from './entity-select-stores';
import { ConfigurationEntity, EntityHttpService, EntityType, TenantHttpService, TenantView } from 'audako-core';
import { resolveService } from '../../utils/service-functions';
import TenantSelect from '../tenant-select/TenantSelect.svelte';
import { tw as twDefault, type TWCallable } from 'twind';

export let entityType: EntityType = EntityType.Signal;
export let selectMultiple = false;
export let additionalFilter: Record<string, any> = null;
export let tw: TWCallable = twDefault;
$: setContext('tw', tw);

let httpService: EntityHttpService = resolveService(EntityHttpService);
let tenantHttpService: TenantHttpService = resolveService(TenantHttpService);

let selectedTenant: TenantView;
let inTenantSelect: boolean = false;

let selectedEntities: Partial<ConfigurationEntity>[] = [];

let dispatcher = createEventDispatcher();

let globalSubscription = EntitySelectGlobalStore.subscribe((state) => {
  if (state.selectedTenant) {
    inTenantSelect = false;
    getTenantView(state.selectedTenant);
  } else {
    inTenantSelect = true;
  }
});

let selectionSubscription = EntitySelectSelectionStore.subscribe((state) => {
  if (state.selectedEntities && !selectMultiple) {
    setLastSelectedEntities(state.selectedEntities);
    dispatcher('selectedEntities', state.selectedEntities[0]);
  } else {
    selectedEntities = state.selectedEntities;
  }
});

function setLastSelectedEntities(selected: Partial<ConfigurationEntity>[]) {
  const typeStore = EntitySelectTypeStore(entityType);

  const lastSelected = typeStore.value.lastSelectedEntities;

  const notIncludedIds = selected.filter((entity) => !lastSelected.includes(entity.Id)).map((entity) => entity.Id);

  lastSelected.unshift(...notIncludedIds);
  lastSelected.splice(5);
  typeStore.update((state) => ({
    ...state,
    lastSelectedEntities: lastSelected,
  }));
}

async function getTenantView(id: string): Promise<void> {
  try {
    selectedTenant = await tenantHttpService.getTenantViewById(id);
  } catch (error) {
    console.error(error);
    inTenantSelect = true;
  }
}

async function onTenantSelected(tenant: TenantView): Promise<void> {
  console.log('Tenant selected', tenant);
  const rootGroup = await httpService.getEntityById(EntityType.Group, tenant.Root);
  EntitySelectGlobalStore.update((state) => ({ ...state, selectedTenant: tenant.Id }));
  EntitySelectTypeStore(entityType).update((state) => ({ ...state, selectedGroup: rootGroup }));
}

function onTenantChange(): void {
  inTenantSelect = true;
}

function acceptSelection(): void {
  setLastSelectedEntities(selectedEntities);
  dispatcher('selectedEntities', selectedEntities);
}

onDestroy(() => {
  globalSubscription.unsubscribe();
  selectionSubscription.unsubscribe();
});
</script>

<div class={tw`flex w-full h-full`}>
  {#if inTenantSelect}
    <TenantSelect
      tw={tw}
      allowBack={!!selectedTenant}
      on:back={() => (inTenantSelect = false)}
      on:tenantSelected={(event) => onTenantSelected(event.detail.tenant)}
    />
  {:else}
    <div class={tw`flex-1 border-r border-slate-400 overflow-hidden`}>
      <EntitySelectSidebar {selectMultiple} {entityType} {selectedTenant} on:changeTenant={() => onTenantChange()} />
    </div>

    <div class={tw`flex-[2] pl-4 pt-1 h-full overflow-hidden`}>
      <div class={tw`flex flex-col h-full overflow-hidden`}>
        <EntitySelectFilter {entityType} {selectMultiple} on:acceptSelection={() => acceptSelection()} />

        <div class={tw`flex-1 overflow-hidden mt-3`}>
          <EntitySelectTable {selectMultiple} {entityType} {additionalFilter} />
        </div>
      </div>
    </div>
  {/if}
</div>
