import type { MetadataRoute } from 'next';
import { siteUrl } from '@/lib/site';
import { marketingPageSlugs } from '@/lib/marketing-pages';
import { resourceSlugs } from '@/lib/resources';
import { insights } from '@/lib/insights';
import { workflowExamples } from '@/lib/workflow-examples';

// Use recorded substantive content-update dates, never a build-time "last modified" value.
// PR #40 updated the homepage and four commercial-page copy on October 12.
// PR #41 updated the existing software-evaluation article on October 12.
// The two navigation hubs gained new task-focused guidance on October 12.
// Earlier article navigation, resource schema and hub schema dates are retained.
const homepageAndCommercialContentUpdated = new Date('2026-10-12T00:00:00Z');
const articleNavigationUpdated = new Date('2026-10-07T19:39:45Z');
const buyingGuideUpdated = new Date('2026-10-12T00:00:00Z');
const resourceSchemaUpdated = new Date('2026-10-08T07:41:41Z');
const contentHubsUpdated = new Date('2026-10-12T00:00:00Z');
const originalResourceExamplesUpdated = new Date('2026-10-12T00:00:00Z');

export default function sitemap(): MetadataRoute.Sitemap {
  if (process.env.VERCEL_ENV === 'preview') return [];

  const origin = siteUrl();
  return [
    // Do not fabricate a date when the last meaningful page update is unknown.
    { url: `${origin}/`, lastModified: homepageAndCommercialContentUpdated },
    { url: `${origin}/about` },
    { url: `${origin}/build-notes`, lastModified: new Date('2026-10-12T00:00:00Z') },
    { url: `${origin}/contact` },
    { url: `${origin}/privacy` },
    ...marketingPageSlugs.map(slug => ({
      url: `${origin}/${slug}`,
      lastModified: homepageAndCommercialContentUpdated,
    })),
    { url: `${origin}/resources`, lastModified: contentHubsUpdated },
    ...resourceSlugs.map(slug => ({
      url: `${origin}/resources/${slug}`,
      lastModified: originalResourceExamplesUpdated > resourceSchemaUpdated ? originalResourceExamplesUpdated : resourceSchemaUpdated,
    })),
    { url: `${origin}/insights`, lastModified: contentHubsUpdated },
    ...insights.map(article => ({
      url: `${origin}/insights/${article.slug}`,
      lastModified: new Date(Math.max(
        articleNavigationUpdated.getTime(),
        article.slug === 'evaluate-property-media-workflow-software' ? buyingGuideUpdated.getTime() : 0,
        Object.prototype.hasOwnProperty.call(workflowExamples, article.slug) ? originalResourceExamplesUpdated.getTime() : 0,
        article.publishedAt ? Date.parse(article.publishedAt) : 0,
      )),
    })),
  ];
}
