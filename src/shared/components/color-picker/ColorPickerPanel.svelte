<script lang="ts">
import { onMount, untrack } from 'svelte';
import IconButton from '../icon-button/IconButton.svelte';
import ColorMixer from './ColorMixer.svelte';
import { parseHex, sameColor } from './color';
import { type ColorPaletteEntry, type ColorPaletteGroup, CUSTOM_COLORS_LIMIT, paletteEntry } from './color-palette';

interface Props {
  /** The colour the picker was opened on; the mixer starts there. */
  value?: string | null;
  palette?: ColorPaletteGroup[];
  customColors?: string[];
  customColorsLimit?: number;
  recentColors?: string[];
  allowClear?: boolean;
  title?: string;
  /** Fills the viewport instead of hanging from the trigger (phones). */
  fullscreen?: boolean;
  oncustomColorsChange?: (colors: string[]) => void;
  /** The mixed colour changed; nothing is applied until `onapply`. */
  onpreview?: (color: string) => void;
  onapply?: (color: string) => void;
  onclear?: () => void;
  onclose?: () => void;
}

let {
  value = null,
  palette = [],
  customColors = [],
  customColorsLimit = CUSTOM_COLORS_LIMIT,
  recentColors = [],
  allowClear = false,
  title = 'Farbe auswählen',
  fullscreen = false,
  oncustomColorsChange,
  onpreview,
  onapply,
  onclear,
  onclose,
}: Props = $props();

/** Start value of the mixer when the picker is opened on a field that has no colour yet. */
const FALLBACK_COLOR = '#4c6a42';
/** Gap the popup keeps to the viewport edges while it is dragged. */
const VIEWPORT_MARGIN = 8;

type ActionKind = 'add' | 'remove' | 'replace' | 'picking' | 'saved';

interface Action {
  kind: ActionKind;
  label: string;
  icon: string;
  danger: boolean;
  disabled: boolean;
}

interface Cell {
  color: string;
  label: string;
  /** Whether the mixer holds this colour — the swatch wearing the selection ring. */
  selected: boolean;
}

interface Group {
  key: string;
  label: string;
  /** `n/12` on the own colours, empty on the fixed sets. */
  counter: string;
  cells: Cell[];
  /** The user's own colours: the action row under the mixer writes into this block. */
  custom: boolean;
}

// The panel is mounted per opening, so these start from what the picker was opened with.
const start = untrack(() => parseHex(value) ?? FALLBACK_COLOR);
let mixed = $state(start);
let customs = $state<string[]>(untrack(() => [...customColors]));
/** The own colours are full and the user picked the action: the next click replaces a slot. */
let replacing = $state(false);
/** Set right after the mixed colour was written into a slot, so the row can say so. */
let justSaved = $state(false);

let mixer: ColorMixer;
let root: HTMLDivElement;
let palettePane: HTMLDivElement;

/**
 * The palette column: the recent picks on top, one block per palette set, the user's own colours
 * last. Sets share colours (#FF0000 is both a basic and a signal colour), so only the first match
 * wears the ring — two rings would read as two selections.
 */
const groups = $derived.by((): Group[] => {
  let ringed = false;
  const cell = (color: string, label: string): Cell => {
    const selected = !ringed && sameColor(color, mixed);
    ringed ||= selected;
    return { color, label, selected };
  };

  const result: Group[] = [];
  if (recentColors.length > 0) {
    result.push({
      key: 'recent',
      label: 'Zuletzt verwendet',
      counter: '',
      cells: recentColors.map((color) => cell(color, '')),
      custom: false,
    });
  }
  palette.forEach((group, index) => {
    result.push({
      key: `palette-${index}`,
      label: group.label,
      counter: '',
      cells: (group.colors ?? [])
        .map((entry: ColorPaletteEntry) => paletteEntry(entry))
        .filter((entry) => !!entry.color)
        .map((entry) => cell(entry.color, entry.label)),
      custom: false,
    });
  });
  if (customColorsLimit > 0) {
    result.push({
      key: 'custom',
      label: replacing ? 'Zu ersetzende Farbe wählen' : 'Benutzerdefiniert',
      counter: replacing ? '' : `${customs.length}/${customColorsLimit}`,
      cells: customs.map((color) => cell(color, '')),
      custom: true,
    });
  }
  return result;
});

/**
 * The one action the mixed colour allows on the own colours. A single row that changes its meaning,
 * rather than a set of buttons of which all but one are dead: the colour is either in the own slots
 * or not, and the slots are either full or not.
 */
const action = $derived.by((): Action => {
  if (replacing) {
    return { kind: 'picking', label: 'Zu ersetzende Farbe wählen', icon: 'close', danger: false, disabled: false };
  }
  if (justSaved) {
    return { kind: 'saved', label: 'Zu eigenen Farben hinzugefügt', icon: 'check', danger: false, disabled: true };
  }
  if (customs.some((color) => sameColor(color, mixed))) {
    return { kind: 'remove', label: 'Aus eigenen Farben entfernen', icon: 'delete', danger: true, disabled: false };
  }
  if (customs.length >= customColorsLimit) {
    return { kind: 'replace', label: 'Eigene Farbe ersetzen', icon: 'swap_horiz', danger: false, disabled: false };
  }
  return { kind: 'add', label: 'Zu eigenen Farben hinzufügen', icon: 'add', danger: false, disabled: false };
});

onMount(() => {
  // The opener shows the popup right after mounting it; bring the current colour into view once it
  // is laid out, and give it focus — the popup has no focus trap.
  requestAnimationFrame(() => {
    const current = palettePane?.querySelector<HTMLElement>('.cell.selected');
    current?.scrollIntoView({ block: 'center', inline: 'nearest' });
    current?.focus({ preventScroll: true });
  });
});

/** Palette click: loads the colour into the mixer, or overwrites the slot while replacing. */
function selectCell(group: Group, index: number, cell: Cell): void {
  if (group.custom && replacing) {
    const next = [...customs];
    next[index] = mixed;
    storeCustomColors(next);
    replacing = false;
    justSaved = true;
    return;
  }
  // The mixer owns the colour and reports it back through `mixedChanged`.
  mixer.applyColor(cell.color);
}

/** Every change of the mixer — a drag, a readout edit, the eyedropper or a palette click. */
function mixedChanged(color: string): void {
  mixed = color;
  justSaved = false;
  replacing = false;
  onpreview?.(color);
}

function runAction(): void {
  switch (action.kind) {
    case 'add':
      storeCustomColors([...customs, mixed]);
      justSaved = true;
      break;
    case 'remove':
      storeCustomColors(customs.filter((color) => !sameColor(color, mixed)));
      break;
    case 'replace':
      replacing = true;
      break;
    case 'picking':
      replacing = false;
      break;
  }
}

function storeCustomColors(colors: string[]): void {
  customs = colors;
  oncustomColorsChange?.([...colors]);
}

// --- Dragging by the notch ---

let offset = $state({ x: 0, y: 0 });
let drag: { pointerId: number; x: number; y: number; offset: { x: number; y: number }; rect: DOMRect } | null = null;

function startDrag(event: PointerEvent): void {
  event.preventDefault();
  (event.currentTarget as HTMLElement).setPointerCapture(event.pointerId);
  drag = {
    pointerId: event.pointerId,
    x: event.clientX,
    y: event.clientY,
    offset: { ...offset },
    rect: root.getBoundingClientRect(),
  };
}

/** Bounded by the viewport, so the popup cannot be moved off-screen. */
function moveDrag(event: PointerEvent): void {
  if (drag?.pointerId !== event.pointerId) {
    return;
  }
  const { rect } = drag;
  const dx = clamp(event.clientX - drag.x, VIEWPORT_MARGIN - rect.left, window.innerWidth - VIEWPORT_MARGIN - rect.right);
  const dy = clamp(event.clientY - drag.y, VIEWPORT_MARGIN - rect.top, window.innerHeight - VIEWPORT_MARGIN - rect.bottom);
  offset = { x: drag.offset.x + dx, y: drag.offset.y + dy };
}

function endDrag(event: PointerEvent): void {
  if (drag?.pointerId === event.pointerId) {
    drag = null;
  }
}

function clamp(value: number, min: number, max: number): number {
  return Math.max(Math.min(min, 0), Math.min(value, Math.max(max, 0)));
}
</script>

<div
  bind:this={root}
  class="color-picker"
  class:fullscreen
  part="color-picker-popup"
  role="dialog"
  aria-label={title}
  style:transform={offset.x || offset.y ? `translate(${offset.x}px, ${offset.y}px)` : null}
>
  {#if !fullscreen}
    <!-- Widget-style grip notch: a small tab hanging from the top edge that drags the popup. -->
    <div
      class="notch"
      title="Verschieben"
      role="presentation"
      onpointerdown={startDrag}
      onpointermove={moveDrag}
      onpointerup={endDrag}
      onpointercancel={endDrag}
    >
      <span class="material-symbols-rounded">drag_handle</span>
    </div>
  {/if}

  <div class="header" part="header">
    <span class="header-icon">
      <span class="material-symbols-rounded">palette</span>
    </span>
    <div class="title" part="title">{title}</div>
    <IconButton size="large" iconSize={24} icon="close" title="Schließen" onclick={() => onclose?.()} />
  </div>

  <!-- One screen: the palette on the left, the mixer on the right, so a palette colour can be
       fine-tuned and a mixed one compared without switching. -->
  <div class="body">
    <div class="palette" bind:this={palettePane}>
      {#each groups as group (group.key)}
        <section class="group" aria-label={group.label}>
          <h3 class="group-title">
            <span class="group-name">{group.label}</span>
            {#if group.counter}
              <span class="group-counter">{group.counter}</span>
            {/if}
          </h3>
          {#if group.cells.length > 0}
            <div class="grid">
              {#each group.cells as cell, index (index)}
                <button
                  type="button"
                  class="cell"
                  part="swatch"
                  class:selected={cell.selected}
                  class:target={group.custom && replacing}
                  style:background-color={cell.color}
                  aria-pressed={cell.selected}
                  title={cell.label ? `${cell.label}: ${cell.color}` : cell.color}
                  onclick={() => selectCell(group, index, cell)}
                ></button>
              {/each}
            </div>
          {:else if group.custom}
            <p class="hint">Noch keine eigenen Farben gespeichert.</p>
          {/if}
        </section>
      {/each}
    </div>

    <div class="mixer">
      <ColorMixer bind:this={mixer} {start} touchUi={fullscreen} oncolorChange={mixedChanged} />

      <!-- The own colours are written from here: the mixed colour is added, dropped again, or —
           once all slots are taken — swapped into one of them. -->
      {#if customColorsLimit > 0}
        <button
          type="button"
          class="custom-action"
          class:danger={action.danger}
          disabled={action.disabled}
          title={action.kind === 'picking' ? 'Abbrechen' : null}
          onclick={runAction}
        >
          <span class="material-symbols-rounded">{action.icon}</span>
          {action.label}
        </button>
      {/if}
    </div>
  </div>

  <div class="footer" part="footer">
    <span class="footer-value">
      <span class="footer-swatch" style:background-color={mixed}></span>
      <span class="footer-label">{mixed}</span>
    </span>
    <span class="spacer"></span>
    {#if allowClear}
      <button type="button" class="text-button" onclick={() => onclear?.()}>Keine Farbe</button>
    {/if}
    <button type="button" class="text-button" onclick={() => onclose?.()}>Abbrechen</button>
    <button type="button" class="apply" part="button-primary" onclick={() => onapply?.(mixed)}>Übernehmen</button>
  </div>
</div>

<style>
/* Popup size: the width is capped by the viewport, the height comes from the body and is only capped
   here — by the viewport, and by the room PopupService finds next to the trigger. */
.color-picker {
  --swatch-size: 32px;
  --ring-width: 4px;
  --popup-height-cap: min(620px, calc(100vh - 16px), var(--popup-max-height, 620px));
  --surface-2: color-mix(in srgb, var(--color-ink) 4%, transparent);
  --swatch-border: color-mix(in srgb, var(--color-ink) 18%, transparent);

  position: relative;
  display: flex;
  width: min(600px, calc(100vw - 16px));
  max-height: var(--popup-height-cap);
  flex-direction: column;
  border: 1px solid var(--color-line);
  border-radius: 12px;
  background-color: var(--color-surface);
  box-shadow: var(--shadow-dialog);
  font-family: var(--font-family);
  font-size: 14px;
  line-height: 1.5;
  color: var(--color-ink);
  /* Size container for the narrow layout below (a query cannot target its own container). */
  container-type: inline-size;
}

/* Phones: the stacked layout needs every pixel it can get, and a sheet that only covers part of the
   screen leaves the mixer below the fold. */
.color-picker.fullscreen {
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100dvh;
  max-height: none;
  border: none;
  border-radius: 0;
  box-shadow: none;
}

.notch {
  position: absolute;
  top: 0;
  left: 50%;
  z-index: 2;
  display: flex;
  width: 44px;
  height: 16px;
  align-items: center;
  justify-content: center;
  transform: translateX(-50%);
  border: 1px solid var(--color-line);
  border-top: none;
  border-radius: 0 0 8px 8px;
  background-color: color-mix(in srgb, var(--color-surface) 85%, transparent);
  backdrop-filter: blur(4px);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);
  color: var(--color-ink-secondary);
  cursor: grab;
  touch-action: none;
  transition: var(--transition-colors);
}

.notch:hover {
  background-color: color-mix(in srgb, var(--color-surface) 95%, transparent);
  color: var(--color-primary);
}

.notch:active {
  cursor: grabbing;
}

.notch .material-symbols-rounded {
  font-size: 18px;
}

.header {
  display: flex;
  flex: none;
  align-items: center;
  gap: 12px;
  padding: 14px 14px 14px 18px;
  border-bottom: 1px solid var(--color-line);
}

.header-icon {
  display: grid;
  width: 38px;
  height: 38px;
  flex: none;
  place-items: center;
  border-radius: 9px;
  background-color: var(--color-primary-tint);
  color: var(--color-primary);
}

.header-icon .material-symbols-rounded {
  font-size: 22px;
}

.title {
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: var(--text-dialog-title);
  font-weight: 500;
}

/* Every palette block is meant to be on screen without scrolling, so the body is as tall as they
   are: one row of recent picks, two of basic colours, two of widget colours, one of signal colours
   and two of the own slots — plus the labels and the gaps between the blocks. */
.body {
  display: flex;
  flex: 1 1 auto;
  height: 470px;
  min-height: 0;
  overflow: auto;
}

/* `50%` rather than `0` as the flex basis: the columns' paddings differ, and a zero basis would
   split only the space left after them, putting the divider off centre. */
.palette {
  display: flex;
  flex: 1 1 50%;
  min-width: 0;
  flex-direction: column;
  gap: 12px;
  /* A scroll container clips both axes, so the outer swatches need this much inset for their ring. */
  padding: 14px var(--ring-width) 16px 16px;
  overflow-y: auto;
  overscroll-behavior: contain;
  scrollbar-gutter: stable;
  scrollbar-width: thin;
  scrollbar-color: color-mix(in srgb, var(--color-ink) 30%, transparent) transparent;
}

.group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.group-title {
  display: flex;
  align-items: baseline;
  gap: 6px;
  margin: 0;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.06em;
  line-height: 1.4;
  text-transform: uppercase;
  color: var(--color-ink-tertiary);
}

/* Set names run long, so the label wraps instead of ending in an ellipsis. */
.group-name {
  flex: 1;
  min-width: 0;
  overflow-wrap: break-word;
  hyphens: auto;
}

.group-counter {
  flex: none;
  font-weight: 500;
  letter-spacing: 0.02em;
  font-variant-numeric: tabular-nums;
}

/* The swatches keep their size and spread over the column instead of growing with it. The gap
   carries the selection ring plus what a hovered neighbour grows into it. */
.grid {
  display: grid;
  grid-template-columns: repeat(6, var(--swatch-size));
  justify-content: space-between;
  gap: calc(var(--ring-width) + 5px);
}

/* The colour is the whole cell. Hover lifts it slightly and the selection ring is drawn around it —
   a border that changes width would resize the colour area under the pointer. */
.cell {
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  padding: 0;
  border: 1px solid var(--swatch-border);
  border-radius: 6px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.12);
  cursor: pointer;
  transition:
    transform 0.12s ease,
    box-shadow 0.12s ease;
}

.cell:hover {
  z-index: 1;
  transform: scale(1.125);
  box-shadow:
    0 2px 4px -1px rgba(0, 0, 0, 0.2),
    0 4px 5px 0 rgba(0, 0, 0, 0.14),
    0 1px 10px 0 rgba(0, 0, 0, 0.12);
}

.cell:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

.cell.selected {
  box-shadow:
    0 0 0 2px var(--color-surface),
    0 0 0 var(--ring-width) var(--color-primary);
}

/* While a slot is being replaced every own colour is a target — declared after the selection ring
   on purpose, so the target ring wins on the ringed swatch. */
.cell.target {
  box-shadow:
    0 0 0 2px var(--color-surface),
    0 0 0 3px var(--color-primary);
}

.hint {
  margin: 0;
  font-size: 12px;
  line-height: 1.4;
  color: var(--color-ink-tertiary);
}

/* The other half; its left border is the divider, which runs the full height of the body. Never
   squeezed below what the square, the readouts and the action row need — the body scrolls instead. */
.mixer {
  display: flex;
  flex: 1 1 50%;
  min-width: 0;
  min-height: min-content;
  flex-direction: column;
  gap: 14px;
  padding: 14px 16px 16px 20px;
  border-left: 1px solid var(--color-line);
}

.custom-action {
  display: flex;
  flex: none;
  width: 100%;
  height: 32px;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding-inline: 15px;
  border: 1px solid var(--color-line);
  border-radius: var(--radius-button);
  font-size: 12.5px;
  font-weight: 500;
  color: var(--color-primary);
  cursor: pointer;
  transition: var(--transition-colors);
}

.custom-action .material-symbols-rounded {
  font-size: 18px;
}

.custom-action.danger {
  color: var(--color-danger);
}

.custom-action:disabled {
  color: var(--color-ink-disabled);
  cursor: default;
}

.footer {
  display: flex;
  flex: none;
  align-items: center;
  gap: 8px;
  padding: 12px 18px;
  border-top: 1px solid var(--color-line);
  font-size: 12.5px;
}

/* The mixed colour as one readable chip instead of a loose swatch next to loose text. */
.footer-value {
  display: flex;
  min-width: 0;
  align-items: center;
  gap: 8px;
  padding: 4px 10px 4px 5px;
  border-radius: 999px;
  background-color: var(--surface-2);
}

.footer-swatch {
  width: 18px;
  height: 18px;
  flex: none;
  border: 1px solid var(--swatch-border);
  border-radius: 50%;
}

.footer-label {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 500;
  font-variant-numeric: tabular-nums;
  color: var(--color-ink-secondary);
}

.spacer {
  flex: 1;
}

.text-button,
.apply {
  height: 32px;
  flex: none;
  padding-inline: 12px;
  border-radius: var(--radius-button);
  font-size: 12.5px;
  font-weight: 500;
  white-space: nowrap;
  cursor: pointer;
  transition: var(--transition-colors);
}

.text-button {
  color: var(--color-ink);
}

.apply {
  padding-inline: 16px;
  background-color: var(--color-primary);
  color: var(--color-on-primary);
}

@media (hover: hover) {
  .custom-action:not(:disabled):hover {
    background-color: var(--color-primary-tint-subtle);
  }

  .custom-action.danger:not(:disabled):hover {
    background-color: var(--color-danger-tint);
  }

  .text-button:hover {
    background-color: var(--color-neutral-hover);
  }

  .apply:hover {
    background-color: var(--color-primary-hover);
  }
}

/* Phones get tighter insets around header and footer. */
@media (max-width: 767px) {
  .header {
    padding: 8px 8px 8px 12px;
  }

  .footer {
    padding: 8px 8px 8px 12px;
  }
}

/* Narrow popup (phones, fullscreen): the two columns stack, the palette on top, and the body scrolls
   the two as one — the mixer is simply the last block of that scroll. */
@container (max-width: 480px) {
  .body {
    height: auto;
    flex-direction: column;
  }

  .palette {
    flex: none;
    min-height: 0;
    overflow: visible;
    padding: 14px 16px;
    scrollbar-gutter: auto;
  }

  /* Thumb-sized swatches: the grid spreads over the whole width. */
  .grid {
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }

  .mixer {
    flex: none;
    min-height: 0;
    gap: 8px;
    padding: 10px 16px 12px;
    border-left: none;
    border-top: 1px solid var(--color-line);
  }
}
</style>
