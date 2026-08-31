<!--
  Custom-element wrapper around the shared Select component.

  `tag` is deliberately omitted so the element is not auto-registered on import:
  registration stays under the control of `registerCustomElements()`, which
  defines it from `AudakoSelect.element`.
-->
<svelte:options
  customElement={{
    shadow: 'open',
    extend: withShadowStyles,
    props: {
      value: { attribute: 'value', type: 'String' },
      arrayvalue: { attribute: 'arrayvalue', type: 'Array' },
      multiple: { attribute: 'multiple', type: 'Boolean' },
      options: { attribute: 'options', type: 'Array' },
      placeholder: { attribute: 'placeholder', type: 'String' },
      containerClass: { attribute: 'container$class', type: 'String' },
      textfieldClass: { attribute: 'textfield$class', type: 'String' },
      suffixClass: { attribute: 'suffix$class', type: 'String' },
    },
  }}
/>

<script lang="ts">
import Select from '../../shared/components/select/Select.svelte';
import type { TextOption } from '../../shared/components/select/SelectTypes';
import { withShadowStyles } from '../../styles/shadow-styles';

interface Props {
  value?: string;
  arrayvalue?: unknown[];
  multiple?: boolean;
  options?: TextOption[];
  placeholder?: string;
  containerClass?: string;
  textfieldClass?: string;
  suffixClass?: string;
}

let {
  value = undefined,
  arrayvalue = [],
  multiple = false,
  options = [],
  placeholder = undefined,
  containerClass = '',
  textfieldClass = '',
  suffixClass = '',
}: Props = $props();

function onValueChanged(value: unknown) {
  $host().dispatchEvent(new CustomEvent('valuechanged', { detail: value }));
}
</script>

<Select
  value={multiple ? arrayvalue : value}
  {multiple}
  {options}
  {placeholder}
  container$class={containerClass}
  textfield$class={textfieldClass}
  suffixIcon$class={suffixClass}
  onvalueChanged={onValueChanged}
/>
