<script>
import { Meta, Story } from '@storybook/addon-svelte-csf';
import { EntityType } from 'audako-core';
import Menu from '../shared/components/menu/Menu.svelte';

const menuItems= [{
  icon: 'home',
  label: 'Jo was geht',
  action: (e) => {
    console.log('Jo was geht', e);
  },
}];

let menu;

function render(node) {
  console.dir(node);
}


function openMenu() {
  menu.openMenu();
}
</script>

<Meta title="Menu Web Component" component={Menu} />

<Story name="Default">
  <button on:click={() => openMenu()} style="position: absolute; top: 200px; right:0px" id="menu-anchor">Menu</button>
  <audako-menu bind:this={menu} anchorselector={"#menu-anchor"} use:render items={menuItems} />
</Story>
