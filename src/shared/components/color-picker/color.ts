/** Hue in degrees (0–360), saturation and value as fractions (0–1). */
export interface Hsv {
  hue: number;
  saturation: number;
  value: number;
}

export interface Rgb {
  red: number;
  green: number;
  blue: number;
}

/** A full hex colour, with the leading `#` optional so a pasted `RRGGBB` is accepted too. */
const HEX_INPUT_PATTERN = /^#?[0-9a-f]{6}$/i;

/** `#rrggbb`, or null for anything else. Values handed in by the host go through this, so they come out
 *  in the same form the mixer reports. */
export function parseHex(value: unknown): string | null {
  if (typeof value !== 'string') {
    return null;
  }
  const trimmed = value.trim();
  return HEX_INPUT_PATTERN.test(trimmed) ? `#${trimmed.replace('#', '').toLowerCase()}` : null;
}

export function sameColor(a: string | null, b: string | null): boolean {
  return !!a && !!b && a.toLowerCase() === b.toLowerCase();
}

export function hexToRgb(hex: string): Rgb {
  const digits = hex.replace('#', '');
  return {
    red: parseInt(digits.slice(0, 2), 16),
    green: parseInt(digits.slice(2, 4), 16),
    blue: parseInt(digits.slice(4, 6), 16),
  };
}

export function rgbToHex(rgb: Rgb): string {
  const part = (channel: number) => clampChannel(channel).toString(16).padStart(2, '0');
  return `#${part(rgb.red)}${part(rgb.green)}${part(rgb.blue)}`;
}

export function clampChannel(channel: number): number {
  return Number.isFinite(channel) ? Math.min(255, Math.max(0, Math.floor(channel))) : 0;
}

/**
 * HSV is what a colour mixer is built on: hue picks the spectrum, saturation and value are the two
 * axes of its square. RGB cannot carry that state on its own — every shade of grey has the same
 * RGB triple no matter which hue it was mixed from — so the mixer keeps HSV and converts.
 */
export function rgbToHsv(rgb: Rgb): Hsv {
  const red = rgb.red / 255;
  const green = rgb.green / 255;
  const blue = rgb.blue / 255;
  const max = Math.max(red, green, blue);
  const delta = max - Math.min(red, green, blue);
  let hue = 0;
  if (delta > 0) {
    if (max === red) {
      hue = 60 * (((green - blue) / delta) % 6);
    } else if (max === green) {
      hue = 60 * ((blue - red) / delta + 2);
    } else {
      hue = 60 * ((red - green) / delta + 4);
    }
  }
  return {
    hue: (hue + 360) % 360,
    saturation: max === 0 ? 0 : delta / max,
    value: max,
  };
}

export function hsvToRgb(hsv: Hsv): Rgb {
  const chroma = hsv.value * hsv.saturation;
  const sector = (((hsv.hue % 360) + 360) % 360) / 60;
  const second = chroma * (1 - Math.abs((sector % 2) - 1));
  const base = hsv.value - chroma;
  const [red, green, blue] =
    sector < 1
      ? [chroma, second, 0]
      : sector < 2
        ? [second, chroma, 0]
        : sector < 3
          ? [0, chroma, second]
          : sector < 4
            ? [0, second, chroma]
            : sector < 5
              ? [second, 0, chroma]
              : [chroma, 0, second];
  return {
    red: Math.round((red + base) * 255),
    green: Math.round((green + base) * 255),
    blue: Math.round((blue + base) * 255),
  };
}
