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

test('public landing, buyer, article and resource URLs qualify for GA4 measurement', () => {
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

test('one global GA4 component uses permanent cookieless consent-denied mode', () => {
  const layout = readFileSync(new URL('../app/layout.tsx', import.meta.url), 'utf8');
  const landing = readFileSync(new URL('../components/marketing/landing.tsx', import.meta.url), 'utf8');
  const analytics = readFileSync(new URL('../components/prelaunch/google-analytics.tsx', import.meta.url), 'utf8');
  assert.equal((layout.match(/<GoogleAnalytics \/>/g) || []).length, 1);
  assert.doesNotMatch(landing, /CookieSettingsButton|AnalyticsConsent/);
  assert.match(analytics, /googletagmanager\.com\/gtag\/js/);
  assert.match(analytics, /GA_MEASUREMENT_ID/);
  assert.match(analytics, /send_page_view: false/);
  assert.match(analytics, /lastTrackedLocation/);
  assert.match(analytics, /sanitizedAnalyticsLocation\(window\.location\.href\)/);
  assert.match(analytics, /onReady=\{init\}/);
  assert.match(analytics, /analytics_storage: 'denied'/);
  assert.match(analytics, /ad_storage: 'denied'/);
  assert.match(analytics, /ad_user_data: 'denied'/);
  assert.match(analytics, /ad_personalization: 'denied'/);
  assert.match(analytics, /gtag\('consent', 'default'/);
  assert.doesNotMatch(analytics, /consent', 'update|ANALYTICS_CONSENT_KEY|Allow analytics|No thanks/);
  assert.ok(
    analytics.indexOf("gtag('consent', 'default'") < analytics.indexOf('setEnabled(true)'),
    'denied consent defaults must be queued before gtag.js is enabled',
  );
});
