import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navigation from '@/components/prelaunch/navigation';
import LeadForm from '@/components/prelaunch/lead-form';
import AnalyticsConsent, { CookieSettingsButton } from '@/components/prelaunch/analytics-consent';
import { Wordmark } from '@/components/prelaunch/primitives';
import { getInsight, insightSlugs } from '@/lib/insights';
import { relatedInsights, topicFor, publicationLabel, insightWorksheets } from '@/lib/insight-topics';
import { siteUrl } from '@/lib/site';
import { workflowExamples } from '@/lib/workflow-examples';
import '@/components/marketing/prelaunch.css';
import '@/components/marketing/seo-page.css';
import '@/components/marketing/insights.css';

export const dynamicParams = false;
export function generateStaticParams() { return insightSlugs.map(slug => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params; const article = getInsight(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: `/insights/${slug}` },
    authors: [{ name: 'PhotoTrackly editorial', url: '/about#editorial' }],
    openGraph: { type: 'article', publishedTime: article.publishedAt, title: article.title, description: article.description, url: `/insights/${slug}`, images: [{ url: article.image, alt: article.imageAlt }] },
    twitter: { card: 'summary_large_image', title: article.title, description: article.description, images: [article.image] },
  };
}
export default async function InsightDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const article = getInsight(slug); if (!article) notFound();
  const practice = workflowExamples[slug];
  const worksheet = insightWorksheets[slug];
  const articleUrl = `${siteUrl()}/insights/${slug}`;
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    image: `${siteUrl()}${article.image}`,
    mainEntityOfPage: articleUrl,
    publisher: { '@type': 'Organization', name: 'PhotoTrackly', url: siteUrl() },
    author: { '@type': 'Organization', name: 'PhotoTrackly editorial', url: `${siteUrl()}/about#editorial` },
    datePublished: article.publishedAt,
    ...(practice ? { dateModified: '2026-10-12T00:00:00Z' } : {}),
    ...(article.sources?.length ? { citation: article.sources.map(source => source.url) } : {}),
  };
  return <div className="pl reference-site"><Navigation /><main id="main" className="seo-main">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema).replace(/</g, '\\u003c') }} />
    <div className="seo-wrap seo-breadcrumb"><Link href="/">PhotoTrackly</Link><span aria-hidden="true">/</span><Link href="/insights">Insights</Link><span aria-hidden="true">/</span><span>{article.title}</span></div>
    <article className="seo-wrap in-article"><header><p className="rf-eyebrow">{article.category.toUpperCase()} · {article.readingMinutes} MIN READ</p><h1>{article.title}</h1><p className="in-byline"><Link href="/about#editorial">PhotoTrackly editorial</Link>{article.publishedAt && <> · Published <time dateTime={article.publishedAt}>{publicationLabel(article.publishedAt)}</time></>}{practice && <> · Updated <time dateTime="2026-10-12">October 12, 2026</time></>}</p><p className="seo-intro">{article.intro}</p></header>
      <figure className="in-hero-image"><Image src={article.image} alt={article.imageAlt} fill sizes="(max-width: 900px) 100vw, 900px" priority /><figcaption>AI-generated illustration of a property media workflow</figcaption></figure>
      <section className="in-answer" aria-label="Quick answer"><p className="rf-eyebrow">QUICK ANSWER</p><p>{article.answer}</p></section>
      {practice && <figure className="in-workflow-practice" aria-label="Illustrative job workflow example">
        <p className="rf-eyebrow">WORKED OPERATING EXAMPLE</p>
        <h2>{practice.title}</h2>
        <p>{practice.scenario}</p>
        <ol className="in-practice-steps">{practice.checkpoints.map(step => <li key={step.stage}><h3>{step.stage}</h3><p><strong>Owner:</strong> {step.owner}</p><p><strong>Signal:</strong> {step.signal}</p><p><strong>Next action:</strong> {step.nextAction}</p><p><strong>Proof of completion:</strong> {step.evidence}</p></li>)}</ol>
        <figcaption><strong>Decision rule:</strong> {practice.decisionRule} This is fictional sample data, not an observed studio, case study, or PhotoTrackly product screenshot. <a href={`/worksheets/${practice.worksheet}.csv`} download>{practice.worksheetLabel} (CSV)</a>.</figcaption>
      </figure>}
      {article.sections.map(section => <section className="in-section" key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}{section.bullets && <ul>{section.bullets.map(item => <li key={item}>{item}</li>)}</ul>}{section.table && <div className="in-table-scroll"><table><thead><tr>{section.table.headers.map(header => <th scope="col" key={header}>{header}</th>)}</tr></thead><tbody>{section.table.rows.map((row, index) => <tr key={index}>{row.map((cell, column) => column === 0 ? <th scope="row" key={column}>{cell}</th> : <td key={column}>{cell}</td>)}</tr>)}</tbody></table></div>}</section>)}
      {article.vendorEvidence?.length ? <aside className="resource-takeaway vendor-evidence" aria-label="Vendor documentation and test questions">
        <h2>What vendor documentation shows — and what to verify</h2>
        <p>Checked against publicly available vendor material on October 12, 2026. These are vendor-published descriptions, not independent demonstrations or an endorsement. Availability may vary by product tier or change over time.</p>
        <div className="in-table-scroll"><table>
          <caption>Evidence-led real estate media software evaluation</caption>
          <thead><tr><th scope="col">Vendor</th><th scope="col">Documented workflow</th><th scope="col">Question for a real product demo</th></tr></thead>
          <tbody>{article.vendorEvidence.map(item => <tr key={item.vendor}><th scope="row"><a href={item.sourceUrl} rel="noopener noreferrer">{item.vendor}</a></th><td>{item.publishedCapability}</td><td>{item.testQuestion}</td></tr>)}</tbody>
        </table></div>
        <p>For PhotoTrackly, compare the intended first-release scope rather than pretending a demo of an unreleased feature exists.</p>
      </aside> : null}
      {worksheet && <aside className="resource-takeaway"><h2>Use the worksheet</h2><p>Download a starting worksheet for the process in this guide. Open the CSV in your spreadsheet app, adapt it to your team, and keep private job information in your own storage. These are operating templates, not PhotoTrackly product exports.</p><a href={`/worksheets/${worksheet.file}.csv`} download>{worksheet.label} (CSV)</a></aside>}
      {article.sources?.length ? <aside className="resource-takeaway" aria-label="Sources and further reading"><h2>Sources and further reading</h2><p>The links below are primary vendor materials, checked for this guide in October 2026. They describe vendor-published capabilities, not independently tested performance. PhotoTrackly is in development.</p><ul>{article.sources.map(source => <li key={source.url}><a href={source.url} rel="noopener noreferrer">{source.label}</a></li>)}</ul></aside> : null}
      <aside className="resource-takeaway"><h2>Takeaway</h2><p>{article.closing}</p></aside>
      <div className="in-related"><h2>Continue with a practical tool</h2>{article.related.map(link => <Link key={link.href} href={link.href}>{link.label}<span aria-hidden="true">↗</span></Link>)}</div>
    </article>
    <section className="seo-wrap in-more"><p className="rf-eyebrow">MORE FROM PHOTOTRACKLY</p><h2>Keep exploring</h2><p><Link href={`/insights#${topicFor(article)?.id || "operations"}`}>Browse this topic</Link> · <Link href="/insights">All insights</Link></p><div>{relatedInsights(article).map(other => <Link key={other.slug} href={`/insights/${other.slug}`}>{other.title}<span aria-hidden="true">↗</span></Link>)}</div></section>
    <section className="seo-signup" id="early-access"><div className="seo-wrap seo-signup-grid"><div><p className="rf-eyebrow">JOIN EARLY ACCESS</p><h2>Help shape a connected workflow.</h2><p>PhotoTrackly is in development for property media teams in the US and Australia. Registering interest does not create an account or guarantee immediate access. No payment or mandatory meeting.</p></div><LeadForm variant="footer" /></div></section>
  </main><footer><div className="seo-wrap rf-foot-inner"><Wordmark /><p>Property media work, connected.</p><div className="rf-footer-links"><Link href="/insights">Insights</Link><Link href="/resources">Resources</Link><Link href="/about">About</Link><Link href="/contact">Contact</Link><Link href="/privacy">Privacy</Link><CookieSettingsButton /></div></div></footer><AnalyticsConsent /></div>;
}

