<script lang="ts">
  import IconButton from '@smui/icon-button/src/IconButton.svelte';
import { EntityHttpService, EntityNameService, EntityType, Group, TenantView } from 'audako-core';
  import { Subject, takeUntil } from 'rxjs';
import { resolveService } from '../../utils/service-functions';
  import { afterUpdate, createEventDispatcher } from 'svelte';
  import { container } from 'tsyringe';
  import { EntitySelectTypeStore } from './entity-select-stores';
  import EntitySelectTreeNode from './EntitySelectTreeNode.svelte';

  let httpService: EntityHttpService = resolveService(EntityHttpService);
  let nameService: EntityNameService = resolveService(EntityNameService);

  export let entityType: EntityType;
  export let selectedTenant: TenantView;

  let rootGroup: Group = null;
  let lastSelectedEntities: string[];

  let dispatcher = createEventDispatcher();

  let unsub = new Subject<void>();

  let typeStore = EntitySelectTypeStore(entityType);

  typeStore.pipe(takeUntil(unsub)).subscribe((state) => {
    lastSelectedEntities = state.lastSelectedEntities;
  });

  async function getRootGroup(id: string): Promise<void> {
    try {
      rootGroup = await httpService.getEntityById<Group>(EntityType.Group, id);

      if (!typeStore.value?.selectedGroup) {
        typeStore.update((state) => ({ ...state, selectedGroup: rootGroup }));
      }
    } catch (error) {
      console.log(error);
    }
  }

  afterUpdate(() => {
    try {
      if (selectedTenant && selectedTenant.Root && rootGroup === null) {
      getRootGroup(selectedTenant.Root);
    }
    } catch {
    }
    
  });

  async function selectLastSelected(entityId: string): Promise<void> {
    let entity = await httpService.getEntityById(entityType, entityId);
    dispatcher('entitySelected', { selectedEntity: entity });
  
  }
</script>

<div class="flex flex-col w-full h-full overflow-hidden">
  <div class="font-bold text-lg flex items-center cursor-pointer group" on:click={() => dispatcher('changeTenant')}>
    {selectedTenant?.Name}
    <IconButton class="material-icons group-hover:visible invisible" size="button">edit</IconButton>
  </div>

  {#if rootGroup}
    <div class="flex-[2] overflow-auto">
      <EntitySelectTreeNode group={rootGroup} expanded {entityType} />
    </div>
  {/if}

  <div class="flex-1">
    <div class="font-bold text-gray-700">Zuletzt ausgewählt</div>
    {#if lastSelectedEntities && lastSelectedEntities.length > 0}
      {#each lastSelectedEntities as entityId}
        <div class="w-full hover:bg-gray-200 cursor-pointer" on:click="{() => selectLastSelected(entityId)}">
          {#await nameService.resolveName(entityType, entityId) then name}
            {name}
          {/await}
        </div>
      {/each}
    {/if}
  </div>
</div>
