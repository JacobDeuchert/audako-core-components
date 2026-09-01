<script lang="ts">
import { ConfigurationEntity, EntityHttpService, EntityNameService, EntityType, Group, TenantView } from 'audako-core';
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

<div class="flex h-full min-h-0 w-[280px] flex-none flex-col overflow-hidden border-r border-line">
  <div class="flex-none px-3 pb-[10px] pt-3">
    <div class="flex gap-2">
      <button
        type="button"
        class="flex h-[44px] flex-1 items-center gap-2 overflow-hidden rounded-control border border-line pl-[10px] pr-2 text-left transition-colors hover:border-line-strong"
        onclick={() => onchangeTenant?.()}
      >
        <span class="material-symbols-rounded select-none text-[18px] text-ink-secondary">domain</span>
        <div class="min-w-0 flex-1">
          <div class="text-label leading-[1.2] text-ink-tertiary">Mandant</div>
          <div class="truncate text-cell leading-[1.2] text-ink">{selectedTenant?.Name ?? ''}</div>
        </div>
        <span class="material-symbols-rounded select-none text-[16px] text-ink-secondary">unfold_more</span>
      </button>

      <button
        type="button"
        title="Mandant suchen"
        class="flex h-[44px] w-[44px] flex-none items-center justify-center rounded-control border border-line transition-colors hover:bg-primary-tint-subtle"
        onclick={() => onchangeTenant?.()}
      >
        <span class="material-symbols-rounded select-none text-[20px] text-primary">search</span>
      </button>
    </div>

    <div
      class="mt-[10px] flex h-10 items-center rounded-control border border-line pl-3 pr-[10px] transition-colors focus-within:border-primary"
    >
      <input
        placeholder="Suche"
        class="w-full bg-transparent text-cell text-ink outline-none placeholder:text-ink-tertiary"
        bind:value={search}
      />
      <span class="material-symbols-rounded ml-2 select-none text-[18px] text-ink-tertiary">search</span>
    </div>
  </div>

  {#if rootGroup}
    <div class="min-h-0 flex-1 overflow-auto px-[10px] pb-[10px] pt-[2px]">
      <EntitySelectTreeNode group={rootGroup} expanded {entityType} {search} />
    </div>
  {:else}
    <div class="flex-1"></div>
  {/if}

  {#if recentEntries.length > 0}
    <div class="max-h-[45%] flex-none overflow-y-auto border-t border-line px-[10px] pb-3 pt-[10px]">
      <div class="mb-1 flex items-center justify-between">
        <div class="text-meta text-ink-secondary">Zuletzt ausgewählt</div>
        {#if selectMultiple}
          <button
            type="button"
            class="cursor-pointer text-[12px] text-primary hover:underline"
            onclick={() => selectAllRecent()}
          >
            alle übernehmen
          </button>
        {/if}
      </div>

      {#each recentEntries as entry (entry.id)}
        <div
          class="flex cursor-pointer items-center gap-[10px] rounded-control px-[10px] py-[7px] transition-colors hover:bg-neutral-hover"
          onclick={() => toggleRecent(entry)}
        >
          {#if selectMultiple}
            <Checkbox readonly checked={selectedEntityLookup[entry.id]} />
          {/if}

          <div class="min-w-0 flex-1">
            <div class="truncate text-cell text-ink">{entry.name}</div>
            <div class="truncate text-sub text-ink-tertiary">{entry.group}</div>
          </div>
        </div>
      {/each}
    </div>
  {/if}
</div>
