<script lang="ts">
import { EntityHttpService, EntityType, Group } from '@audako/core';
import { distinctUntilKeyChanged, Subject, takeUntil } from 'rxjs';
import { onDestroy } from 'svelte';

import { resolveService } from '../../utils/service-functions';
import { EntitySelectTypeStore, type EntityTypeState } from './entity-select-stores';
import Self from './EntitySelectTreeNode.svelte';

const httpService = resolveService(EntityHttpService);

interface Props {
  group: Partial<Group>;
  // Expanded automatically when the selected group lies below this node.
  expanded?: boolean;
  entityType: EntityType;
  // Tree search from the left panel. Filters the child lists of the levels
  // that are currently rendered; it does not load collapsed branches.
  search?: string;
}

let { group, expanded = $bindable(false), entityType, search = '' }: Props = $props();

let children: Partial<Group>[] = $state([]);
let selected: boolean = $state(false);

let unsub: Subject<void> = new Subject();

let typeStore = EntitySelectTypeStore(entityType);

const visibleChildren = $derived(
  search
    ? children.filter((child) => child.Name?.Value?.toLowerCase().includes(search.toLowerCase()))
    : children
);

typeStore
  .pipe(takeUntil(unsub), distinctUntilKeyChanged<EntityTypeState>('selectedGroup'))
  .subscribe((state: EntityTypeState) => {
    selected = state.selectedGroup?.Id === group?.Id;

    if (group && state.selectedGroup?.Path?.includes(group.Id)) {
      expanded = true;
    }
  });

async function getChildren(): Promise<void> {
  try {
    children = (await httpService.queryConfiguration<Group>(EntityType.Group, { GroupId: group.Id })).data;
  } catch (error) {
    console.error(error);
  }
}

$effect(() => {
  if (group) {
    getChildren();
  }
});

function toggleExpanded(event: MouseEvent): void {
  // The chevron only expands; selecting the group is the row's job.
  event.stopPropagation();
  expanded = !expanded;
}

function selectGroup(): void {
  typeStore.update((state: EntityTypeState) => ({
    ...state,
    selectedGroup: group,
  }));
}
</script>

<div>
  <!-- The transparent left border keeps labels from shifting when a node
       becomes active and gains its 3px accent bar. -->
  <div
    class="flex cursor-pointer items-center gap-[6px] rounded-control border-l-[3px] border-transparent py-2 pr-[10px] text-cell transition-colors"
    class:pl-[10px]={children.length > 0}
    class:pl-[26px]={children.length === 0}
    class:text-ink-secondary={!selected}
    class:hover:bg-neutral-hover={!selected}
    class:bg-primary-tint={selected}
    class:!border-primary={selected}
    class:text-ink={selected}
    class:font-medium={selected}
    onclick={() => selectGroup()}
  >
    {#if children.length > 0}
      <span
        onclick={(event) => toggleExpanded(event)}
        class="material-symbols-rounded w-4 select-none text-[16px]"
      >
        {expanded ? 'expand_more' : 'chevron_right'}
      </span>
    {/if}

    <div class="flex-1 truncate">{group?.Name?.Value}</div>
  </div>

  {#if expanded}
    <div class="pl-3">
      {#each visibleChildren as child (child.Id)}
        <Self group={child} {entityType} {search} />
      {/each}
    </div>
  {/if}
</div>
