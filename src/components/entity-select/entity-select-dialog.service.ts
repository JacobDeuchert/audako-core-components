import type { ConfigurationEntity, EntityType } from '@audako/core';
import { mount, unmount } from 'svelte';

import EntitySelectDialog from './EntitySelectDialog.svelte';

export class EntitySelectDialogService {
  public selectEntity<T extends ConfigurationEntity>(
    entityType: EntityType,
    additionalFilter: Record<string, any> = null
  ): Promise<T> {
    return this._openEntitySelectDialog<T>(entityType, false, additionalFilter).then((entities: T[]) => {
      if (entities.length === 1) {
        return entities[0];
      }
      return null;
    });
  }

  public selectMultipleEntities<T extends ConfigurationEntity>(
    entityType: EntityType,
    additionalFilter: Record<string, any> = null
  ): Promise<T[]> {
    return this._openEntitySelectDialog<T>(entityType, true, additionalFilter);
  }

  public _openEntitySelectDialog<T extends ConfigurationEntity>(
    entityType: EntityType,
    selectMultiple: boolean,
    additionalFilter: Record<string, any>
  ): Promise<T[]> {
    return new Promise((resolve) => {
      let settled = false;

      const entitySelectDialog = mount(EntitySelectDialog, {
        target: document.body,
        props: {
          entityType,
          open: false,
          selectMultiple: selectMultiple,
          additionalFilter: additionalFilter,
          onselectedEntities: (entities: T[]) => {
            finish(Array.isArray(entities) ? entities : [entities].filter((entity) => entity != null));
          },
          // Cancelling (close button, Abbrechen, Escape, backdrop) has to settle
          // the promise as well, otherwise the caller waits forever.
          oncancel: () => finish([]),
        },
      });

      function finish(entities: T[]): void {
        if (settled) {
          return;
        }
        settled = true;

        entitySelectDialog.setOpen(false);

        // destroy component after close animation is finished
        setTimeout(() => {
          unmount(entitySelectDialog);
        }, 200);

        resolve(entities);
      }

      setTimeout(() => {
        entitySelectDialog.setOpen(true);
      }, 50);
    });
  }
}
