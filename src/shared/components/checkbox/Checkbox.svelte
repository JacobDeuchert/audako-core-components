<script lang="ts">
interface Props {
  readonly?: boolean;
  label?: string;
  // Toggled internally on click, so it must be bindable.
  checked?: boolean;
  indeterminate?: boolean;
  size?: number;
  container$class?: string;
  onchange?: (checked: boolean) => void;
}

let {
  readonly = false,
  label = '',
  checked = $bindable(false),
  indeterminate = false,
  size = 16,
  container$class = '',
  onchange,
}: Props = $props();

const showIndeterminate = $derived(indeterminate && !checked);
const filled = $derived(checked || showIndeterminate);

function onClick(): void {
  if (readonly) {
    return;
  }

  checked = !checked;
  onchange?.(checked);
}
</script>

<!-- Drawn by hand rather than with a native <input>: the design specifies an
     exact box (2px border, 3px radius, blue fill, `check`/`remove` glyph) that
     no browser's default control renders, and the wrapper owns the click so
     `checked` stays the single source of truth. -->
<div class="checkbox {container$class}" class:readonly onclick={() => onClick()}>
  <div class="box" class:filled style="height: {size}px; width: {size}px;">
    {#if filled}
      <span class="material-symbols-rounded glyph" style="font-size: {size - 2}px;">
        {showIndeterminate ? 'remove' : 'check'}
      </span>
    {/if}
  </div>

  {#if label}
    <div class="label">{label}</div>
  {/if}
</div>

<style>
.checkbox {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.checkbox.readonly {
  cursor: default;
}

.box {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  transition: var(--transition-colors);
}

.box:not(.filled) {
  border-width: 2px;
  border-color: var(--color-checkbox-border);
}

.readonly .box:not(.filled) {
  border-color: var(--color-checkbox-border-disabled);
}

.box.filled {
  background-color: var(--color-select);
}

.readonly .box.filled {
  background-color: var(--color-ink-disabled);
}

.glyph {
  color: var(--color-on-primary);
}

.label {
  margin-left: 8px;
  font-size: var(--text-cell);
  color: var(--color-ink);
}
</style>
