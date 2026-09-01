import { type ConfigurationEntity, type Signal, SignalType } from 'audako-core';

// Mirrors AudakoValueViewSettings in the main UI
// (shared/components/audako-value-view/audako-value-view.component.ts).
export interface ValueViewSettings {
  viewType: 'text' | 'number' | 'led';
  ledOnColor?: string;
  ledOffColor?: string;
  ledOnCaption?: string;
  ledOffCaption?: string;
  decimalPlaces?: number;
  unit?: string;
}

export interface DateValuePair {
  value: unknown;
  timestamp?: Date;
}

const analogTypes = [SignalType.AnalogInput, SignalType.AnalogInOut];
const digitalTypes = [SignalType.DigitalInput, SignalType.DigitalInOut];

// Same mapping as AudakoValueObjectViewComponent._createViewSettingsForSignal:
// analog and counter render as numbers, digital as an LED, universal as text.
export function createSignalValueViewSettings(entity: Partial<ConfigurationEntity>): ValueViewSettings {
  const signal = entity as Partial<Signal>;
  const type = signal?.Type?.Value;
  const settings = (signal?.Settings ?? {}) as any;

  const isNumber = analogTypes.includes(type) || type === SignalType.Counter;

  return {
    viewType: isNumber ? 'number' : digitalTypes.includes(type) ? 'led' : 'text',
    decimalPlaces: settings['DecimalPlaces'] ? settings['DecimalPlaces'].Value : 0,
    unit: settings['Unit'] ? settings['Unit'].Value : null,
    ledOnCaption: settings['DigitalTrueCaption'] ? settings['DigitalTrueCaption'].Value : null,
    ledOffCaption: settings['DigitalFalseCaption'] ? settings['DigitalFalseCaption'].Value : null,
    ledOnColor: settings['DigitalTrueColor'] ? settings['DigitalTrueColor'].Value : null,
    ledOffColor: settings['DigitalFalseColor'] ? settings['DigitalFalseColor'].Value : null,
  };
}
