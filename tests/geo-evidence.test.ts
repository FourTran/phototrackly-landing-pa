import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { productAnswers } from '../lib/geo-evidence.ts';
import { marketingPageSlugs } from '../lib/marketing-pages.ts';
import { insightSlugs } from '../lib/insights.ts';
import { resourceSlugs } from '../lib/resources.ts';

const panel: {
  version: string;
  market: string;
  prompts: { id: string; prompt: string; market: string; ownerPath: string }[];
} = JSON.parse(readFileSync(new URL('../data/ai-visibility-prompts.json', import.meta.url), 'utf8'));

const snapshot: {
  promptSet: string;
  observations: { surface: string; promptId: string; status: string }[];
} = JSON.parse(readFileSync(new URL('../data/ai-visibility-observations-2026-10-13.json', import.meta.url), 'utf8'));

const publicPaths = new Set([
  '/', '/about', '/build-notes', '/contact', '/insights', '/resources',
  ...marketingPageSlugs.map(slug => '/' + slug),
  ...insightSlugs.map(slug => '/insights/' + slug),
  ...resourceSlugs.map(slug => '/resources/' + slug),
]);

test('source-linked first-party answers preserve the prelaunch product boundaries', () => {
  assert.equal(productAnswers.length, 5);
  assert.equal(new Set(productAnswers.map(item => item.question)).size, 5);
  for (const item of productAnswers) {
    assert.ok(item.question.endsWith('?'), item.question);
    assert.ok(item.answer.length >= 120, item.question);
    assert.ok(publicPaths.has(item.evidenceHref), item.evidenceHref);
    assert.ok(item.evidenceLabel.length > 15, item.evidenceLabel);
  }
  const answers = productAnswers.map(item => item.answer).join(' ');
  assert.match(answers, /in development|prelaunch/i);
  assert.match(answers, /manual photographer assignment/i);
  assert.match(answers, /human quality review/i);
  assert.match(answers, /fictional sample jobs/i);
  assert.doesNotMatch(answers, /trusted by \d+|guaranteed \d+%|customers achieved/i);
});

test('canonical AI-search v2 panel is balanced across target markets and four surfaces', () => {
  assert.equal(panel.version, 'phototrackly-12-v2');
  assert.equal(panel.market, 'US+AU');
  assert.equal(new Set(panel.prompts.map(p => p.id)).size, 12);
  assert.equal(panel.prompts.filter(p => p.market === 'US').length, 6);
  assert.equal(panel.prompts.filter(p => p.market === 'AU').length, 6);
  for (const prompt of panel.prompts) {
    assert.ok(prompt.prompt.length >= 30, prompt.id);
    assert.ok(publicPaths.has(prompt.ownerPath), prompt.id);
  }
  assert.equal(snapshot.promptSet, panel.version);
  assert.equal(snapshot.observations.length, 48);
  assert.deepEqual(new Set(snapshot.observations.map(o => o.surface)), new Set(['chatgpt_search', 'google_ai_mode', 'perplexity', 'gemini']));
  for (const observation of snapshot.observations) {
    assert.equal(observation.status, 'not_tested');
    assert.ok(panel.prompts.some(p => p.id === observation.promptId));
  }
});
