import test from 'node:test';
import assert from 'node:assert/strict';
import { isProductionAnalyticsHost } from '../lib/analytics.ts';

test('production GA4 tracking is restricted to canonical PhotoTrackly hosts', () => {
  for (const host of ['phototrackly.com', 'www.phototrackly.com', 'PHOTOTRACKLY.COM', 'phototrackly.com.']) {
    assert.equal(isProductionAnalyticsHost(host), true, host);
  }
  for (const host of [
    'localhost', '127.0.0.1', '::1', 'localhost:3000', 'example.com',
    'phototrackly.com.evil.example', 'preview.phototrackly.com',
    'phototrackly-landing-pa.vercel.app', 'phototrackly.cloud', '',
  ]) {
    assert.equal(isProductionAnalyticsHost(host), false, host);
  }
});
