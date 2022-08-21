import type { ConfigurationEntity, EntityType } from 'audako-core';
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
    const entitySelectDialog = new EntitySelectDialog({
      target: document.body,
      props: {
        entityType,
        open: false,
        selectMultiple: selectMultiple,
        additionalFilter: additionalFilter,
      }
    });

    setTimeout(() => {
      entitySelectDialog.$set({ open: true });
    }, 50);

    return new Promise((resolve, reject) => {
      entitySelectDialog.$on('selectedEntities', (event: CustomEvent<T[]>) => {
        entitySelectDialog.$set({ open: false });

        // destroy component after close animation is finished
        setTimeout(() => {
          entitySelectDialog.$destroy();
        }, 200);

        resolve(event.detail);
      });
    });
  }
}