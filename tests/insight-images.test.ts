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
