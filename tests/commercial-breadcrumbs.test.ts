import test from 'node:test';
import assert from 'node:assert/strict';
import { commercialBreadcrumbSchema } from '../lib/commercial-breadcrumbs.ts';
import { marketingPages } from '../lib/marketing-pages.ts';
import { PRODUCTION_SITE_URL } from '../lib/site.ts';

test('commercial pages expose canonical breadcrumbs matching their visible navigation', () => {
  assert.equal(marketingPages.length, 4);
  for (const page of marketingPages) {
    const schema = commercialBreadcrumbSchema(page);
    assert.equal(schema['@context'], 'https://schema.org');
    assert.equal(schema['@type'], 'BreadcrumbList');
    assert.equal(schema.itemListElement.length, 2);
    assert.deepEqual(schema.itemListElement.map(item => item.position), [1, 2]);
    assert.deepEqual(schema.itemListElement.map(item => item.name), ['PhotoTrackly', page.title]);
    assert.deepEqual(schema.itemListElement.map(item => item.item), [`${PRODUCTION_SITE_URL}/`, `${PRODUCTION_SITE_URL}/${page.slug}`]);
    assert.ok(schema.itemListElement.every(item => item['@type'] === 'ListItem'));
    assert.ok(!JSON.stringify(schema).includes('localhost'));
  }
});
