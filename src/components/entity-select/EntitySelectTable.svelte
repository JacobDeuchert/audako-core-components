<script lang="ts">
import { ConfigurationEntity, EntityHttpService, EntityNameService, EntityType, Group, LiveValueService } from 'audako-core';
import type { PaginationResponse } from 'audako-core';
import { filter, from, Observable, Subject, Subscription, switchMap, takeUntil, tap, throttleTime } from 'rxjs';
import { combineLatest } from 'rxjs';
import { onDestroy } from 'svelte';

import Checkbox from '../../shared/components/checkbox/Checkbox.svelte';
import DataCell from '../../shared/components/table/DataCell.svelte';
import DataRow from '../../shared/components/table/DataRow.svelte';
import HeaderCell from '../../shared/components/table/HeaderCell.svelte';
import HeaderRow from '../../shared/components/table/HeaderRow.svelte';
import Paginator from '../../shared/components/table/Paginator.svelte';
import Table from '../../shared/components/table/Table.svelte';
import type { PageEvent, Sort } from '../../shared/components/table/table.types';
import { resolveService, tryResolveService } from '../../utils/service-functions';
import { getEntityMeta } from './entity-select-meta';
import { formatSignalType, formatSignalValue } from './signal-format';
import { EntitySelectGlobalStore, EntitySelectSelectionStore, EntitySelectTypeStore } from './entity-select-stores';

let httpService: EntityHttpService = resolveService(EntityHttpService);
let nameService: EntityNameService = resolveService(EntityNameService);
// Optional: hosts that do not provide it simply get an empty Signalwert column.
let liveValueService: LiveValueService = tryResolveService(LiveValueService);

interface Props {
  entityType: EntityType;
  selectMultiple?: boolean;
  additionalFilter?: Record<string, any>;
  // Read by the toolbar for "Einträge gesamt".
  totalCount?: number;
}

let { entityType, selectMultiple = false, additionalFilter = null, totalCount = $bindable(0) }: Props = $props();

let entities: Partial<ConfigurationEntity>[] = $state([]);
let entitiesRequested: Subject<void> = new Subject();

let selectedEntities: Partial<ConfigurationEntity>[] = [];
let selectedEntitiesInPageLookup: Record<string, boolean> = $state({});
let masterToggleState: 'checked' | 'indeterminate' | 'unchecked' = $state('unchecked');

let filterString: string = $state(null);
let selectedGroupId: string;
let selectedGroup: Group;
let withSubGroups: boolean = false;

let pageIndex: number = $state(0);
let pageSize: number = $state(25);

let sort: Sort = $state(null);

let typeStore = EntitySelectTypeStore(entityType);
let globalStore = EntitySelectGlobalStore;
let stateInitialized = false;

let loading: boolean = $state(true);

let liveValues: Record<string, unknown> = $state({});
let liveValueSubscription: Subscription;

let unsub = new Subject<void>();

const meta = $derived(getEntityMeta(entityType));
// Type and live value are signal-specific columns.
const showSignalColumns = $derived(entityType === EntityType.Signal);

// The backend has no sort parameter, so ordering applies to the loaded page.
const sortedEntities = $derived.by(() => {
  if (sort?.active !== 'Name') {
    return entities;
  }

  const factor = sort.direction === 'desc' ? -1 : 1;
  return [...entities].sort(
    (a, b) => factor * (a.Name?.Value ?? '').localeCompare(b.Name?.Value ?? '', 'de', { sensitivity: 'base' })
  );
});

EntitySelectSelectionStore.pipe(takeUntil(unsub)).subscribe((state) => {
  selectedEntities = state.selectedEntities;

  setupSelectedPageLookup();
  updateMasterToggleState();
});

combineLatest([globalStore.asObservable(), typeStore.asObservable()])
  .pipe(takeUntil(unsub))
  .subscribe(([globalState, typeState]) => {
    selectedGroup = typeState.selectedGroup as Group;
    selectedGroupId = typeState.selectedGroup?.Id;
    filterString = typeState.filter;

    withSubGroups = globalState.queryWithSubGroups;
    stateInitialized = true;

    // Filter and scope changes always return to the first page.
    pageIndex = 0;
    pageSize = globalState.pageSize ?? 25;
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
  });
}

// Live values are per page: the previous page's subscription is dropped as
// soon as new rows arrive.
async function subscribeToLiveValues(signals: Partial<ConfigurationEntity>[]): Promise<void> {
  liveValueSubscription?.unsubscribe();
  liveValues = {};

  if (!liveValueService || entityType !== EntityType.Signal || signals.length === 0) {
    return;
  }

  const signalIds = signals.map((signal) => signal.Id);

  try {
    await liveValueService.connect();
  } catch (error) {
    console.error(error);
    return;
  }

  liveValueSubscription = liveValueService
    .subscribeToSignalValues(signalIds)
    .pipe(takeUntil(unsub))
    .subscribe((values) => {
      const next = { ...liveValues };

      for (const liveValue of values) {
        next[liveValue.identifier.replace('S:', '')] = liveValue.value;
      }

      liveValues = next;
    });
}

function resetFilter(): void {
  typeStore.update((state) => ({ ...state, filter: null }));
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
  liveValueSubscription?.unsubscribe();
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

    subscribeToLiveValues(entities);
  });
</script>

<div class="flex h-full flex-col overflow-hidden">
  <Table startSort={{ active: 'Name', direction: 'asc' }} onsort={(value) => (sort = value)}>
    <HeaderRow>
      {#if selectMultiple}
        <HeaderCell container$class="!flex-none w-[46px]" id="select">
          <Checkbox
            checked={masterToggleState === 'checked'}
            indeterminate={masterToggleState === 'indeterminate'}
            onchange={(checked) => toggleMasterSelect(checked)}
          />
        </HeaderCell>
      {/if}
      <HeaderCell container$class="flex-1 min-w-[160px]" id="Name" sortable>Name</HeaderCell>
      <HeaderCell container$class="!flex-none w-[200px]" id="Group">Gruppe</HeaderCell>
      {#if showSignalColumns}
        <HeaderCell container$class="!flex-none w-[110px]" id="Type">Typ</HeaderCell>
        <HeaderCell container$class="!flex-none w-[120px]" id="Value">Signalwert</HeaderCell>
      {/if}
    </HeaderRow>

    <!-- 2px indeterminate bar directly under the sticky header. -->
    <div class="sticky top-10 z-[1] h-[2px] w-full overflow-hidden {loading ? 'bg-primary-tint' : ''}">
      {#if loading}
        <div class="audako-indeterminate-bar h-full w-full bg-primary"></div>
      {/if}
    </div>

    {#each sortedEntities as entity (entity.Id)}
      <DataRow onclick={() => onEntitySelected(entity)}>
        {#if selectMultiple}
          <DataCell container$class="!flex-none w-[46px]">
            <Checkbox readonly checked={selectedEntitiesInPageLookup[entity.Id]} />
          </DataCell>
        {/if}

        <DataCell container$class="flex-1 min-w-[160px]">
          <div class="truncate">{entity.Name?.Value}</div>
        </DataCell>

        <DataCell container$class="!flex-none w-[200px] text-ink-secondary">
          <span class="truncate">
            {#await nameService.resolveName(EntityType.Group, entity.GroupId) then name}
              {name ?? ''}
            {/await}
          </span>
        </DataCell>

        {#if showSignalColumns}
          <DataCell container$class="!flex-none w-[110px] text-ink-secondary">
            <span class="truncate">{formatSignalType(entity)}</span>
          </DataCell>

          <DataCell container$class="!flex-none w-[120px]">
            <span class="truncate">{formatSignalValue(entity, liveValues[entity.Id])}</span>
          </DataCell>
        {/if}
      </DataRow>
    {/each}

    {#if !loading && entities.length === 0}
      <div class="flex flex-col items-center gap-2 py-10">
        <span class="material-symbols-rounded select-none text-[24px] text-ink-tertiary">search_off</span>
        <div class="text-cell text-ink-secondary">Keine {meta.plural} für diese Filter</div>
        {#if filterString}
          <button type="button" class="cursor-pointer text-meta text-primary hover:underline" onclick={() => resetFilter()}>
            Filter zurücksetzen
          </button>
        {/if}
      </div>
    {/if}

    {#snippet pagination()}
      <Paginator {pageIndex} {pageSize} {totalCount} onchangePage={onPageChanged} />
    {/snippet}
  </Table>
</div>
