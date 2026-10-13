<script lang="ts">
import { track, type TrackPosition } from './track';

interface Props {
  hue?: number;
  onhueChange?: (hue: number) => void;
}

let { hue = 0, onhueChange }: Props = $props();

function picked(position: TrackPosition): void {
  onhueChange?.(position.x * 360);
}
</script>

<div class="hue-slider">
  <div class="track" use:track={picked}>
    <span class="handle" style:left="{(hue / 360) * 100}%"></span>
  </div>
</div>

<style>
/* Inset by half a handle so it stays inside the box at both ends of the strip; the negative margin
   gives that inset back, so the strip still lines up with the square above. */
.hue-slider {
  flex: none;
  padding: 0 5px;
  margin: 0 -5px;
}

/* Framed with a box-shadow for the same reason as the square (see ColorField). */
.track {
  position: relative;
  width: 100%;
  height: 14px;
  border-radius: 7px;
  box-shadow: 0 0 0 1px color-mix(in srgb, var(--color-ink) 16%, transparent);
  background: linear-gradient(to right, #f00 0%, #ff0 16.66%, #0f0 33.33%, #0ff 50%, #00f 66.66%, #f0f 83.33%, #f00 100%);
  cursor: ew-resize;
  touch-action: none;
}

.handle {
  position: absolute;
  top: 50%;
  width: 10px;
  height: 20px;
  margin-left: -5px;
  transform: translateY(-50%);
  border: 2px solid #fff;
  border-radius: 5px;
  box-shadow:
    0 0 0 1px rgba(0, 0, 0, 0.45),
    0 1px 3px rgba(0, 0, 0, 0.35);
  pointer-events: none;
}
</style>
