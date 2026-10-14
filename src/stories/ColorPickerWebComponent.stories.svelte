<script module>
import { defineMeta } from '@storybook/addon-svelte-csf';
import { fn, userEvent } from 'storybook/test';

import ViewportEdges from './helpers/ViewportEdges.svelte';

// Arrays go in as properties (camelCase); as attributes they would have to be
// JSON. <audako-color-picker> keeps nothing itself: the story plays the host, which
// stores the value, the own colours and the recent picks from the events and
// passes them back in.
const { Story } = defineMeta({
  title: 'Color Picker Web Component',
  args: {
    value: '#0070C0',
    customColors: ['#4c6a42', '#e07a5f', '#3d405b'],
    recentColors: ['#0070C0', '#FFC000', '#00B050'],
    allowClear: true,
    disabled: false,
    compact: false,
    onvaluechanged: fn(),
    onvaluepreview: fn(),
    oncustomcolorschanged: fn(),
    onrecentcolorschanged: fn(),
  },
  argTypes: {
    value: { control: 'color', description: 'Hex colour (`#RRGGBB`), or empty for no colour.' },
    palette: {
      control: 'object',
      description:
        'Groups as `{ label: string; colors: (string | { color: string; label?: string })[] }`. Unset, the default palette follows the language.',
    },
    locale: {
      control: 'select',
      options: [undefined, 'de', 'en', 'fr'],
      description: 'Overrides the global language; unsupported ones fall back to English.',
    },
    customColors: { control: 'object', description: "The user's own colours. `customcolorschanged` reports edits." },
    recentColors: { control: 'object', description: 'Newest first. `recentcolorschanged` reports the list after a pick.' },
    allowClear: { control: 'boolean', description: 'Offer "Keine Farbe".' },
    disabled: { control: 'boolean' },
    compact: { control: 'boolean', description: '30px trigger for dense rows.' },
    onvaluechanged: { table: { disable: true } },
    onvaluepreview: { table: { disable: true } },
    oncustomcolorschanged: { table: { disable: true } },
    onrecentcolorschanged: { table: { disable: true } },
  },
});

async function openOnLoad({ canvasElement }) {
  const picker = canvasElement.querySelector('audako-color-picker');
  await userEvent.click(picker.shadowRoot.querySelector('button'));
}
</script>

<script>
// What a host keeps between openings; reset when the story args change.
let stored = $state({});
// The colour the picker is previewing, shown on the sample like a styled element would.
let previewed = $state({});
</script>

{#snippet template(args, { id })}
  {@const state = stored[id] ?? args}
  <div class="host">
    <span class="sample" style:background-color={(previewed[id] ?? state.value) || null}></span>
    <audako-color-picker
      value={state.value ?? ''}
      palette={args.palette}
      locale={args.locale}
      customColors={state.customColors}
      recentColors={state.recentColors}
      allowClear={args.allowClear}
      disabled={args.disabled}
      compact={args.compact}
      onvaluechanged={(event) => {
        stored[id] = { ...state, value: event.detail };
        delete previewed[id];
        args.onvaluechanged(event.detail);
      }}
      onvaluepreview={(event) => {
        previewed[id] = event.detail;
        args.onvaluepreview(event.detail);
      }}
      oncustomcolorschanged={(event) => {
        stored[id] = { ...(stored[id] ?? state), customColors: event.detail };
        args.oncustomcolorschanged(event.detail);
      }}
      onrecentcolorschanged={(event) => {
        stored[id] = { ...(stored[id] ?? state), recentColors: event.detail };
        args.onrecentcolorschanged(event.detail);
      }}
    ></audako-color-picker>
    <code>{state.value || 'keine Farbe'}</code>
  </div>
{/snippet}

{#snippet edges(args)}
  <ViewportEdges>
    {#snippet children()}
      <audako-color-picker value={args.value} customColors={args.customColors} recentColors={args.recentColors}></audako-color-picker>
    {/snippet}
  </ViewportEdges>
{/snippet}

<Story name="Default" {template} play={openOnLoad} />

<Story name="Closed" {template} />

<Story name="No Colour" args={{ value: '', recentColors: [], customColors: [] }} {template} play={openOnLoad} />

<Story
  name="Custom Slots Full"
  args={{
    value: '#123456',
    customColors: [
      '#4c6a42',
      '#e07a5f',
      '#3d405b',
      '#81b29a',
      '#f2cc8f',
      '#264653',
      '#2a9d8f',
      '#e9c46a',
      '#f4a261',
      '#e76f51',
      '#6d597a',
      '#b56576',
    ],
  }}
  {template}
  play={openOnLoad}
/>

<Story
  name="Own Palette"
  args={{
    palette: [
      { label: 'Corporate', colors: ['#B2187A', '#8C1260', '#1F2937', '#6B7280', '#E5E7EB', '#FFFFFF'] },
      {
        label: 'Status',
        colors: [
          { color: '#2E7D32', label: 'OK' },
          { color: '#F9A825', label: 'Warnung' },
          { color: '#C62828', label: 'Fehler' },
        ],
      },
    ],
  }}
  {template}
  play={openOnLoad}
/>

<Story name="Compact" args={{ compact: true }} {template} />

<Story name="Disabled" args={{ disabled: true }} {template} />

<Story name="Viewport Edges" parameters={{ layout: 'fullscreen' }} template={edges} />

<style>
.host {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: var(--text-cell);
  color: var(--color-ink-secondary);
}

.sample {
  width: 48px;
  height: 48px;
  border: 1px solid var(--color-line);
  border-radius: var(--radius-control);
}
</style>
