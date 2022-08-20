import type { ConfigurationEntity, EntityType } from 'audako-core';
import  EntitySelectDialog from './EntitySelectDialog.svelte';

export class EntitySelectDialogService {
  
  constructor() { 
    
  }

  public selectEntity<T extends ConfigurationEntity>(entityType: EntityType): Promise<T> {
    return this._openEntitySelectDialog(entityType, false).then((entities: T[]) => {
      if (entities.length === 1) {
        return entities[0];
      } 
      return null;
    });
  }

  public selectMultipleEntities<T extends ConfigurationEntity>(entityType: EntityType): Promise<T[]> {
    return this._openEntitySelectDialog(entityType, true);
  }

  public _openEntitySelectDialog<T extends ConfigurationEntity>(entityType: EntityType, selectMultiple: boolean): Promise<T[]> {
    const entitySelect = new EntitySelectDialog({
      target: document.body,
      props: {
        entityType,
        open: false,
        selectMultiple: false
      }
    });

    setTimeout(() => {
      entitySelect.$set({ open: true });
    }, 50);

    return new Promise((resolve, reject) => {
      entitySelect.$on('entity-selected', (event: CustomEvent<T[]>) => {
        resolve(event.detail);
      });
    });
  }
}