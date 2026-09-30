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

// Second line of a row: description if the tenant has one, otherwise what can
// be said about its structure.
function getTenantMeta(tenant: TenantView, subTenants: number): string {
  const parts: string[] = [];

  if (tenant.Description) {
    parts.push(tenant.Description);
  }

  if (subTenants > 0) {
    parts.push(`${subTenants} ${subTenants === 1 ? 'Untermandant' : 'Untermandanten'}`);
  }

  if (!tenant.Root && parts.length === 0) {
    parts.push('nur Untermandanten');
  }

  return parts.join(' · ');
}

setupBrowser();

onDestroy(() => {
  unsub.next();
  unsub.complete();
});
</script>

<div class="flex h-full min-h-0 w-full flex-col overflow-hidden px-5 py-[14px]">
  <div class="mb-3 flex items-start gap-2">
    {#if allowBack}
      <IconButton size={36} iconSize={20} icon="arrow_back" onclick={() => onback?.()} />
    {/if}

    <div class="min-w-0 flex-1">
      <div class="text-section text-ink">Mandant auswählen</div>

      {#if !searching}
        <div class="mt-[2px] flex flex-wrap items-center text-meta text-ink-secondary">
          {#each tenantPath as tenant, i}
            <span
              class="cursor-pointer rounded-[4px] px-1 py-[2px] transition-colors hover:bg-neutral-hover {i ===
              tenantPath.length - 1
                ? 'font-medium text-ink'
                : ''}"
              onclick={() => selectTenantInPath(tenant)}
            >
              {tenant.Name}
            </span>
            {#if i < tenantPath.length - 1}
              <span class="text-ink-tertiary">/</span>
            {/if}
          {/each}
        </div>
      {:else}
        <div class="mt-[2px] text-meta text-ink-tertiary">Suchergebnisse</div>
      {/if}
    </div>

    <div
      class="flex h-10 w-[280px] flex-none items-center rounded-control border border-line pl-3 pr-[10px] transition-colors focus-within:border-primary"
    >
      <input
        placeholder="Filter"
        class="w-full bg-transparent text-cell text-ink outline-none placeholder:text-ink-tertiary"
        bind:value={filter}
      />
      {#if filter}
        <IconButton size={26} iconSize={16} icon="close" onclick={() => (filter = '')} />
      {:else}
        <span class="material-symbols-rounded ml-2 select-none text-[18px] text-ink-tertiary">search</span>
      {/if}
    </div>
  </div>

  <div class="min-h-0 flex-1 overflow-auto rounded-dialog border border-line">
    {#each tenants as tenant (tenant.Id)}
      {@const disabled = tenant.Enabled === false || tenant.Locked}
      {@const subTenants = subTenantCounts[tenant.Id] ?? 0}
      {@const meta = getTenantMeta(tenant, subTenants)}
      <div
        class="flex items-center gap-3 border-b border-row-line px-4 py-[10px] transition-colors last:border-b-0 hover:bg-row-hover"
        class:cursor-pointer={!disabled}
        class:opacity-50={disabled}
        onclick={() => !disabled && onRowClick(tenant)}
      >
        <div class="flex h-9 w-9 flex-none items-center justify-center rounded-control bg-muted">
          <span class="material-symbols-rounded select-none text-[20px] text-ink-secondary">
            {toMaterialLigature(resolveTenantIcon(tenant))}
          </span>
        </div>

        <div class="min-w-0 flex-1">
          <div class="truncate text-cell text-ink">{tenant?.Name}</div>
          {#if meta}
            <div class="truncate text-sub text-ink-tertiary">{meta}</div>
          {/if}
        </div>

        {#if disabled}
          <span class="material-symbols-rounded select-none text-[18px] text-ink-tertiary" title="Mandant ist deaktiviert">
            lock
          </span>
        {/if}

        {#if subTenants > 0 && !disabled}
          <IconButton
            size={36}
            iconSize={20}
            icon="chevron_right"
            title="Untermandanten anzeigen"
            onclick={(event) => onChevronClick(event, tenant)}
          />
        {/if}
      </div>
    {/each}

    {#if tenants.length === 0}
      <div class="flex flex-col items-center gap-2 py-10">
        <span class="material-symbols-rounded select-none text-[24px] text-ink-tertiary">search_off</span>
        <div class="text-cell text-ink-secondary">Keine Mandanten gefunden</div>
      </div>
    {/if}
  </div>
</div>
