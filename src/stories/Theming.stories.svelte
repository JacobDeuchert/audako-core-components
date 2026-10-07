<script module>
import { defineMeta } from '@storybook/addon-svelte-csf';
import { EntityType } from '@audako/core';

import { EntitySelectDialogService } from '../components/entity-select/entity-select-dialog.service';
import IconButton from '../shared/components/icon-button/IconButton.svelte';
import HostStylesheet from './helpers/HostStylesheet.svelte';
import { entityActions } from './helpers/menu-items';

// Themes the custom elements the way a host app does: --audako-* variables on
// :root plus ::part() rules, from a stylesheet of the host page.
const { Story } = defineMeta({
  title: 'Theming',
  parameters: { layout: 'fullscreen' },
  argTypes: {
    primaryColor: { control: 'color', description: '`--audako-color-primary`; the hover shade is mixed from it.' },
    fontFamily: { control: 'text', description: '`--audako-font-family`' },
    radius: { control: 'text', description: '`--audako-radius-*` for controls, buttons, popups and the dialog.' },
  },
});

function hostCss({ primaryColor, fontFamily, radius }) {
  return `
    :root {
      --audako-color-primary: ${primaryColor};
      --audako-color-primary-hover: color-mix(in srgb, ${primaryColor} 80%, black);
      --audako-font-family: ${fontFamily};
      --audako-radius-control: ${radius};
      --audako-radius-button: ${radius};
      --audako-radius-popup: ${radius};
      --audako-radius-dialog: ${radius};
    }

    audako-entity-select::part(header),
    audako-entity-select-dialog::part(header) {
      background-color: color-mix(in srgb, ${primaryColor} 6%, white);
    }

    audako-entity-select::part(row):hover,
    audako-entity-select-dialog::part(row):hover {
      background-color: color-mix(in srgb, ${primaryColor} 8%, white);
    }

    audako-popup-layer::part(menu-item):hover,
    audako-popup-layer::part(option):hover {
      background-color: color-mix(in srgb, ${primaryColor} 10%, white);
      box-shadow: none;
    }

    audako-select::part(select) {
      background-color: #f5f7fa;
    }
  `;
}

const selectOptions = Object.keys(EntityType).map((type) => ({ label: type, value: type }));

function openDialog() {
  new EntitySelectDialogService().selectMultipleEntities(EntityType.Signal);
}
</script>

<script>
let menu = $state();
</script>

{#snippet template(args, { id })}
  {@const anchorId = `menu-anchor-${id}`}
  <HostStylesheet css={hostCss(args)} />

  <div class="page">
    <div class="bar">
      <div class="select">
        <audako-select placeholder="Typ" multiple options={selectOptions} arrayvalue={['Signal']}></audako-select>
      </div>

      <button type="button" class="host-button" onclick={openDialog}>Dialog öffnen</button>

      <div id={anchorId} class="trigger">
        <IconButton icon="more_vert" title="Weitere Aktionen" onclick={() => menu.openMenu()} />
      </div>
      <audako-menu bind:this={menu} anchorselector={`#${anchorId}`} items={entityActions}></audako-menu>
    </div>

    <div class="frame">
      <audako-entity-select entitytype="Signal" multiple="true"></audako-entity-select>
    </div>
  </div>
{/snippet}

<Story name="Branded" args={{ primaryColor: '#0a6cff', fontFamily: "'Trebuchet MS', sans-serif", radius: '4px' }} {template} />

<style>
.page {
  display: flex;
  height: 100vh;
  flex-direction: column;
  gap: 12px;
  padding: 12px;
  background-color: #eef1f5;
}

.bar {
  display: flex;
  align-items: center;
  gap: 12px;
}

.select {
  width: 280px;
}

/* A host app's own button, outside the components: it reads the public
   variables like the components do. */
.host-button {
  height: 36px;
  padding-inline: 16px;
  border-radius: var(--audako-radius-button);
  background-color: var(--audako-color-primary);
  font-family: var(--audako-font-family);
  color: #ffffff;
  cursor: pointer;
}

.trigger {
  display: flex;
  margin-left: auto;
}

.frame {
  min-height: 0;
  flex: 1;
  overflow: hidden;
  border-radius: var(--audako-radius-dialog);
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.12);
}
</style>
