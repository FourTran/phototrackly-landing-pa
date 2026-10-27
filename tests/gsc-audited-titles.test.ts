import test from 'node:test';
import assert from 'node:assert/strict';
import { getInsight } from '../lib/insights.ts';
import { getMarketingPage } from '../lib/marketing-pages.ts';

// The shared root layout appends " | PhotoTrackly" to page titles.
// These titles were flagged by 4GSC's October 28, 2026 source-HTML audit.
// Length is an editorial heuristic, not a guarantee of Google indexing.
const auditedPages = [
  { slug: 'real-estate-photography-business-software', title: getMarketingPage('real-estate-photography-business-software')?.title },
  { slug: 'evaluate-property-media-workflow-software', title: getInsight('evaluate-property-media-workflow-software')?.title },
  { slug: 'real-estate-photography-editing-style-guide', title: getInsight('real-estate-photography-editing-style-guide')?.title },
  { slug: 'handle-client-delivery-revisions-property-media', title: getInsight('handle-client-delivery-revisions-property-media')?.title },
];

test('audited search-result titles are concise and unique', () => {
  const titles = auditedPages.map(page => {
    assert.ok(page.title, page.slug);
    const renderedTitle = `${page.title} | PhotoTrackly`;
    assert.ok(renderedTitle.length <= 60, `${page.slug}: ${renderedTitle.length} characters`);
    return renderedTitle;
  });
  assert.equal(new Set(titles).size, titles.length);
});
