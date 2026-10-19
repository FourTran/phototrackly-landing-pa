'use client';
import Link from 'next/link';
import Script from 'next/script';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useRef, useState } from 'react';
import {
  ANALYTICS_CONSENT_KEY, GA_MEASUREMENT_ID, isInternalQaSession,
  isProductionAnalyticsHost, isPublicMarketingPath, openCookieSettings, track,
} from '@/lib/analytics';
import { sanitizedAnalyticsLocation } from '@/lib/campaign-attribution';

type ConsentChoice = 'accepted' | 'declined';

export function CookieSettingsButton() {
  return <button className="pl-footer-link" type="button" onClick={openCookieSettings}>Cookie settings</button>;
}

export default function AnalyticsConsent() {
  const pathname = usePathname();
  const publicPage = isPublicMarketingPath(pathname || '');
  const [choice, setChoice] = useState<ConsentChoice | null>(null);
  const [visible, setVisible] = useState(false);
  const [internalQa, setInternalQa] = useState(false);
  const configured = useRef(false);
  const lastTrackedLocation = useRef('');

  // One manually controlled page_view for each distinct consented public page.
  // Automatic page views are disabled in the gtag config to avoid duplicates.
  const sendPageView = useCallback(() => {
    try {
      if (!publicPage || internalQa || !isProductionAnalyticsHost(window.location.hostname)
        || isInternalQaSession() || localStorage.getItem(ANALYTICS_CONSENT_KEY) !== 'accepted'
        || !window.gtag) return;
      const pageLocation = sanitizedAnalyticsLocation(window.location.href);
      if (pageLocation === lastTrackedLocation.current) return;
      window.gtag('event', 'page_view', { page_location: pageLocation, page_title: document.title });
      lastTrackedLocation.current = pageLocation;
    } catch { /* Analytics errors never block the site or its forms. */ }
  }, [publicPage, internalQa]);

  /* eslint-disable react-hooks/set-state-in-effect -- Read the prior preference after hydration. */
  useEffect(() => {
    try {
      if (isInternalQaSession() || !isProductionAnalyticsHost(window.location.hostname)) {
        setInternalQa(true);
        setChoice(null);
        setVisible(false);
      } else {
        const saved = localStorage.getItem(ANALYTICS_CONSENT_KEY);
        if (saved === 'accepted' || saved === 'declined') {
          setChoice(saved);
          setVisible(false);
        } else {
          setVisible(publicPage);
        }
      }
    } catch { /* If storage is unavailable, optional tracking stays off. */ }

    const reopen = () => { if (publicPage) setVisible(true); };
    const click = (event: MouseEvent) => {
      const el = event.target instanceof Element ? event.target.closest<HTMLElement>('[data-track]') : null;
      if (el?.dataset.track === 'cta_click') track('cta_click', { location: el.dataset.location });
      if (el?.dataset.track === 'early_access_cta_click') track('early_access_cta_click', { location: el.dataset.location });
    };
    document.addEventListener('click', click);
    window.addEventListener('phototrackly:cookie-settings', reopen);
    return () => {
      document.removeEventListener('click', click);
      window.removeEventListener('phototrackly:cookie-settings', reopen);
    };
  }, [publicPage]);
  /* eslint-enable react-hooks/set-state-in-effect */

  useEffect(() => {
    if (!configured.current) return;
    if (!publicPage) {
      // The script cannot be unloaded after client-side navigation. Disable
      // measurement on private/illustrative routes and emit no page_view there.
      window.gtag?.('consent', 'update', { analytics_storage: 'denied' });
    } else if (choice === 'accepted' && !internalQa) {
      window.gtag?.('consent', 'update', { analytics_storage: 'granted' });
      sendPageView();
    }
  }, [pathname, publicPage, choice, internalQa, sendPageView]);

  function choose(next: ConsentChoice) {
    try { localStorage.setItem(ANALYTICS_CONSENT_KEY, next); }
    catch { setVisible(false); return; }
    if (next === 'declined') {
      window.gtag?.('consent', 'update', { analytics_storage: 'denied' });
      // Clear first-party GA cookies at the current and parent host levels.
      for (const part of document.cookie.split(';')) {
        const key = part.trim().split('=')[0];
        if (!key.startsWith('_ga')) continue;
        document.cookie = `${key}=; Max-Age=0; path=/`;
        const labels = location.hostname.split('.');
        for (let i = 0; i < labels.length - 1; i++) {
          document.cookie = `${key}=; Max-Age=0; path=/; domain=.${labels.slice(i).join('.')}`;
        }
      }
    }
    setChoice(next);
    setVisible(false);
    if (next === 'declined' && window.gtag) location.reload();
  }

  function init() {
    if (!publicPage || !isProductionAnalyticsHost(window.location.hostname) || isInternalQaSession()) return;
    if (!configured.current) {
      window.dataLayer = window.dataLayer || [];
      // The Google tag queue stores its arguments object, not an array.
      // eslint-disable-next-line prefer-rest-params
      window.gtag = function () { window.dataLayer!.push(arguments); };
      window.gtag('consent', 'default', {
        analytics_storage: 'granted', ad_storage: 'denied',
        ad_user_data: 'denied', ad_personalization: 'denied',
      });
      window.gtag('js', new Date());
      window.gtag('config', GA_MEASUREMENT_ID, {
        send_page_view: false,
        allow_google_signals: false,
        allow_ad_personalization_signals: false,
        page_location: sanitizedAnalyticsLocation(location.href),
        page_referrer: document.referrer ? new URL(document.referrer).origin : '',
      });
      configured.current = true;
    } else {
      window.gtag?.('consent', 'update', { analytics_storage: 'granted' });
    }
    sendPageView();
  }

  return <>
    {publicPage && choice === 'accepted' && !internalQa && (
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
        onReady={init}
      />
    )}
    {publicPage && visible && (
      <div className="pl">
        <section className="pl-cookie" aria-label="Optional analytics cookies">
          <div>
            <strong>A little insight, with your permission.</strong>
            <p>May we use optional analytics to understand what’s useful? Your form details are never sent to analytics. <Link href="/privacy">Privacy notice</Link></p>
          </div>
          <div>
            <button type="button" onClick={() => choose('declined')}>No thanks</button>
            <button type="button" onClick={() => choose('accepted')}>Allow analytics</button>
          </div>
        </section>
      </div>
    )}
  </>;
}
