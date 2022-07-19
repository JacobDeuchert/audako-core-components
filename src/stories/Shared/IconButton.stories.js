import IconButton from '../../shared/components/IconButton/IconButton.svelte';
import '../../index.css';
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes
export default {
  title: 'Shared Components/Button',
  component: IconButton,
  argTypes: {
    icon: {control: 'text'},
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },
};

// More on component templates: https://storybook.js.org/docs/svelte/writing-stories/introduction#using-args
const Template = (args) => ({
  Component: IconButton,
  props: args,
  on: {
    click: args.onClick,
  },
});

// More on args: https://storybook.js.org/docs/svelte/writing-stories/args
export const Primary = Template.bind({});
Primary.args = {
  icon: 'add',
  onClick: (event) => {
    console.log('clicked', event);
  }
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
  onClick: (event) => {
    console.log('clicked', event);
  }
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
  onClick: (event) => {
    console.log('clicked', event);
  }
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
  onClick: (event) => {
    console.log('clicked', event);
  }
};
