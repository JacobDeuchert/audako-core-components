<script module>
import { defineMeta } from '@storybook/addon-svelte-csf';
import EntitySelectDialog from '../components/entity-select/EntitySelectDialog.svelte';

const { Story } = defineMeta({
  title: 'Entity Select Web Component',
  component: EntitySelectDialog,
});
</script>

<Story name="Default" asChild>
  <div style="height: 500px">
    <audako-entity-select
      entitytype="Signal"
      multiple="true"
      onselected={(event) => console.log(event)}
      onclose={(event) => console.log(event)}
    ></audako-entity-select>
  </div>
</Story>
