<script lang="ts">

  export let container$class: string = '';
</script>

<div class="border-t overflow-hidden {container$class}">
  <slot />
</div>
