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

