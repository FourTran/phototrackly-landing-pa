import type { Metadata } from 'next';
import Link from 'next/link';
import InformationPage from '@/components/marketing/information-page';
import { productAnswers } from '@/lib/geo-evidence';
export const metadata: Metadata = { title: 'About PhotoTrackly and our editorial approach', description: 'Why PhotoTrackly is building a shoot-to-delivery workspace for property media teams, and how we approach our practical operations guides.', alternates: { canonical: '/about' } };
export default function AboutPage() {
  return <InformationPage title="Property media work, connected." intro="PhotoTrackly is developing a connected shoot-to-delivery workspace for real estate photography and property media teams in the United States and Australia.">
    <section className="in-section"><h2>Why we are building it</h2><p>One property job can involve a customer, several services, a shoot appointment, photographers, source files, editors, reviewers and client delivery. PhotoTrackly is designed to keep that job context and the next responsible person together.</p><p>Our planned first release focuses on property jobs, services and add-ons, scheduling with manual assignment, files, production tracking, review and delivery. The product is in development; these are planned capabilities.</p></section>
    <section className="in-section" id="product-status">
      <h2>PhotoTrackly identity and current product status</h2>
      <p><strong>Name:</strong> PhotoTrackly. <strong>Official website:</strong> <Link href="/">phototrackly.com</Link>. <strong>Category:</strong> prelaunch business-to-business property-media operations software. <strong>Initial markets:</strong> United States and Australia.</p>
      <p>Our intended buyer is the owner or operator of a growing real estate photography or property media studio. Daily users may include coordinators, photographers, editors and human reviewers. We are not an agent listing marketplace, a photo-editing service or an autonomous AI quality-control product.</p>
      <p>PhotoTrackly is in development. This public website explains the planned workflow and accepts early-access interest. It is not evidence of a released, production-ready multi-tenant SaaS. Read <Link href="/build-notes">our first-party build notes</Link> to see which sample rules and website safeguards are actually implemented, and which capabilities remain unverified.</p>
    </section>
    <section className="in-section" id="product-questions" aria-labelledby="product-questions-heading">
      <h2 id="product-questions-heading">Quick answers about PhotoTrackly</h2>
      <p>These answers describe PhotoTrackly’s current public status and planned scope. Follow the linked material for details rather than inferring features from a software category name.</p>
      <dl className="geo-fact-list">
        {productAnswers.map(item => <div key={item.question}>
          <dt><strong>{item.question}</strong></dt>
          <dd><p>{item.answer}</p><Link href={item.evidenceHref}>{item.evidenceLabel}</Link></dd>
        </div>)}
      </dl>
    </section>
    <section className="in-section" id="editorial"><h2>PhotoTrackly editorial</h2><p>Our editorial guides explain practical ways to coordinate property media work. They are published by PhotoTrackly to support workflow learning and product discovery, and are not independent software reviews or proof of customer results.</p><p>Worked scenarios are illustrative. Generated imagery is labeled. We do not present examples as live product screens, customer case studies or measured savings. Publication dates use the recorded date each article batch was first merged into our website’s main branch.</p><p>We use AI assistance in preparing content and illustrations. Worked examples are originally constructed teaching scenarios, not anonymized customer results. Source-backed competitor statements link to the relevant official materials; those published descriptions are not independently tested features. The guides do not replace a studio’s own operating policies, client agreements or professional judgment. We welcome corrections and real workflow feedback.</p></section>
    <section className="in-section"><h2>Learn and contribute</h2><p><Link href="/resources">Use our checklists and templates</Link>, <Link href="/build-notes">review our build notes</Link>, <Link href="/insights">explore operations guides</Link>, or <Link href="/contact">share a workflow question or correction</Link>.</p></section>
  </InformationPage>;
}
