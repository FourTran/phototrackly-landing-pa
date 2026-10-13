import { expect, test } from '@playwright/test';

test('four resource guides preserve blank sheets alongside fictional worked examples', async ({ page, request }) => {
  const checks = [
    ['shoot-to-delivery-checklist', 'job-status'],
    ['photographer-handoff-template', 'shoot-brief'],
    ['media-editing-review-checklist', 'delivery-readiness'],
    ['property-job-status-board-template', 'job-status'],
  ];
  for (const [slug, worksheet] of checks) {
    await page.goto('/resources/' + slug);
    const panel = page.getByRole('complementary', { name: 'Download original worksheets and worked sample' });
    await expect(panel).toContainText('fictional filled-in example');
    await expect(panel.getByRole('listitem')).toHaveCount(3);
    await expect(panel.getByRole('link', { name: 'Download blank worksheet (CSV)' })).toHaveAttribute('href', '/worksheets/' + worksheet + '.csv');
    await expect(panel.getByRole('link', { name: 'Download worked fictional example (CSV)' })).toHaveAttribute('href', '/worksheets/' + worksheet + '-example.csv');
    const exampleFile = await request.get('/worksheets/' + worksheet + '-example.csv');
    expect(exampleFile.ok()).toBe(true);
    expect(await exampleFile.text()).toContain('SAMPLE-001 (fictional)');
    const schema = JSON.parse(await page.locator('script[type="application/ld+json"]').textContent() || '{}');
    expect(schema.dateModified).toBe('2026-10-13T00:00:00Z');
    const canonical = 'https://phototrackly.com/resources/' + slug;
    const sharing = page.getByRole('complementary', { name: 'Source and sharing' });
    await expect(sharing.getByRole('link', { name: canonical })).toHaveAttribute('href', canonical);
    await expect(sharing).toContainText('without registering for early access');
    await expect(sharing).toContainText('fictional teaching example');
    expect(schema.mainEntityOfPage).toBe('http://localhost:3000/resources/' + slug);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 2)).toBe(true);
  }
});
