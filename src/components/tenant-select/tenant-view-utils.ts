import type { TenantView } from 'audako-core';

/**
 * `mat-<name>` resolves to the Material icon `<name>`; the fallback when a
 * tenant has no custom icon. Same default as the main UI's adk-tenant-card.
 */
export const DEFAULT_TENANT_ICON = 'mat-domain';

// The wire format carries fields core's TenantView does not declare.
type TenantViewPayload = TenantView & {
  Position?: number;
  ApplicationSettings?: { AdditionalSettings?: Record<string, any> };
};

export function resolveTenantIcon(tenant: TenantView): string {
  return (tenant as TenantViewPayload)?.ApplicationSettings?.AdditionalSettings?.['Icon'] || DEFAULT_TENANT_ICON;
}

/**
 * Maps the UI's icon strings onto a Material Symbols ligature, mirroring
 * adk-icon's prefix handling. Only the Material set is bundled here, so `adk-`
 * and FontAwesome icons fall back to the default glyph.
 */
export function toMaterialLigature(icon: string): string {
  if (!icon) {
    return 'domain';
  }

  // Tenants use `mat-domain`; core's EntityIcons use `mat domain`.
  const [set, ...rest] = icon.split(/[-\s]/);
  const name = rest.join('-');

  if (!name) {
    return set;
  }

  if (set === 'adk' || set.startsWith('fa')) {
    return 'domain';
  }

  return name;
}

/**
 * Port of SortTenantsByPosition from the main UI: tenants carrying a position
 * take their slot, the unpositioned ones fill the gaps in between.
 */
export function sortTenantsByPosition(tenants: TenantView[]): TenantView[] {
  const position = (tenant: TenantView): number => (tenant as TenantViewPayload).Position ?? 0;

  let tenantsWithoutPosition = tenants.filter((tenant) => !position(tenant));
  const tenantsWithPosition = tenants
    .filter((tenant) => !tenantsWithoutPosition.includes(tenant))
    .sort((a, b) => position(a) - position(b));

  const sortedTenants: TenantView[] = [];
  let lastPosition = 0;

  tenantsWithPosition.forEach((tenant) => {
    while (position(tenant) - lastPosition > 1 && tenantsWithoutPosition.length > 0) {
      sortedTenants.push(tenantsWithoutPosition[0]);
      tenantsWithoutPosition = tenantsWithoutPosition.filter((x) => !sortedTenants.includes(x));
      lastPosition = sortedTenants.length;
    }
    lastPosition = position(tenant);
    sortedTenants.push(tenant);
  });

  return sortedTenants.concat(tenantsWithoutPosition);
}
