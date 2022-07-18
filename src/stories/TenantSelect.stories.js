
import TenantSelect from '../components/tenant-select/TenantSelect.svelte';
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export


console.log(process.env.STORYBOOK_THEME);

// More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes
export default {
  title: 'Tenant Select',
  component: TenantSelect,
  argTypes: {
  },
};

// More on component templates: https://storybook.js.org/docs/svelte/writing-stories/introduction#using-args
const Template = (args) => ({
  Component: TenantSelect,
  props: args,
  on: {
    click: args.onClick,
  },
});


export const Small = Template.bind({});
