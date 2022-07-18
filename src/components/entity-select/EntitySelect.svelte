<script lang="ts">
  import EntitySelectSidebar from './EntitySelectSidebar.svelte';
  import {createEventDispatcher} from 'svelte';
  import EntitySelectTable from './EntitySelectTable.svelte';
  import EntitySelectFilter from './EntitySelectFilter.svelte';
  import {EntitySelectGlobalStore, EntitySelectTypeStore} from './entity-select-stores';
  import {EntityHttpService, EntityType, TenantHttpService, TenantView} from 'audako-core';
  import {resolveService} from '../../utils/service-functions';
  import TenantSelect from '../tenant-select/TenantSelect.svelte';

  export let entityType: EntityType = EntityType.Signal;

  let httpService: EntityHttpService = resolveService(EntityHttpService);
  let tenantHttpService: TenantHttpService = resolveService(TenantHttpService);

  let selectedTenant: TenantView;
  let inTenantSelect: boolean = false;

  let dispatcher = createEventDispatcher();

  EntitySelectGlobalStore.subscribe((state) => {
    if (state.selectedTenant) {
      inTenantSelect = false;
      getTenantView(state.selectedTenant);
    } else {
      inTenantSelect = true;
    }
  });

  async function getTenantView(id: string): Promise<void> {
    try {
      selectedTenant = await tenantHttpService.getTenantViewById(id);
    } catch (error) {
      console.error(error);
      inTenantSelect = true;
    }
  }

  async function onTenantSelected(tenant: TenantView): Promise<void> {
    console.log('Tenant selected', tenant);
    const rootGroup = await httpService.getEntityById(EntityType.Group, tenant.Root);
    EntitySelectGlobalStore.update((state) => ({...state, selectedTenant: tenant.Id}));
    EntitySelectTypeStore(entityType).update((state) => ({...state, selectedGroup: rootGroup}));
  }

  function onTenantChange(): void {
    inTenantSelect = true;
  }
</script>

<link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet">
<div class="p-4 flex w-full h-full">
  {#if inTenantSelect}
    <TenantSelect
      allowBack={!!selectedTenant}
      on:back={() => (inTenantSelect = false)}
      on:tenantSelected={(event) => onTenantSelected(event.detail.tenant)}
    />
  {:else}
    <div class="flex-1 border-r border-slate-400 overflow-hidden">
      <EntitySelectSidebar
        {entityType}
        {selectedTenant}
        on:changeTenant={() => onTenantChange()}
        on:entitySelected={(e) => dispatcher('entitySelected', {selectedEntity: e.detail.selectedEntity})}
      />
    </div>

    <div class="flex-[2] pl-4 pt-1 h-full overflow-hidden">
      <div class="flex flex-col h-full overflow-hidden">
        <EntitySelectFilter {entityType} />

        <div class="flex-1 overflow-hidden">
          <EntitySelectTable
            {entityType}
            on:entitySelected={(e) => dispatcher('entitySelected', {selectedEntity: e.detail.selectedEntity})}
          />
        </div>
      </div>
    </div>
  {/if}
</div>

<style lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>