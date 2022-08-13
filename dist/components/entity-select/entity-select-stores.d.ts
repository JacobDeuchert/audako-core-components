import { Store } from '@ngneat/elf';
import { ConfigurationEntity, EntityType, Group } from 'audako-core';
export declare const entitySelectEntityType: import("svelte/store").Writable<EntityType>;
export interface EntitySelectSelectionState {
    selectedEntities: Partial<ConfigurationEntity>[];
}
export interface EntitySelectGlobalState {
    selectedTenant: string;
    queryWithSubGroups: boolean;
}
export interface EntityTypeState {
    filter: string;
    selectedGroup: Partial<Group>;
    lastSelectedEntities: string[];
}
export declare const EntitySelectSelectionStore: Store<{
    name: string;
    state: EntitySelectSelectionState;
    config: undefined;
}, EntitySelectSelectionState>;
export declare const EntitySelectGlobalStore: Store<{
    state: EntitySelectGlobalState;
    config: undefined;
    name: string;
}, EntitySelectGlobalState>;
export declare const EntitySelectTypeStore: (type: EntityType) => Store<{
    state: EntityTypeState;
    config: undefined;
    name: 'entity-select-type-store';
}, EntityTypeState>;
