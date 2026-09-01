<script lang="ts">
interface Props {
  color?: string;
  size?: string;
  title?: string;
}

let { color = '#c1c1c1', size = '14px', title = null }: Props = $props();
</script>

<div
  {title}
  class="shrink-0 rounded-full"
  style="height: {size}; width: {size}; background-color: {color || '#c1c1c1'}; box-shadow: rgba(0, 0, 0, 0.4) 0px 0px 12px inset;"
></div>
