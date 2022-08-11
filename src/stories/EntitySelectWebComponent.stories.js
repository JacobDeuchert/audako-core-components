import EntitySelect from '../components/entity-select/EntitySelect.svelte';

export default {
  title: 'Entity Select Web Component',
  component: EntitySelect,
  argTypes: {},
};

const Template = (args) => ({
  Component: EntitySelect,
  props: args,
});

export const Small = Template.bind({});
