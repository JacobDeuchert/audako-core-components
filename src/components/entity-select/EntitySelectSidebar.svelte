<script lang="ts">
import { ConfigurationEntity, EntityHttpService, EntityNameService, EntityType, Group, TenantView } from 'audako-core';
import { Subject, takeUntil } from 'rxjs';
import { resolveService } from '../../utils/service-functions';
import { afterUpdate, createEventDispatcher, getContext, onDestroy } from 'svelte';
import { EntitySelectSelectionStore, EntitySelectTypeStore } from './entity-select-stores';
import EntitySelectTreeNode from './EntitySelectTreeNode.svelte';
import IconButton from '../../shared/components/icon-button/IconButton.svelte';
import Checkbox from '../../shared/components/checkbox/Checkbox.svelte';
import type { TWCallable } from 'twind';


let httpService: EntityHttpService = resolveService(EntityHttpService);
let nameService: EntityNameService = resolveService(EntityNameService);

export let entityType: EntityType;
export let selectedTenant: TenantView;
export let selectMultiple = false;

let tw = getContext<TWCallable>('tw');

let rootGroup: Group = null;
let lastSelectedEntities: string[];

let selectedEntities: Partial<ConfigurationEntity>[] = [];
let selectedEntityLookup: Record<string, boolean> = {};

let dispatcher = createEventDispatcher();

let unsub = new Subject<void>();

let typeStore = EntitySelectTypeStore(entityType);

typeStore.pipe(takeUntil(unsub)).subscribe((state) => {
  lastSelectedEntities = state.lastSelectedEntities;
});

const selectStoreSubscription = EntitySelectSelectionStore.subscribe((state) => {
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
    console.log(error);
  }
}

async function selectLastSelected(entityId: string): Promise<void> {
  let entity = await httpService.getEntityById(entityType, entityId);

  if (selectMultiple) {
    if (selectedEntityLookup[entityId]) {
      selectedEntities = selectedEntities.filter((e) => e.Id !== entityId);
    } else {
      selectedEntities.push(entity);
    }
  } else {
    selectedEntities = [entity];
  }

  EntitySelectSelectionStore.update((state) => ({ ...state, selectedEntities: selectedEntities }));

  
}

afterUpdate(() => {
  try {
    if (selectedTenant && selectedTenant.Root && rootGroup === null) {
      getRootGroup(selectedTenant.Root);
    }
  } catch {}
});

onDestroy(() => {
  console.log('onDestroy');
  selectStoreSubscription.unsubscribe();
});
</script>

<div class={tw`flex flex-col w-full h-full overflow-hidden`}>
  <div class={tw`font-bold text-lg flex items-center cursor-pointer group`} on:click={() => dispatcher('changeTenant')}>
    {selectedTenant?.Name}
    <IconButton size="small">edit</IconButton>
  </div>

  {#if rootGroup}
    <div class={tw`flex-[2] overflow-auto`}>
      <EntitySelectTreeNode group={rootGroup} expanded {entityType} />
    </div>
  {/if}

  <div class={tw`flex-1`}>
    <div class={tw`font-bold text-gray-700`}>Zuletzt ausgewählt</div>
    {#if lastSelectedEntities && lastSelectedEntities.length > 0}
      {#each lastSelectedEntities as entityId, index}
        <div class={tw`flex w-full hover:bg-gray-200 cursor-pointer {index < lastSelectedEntities.length - 1 ? 'border-b' : ''}`} on:click={() => selectLastSelected(entityId)}>
          {#if selectMultiple}
            <Checkbox checked={selectedEntityLookup[entityId]} />
          {/if}

          {#await nameService.resolveName(entityType, entityId) then name}
            {name}
          {/await}
        </div>
      {/each}
    {/if}
  </div>
</div>
