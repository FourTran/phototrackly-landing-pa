import assert from 'node:assert/strict';
import test from 'node:test';
import { insights } from '../lib/insights';
import { insightTopics, relatedInsights, topicFor } from '../lib/insight-topics';

test('topic hub accounts for every published article exactly once', () => {
  for (const article of insights) {
    assert.equal(insightTopics.filter(topic => topic.categories.includes(article.category)).length, 1, article.slug);
    assert.ok(article.publishedAt && Number.isFinite(Date.parse(article.publishedAt)), article.slug);
  }
});
test('related links stay in the current topic, exclude self and stay bounded', () => {
  for (const article of insights) {
    const related = relatedInsights(article);
    assert.ok(related.length > 0 && related.length <= 4, article.slug);
    assert.equal(new Set(related.map(other => other.slug)).size, related.length);
    for (const other of related) {
      assert.notEqual(other.slug, article.slug);
      assert.equal(topicFor(other)?.id, topicFor(article)?.id);
    }
  }
});

test('buyer guide grounds every vendor comparison in a visible primary citation', () => {
  const article = insights.find(item => item.slug === 'evaluate-property-media-workflow-software');
  assert.ok(article);
  assert.equal(article.vendorEvidence?.length, 7);
  assert.equal(new Set(article.vendorEvidence?.map(item => item.vendor)).size, 7);
  for (const vendor of ['Tonomo', 'HDPhotoHub', 'Aryeo', 'Spiro', 'Skyline OS', 'Opsicom', 'Ubookr']) {
    assert.ok(article.vendorEvidence?.some(item => item.vendor === vendor), vendor);
  }
  const sources = new Set(article.sources?.map(source => source.url));
  for (const item of article.vendorEvidence || []) {
    assert.ok(item.publishedCapability.length >= 80, item.vendor);
    assert.ok(item.testQuestion.length >= 70, item.vendor);
    assert.ok(sources.has(item.sourceUrl), item.vendor);
  }
  assert.equal(article.sections.length, 4);
});
