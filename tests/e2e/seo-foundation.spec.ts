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


test('major discovery hubs have meaningful entry points and reciprocal navigation', async ({ page }) => {
  await page.goto('/insights');
  await expect(page.getByRole('heading', { name: 'Start with one real job, not a generic software checklist.' })).toBeVisible();
  for (const slug of ['property-media-job-triage', 'multi-service-shoot-scheduling', 'real-estate-media-delivery-readiness', 'evaluate-property-media-workflow-software']) {
    await expect(page.locator(`[aria-labelledby="insight-start-here"] a[href="/insights/${slug}"]`)).toHaveCount(1);
  }
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', 'http://localhost:3000/insights');
  await page.goto('/resources');
  await expect(page.getByRole('heading', { name: 'Use these four templates on the same property job.' })).toBeVisible();
  for (const slug of ['photographer-handoff-template', 'shoot-to-delivery-checklist', 'media-editing-review-checklist', 'property-job-status-board-template']) {
    await expect(page.locator(`[aria-labelledby="resource-usage-order"] a[href="/resources/${slug}"]`)).toHaveCount(1);
  }
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', 'http://localhost:3000/resources');
});

test('public crawlers get indexable HTML and public sitemap routes', async ({ request }) => {
  const robots = await request.get('/robots.txt');
  expect(robots.ok()).toBe(true);
  const robotsText = await robots.text();
  expect(robotsText).toContain('User-Agent: *');
  expect(robotsText).toContain('Allow: /');
  expect(robotsText).toContain('Disallow: /workspace/');
  expect(robotsText).toContain('Sitemap: http://localhost:3000/sitemap.xml');
  for (const crawler of ['Googlebot', 'OAI-SearchBot', 'Bingbot']) {
    for (const path of ['/insights', '/resources']) {
      const response = await request.get(path, { headers: { 'user-agent': crawler } });
      expect(response.status()).toBe(200);
      const html = await response.text();
      expect(html).not.toMatch(/<meta[^>]+name="robots"[^>]+noindex/);
      expect(html).toContain('rel="canonical"');
    }
  }
});

test('commercial intent pages link to their corresponding operational guide', async ({ page }) => {
  const mapping = [
    ['real-estate-photography-business-software', 'evaluate-property-media-workflow-software'],
    ['real-estate-photography-workflow-software', 'property-media-job-triage'],
    ['real-estate-photography-scheduling-software', 'multi-service-shoot-scheduling'],
    ['real-estate-media-production-management', 'real-estate-media-delivery-readiness'],
  ];
  for (const [pageSlug, guideSlug] of mapping) {
    await page.goto('/' + pageSlug);
    await expect(page.locator(`.seo-related a[href="/insights/${guideSlug}"]`)).toHaveCount(1);
  }
});
