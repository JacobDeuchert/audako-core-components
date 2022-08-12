import { Store } from "@ngneat/elf";
import { EntityType } from "audako-core";
export declare const entitySelectEntityType: import("svelte/store").Writable<EntityType>;
export declare const EntitySelectSelectionStore: Store<{
    name: string;
    state: {
        selectedEntities: any[];
    };
    config: undefined;
}, {
    selectedEntities: any[];
}>;
export declare const EntitySelectGlobalStore: Store<{
    state: {
        queryWithSubGroups: boolean;
        selectedTenant: any;
    };
    config: undefined;
    name: string;
}, {
    queryWithSubGroups: boolean;
    selectedTenant: any;
}>;
export declare const EntitySelectTypeStore: (type: any) => Store<any, any>;
