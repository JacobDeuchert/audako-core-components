import type { TenantView } from 'audako-core';
/**
 * `mat-<name>` resolves to the Material icon `<name>`; the fallback when a
 * tenant has no custom icon. Same default as the main UI's adk-tenant-card.
 */
export declare const DEFAULT_TENANT_ICON = "mat-domain";
export declare function resolveTenantIcon(tenant: TenantView): string;
/**
 * Maps the UI's icon strings onto a Material Symbols ligature, mirroring
 * adk-icon's prefix handling. Only the Material set is bundled here, so `adk-`
 * and FontAwesome icons fall back to the default glyph.
 */
export declare function toMaterialLigature(icon: string): string;
/**
 * Port of SortTenantsByPosition from the main UI: tenants carrying a position
 * take their slot, the unpositioned ones fill the gaps in between.
 */
export declare function sortTenantsByPosition(tenants: TenantView[]): TenantView[];
