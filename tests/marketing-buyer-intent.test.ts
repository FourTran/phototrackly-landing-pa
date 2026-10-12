import test from 'node:test';
import assert from 'node:assert/strict';
import { marketingPages } from '../lib/marketing-pages.ts';

test('four commercial owner pages each address distinct studio buying intent', () => {
  assert.equal(marketingPages.length, 4);
  const slugs = marketingPages.map(p => p.slug);
  assert.equal(new Set(slugs).size, 4);
  assert.equal(new Set(marketingPages.map(p => p.buyerGuide.directAnswer)).size, 4);
  for (const page of marketingPages) {
    const guide = page.buyerGuide;
    assert.ok(guide.directAnswer.length > 145, page.slug);
    assert.equal(guide.forTeams.length, 3, page.slug);
    assert.equal(guide.exampleHandoffs.length, 4, page.slug);
    assert.equal(new Set(guide.exampleHandoffs.map(x => x.checkpoint)).size, 4, page.slug);
    assert.ok(guide.exampleHandoffs.every(x => x.owner.length > 3 && x.decision.length > 50), page.slug);
    assert.equal(guide.plannedFirstRelease.length, 3, page.slug);
    assert.equal(guide.notPromised.length, 3, page.slug);
    assert.ok(/development|planned|plans/.test(guide.directAnswer), page.slug);
    assert.ok(!/customer testimonial|guaranteed 50%|trusted by 100/i.test(JSON.stringify(guide)), page.slug);
  }
});
