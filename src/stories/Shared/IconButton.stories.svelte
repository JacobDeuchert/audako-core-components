<script module>
import { defineMeta } from '@storybook/addon-svelte-csf';
import IconButton from '../../shared/components/icon-button/IconButton.svelte';

const { Story } = defineMeta({
  title: 'IconButton',
  component: IconButton,
});
</script>

<Story name="Primary" asChild>
  <IconButton icon={'add'} onclick={() => console.log('clicked')}></IconButton>
</Story>
