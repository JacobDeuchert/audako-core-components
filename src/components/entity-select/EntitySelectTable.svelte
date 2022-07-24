<script lang="ts">
import { combineLatest, debounceTime, filter, finalize, from, Observable, Subject, switchMap, takeUntil, tap, throttleTime } from 'rxjs';
import { createEventDispatcher, onDestroy } from 'svelte';
import { EntitySelectGlobalStore, EntitySelectTypeStore } from './entity-select-stores';
import { ConfigurationEntity, EntityHttpService, EntityNameService, EntityType, Group } from 'audako-core';
import { resolveService } from '../../utils/service-functions';
import type { PaginationResponse } from 'audako-core';
import Table from '../../shared/components/table/Table.svelte';
import type { PageEvent, Sort } from '../../shared/components/table/table.types';
import HeaderRow from '../../shared/components/table/HeaderRow.svelte';
import HeaderCell from '../../shared/components/table/HeaderCell.svelte';
import DataRow from '../../shared/components/table/DataRow.svelte';
import DataCell from '../../shared/components/table/DataCell.svelte';
import Paginator from '../../shared/components/table/Paginator.svelte';

let httpService: EntityHttpService = resolveService(EntityHttpService);
let nameService: EntityNameService = resolveService(EntityNameService);

export let entityType: EntityType;

let entitites: Partial<ConfigurationEntity>[] = [];
let entitiesRequested: Subject<void> = new Subject();

let filterString: string;
let selectedGroupId: string;
let selectedGroup: Group;
let withSubGroups: boolean = false;

let pageIndex: number = 0;
let pageSize: number = 10;
let totalCount: number = 0;
let lastPageIndex: number = 0;

let sort: string;
let sortDirection: Sort;

let typeStore = EntitySelectTypeStore(entityType);
let globalStore = EntitySelectGlobalStore;
let stateInitialized = false;

let loading: boolean = true;

let unsub = new Subject<void>();
let dispatcher = createEventDispatcher();

combineLatest([globalStore.asObservable(), typeStore.asObservable()])
  .pipe(takeUntil(unsub))
  .subscribe(([globalState, typeState]) => {
    selectedGroup = typeState.selectedGroup as Group;
    selectedGroupId = typeState.selectedGroup?.Id;
    filterString = typeState.filter;

    withSubGroups = globalState.queryWithSubGroups;
    stateInitialized = true;

    pageIndex = 0;
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

  console.log('query', query);

  const paging = {
    limit: pageSize,
    skip: pageIndex * pageSize,
  };
  console.log(entityType);
  return from(httpService.queryConfiguration(entityType, query, paging));
}

async function onSortTable() {
  console.log(sort, sortDirection);
}

function onEntitySelected(entity: Partial<ConfigurationEntity>) {
  const entityTypeStore = EntitySelectTypeStore(entityType);
  const lastSelected = entityTypeStore.value.lastSelectedEntities;

  lastSelected.unshift(entity.Id);
  lastSelected.splice(5);
  entityTypeStore.update((state) => ({
    ...state,
    lastSelectedEntities: lastSelected,
  }));

  dispatcher('entitySelected', { selectedEntity: entity });
}

function onPageChanged(event: CustomEvent<PageEvent>): void {
  const pageEvent = event.detail;
  if (pageEvent.pageSize != pageSize) {
    pageIndex = 0;
    pageSize = pageEvent.pageSize;
  } else {
    pageIndex = pageEvent.pageIndex;
  }
}

$: {
  pageIndex = pageIndex;
  entitiesRequested.next();
}

$: {
  pageSize = pageSize;
  pageIndex = 0;
  entitiesRequested.next();
}

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
    entitites = response.data;

    // add own group to entities to be able to select the top most group
    if (entityType === EntityType.Group) {
      entitites.unshift(selectedGroup);
    }

    totalCount = response.total;
  });
</script>

<div class="flex flex-col h-full">
  <Table>
    <HeaderRow>
      <HeaderCell id="Name">Name</HeaderCell>
      <HeaderCell id="Name">Group</HeaderCell>
    </HeaderRow>

    {#each entitites as entity}
      <DataRow flexrow$class="cursor-pointer hover:bg-gray-100" on:click={()=> onEntitySelected(entity)}>
        <DataCell>
          <div class="leading-4 clam text-ellipsis" style="line-clamp: 2;">
            {entity.Name?.Value}
          </div>
          
        </DataCell>
        <DataCell>
          <span>
            {#await nameService.resolveName(EntityType.Group, entity.GroupId) then name}
              {name}
            {/await}
          </span>
        </DataCell>
      </DataRow>
    {/each}

    <Paginator {pageIndex} {pageSize} {totalCount} on:changePage={onPageChanged}/>
  </Table>

  <!-- <div class="flex-1 overflow-auto"> -->

  <!-- <DataTable
      sortable
      bind:sort
      bind:sortDirection
      on:SMUIDataTable:sorted={onSortTable}
      stickyHeader
      class="w-full border-none"
    >
      <Head>
        <Row>
          <Cell columnId="Name">
            <Label class="font-bold text-gray-600">Name</Label>
            <IconButton class="material-icons !text-[20px]" size="mini">arrow_upward</IconButton>
          </Cell>
          <Cell columnId="Group">
            <Label class="font-bold text-gray-600">Group</Label>
            <IconButton class="material-icons !text-[20px]" size="mini">arrow_upward</IconButton>
          </Cell>
          <Cell columnId="Type">
            <Label class="font-bold text-gray-600">Type</Label>
            <IconButton class="material-icons !text-[20px]" size="mini">arrow_upward</IconButton>
          </Cell>
        </Row>
      </Head>
      <Body>
        {#each entitites as entity}
          <Row class="cursor-pointer" on:click={() => onEntitySelected(entity)}>
            <Cell>
              {entity.Name.Value}
            </Cell>
            <Cell>
              <Wrapper>
                <span>
                  {#await nameService.resolveName(EntityType.Group, entity.GroupId) then name}
                    {name}
                  {/await}
                </span>

                <Tooltip surface$class="!max-w-[400px]">
                  {#await nameService.resolvePathName(entity.Path) then pathName}
                    <span>{pathName}</span>
                  {/await}
                </Tooltip>
              </Wrapper>
            </Cell>
            <Cell>
              {entity['Type']?.Value ?? ''}
            </Cell>
          </Row>
        {/each}
      </Body>

      <LinearProgress class="h-[4px] z-10" indeterminate closed={!loading} slot="progress" />
    </DataTable>
  </div>-->
</div>

<style>
.table-header-grid {
  display: grid;
  grid-template-rows: 50px;
  grid-template-columns: repeat(3, 1fr);
}

.table-body-grid {
}
</style>
