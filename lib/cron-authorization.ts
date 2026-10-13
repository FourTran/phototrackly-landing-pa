import { createHash, timingSafeEqual } from 'node:crypto';

/** Never accept a missing, short or malformed cron secret. */
export function authorizedCronRequest(header: string | null, configuredSecret: string | undefined): boolean {
  if (!configuredSecret || configuredSecret.length < 16 || !header?.startsWith('Bearer ')) return false;
  const candidate = header.slice('Bearer '.length);
  // Compare fixed-length hashes to avoid token-length timing differences.
  const expected = createHash('sha256').update(configuredSecret).digest();
  const actual = createHash('sha256').update(candidate).digest();
  return timingSafeEqual(expected, actual);
}
