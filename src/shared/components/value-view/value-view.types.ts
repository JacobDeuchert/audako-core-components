import {
  type ConfigurationEntity,
  type Signal,
  type SignalAnalogSettings,
  type SignalCounterSettings,
  type SignalDigitalSettings,
  SignalType,
} from '@audako/core';

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

  if (analogTypes.includes(type) || type === SignalType.Counter) {
    // A projected or partial read may omit Settings or single fields.
    const settings = signal.Settings as Partial<SignalAnalogSettings | SignalCounterSettings>;
    return {
      viewType: 'number',
      decimalPlaces: settings?.DecimalPlaces?.Value ?? 0,
      unit: settings?.Unit?.Value ?? null,
    };
  }

  if (digitalTypes.includes(type)) {
    const settings = signal.Settings as Partial<SignalDigitalSettings>;
    return {
      viewType: 'led',
      ledOnCaption: settings?.DigitalTrueCaption?.Value ?? null,
      ledOffCaption: settings?.DigitalFalseCaption?.Value ?? null,
      ledOnColor: settings?.DigitalTrueColor?.Value ?? null,
      ledOffColor: settings?.DigitalFalseColor?.Value ?? null,
    };
  }

  return { viewType: 'text' };
}
