<script module>
import { defineMeta } from '@storybook/addon-svelte-csf';
import { fn, userEvent, within } from 'storybook/test';

import IconButton from '../shared/components/icon-button/IconButton.svelte';
import { accountItems, entityActions, entityTypeItems } from './helpers/menu-items';
import ViewportEdges from './helpers/ViewportEdges.svelte';

// <audako-menu> renders no trigger of its own: the host page passes a selector
// for the element the menu opens at and calls openMenu() on the element. The
// stories wrap it in a small mock host page, the way the configurator's task
// pane uses it.
const { Story } = defineMeta({
  title: 'Menu Web Component',
  parameters: { layout: 'fullscreen' },
  args: { onselect: fn() },
  argTypes: {
    items: {
      control: 'object',
      description: 'Menu entries as `{ icon?: string; label: string; keepOpen?: boolean }`. The story adds the `action` that reports the pick; for `keepOpen` entries it stops the click propagation, so the menu stays open.',
    },
    placement: {
      control: 'inline-radio',
      options: ['toolbar', 'footer'],
      description: 'Where the host page puts the trigger. Near the bottom edge the menu opens upwards.',
    },
    onselect: { table: { disable: true } },
  },
});

// Opens the menu on load, so the story shows it without a click.
async function openOnLoad({ canvasElement }) {
  await userEvent.click(within(canvasElement).getByTitle('Weitere Aktionen'));
}
</script>

<script>
let menu = $state();
let edgeMenus = $state({});
let lastPick = $state(null);

function withActions(items, onselect) {
  return items.map((item) => ({
    ...item,
    action: (event) => {
      if (item.keepOpen) {
        event.stopPropagation();
      }
      lastPick = item.label;
      onselect(item.label);
    },
  }));
}
</script>

{#snippet trigger(anchorId)}
  <div id={anchorId} class="trigger">
    <IconButton icon="more_vert" title="Weitere Aktionen" onclick={() => menu.openMenu()} />
  </div>
{/snippet}

{#snippet template({ items, placement, onselect }, { id })}
  {@const anchorId = `menu-anchor-${id}`}
  <div class="page">
    <header class="app-bar">
      <span class="material-symbols-rounded app-icon">water_drop</span>
      <div class="app-title">Pumpwerk Am Bach</div>
      {#if placement === 'toolbar'}
        {@render trigger(anchorId)}
      {/if}
    </header>

    <main class="content">
      {#if lastPick}
        Gewählt: <strong>{lastPick}</strong>
      {:else}
        Das Menü öffnet sich über <span class="material-symbols-rounded inline-icon">more_vert</span>
      {/if}
    </main>

    <footer class="status-bar">
      <span class="status-dot"></span>
      <div class="status-text">
        <div>Verbunden mit</div>
        <div class="status-url">https://demo.audako.net/api</div>
      </div>
      {#if placement === 'footer'}
        {@render trigger(anchorId)}
      {/if}
    </footer>

    <audako-menu bind:this={menu} anchorselector={`#${anchorId}`} items={withActions(items, onselect)}></audako-menu>
  </div>
{/snippet}

<!-- One menu per trigger: the custom element always prefers opening below and
     left-aligned, and flips or shifts where the viewport edge is too close. -->
{#snippet edges({ items, onselect }, { id })}
  <ViewportEdges>
    {#snippet children(position)}
      {@const anchorId = `menu-anchor-${id}-${position.key}`}
      <div id={anchorId} class="trigger">
        <IconButton
          icon="more_vert"
          title={`Menü ${position.label}`}
          onclick={() => edgeMenus[position.key].openMenu()}
        />
      </div>
      <audako-menu
        bind:this={edgeMenus[position.key]}
        anchorselector={`#${anchorId}`}
        items={withActions(items, onselect)}
      ></audako-menu>
    {/snippet}
  </ViewportEdges>
{/snippet}

<Story name="Toolbar" args={{ items: entityActions, placement: 'toolbar' }} {template} play={openOnLoad} />

<Story name="Footer" args={{ items: accountItems, placement: 'footer' }} {template} play={openOnLoad} />

<Story name="Long List" args={{ items: entityTypeItems, placement: 'toolbar' }} {template} play={openOnLoad} />

<Story
  name="Viewport Edges"
  args={{ items: entityActions }}
  argTypes={{ placement: { table: { disable: true } } }}
  template={edges}
/>

<style>
.page {
  display: flex;
  height: 100vh;
  flex-direction: column;
  background-color: var(--color-surface);
  font-size: var(--text-cell);
  color: var(--color-ink);
}

.app-bar,
.status-bar {
  display: flex;
  flex: none;
  align-items: center;
  gap: 12px;
  padding: 10px 12px 10px 18px;
}

.app-bar {
  border-bottom: 1px solid var(--color-line);
}

.status-bar {
  border-top: 1px solid var(--color-line);
}

.app-icon {
  color: var(--color-primary);
}

.app-title {
  flex: 1;
  font-size: var(--text-dialog-title);
}

.trigger {
  display: flex;
}

.content {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  gap: 4px;
  color: var(--color-ink-secondary);
}

.inline-icon {
  font-size: 18px;
}

.status-dot {
  height: 12px;
  width: 12px;
  flex: none;
  border-radius: 50%;
  background-color: #439769;
}

.status-text {
  min-width: 0;
  flex: 1;
}

.status-url {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: var(--text-meta);
  color: var(--color-ink-secondary);
}
</style>
