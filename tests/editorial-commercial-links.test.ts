import test from 'node:test';
import assert from 'node:assert/strict';
import { insights } from '../lib/insights.ts';
import { commercialOwnerForInsight, topicFor } from '../lib/insight-topics.ts';
import { marketingPageSlugs } from '../lib/marketing-pages.ts';

test('every known article topic links to exactly one existing commercial URL', () => {
  const owners = new Set(marketingPageSlugs.map(slug => '/' + slug));
  for (const article of insights) {
    const topic = topicFor(article);
    const owner = commercialOwnerForInsight(article);
    assert.ok(topic, `unclassified article: ${article.slug}`);
    assert.ok(owner, `no owner for article: ${article.slug}`);
    assert.ok(owners.has(owner!.href), `unknown commercial URL for ${article.slug}`);
    assert.match(owner!.label, /^planned /);
  }
});

test('editorial topics lead to distinct software responsibilities rather than identical CTAs', () => {
  const sample: Array<[string, string]> = [
    ['property-media-job-triage', '/real-estate-photography-business-software'],
    ['multi-service-shoot-scheduling', '/real-estate-photography-scheduling-software'],
    ['real-estate-photography-editing-workflow', '/real-estate-media-production-management'],
    ['real-estate-media-delivery-readiness', '/real-estate-photography-workflow-software'],
  ];
  for (const [slug, expected] of sample) {
    const article = insights.find(item => item.slug === slug);
    assert.ok(article, `expected live insight: ${slug}`);
    assert.equal(commercialOwnerForInsight(article)?.href, expected);
  }
});
