import assert from 'node:assert/strict';
import test from 'node:test';
import sitemap from '../app/sitemap';
import { marketingPageSlugs } from '../lib/marketing-pages';
import { resourceSlugs } from '../lib/resources';
import { insightSlugs } from '../lib/insights';

function inVercelEnvironment(value: string, run: () => void) {
  const previous = process.env.VERCEL_ENV;
  process.env.VERCEL_ENV = value;
  try { run(); }
  finally {
    if (previous === undefined) delete process.env.VERCEL_ENV;
    else process.env.VERCEL_ENV = previous;
  }
}

test('production sitemap publishes each canonical public page once', () => {
  inVercelEnvironment('production', () => {
    const entries = sitemap();
    const expectedCount = 4 + marketingPageSlugs.length + 1 + resourceSlugs.length + 1 + insightSlugs.length;
    assert.equal(entries.length, expectedCount);
    assert.equal(entries.length, 88);
    const urls = entries.map(entry => entry.url);
    assert.equal(new Set(urls).size, urls.length);
    for (const url of urls) {
      assert.match(url, /^https:\/\/phototrackly\.com\//);
      assert.ok(!url.includes('qrtrackly.com'));
    }
  });
});

test('sitemap dates use verified historical updates, never current build time', () => {
  inVercelEnvironment('production', () => {
    const entries = sitemap();
    const byPath = new Map(entries.map(entry => [new URL(entry.url).pathname, entry]));
    assert.equal(byPath.get('/')?.lastModified, undefined);
    assert.equal(byPath.get('/contact')?.lastModified, undefined);
    const hubModified = byPath.get('/insights')?.lastModified;
    assert.ok(hubModified instanceof Date);
    assert.equal(hubModified.toISOString(), '2026-10-08T08:26:12.000Z');
    assert.equal((byPath.get('/resources')?.lastModified as Date).toISOString(), '2026-10-08T08:26:12.000Z');
    assert.equal((byPath.get('/resources/shoot-to-delivery-checklist')?.lastModified as Date).toISOString(), '2026-10-08T07:41:41.000Z');
    const article = byPath.get('/insights/property-media-job-triage');
    assert.equal((article?.lastModified as Date).toISOString(), '2026-10-07T19:39:45.000Z');
    for (const entry of entries) {
      if (entry.lastModified !== undefined) {
        assert.ok(entry.lastModified instanceof Date);
        assert.ok(Number.isFinite(entry.lastModified.getTime()));
      }
    }
  });
});

test('preview deployments do not publish indexing sitemap entries', () => {
  inVercelEnvironment('preview', () => assert.deepEqual(sitemap(), []));
});
