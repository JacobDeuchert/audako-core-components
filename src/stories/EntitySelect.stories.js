import EntitySelect from '../components/entity-select/EntitySelect.svelte';

export default {
  title: 'Entity Select',
  component: EntitySelect,
  argTypes: {},
};

export const Small = {
  args: {
    selectMultiple: true,
  },
};
