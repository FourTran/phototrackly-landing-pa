import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { marketingPageSlugs } from '../lib/marketing-pages.ts';
import { buyerSignupCopy } from '../lib/conversion-messaging.ts';
import { countLeadReviews, reviewLeadStatus, type LeadReviewSignal } from '../lib/lead-quality.ts';

test('four buying-page signup pitches distinguish studio buyer problems without implying released software', () => {
  const slugs = new Set(marketingPageSlugs);
  assert.equal(slugs.size, 4);
  assert.deepEqual(new Set(Object.keys(buyerSignupCopy)), slugs);
  assert.equal(new Set(Object.values(buyerSignupCopy).map(item => item.heading)).size, 4);
  for (const item of Object.values(buyerSignupCopy)) {
    assert.ok(item.heading.length > 35);
    assert.ok(item.introduction.length >= 120);
    assert.ok(item.contextPrompt.startsWith('Optional:'));
    assert.doesNotMatch(JSON.stringify(item), /available today|book a demo of the software|guarantee|trusted by \d+/i);
  }
});

const clean: LeadReviewSignal = {
  sheetRowSaved: true, consentRecorded: true, suspectedTest: false,
  humanReviewed: false, buyerFitVerified: false, externalAcquisitionVerified: false,
  withdrawn: false,
};

test('a lead is only qualified after verified persistence, consent, external source, buyer fit and human review', () => {
  assert.equal(reviewLeadStatus(clean), 'saved_unverified');
  for (const wrong of [
    {...clean, sheetRowSaved:false},
    {...clean, consentRecorded:false},
    {...clean, suspectedTest:true},
    {...clean, withdrawn:true},
  ]) assert.notEqual(reviewLeadStatus(wrong), 'verified_qualified_external');
  assert.equal(reviewLeadStatus({...clean, humanReviewed:true, buyerFitVerified:true}), 'saved_unverified');
  assert.equal(reviewLeadStatus({...clean, humanReviewed:true, externalAcquisitionVerified:true}), 'saved_unverified');
  assert.equal(reviewLeadStatus({...clean, buyerFitVerified:true, externalAcquisitionVerified:true}), 'saved_unverified');
  assert.equal(reviewLeadStatus({...clean, humanReviewed:true, buyerFitVerified:true, externalAcquisitionVerified:true}), 'verified_qualified_external');
});

test('anonymized saved Sheet record is not counted as a qualified external buyer or GA4 conversion', () => {
  const snapshot: {
    records: LeadReviewSignal[];
    ga4: {reportedFormSubmitEvents:number;reportedGenerateLeadEvents:number;recordedKeyEvents:number;directSessions:number;organicSessions:number};
  } = JSON.parse(readFileSync(new URL('../data/growth-lead-quality-baseline-2026-10-13.json', import.meta.url),'utf8'));
  assert.equal(snapshot.records.length, 1);
  assert.equal(countLeadReviews(snapshot.records).savedRows, 1);
  assert.equal(countLeadReviews(snapshot.records).byStatus.suspected_test, 1);
  assert.equal(countLeadReviews(snapshot.records).confirmedQualifiedExternal, 0);
  assert.equal(snapshot.ga4.reportedFormSubmitEvents, 1);
  assert.equal(snapshot.ga4.reportedGenerateLeadEvents, 1);
  assert.equal(snapshot.ga4.recordedKeyEvents, 0);
  assert.equal(snapshot.ga4.organicSessions, 0);
  assert.equal(snapshot.ga4.directSessions, 521);
  // Snapshot contains no personal contact, notes, receipt reference or withdrawal tokens.
  const content = JSON.stringify(snapshot);
  assert.doesNotMatch(content, /@|work email|withdrawalToken|companyName|requestId/i);
});
