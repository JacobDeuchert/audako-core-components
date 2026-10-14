<script lang="ts">
import { onMount } from 'svelte';
import IconButton from '../icon-button/IconButton.svelte';
import ColorField from './ColorField.svelte';
import HueSlider from './HueSlider.svelte';
import { clampChannel, hexToRgb, type Hsv, hsvToRgb, parseHex, type Rgb, rgbToHex, rgbToHsv } from './color';
import { useI18n } from '../../../i18n/i18n.svelte';

interface Props {
  /** Value the mixer starts on; later changes are ignored (see `applyColor`). */
  start?: string;
  /** Touch layout: trades the screen picker for the room its row takes. */
  touchUi?: boolean;
  /** The mixed colour, on every change. Not called for the start value. */
  oncolorChange?: (color: string) => void;
}

let { start = '#ffffff', touchUi = false, oncolorChange }: Props = $props();

const i18n = useI18n();

/**
 * Its state is HSV, not RGB: RGB cannot say which hue a grey was mixed from, so an RGB-backed mixer
 * would lose the spectrum as soon as the colour reaches black, white or a grey, and the square
 * would jump back to red on the next drag. Every readout is derived from the HSV triple.
 */
let hsv = $state<Hsv>({ hue: 0, saturation: 0, value: 1 });
const rgb = $derived(hsvToRgb(hsv));
const hex = $derived(rgbToHex(rgb));

/** Chromium ships the EyeDropper API, Safari and Firefox do not — the button is hidden there. A
 *  touch device has nothing to hold the picker over, so it is dropped there as well. */
const eyeDropperSupported = typeof window !== 'undefined' && 'EyeDropper' in window && window.matchMedia('(hover: hover)').matches;
const showEyeDropper = $derived(eyeDropperSupported && !touchUi);

onMount(() => {
  // Silently: the host set this colour itself.
  applyRgb(hexToRgb(parseHex(start) ?? '#ffffff'), false);
});

/** Loads a colour the host picked (a palette swatch) into the mixer. */
export function applyColor(color: string): void {
  const parsed = parseHex(color);
  if (parsed) {
    applyRgb(hexToRgb(parsed));
  }
}

function setHsv(next: Hsv, emit = true): void {
  hsv = next;
  if (emit) {
    oncolorChange?.(hex);
  }
}

/** A grey has no hue and black has neither hue nor saturation: keep the mixer's own so the square
 *  and the strip stay where the user left them. */
function applyRgb(color: Rgb, emit = true): void {
  const next = rgbToHsv(color);
  setHsv(
    {
      hue: next.saturation === 0 ? hsv.hue : next.hue,
      saturation: next.value === 0 ? hsv.saturation : next.saturation,
      value: next.value,
    },
    emit,
  );
}

// The inputs read `currentTarget`, not `target`: the popup is moved into another shadow root, so
// Svelte's delegated listener only catches the event at the document, where `target` has been
// retargeted to that root's host.
function inputHex(event: Event): void {
  const parsed = parseHex((event.currentTarget as HTMLInputElement).value);
  if (parsed) {
    applyRgb(hexToRgb(parsed));
  }
}

/** Half-typed or invalid input stays in the field while it has focus; leaving it puts the mixer's
 *  own value back. */
function normalizeHex(event: Event): void {
  (event.currentTarget as HTMLInputElement).value = hex;
}

function setChannel(channel: keyof Rgb, event: Event): void {
  const input = event.currentTarget as HTMLInputElement;
  applyRgb({ ...rgb, [channel]: clampChannel(Number(input.value)) });
  // Out of range input is clamped, which may leave the colour as it was — show the clamped value.
  if (input.value !== '' && input.value !== String(rgb[channel])) {
    input.value = String(rgb[channel]);
  }
}

async function pickFromScreen(): Promise<void> {
  try {
    const { sRGBHex } = await new (window as any).EyeDropper().open();
    applyColor(sRGBHex);
  } catch (error: unknown) {
    // Dismissing the picker (Escape, right-click) rejects with AbortError — an expected outcome.
    if ((error as DOMException)?.name !== 'AbortError') {
      console.error('EyeDropper failed', error);
    }
  }
}
</script>

{#snippet channelField(label: string, channel: keyof Rgb)}
  <label class="readout">
    <span class="readout-label">{label}</span>
    <input
      class="readout-input"
      inputmode="numeric"
      maxlength="3"
      autocomplete="off"
      value={rgb[channel]}
      oninput={(event) => setChannel(channel, event)}
    />
  </label>
{/snippet}

<div class="mixer">
  <div class="field">
    <ColorField
      hue={hsv.hue}
      saturation={hsv.saturation}
      value={hsv.value}
      color={hex}
      onpositionChange={(position) => setHsv({ ...hsv, ...position })}
    />
  </div>

  <HueSlider hue={hsv.hue} onhueChange={(hue) => setHsv({ ...hsv, hue })} />

  <!-- Wrapper only for the stacked layout, where the two rows sit next to each other to keep the
       mixer flat; on the wide layout it is `display: contents` and the rows stay stacked. -->
  <div class="readouts">
    <div class="row row-hex">
      <label class="readout">
        <span class="readout-label">{i18n.t('colorPicker.hex')}</span>
        <input
          class="readout-input hex"
          spellcheck="false"
          autocomplete="off"
          maxlength="7"
          value={hex}
          oninput={inputHex}
          onblur={normalizeHex}
        />
      </label>
      {#if showEyeDropper}
        <IconButton icon="colorize" size="large" iconSize={24} title={i18n.t('colorPicker.eyedropper')} onclick={pickFromScreen} />
      {/if}
    </div>

    <div class="row row-rgb">
      {@render channelField('R', 'red')}
      {@render channelField('G', 'green')}
      {@render channelField('B', 'blue')}
    </div>
  </div>
</div>

<style>
/* A column next to the palette: the saturation square on top, the hue strip under it, the hex and
   R/G/B readouts below. It takes its height from that column as a flex line, so the square is as
   big as the popup allows. */
.mixer {
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  min-height: 0;
}

.field {
  display: flex;
  flex: 1 1 auto;
  min-height: 120px;
}

.readouts {
  display: contents;
}

.row {
  display: flex;
  flex: none;
  align-items: center;
  gap: 8px;
}

/* A filled text field: tinted box, rounded top, underline that turns into the accent on focus. */
.readout {
  position: relative;
  display: flex;
  flex: 1 1 0;
  min-width: 0;
  height: 48px;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 12px 6px;
  border-radius: 4px 4px 0 0;
  background-color: color-mix(in srgb, var(--color-ink) 5%, transparent);
  box-shadow: inset 0 -1px 0 color-mix(in srgb, var(--color-ink) 48%, transparent);
  cursor: text;
  transition:
    var(--transition-colors),
    box-shadow 0.15s cubic-bezier(0.4, 0, 0.2, 1);
}

.readout:hover {
  background-color: color-mix(in srgb, var(--color-ink) 8%, transparent);
  box-shadow: inset 0 -1px 0 var(--color-ink);
}

.readout:focus-within {
  box-shadow: inset 0 -2px 0 var(--color-primary);
}

.readout-label {
  position: absolute;
  top: 6px;
  left: 12px;
  font-size: 11.5px;
  line-height: 1.2;
  color: var(--color-ink-secondary);
  pointer-events: none;
}

.readout:focus-within .readout-label {
  color: var(--color-primary);
}

.readout-input {
  width: 100%;
  min-width: 0;
  outline: none;
  font-size: 14px;
  line-height: 20px;
  font-variant-numeric: tabular-nums;
  color: var(--color-ink);
  caret-color: var(--color-primary);
}

.hex {
  letter-spacing: 0.02em;
}

/* Stacked layout (phones, fullscreen): the mixer scrolls below the palette as part of one long
   scroll, so it sizes itself and stays flat — a fixed-height square, and the readouts collapse into
   one row: hex on the left, the R/G/B channels on the right. The container is the picker panel. */
@container (max-width: 480px) {
  .mixer {
    gap: 8px;
  }

  .field {
    flex: none;
    height: 110px;
    min-height: 0;
  }

  .readouts {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  /* The hex field holds seven characters, a channel field three — split the row accordingly. */
  .row-hex {
    flex: 1 1 36%;
    min-width: 0;
  }

  .row-rgb {
    flex: 1 1 64%;
    min-width: 0;
  }
}
</style>
