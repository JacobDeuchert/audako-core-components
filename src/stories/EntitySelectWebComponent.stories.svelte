<script module>
import { defineMeta } from '@storybook/addon-svelte-csf';
import EntitySelectDialog from '../components/entity-select/EntitySelectDialog.svelte';

const { Story } = defineMeta({
  title: 'Entity Select Web Component',
  component: EntitySelectDialog,
});
</script>

<script>
let entitySelect;

$: if (entitySelect) {
  entitySelect.addEventListener('selected', (event) => {
    console.log(event);
  });
  entitySelect.addEventListener('close', (event) => {
    console.log(event);
  });
}
</script>

<Story name="Default" asChild>
  <div style="height: 500px">
    <audako-entity-select bind:this={entitySelect} entitytype="Signal" multiple="true"></audako-entity-select>
  </div>
</Story>
