import { EntityType } from '@audako/core';

import { getEntityMeta } from '../../components/entity-select/entity-select-meta';

// Menu entries shared by the menu stories, as `{ icon?, label }`. The stories
// add the `action` themselves.

export const entityActions = [
  { icon: 'edit', label: 'Bearbeiten' },
  { icon: 'content_copy', label: 'Duplizieren' },
  { icon: 'history', label: 'Verlauf anzeigen' },
  { icon: 'delete', label: 'Löschen' },
];

// Same entries as the footer menu of the configurator's Excel add-in.
export const accountItems = [
  { icon: 'logout', label: 'Abmelden' },
  { icon: 'info', label: 'Version: 1.4.2' },
  { icon: 'info', label: 'Audako: 4.23.20260923' },
];

// Long enough to exceed the popup's 400px maximum height, so the list scrolls.
export const entityTypeItems = Object.values(EntityType).map((type) => ({
  icon: getEntityMeta(type).icon,
  label: getEntityMeta(type).singular,
}));
