import type { ConfigurationEntity, EntityType } from 'audako-core';
export declare class EntitySelectDialogService {
    constructor();
    selectEntity<T extends ConfigurationEntity>(entityType: EntityType): Promise<T>;
}
