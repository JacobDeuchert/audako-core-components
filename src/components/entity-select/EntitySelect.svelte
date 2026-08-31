<script lang="ts">
import EntitySelectSidebar from './EntitySelectSidebar.svelte';
import { onDestroy } from 'svelte';
import EntitySelectTable from './EntitySelectTable.svelte';
import EntitySelectFilter from './EntitySelectFilter.svelte';
import { EntitySelectGlobalStore, EntitySelectSelectionStore, EntitySelectTypeStore } from './entity-select-stores';
import { ConfigurationEntity, EntityHttpService, EntityType, TenantHttpService, TenantView } from 'audako-core';
import { resolveService } from '../../utils/service-functions';
import TenantSelect from '../tenant-select/TenantSelect.svelte';

interface Props {
  entityType?: EntityType;
  selectMultiple?: boolean;
  additionalFilter?: Record<string, any>;
  onselectedEntities?: (entities: Partial<ConfigurationEntity> | Partial<ConfigurationEntity>[]) => void;
}

let {
  entityType = EntityType.Signal,
  selectMultiple = false,
  additionalFilter = null,
  onselectedEntities,
}: Props = $props();

let httpService: EntityHttpService = resolveService(EntityHttpService);
let tenantHttpService: TenantHttpService = resolveService(TenantHttpService);

let selectedTenant: TenantView = $state();
let inTenantSelect: boolean = $state(false);

let selectedEntities: Partial<ConfigurationEntity>[] = [];

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
    onselectedEntities?.(state.selectedEntities[0]);
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
  const rootGroup = await httpService.getEntityById(EntityType.Group, tenant.Root);
  EntitySelectGlobalStore.update((state) => ({ ...state, selectedTenant: tenant.Id }));
  EntitySelectTypeStore(entityType).update((state) => ({ ...state, selectedGroup: rootGroup }));
}

function onTenantChange(): void {
  inTenantSelect = true;
}

function acceptSelection(): void {
  setLastSelectedEntities(selectedEntities);
  onselectedEntities?.(selectedEntities);
}

onDestroy(() => {
  globalSubscription.unsubscribe();
  selectionSubscription.unsubscribe();
});
</script>

<div class="flex w-full h-full">
  {#if inTenantSelect}
    <TenantSelect
      allowBack={!!selectedTenant}
      onback={() => (inTenantSelect = false)}
      ontenantSelected={(tenant) => onTenantSelected(tenant)}
    />
  {:else}
    <div class="flex-1 border-r border-slate-400 overflow-hidden">
      <EntitySelectSidebar {selectMultiple} {entityType} {selectedTenant} onchangeTenant={() => onTenantChange()} />
    </div>

    <div class="flex-[2] pl-4 pt-1 h-full overflow-hidden">
      <div class="flex flex-col h-full overflow-hidden">
        <EntitySelectFilter {entityType} {selectMultiple} onacceptSelection={() => acceptSelection()} />

        <div class="flex-1 overflow-hidden mt-3">
          <EntitySelectTable {selectMultiple} {entityType} {additionalFilter} />
        </div>
      </div>
    </div>
  {/if}
</div>
