<script lang="ts">
import { ConfigurationEntity, EntityHttpService, EntityType, TenantHttpService, TenantView } from '@audako/core';
import { onDestroy } from 'svelte';

import IconButton from '../../shared/components/icon-button/IconButton.svelte';
import { resolveService } from '../../utils/service-functions';
import TenantSelect from '../tenant-select/TenantSelect.svelte';
import { getEntityMeta } from './entity-select-meta';
import { EntitySelectGlobalStore, EntitySelectSelectionStore, EntitySelectTypeStore } from './entity-select-stores';
import EntitySelectSidebar from './EntitySelectSidebar.svelte';
import EntitySelectTable from './EntitySelectTable.svelte';
import EntitySelectToolbar from './EntitySelectToolbar.svelte';

interface Props {
  entityType?: EntityType;
  selectMultiple?: boolean;
  additionalFilter?: Record<string, any>;
  onselectedEntities?: (entities: Partial<ConfigurationEntity> | Partial<ConfigurationEntity>[]) => void;
  onclose?: () => void;
}

let {
  entityType = EntityType.Signal,
  selectMultiple = false,
  additionalFilter = null,
  onselectedEntities,
  onclose,
}: Props = $props();

let httpService: EntityHttpService = resolveService(EntityHttpService);
let tenantHttpService: TenantHttpService = resolveService(TenantHttpService);

let selectedTenant: TenantView = $state();
let inTenantSelect: boolean = $state(false);
let totalCount: number = $state(0);
let selectionCount: number = $state(0);

let selectedEntities: Partial<ConfigurationEntity>[] = [];

const meta = $derived(getEntityMeta(entityType));

let globalSubscription = EntitySelectGlobalStore.subscribe((state) => {
  if (state.selectedTenant) {
    inTenantSelect = false;
    getTenantView(state.selectedTenant);
  } else {
    inTenantSelect = true;
  }
});

let selectionSubscription = EntitySelectSelectionStore.subscribe((state) => {
  selectedEntities = state.selectedEntities ?? [];
  selectionCount = selectedEntities.length;

  if (state.selectedEntities && !selectMultiple) {
    setLastSelectedEntities(state.selectedEntities);
    onselectedEntities?.(state.selectedEntities[0]);
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

<div class="flex h-full max-h-full min-h-0 w-full flex-col overflow-hidden bg-surface">
  <div class="flex flex-none items-center gap-3 border-b border-line py-3 pl-[18px] pr-3">
    <div class="flex h-10 w-10 flex-none items-center justify-center rounded-dialog bg-primary-tint">
      <span class="material-symbols-rounded select-none text-[20px] text-primary">{meta.icon}</span>
    </div>
    <div class="flex-1 truncate text-dialog-title text-ink">{meta.singular} auswählen</div>
    <IconButton size={36} iconSize={20} icon="close" onclick={() => onclose?.()} />
  </div>

  <div class="flex min-h-0 flex-1 overflow-hidden">
    {#if inTenantSelect}
      <TenantSelect
        allowBack={!!selectedTenant}
        onback={() => (inTenantSelect = false)}
        ontenantSelected={(tenant) => onTenantSelected(tenant)}
      />
    {:else}
      <EntitySelectSidebar {selectMultiple} {entityType} {selectedTenant} onchangeTenant={() => onTenantChange()} />

      <div class="flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden px-5 py-[14px]">
        <EntitySelectToolbar {entityType} {totalCount} />

        <div class="min-h-0 flex-1">
          <EntitySelectTable {selectMultiple} {entityType} {additionalFilter} bind:totalCount />
        </div>
      </div>
    {/if}
  </div>

  <div class="flex flex-none items-center gap-3 border-t border-line px-[18px] py-3">
    <div class="flex-1 text-count text-ink-secondary">
      {#if selectMultiple}
        {selectionCount} Ausgewählt
      {/if}
    </div>

    <button
      type="button"
      class="h-9 cursor-pointer rounded-button border border-line px-4 text-cell font-medium text-ink transition-colors hover:bg-neutral-hover"
      onclick={() => onclose?.()}
    >
      Abbrechen
    </button>

    {#if selectMultiple}
      <button
        type="button"
        class="flex h-9 cursor-pointer items-center gap-2 rounded-button bg-primary px-4 text-cell font-medium text-on-primary transition-colors hover:bg-primary-hover"
        onclick={() => acceptSelection()}
      >
        <span class="material-symbols-rounded select-none text-[18px]">check</span>
        Übernehmen
      </button>
    {/if}
  </div>
</div>
