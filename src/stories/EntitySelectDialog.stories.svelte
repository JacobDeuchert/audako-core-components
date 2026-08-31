<script module>
import { defineMeta } from '@storybook/addon-svelte-csf';
import EntitySelectDialog from '../components/entity-select/EntitySelectDialog.svelte';

const { Story } = defineMeta({
  title: 'EntitySelectDialog',
  component: EntitySelectDialog,
});
</script>

<script>
import { EntitySelectDialogService } from '../components/entity-select/entity-select-dialog.service';
import { EntityType } from 'audako-core';

function openEntitySelect() {
  const entitySelectDialogService = new EntitySelectDialogService();
  entitySelectDialogService.selectEntity(EntityType.Signal);
}
</script>

<Story name="Default" asChild>
  <button onclick={() => openEntitySelect()}>Select Entity</button>
</Story>
