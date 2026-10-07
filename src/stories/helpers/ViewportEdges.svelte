<script>
// Lays out one trigger at each corner, at each edge midpoint and in the centre
// of the viewport, for checking where a popup opens near the edges. The
// `children` snippet renders the trigger for a position.
let { children } = $props();

const positions = [
  { key: 'top-left', label: 'oben links', style: 'top: 8px; left: 8px;' },
  { key: 'top', label: 'oben', style: 'top: 8px; left: 50%; translate: -50% 0;' },
  { key: 'top-right', label: 'oben rechts', style: 'top: 8px; right: 8px;' },
  { key: 'left', label: 'links', style: 'top: 50%; left: 8px; translate: 0 -50%;' },
  { key: 'center', label: 'Mitte', style: 'top: 50%; left: 50%; translate: -50% -50%;' },
  { key: 'right', label: 'rechts', style: 'top: 50%; right: 8px; translate: 0 -50%;' },
  { key: 'bottom-left', label: 'unten links', style: 'bottom: 8px; left: 8px;' },
  { key: 'bottom', label: 'unten', style: 'bottom: 8px; left: 50%; translate: -50% 0;' },
  { key: 'bottom-right', label: 'unten rechts', style: 'bottom: 8px; right: 8px;' },
];
</script>

<div class="edges">
  {#each positions as position (position.key)}
    <div class="edge" class:end={position.key.endsWith('right')} style={position.style}>
      {@render children(position)}
      <span class="label">{position.label}</span>
    </div>
  {/each}
</div>

<style>
.edges {
  position: relative;
  height: 100vh;
  background-color: var(--color-surface);
}

.edge {
  position: absolute;
  display: flex;
  align-items: center;
  gap: 4px;
}

/* Right-hand triggers keep their label inside the viewport. */
.edge.end {
  flex-direction: row-reverse;
}

.label {
  font-size: var(--text-meta);
  color: var(--color-ink-tertiary);
  white-space: nowrap;
}
</style>
