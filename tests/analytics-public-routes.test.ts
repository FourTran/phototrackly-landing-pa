import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { GA_MEASUREMENT_ID, isProductionAnalyticsHost, isPublicMarketingPath } from '../lib/analytics.ts';

test('GA4 uses the verified PhotoTrackly stream and only canonical production hosts', () => {
  assert.equal(GA_MEASUREMENT_ID, 'G-GJQ82ZDWL2');
  assert.equal(isProductionAnalyticsHost('phototrackly.com'), true);
  assert.equal(isProductionAnalyticsHost('www.phototrackly.com'), true);
  for (const host of ['localhost', 'phototrackly.cloud', 'example.com', 'preview.phototrackly.com']) {
    assert.equal(isProductionAnalyticsHost(host), false, host);
  }
});

test('public landing, buyer, article and resource URLs qualify for consented measurement', () => {
  for (const route of [
    '/', '/about', '/contact', '/build-notes', '/privacy',
    '/real-estate-photography-business-software',
    '/real-estate-photography-workflow-software',
    '/real-estate-photography-scheduling-software',
    '/real-estate-media-production-management',
    '/insights', '/insights/property-media-job-triage',
    '/resources', '/resources/shoot-to-delivery-checklist',
  ]) {
    assert.equal(isPublicMarketingPath(route), true, route);
    if (route !== '/') assert.equal(isPublicMarketingPath(route + '/'), true, route + '/');
  }
});

test('private preferences, prototypes and unknown routes are never public analytics pages', () => {
  for (const route of [
    '', '/early-access', '/early-access/preferences', '/early-access/preferences/',
    '/api/early-access', '/workspace', '/workspace/pipeline', '/delivery/private-id',
    '/unknown', '/resources-private', '/insights-private',
  ]) {
    assert.equal(isPublicMarketingPath(route), false, route);
  }
});

test('only one global consent component owns GA4; no unconditional Google tag in root layout', () => {
  const layout = readFileSync(new URL('../app/layout.tsx', import.meta.url), 'utf8');
  const landing = readFileSync(new URL('../components/marketing/landing.tsx', import.meta.url), 'utf8');
  const consent = readFileSync(new URL('../components/prelaunch/analytics-consent.tsx', import.meta.url), 'utf8');
  assert.equal((layout.match(/<AnalyticsConsent \/>/g) || []).length, 1);
  assert.doesNotMatch(landing, /<AnalyticsConsent\s*\/>/);
  assert.doesNotMatch(layout, /<GoogleAnalytics|googletagmanager|gtag\/js/i);
  assert.match(consent, /publicPage && choice === 'accepted' && !internalQa/);
  assert.match(consent, /send_page_view: false/);
  assert.match(consent, /lastTrackedLocation/);
  assert.match(consent, /sanitizedAnalyticsLocation\(window\.location\.href\)/);
  assert.match(consent, /onReady=\{init\}/);
  assert.doesNotMatch(consent, /generate_lead/);
});
