import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { buildDistributionScorecard, trackedReferralUrl, renderDistributionReport } from '../scripts/growth-distribution-scorecard.mjs';

const catalog = JSON.parse(readFileSync('data/growth-distribution-opportunities-2026-10-13.json','utf8'));
const baseline = JSON.parse(readFileSync('data/growth-referral-baseline-2026-10-13.json','utf8'));

test('growth channel inventory is source-linked and records no invented publication or third-party endorsement', () => {
  const score = buildDistributionScorecard(catalog, baseline);
  assert.equal(score.items.length, 7);
  assert.equal(score.published, 0);
  assert.equal(score.submitted, 0);
  assert.equal(score.ga4.confirmedExternalReferralSessions, 0);
  assert.equal(score.ga4.confirmedQualifiedSignups, 0);
  assert.equal(score.ga4.directSessions, 521);
  assert.ok(score.items.some(item => item.id === 'pfre-vendor'));
  assert.ok(score.items.some(item => item.id === 'betalist'));
  assert.ok(score.items.some(item => item.id === 'repai-directory' && item.status === 'ineligible'));
  const report = renderDistributionReport(score);
  assert.match(report, /not evidence/i);
  assert.match(report, /confirmed external referral sessions/i);
});

test('tracked sharing URLs preserve a single canonical origin and only vetted UTM fields', () => {
  for (const opportunity of catalog.opportunities) {
    const actual = new URL(trackedReferralUrl(opportunity));
    assert.equal(actual.origin, 'https://phototrackly.com');
    assert.equal(actual.pathname, opportunity.targetPath);
    assert.deepEqual([...actual.searchParams.keys()], ['utm_source','utm_medium','utm_campaign','utm_content']);
    assert.ok(!actual.search.includes('email='));
    assert.ok(!actual.search.includes('token='));
  }
  assert.throws(() => trackedReferralUrl({...catalog.opportunities[0],targetPath:'//evil.org'}), /Invalid canonical/);
  assert.throws(() => trackedReferralUrl({...catalog.opportunities[0],utmSource:'owner@example.com'}), /Invalid UTM/);
});

test('a future published claim requires a defensible external proof URL', () => {
  const mock = structuredClone(catalog);
  mock.opportunities[0].status = 'published';
  assert.throws(() => buildDistributionScorecard(mock,baseline), /requires external proof/);
  mock.opportunities[0].proofUrl = 'https://phototrackly.com/about';
  assert.throws(() => buildDistributionScorecard(mock,baseline), /First-party URL/);
  mock.opportunities[0].proofUrl = 'https://photographyforrealestate.net/vendors/photo-trackly';
  const report = buildDistributionScorecard(mock,baseline);
  assert.equal(report.published,1);
  // The positive case validates record format only; the fictitious test URL is NOT a live listing.
});

test('distribution write and payment restrictions are preserved', () => {
  for (const key of ['noOutboundCommunication','noAutomaticSubmissions','noPayments']) {
    const mock = structuredClone(catalog);
    mock.rules[key] = false;
    assert.throws(() => buildDistributionScorecard(mock,baseline), /must prohibit unapproved/);
  }
});
