<script lang="ts">
import { ConfigurationEntity, EntityHttpService, EntityNameService, EntityType, Group, TenantView } from '@audako/core';
import { Subject, takeUntil } from 'rxjs';
import { onDestroy } from 'svelte';

import { resolveService } from '../../utils/service-functions';
import { EntitySelectSelectionStore, EntitySelectTypeStore } from './entity-select-stores';
import EntitySelectTreeNode from './EntitySelectTreeNode.svelte';
import Checkbox from '../../shared/components/checkbox/Checkbox.svelte';

let httpService: EntityHttpService = resolveService(EntityHttpService);
let nameService: EntityNameService = resolveService(EntityNameService);

interface Props {
  entityType: EntityType;
  selectedTenant: TenantView;
  selectMultiple?: boolean;
  onchangeTenant?: () => void;
}

let { entityType, selectedTenant, selectMultiple = false, onchangeTenant }: Props = $props();

interface RecentEntry {
  id: string;
  name: string;
  group: string;
  entity: Partial<ConfigurationEntity>;
}

let rootGroup: Group = $state(null);
let recentEntries: RecentEntry[] = $state([]);
let search: string = $state('');

let selectedEntities: Partial<ConfigurationEntity>[] = [];
let selectedEntityLookup: Record<string, boolean> = $state({});

let unsub = new Subject<void>();

let typeStore = EntitySelectTypeStore(entityType);

typeStore.pipe(takeUntil(unsub)).subscribe((state) => {
  loadRecentEntries(state.lastSelectedEntities ?? []);
});

EntitySelectSelectionStore.pipe(takeUntil(unsub)).subscribe((state) => {
  selectedEntities = state.selectedEntities;
  selectedEntityLookup = {};

  for (let entity of selectedEntities) {
    selectedEntityLookup[entity.Id] = true;
  }
});

async function getRootGroup(id: string): Promise<void> {
  try {
    rootGroup = await httpService.getEntityById<Group>(EntityType.Group, id);

    if (!typeStore.value?.selectedGroup || typeStore.value.selectedGroup.Id != rootGroup.Id) {
      typeStore.update((state) => ({ ...state, selectedGroup: rootGroup }));
    }
  } catch (error) {
    console.error(error);
  }
}

// The store only keeps ids; the panel shows name plus group, so the entities
// themselves have to be resolved.
async function loadRecentEntries(entityIds: string[]): Promise<void> {
  if (entityIds.length === recentEntries.length && entityIds.every((id, i) => recentEntries[i]?.id === id)) {
    return;
  }

  const entries = await Promise.all(
    entityIds.map(async (id) => {
      try {
        const entity = await httpService.getEntityById<ConfigurationEntity>(entityType, id);
        return {
          id,
          entity,
          name: entity?.Name?.Value ?? '',
          group: (await nameService.resolveName(EntityType.Group, entity?.GroupId)) ?? '',
        };
      } catch (error) {
        console.error(error);
        return null;
      }
    })
  );

  recentEntries = entries.filter((entry) => entry != null);
}

function toggleRecent(entry: RecentEntry): void {
  if (selectMultiple) {
    if (selectedEntityLookup[entry.id]) {
      selectedEntities = selectedEntities.filter((e) => e.Id !== entry.id);
    } else {
      selectedEntities = [...selectedEntities, entry.entity];
    }
  } else {
    selectedEntities = [entry.entity];
  }

  EntitySelectSelectionStore.update((state) => ({ ...state, selectedEntities: selectedEntities }));
}

function selectAllRecent(): void {
  const missing = recentEntries.filter((entry) => !selectedEntityLookup[entry.id]).map((entry) => entry.entity);

  EntitySelectSelectionStore.update((state) => ({
    ...state,
    selectedEntities: selectMultiple ? [...selectedEntities, ...missing] : selectedEntities,
  }));
}

$effect(() => {
  if (selectedTenant && selectedTenant.Root) {
    getRootGroup(selectedTenant.Root);
  }
});

onDestroy(() => {
  unsub.next();
  unsub.complete();
});
</script>

<div class="sidebar" part="sidebar">
  <div class="top">
    <div class="tenant-row">
      <button type="button" class="tenant" onclick={() => onchangeTenant?.()}>
        <span class="material-symbols-rounded tenant-icon">domain</span>
        <div class="tenant-text">
          <div class="tenant-label">Mandant</div>
          <div class="tenant-name">{selectedTenant?.Name ?? ''}</div>
        </div>
        <span class="material-symbols-rounded tenant-icon">unfold_more</span>
      </button>

      <button type="button" title="Mandant suchen" class="tenant-search" onclick={() => onchangeTenant?.()}>
        <span class="material-symbols-rounded">search</span>
      </button>
    </div>

    <div class="search" part="search-field">
      <input placeholder="Suche" bind:value={search} />
      <span class="material-symbols-rounded">search</span>
    </div>
  </div>

  {#if rootGroup}
    <div class="tree">
      <EntitySelectTreeNode group={rootGroup} expanded {entityType} {search} />
    </div>
  {:else}
    <div class="spacer"></div>
  {/if}

  {#if recentEntries.length > 0}
    <div class="recent">
      <div class="recent-header">
        <div class="recent-title">Zuletzt ausgewählt</div>
        {#if selectMultiple}
          <button type="button" class="select-all" onclick={() => selectAllRecent()}>alle übernehmen</button>
        {/if}
      </div>

      {#each recentEntries as entry (entry.id)}
        <div class="recent-entry" onclick={() => toggleRecent(entry)}>
          {#if selectMultiple}
            <Checkbox readonly checked={selectedEntityLookup[entry.id]} />
          {/if}

          <div class="recent-text">
            <div class="recent-name">{entry.name}</div>
            <div class="recent-group">{entry.group}</div>
          </div>
        </div>
      {/each}
    </div>
  {/if}
</div>

<style>
.sidebar {
  display: flex;
  height: 100%;
  min-height: 0;
  width: 280px;
  flex: none;
  flex-direction: column;
  overflow: hidden;
  border-right: 1px solid var(--color-line);
}

.top {
  flex: none;
  padding: 12px 12px 10px;
}

.tenant-row {
  display: flex;
  gap: 8px;
}

.tenant {
  display: flex;
  height: 44px;
  flex: 1;
  align-items: center;
  gap: 8px;
  overflow: hidden;
  padding-left: 10px;
  padding-right: 8px;
  border: 1px solid var(--color-line);
  border-radius: var(--radius-control);
  text-align: left;
  transition: var(--transition-colors);
}

.tenant-icon {
  color: var(--color-ink-secondary);
}

.tenant-text {
  min-width: 0;
  flex: 1;
}

.tenant-label {
  font-size: var(--text-label);
  line-height: 1.2;
  color: var(--color-ink-tertiary);
}

.tenant-name {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: var(--text-cell);
  line-height: 1.2;
  color: var(--color-ink);
}

.tenant-search {
  display: flex;
  height: 44px;
  width: 44px;
  flex: none;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--color-line);
  border-radius: var(--radius-control);
  transition: var(--transition-colors);
}

.tenant-search .material-symbols-rounded {
  color: var(--color-primary);
}

@media (hover: hover) {
  .tenant:hover {
    border-color: var(--color-line-strong);
  }

  .tenant-search:hover {
    background-color: var(--color-primary-tint-subtle);
  }
}

.search {
  display: flex;
  height: 40px;
  align-items: center;
  margin-top: 10px;
  padding-left: 12px;
  padding-right: 10px;
  border: 1px solid var(--color-line);
  border-radius: var(--radius-control);
  transition: var(--transition-colors);
}

.search:focus-within {
  border-color: var(--color-primary);
}

.search input {
  width: 100%;
  font-size: var(--text-cell);
  color: var(--color-ink);
  outline: none;
}

.search input::placeholder {
  color: var(--color-ink-tertiary);
}

.search .material-symbols-rounded {
  margin-left: 8px;
  color: var(--color-ink-tertiary);
}

.tree {
  min-height: 0;
  flex: 1;
  overflow: auto;
  padding: 2px 10px 10px;
}

.spacer {
  flex: 1;
}

.recent {
  max-height: 45%;
  flex: none;
  overflow-y: auto;
  padding: 10px 10px 12px;
  border-top: 1px solid var(--color-line);
}

.recent-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4px;
}

.recent-title {
  font-size: var(--text-meta);
  color: var(--color-ink-secondary);
}

.select-all {
  font-size: 12px;
  color: var(--color-primary);
  cursor: pointer;
}

.recent-entry {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 7px 10px;
  border-radius: var(--radius-control);
  cursor: pointer;
  transition: var(--transition-colors);
}

@media (hover: hover) {
  .select-all:hover {
    text-decoration-line: underline;
  }

  .recent-entry:hover {
    background-color: var(--color-neutral-hover);
  }
}

.recent-text {
  min-width: 0;
  flex: 1;
}

.recent-name,
.recent-group {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.recent-name {
  font-size: var(--text-cell);
  color: var(--color-ink);
}

.recent-group {
  font-size: var(--text-sub);
  color: var(--color-ink-tertiary);
}
</style>
