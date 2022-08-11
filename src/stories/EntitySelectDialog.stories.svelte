<script>
import { Meta, Story } from '@storybook/addon-svelte-csf';
import { EntitySelectDialogService } from '../components/entity-select/entity-select-dialog.service';
import { EntityType } from 'audako-core';
import EntitySelectDialog from '../components/entity-select/EntitySelectDialog.svelte';

function openEntitySelect() {
  const entitySelectDialogService = new EntitySelectDialogService();
  entitySelectDialogService.selectEntity(EntityType.Signal);
}
</script>

<Meta title="EntitySelectDialog" component={EntitySelectDialog} />

<Story name="Default">
  <button on:click={() => openEntitySelect()}>Select Entity</button>
</Story>
