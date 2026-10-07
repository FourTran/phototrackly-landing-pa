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
  // Vercel-generated URLs can use *.vercel.app and environment variables can
  // drift. Every deployed PhotoTrackly surface must declare the public domain.
  if (process.env.VERCEL_ENV) return PRODUCTION_SITE_URL;

  const configured = originFrom(process.env.NEXT_PUBLIC_SITE_URL);
  if (configured) return configured;

  return originFrom(process.env.VERCEL_URL) || 'http://localhost:3000';
}
