import { getLocale, translate } from '../../../i18n/i18n.svelte';
import type { TranslationKey } from '../../../i18n/types';
import { parseHex } from './color';

/** One swatch of a palette group: a hex colour, optionally with what it stands for. */
export type ColorPaletteEntry = string | { color: string; label?: string };

/** One titled block of the picker's palette column. */
export interface ColorPaletteGroup {
  label: string;
  colors: ColorPaletteEntry[];
}

/** Colour slots a user can define, unless the host sets another limit. */
export const CUSTOM_COLORS_LIMIT = 12;
/** Recent picks kept — one row of the palette, no more. */
export const RECENT_COLORS_LIMIT = 6;

/**
 * The palette of the main audako UI. Each set runs around the colour wheel — red, orange, yellow,
 * green, cyan, blue, violet, magenta — with equal hues ordered dark to light and the achromatic
 * entries at the end, so a row reads as a spectrum rather than as an arbitrary list. The meaning of
 * a signal colour rides on its label, not on its position.
 */
export function createDefaultColorPalette(t: (key: TranslationKey) => string): ColorPaletteGroup[] {
  return [
    {
      label: t('colorPicker.palette.basic'),
      colors: [
        '#C00000',
        '#FF0000',
        '#FFC000',
        '#FFFF00',
        '#92D050',
        '#00B050',
        '#00E8D0',
        '#00B0F0',
        '#0070C0',
        '#002060',
        '#7030A0',
        '#000000',
      ],
    },
    {
      label: t('colorPicker.palette.charts'),
      colors: [
        '#880000',
        '#FF8800',
        '#FFD599',
        '#888800',
        '#008800',
        '#00FF88',
        '#008888',
        '#000088',
        '#880088',
        '#FF99E6',
        '#FF0088',
        '#888888',
      ],
    },
    {
      label: t('colorPicker.palette.signals'),
      colors: [
        { color: '#FF0000', label: t('colorPicker.palette.fault') },
        { color: '#FFCC00', label: t('colorPicker.palette.manual') },
        { color: '#00FF00', label: t('colorPicker.palette.running') },
        { color: '#0000FF', label: t('colorPicker.palette.automatic') },
        { color: '#9900FF', label: t('colorPicker.palette.dcsManual') },
        { color: '#FF00CC', label: t('colorPicker.palette.repairSwitch') },
      ],
    },
  ];
}

/** The default palette with its labels in the given language, the global one by default. */
export function getDefaultColorPalette(locale: string = getLocale()): ColorPaletteGroup[] {
  return createDefaultColorPalette((key) => translate(locale, key));
}

/** The default palette with German labels. Use `getDefaultColorPalette` for other languages. */
export const defaultColorPalette: ColorPaletteGroup[] = getDefaultColorPalette('de');

/**
 * Only plain hex colours, at most `limit` of them — an unset or malformed slot is no slot at all,
 * never a white swatch that would answer to a white selection.
 */
export function sanitizeColors(colors: unknown, limit: number): string[] {
  if (!Array.isArray(colors)) {
    return [];
  }
  return colors
    .map(parseHex)
    .filter((color): color is string => !!color)
    .slice(0, Math.max(0, limit));
}

export function paletteEntry(entry: ColorPaletteEntry): { color: string | null; label: string } {
  return typeof entry === 'string' ? { color: parseHex(entry), label: '' } : { color: parseHex(entry?.color), label: entry?.label ?? '' };
}
