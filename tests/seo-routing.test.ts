import test from 'node:test';
import assert from 'node:assert/strict';
import config from '../next.config.ts';

test('alternate public hosts permanently consolidate to phototrackly.com', async () => {
  assert.ok(config.redirects);
  const redirects = await config.redirects();
  const expectedHosts = [
    'www.phototrackly.com',
    'phototrackly.cloud',
    'www.phototrackly.cloud',
    'phototrackly-landing-pa.vercel.app',
  ];

  assert.deepEqual(
    redirects.map(redirect => redirect.has?.[0]?.value),
    expectedHosts,
  );
  for (const redirect of redirects) {
    assert.equal(redirect.source, '/:path*');
    assert.equal(redirect.destination, 'https://phototrackly.com/:path*');
    assert.equal(redirect.permanent, true);
  }
});
