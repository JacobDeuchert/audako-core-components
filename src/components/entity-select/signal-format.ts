import { type ConfigurationEntity, type Signal, SignalType } from 'audako-core';

const signalTypeLabels: Record<SignalType, string> = {
  [SignalType.AnalogInput]: 'Analog',
  [SignalType.AnalogInOut]: 'Analog E/A',
  [SignalType.DigitalInput]: 'Digital',
  [SignalType.DigitalInOut]: 'Digital E/A',
  [SignalType.Counter]: 'Zähler',
  [SignalType.UniversalInput]: 'Universal',
  [SignalType.UniversalInOut]: 'Universal E/A',
};

export function formatSignalType(entity: Partial<ConfigurationEntity>): string {
  const type = (entity as Partial<Signal>)?.Type?.Value;
  return type ? (signalTypeLabels[type] ?? type) : '';
}

// Live values arrive raw; unit, decimal places and the digital captions live on
// the signal's own settings.
export function formatSignalValue(entity: Partial<ConfigurationEntity>, value: unknown): string {
  if (value === null || value === undefined || value === '') {
    return '';
  }

  const signal = entity as Partial<Signal>;
  const settings = signal?.Settings as any;
  const type = signal?.Type?.Value;

  if (type === SignalType.DigitalInput || type === SignalType.DigitalInOut) {
    const isTrue = value === true || value === 1 || value === '1' || value === 'true';
    const caption = isTrue ? settings?.DigitalTrueCaption?.Value : settings?.DigitalFalseCaption?.Value;
    return caption || (isTrue ? 'Ein' : 'Aus');
  }

  const numeric = typeof value === 'number' ? value : Number(value);

  if (!Number.isFinite(numeric)) {
    return String(value);
  }

  const decimals = settings?.DecimalPlaces?.Value;
  const unit = settings?.Unit?.Value;

  const text = numeric.toLocaleString('de-DE', {
    minimumFractionDigits: decimals ?? 0,
    maximumFractionDigits: decimals ?? 3,
  });

  return unit ? `${text} ${unit}` : text;
}
