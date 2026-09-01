<script lang="ts">
import { TenantHttpService, TenantView } from 'audako-core';

import IconButton from '../../shared/components/icon-button/IconButton.svelte';
import { resolveService } from '../../utils/service-functions';

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

const visibleTenants = $derived(
  filter ? tenants.filter((tenant) => tenant.Name?.toLowerCase().includes(filter.toLowerCase())) : tenants
);

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

  tenants = topTenants;
}

async function loadChildren(tenant: TenantView): Promise<void> {
  const children = await tenantHttpService.getNextTenants(tenant.Id);
  tenants = children;
}

async function browseTenant(tenant: TenantView): Promise<void> {
  filter = '';
  tenantPath = [...tenantPath, tenant];
  loadChildren(tenant);
}

async function selectTenantInPath(tenant: TenantView): Promise<void> {
  filter = '';

  if (tenant.Id == 'start') {
    setupBrowser();
    return;
  }

  const index = tenantPath.findIndex((t) => t.Id === tenant.Id);
  tenantPath = tenantPath.slice(0, index + 1);
  loadChildren(tenant);
}

function selectTenant(event: MouseEvent, tenant: TenantView): void {
  // Stop the click from also browsing into the tenant.
  event.stopPropagation();
  ontenantSelected?.(tenant);
}

setupBrowser();
</script>

<div class="flex h-full w-full flex-col overflow-hidden px-5 py-[14px]">
  <div class="mb-3 flex items-start gap-2">
    {#if allowBack}
      <IconButton size={36} iconSize={20} icon="arrow_back" onclick={() => onback?.()} />
    {/if}

    <div class="min-w-0 flex-1">
      <div class="text-section text-ink">Mandant auswählen</div>

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
    </div>

    <div
      class="flex h-10 w-[280px] flex-none items-center rounded-control border border-line pl-3 pr-[10px] transition-colors focus-within:border-primary"
    >
      <input
        placeholder="Filter"
        class="w-full bg-transparent text-cell text-ink outline-none placeholder:text-ink-tertiary"
        bind:value={filter}
      />
      <span class="material-symbols-rounded ml-2 select-none text-[18px] text-ink-tertiary">search</span>
    </div>
  </div>

  <div class="min-h-0 flex-1 overflow-auto rounded-dialog border border-line">
    {#each visibleTenants as tenant (tenant.Id)}
      <div
        class="flex cursor-pointer items-center gap-3 border-b border-row-line px-4 py-[10px] transition-colors last:border-b-0 hover:bg-row-hover"
        onclick={() => browseTenant(tenant)}
      >
        <div class="flex h-9 w-9 flex-none items-center justify-center rounded-control bg-muted">
          <span class="material-symbols-rounded select-none text-[20px] text-ink-secondary">domain</span>
        </div>

        <div class="min-w-0 flex-1">
          <div class="truncate text-cell text-ink">{tenant?.Name}</div>
          {#if !tenant.Root}
            <div class="truncate text-sub text-ink-tertiary">nur Untermandanten</div>
          {/if}
        </div>

        {#if tenant.Root}
          <IconButton
            size={36}
            iconSize={20}
            variant="primary"
            icon="check"
            title="Mandant übernehmen"
            onclick={(event) => selectTenant(event, tenant)}
          />
        {/if}

        <span class="material-symbols-rounded select-none text-[20px] text-ink-tertiary">chevron_right</span>
      </div>
    {/each}

    {#if visibleTenants.length === 0}
      <div class="flex flex-col items-center gap-2 py-10">
        <span class="material-symbols-rounded select-none text-[24px] text-ink-tertiary">search_off</span>
        <div class="text-cell text-ink-secondary">Keine Mandanten gefunden</div>
      </div>
    {/if}
  </div>
</div>
