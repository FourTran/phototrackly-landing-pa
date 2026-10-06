import { expect, test } from '@playwright/test';

const slugs = [
  'property-media-job-triage',
  'multi-service-shoot-scheduling',
  'real-estate-media-delivery-readiness',
  'evaluate-property-media-workflow-software',
  'scale-photography-business-without-owner-bottleneck',
  'handle-five-property-shoots-per-day',
  'track-every-active-property-media-job',
  'property-media-job-statuses',
  'schedule-multiple-property-photographers',
  'manage-multiple-real-estate-photo-editors',
  'outgrown-spreadsheets-property-media',
  'real-estate-photography-editing-workflow',
  'track-property-media-revisions-and-versions',
  'organize-photo-video-drone-floor-plan-one-property',
  'property-media-operations-dashboard',
  'real-estate-photography-operations-checklist',
  'find-stuck-property-media-jobs',
  'in-house-versus-outsourced-property-photo-editing',
  'write-property-photo-editing-instructions',
  'property-media-editing-queue',
  'who-owns-property-media-quality-control',
  'prevent-double-booked-photographers',
  'organize-raw-property-media-files',
  'delegate-property-media-operations',
  'property-media-morning-operations-check',
  'files-to-send-real-estate-photo-editor',
  'consistent-property-photo-editing-across-editors',
  'wrong-or-incomplete-files-from-property-editor',
  'overnight-real-estate-photo-editing-workflow',
  'prevent-property-editor-bottlenecks-busy-season',
  'qc-outsourced-real-estate-photo-editing',
  'assign-property-photographers-by-skills',
  'define-property-photographer-service-areas',
  'reschedule-property-shoot-without-breaking-day',
  'prioritize-property-media-production',
  'real-estate-photography-editing-style-guide',
  'real-estate-video-qc-checklist',
  'drone-property-media-qc-checklist',
  'floor-plan-qc-checklist',
  'photographer-sick-day-reassignment-plan',
  'onboard-real-estate-photographer',
  'keep-source-files-with-correct-property',
  'handle-client-delivery-revisions-property-media',
  'partial-delivery-photos-before-video',
  'show-next-action-owner-property-job',
  'manage-property-media-workflow-exceptions',
  'production-complete-approved-delivered-differences',
  'real-estate-photo-editing-mistakes-pre-delivery',
  'round-robin-vs-best-fit-photographer-assignment',
  'property-size-shoot-duration-planning',
  'manage-property-photographer-availability',
  'travel-time-between-property-shoots',
  'complete-property-shoot-job-instructions',
  'track-property-media-client-delivery-event',
  'identify-overdue-property-editor-work',
  'dropbox-workflow-real-estate-photo-editing',
  'ai-photo-editing-human-qc-checklist',
  'ordered-services-property-shoot-duration',
  'photographer-daily-shoot-capacity',
  'when-hire-second-real-estate-photographer',
  'document-real-estate-photography-shooting-workflow',
  'maintain-quality-across-property-photographers',
  'real-estate-photography-business-folder-structure',
  'large-property-video-files-photographer-editor',
];

test('the insights hub links to distinct articles', async ({ page }) => {
  await page.goto('/insights');
  await expect(page.locator('main h1')).toContainText('work around every shoot');
  await expect(page.locator('.in-card')).toHaveCount(slugs.length);
  for (const slug of slugs) await expect(page.locator(`.in-card a[href="/insights/${slug}"]`).first()).toBeVisible();
  await expect(page.locator('.in-card-image img')).toHaveCount(slugs.length);
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', /\/insights$/);
});

for (const slug of slugs) {
  test(`article ${slug} has an answer, worked content, and a relevant next step`, async ({ page }) => {
    await page.goto(`/insights/${slug}`);
    await expect(page.locator('main h1')).toBeVisible();
    await expect(page.locator('.in-answer p:last-child')).not.toBeEmpty();
    await expect(page.locator('.in-section')).toHaveCount(4);
    const cover = page.locator('.in-hero-image img');
    await expect(cover).toBeVisible();
    const coverSource = decodeURIComponent(await cover.getAttribute('src') || '');
    expect(coverSource).toContain(`/images/insights/${slug}.webp`);
    expect(await cover.evaluate(image => (image as HTMLImageElement).naturalWidth)).toBeGreaterThan(0);
    await expect(page.locator('meta[name="robots"]')).toHaveCount(0);
    await expect(page.locator('.in-related a')).toHaveCount(2);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', new RegExp(`/insights/${slug}$`));
    await expect(page.locator('meta[property="og:title"]')).toHaveAttribute('content', /.+/);
    const articleData = JSON.parse(await page.locator('script[type="application/ld+json"]').textContent() || '{}');
    expect(articleData).toMatchObject({ '@type': 'Article', image: expect.stringMatching(new RegExp(`/images/insights/${slug}\\.webp$`)), mainEntityOfPage: expect.stringMatching(new RegExp(`/insights/${slug}$`)), publisher: { name: 'PhotoTrackly' } });
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
