import assert from 'node:assert/strict';
import { existsSync, statSync } from 'node:fs';
import { join } from 'node:path';
import test from 'node:test';
import { insights } from '../lib/insights';

test('every insight has a distinct local cover image', () => {
  const images = insights.map(article => article.image);
  assert.equal(new Set(images).size, insights.length);

  for (const article of insights) {
    assert.match(article.image, /^\/images\/insights\/[a-z0-9-]+\.webp$/);
    assert.equal(article.image, `/images/insights/${article.slug}.webp`);
    assert.ok(article.imageAlt.trim(), `${article.slug} needs descriptive alt text`);
    const file = join(process.cwd(), 'public', article.image.slice(1));
    assert.ok(existsSync(file), `${article.slug} has a missing cover`);
    assert.ok(statSync(file).size > 10_000, `${article.slug} has an empty cover`);
  }
});

test('every insight has distinct search metadata and valid internal next steps', () => {
  assert.equal(new Set(insights.map(article => article.slug)).size, insights.length);
  assert.equal(new Set(insights.map(article => article.title)).size, insights.length);
  assert.equal(new Set(insights.map(article => article.description)).size, insights.length);

  for (const article of insights) {
    assert.match(article.slug, /^[a-z0-9-]+$/);
    assert.ok(article.answer.length >= 120, `${article.slug} needs a substantive direct answer`);
    assert.equal(article.sections.length, 4, `${article.slug} needs four worked sections`);
    assert.equal(article.related.length, 2, `${article.slug} needs two relevant next steps`);
    for (const link of article.related) assert.match(link.href, /^\/(?:insights|resources|real-estate-)/);
  }
});
