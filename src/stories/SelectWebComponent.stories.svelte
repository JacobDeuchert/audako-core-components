<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';
import { EntityType } from 'audako-core';
  
  import Select from '../shared/components/select/Select.svelte';
  


  let select;
  
  $: {
    console.log('Select', select)
    if (select) {

      select.addEventListener('valuechanged', (event) => {
        console.log(event);
        value = event.detail;
      });
    }
  }

  console.log(window.CustomElementRegistry);

  const entityTypes = Object.keys(EntityType);
  const options = [{label: 'All', value: 'all'}, ...entityTypes.map((entityType) => {
    return {
      label: entityType,
      value: entityType,
    };
  })];


  

let value = ['all'];

function render(node) {
  console.log('Render', node);
}
  
  </script>
  
  <Meta title="Select Web Component" component={Select} />
  
  <Story name="Default">
    <audako-select use:render placeholder="Type" multiple options={options} arrayvalue={value} bind:this={select}  ></audako-select>
  </Story>
  