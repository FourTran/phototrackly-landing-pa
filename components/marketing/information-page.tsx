import Link from 'next/link';
import type { ReactNode } from 'react';
import Navigation from '@/components/prelaunch/navigation';
import LeadForm from '@/components/prelaunch/lead-form';
import AnalyticsConsent, { CookieSettingsButton } from '@/components/prelaunch/analytics-consent';
import { Wordmark } from '@/components/prelaunch/primitives';
import './prelaunch.css';
import './seo-page.css';
import './insights.css';

export default function InformationPage({ title, intro, children }: { title: string; intro: string; children: ReactNode }) {
  return <div className="pl reference-site"><Navigation /><main id="main" className="seo-main">
    <article className="seo-wrap in-article"><h1>{title}</h1><p className="seo-intro">{intro}</p>{children}</article>
    <section id="early-access" className="seo-signup"><div className="seo-wrap seo-signup-grid"><div><h2>Help shape PhotoTrackly.</h2><p>Register your interest in the planned workspace. No payment or mandatory meeting. Registration does not create an account or guarantee immediate access.</p></div><LeadForm variant="footer" /></div></section>
  </main><footer><div className="seo-wrap rf-foot-inner"><Wordmark /><p>Property media work, connected.</p><div className="rf-footer-links"><Link href="/about">About</Link><Link href="/contact">Contact</Link><Link href="/privacy">Privacy</Link><CookieSettingsButton /></div></div></footer><AnalyticsConsent /></div>;
}
