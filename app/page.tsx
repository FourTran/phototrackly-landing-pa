import type { Metadata } from 'next';
import Landing from '@/components/marketing/landing';
import { siteUrl } from '@/lib/site';
export const metadata: Metadata = { title: { absolute: 'PhotoTrackly — Property Media Operations for Growing Studios' }, description: 'PhotoTrackly is developing a property media operations workspace for studios coordinating shoots, photographers, editing, human review and client delivery.', alternates: { canonical: '/' }, openGraph: { title: 'PhotoTrackly — Property Media Operations for Growing Studios', url: '/' }, twitter: { title: 'PhotoTrackly — Property Media Operations for Growing Studios' } };
export default function HomePage() {
  const url = siteUrl();
  const schema = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'Organization', '@id': `${url}/#organization`, name: 'PhotoTrackly', alternateName: 'photoTrackly', url, description: 'PhotoTrackly is developing a connected shoot-to-delivery workspace for real estate photography and property media teams in the United States and Australia.' },
    { '@type': 'WebSite', '@id': `${url}/#website`, name: 'PhotoTrackly', url, publisher: { '@id': `${url}/#organization` } },
  ] };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} /><Landing /></>;
}

