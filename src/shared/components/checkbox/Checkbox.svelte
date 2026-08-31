<script lang="ts">
interface Props {
  readonly?: boolean;
  label?: string;
  // Toggled internally on click, so it must be bindable.
  checked?: boolean;
  indeterminate?: boolean;
  onchange?: (checked: boolean) => void;
}

let { readonly = false, label = '', checked = $bindable(false), indeterminate = false, onchange }: Props = $props();

function onClick(): void {
  if (readonly) {
    return;
  }

  checked = !checked;
  onchange?.(checked);
}
</script>

<!-- The input is display-only (`pointer-events-none`): the wrapper handles every
     click, so `checked` stays the single source of truth. Letting the click reach
     the input instead means the browser toggles it natively before the handler
     runs, which leaves the rendered box a click behind the state. -->
<div class="flex items-center cursor-pointer" onclick={() => onClick()}>
  <input
    type="checkbox"
    class="mr-2 h-[18px] w-[18px] cursor-pointer pointer-events-none"
    {checked}
    indeterminate={indeterminate && !checked}
  />
  <div>{label}</div>
</div>
