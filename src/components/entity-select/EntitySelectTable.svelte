<script lang="ts">
  import {container} from 'tsyringe';
  import IconButton from '@smui/icon-button/src/IconButton.svelte';
  import LinearProgress from '@smui/linear-progress';
  import {
    combineLatest,
    debounceTime,
    filter,
    finalize,
    from,
    Observable,
    Subject,
    switchMap,
    takeUntil,
    tap,
    throttleTime,
  } from 'rxjs';
  import {createEventDispatcher, onDestroy} from 'svelte';
  import Select, {Option} from '@smui/select';
  import Tooltip, {Wrapper} from '@smui/tooltip';
  import {EntitySelectGlobalStore, EntitySelectTypeStore} from './entity-select-stores';
  import {ConfigurationEntity, EntityHttpService, EntityNameService, EntityType, Group} from 'audako-core';
  import {resolveService} from '../../utils/service-functions';
import type { PaginationResponse } from 'audako-core/dist/services/entity-http.service';

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
  let sortDirection: SortValue;

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

    dispatcher('entitySelected', {selectedEntity: entity});
  }

  $: {
    pageIndex = pageIndex;
    console.log(pageIndex);
    entitiesRequested.next();
  }

  $: {
    pageSize = pageSize;
    pageIndex = 0;
    console.log('Pagesize changed', pageSize);
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
      lastPageIndex = Math.floor(totalCount / pageSize);
    });
</script>

<div class="flex flex-col h-full">

  <div class="table-header-grid">
    <div></div>

  </div>

  <div class="">

  </div>

  <div>

  </div>




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
  </div>
  <Pagination>
    <svelte:fragment slot="rowsPerPage">
      <Label>Rows Per Page</Label>
      <Select
        menu$class="!top-[-150px]"
        variant="outlined"
        on:change={(e) => console.log(e)}
        bind:value={pageSize}
        noLabel
      >
        <Option value={10}>10</Option>
        <Option value={25}>25</Option>
        <Option value={100}>100</Option>
      </Select>
    </svelte:fragment>
    <svelte:fragment slot="total">
      {pageIndex * pageSize + 1}-{(pageIndex + 1) * pageSize} of {totalCount}
    </svelte:fragment>

    <IconButton
      class="material-icons"
      action="first-page"
      title="First page"
      on:click={() => (pageIndex = 0)}
      disabled={pageIndex === 0}>first_page</IconButton
    >
    <IconButton
      class="material-icons"
      action="prev-page"
      title="Prev page"
      on:click={() => pageIndex--}
      disabled={pageIndex === 0}>chevron_left</IconButton
    >
    <IconButton
      class="material-icons"
      action="next-page"
      title="Next page"
      on:click={() => pageIndex++}
      disabled={pageIndex === lastPageIndex}>chevron_right</IconButton
    >
    <IconButton
      class="material-icons"
      action="last-page"
      title="Last page"
      on:click={() => (pageIndex = lastPageIndex)}
      disabled={pageIndex === lastPageIndex}>last_page</IconButton
    >
  </Pagination> -->
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