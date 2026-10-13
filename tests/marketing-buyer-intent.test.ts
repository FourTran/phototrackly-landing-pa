import test from 'node:test';
import assert from 'node:assert/strict';
import { marketingPages } from '../lib/marketing-pages.ts';

test('four commercial owner pages each address distinct studio buying intent', () => {
  assert.equal(marketingPages.length, 4);
  const slugs = marketingPages.map(p => p.slug);
  assert.equal(new Set(marketingPages.map(p => p.title)).size, 4);
  assert.equal(new Set(marketingPages.map(p => p.description)).size, 4);
  assert.equal(new Set(slugs).size, 4);
  assert.equal(new Set(marketingPages.map(p => p.buyerGuide.directAnswer)).size, 4);
  for (const page of marketingPages) {
    const guide = page.buyerGuide;
    const ownerIntent = page.slug.replaceAll('-', ' ');
    assert.ok(page.title.toLowerCase().includes(ownerIntent), page.slug);
    assert.ok(page.heading.toLowerCase().includes(ownerIntent), page.slug);
    assert.ok(page.description.length >= 110 && page.description.length <= 180, page.slug);
    assert.match(page.description, /planned|developing/i, page.slug);
    assert.ok(guide.directAnswer.length > 145, page.slug);
    assert.equal(guide.forTeams.length, 3, page.slug);
    assert.equal(guide.exampleHandoffs.length, 4, page.slug);
    assert.equal(guide.selectionChecks.length, 3, page.slug);
    assert.equal(new Set(guide.selectionChecks.map(item => item.question)).size, 3, page.slug);
    assert.ok(guide.selectionChecks.every(item => item.question.length > 35 && item.test.length > 100 && item.limit.length > 45), page.slug);
    assert.ok(guide.selectionChecks.every(item => !/guarantee|trusted by|save \d+%/i.test(item.test)), page.slug);
    assert.equal(new Set(guide.exampleHandoffs.map(x => x.checkpoint)).size, 4, page.slug);
    assert.ok(guide.exampleHandoffs.every(x => x.owner.length > 3 && x.decision.length > 50), page.slug);
    assert.equal(guide.plannedFirstRelease.length, 3, page.slug);
    assert.equal(guide.notPromised.length, 3, page.slug);
    assert.ok(/develop|planned|plans/.test(guide.directAnswer), page.slug);
    assert.ok(!/customer testimonial|guaranteed 50%|trusted by 100/i.test(JSON.stringify(guide)), page.slug);
  }
});
