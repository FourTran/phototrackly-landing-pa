import assert from 'node:assert/strict';
import test from 'node:test';
import { readFileSync } from 'node:fs';
import { authorizedCronRequest } from '../lib/cron-authorization.ts';
import { GET } from '../app/api/internal/ai-scorecard/route.ts';

const TOKEN = 'local-test-only-vercel-cron-secret-2026';

test('Vercel weekly schedule is 03:00 UTC Mondays, with one protected endpoint', () => {
  const config = JSON.parse(readFileSync('vercel.json', 'utf8'));
  assert.deepEqual(config.crons, [{ path: '/api/internal/ai-scorecard', schedule: '0 3 * * 1' }]);
});

test('cron authorization rejects missing/short tokens, spoofed user agents and near matches', () => {
  assert.equal(authorizedCronRequest(null, undefined), false);
  assert.equal(authorizedCronRequest('Bearer undefined', undefined), false);
  assert.equal(authorizedCronRequest('Bearer short', 'short'), false);
  assert.equal(authorizedCronRequest('Bearer ' + TOKEN + 'x', TOKEN), false);
  assert.equal(authorizedCronRequest('bearer ' + TOKEN, TOKEN), false);
  assert.equal(authorizedCronRequest('Bearer ' + TOKEN, TOKEN), true);
});

test('GET stays closed without configured CRON_SECRET and never caches', async () => {
  const previous = process.env.CRON_SECRET;
  try {
    delete process.env.CRON_SECRET;
    const request = new Request('https://phototrackly.com/api/internal/ai-scorecard', {
      headers: { authorization: 'Bearer undefined', 'user-agent': 'vercel-cron/1.0' },
    });
    const res = GET(request);
    assert.equal(res.status, 503);
    assert.match(res.headers.get('cache-control') || '', /no-store/);
    assert.deepEqual(await res.json(), { ok: false, error: 'Cron is not configured' });
  } finally {
    if (previous === undefined) delete process.env.CRON_SECRET;
    else process.env.CRON_SECRET = previous;
  }
});

test('only bearer-authenticated requests receive a validated unmeasured scorecard', async () => {
  const previous = process.env.CRON_SECRET;
  try {
    process.env.CRON_SECRET = TOKEN;
    const endpoint = 'https://phototrackly.com/api/internal/ai-scorecard';
    const denied = GET(new Request(endpoint, { headers: { 'user-agent': 'vercel-cron/1.0' } }));
    assert.equal(denied.status, 401);
    assert.match(denied.headers.get('cache-control') || '', /no-store/);

    const good = GET(new Request(endpoint, { headers: { authorization: 'Bearer ' + TOKEN } }));
    assert.equal(good.status, 200);
    assert.match(good.headers.get('cache-control') || '', /no-store/);
    const body = await good.json();
    assert.equal(body.ok, true);
    assert.equal(body.kind, 'saved_observation_scorecard');
    assert.equal(body.promptSet, 'phototrackly-12-v2');
    assert.equal(body.surfaces.length, 4);
    for (const surface of body.surfaces) {
      assert.equal(surface.tested, 0);
      assert.equal(surface.untested, 12);
      assert.equal(surface.brandMentionRate, null);
      assert.equal(surface.canonicalCitationRate, null);
    }
    assert.match(body.generatedAt, /^\d{4}-\d{2}-\d{2}T/);
  } finally {
    if (previous === undefined) delete process.env.CRON_SECRET;
    else process.env.CRON_SECRET = previous;
  }
});
