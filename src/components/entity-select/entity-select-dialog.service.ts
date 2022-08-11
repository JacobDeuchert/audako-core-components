import type { ConfigurationEntity, EntityType } from 'audako-core';
import  EntitySelectDialog from './EntitySelectDialog.svelte';

export class EntitySelectDialogService {
  
  constructor() { 
    
  }

  public selectEntity<T extends ConfigurationEntity>(entityType: EntityType): Promise<T> {
    const entitySelect = new EntitySelectDialog({
      target: document.body,
      props: {
        entityType,
        open: false
      }
    });

    setTimeout(() => {
      entitySelect.$set({ open: true });
    }, 50);

    return new Promise((resolve, reject) => {
      entitySelect.$on('entity-selected', (event: CustomEvent<T>) => {
        resolve(event.detail);
      });
    });
  }
}