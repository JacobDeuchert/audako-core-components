import type { ConfigurationEntity, EntityType } from '@audako/core';
import { mount, unmount } from 'svelte';

import { createStyledShadowHost } from '../../styles/shadow-styles';
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

      // The dialog lives outside any custom element, so it gets a shadow root
      // of its own: the component styles reach it, the host app's do not.
      const { host, root } = createStyledShadowHost('data-audako-entity-select-dialog');

      const entitySelectDialog = mount(EntitySelectDialog, {
        target: root,
        props: {
          entityType,
          open: false,
          selectMultiple: selectMultiple,
          additionalFilter: additionalFilter,
          onselectedEntities: (entities: T | T[]) => {
            finish(Array.isArray(entities) ? entities : [entities].filter((entity) => entity != null));
          },
          // Cancelling (close button, Escape, backdrop) has to settle
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
          host.remove();
        }, 200);

        resolve(entities);
      }

      // Opened after mounting so the in transition plays.
      entitySelectDialog.setOpen(true);
    });
  }
}
