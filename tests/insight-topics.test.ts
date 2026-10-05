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
