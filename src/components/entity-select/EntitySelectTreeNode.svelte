<script lang="ts">
import { EntityHttpService, EntityType, Group } from 'audako-core';
import { distinctUntilKeyChanged, Subject, takeUntil } from 'rxjs';
import { resolveService } from '../../utils/service-functions';
import { onDestroy } from 'svelte';
import { EntitySelectTypeStore, type EntityTypeState } from './entity-select-stores';
import Self from './EntitySelectTreeNode.svelte';

const httpService = resolveService(EntityHttpService);

interface Props {
  group: Partial<Group>;
  // Expanded automatically when the selected group lies below this node.
  expanded?: boolean;
  level?: number;
  entityType: EntityType;
}

let { group, expanded = $bindable(false), level = 1, entityType }: Props = $props();

let children: Partial<Group>[] = $state([]);
let selected: boolean = $state(false);

let unsub: Subject<void> = new Subject();

let typeStore = EntitySelectTypeStore(entityType);

typeStore.pipe(takeUntil(unsub), distinctUntilKeyChanged<EntityTypeState>('selectedGroup')).subscribe((state: EntityTypeState) => {
  selected = state.selectedGroup?.Id === group?.Id;

  if (group && state.selectedGroup?.Path?.includes(group.Id)) {
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

$effect(() => {
  if (group) {
    getChildren();
  }
});

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
  <div class="flex items-center hover:bg-slate-100 w-full {selected ? '!bg-slate-300' : ''}" onclick={() => selectGroup()}>
    <div></div>
    {#if children.length > 0}
      <div class="flex items-center">
        {#if expanded}
          <span onclick={() => toggleExpanded()} class="material-symbols-rounded text-[20px] w-[20px] cursor-pointer">expand_more</span>
        {:else}
          <span onclick={() => toggleExpanded()} class="material-symbols-rounded text-[20px] w-[20px] cursor-pointer">chevron_right</span>
        {/if}
      </div>
    {:else}
      <div class="p-[10px]"></div>
    {/if}
    <div class="overflow-hidden whitespace-nowrap text-ellipsis w-full">{group?.Name?.Value}</div>
  </div>

  {#if expanded}
    <div class="flex w-full">
      <div class="border-r group-hover:border-gray-300 border-transparent pl-1 mb-2" style="padding-right: {level * 4}px"></div>
      <div class="w-full">
        {#each children as child}
          <Self group={child} level={level + 1} {entityType} />
        {/each}
      </div>
    </div>
  {/if}
</div>
