/**
 * SEO constants and helpers for per-route meta and canonical URLs.
 */
export const SITE_URL = "https://360watts.com";

export const DEFAULT_OG_IMAGE = `${SITE_URL}/final-logo-png-4x-1.png`;

export interface SeoMeta {
  title: string;
  description: string;
  /** Path without leading slash, e.g. "" for home, "solutions" for /solutions */
  path?: string;
  ogImage?: string;
}

export function fullUrl(path: string): string {
  const normalized = path.startsWith("/") ? path.slice(1) : path;
  return normalized ? `${SITE_URL}/${normalized}` : SITE_URL + "/";
}
