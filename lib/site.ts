export const PRODUCTION_SITE_URL = 'https://phototrackly.com';

function originFrom(value: string | undefined): string | null {
  if (!value) return null;
  try {
    const url = new URL(value.includes('://') ? value : `https://${value}`);
    if (!['https:', 'http:'].includes(url.protocol)) return null;
    return url.origin;
  } catch {
    return null;
  }
}

export function siteUrl(): string {
  const configured = originFrom(process.env.NEXT_PUBLIC_SITE_URL);
  if (configured) return configured;

  // Vercel-generated production URLs can change or use *.vercel.app. Keep every
  // deployed metadata/canonical surface pinned to the public PhotoTrackly domain.
  if (process.env.VERCEL_ENV) return PRODUCTION_SITE_URL;

  return originFrom(process.env.VERCEL_URL) || 'http://localhost:3000';
}
