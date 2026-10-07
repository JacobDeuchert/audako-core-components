<script lang="ts">
import { TenantHttpService, TenantView } from '@audako/core';
import { debounceTime, distinctUntilChanged, Subject, takeUntil } from 'rxjs';
import { onDestroy } from 'svelte';

import IconButton from '../../shared/components/icon-button/IconButton.svelte';
import { resolveService } from '../../utils/service-functions';
import { resolveTenantIcon, sortTenantsByPosition, toMaterialLigature } from './tenant-view-utils';

// Matches the main UI's tenant browser (adk-tenant-browser).
const SEARCH_DEBOUNCE_MS = 300;

let tenantHttpService = resolveService(TenantHttpService);

interface Props {
  allowBack?: boolean;
  ontenantSelected?: (tenant: TenantView) => void;
  onback?: () => void;
}

let { allowBack = false, ontenantSelected, onback }: Props = $props();

let tenantPath: TenantView[] = $state([]);
let tenants: TenantView[] = $state([]);
let filter: string = $state('');
let searching: boolean = $state(false);

// Sub-tenant counts drive the chevron and the badge, the same way the UI
// resolves them: one children request per row, cached for the session.
let subTenantCounts: Record<string, number> = $state({});
let childrenCache: Record<string, TenantView[]> = {};

let unsub = new Subject<void>();
let searchTerm = new Subject<string>();

searchTerm
  .pipe(takeUntil(unsub), debounceTime(SEARCH_DEBOUNCE_MS), distinctUntilChanged())
  .subscribe((term) => searchTenants(term));

$effect(() => {
  searchTerm.next(filter);
});

async function setupBrowser(): Promise<void> {
  const topTenants = await tenantHttpService.getTopTenants();

  if (topTenants.length === 1) {
    const rootTenant = topTenants[0];
    if (rootTenant.Root == null) {
      browseTenant(rootTenant);
      return;
    }
  }

  tenantPath = [
    new TenantView({
      Id: 'start',
      Name: 'Start',
    }),
  ];

  setTenants(topTenants);
}

// Server-side, like the UI: a local filter would only ever see the level the
// user happens to have open.
async function searchTenants(term: string): Promise<void> {
  if (!term) {
    if (searching) {
      searching = false;
      setupBrowser();
    }
    return;
  }

  searching = true;

  try {
    setTenants(await tenantHttpService.filterTenantsByName(term), false);
  } catch (error) {
    console.error(error);
    setTenants([]);
  }
}

async function getChildren(tenantId: string): Promise<TenantView[]> {
  if (childrenCache[tenantId]) {
    return childrenCache[tenantId];
  }

  try {
    const children = await tenantHttpService.getNextTenants(tenantId);
    childrenCache[tenantId] = children;
    return children;
  } catch (error) {
    console.error(error);
    return [];
  }
}

function setTenants(list: TenantView[], sorted: boolean = true): void {
  tenants = sorted ? sortTenantsByPosition(list) : list;
  loadSubTenantCounts(list);
}

function loadSubTenantCounts(list: TenantView[]): void {
  for (const tenant of list) {
    if (subTenantCounts[tenant.Id] !== undefined) {
      continue;
    }

    getChildren(tenant.Id).then((children) => {
      subTenantCounts = { ...subTenantCounts, [tenant.Id]: children.length };
    });
  }
}

async function browseTenant(tenant: TenantView): Promise<void> {
  filter = '';
  searching = false;
  tenantPath = [...tenantPath, tenant];
  setTenants(await getChildren(tenant.Id));
}

async function selectTenantInPath(tenant: TenantView): Promise<void> {
  filter = '';
  searching = false;

  if (tenant.Id == 'start') {
    setupBrowser();
    return;
  }

  const index = tenantPath.findIndex((t) => t.Id === tenant.Id);
  tenantPath = tenantPath.slice(0, index + 1);
  setTenants(await getChildren(tenant.Id));
}

function onRowClick(tenant: TenantView): void {
  if (tenant.Root) {
    ontenantSelected?.(tenant);
    return;
  }

  if (subTenantCounts[tenant.Id] > 0) {
    browseTenant(tenant);
  }
}

function onChevronClick(event: MouseEvent, tenant: TenantView): void {
  // Stop the click from also selecting the tenant.
  event.stopPropagation();
  browseTenant(tenant);
}

function subTenantLabel(count: number): string {
  return `${count} ${count === 1 ? 'Mandant' : 'Mandanten'}`;
}

setupBrowser();

onDestroy(() => {
  unsub.next();
  unsub.complete();
});
</script>

<!-- Layout and row look follow the main UI's adk-tenant-browser and the row
     variant of adk-tenant-card. -->
<div class="tenant-select">
  <div class="head">
    <div class="title-row">
      {#if allowBack}
        <IconButton size={36} iconSize={20} icon="arrow_back" onclick={() => onback?.()} />
      {/if}

      <div class="title" part="title">Mandant auswählen</div>

      <div class="search" part="search-field">
        <span class="material-symbols-rounded search-icon">search</span>
        <input placeholder="Mandant suchen" bind:value={filter} />
        {#if filter}
          <IconButton size={28} iconSize={18} icon="close" title="Suche leeren" onclick={() => (filter = '')} />
        {/if}
      </div>
    </div>

    <div class="path">
      {#if !searching}
        {#each tenantPath as tenant, i}
          {#if i < tenantPath.length - 1}
            <button type="button" class="path-link" onclick={() => selectTenantInPath(tenant)}>
              {tenant.Name}
            </button>
            <span class="material-symbols-rounded dimmed">chevron_right</span>
          {:else}
            <span class="path-current">{tenant.Name}</span>
          {/if}
        {/each}
      {:else}
        <span class="dimmed">Suchergebnisse</span>
      {/if}
    </div>
  </div>

  <!-- The padding gives the hover shadows room inside the scroll clip; the
       negative margin keeps the rows aligned with the header. -->
  <div class="list">
    {#each tenants as tenant (tenant.Id)}
      {@const disabled = tenant.Enabled === false || tenant.Locked}
      {@const subTenants = subTenantCounts[tenant.Id] ?? 0}
      <div
        class="tenant-row"
        class:tenant-row--disabled={disabled}
        part="tenant-row {disabled ? 'tenant-row-disabled' : ''}"
        onclick={() => !disabled && onRowClick(tenant)}
      >
        <span class="tenant-tile">
          <span class="material-symbols-rounded">
            {toMaterialLigature(resolveTenantIcon(tenant))}
          </span>
        </span>

        <div class="tenant-text">
          <div class="tenant-name">{tenant?.Name}</div>
          {#if tenant.Description}
            <div class="tenant-description">{tenant.Description}</div>
          {/if}
        </div>

        {#if disabled}
          <span class="material-symbols-rounded secondary" title="Mandant ist deaktiviert">lock</span>
        {/if}

        {#if subTenants > 0}
          <span class="sub-tenants secondary">{subTenantLabel(subTenants)}</span>
        {/if}

        {#if subTenants > 0 && !disabled}
          <IconButton
            size={32}
            iconSize={20}
            icon="chevron_right"
            title="Untermandanten anzeigen"
            onclick={(event) => onChevronClick(event, tenant)}
          />
        {/if}
      </div>
    {/each}

    {#if tenants.length === 0}
      <div class="empty">
        <span class="material-symbols-rounded empty-icon">search_off</span>
        <div class="empty-text">Keine Mandanten gefunden</div>
      </div>
    {/if}
  </div>
</div>

<style>
.tenant-select {
  display: flex;
  height: 100%;
  min-height: 0;
  width: 100%;
  flex-direction: column;
  gap: 14px;
  overflow: hidden;
  padding: 14px 20px;
}

.head {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.title-row {
  display: flex;
  align-items: center;
  gap: 12px;
}

.title {
  flex: none;
  font-size: var(--text-section);
  font-weight: 600;
  color: var(--color-ink);
}

.search {
  display: flex;
  height: 40px;
  min-width: 0;
  max-width: 420px;
  flex: 1;
  align-items: center;
  gap: 8px;
  margin-left: auto;
  padding-left: 12px;
  padding-right: 6px;
  border: 1px solid var(--color-line);
  border-radius: 10px;
  background-color: var(--color-surface);
  transition: var(--transition-colors);
}

.search:focus-within {
  border-color: var(--color-primary);
}

.search-icon {
  color: var(--color-ink-tertiary);
}

.search input {
  width: 100%;
  font-size: var(--text-cell);
  color: var(--color-ink);
  outline: none;
}

.search input::placeholder {
  color: var(--color-ink-tertiary);
}

.path {
  display: flex;
  min-height: 24px;
  min-width: 0;
  flex-wrap: wrap;
  align-items: center;
  font-size: 15px;
  color: var(--color-ink);
}

.dimmed {
  opacity: 0.7;
}

.path-link {
  white-space: nowrap;
  opacity: 0.7;
  cursor: pointer;
}

.path-link:focus-visible {
  text-decoration-line: underline;
}

@media (hover: hover) {
  .path-link:hover {
    text-decoration-line: underline;
  }
}

.path-current {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 500;
}

.list {
  display: flex;
  min-height: 0;
  flex: 1;
  flex-direction: column;
  gap: 8px;
  overflow-y: auto;
  margin: 0 -12px -12px;
  padding: 2px 12px 12px;
}

/* Same hover lift as the UI's .tenant-row. */
.tenant-row {
  display: flex;
  flex: none;
  align-items: center;
  gap: 12px;
  padding: 8px;
  border: 1px solid var(--color-line);
  border-radius: 12px;
  background-color: var(--color-surface);
  transition:
    border-color 0.15s,
    box-shadow 0.15s;
}

.tenant-row:not(.tenant-row--disabled) {
  cursor: pointer;
}

.tenant-row:not(.tenant-row--disabled):hover {
  border-color: rgba(0, 0, 0, 0.2);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
}

.tenant-row--disabled {
  opacity: 0.65;
}

.tenant-tile {
  display: grid;
  height: 36px;
  width: 36px;
  flex: none;
  place-items: center;
  border-radius: 10px;
  background-color: var(--color-primary-tint-subtle);
  color: var(--color-primary);
}

.tenant-text {
  min-width: 0;
  flex: 1;
}

.tenant-name,
.tenant-description {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.tenant-name {
  font-size: 14px;
  font-weight: 600;
  color: var(--color-ink);
}

.tenant-description {
  margin-top: 1px;
  font-size: 12px;
  color: var(--color-ink-secondary);
}

.secondary {
  flex: none;
  color: var(--color-ink-secondary);
}

.sub-tenants {
  white-space: nowrap;
  font-size: 12px;
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
</style>
