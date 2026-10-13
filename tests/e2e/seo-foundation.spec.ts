import { expect, test } from '@playwright/test';

test('homepage identity, trust pages and article metadata are consistent', async ({ page, request }) => {
  await page.goto('/');
  await expect(page).toHaveTitle('PhotoTrackly — Property Media Operations for Growing Studios');
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
  await expect(page.locator('time').first()).toHaveAttribute('datetime', article.datePublished);
  await expect(page.locator('time').last()).toHaveAttribute('datetime', '2026-10-12');
  expect(await page.locator('.in-more > div a').count()).toBeLessThanOrEqual(4);
  const sitemap = await request.get('/sitemap.xml');
  expect(await sitemap.text()).toContain('/about');
  expect(await sitemap.text()).toContain('/contact');
  expect(await sitemap.text()).toContain('/build-notes');
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
  for (const slug of ['real-estate-photography-business-software', 'real-estate-photography-workflow-software', 'real-estate-photography-scheduling-software', 'real-estate-media-production-management']) {
    await expect(page.locator(`[aria-labelledby="insights-choose-workflow"] a[href="/${slug}"]`)).toHaveCount(1);
  }
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
  for (const path of ['/insights', '/contact', '/real-estate-photography-workflow-software', '/real-estate-media-production-management']) {
    await expect(page.locator(`[aria-labelledby="resources-choose-next"] a[href="${path}"]`)).toHaveCount(1);
  }
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
    for (const path of ['/insights', '/resources', '/contact']) {
      const response = await request.get(path, { headers: { 'user-agent': crawler } });
      expect(response.status()).toBe(200);
      const html = await response.text();
      expect(html).not.toMatch(/<meta[^>]+name="robots"[^>]+noindex/);
      expect(html).toContain('rel="canonical"');
    }
  }
});

test('discovery paths connect articles, owner pages, and templates', async ({ page }) => {
  const links = [
    ['/insights/property-media-job-triage', '/real-estate-photography-business-software'],
    ['/insights/multi-service-shoot-scheduling', '/real-estate-photography-scheduling-software'],
    ['/insights/real-estate-photography-editing-workflow', '/real-estate-media-production-management'],
  ];
  for (const [articleUrl, ownerUrl] of links) {
    await page.goto(articleUrl);
    await expect(page.locator('.in-more a[href="' + ownerUrl + '"]')).toHaveCount(1);
    await expect(page.locator('.in-more a[href="/resources"]')).toHaveCount(1);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', 'http://localhost:3000' + articleUrl);
  }
  await page.goto('/contact');
  await expect(page.locator('article a[href="/resources"]')).toHaveCount(1);
  await expect(page.locator('article a[href="/insights"]')).toHaveCount(1);
  await expect(page.getByRole('form', { name: 'Early-access registration' })).toBeVisible();
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


test('each commercial page has its own direct answer, realistic handoff, and transparent product scope', async ({ page }) => {
  const commercial = [
    ['real-estate-photography-business-software', 'Order accepted', 'billing'],
    ['real-estate-photography-workflow-software', 'Capture to edit', 'automation'],
    ['real-estate-photography-scheduling-software', 'At assignment', 'calendar'],
    ['real-estate-media-production-management', 'Quality review', 'quality'],
  ];
  const answers: string[] = [];
  for (const [slug, checkpoint] of commercial) {
    await page.goto('/' + slug);
    await expect(page.locator('main h1')).toHaveCount(1);
    await expect(page.locator('main h1')).toContainText(new RegExp(slug.replaceAll('-', ' '), 'i'));
    const answer = page.locator('.seo-buyer-answer');
    await expect(answer).toContainText('PhotoTrackly');
    answers.push((await answer.textContent()) || '');
    await expect(page.locator('.seo-decision-table-scroll tbody tr')).toHaveCount(4);
    await expect(page.locator('.seo-decision-table-scroll')).toContainText(checkpoint);
    await expect(page.locator('.seo-selection-grid li')).toHaveCount(3);
    await expect(page.locator('.seo-selection-checks')).toContainText('How to verify:');
    await expect(page.locator('.seo-selection-checks')).toContainText('Important boundary:');
    await expect(page.locator('.seo-selection-checks a[href="/insights/evaluate-property-media-workflow-software"]')).toHaveCount(1);
    await expect(page.locator('.seo-boundary-grid > div')).toHaveCount(2);
    await expect(page.locator('.seo-boundary-grid li')).toHaveCount(6);
    await expect(page.locator('.seo-product-boundaries')).toContainText('in development');
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', new RegExp('/' + slug + '$'));
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 2)).toBe(true);
  }
  expect(new Set(answers).size).toBe(4);
});

test('first-party product answers are direct, verifiable and linked to real pages', async ({ page }) => {
  await page.goto('/about');
  await expect(page.getByRole('heading', { name: 'Quick answers about PhotoTrackly' })).toBeVisible();
  const facts = page.locator('.geo-fact-list > div');
  await expect(facts).toHaveCount(5);
  for (const path of [
    '/real-estate-photography-business-software',
    '/real-estate-photography-workflow-software',
    '/build-notes',
    '/real-estate-photography-scheduling-software',
    '/resources/photographer-handoff-template',
  ]) {
    await expect(page.locator('.geo-fact-list a[href="' + path + '"]')).toHaveCount(1);
  }
  await expect(page.locator('.geo-fact-list')).toContainText('PhotoTrackly is in development');
  await expect(page.locator('.geo-fact-list')).toContainText('fictional sample jobs');
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', /\/about$/);
});

test('local public HTML is crawlable for AI-search user agents without AI-only markup', async ({ request }) => {
  const robots = await request.get('/robots.txt');
  expect(robots.ok()).toBeTruthy();
  expect(await robots.text()).toContain('User-Agent: *');
  for (const agent of ['OAI-SearchBot', 'PerplexityBot', 'Googlebot', 'Bingbot']) {
    for (const path of ['/about', '/real-estate-photography-business-software', '/insights/evaluate-property-media-workflow-software']) {
      const response = await request.get(path, { headers: { 'user-agent': agent } });
      expect(response.status(), agent + ': ' + path).toBe(200);
      const html = await response.text();
      expect(html).toContain('rel="canonical"');
      expect(html).not.toMatch(/<meta[^>]+name="robots"[^>]+noindex/);
    }
  }
});


test('commercial signup journeys explain distinct buyer fit and remain optional-context, consent-first forms', async ({ page }) => {
  const buyers = [
    ['real-estate-photography-business-software', 'media studio'],
    ['real-estate-photography-workflow-software', 'shoot-to-delivery'],
    ['real-estate-photography-scheduling-software', 'scheduling'],
    ['real-estate-media-production-management', 'editing and approval'],
  ];
  for (const [slug, phrase] of buyers) {
    await page.goto('/' + slug);
    const signup = page.locator('#early-access');
    await expect(signup.locator('h2')).toContainText(phrase, { ignoreCase: true });
    await expect(signup).toContainText('Optional:');
    await expect(signup).toContainText('not a working account or guaranteed invitation');
    const form = signup.getByRole('form', { name: 'Early-access registration' });
    await expect(form.getByLabel('Work email')).toHaveAttribute('required', '');
    await expect(form.getByLabel('Company', { exact: false })).toHaveAttribute('required', '');
    await expect(form.getByRole('checkbox')).toHaveAttribute('required', '');
    await expect(form.locator('select[name="role"]')).not.toHaveAttribute('required', '');
    await expect(form.locator('select[name="country"]')).not.toHaveAttribute('required', '');
    await expect(signup.getByRole('link', { name: 'Privacy notice' })).toHaveAttribute('href', '/privacy');
  }
});

test('unconfirmed success response on commercial signup never implies a saved lead', async ({ page }) => {
  await page.goto('/real-estate-media-production-management');
  await page.route('**/api/early-access', route => route.fulfill({
    status: 200, contentType: 'application/json', body: JSON.stringify({ ok: true, reference: 'unconfirmed' }),
  }));
  const form = page.locator('#early-access').getByRole('form', { name: 'Early-access registration' });
  await form.getByLabel('Work email').fill('conversion-test@example.com');
  await form.getByLabel('Company', { exact: false }).fill('CI Example Studio');
  await form.getByRole('checkbox').check();
  await form.getByRole('button', { name: 'Join early access', exact: true }).click();
  await expect(form.getByRole('alert')).toContainText('We could not save your registration');
  await expect(page.locator('.pl-form-success')).toHaveCount(0);
  await expect(form.getByLabel('Work email')).toHaveValue('conversion-test@example.com');
});
