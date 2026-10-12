/* eslint-disable @next/next/no-page-custom-font -- App Router root layout: this stylesheet is global across all routes, with system-font fallbacks. */
import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { DM_Sans, Manrope, JetBrains_Mono, Plus_Jakarta_Sans } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { siteUrl } from '@/lib/site';
import './globals.css';

// Self-host fonts at build time instead of blocking mobile rendering on a Google CSS request.
const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans', display: 'swap' });
const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope', display: 'swap' });
const jetBrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains', display: 'swap' });
const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-jakarta', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl()),
  ...(process.env.VERCEL_ENV === 'preview' ? { robots: { index: false, follow: false } } : {}),
  ...(process.env.GOOGLE_SITE_VERIFICATION ? { verification: { google: process.env.GOOGLE_SITE_VERIFICATION } } : {}),
  ...(process.env.BING_SITE_VERIFICATION ? { other: { 'msvalidate.01': process.env.BING_SITE_VERIFICATION } } : {}),
  title: { default: 'PhotoTrackly — One tool for the whole property media job.', template: '%s | PhotoTrackly' },
  description: 'One planned workspace for property media orders, scheduling, assignments, files, editing, review, and delivery. Built for US and Australian teams. Join free early access.',
  openGraph: { type: 'website', siteName: 'PhotoTrackly', title: 'One tool for the whole property media job.', description: 'Fewer lost details. Clearer handoffs. One planned workspace for real estate photography and property media teams.' },
  twitter: { card: 'summary_large_image', title: 'PhotoTrackly — One tool for the whole property media job.' },
};
export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#f5f7f4' };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${manrope.variable} ${jetBrainsMono.variable} ${plusJakartaSans.variable}`}>
        <a className="skip-link" href="#main">Skip to content</a>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
