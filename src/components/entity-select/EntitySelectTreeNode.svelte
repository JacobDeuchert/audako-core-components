<script lang="ts">
  import {EntityHttpEndpoints, EntityHttpService, EntityType, Group} from 'audako-core';
  import {distinctUntilKeyChanged, Subject, takeUntil} from 'rxjs';
import { resolveService } from '../../utils/service-functions';
  import {afterUpdate, onDestroy} from 'svelte';
  import {container} from 'tsyringe';
  import {EntitySelectTypeStore, EntityTypeState} from './entity-select-stores';

  const httpService = resolveService(EntityHttpService);

  export let group: Group;
  export let expanded = false;
  export let level = 1;
  export let entityType: EntityType;

  let children: Partial<Group>[] = [];
  let selected: boolean = false;

  let unsub: Subject<void> = new Subject();

  let typeStore = EntitySelectTypeStore(entityType);

  typeStore
    .pipe(takeUntil(unsub), distinctUntilKeyChanged<EntityTypeState>('selectedGroup'))
    .subscribe((state: EntityTypeState) => {
      selected = state.selectedGroup?.Id === group?.Id;

      if (group && state.selectedGroup?.Path.includes(group.Id)) {
        expanded = true;
      }
    });

  async function getChildren(): Promise<void> {
    try {
      children = await (await httpService.queryConfiguration<Group>(EntityType.Group, {GroupId: group.Id})).data;
    } catch (error) {
      console.error(error);
    }
  }

  $: {
    if (group) {
      getChildren();
    }
  }

  function toggleExpanded(): void {
    expanded = !expanded;
  }

  function selectGroup(): void {
    typeStore.update((state: EntityTypeState) => ({
      ...state,
      selectedGroup: group,
    }));
  }

  onDestroy(() => {
    unsub.next();
    unsub.complete();
  });
</script>

<div class="group cursor-pointer">
  <div
    class="flex items-center hover:bg-slate-100 w-full {selected ? '!bg-slate-300' : ''}"
    on:click={() => selectGroup()}
  >
    <div />
    {#if children.length > 0}
      <div class="flex items-center">
        {#if expanded}
          <span on:click={() => toggleExpanded()} class="material-icons text-[20px] w-[20px] cursor-pointer"
            >expand_more</span
          >
        {:else}
          <span on:click={() => toggleExpanded()} class="material-icons text-[20px] w-[20px] cursor-pointer"
            >chevron_right</span
          >
        {/if}
      </div>
    {:else}
      <div class="p-[10px]" />
    {/if}
    <div class="overflow-hidden whitespace-nowrap text-ellipsis w-full">{group?.Name?.Value}</div>
  </div>

  {#if expanded}
    <div class="flex w-full">
      <div
        class="border-r group-hover:border-gray-300 border-transparent pl-1 mb-2"
        style="padding-right: {level * 4}px"
      />
      <div class="w-full">
        {#each children as child}
          <svelte:self group={child} level={level + 1} {entityType} />
        {/each}
      </div>
    </div>
  {/if}
</div>
