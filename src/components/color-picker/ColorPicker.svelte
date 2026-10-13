<script lang="ts">
import { tick } from 'svelte';
import PopupContainer from '../../shared/components/popup-container/PopupContainer.svelte';
import ColorPickerPanel from '../../shared/components/color-picker/ColorPickerPanel.svelte';
import { parseHex, sameColor } from '../../shared/components/color-picker/color';
import {
  type ColorPaletteGroup,
  CUSTOM_COLORS_LIMIT,
  defaultColorPalette,
  RECENT_COLORS_LIMIT,
  sanitizeColors,
} from '../../shared/components/color-picker/color-palette';

interface Props {
  value?: string | null;
  palette?: ColorPaletteGroup[];
  customColors?: string[];
  customColorsLimit?: number;
  recentColors?: string[];
  recentColorsLimit?: number;
  /** Offer the "no colour" action in the picker. */
  allowClear?: boolean;
  disabled?: boolean;
  /** Smaller trigger for dense rows. */
  compact?: boolean;
  title?: string;
  onvalueChange?: (color: string | null) => void;
  /**
   * The colour being mixed while the picker is open, for hosts that show it live. Not a change of the
   * value: when the picker closes without applying, it reports the value once more to undo the preview.
   */
  onvaluePreview?: (color: string | null) => void;
  oncustomColorsChange?: (colors: string[]) => void;
  onrecentColorsChange?: (colors: string[]) => void;
}

let {
  value = null,
  palette = defaultColorPalette,
  customColors = [],
  customColorsLimit = CUSTOM_COLORS_LIMIT,
  recentColors = [],
  recentColorsLimit = RECENT_COLORS_LIMIT,
  allowClear = false,
  disabled = false,
  compact = false,
  title = 'Farbe auswählen',
  onvalueChange,
  onvaluePreview,
  oncustomColorsChange,
  onrecentColorsChange,
}: Props = $props();

/** Same breakpoint as the main UI: an anchored popup leaves too little room next to the trigger. */
const FULLSCREEN_QUERY = '(max-width: 600px)';

// Follow the host's values, but keep what the user did meanwhile if the host does not write the
// change back — the next opening still shows the colour and the slots the user just saved.
let current = $derived(parseHex(value));
let customs = $derived(sanitizeColors(customColors, customColorsLimit));
let recents = $derived(sanitizeColors(recentColors, recentColorsLimit));

let open = $state(false);
let fullscreen = $state(false);
let trigger: HTMLButtonElement = $state(null);
let popupContainer: PopupContainer;
/** A preview was reported in this opening and has been neither applied nor undone. */
let previewing = false;

async function openPicker(): Promise<void> {
  if (disabled || open) {
    return;
  }
  fullscreen = window.matchMedia(FULLSCREEN_QUERY).matches;
  open = true;
  // The panel is mounted per opening, so it starts from the current value; it has to be rendered
  // before the popup measures it.
  await tick();
  popupContainer.openPopup();
}

function closePicker(): void {
  popupContainer?.closePopup();
}

/** However the popup closed — a button in it, Escape or a click outside. */
function popupClosed(): void {
  open = false;
  if (previewing) {
    previewing = false;
    onvaluePreview?.(current);
  }
  trigger?.focus({ preventScroll: true });
}

/** Hands the mixed colour to the host and closes; it also becomes the newest recent pick. */
function apply(color: string): void {
  if (recentColorsLimit > 0) {
    recents = [color, ...recents.filter((recent) => !sameColor(recent, color))].slice(0, recentColorsLimit);
    onrecentColorsChange?.([...recents]);
  }
  setValue(color);
  closePicker();
}

function clear(): void {
  setValue(null);
  closePicker();
}

function preview(color: string): void {
  previewing = true;
  onvaluePreview?.(color);
}

function setValue(color: string | null): void {
  previewing = false;
  current = color;
  onvalueChange?.(color);
}

function customColorsChanged(colors: string[]): void {
  customs = colors;
  oncustomColorsChange?.([...colors]);
}
</script>

<button
  bind:this={trigger}
  type="button"
  class="trigger"
  class:open
  class:compact
  part="trigger"
  {disabled}
  title={current ?? title}
  aria-label={title}
  aria-haspopup="dialog"
  aria-expanded={open}
  onclick={openPicker}
>
  <!-- No colour: keep the slot for a stable button size, but show it empty — a white swatch would
       read as a selection. -->
  <span class="swatch" class:empty={!current} part="swatch" style:background-color={current}></span>
  <span class="material-symbols-rounded chevron">{open ? 'expand_less' : 'expand_more'}</span>
</button>

<PopupContainer bind:this={popupContainer} anchorElement={trigger} position={{ x: 0, y: 6 }} onclose={popupClosed}>
  {#if open}
    <ColorPickerPanel
      value={current}
      {palette}
      customColors={customs}
      {customColorsLimit}
      recentColors={recents}
      {allowClear}
      {title}
      {fullscreen}
      oncustomColorsChange={customColorsChanged}
      onpreview={preview}
      onapply={apply}
      onclear={clear}
      onclose={closePicker}
    />
  {/if}
</PopupContainer>

<style>
.trigger {
  display: inline-flex;
  height: 40px;
  align-items: center;
  gap: 4px;
  padding: 0 6px;
  border: 1px solid var(--color-line);
  border-radius: var(--radius-control);
  background-color: var(--color-surface);
  color: var(--color-ink);
  cursor: pointer;
  transition: var(--transition-colors);
}

.trigger:hover {
  background-color: color-mix(in srgb, var(--color-ink) 2%, var(--color-surface));
}

/* Open state and keyboard focus only recolour the border, like a focused outlined field — no halo.
   Focus returns to the trigger on close, so a mouse click must not leave an indicator. */
.trigger.open,
.trigger:focus-visible {
  outline: none;
  border-color: var(--color-primary);
}

.trigger:focus:not(:focus-visible) {
  outline: none;
}

/* Near-white colours would vanish on the surface, so the swatch keeps a hairline border. */
.swatch {
  width: 28px;
  height: 28px;
  flex: none;
  border: 1px solid color-mix(in srgb, var(--color-ink) 16%, transparent);
  border-radius: 6px;
}

.swatch.empty {
  border: 1px dashed color-mix(in srgb, var(--color-ink) 35%, transparent);
  background: transparent;
}

.chevron {
  flex: none;
  font-size: 20px;
  color: var(--color-ink-tertiary);
}

.trigger:disabled {
  border-color: transparent;
  background-color: color-mix(in srgb, var(--color-ink) 7%, transparent);
  cursor: default;
}

.trigger:disabled .swatch {
  opacity: 0.38;
}

.trigger:disabled .chevron {
  color: var(--color-ink-disabled);
}

/* Compact variant for dense rows — the default 40px button blows up the row height. */
.trigger.compact {
  height: 30px;
  gap: 2px;
  padding: 0 4px;
}

.trigger.compact .swatch {
  width: 22px;
  height: 22px;
  border-radius: 5px;
}

.trigger.compact .chevron {
  font-size: 16px;
}
</style>
