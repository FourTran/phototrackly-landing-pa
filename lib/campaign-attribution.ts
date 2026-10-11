/**
 * Campaign attribution needs the original landing URL, but GA4 must never receive
 * arbitrary query strings (emails, withdrawal tokens or private form fields).
 * Keep only short, non-identifying marketing attribution values.
 */
const CAMPAIGN_KEYS = [
  'utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'utm_id',
  'gclid', 'msclkid', 'fbclid',
] as const;
const SAFE_CAMPAIGN_VALUE = /^[a-zA-Z0-9][a-zA-Z0-9._~-]{0,99}$/;

export function sanitizedAnalyticsLocation(rawUrl: string): string {
  const url = new URL(rawUrl);
  const campaign = new URLSearchParams();
  for (const key of CAMPAIGN_KEYS) {
    const value = url.searchParams.get(key);
    if (value && SAFE_CAMPAIGN_VALUE.test(value)) campaign.set(key, value);
  }
  const query = campaign.toString();
  return url.origin + url.pathname + (query ? `?${query}` : '');
}
