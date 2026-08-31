<svelte:options
  customElement={{
    shadow: 'open',
    extend: withShadowStyles,
    props: {
      entityType: { attribute: 'entitytype', type: 'String' },
      multiple: { attribute: 'multiple', type: 'Boolean' },
      filter: { attribute: 'filter', type: 'Object' },
    },
  }}
/>

<script lang="ts">
import { EntityType } from 'audako-core';
import EntitySelect from './EntitySelect.svelte';
import { PopupService } from '../../shared/services/popup.service';
import { tryRegisterService } from '../../utils/service-functions';
import { withShadowStyles } from '../../styles/shadow-styles';

interface Props {
  entityType?: EntityType;
  multiple?: boolean;
  filter?: Record<string, any>;
}

let { entityType = undefined, multiple = false, filter = undefined }: Props = $props();

tryRegisterService(PopupService, new PopupService(document.body));

const isValidEntityType = $derived(Object.values(EntityType).includes(entityType as EntityType));

function onSelectedEntities(entities: unknown) {
  $host().dispatchEvent(
    new CustomEvent('selected', {
      detail: entities,
      bubbles: true,
      composed: true,
    })
  );
}
</script>

<div class="w-full h-full overflow-hidden">
  {#if isValidEntityType}
    <EntitySelect
      {entityType}
      selectMultiple={multiple}
      additionalFilter={filter ?? {}}
      onselectedEntities={onSelectedEntities}
    />
  {/if}
</div>
