<script module>
import { defineMeta } from '@storybook/addon-svelte-csf';
import Select from '../shared/components/select/Select.svelte';

const { Story } = defineMeta({
  title: 'Select Web Component',
  component: Select,
});
</script>

<script>
import { EntityType } from '@audako/core';

const entityTypes = Object.keys(EntityType);
const options = [
  { label: 'All', value: 'all' },
  ...entityTypes.map((entityType) => ({ label: entityType, value: entityType })),
];

let value = $state(['all']);
</script>

<Story name="Default" asChild>
  <audako-select
    placeholder="Type"
    multiple
    {options}
    arrayvalue={value}
    onvaluechanged={(event) => (value = event.detail)}
  ></audako-select>
</Story>
