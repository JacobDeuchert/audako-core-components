import type { ConfigurationEntity, EntityType } from 'audako-core';
import { mount, unmount } from 'svelte';
import  EntitySelectDialog from './EntitySelectDialog.svelte';

export class EntitySelectDialogService {
  
  constructor() { 
    
  }

  public selectEntity<T extends ConfigurationEntity>(entityType: EntityType, additionalFilter: Record<string, any> = null): Promise<T> {
    return this._openEntitySelectDialog(entityType, false, additionalFilter).then((entities: T[]) => {
      if (entities.length === 1) {
        return entities[0];
      } 
      return null;
    });
  }

  public selectMultipleEntities<T extends ConfigurationEntity>(entityType: EntityType, additionalFilter: Record<string, any> = null): Promise<T[]> {
    return this._openEntitySelectDialog(entityType, true, additionalFilter);
  }

  public _openEntitySelectDialog<T extends ConfigurationEntity>(entityType: EntityType, selectMultiple: boolean, additionalFilter: Record<string, any>): Promise<T[]> {
    return new Promise((resolve) => {
      const entitySelectDialog = mount(EntitySelectDialog, {
        target: document.body,
        props: {
          entityType,
          open: false,
          selectMultiple: selectMultiple,
          additionalFilter: additionalFilter,
          onselectedEntities: (entities: T[]) => {
            entitySelectDialog.setOpen(false);

            // destroy component after close animation is finished
            setTimeout(() => {
              unmount(entitySelectDialog);
            }, 200);

            resolve(entities);
          },
        },
      });

      setTimeout(() => {
        entitySelectDialog.setOpen(true);
      }, 50);
    });
  }
}