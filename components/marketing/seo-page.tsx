import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/components/prelaunch/navigation';
import LeadForm from '@/components/prelaunch/lead-form';
import AnalyticsConsent, { CookieSettingsButton } from '@/components/prelaunch/analytics-consent';
import { Wordmark } from '@/components/prelaunch/primitives';
import type { MarketingPage } from '@/lib/marketing-pages';
import { buyerSignupCopy } from '@/lib/conversion-messaging';
import './prelaunch.css';
import './seo-page.css';

const operationalGuideByPage: Record<string, { href: string; label: string }> = {
  'real-estate-photography-business-software': {
    href: '/insights/evaluate-property-media-workflow-software',
    label: 'Evaluate business software with a real studio workflow',
  },
  'real-estate-photography-workflow-software': {
    href: '/insights/property-media-job-triage',
    label: 'Triage active property jobs and identify the next owner',
  },
  'real-estate-photography-scheduling-software': {
    href: '/insights/multi-service-shoot-scheduling',
    label: 'Plan a multi-service shoot with photos, drone and floor plans',
  },
  'real-estate-media-production-management': {
    href: '/insights/real-estate-media-delivery-readiness',
    label: 'Separate edited files from approved client deliverables',
  },
};

export default function SeoPage({ page }: { page: MarketingPage }) {
  const signup = buyerSignupCopy[page.slug];
  return <div className="pl reference-site"><Navigation /><main id="main" className="seo-main">
    <div className="seo-wrap seo-breadcrumb"><Link href="/">PhotoTrackly</Link><span aria-hidden="true">/</span><span>{page.title}</span></div>
    <section className="seo-wrap seo-hero"><div><p className="rf-eyebrow">{page.eyebrow}</p><h1>{page.heading}</h1><p className="seo-intro">{page.introduction}</p><a className="rf-button" href="#early-access" data-track="cta_click" data-location={page.slug}>Join early access <span aria-hidden="true">↗</span></a><p className="seo-status">In development · No payment or mandatory meeting</p></div><figure><Image src={page.image} alt={page.imageAlt} fill sizes="(max-width: 900px) 100vw, 45vw" /><figcaption>Illustrative property media imagery</figcaption></figure></section>
    <section className="seo-wrap seo-buyer-answer" aria-labelledby="buyer-answer-heading">
      <p className="rf-eyebrow">THE SHORT ANSWER</p>
      <h2 id="buyer-answer-heading">What should this software help your studio do?</h2>
      <p>{page.buyerGuide.directAnswer}</p>
      <h3>Who this workflow is for</h3>
      <ul>{page.buyerGuide.forTeams.map(role => <li key={role}>{role}</li>)}</ul>
    </section>
    <section className="seo-wrap seo-context"><p className="rf-eyebrow">THE COORDINATION PROBLEM</p><h2>When work is scattered, status gets harder to see.</h2><p>{page.problem}</p></section>
    <section className="seo-band"><div className="seo-wrap"><p className="rf-eyebrow">A JOB IN PRACTICE</p><h2>One property. One connected story.</h2><p>{page.example}</p><ol className="seo-steps">{page.steps.map((step, index) => <li key={step.title}><span>{String(index + 1).padStart(2, '0')}</span><h3>{step.title}</h3><p>{step.detail}</p></li>)}</ol></div></section>
    <section className="seo-wrap seo-decision-example" aria-labelledby="handoff-heading">
      <p className="rf-eyebrow">ONE JOB, CLEAR RESPONSIBILITIES</p>
      <h2 id="handoff-heading">An illustrative property-media job: who acts next?</h2>
      <p>This fictional workflow describes a practice a studio can adopt with existing tools. It does not represent a live PhotoTrackly customer or a released automation.</p>
      <div className="seo-decision-table-scroll"><table><caption>Example responsibilities and next actions for one property job</caption><thead><tr><th scope="col">Job checkpoint</th><th scope="col">Responsible role</th><th scope="col">What must be decided</th></tr></thead><tbody>{page.buyerGuide.exampleHandoffs.map(item => <tr key={item.checkpoint}><th scope="row">{item.checkpoint}</th><td>{item.owner}</td><td>{item.decision}</td></tr>)}</tbody></table></div>
    </section>
    <section className="seo-wrap seo-selection-checks" aria-labelledby="software-evaluation-heading">
      <p className="rf-eyebrow">HOW TO EVALUATE A SOFTWARE OPTION</p>
      <h2 id="software-evaluation-heading">Three questions to check before choosing a workflow tool</h2>
      <p>Use one representative property job to compare options. These are buyer evaluation questions, not claims that PhotoTrackly currently provides the described features.</p>
      <ol className="seo-selection-grid">{page.buyerGuide.selectionChecks.map(item => <li key={item.question}>
        <h3>{item.question}</h3>
        <p><strong>How to verify:</strong> {item.test}</p>
        <p><strong>Important boundary:</strong> {item.limit}</p>
      </li>)}</ol>
      <p>For a documented cross-vendor evaluation, see the <Link href="/insights/evaluate-property-media-workflow-software">property-media software evaluation guide</Link>.</p>
    </section>
    <section className="seo-wrap seo-product-boundaries" aria-labelledby="scope-heading">
      <p className="rf-eyebrow">PLANNED FIRST RELEASE</p>
      <h2 id="scope-heading">What is planned — and what is not confirmed?</h2>
      <div className="seo-boundary-grid">
        <div><h3>Planned workflow scope</h3><ul>{page.buyerGuide.plannedFirstRelease.map(feature => <li key={feature}>{feature}</li>)}</ul></div>
        <div><h3>Not currently promised</h3><ul>{page.buyerGuide.notPromised.map(feature => <li key={feature}>{feature}</li>)}</ul></div>
      </div>
      <p>PhotoTrackly is in development. Early-access registration records interest; it does not create an account, provide immediate access or guarantee a launch date.</p>
    </section>
    <section className="seo-wrap seo-related"><div><p className="rf-eyebrow">EXPLORE THE WORKFLOW</p><h2>See how the pieces fit together.</h2></div><div>{[
      ['real-estate-photography-business-software', 'Business software'],
      ['real-estate-photography-workflow-software', 'Shoot-to-delivery workflow'],
      ['real-estate-photography-scheduling-software', 'Shoot scheduling'],
      ['real-estate-media-production-management', 'Production management'],
    ].filter(([slug]) => slug !== page.slug).map(([slug, label]) => <Link key={slug} href={`/${slug}`}>{label}<span aria-hidden="true">↗</span></Link>)}</div></section>
    <section className="seo-wrap seo-related"><div><p className="rf-eyebrow">PRACTICAL NEXT STEPS</p><h2>Use the workflow with your team.</h2></div><div><Link href="/resources">Browse practical resources<span aria-hidden="true">↗</span></Link><Link href="/insights">Read operations insights<span aria-hidden="true">↗</span></Link><Link href={operationalGuideByPage[page.slug].href}>{operationalGuideByPage[page.slug].label}<span aria-hidden="true">↗</span></Link><Link href="/resources/photographer-handoff-template">Use the photographer handoff template<span aria-hidden="true">↗</span></Link><Link href="/contact">Share workflow feedback<span aria-hidden="true">↗</span></Link></div></section>
    <section className="seo-wrap seo-questions"><p className="rf-eyebrow">CLEAR ANSWERS</p><h2>Before you join early access</h2>{page.questions.map(item => <details key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}</section>
    <section className="seo-signup" id="early-access"><div className="seo-wrap seo-signup-grid"><div><p className="rf-eyebrow">JOIN EARLY ACCESS</p><h2>{signup.heading}</h2><p>{signup.introduction}</p><p className="seo-signup-context">{signup.contextPrompt}</p><p>PhotoTrackly is in development for studios in the United States and Australia. Registration records interest, not a working account or guaranteed invitation. No payment or mandatory meeting is required.</p></div><LeadForm variant="footer" /></div></section>
  </main><footer><div className="seo-wrap rf-foot-inner"><Wordmark /><p>Property media work, connected.</p><div className="rf-footer-links"><Link href="/build-notes">Build notes</Link><Link href="/privacy">Privacy</Link><CookieSettingsButton /><Link href="/">Home</Link></div></div></footer><AnalyticsConsent /></div>;
}
