import { expect, test } from '@playwright/test';

test('brand identity is consistent and evidence-backed on home and About', async ({ page }) => {
  await page.goto('/');
  const identity = JSON.parse(await page.locator('script[type="application/ld+json"]').textContent() || '{}');
  const organization = identity['@graph'].find((entry: { '@type': string }) => entry['@type'] === 'Organization');
  expect(organization.name).toBe('PhotoTrackly');
  expect(organization.alternateName).toBe('photoTrackly');
  expect(organization.url).toBe('http://localhost:3000');
  expect(organization).not.toHaveProperty('sameAs');
  await expect(page.locator('footer a[href="/build-notes"]')).toHaveCount(1);
  await page.goto('/about');
  await expect(page.getByRole('heading', { name: 'PhotoTrackly identity and current product status' })).toBeVisible();
  await expect(page.locator('#product-status')).toContainText('prelaunch business-to-business property-media operations software');
  await expect(page.locator('#product-status')).toContainText('United States and Australia');
  await expect(page.locator('#product-status')).toContainText('in development');
  await expect(page.locator('#editorial')).toContainText('not anonymized customer results');
  await expect(page.getByRole('link', { name: 'our first-party build notes' })).toHaveAttribute('href', '/build-notes');
});

test('public build notes distinguish tested sample logic from a released SaaS', async ({ page, request }) => {
  await page.goto('/build-notes');
  await expect(page).toHaveTitle(/How PhotoTrackly Is Building Property Media Workflow Software/);
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', 'http://localhost:3000/build-notes');
  await expect(page.getByRole('heading', { name: 'How PhotoTrackly is being built' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'What the illustrative preview really tests' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Current limits and what remains to prove' })).toBeVisible();
  const body = page.locator('main article');
  await expect(body).toContainText('a fictional product concept');
  await expect(body).toContainText('Not customer evidence');
  await expect(body).toContainText('not a deployed multi-tenant service');
  await expect(body).toContainText('are available in a finished PhotoTrackly application');
  await expect(body.locator('a[href="https://github.com/FourTran/phototrackly-landing-pa/blob/main/lib/model.ts"]')).toHaveCount(1);
  await expect(body.locator('a[href="https://github.com/FourTran/phototrackly-landing-pa/blob/main/tests/model.test.ts"]')).toHaveCount(1);
  const schema = JSON.parse(await page.locator('script[type="application/ld+json"]').textContent() || '{}');
  expect(schema['@type']).toBe('Article');
  expect(schema.datePublished).toBe('2026-10-12T00:00:00Z');
  expect(schema.publisher.name).toBe('PhotoTrackly');
  await expect(page.locator('footer a[href="/build-notes"]')).toHaveCount(1);
  const sitemap = await request.get('/sitemap.xml');
  expect((await sitemap.text()).match(/<loc>http:\/\/localhost:3000\/build-notes<\/loc>/g)).toHaveLength(1);
});
