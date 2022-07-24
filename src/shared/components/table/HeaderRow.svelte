<script lang="ts">
let headerElement: HTMLElement;
</script>

<div class="flex flex-col">
  <div class="audako-tableheader-flexrow font-bold border-b " bind:this={headerElement}>
  
  
    <slot />
  </div>
  
  <div>
    
  </div>
</div>

<style>
.audako-tableheader-flexrow {
  display: flex;
  height: 40px;
  position: sticky;
  top: 0;
  background: white;
}

:global(.audako-tableheader-flexrow > *) {
  flex: 1;
  height: 100%;
  padding: 4px 0;
  display: flex;
  align-items: center;
}

:global(.audako-tableheader-flexrow > *:first-child) {
  padding-left: 12px !important;
}

:global(.audako-tableheader-flexrow > *:last-child) {
  padding-right: 12px !important;
}
</style>
