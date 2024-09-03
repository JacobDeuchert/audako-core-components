<script lang="ts">
import { TenantHttpService, TenantView } from 'audako-core';
import { resolveService } from '../../utils/service-functions';
import { createEventDispatcher } from 'svelte';
import IconButton from '../../shared/components/icon-button/IconButton.svelte';
import type { TWCallable } from 'twind';

let enttiyTenantSelect = resolveService(TenantHttpService);


export let allowBack = false;
export let tw: TWCallable;

let tenantPath: TenantView[] = [];
let tenants: TenantView[] = [];
const eventDispatcher = createEventDispatcher();

async function setupBrowser(): Promise<void> {
  const topTenants = await enttiyTenantSelect.getTopTenants();

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
  const children = await enttiyTenantSelect.getNextTenants(tenant.Id);
  tenants = children;
}

async function browseTenant(tenant: TenantView): Promise<void> {
  tenantPath = [...tenantPath, tenant];
  loadChildren(tenant);
}

async function selectTenantInPath(tenant: TenantView): Promise<void> {
  if (tenant.Id == 'start') {
    setupBrowser();
    return;
  }

  const index = tenantPath.findIndex((t) => t.Id === tenant.Id);
  tenantPath = tenantPath.slice(0, index + 1);
  loadChildren(tenant);
}

function selectTenant(event: CustomEvent, tenant: TenantView): void {
  console.log(event, tenant);
  event.detail.stopPropagation();
  eventDispatcher('tenantSelected', { tenant: tenant });
}

setupBrowser();
</script>

<div class={tw`w-full overflow-hidden flex flex-col`}>
  <div class={tw`flex items-center`}>
    {#if allowBack}
      <IconButton size="small" on:click={() => eventDispatcher('back')}>arrow_back</IconButton>
    {/if}
    <div class={tw`font-bold text-gray-600 text-lg`}>Mandant auswählen</div>
  </div>

  <div class={tw`flex mb-1`}>
    {#each tenantPath as tenant, i}
      <div class={tw`cursor-pointer hover:bg-slate-100 p-1`} on:click={() => selectTenantInPath(tenant)}>
        {tenant.Name}{i == tenantPath.length - 1 ? '' : ' /'}
      </div>
    {/each}
  </div>
  <div style="grid-auto-rows: 60px" class={tw`grid grid-cols-2 gap-2 flex-1 overflow-auto`}>
    {#each tenants as tenant}
      <div
        class={tw`flex justify-between bg-gray-200 hover:bg-gray-300 shadow-sm rounded-sm cursor-pointer`}
        on:click={() => browseTenant(tenant)}
      >
        <div class={tw`mt-2 ml-2 `}>
          {tenant?.Name}
        </div>
        {#if tenant.Root}
          <div>
            <IconButton on:click={(event) => selectTenant(event, tenant)}>done</IconButton>
          </div>
        {/if}
      </div>
    {/each}
  </div>
</div>
