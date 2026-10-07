import test from 'node:test';
import assert from 'node:assert/strict';
import { PRODUCTION_SITE_URL, siteUrl } from '../lib/site.ts';

const keys = ['NEXT_PUBLIC_SITE_URL', 'VERCEL_ENV', 'VERCEL_URL'] as const;

function withEnv(values: Partial<Record<(typeof keys)[number], string>>, run: () => void) {
  const previous = Object.fromEntries(keys.map(key => [key, process.env[key]])) as Record<(typeof keys)[number], string | undefined>;
  try {
    for (const key of keys) delete process.env[key];
    for (const [key, value] of Object.entries(values)) {
      if (value !== undefined) process.env[key] = value;
    }
    run();
  } finally {
    for (const key of keys) {
      const value = previous[key];
      if (value === undefined) delete process.env[key];
      else process.env[key] = value;
    }
  }
}

test('deployed environments always use the public PhotoTrackly origin', () => {
  withEnv({
    VERCEL_ENV: 'production',
    NEXT_PUBLIC_SITE_URL: 'https://www.phototrackly.com',
    VERCEL_URL: 'phototrackly-landing-pa.vercel.app',
  }, () => assert.equal(siteUrl(), PRODUCTION_SITE_URL));

  withEnv({
    VERCEL_ENV: 'preview',
    VERCEL_URL: 'phototrackly-git-feature.example.vercel.app',
  }, () => assert.equal(siteUrl(), PRODUCTION_SITE_URL));
});

test('local development can use an explicit local origin', () => {
  withEnv({ NEXT_PUBLIC_SITE_URL: 'http://localhost:3000/path' }, () => {
    assert.equal(siteUrl(), 'http://localhost:3000');
  });
});

test('local fallback accepts a Vercel-style hostname and otherwise uses localhost', () => {
  withEnv({ VERCEL_URL: 'local-preview.vercel.app' }, () => {
    assert.equal(siteUrl(), 'https://local-preview.vercel.app');
  });
  withEnv({}, () => assert.equal(siteUrl(), 'http://localhost:3000'));
});
