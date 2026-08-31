<script module>
import { defineMeta } from '@storybook/addon-svelte-csf';
import Select from '../shared/components/select/Select.svelte';

const { Story } = defineMeta({
  title: 'Select Web Component',
  component: Select,
});
</script>

<script>
import { EntityType } from 'audako-core';

const entityTypes = Object.keys(EntityType);
const options = [
  { label: 'All', value: 'all' },
  ...entityTypes.map((entityType) => ({ label: entityType, value: entityType })),
];

let value = ['all'];
let select;

$: if (select) {
  select.addEventListener('valuechanged', (event) => {
    value = event.detail;
  });
}
</script>

<Story name="Default" asChild>
  <audako-select placeholder="Type" multiple options={options} arrayvalue={value} bind:this={select}></audako-select>
</Story>
