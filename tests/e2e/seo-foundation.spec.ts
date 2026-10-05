import { expect, test } from '@playwright/test';

test('homepage identity, trust pages and article metadata are consistent', async ({ page, request }) => {
  await page.goto('/');
  await expect(page).toHaveTitle('Real Estate Photography Workflow Software — PhotoTrackly');
  const identity = JSON.parse(await page.locator('script[type="application/ld+json"]').textContent() || '{}');
  expect(identity['@graph'].map((node: { '@type': string }) => node['@type'])).toEqual(['Organization', 'WebSite']);
  await expect(page.locator('footer a[href="/about"]')).toBeVisible();
  await expect(page.locator('footer a[href="/contact"]')).toBeVisible();
  await page.goto('/about');
  await expect(page.getByRole('heading', { name: 'PhotoTrackly editorial', exact: true })).toBeVisible();
  await page.goto('/contact');
  await expect(page.getByRole('form', { name: 'Early-access registration' })).toBeVisible();
  await page.goto('/insights/property-media-job-triage');
  const article = JSON.parse(await page.locator('script[type="application/ld+json"]').textContent() || '{}');
  expect(article.author).toMatchObject({ name: 'PhotoTrackly editorial' });
  expect(article.datePublished).toBe('2026-10-02T07:12:50Z');
  await expect(page.locator('time')).toHaveAttribute('datetime', article.datePublished);
  expect(await page.locator('.in-more > div a').count()).toBeLessThanOrEqual(4);
  const sitemap = await request.get('/sitemap.xml');
  expect(await sitemap.text()).toContain('/about');
  expect(await sitemap.text()).toContain('/contact');
});

test('www redirect keeps paths and campaign parameters without affecting other hosts', async ({ request }) => {
  const response = await request.get('/insights/property-media-job-triage?utm_source=test', { headers: { host: 'www.phototrackly.com' }, maxRedirects: 0 });
  expect(response.status()).toBe(308);
  expect(response.headers().location).toBe('https://phototrackly.com/insights/property-media-job-triage?utm_source=test');
  expect((await request.get('/about', { maxRedirects: 0 })).status()).toBe(200);
});
