import { Store } from "@ngneat/elf";
export declare const entitySelectEntityType: import("svelte/store").Writable<any>;
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
