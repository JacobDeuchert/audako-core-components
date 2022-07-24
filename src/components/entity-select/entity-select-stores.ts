import { createState, getRegistry, Store, withProps } from '@ngneat/elf';
import { localStorageStrategy, persistState } from '@ngneat/elf-persist-state';
import { EntityType, Group } from 'audako-core';
import { writable } from 'svelte/store';

export const entitySelectEntityType = writable<EntityType>(EntityType.Signal);

export interface EntitySelectGlobalState {
  selectedTenant: string;
  queryWithSubGroups: boolean;
}

export interface EntityTypeState {
  filter: string;
  selectedGroup: Partial<Group>;
  lastSelectedEntities: string[];
}

const { config, state } = createState(
  withProps<EntitySelectGlobalState>({
    queryWithSubGroups: true,
    selectedTenant: null,
  })
);

export const EntitySelectGlobalStore = new Store({ state, config, name: 'entity-select-global' });

const persisGlobalState = persistState(EntitySelectGlobalStore, {
  key: 'entity-select-global',
  storage: localStorageStrategy,
});

export const EntitySelectTypeStore = (
  type: EntityType
): Store<{ state: EntityTypeState; config: undefined; name: 'entity-select-type-store' }> => {
  const store = getRegistry().get(`entity-select-type-${entitySelectEntityType}`);

  if (store) {
    return store;
  }

  const { state, config } = createState(
    withProps<EntityTypeState>({
      filter: null,
      selectedGroup: null,
      lastSelectedEntities: [],
    })
  );

  return new Store({ state, config, name: `entity-select-type-${entitySelectEntityType}` });
};
