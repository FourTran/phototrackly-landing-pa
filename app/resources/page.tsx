import type { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/prelaunch/navigation';
import LeadForm from '@/components/prelaunch/lead-form';
import AnalyticsConsent, { CookieSettingsButton } from '@/components/prelaunch/analytics-consent';
import { Wordmark } from '@/components/prelaunch/primitives';
import { resources } from '@/lib/resources';
import { siteUrl } from '@/lib/site';
import '@/components/marketing/prelaunch.css';
import '@/components/marketing/seo-page.css';
import '@/components/marketing/insights.css';

export const metadata: Metadata = { title: 'Resources for Property Media Teams', description: 'Practical property media job checklists and templates for shoot planning, photographer handoffs, editing review and delivery.', alternates: { canonical: '/resources' }, openGraph: { title: 'Resources for Property Media Teams', description: 'Practical property media job checklists and templates for shoot planning, photographer handoffs, editing review and delivery.', url: '/resources' } };
export default function ResourcesPage() {
  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Resources for Property Media Teams',
    description: 'Practical property media job checklists and templates for shoot planning, photographer handoffs, editing review and delivery.',
    url: `${siteUrl()}/resources`,
    isPartOf: { '@type': 'WebSite', '@id': `${siteUrl()}/#website` },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: resources.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.title,
        url: `${siteUrl()}/resources/${item.slug}`,
      })),
    },
  };
  return <div className="pl reference-site"><Navigation /><main id="main" className="seo-main">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema).replace(/</g, '\\u003c') }} /><div className="seo-wrap seo-breadcrumb"><Link href="/">PhotoTrackly</Link><span aria-hidden="true">/</span><span>Resources</span></div>
    <section className="seo-wrap resource-hub"><p className="rf-eyebrow">RESOURCES FOR PROPERTY MEDIA TEAMS</p><h1>Practical tools for the work around a shoot.</h1><p className="seo-intro">Checklists and templates for coordinating real estate photography and property media jobs. Use them with your existing tools today; adapt them to how your team works.</p>
      <section className="resource-takeaway" aria-labelledby="resource-usage-order">
        <h2 id="resource-usage-order">Use these four templates on the same property job.</h2>
        <p>Start with a fictional or properly authorized job record and assign an owner at each handoff. Each resource works with your existing tools today; none requires PhotoTrackly software or access to a live product.</p>
        <ol>
          <li><Link href="/resources/photographer-handoff-template">Before the shoot:</Link> confirm property access, services and assigned photographer.</li>
          <li><Link href="/resources/shoot-to-delivery-checklist">During production:</Link> check the service brief, received files and each next owner.</li>
          <li><Link href="/resources/media-editing-review-checklist">Before approval:</Link> verify edited deliverables, revisions and reviewer decisions.</li>
          <li><Link href="/resources/property-job-status-board-template">Across every stage:</Link> record the blocker, next action, owner and due time.</li>
        </ol>
        <p>For a detailed explanation of job coordination, read <Link href="/insights/property-media-job-triage">how to triage a busy property media job board</Link> or explore our <Link href="/real-estate-media-production-management">planned production-management workspace</Link>.</p>
      </section>
      <section className="resource-takeaway" aria-labelledby="resources-choose-next">
        <h2 id="resources-choose-next">From a worksheet to your next decision</h2>
        <p>A template helps record an owner and a handoff; it does not replace the rest of the studio workflow. For the reasoning behind the checklist, <Link href="/insights">browse the operations guides</Link>. For a future job-centered workspace, explore <Link href="/real-estate-photography-workflow-software">the planned workflow software</Link> or <Link href="/real-estate-media-production-management">production and human review coordination</Link>.</p>
        <p>Already working with a real process? <Link href="/contact">Share a specific workflow question or correction</Link> without including confidential client or property data.</p>
      </section>
      <div className="resource-grid">{resources.map((item, index) => <article key={item.slug}><span>0{index + 1} / GUIDE</span><h2><Link href={`/resources/${item.slug}`}>{item.title}</Link></h2><p>{item.description}</p><Link href={`/resources/${item.slug}`}>Read guide <span aria-hidden="true">↗</span></Link></article>)}</div><p className="in-resource-link">Want the reasoning behind the workflow? <Link href="/insights">Read the operations insights</Link>.</p></section>
    <section className="seo-signup" id="early-access"><div className="seo-wrap seo-signup-grid"><div><p className="rf-eyebrow">JOIN EARLY ACCESS</p><h2>A future home for the whole job.</h2><p>We’re building PhotoTrackly for growing property media teams in the US and Australia. Join early access to tell us which handoff is hardest to manage. No payment or mandatory meeting.</p></div><LeadForm variant="footer" /></div></section>
  </main><footer><div className="seo-wrap rf-foot-inner"><Wordmark /><p>Property media work, connected.</p><div className="rf-footer-links"><Link href="/insights">Insights</Link><Link href="/contact">Contact</Link><Link href="/build-notes">Build notes</Link><Link href="/privacy">Privacy</Link><CookieSettingsButton /><Link href="/">Home</Link></div></div></footer><AnalyticsConsent /></div>;
}
