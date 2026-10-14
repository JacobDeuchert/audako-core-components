<!--
  Custom-element wrapper around ColorPicker. It does no persistence of its own:
  the host passes the palette, the user's own colours and the recent picks in,
  and stores what the change events report.
-->
<svelte:options
  customElement={{
    shadow: 'open',
    extend: withShadowStyles,
    props: {
      value: { attribute: 'value', type: 'String' },
      palette: { attribute: 'palette', type: 'Array' },
      customColors: { attribute: 'customcolors', type: 'Array' },
      customColorsLimit: { attribute: 'customcolorslimit', type: 'Number' },
      recentColors: { attribute: 'recentcolors', type: 'Array' },
      recentColorsLimit: { attribute: 'recentcolorslimit', type: 'Number' },
      allowClear: { attribute: 'allowclear', type: 'Boolean' },
      disabled: { attribute: 'disabled', type: 'Boolean' },
      compact: { attribute: 'compact', type: 'Boolean' },
      applyOnOutsideClick: { attribute: 'applyonoutsideclick', type: 'Boolean' },
      label: { attribute: 'label', type: 'String' },
      locale: { attribute: 'locale', type: 'String' },
      translations: { attribute: 'translations', type: 'Object' },
    },
  }}
/>

<script lang="ts">
import ColorPicker from './ColorPicker.svelte';
import type { ColorPaletteGroup } from '../../shared/components/color-picker/color-palette';
import { withShadowStyles } from '../../styles/shadow-styles';
import { provideI18n } from '../../i18n/i18n.svelte';
import type { TranslationOverrides } from '../../i18n/types';

interface Props {
  value?: string | null;
  palette?: ColorPaletteGroup[];
  customColors?: string[];
  customColorsLimit?: number;
  recentColors?: string[];
  recentColorsLimit?: number;
  allowClear?: boolean;
  disabled?: boolean;
  compact?: boolean;
  applyOnOutsideClick?: boolean;
  /** Popup title; `title` itself would also put a native tooltip on the element. */
  label?: string;
  /** Overrides the global language for this element. */
  locale?: string;
  /** Overrides single messages for this element. */
  translations?: TranslationOverrides;
}

// Unset props are passed on as undefined, so ColorPicker falls back to its own defaults.
let {
  value = null,
  palette = undefined,
  customColors = [],
  customColorsLimit = undefined,
  recentColors = [],
  recentColorsLimit = undefined,
  allowClear = false,
  disabled = false,
  compact = false,
  applyOnOutsideClick = false,
  label = undefined,
  locale = undefined,
  translations = undefined,
}: Props = $props();

provideI18n({ locale: () => locale, translations: () => translations });

function forward(name: string, detail: unknown) {
  $host().dispatchEvent(new CustomEvent(name, { detail, bubbles: true, composed: true }));
}
</script>

<ColorPicker
  {value}
  {palette}
  {customColors}
  {customColorsLimit}
  {recentColors}
  {recentColorsLimit}
  {allowClear}
  {disabled}
  {compact}
  {applyOnOutsideClick}
  title={label || undefined}
  onvalueChange={(color) => forward('valuechanged', color)}
  onvaluePreview={(color) => forward('valuepreview', color)}
  oncustomColorsChange={(colors) => forward('customcolorschanged', colors)}
  onrecentColorsChange={(colors) => forward('recentcolorschanged', colors)}
/>

<style>
:host {
  display: inline-block;
}
</style>
