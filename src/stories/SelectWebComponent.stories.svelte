<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';
import { EntityType } from 'audako-core';
  
  import Select from '../shared/components/select/Select.svelte';
  


  let entitySelect;
  
  $: {
    if (entitySelect) {
      console.log(entitySelect); 
  
      entitySelect.addEventListener('selected', (event) => {
        console.log(event);
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
    <audako-select use:render placeholder="Type" multiple options={options} arrayvalue={value}  ></audako-select>
  </Story>
  