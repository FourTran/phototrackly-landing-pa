import type { MarketingPage } from './marketing-pages';
import { PRODUCTION_SITE_URL } from './site';

/** Follow the breadcrumb people see on each canonical commercial landing page. */
export function commercialBreadcrumbSchema(page: Pick<MarketingPage, 'slug' | 'title'>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'PhotoTrackly', item: `${PRODUCTION_SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: page.title, item: `${PRODUCTION_SITE_URL}/${page.slug}` },
    ],
  };
}
