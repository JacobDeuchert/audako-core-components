<script module>
import { defineMeta } from '@storybook/addon-svelte-csf';
import { fn } from 'storybook/test';

import IconButton from '../../shared/components/icon-button/IconButton.svelte';
import Menu from '../../shared/components/menu/Menu.svelte';
import { entityActions } from '../helpers/menu-items';
import ViewportEdges from '../helpers/ViewportEdges.svelte';

// The Svelte component behind <audako-menu>. Unlike the custom element it
// takes the preferred opening direction, so these stories cover every
// combination with a trigger at each viewport edge.
const { Story } = defineMeta({
  title: 'Shared Components/Menu',
  component: Menu,
  parameters: { layout: 'fullscreen' },
  args: { onselect: fn() },
  argTypes: {
    preferedVerticalAlignment: {
      control: 'inline-radio',
      options: ['top', 'bottom'],
      description: '`top` opens below the trigger and flips above it near the bottom edge; `bottom` opens above and flips below near the top edge.',
    },
    preferedHorizontalAlignment: {
      control: 'inline-radio',
      options: ['left', 'right'],
      description: '`left` starts at the trigger and shifts left to stay inside the right edge; `right` ends at the trigger, opening leftwards.',
    },
    onselect: { table: { disable: true } },
  },
});
</script>

<script>
let menus = $state({});
</script>

{#snippet template({ preferedVerticalAlignment, preferedHorizontalAlignment, onselect }, { id })}
  <ViewportEdges>
    {#snippet children(position)}
      {@const anchorId = `menu-anchor-${id}-${position.key}`}
      <div id={anchorId} class="trigger">
        <IconButton icon="more_vert" title={`Menü ${position.label}`} onclick={() => menus[position.key].openMenu()} />
      </div>
      <Menu
        bind:this={menus[position.key]}
        anchorSelector={`#${anchorId}`}
        {preferedVerticalAlignment}
        {preferedHorizontalAlignment}
        items={entityActions.map((item) => ({ ...item, action: () => onselect(item.label) }))}
      />
    {/snippet}
  </ViewportEdges>
{/snippet}

<Story
  name="Top Left"
  args={{ preferedVerticalAlignment: 'top', preferedHorizontalAlignment: 'left' }}
  {template}
/>

<Story
  name="Bottom Left"
  args={{ preferedVerticalAlignment: 'bottom', preferedHorizontalAlignment: 'left' }}
  {template}
/>

<Story
  name="Top Right"
  args={{ preferedVerticalAlignment: 'top', preferedHorizontalAlignment: 'right' }}
  {template}
/>

<Story
  name="Bottom Right"
  args={{ preferedVerticalAlignment: 'bottom', preferedHorizontalAlignment: 'right' }}
  {template}
/>

<style>
.trigger {
  display: flex;
}
</style>
