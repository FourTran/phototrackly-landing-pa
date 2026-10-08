import type { MetadataRoute } from 'next';
import { siteUrl } from '@/lib/site';
import { marketingPageSlugs } from '@/lib/marketing-pages';
import { resourceSlugs } from '@/lib/resources';
import { insights } from '@/lib/insights';

// These are verified significant page changes, not build-time timestamps.
// PR #33 added content-navigation links across commercial and insight pages.
// PR #34 added Article structured data to resource detail pages.
// PR #35 added CollectionPage structured data to the two content hubs.
const commercialAndInsightLinksUpdated = new Date('2026-10-07T19:39:45Z');
const resourceSchemaUpdated = new Date('2026-10-08T07:41:41Z');
const collectionSchemaUpdated = new Date('2026-10-08T08:26:12Z');

export default function sitemap(): MetadataRoute.Sitemap {
  if (process.env.VERCEL_ENV === 'preview') return [];

  const origin = siteUrl();
  return [
    // Do not fabricate a date when the last meaningful page update is unknown.
    { url: origin },
    { url: `${origin}/about` },
    { url: `${origin}/contact` },
    { url: `${origin}/privacy` },
    ...marketingPageSlugs.map(slug => ({
      url: `${origin}/${slug}`,
      lastModified: commercialAndInsightLinksUpdated,
    })),
    { url: `${origin}/resources`, lastModified: collectionSchemaUpdated },
    ...resourceSlugs.map(slug => ({
      url: `${origin}/resources/${slug}`,
      lastModified: resourceSchemaUpdated,
    })),
    { url: `${origin}/insights`, lastModified: collectionSchemaUpdated },
    ...insights.map(article => ({
      url: `${origin}/insights/${article.slug}`,
      lastModified: new Date(Math.max(
        commercialAndInsightLinksUpdated.getTime(),
        article.publishedAt ? Date.parse(article.publishedAt) : 0,
      )),
    })),
  ];
}
