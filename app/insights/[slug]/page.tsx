import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navigation from '@/components/prelaunch/navigation';
import LeadForm from '@/components/prelaunch/lead-form';
import AnalyticsConsent, { CookieSettingsButton } from '@/components/prelaunch/analytics-consent';
import { Wordmark } from '@/components/prelaunch/primitives';
import { getInsight, insightSlugs, insights } from '@/lib/insights';
import { siteUrl } from '@/lib/site';
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
    openGraph: { type: 'article', title: article.title, description: article.description, url: `/insights/${slug}`, images: [{ url: article.image, alt: article.imageAlt }] },
    twitter: { card: 'summary_large_image', title: article.title, description: article.description, images: [article.image] },
  };
}
export default async function InsightDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const article = getInsight(slug); if (!article) notFound();
  const articleUrl = `${siteUrl()}/insights/${slug}`;
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    image: `${siteUrl()}${article.image}`,
    mainEntityOfPage: articleUrl,
    publisher: { '@type': 'Organization', name: 'PhotoTrackly', url: siteUrl() },
  };
  return <div className="pl reference-site"><Navigation /><main id="main" className="seo-main">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema).replace(/</g, '\\u003c') }} />
    <div className="seo-wrap seo-breadcrumb"><Link href="/">PhotoTrackly</Link><span aria-hidden="true">/</span><Link href="/insights">Insights</Link><span aria-hidden="true">/</span><span>{article.title}</span></div>
    <article className="seo-wrap in-article"><header><p className="rf-eyebrow">{article.category.toUpperCase()} · {article.readingMinutes} MIN READ</p><h1>{article.title}</h1><p className="in-byline">PhotoTrackly editorial</p><p className="seo-intro">{article.intro}</p></header>
      <figure className="in-hero-image"><Image src={article.image} alt={article.imageAlt} fill sizes="(max-width: 900px) 100vw, 900px" priority /><figcaption>AI-generated illustration of a property media workflow</figcaption></figure>
      <section className="in-answer" aria-label="Quick answer"><p className="rf-eyebrow">QUICK ANSWER</p><p>{article.answer}</p></section>
      {article.sections.map(section => <section className="in-section" key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}{section.bullets && <ul>{section.bullets.map(item => <li key={item}>{item}</li>)}</ul>}{section.table && <div className="in-table-scroll"><table><thead><tr>{section.table.headers.map(header => <th scope="col" key={header}>{header}</th>)}</tr></thead><tbody>{section.table.rows.map((row, index) => <tr key={index}>{row.map((cell, column) => column === 0 ? <th scope="row" key={column}>{cell}</th> : <td key={column}>{cell}</td>)}</tr>)}</tbody></table></div>}</section>)}
      <aside className="resource-takeaway"><h2>Takeaway</h2><p>{article.closing}</p></aside>
      <div className="in-related"><h2>Continue with a practical tool</h2>{article.related.map(link => <Link key={link.href} href={link.href}>{link.label}<span aria-hidden="true">↗</span></Link>)}</div>
    </article>
    <section className="seo-wrap in-more"><p className="rf-eyebrow">MORE FROM PHOTOTRACKLY</p><h2>Keep exploring</h2><div>{insights.filter(other => other.slug !== slug).map(other => <Link key={other.slug} href={`/insights/${other.slug}`}>{other.title}<span aria-hidden="true">↗</span></Link>)}</div></section>
    <section className="seo-signup" id="early-access"><div className="seo-wrap seo-signup-grid"><div><p className="rf-eyebrow">JOIN EARLY ACCESS</p><h2>Help shape a connected workflow.</h2><p>PhotoTrackly is in development for property media teams in the US and Australia. Registering interest does not create an account or guarantee immediate access. No payment or mandatory meeting.</p></div><LeadForm variant="footer" /></div></section>
  </main><footer><div className="seo-wrap rf-foot-inner"><Wordmark /><p>Property media work, connected.</p><div className="rf-footer-links"><Link href="/insights">Insights</Link><Link href="/privacy">Privacy</Link><CookieSettingsButton /></div></div></footer><AnalyticsConsent /></div>;
}
