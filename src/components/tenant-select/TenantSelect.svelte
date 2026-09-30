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
<div class="flex h-full min-h-0 w-full flex-col gap-[14px] overflow-hidden px-5 py-[14px]">
  <div class="flex flex-col gap-[14px]">
    <div class="flex items-center gap-3">
      {#if allowBack}
        <IconButton size={36} iconSize={20} icon="arrow_back" onclick={() => onback?.()} />
      {/if}

      <div class="flex-none text-section font-semibold text-ink">Mandant auswählen</div>

      <div
        class="ml-auto flex h-10 min-w-0 max-w-[420px] flex-1 items-center gap-2 rounded-[10px] border border-line bg-surface pl-3 pr-[6px] transition-colors focus-within:border-primary"
      >
        <span class="material-symbols-rounded select-none text-[20px] text-ink-tertiary">search</span>
        <input
          placeholder="Mandant suchen"
          class="w-full bg-transparent text-cell text-ink outline-none placeholder:text-ink-tertiary"
          bind:value={filter}
        />
        {#if filter}
          <IconButton size={28} iconSize={18} icon="close" title="Suche leeren" onclick={() => (filter = '')} />
        {/if}
      </div>
    </div>

    <div class="flex min-h-6 min-w-0 flex-wrap items-center text-[15px] text-ink">
      {#if !searching}
        {#each tenantPath as tenant, i}
          {#if i < tenantPath.length - 1}
            <button
              type="button"
              class="cursor-pointer whitespace-nowrap opacity-70 hover:underline focus-visible:underline"
              onclick={() => selectTenantInPath(tenant)}
            >
              {tenant.Name}
            </button>
            <span class="material-symbols-rounded select-none text-[18px] opacity-70">chevron_right</span>
          {:else}
            <span class="truncate font-medium">{tenant.Name}</span>
          {/if}
        {/each}
      {:else}
        <span class="opacity-70">Suchergebnisse</span>
      {/if}
    </div>
  </div>

  <!-- The padding gives the hover shadows room inside the scroll clip; the
       negative margin keeps the rows aligned with the header. -->
  <div class="-mx-3 -mb-3 flex min-h-0 flex-1 flex-col gap-2 overflow-y-auto px-3 pb-3 pt-[2px]">
    {#each tenants as tenant (tenant.Id)}
      {@const disabled = tenant.Enabled === false || tenant.Locked}
      {@const subTenants = subTenantCounts[tenant.Id] ?? 0}
      <div
        class="tenant-row flex flex-none items-center gap-3 rounded-[12px] border border-line bg-surface p-2"
        class:cursor-pointer={!disabled}
        class:tenant-row--disabled={disabled}
        onclick={() => !disabled && onRowClick(tenant)}
      >
        <span class="grid h-9 w-9 flex-none place-items-center rounded-[10px] bg-primary-tint-subtle text-primary">
          <span class="material-symbols-rounded select-none text-[18px]">
            {toMaterialLigature(resolveTenantIcon(tenant))}
          </span>
        </span>

        <div class="min-w-0 flex-1">
          <div class="truncate text-[14px] font-semibold text-ink">{tenant?.Name}</div>
          {#if tenant.Description}
            <div class="mt-px truncate text-[12px] text-ink-secondary">{tenant.Description}</div>
          {/if}
        </div>

        {#if disabled}
          <span
            class="material-symbols-rounded flex-none select-none text-[20px] text-ink-secondary"
            title="Mandant ist deaktiviert"
          >
            lock
          </span>
        {/if}

        {#if subTenants > 0}
          <span class="flex-none whitespace-nowrap text-[12px] text-ink-secondary">{subTenantLabel(subTenants)}</span>
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
      <div class="flex flex-col items-center gap-2 py-10">
        <span class="material-symbols-rounded select-none text-[24px] text-ink-tertiary">search_off</span>
        <div class="text-cell text-ink-secondary">Keine Mandanten gefunden</div>
      </div>
    {/if}
  </div>
</div>

<style>
/* Same hover lift as the UI's .tenant-row. */
.tenant-row {
  transition:
    border-color 0.15s,
    box-shadow 0.15s;
}

.tenant-row:not(.tenant-row--disabled):hover {
  border-color: rgba(0, 0, 0, 0.2);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
}

.tenant-row--disabled {
  opacity: 0.65;
}
</style>
