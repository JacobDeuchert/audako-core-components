<script>
import IconButton from '../../shared/components/icon-button/IconButton.svelte';
import '../../index.css';
import { Meta, Story } from '@storybook/addon-svelte-csf';
import { ThemingService } from '@/shared/services/theming.service';
import { setContext } from 'svelte';
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes

const themingService = new ThemingService();
const twContext = themingService.createTwindContext();
setContext('tw', twContext.tw);





</script>

<Meta title="IconButton" component={IconButton} />

<Story name='Primary'>
  <IconButton icon={'add'} on:click={() => console.log('clicked')}></IconButton>
</Story>



<!-- // More on args: https://storybook.js.org/docs/svelte/writing-stories/args
export const Primary = Template.bind({});
Primary.args = {
  icon: 'add',
  onClick: (event) => {
    console.log('clicked', event);
  },
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
  onClick: (event) => {
    console.log('clicked', event);
  },
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
  onClick: (event) => {
    console.log('clicked', event);
  },
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
  onClick: (event) => {
    console.log('clicked', event);
  },
}; -->
