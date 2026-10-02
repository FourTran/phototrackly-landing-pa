import { expect, test } from '@playwright/test';

const slugs = [
  'property-media-job-triage',
  'multi-service-shoot-scheduling',
  'real-estate-media-delivery-readiness',
  'evaluate-property-media-workflow-software',
];

test('the insights hub links to four distinct articles', async ({ page }) => {
  await page.goto('/insights');
  await expect(page.locator('main h1')).toContainText('work around every shoot');
  await expect(page.locator('.in-card')).toHaveCount(4);
  for (const slug of slugs) await expect(page.locator(`.in-card a[href="/insights/${slug}"]`).first()).toBeVisible();
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', /\/insights$/);
});

for (const slug of slugs) {
  test(`article ${slug} has an answer, worked content, and a relevant next step`, async ({ page }) => {
    await page.goto(`/insights/${slug}`);
    await expect(page.locator('main h1')).toBeVisible();
    await expect(page.locator('.in-answer p:last-child')).not.toBeEmpty();
    await expect(page.locator('.in-section')).toHaveCount(4);
    await expect(page.locator('.in-section table')).toHaveCount(1);
    await expect(page.locator('.in-related a')).toHaveCount(2);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', new RegExp(`/insights/${slug}$`));
    await expect(page.locator('meta[property="og:title"]')).toHaveAttribute('content', /.+/);
    const articleData = JSON.parse(await page.locator('script[type="application/ld+json"]').textContent() || '{}');
    expect(articleData).toMatchObject({ '@type': 'Article', mainEntityOfPage: expect.stringMatching(new RegExp(`/insights/${slug}$`)), publisher: { name: 'PhotoTrackly' } });
    await expect(page.getByRole('button', { name: /join early access/i })).toBeVisible();
    expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(await page.evaluate(() => window.innerWidth + 2));
  });
}

test('production sitemap includes all insight URLs', async ({ request }) => {
  const response = await request.get('/sitemap.xml');
  expect(response.ok()).toBeTruthy();
  const body = await response.text();
  for (const slug of slugs) expect(body).toContain(`/insights/${slug}`);
});
