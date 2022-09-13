<script lang="ts">
let headerElement: HTMLElement;
</script>

<div class="audako-tableheader-flexrow" bind:this={headerElement}>
  <slot />
</div>

<style global>
.audako-tableheader-flexrow {
  display: flex;
  height: 40px;
  position: sticky;
  top: 0;
  background: white;
  font-weight: 700;
}

.audako-tableheader-flexrow > * {
  flex: 1;
  height: 100%;
  padding: 4px 0;
  display: flex;
  align-items: center;
}

.audako-tableheader-flexrow > *:first-child {
  padding-left: 12px !important;
}

.audako-tableheader-flexrow > *:last-child {
  padding-right: 12px !important;
}
</style>
