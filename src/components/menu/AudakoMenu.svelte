<!--
  Custom-element wrapper around the shared Menu component.

  `shadow: 'none'` matches the previous Lit wrapper, which overrode
  `createRenderRoot()` to render into the light DOM so the popup can escape
  the element and inherit page styling.
-->
<svelte:options
  customElement={{
    shadow: 'none',
    props: {
      items: { attribute: 'items', type: 'Array' },
      closeOnClick: { attribute: 'closeonclick', type: 'Boolean' },
      containerClass: { attribute: 'container$class', type: 'String' },
      anchorSelector: { attribute: 'anchorselector', type: 'String' },
    },
  }}
/>

<script lang="ts">
import Menu from '../../shared/components/menu/Menu.svelte';
import type { MenuItem } from '../../shared/components/menu/MenuTypes';

interface Props {
  items?: MenuItem[];
  closeOnClick?: boolean;
  containerClass?: string;
  anchorSelector?: string;
}

let { items = [], closeOnClick = true, containerClass = '', anchorSelector = '' }: Props = $props();

let menu = $state<{ openMenu(): void; closeMenu(): void } | undefined>();

// Expose the imperative API on the element, as the Lit wrapper did.
$effect(() => {
  const host = $host() as any;
  host.openMenu = () => menu?.openMenu();
  host.closeMenu = () => menu?.closeMenu();
});
</script>

<Menu bind:this={menu} {items} {closeOnClick} {anchorSelector} container$class={containerClass} />
