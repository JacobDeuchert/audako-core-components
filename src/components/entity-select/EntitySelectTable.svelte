<script lang="ts">
import { combineLatest, debounceTime, filter, finalize, from, Observable, Subject, switchMap, takeUntil, tap, throttleTime } from 'rxjs';
import { onDestroy } from 'svelte';
import { EntitySelectGlobalStore, EntitySelectSelectionStore, EntitySelectTypeStore } from './entity-select-stores';
import { ConfigurationEntity, EntityHttpService, EntityNameService, EntityType, Group } from 'audako-core';
import { resolveService } from '../../utils/service-functions';
import type { PaginationResponse } from 'audako-core';
import Table from '../../shared/components/table/Table.svelte';
import type { PageEvent } from '../../shared/components/table/table.types';
import HeaderRow from '../../shared/components/table/HeaderRow.svelte';
import HeaderCell from '../../shared/components/table/HeaderCell.svelte';
import DataRow from '../../shared/components/table/DataRow.svelte';
import DataCell from '../../shared/components/table/DataCell.svelte';
import Paginator from '../../shared/components/table/Paginator.svelte';
import Checkbox from '../../shared/components/checkbox/Checkbox.svelte';

let httpService: EntityHttpService = resolveService(EntityHttpService);
let nameService: EntityNameService = resolveService(EntityNameService);

interface Props {
  entityType: EntityType;
  selectMultiple?: boolean;
  additionalFilter?: Record<string, any>;
}

let { entityType, selectMultiple = false, additionalFilter = null }: Props = $props();


let entities: Partial<ConfigurationEntity>[] = $state([]);
let entitiesRequested: Subject<void> = new Subject();

let selectedEntities: Partial<ConfigurationEntity>[] = [];
let selectedEntitiesInPageLookup: Record<string, boolean> = $state({});
let masterToggleState: 'checked' | 'indeterminate' | 'unchecked' = $state('unchecked');

let filterString: string;
let selectedGroupId: string;
let selectedGroup: Group;
let withSubGroups: boolean = false;

let pageIndex: number = $state(0);
let pageSize: number = $state(10);
let totalCount: number = $state(0);

let typeStore = EntitySelectTypeStore(entityType);
let globalStore = EntitySelectGlobalStore;
let stateInitialized = false;

let loading: boolean = $state(true);

let unsub = new Subject<void>();

EntitySelectSelectionStore.pipe(takeUntil(unsub)).subscribe(state => {
  selectedEntities = state.selectedEntities;

  setupSelectedPageLookup();
  updateMasterToggleState();
});


combineLatest([globalStore.asObservable(), typeStore.asObservable()])
  .pipe(takeUntil(unsub))
  .subscribe(([globalState, typeState]) => {
    console.log('globalState', globalState);
    selectedGroup = typeState.selectedGroup as Group;
    selectedGroupId = typeState.selectedGroup?.Id;
    filterString = typeState.filter;

    withSubGroups = globalState.queryWithSubGroups;
    stateInitialized = true;

    pageIndex = 0;
    pageSize = globalState.pageSize ?? 10;
    entitiesRequested.next();
  });

function queryEntities(): Observable<PaginationResponse<Partial<ConfigurationEntity>>> {
  const query = {
    $and: [],
  };

  if (withSubGroups) {
    query.$and.push({
      Path: selectedGroupId,
    });
  } else {
    query.$and.push({
      GroupId: selectedGroupId,
    });
  }

  if (filterString) {
    query.$and.push({
      $or: [
        {
          'Name.Value': {
            $regex: filterString,
            $options: 'i',
          },
        },
        {
          'Description.Value': {
            $regex: filterString,
            $options: 'i',
          },
        },
      ],
    });
  }

  if (additionalFilter) {
    query.$and.push(additionalFilter);
  }

  const paging = {
    limit: pageSize,
    skip: pageIndex * pageSize,
  };
  return from(httpService.queryConfiguration(entityType, query, paging));
}

function onEntitySelected(entity: Partial<ConfigurationEntity>) {
  if (selectMultiple) {
    if (selectedEntities.find((e) => e.Id === entity.Id)) {
      selectedEntities = selectedEntities.filter((e) => e.Id !== entity.Id);
      selectedEntitiesInPageLookup[entity.Id] = false;
    } else {
      selectedEntities.push(entity);
      selectedEntitiesInPageLookup[entity.Id] = true;
    }
    updateMasterToggleState();
  } else {
    selectedEntities = [entity];
  }

  EntitySelectSelectionStore.update((state) => ({ ...state, selectedEntities: selectedEntities }));
}

function toggleMasterSelect(checked: boolean): void {
  
  
  if (checked) {
    selectedEntities = [...selectedEntities, ...entities.filter((e) => !selectedEntitiesInPageLookup[e.Id])];
  } else {
    selectedEntities = selectedEntities.filter((e) => !entities.find((x) => x.Id === e.Id));
  }

  setupSelectedPageLookup();
  updateMasterToggleState();
  EntitySelectSelectionStore.update((state) => ({ ...state, selectedEntities: selectedEntities }));
}

function updateMasterToggleState(): void {
  let selectedOnPage = Object.keys(selectedEntitiesInPageLookup).filter((id) => selectedEntitiesInPageLookup[id]);
  if (selectedOnPage.length === 0) {
    masterToggleState = 'unchecked';
  } else if (selectedOnPage.length === entities.length) {
    masterToggleState = 'checked';
  } else {
    masterToggleState = 'indeterminate';
  }
}

function onPageChanged(pageEvent: PageEvent): void {
  if (pageEvent.pageSize != pageSize) {
    pageIndex = 0;
    pageSize = pageEvent.pageSize;
  } else {
    pageIndex = pageEvent.pageIndex;
  }
}

function setupSelectedPageLookup(): void {
  selectedEntitiesInPageLookup = {};
  entities.forEach((entity) => {
    selectedEntitiesInPageLookup[entity.Id] = selectedEntities.find((e) => e.Id === entity.Id) != null;
  } );
}

// Re-query when the page changes; `pageIndex` is read to register the dependency.
$effect(() => {
  void pageIndex;
  entitiesRequested.next();
});

$effect(() => {
  globalStore.update((state) => ({ ...state, pageSize }));
});

onDestroy(() => {
  unsub.next();
  unsub.complete();
});

entitiesRequested
  .pipe(
    takeUntil(unsub),
    filter(() => stateInitialized && !!selectedGroupId),
    throttleTime(250),
    tap(() => (loading = true)),
    switchMap(() => queryEntities())
  )
  .subscribe((response) => {
    loading = false;
    entities = response.data;

    setupSelectedPageLookup();
    updateMasterToggleState();

    // add own group to entities to be able to select the top most group
    if (entityType === EntityType.Group) {
      entities.unshift(selectedGroup);
    }

    totalCount = response.total;
  });
</script>

<div class="flex flex-col h-full overflow-hidden mt-[-10px]">
  <Table>
    <HeaderRow>
      {#if selectMultiple}
        <HeaderCell container$class="flex-[50px] flex-grow-0 cursor-default" id="Name">
          <Checkbox
            checked={masterToggleState === 'checked'}
            indeterminate={masterToggleState === 'indeterminate'}
            onchange={(checked) => toggleMasterSelect(checked)}
          />
        </HeaderCell>
      {/if}
      <HeaderCell container$class="flex-[2] cursor-default" id="Name">Name</HeaderCell>
      <HeaderCell container$class="flex-1 curstor-default" id="Name">Group</HeaderCell>
    </HeaderRow>

    {#if loading}
      <div class="w-full h-[3px] overflow-hidden bg-blue-200">
        <div class="progress-bar-value-animation w-full h-full bg-blue-600"></div>
      </div>
    {:else} 
    
      <div class="w-full h-[3px]"></div>
    {/if}

    {#each entities as entity}
      <DataRow flexrow$class="cursor-pointer hover:bg-gray-100" onclick={() => onEntitySelected(entity)}>
        {#if selectMultiple}
          <DataCell container$class="flex-[50px] flex-grow-0">
            <Checkbox checked={selectedEntitiesInPageLookup[entity.Id]} />
          </DataCell>
        {/if}

        <DataCell container$class="flex-[2]">
          <div class="text-sm overflow-hidden whitespace-nowrap text-ellipsis">
            {entity.Name?.Value}
          </div>
        </DataCell>
        <DataCell container$class="flex-1">
          <span class="text-sm overflow-hidden whitespace-nowrap text-ellipsis">
            {#await nameService.resolveName(EntityType.Group, entity.GroupId) then name}
              {name ?? ''}
            {/await}
          </span>
        </DataCell>
      </DataRow>
    {/each}

    {#snippet pagination()}
      <Paginator {pageIndex} {pageSize} {totalCount} onchangePage={onPageChanged} />
    {/snippet}
  </Table>
</div>

<style>
  

.progress-bar-value-animation {
  animation: indeterminateAnimation 1s infinite linear;
  transform-origin: 0% 50%;
}

@keyframes indeterminateAnimation {
  0% {
    transform:  translateX(0) scaleX(0);
  }
  40% {
    transform:  translateX(0) scaleX(0.4);
  }
  100% {
    transform:  translateX(100%) scaleX(0.5);
  }
}
</style>