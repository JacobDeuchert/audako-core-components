import { EntityType } from 'audako-core';
interface EntityMeta {
    icon: string;
    singular: string;
    plural: string;
}
export declare function getEntityMeta(entityType: EntityType): EntityMeta;
export {};
