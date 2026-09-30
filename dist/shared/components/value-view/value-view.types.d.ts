import { type ConfigurationEntity } from '@audako/core';
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
export declare function createSignalValueViewSettings(entity: Partial<ConfigurationEntity>): ValueViewSettings;
