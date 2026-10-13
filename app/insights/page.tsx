import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/components/prelaunch/navigation';
import LeadForm from '@/components/prelaunch/lead-form';
import AnalyticsConsent, { CookieSettingsButton } from '@/components/prelaunch/analytics-consent';
import { Wordmark } from '@/components/prelaunch/primitives';
import { insightTopics, topicFor } from '@/lib/insight-topics';
import { insights } from '@/lib/insights';
import { siteUrl } from '@/lib/site';
import '@/components/marketing/prelaunch.css';
import '@/components/marketing/seo-page.css';
import '@/components/marketing/insights.css';

export const metadata: Metadata = {
  title: 'Property Media Operations Insights',
  description: 'Practical articles for real estate photography studios on scheduling, job triage, quality review and choosing workflow software.',
  alternates: { canonical: '/insights' },
  openGraph: { title: 'Property Media Operations Insights', description: 'Practical articles for the work around property media shoots.', url: '/insights' },
  twitter: { card: 'summary_large_image', title: 'Property Media Operations Insights', description: 'Practical articles for the work around property media shoots.' },
};

export default function InsightsPage() {
  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Property Media Operations Insights',
    description: 'Practical articles for real estate photography studios on scheduling, job triage, quality review and choosing workflow software.',
    url: `${siteUrl()}/insights`,
    isPartOf: { '@type': 'WebSite', '@id': `${siteUrl()}/#website` },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: insights.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.title,
        url: `${siteUrl()}/insights/${item.slug}`,
      })),
    },
  };
  return <div className="pl reference-site"><Navigation /><main id="main" className="seo-main">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema).replace(/</g, '\\u003c') }} />
    <div className="seo-wrap seo-breadcrumb"><Link href="/">PhotoTrackly</Link><span aria-hidden="true">/</span><span>Insights</span></div>
    <section className="seo-wrap in-hub"><p className="rf-eyebrow">FROM THE OPERATIONS DESK</p><h1>Make the work around every shoot clearer.</h1><p className="seo-intro">Practical decisions, worked examples and evaluation questions for growing property media teams. The examples are illustrative and can be used with your current tools.</p>

      <section className="resource-takeaway" aria-labelledby="insight-start-here">
        <h2 id="insight-start-here">Start with one real job, not a generic software checklist.</h2>
        <p>Pick the handoff causing delays in your property-media studio. The guides below use illustrative property jobs so you can apply the operating steps with a spreadsheet, calendar or the tools you already use. They are not reports of PhotoTrackly customers or finished product features.</p>
        <ul>
          <li><Link href="/insights/property-media-job-triage">No one knows the next action? Triage the job board and assign an owner.</Link></li>
          <li><Link href="/insights/multi-service-shoot-scheduling">A shoot includes photos, drone and floor plans? Check the complete assignment brief.</Link></li>
          <li><Link href="/insights/real-estate-media-delivery-readiness">Files are finished but not approved? Review the delivery-ready checklist.</Link></li>
          <li><Link href="/insights/evaluate-property-media-workflow-software">Comparing operating tools? Run one job through the same evaluation.</Link></li>
        </ul>
        <p>Looking for the planned PhotoTrackly product? <Link href="/real-estate-photography-workflow-software">Explore the shoot-to-delivery workspace concept</Link>. For editable checklists, <Link href="/resources">browse practical templates</Link>.</p>
      </section>
      <section className="resource-takeaway" aria-labelledby="insights-choose-workflow">
        <h2 id="insights-choose-workflow">Find the right part of the job before choosing software</h2>
        <p>These guides help diagnose operational handoffs using your current tools. If you are exploring a future connected workspace, choose the page that matches your responsibility:</p>
        <ul>
          <li><Link href="/real-estate-photography-business-software">Studio owners:</Link> manage several property jobs, people and deadlines</li>
          <li><Link href="/real-estate-photography-scheduling-software">Schedulers:</Link> connect appointments to service requirements and photographer briefs</li>
          <li><Link href="/real-estate-media-production-management">Editors and reviewers:</Link> coordinate media readiness, human QC and revisions</li>
          <li><Link href="/real-estate-photography-workflow-software">Coordinators:</Link> follow the complete brief-to-delivery handoff</li>
        </ul>
        <p>PhotoTrackly is in development. These are intended workflows, not features you can use in a released product today.</p>
      </section>
      <nav aria-label="Insight topics" className="in-related">{insightTopics.map(topic => <Link href={`#${topic.id}`} key={topic.id}>{topic.title}</Link>)}</nav>
      {insightTopics.map(topic => <section key={topic.id} id={topic.id}><h2>{topic.title}</h2><div className="in-grid">{insights.filter(article => topicFor(article)?.id === topic.id).map(article => <article key={article.slug} className="in-card"><Link className="in-card-image" href={`/insights/${article.slug}`} aria-label={`Read ${article.title}`}><Image src={article.image} alt={article.imageAlt} fill sizes="(max-width: 700px) 100vw, 50vw" /></Link><div className="in-card-copy"><p className="in-meta">{article.category} · {article.readingMinutes} min read</p><h2><Link href={`/insights/${article.slug}`}>{article.title}</Link></h2><p>{article.description}</p><Link className="in-read" href={`/insights/${article.slug}`}>Read article <span aria-hidden="true">↗</span></Link></div></article>)}</div></section>)}
      <p className="in-resource-link">Need something to use today? <Link href="/resources">Browse the checklists and templates</Link>.</p>
    </section>
    <section className="seo-signup" id="early-access"><div className="seo-wrap seo-signup-grid"><div><p className="rf-eyebrow">JOIN EARLY ACCESS</p><h2>Help shape PhotoTrackly.</h2><p>We’re building a connected workspace for real estate photography and property media teams in the US and Australia. Registration is free and does not create an account or guarantee immediate access.</p></div><LeadForm variant="footer" /></div></section>
  </main><footer><div className="seo-wrap rf-foot-inner"><Wordmark /><p>Property media work, connected.</p><div className="rf-footer-links"><Link href="/resources">Resources</Link><Link href="/about">About</Link><Link href="/contact">Contact</Link><Link href="/build-notes">Build notes</Link><Link href="/privacy">Privacy</Link><CookieSettingsButton /></div></div></footer><AnalyticsConsent /></div>;
}

