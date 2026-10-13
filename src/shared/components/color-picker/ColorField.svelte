<script lang="ts">
import { track, type TrackPosition } from './track';

interface Props {
  hue?: number;
  saturation?: number;
  value?: number;
  /** The mixed colour, shown inside the handle. */
  color?: string;
  onpositionChange?: (position: { saturation: number; value: number }) => void;
}

let { hue = 0, saturation = 0, value = 1, color = '#ffffff', onpositionChange }: Props = $props();

function picked(position: TrackPosition): void {
  onpositionChange?.({ saturation: position.x, value: 1 - position.y });
}
</script>

<!-- Saturation runs left to right, value bottom to top, over the hue picked in the slider. Painted
     with CSS gradients, so it scales to any box and the handle is a plain element. -->
<div class="field" style:background-color="hsl({hue}, 100%, 50%)" use:track={picked}>
  <span class="handle" style:left="{saturation * 100}%" style:top="{(1 - value) * 100}%" style:background-color={color}></span>
</div>

<style>
/* The hue is the element's background colour; white washes it out to the left, black covers it
   towards the bottom. The frame is a box-shadow, not a border: a gradient is laid out against the
   padding box but painted to the border box, so a border would show the tiled other end of the
   gradient along the edges, and the colour under the pointer would not be the one picked. */
.field {
  position: relative;
  flex: 1 1 auto;
  min-width: 0;
  border-radius: 10px;
  box-shadow: 0 0 0 1px color-mix(in srgb, var(--color-ink) 16%, transparent);
  background-image:
    linear-gradient(to top, #000 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(to right, #fff 0%, rgba(255, 255, 255, 0) 100%);
  cursor: crosshair;
  touch-action: none;
}

/* Two rings, so the handle stays visible on both a white and a black corner of the field. */
.handle {
  position: absolute;
  width: 16px;
  height: 16px;
  margin: -8px 0 0 -8px;
  border: 2px solid #fff;
  border-radius: 50%;
  box-shadow:
    0 0 0 1px rgba(0, 0, 0, 0.45),
    0 1px 3px rgba(0, 0, 0, 0.35);
  pointer-events: none;
}
</style>
