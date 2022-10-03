<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  
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


  let options = [{
  label: 'abc',
  value: 'abc'
}, {
  label: 'def',
  value: 'def'
}, {
  label: 'ghi',
  value: 'ghi'
}];

let value = ['abc'];

function render(node) {
  console.log('Render', node);
}
  
  </script>
  
  <Meta title="Select Web Component" component={Select} />
  
  <Story name="Default">
    <audako-select use:render placeholder="Type" multiple options={options} arrayvalue={value}  ></audako-select>
  </Story>
  