import type { ConfigurationEntity, EntityType } from 'audako-core';
export declare class EntitySelectDialogService {
    constructor();
    selectEntity<T extends ConfigurationEntity>(entityType: EntityType, additionalFilter?: Record<string, any>): Promise<T>;
    selectMultipleEntities<T extends ConfigurationEntity>(entityType: EntityType, additionalFilter?: Record<string, any>): Promise<T[]>;
    _openEntitySelectDialog<T extends ConfigurationEntity>(entityType: EntityType, selectMultiple: boolean, additionalFilter: Record<string, any>): Promise<T[]>;
}
