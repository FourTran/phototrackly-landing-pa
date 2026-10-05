import type { MetadataRoute } from 'next';
import { siteUrl } from '@/lib/site';
import { marketingPageSlugs } from '@/lib/marketing-pages';
import { resourceSlugs } from '@/lib/resources';
import { insightSlugs } from '@/lib/insights';
export default function sitemap(): MetadataRoute.Sitemap { if (process.env.VERCEL_ENV === 'preview') return []; return [{ url: siteUrl(), changeFrequency: 'monthly', priority: 1 }, { url: `${siteUrl()}/about`, changeFrequency: 'monthly', priority: 0.4 }, { url: `${siteUrl()}/contact`, changeFrequency: 'monthly', priority: 0.4 }, { url: `${siteUrl()}/privacy`, changeFrequency: 'yearly', priority: 0.2 }, ...marketingPageSlugs.map(slug => ({ url: `${siteUrl()}/${slug}`, changeFrequency: 'monthly' as const, priority: 0.8 })), { url: `${siteUrl()}/resources`, changeFrequency: 'monthly', priority: 0.6 }, ...resourceSlugs.map(slug => ({ url: `${siteUrl()}/resources/${slug}`, changeFrequency: 'monthly' as const, priority: 0.6 })), { url: `${siteUrl()}/insights`, changeFrequency: 'weekly', priority: 0.7 }, ...insightSlugs.map(slug => ({ url: `${siteUrl()}/insights/${slug}`, changeFrequency: 'monthly' as const, priority: 0.7 }))]; }

