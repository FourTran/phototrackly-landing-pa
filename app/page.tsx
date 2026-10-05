import type { Metadata } from 'next';
import Landing from '@/components/marketing/landing';
import { siteUrl } from '@/lib/site';
export const metadata: Metadata = { title: { absolute: 'Real Estate Photography Workflow Software — PhotoTrackly' }, alternates: { canonical: '/' }, openGraph: { title: 'Real Estate Photography Workflow Software — PhotoTrackly', url: '/' }, twitter: { title: 'Real Estate Photography Workflow Software — PhotoTrackly' } };
export default function HomePage() {
  const url = siteUrl();
  const schema = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'Organization', '@id': `${url}/#organization`, name: 'PhotoTrackly', url, description: 'PhotoTrackly is developing a connected shoot-to-delivery workspace for real estate photography and property media teams in the United States and Australia.' },
    { '@type': 'WebSite', '@id': `${url}/#website`, name: 'PhotoTrackly', url, publisher: { '@id': `${url}/#organization` } },
  ] };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} /><Landing /></>;
}

