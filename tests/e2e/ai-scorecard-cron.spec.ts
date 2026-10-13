import { expect, test } from '@playwright/test';

test('private AI scorecard cannot be accessed without deployment secret', async ({ request }) => {
  const response = await request.get('/api/internal/ai-scorecard', {
    headers: { 'user-agent': 'vercel-cron/1.0' },
  });
  // CI does not supply production CRON_SECRET: endpoint must fail closed.
  expect(response.status()).toBe(503);
  await expect(response).toBeTruthy();
  expect(response.headers()['cache-control']).toContain('no-store');
  expect(await response.json()).toMatchObject({ ok: false, error: 'Cron is not configured' });
});
