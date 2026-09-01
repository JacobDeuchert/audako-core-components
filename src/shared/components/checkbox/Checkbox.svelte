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
<div
  class="flex items-center {readonly ? 'cursor-default' : 'cursor-pointer'} {container$class}"
  onclick={() => onClick()}
>
  <div
    class="flex shrink-0 items-center justify-center rounded-[3px] transition-colors"
    class:border-2={!filled}
    class:border-checkbox-border={!filled && !readonly}
    class:border-checkbox-border-disabled={!filled && readonly}
    class:bg-select={filled && !readonly}
    class:bg-ink-disabled={filled && readonly}
    style="height: {size}px; width: {size}px;"
  >
    {#if filled}
      <span class="material-symbols-rounded text-on-primary" style="font-size: {size - 2}px;">
        {showIndeterminate ? 'remove' : 'check'}
      </span>
    {/if}
  </div>

  {#if label}
    <div class="ml-2 text-cell text-ink">{label}</div>
  {/if}
</div>
