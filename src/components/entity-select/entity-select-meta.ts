import { EntityType } from '@audako/core';
import { de } from '../../i18n/de';
import type { TranslationKey } from '../../i18n/types';

interface EntityMeta {
  // Material Symbols Rounded ligature shown in the dialog header tile.
  icon: string;
  // Plural message with the type's name, e.g. in the dialog title
  // (count 1) and in empty states (count 2).
  nameKey: TranslationKey;
}

const defaultIcon = 'category';

const entityIcons: Partial<Record<EntityType, string>> = {
  [EntityType.Group]: 'folder',
  [EntityType.Signal]: 'show_chart',
  [EntityType.Formula]: 'functions',
  [EntityType.Dashboard]: 'dashboard',
  [EntityType.DataConnection]: 'data_usage',
  [EntityType.DataSource]: 'storage',
  [EntityType.Connector]: 'cable',
  [EntityType.EventCondition]: 'rule',
  [EntityType.EventDefinition]: 'notifications',
  [EntityType.EventCategory]: 'label',
  [EntityType.ProcessImage]: 'image',
  [EntityType.ReportTemplate]: 'description',
  [EntityType.Report]: 'summarize',
  [EntityType.Document]: 'draft',
  [EntityType.Camera]: 'photo_camera',
  [EntityType.SwitchSchedule]: 'schedule',
  [EntityType.User]: 'person',
  [EntityType.Role]: 'admin_panel_settings',
  [EntityType.Recipient]: 'contact_mail',
  [EntityType.RecipientGroup]: 'groups',
  [EntityType.AlarmingPlan]: 'notification_important',
  [EntityType.MaintenanceService]: 'build',
  [EntityType.TaskDefinition]: 'task',
  [EntityType.RuntimeScript]: 'code',
};

export function getEntityMeta(entityType: EntityType): EntityMeta {
  // The German bundle is complete, so it tells which types have a name.
  const named = entityType in de.entityTypes;
  return {
    icon: entityIcons[entityType] ?? defaultIcon,
    nameKey: (named ? `entityTypes.${entityType}` : 'entityTypes.default') as TranslationKey,
  };
}
