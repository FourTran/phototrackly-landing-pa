import type { Metadata } from 'next';
import Link from 'next/link';
import InformationPage from '@/components/marketing/information-page';
import { siteUrl } from '@/lib/site';

const sourceRepo = 'https://github.com/FourTran/phototrackly-landing-pa';
export const metadata: Metadata = {
  title: 'How PhotoTrackly Is Building Property Media Workflow Software',
  description: 'First-party PhotoTrackly build notes: our property-job model, human review, prelaunch early-access safeguards, current limits, and verifiable source-code decisions.',
  alternates: { canonical: '/build-notes' },
  openGraph: {
    title: 'How PhotoTrackly Is Building Property Media Workflow Software',
    description: 'Evidence-backed build notes from a developing property-media operations workspace, not customer testimonials or live-product promises.',
    url: '/build-notes',
  },
};

export default function BuildNotesPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'How PhotoTrackly is building a property-media workflow',
    description: 'PhotoTrackly first-party technical and product decisions for a prelaunch property-media operations workspace.',
    mainEntityOfPage: `${siteUrl()}/build-notes`,
    author: { '@type': 'Organization', name: 'PhotoTrackly editorial', url: `${siteUrl()}/about#editorial` },
    publisher: { '@type': 'Organization', name: 'PhotoTrackly', url: siteUrl() },
    datePublished: '2026-10-12T00:00:00Z',
  };
  return <InformationPage title="How PhotoTrackly is being built" intro="First-party notes about the property-media workflow we are designing, the illustrative preview we can actually show, and the gaps we have not solved yet. Updated October 12, 2026.">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />
    <section className="in-section">
      <h2>The product question: who owns the next action?</h2>
      <p>A real estate media order can include photographs, drone imagery, video and a floor plan. A coordinator schedules the visit, a photographer captures the source files, editors prepare outputs, and a reviewer decides what is approved for client delivery. A calendar or folder can show only part of that journey. We are designing PhotoTrackly around one property job and its ordered services, next responsible person and explicit handoffs.</p>
      <p>This is a product direction, not a customer-validated claim that we have saved studios time. Our target users are growing real estate photography and property media companies in the United States and Australia, not agents looking for a listing marketplace or consumers looking for a photography service.</p>
      <p><Link href="/real-estate-photography-workflow-software">See the intended shoot-to-delivery workflow</Link> and <Link href="/resources/shoot-to-delivery-checklist">use the free checklist with existing tools</Link>.</p>
    </section>
    <section className="in-section">
      <h2>What the illustrative preview really tests</h2>
      <p>Our publicly visible demonstration includes six job stages: Booked, Scheduled, Source files, Editing, In review, and Delivered. This is a fictional product concept rather than a deployed multi-tenant service. In its sample-model code, moving to the scheduled stage requires a manually assigned photographer. Moving into editing requires source-file records. A human approval action requires four review checks; a revision clears prior approval so a stale version does not silently count as delivered.</p>
      <p>These checks are meaningful because they expose a single principle: a workflow stage is not enough without ownership and an explicit completion condition. The preview can be exercised in a browser using illustrative data, but it does not establish that production scheduling, storage, media uploads or client deliveries are available in a finished PhotoTrackly application.</p>
      <p>Inspect the <a href={`${sourceRepo}/blob/main/lib/model.ts`} rel="noopener noreferrer">sample job model and transition rules</a> and the <a href={`${sourceRepo}/blob/main/tests/model.test.ts`} rel="noopener noreferrer">unit tests for assignment, revision and approval</a>.</p>
      <figure className="resource-takeaway">
        <figcaption><strong>Illustrative process and owner decisions</strong> — a teaching model, not a real customer job.</figcaption>
        <ol>
          <li><strong>Brief → coordinator:</strong> record the property, ordered services and access instructions.</li>
          <li><strong>Schedule → assigned photographer:</strong> confirm date and current service brief manually.</li>
          <li><strong>Files → production owner:</strong> check the expected source sets before editing can proceed.</li>
          <li><strong>Review → human reviewer:</strong> distinguish approved files from specific revisions.</li>
          <li><strong>Delivery → coordinator:</strong> verify the agreed approved package and recipient.</li>
        </ol>
      </figure>
    </section>
    <section className="in-section">
      <h2>What the prelaunch website has implemented</h2>
      <p>The website has two early-access registration forms and a server endpoint designed to validate consent and require confirmation of an actual saved registration before showing a success receipt. It records interest; it does not open a PhotoTrackly account. The source includes safeguards for retries, untrusted inputs and private withdrawal tokens. Actual production Google Apps Script configuration and live delivery still require their own operational checks.</p>
      <p>We also publish answer-first operating guides, practical CSV worksheets and fictional annotated jobs. Those examples are designed to work with a studio current process, independent of PhotoTrackly availability. Our guides do not claim that fictitious properties are paying customers or that our illustrations are screenshots of a finished SaaS.</p>
      <p>Read the <a href={`${sourceRepo}/blob/main/lib/lead-store.ts`} rel="noopener noreferrer">registration receipt contract</a>, <a href={`${sourceRepo}/pull/40`} rel="noopener noreferrer">the privacy-safe campaign attribution change</a>, and <a href={`${sourceRepo}/pull/45`} rel="noopener noreferrer">the original worked-example release</a>.</p>
    </section>
    <section className="in-section">
      <h2>Current limits and what remains to prove</h2>
      <ul>
        <li><strong>In development:</strong> the planned product covers jobs, services, manual scheduling, assignments, files, production status, human QC/revisions and delivery.</li>
        <li><strong>Not confirmed:</strong> automatic photographer routing, two-way calendars, payment integrations, AI photo editing, autonomous visual QC, migration tooling, launch date or pricing.</li>
        <li><strong>Not customer evidence:</strong> illustrated dashboards, fictional jobs, developer tests and hypothetical outcomes. These are not paid trials, measurable savings or testimonials.</li>
        <li><strong>Still requiring independent verification:</strong> the public deployment, end-to-end live registration receiver, actual AI-search citation traffic and the quality of future released workflows.</li>
      </ul>
      <p>We will describe available features only after they can be verified in a released application. Our <Link href="/about#editorial">editorial policy</Link> explains our use of illustrative data and AI assistance. <Link href="/contact">Share a correction through the registration form</Link> without including private client data.</p>
    </section>
    <section className="in-section">
      <h2>Public implementation references</h2>
      <p>These links are to our own code and change history, not external endorsements. They let technically minded visitors distinguish deployed website work from the product still under development.</p>
      <ul>
        <li><a href={sourceRepo} rel="noopener noreferrer">PhotoTrackly website source repository</a></li>
        <li><a href={`${sourceRepo}/pull/42`} rel="noopener noreferrer">Crawling, sitemap and internal-link changes</a></li>
        <li><a href={`${sourceRepo}/pull/43`} rel="noopener noreferrer">Buyer-focused software-page explanations</a></li>
        <li><a href={`${sourceRepo}/pull/44`} rel="noopener noreferrer">Evidence-backed competitor evaluation</a></li>
      </ul>
      <p>This page describes our website and design decisions as of October 12, 2026. It should be revised when real product capabilities, permissions or verified source evidence change.</p>
    </section>
  </InformationPage>;
}
