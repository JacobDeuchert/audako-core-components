<script module>
import { defineMeta } from '@storybook/addon-svelte-csf';
import Menu from '../shared/components/menu/Menu.svelte';

const { Story } = defineMeta({
  title: 'Menu Web Component',
  component: Menu,
});
</script>

<script>
const menuItems = [
  {
    icon: 'home',
    label: 'Jo was geht',
    action: (e) => {
      console.log('Jo was geht', e);
    },
  },
];

let menu;

function openMenu() {
  menu.openMenu();
}
</script>

<Story name="Default" asChild>
  <button onclick={() => openMenu()} style="position: absolute; top: 200px; right:0px" id="menu-anchor">Menu</button>
  <audako-menu bind:this={menu} anchorselector={'#menu-anchor'} items={menuItems}></audako-menu>
</Story>
