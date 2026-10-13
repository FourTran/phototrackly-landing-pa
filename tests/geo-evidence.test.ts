import test from 'node:test';
import assert from 'node:assert/strict';
import { productAnswers } from '../lib/geo-evidence.ts';
import { marketingPageSlugs } from '../lib/marketing-pages.ts';
import { insightSlugs } from '../lib/insights.ts';
import { resourceSlugs } from '../lib/resources.ts';
import { readFileSync } from 'node:fs';
const prompts: {
  baselineStatus: string;
  canonicalDomain: string;
  platforms: { id: string }[];
  prompts: { id: string; market: string; query: string; ownerPath: string }[];
  observationFields: string[];
  acceptedStates: string[];
} = JSON.parse(readFileSync(new URL('../docs/growth/geo-visibility-prompts-v1.json', import.meta.url), 'utf8'));

const publicPaths = new Set([
  '/', '/about', '/build-notes', '/contact', '/insights', '/resources',
  ...marketingPageSlugs.map(slug => '/' + slug),
  ...insightSlugs.map(slug => '/insights/' + slug),
  ...resourceSlugs.map(slug => '/resources/' + slug),
]);

test('first-party GEO answers link to real evidence and preserve honest product boundaries', () => {
  assert.equal(productAnswers.length, 5);
  assert.equal(new Set(productAnswers.map(item => item.question)).size, 5);
  for (const item of productAnswers) {
    assert.ok(item.question.endsWith('?'), item.question);
    assert.ok(item.answer.length >= 120, item.question);
    assert.ok(item.evidenceLabel.length >= 15, item.question);
    assert.ok(publicPaths.has(item.evidenceHref), item.evidenceHref);
  }
  const combined = productAnswers.map(item => item.answer).join(' ');
  assert.match(combined, /prelaunch|in development/i);
  assert.match(combined, /manual photographer assignment/i);
  assert.match(combined, /human quality review/i);
  assert.match(combined, /fictional sample jobs/i);
  assert.doesNotMatch(combined, /trusted by \d+|guaranteed \d+%|customers achieved/i);
});

test('AI answer testing is a reproducible prompt fixture, never a fabricated citation score', () => {
  assert.equal(prompts.baselineStatus, 'NOT_TESTED');
  assert.equal(prompts.canonicalDomain, 'https://phototrackly.com');
  assert.equal(prompts.platforms.length, 4);
  assert.deepEqual(new Set(prompts.platforms.map(p => p.id)), new Set(['chatgpt-search', 'google-ai', 'perplexity', 'gemini']));
  assert.equal(prompts.prompts.length, 12);
  assert.equal(new Set(prompts.prompts.map(p => p.id)).size, prompts.prompts.length);
  assert.deepEqual(new Set(prompts.prompts.map(p => p.market)), new Set(['US', 'AU']));
  for (const prompt of prompts.prompts) {
    assert.ok(prompt.query.length >= 50, prompt.id);
    assert.ok(publicPaths.has(prompt.ownerPath), prompt.id);
    assert.ok(!prompt.ownerPath.includes('qrtrackly.com'), prompt.id);
  }
  assert.ok(prompts.observationFields.includes('citationUrls'));
  assert.ok(prompts.observationFields.includes('legacyDomainCitation'));
  assert.ok(prompts.observationFields.includes('evidenceLocation'));
  assert.ok(prompts.acceptedStates.includes('NOT_TESTED'));
});
