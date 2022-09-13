<script>
import { Meta, Story } from '@storybook/addon-svelte-csf';
import { EntitySelectDialogService } from '../components/entity-select/entity-select-dialog.service';
import { EntityType } from 'audako-core';
import EntitySelectDialog from '../components/entity-select/EntitySelectDialog.svelte';

function openEntitySelect() {
  const entitySelectDialogService = new EntitySelectDialogService();
  entitySelectDialogService.selectEntity(EntityType.Signal);

}

let entitySelect;

$: {
  if (entitySelect) {
    console.log(entitySelect); 

    entitySelect.addEventListener('selected', (event) => {
      console.log(event);
    });
  }
}
</script>

<Meta title="Entity Select Web Component" component={EntitySelectDialog} />

<Story name="Default">
  <audako-entity-select bind:this={entitySelect} entityType="Signal"></audako-entity-select>
</Story>
