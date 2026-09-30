import { EntityType } from '@audako/core';

interface EntityMeta {
  // Material Symbols Rounded ligature shown in the dialog header tile.
  icon: string;
  // German singular used in the dialog title ("<singular> auswählen").
  singular: string;
  // German plural used in empty states ("Keine <plural> für diese Filter").
  plural: string;
}

const defaultMeta: EntityMeta = { icon: 'category', singular: 'Eintrag', plural: 'Einträge' };

const entityMeta: Partial<Record<EntityType, EntityMeta>> = {
  [EntityType.Group]: { icon: 'folder', singular: 'Gruppe', plural: 'Gruppen' },
  [EntityType.Signal]: { icon: 'show_chart', singular: 'Signal', plural: 'Signale' },
  [EntityType.Formula]: { icon: 'functions', singular: 'Formel', plural: 'Formeln' },
  [EntityType.Dashboard]: { icon: 'dashboard', singular: 'Dashboard', plural: 'Dashboards' },
  [EntityType.DataConnection]: { icon: 'data_usage', singular: 'Datenverbindung', plural: 'Datenverbindungen' },
  [EntityType.DataSource]: { icon: 'storage', singular: 'Datenquelle', plural: 'Datenquellen' },
  [EntityType.Connector]: { icon: 'cable', singular: 'Konnektor', plural: 'Konnektoren' },
  [EntityType.EventCondition]: { icon: 'rule', singular: 'Bedingung', plural: 'Bedingungen' },
  [EntityType.EventDefinition]: { icon: 'notifications', singular: 'Ereignis', plural: 'Ereignisse' },
  [EntityType.EventCategory]: { icon: 'label', singular: 'Ereigniskategorie', plural: 'Ereigniskategorien' },
  [EntityType.ProcessImage]: { icon: 'image', singular: 'Prozessbild', plural: 'Prozessbilder' },
  [EntityType.ReportTemplate]: { icon: 'description', singular: 'Berichtsvorlage', plural: 'Berichtsvorlagen' },
  [EntityType.Report]: { icon: 'summarize', singular: 'Bericht', plural: 'Berichte' },
  [EntityType.Document]: { icon: 'draft', singular: 'Dokument', plural: 'Dokumente' },
  [EntityType.Camera]: { icon: 'photo_camera', singular: 'Kamera', plural: 'Kameras' },
  [EntityType.SwitchSchedule]: { icon: 'schedule', singular: 'Schaltplan', plural: 'Schaltpläne' },
  [EntityType.User]: { icon: 'person', singular: 'Benutzer', plural: 'Benutzer' },
  [EntityType.Role]: { icon: 'admin_panel_settings', singular: 'Rolle', plural: 'Rollen' },
  [EntityType.Recipient]: { icon: 'contact_mail', singular: 'Empfänger', plural: 'Empfänger' },
  [EntityType.RecipientGroup]: { icon: 'groups', singular: 'Empfängergruppe', plural: 'Empfängergruppen' },
  [EntityType.AlarmingPlan]: { icon: 'notification_important', singular: 'Alarmplan', plural: 'Alarmpläne' },
  [EntityType.MaintenanceService]: { icon: 'build', singular: 'Wartung', plural: 'Wartungen' },
  [EntityType.TaskDefinition]: { icon: 'task', singular: 'Aufgabe', plural: 'Aufgaben' },
  [EntityType.RuntimeScript]: { icon: 'code', singular: 'Skript', plural: 'Skripte' },
};

export function getEntityMeta(entityType: EntityType): EntityMeta {
  return entityMeta[entityType] ?? defaultMeta;
}
