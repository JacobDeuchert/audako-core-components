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

// The selection store is global, so a picker opened again would otherwise
// start with (and in single mode immediately re-emit) the previous pick.
EntitySelectSelectionStore.update((state) => ({ ...state, selectedEntities: [] }));

let selectionSubscription = EntitySelectSelectionStore.subscribe((state) => {
  selectedEntities = state.selectedEntities ?? [];
  selectionCount = selectedEntities.length;

  if (selectedEntities.length > 0 && !selectMultiple) {
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

<div class="entity-select">
  <div class="header">
    <div class="header-tile">
      <span class="material-symbols-rounded header-icon">{meta.icon}</span>
    </div>
    <div class="title">{meta.singular} auswählen</div>
    <IconButton size={36} iconSize={20} icon="close" onclick={() => onclose?.()} />
  </div>

  <div class="body">
    {#if inTenantSelect}
      <TenantSelect
        allowBack={!!selectedTenant}
        onback={() => (inTenantSelect = false)}
        ontenantSelected={(tenant) => onTenantSelected(tenant)}
      />
    {:else}
      <EntitySelectSidebar {selectMultiple} {entityType} {selectedTenant} onchangeTenant={() => onTenantChange()} />

      <div class="main">
        <EntitySelectToolbar {entityType} {totalCount} />

        <div class="table">
          <EntitySelectTable {selectMultiple} {entityType} {additionalFilter} bind:totalCount />
        </div>
      </div>
    {/if}
  </div>

  {#if selectMultiple}
    <div class="footer">
      <div class="selection-count">
        {selectionCount} Ausgewählt
      </div>

      <button type="button" class="accept" onclick={() => acceptSelection()}>
        <span class="material-symbols-rounded">check</span>
        Übernehmen
      </button>
    </div>
  {/if}
</div>

<style>
.entity-select {
  display: flex;
  height: 100%;
  max-height: 100%;
  min-height: 0;
  width: 100%;
  flex-direction: column;
  overflow: hidden;
  background-color: var(--color-surface);
}

.header {
  display: flex;
  flex: none;
  align-items: center;
  gap: 12px;
  padding: 12px 12px 12px 18px;
  border-bottom: 1px solid var(--color-line);
}

.header-tile {
  display: flex;
  height: 40px;
  width: 40px;
  flex: none;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-dialog);
  background-color: var(--color-primary-tint);
}

.header-icon {
  color: var(--color-primary);
}

.title {
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: var(--text-dialog-title);
  color: var(--color-ink);
}

.body {
  display: flex;
  min-height: 0;
  flex: 1;
  overflow: hidden;
}

.main {
  display: flex;
  min-height: 0;
  min-width: 0;
  flex: 1;
  flex-direction: column;
  overflow: hidden;
  padding: 14px 20px;
}

.table {
  min-height: 0;
  flex: 1;
}

.footer {
  display: flex;
  flex: none;
  align-items: center;
  gap: 12px;
  padding: 12px 18px;
  border-top: 1px solid var(--color-line);
}

.selection-count {
  flex: 1;
  font-size: var(--text-count);
  color: var(--color-ink-secondary);
}

.accept {
  display: flex;
  height: 36px;
  align-items: center;
  gap: 8px;
  padding-inline: 16px;
  border-radius: var(--radius-button);
  background-color: var(--color-primary);
  font-size: var(--text-cell);
  font-weight: 500;
  color: var(--color-on-primary);
  cursor: pointer;
  transition: var(--transition-colors);
}

@media (hover: hover) {
  .accept:hover {
    background-color: var(--color-primary-hover);
  }
}
</style>
