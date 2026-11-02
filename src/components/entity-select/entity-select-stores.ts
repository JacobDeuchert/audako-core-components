import { ConfigurationEntity, EntityType, Group } from '@audako/core';
import { writable, type Writable } from 'svelte/store';

export interface EntitySelectSelectionState {
  selectedEntities: Partial<ConfigurationEntity>[];
}

export interface EntitySelectGlobalState {
  selectedTenant: string;
  queryWithSubGroups: boolean;
  pageSize: number;
}

export interface EntityTypeState {
  filter: string;
  selectedGroup: Partial<Group>;
  lastSelectedEntities: string[];
}

// Same key the former Elf persistence used, so saved settings carry over.
const GLOBAL_STORAGE_KEY = 'entity-select-global';

function loadGlobalState(): Partial<EntitySelectGlobalState> {
  try {
    return JSON.parse(localStorage.getItem(GLOBAL_STORAGE_KEY)) ?? {};
  } catch {
    return {};
  }
}

export const EntitySelectSelectionStore = writable<EntitySelectSelectionState>({
  selectedEntities: [],
});

export const EntitySelectGlobalStore = writable<EntitySelectGlobalState>({
  queryWithSubGroups: true,
  selectedTenant: null,
  pageSize: 25,
  ...loadGlobalState(),
});

EntitySelectGlobalStore.subscribe((state) => {
  try {
    localStorage.setItem(GLOBAL_STORAGE_KEY, JSON.stringify(state));
  } catch {
    // Storage unavailable (private mode, blocked site data); keep state in memory only.
  }
});

const typeStores = new Map<EntityType, Writable<EntityTypeState>>();

export function EntitySelectTypeStore(type: EntityType): Writable<EntityTypeState> {
  let store = typeStores.get(type);

  if (!store) {
    store = writable<EntityTypeState>({
      filter: null,
      selectedGroup: null,
      lastSelectedEntities: [],
    });
    typeStores.set(type, store);
  }

  return store;
}
