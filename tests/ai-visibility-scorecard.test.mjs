import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { buildScorecard, renderMarkdown } from '../scripts/ai-visibility-scorecard.mjs';
const panel = JSON.parse(readFileSync('data/ai-visibility-prompts.json', 'utf8'));
const initial = JSON.parse(readFileSync('data/ai-visibility-observations-2026-10-13.json', 'utf8'));
const clone = value => structuredClone(value);

test('the baseline has 12 stable questions and 36 strictly untested AI surfaces', () => {
  const score = buildScorecard(panel, initial);
  assert.equal(score.surfaces.length, 3);
  for (const surface of score.surfaces) {
    assert.equal(surface.tested, 0);
    assert.equal(surface.untested, 12);
    assert.equal(surface.brandMentionRate, null);
    assert.equal(surface.canonicalCitationRate, null);
    assert.equal(surface.citedAnswers, null);
  }
  const printed = renderMarkdown(score);
  assert.match(printed, /not measured/);
  assert.doesNotMatch(printed, /0%/);
});

test('counts only observed exact phototrackly.com citations; legacy qrtrackly.com is not canonical', () => {
  const result = clone(initial);
  const a = result.observations[0];
  Object.assign(a, { status: 'observed', brandMention: true, citedUrls: ['https://qrtrackly.com/guides'], competitorDomains: ['tonomo.io'], evidenceUrl: 'https://example.org/evidence/test1' });
  let score = buildScorecard(panel, result);
  assert.equal(score.surfaces[0].brandMentionRate, 1);
  assert.equal(score.surfaces[0].canonicalCitationRate, 0);
  const b = result.observations[1];
  Object.assign(b, { status: 'observed', brandMention: true, citedUrls: ['https://phototrackly.com/insights/property-media-job-triage'], competitorDomains: ['hdphotohub.com'], evidenceUrl: 'https://example.org/evidence/test2' });
  score = buildScorecard(panel, result);
  assert.equal(score.surfaces[0].tested, 2);
  assert.equal(score.surfaces[0].canonicalCitationRate, 0.5);
  assert.deepEqual(score.surfaces[0].competitorDomains, ['hdphotohub.com','tonomo.io']);
  assert.equal(score.surfaces[1].canonicalCitationRate, null);
});

test('rejects invented observations, duplicate keys, unsafe links and a mismatched panel', () => {
  const noEvidence = clone(initial);
  noEvidence.observations[0].status = 'observed';
  noEvidence.observations[0].brandMention = false;
  assert.throws(() => buildScorecard(panel, noEvidence), /direct evidence URL/);
  const untested = clone(initial);
  untested.observations[0].citedUrls.push('https://phototrackly.com/');
  assert.throws(() => buildScorecard(panel, untested), /Unobserved prompt/);
  const duplicate = clone(initial);
  duplicate.observations[1].promptId = duplicate.observations[0].promptId;
  assert.throws(() => buildScorecard(panel, duplicate), /duplicate observation/);
  const fake = clone(initial);
  fake.promptSet = 'invented-v2';
  assert.throws(() => buildScorecard(panel, fake), /does not match/);
});
