<script lang="ts">
import { EntityHttpEndpoints, EntityHttpService, EntityType, Group } from 'audako-core';
import { distinctUntilKeyChanged, Subject, takeUntil } from 'rxjs';
import { resolveService } from '../../utils/service-functions';
import { afterUpdate, getContext, onDestroy } from 'svelte';
import { container } from 'tsyringe';
import { EntitySelectTypeStore, type EntityTypeState } from './entity-select-stores';
import type { TWCallable } from 'twind';

const httpService = resolveService(EntityHttpService);

export let group: Group;
export let expanded = false;
export let level = 1;
export let entityType: EntityType;

let tw = getContext<TWCallable>('tw');

let children: Partial<Group>[] = [];
let selected: boolean = false;

let unsub: Subject<void> = new Subject();

let typeStore = EntitySelectTypeStore(entityType);

typeStore.pipe(takeUntil(unsub), distinctUntilKeyChanged<EntityTypeState>('selectedGroup')).subscribe((state: EntityTypeState) => {
  selected = state.selectedGroup?.Id === group?.Id;

  if (group && state.selectedGroup?.Path.includes(group.Id)) {
    expanded = true;
  }
});

async function getChildren(): Promise<void> {
  try {
    children = await (await httpService.queryConfiguration<Group>(EntityType.Group, { GroupId: group.Id })).data;
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

<div class={tw`group cursor-pointer`}>
  <div class={tw`flex items-center hover:bg-slate-100 w-full {selected ? '!bg-slate-300' : ''}`} on:click={() => selectGroup()}>
    <div />
    {#if children.length > 0}
      <div class={tw`flex items-center`}>
        {#if expanded}
          <span on:click={() => toggleExpanded()} class={tw`material-symbols-rounded text-[20px] w-[20px] cursor-pointer`}>expand_more</span>
        {:else}
          <span on:click={() => toggleExpanded()} class={tw`material-symbols-rounded text-[20px] w-[20px] cursor-pointer`}>chevron_right</span>
        {/if}
      </div>
    {:else}
      <div class={tw`p-[10px]`} />
    {/if}
    <div class={tw`overflow-hidden whitespace-nowrap text-ellipsis w-full`}>{group?.Name?.Value}</div>
  </div>

  {#if expanded}
    <div class={tw`flex w-full`}>
      <div class={tw`border-r group-hover:border-gray-300 border-transparent pl-1 mb-2" style="padding-right: {level * 4}px`} />
      <div class={tw`w-full`}>
        {#each children as child}
          <svelte:self group={child} level={level + 1} {entityType} />
        {/each}
      </div>
    </div>
  {/if}
</div>
