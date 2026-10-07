<script lang="ts">
import { ConfigurationEntity, EntityHttpService, EntityNameService, EntityType, Group, LiveValueService } from '@audako/core';
import type { PaginationResponse } from '@audako/core';
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
import ValueView from '../../shared/components/value-view/ValueView.svelte';
import { createSignalValueViewSettings, type DateValuePair } from '../../shared/components/value-view/value-view.types';
import { getEntityMeta } from './entity-select-meta';
import { formatSignalType } from './signal-format';
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

// Keyed by signal id; the timestamp drives the value's tooltip.
let liveValues: Record<string, DateValuePair> = $state({});
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
        next[liveValue.identifier.replace('S:', '')] = {
          value: liveValue.value,
          timestamp: liveValue.timestamp,
        };
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

<div class="entity-table">
  <Table startSort={{ active: 'Name', direction: 'asc' }} onsort={(value) => (sort = value)}>
    <HeaderRow>
      {#if selectMultiple}
        <HeaderCell container$class="col-select" id="select">
          <Checkbox
            checked={masterToggleState === 'checked'}
            indeterminate={masterToggleState === 'indeterminate'}
            onchange={(checked) => toggleMasterSelect(checked)}
          />
        </HeaderCell>
      {/if}
      <HeaderCell id="Name" sortable>Name</HeaderCell>
      <HeaderCell container$class="col-group" id="Group">Gruppe</HeaderCell>
      {#if showSignalColumns}
        <HeaderCell container$class="col-type" id="Type">Typ</HeaderCell>
        <HeaderCell container$class="col-value" id="Value">Signalwert</HeaderCell>
      {/if}
    </HeaderRow>

    <!-- 2px indeterminate bar directly under the sticky header. -->
    <div class="loading-track" class:loading>
      {#if loading}
        <div class="loading-bar"></div>
      {/if}
    </div>

    {#each sortedEntities as entity (entity.Id)}
      <DataRow onclick={() => onEntitySelected(entity)}>
        {#if selectMultiple}
          <DataCell container$class="col-select">
            <Checkbox readonly checked={selectedEntitiesInPageLookup[entity.Id]} />
          </DataCell>
        {/if}

        <DataCell>
          <div class="truncate">{entity.Name?.Value}</div>
        </DataCell>

        <DataCell container$class="col-group col-muted">
          <span class="truncate">
            {#await nameService.resolveName(EntityType.Group, entity.GroupId) then name}
              {name ?? ''}
            {/await}
          </span>
        </DataCell>

        {#if showSignalColumns}
          <DataCell container$class="col-type col-muted">
            <span class="truncate">{formatSignalType(entity)}</span>
          </DataCell>

          <DataCell container$class="col-value">
            <ValueView settings={createSignalValueViewSettings(entity)} value={liveValues[entity.Id]} />
          </DataCell>
        {/if}
      </DataRow>
    {/each}

    {#if !loading && entities.length === 0}
      <div class="empty">
        <span class="material-symbols-rounded empty-icon">search_off</span>
        <div class="empty-text">Keine {meta.plural} für diese Filter</div>
        {#if filterString}
          <button type="button" class="reset-filter" onclick={() => resetFilter()}>Filter zurücksetzen</button>
        {/if}
      </div>
    {/if}

    {#snippet pagination()}
      <Paginator {pageIndex} {pageSize} {totalCount} onchangePage={onPageChanged} />
    {/snippet}
  </Table>
</div>

<style>
.entity-table {
  display: flex;
  height: 100%;
  flex-direction: column;
  overflow: hidden;
}

/* Column widths. The cells are rendered by HeaderCell/DataCell, so the classes
   passed to them are global here; the row rules give every cell flex: 1. */
.entity-table :global(.col-select) {
  flex: none;
  width: 46px;
}

.entity-table :global(.col-group) {
  flex: none;
  width: 200px;
}

.entity-table :global(.col-type) {
  flex: none;
  width: 110px;
}

.entity-table :global(.col-value) {
  flex: none;
  width: 120px;
}

.entity-table :global(.col-muted) {
  color: var(--color-ink-secondary);
}

.truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.loading-track {
  position: sticky;
  top: 40px;
  z-index: 1;
  height: 2px;
  width: 100%;
  overflow: hidden;
}

.loading-track.loading {
  background-color: var(--color-primary-tint);
}

.loading-bar {
  height: 100%;
  width: 100%;
  background-color: var(--color-primary);
  transform-origin: 0% 50%;
  animation: indeterminate 1s infinite linear;
}

@keyframes indeterminate {
  0% {
    transform: translateX(0) scaleX(0);
  }
  40% {
    transform: translateX(0) scaleX(0.4);
  }
  100% {
    transform: translateX(100%) scaleX(0.5);
  }
}

.empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding-block: 40px;
}

.empty-icon {
  color: var(--color-ink-tertiary);
}

.empty-text {
  font-size: var(--text-cell);
  color: var(--color-ink-secondary);
}

.reset-filter {
  font-size: var(--text-meta);
  color: var(--color-primary);
  cursor: pointer;
}

@media (hover: hover) {
  .reset-filter:hover {
    text-decoration-line: underline;
  }
}
</style>
