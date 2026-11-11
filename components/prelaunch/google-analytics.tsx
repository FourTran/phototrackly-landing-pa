'use client';
import Script from 'next/script';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useRef, useState } from 'react';
import {
  ANALYTICS_CONSENT_KEY, GA_MEASUREMENT_ID, isInternalQaSession,
  isProductionAnalyticsHost, isPublicMarketingPath, openCookieSettings, track,
} from '@/lib/analytics';
import { sanitizedAnalyticsLocation } from '@/lib/campaign-attribution';

type ConsentChoice = 'accepted' | 'declined';

function readSavedChoice(): ConsentChoice | null {
  try {
    const saved = localStorage.getItem(ANALYTICS_CONSENT_KEY);
    return saved === 'accepted' || saved === 'declined' ? saved : null;
  } catch {
    return null;
  }
}

export default function GoogleAnalytics() {
  const pathname = usePathname();
  const publicPage = isPublicMarketingPath(pathname || '');
  const [enabled, setEnabled] = useState(false);
  const [choice, setChoice] = useState<ConsentChoice | null>(null);
  const [visible, setVisible] = useState(false);
  const configured = useRef(false);
  const lastTrackedLocation = useRef('');

  const sendPageView = useCallback(() => {
    try {
      if (!publicPage || !isProductionAnalyticsHost(window.location.hostname)
        || isInternalQaSession() || !window.gtag) return;
      const pageLocation = sanitizedAnalyticsLocation(window.location.href);
      if (pageLocation === lastTrackedLocation.current) return;
      window.gtag('event', 'page_view', {
        page_location: pageLocation,
        page_title: document.title,
      });
      lastTrackedLocation.current = pageLocation;
    } catch { /* Analytics must never block the site. */ }
  }, [publicPage]);

  useEffect(() => {
    try {
      if (!publicPage || !isProductionAnalyticsHost(window.location.hostname) || isInternalQaSession()) {
        setEnabled(false);
        setVisible(false);
        return;
      }

      window.dataLayer = window.dataLayer || [];
      // The Google tag queue stores its arguments object, not an array.
      // eslint-disable-next-line prefer-rest-params
      window.gtag = window.gtag || function () { window.dataLayer!.push(arguments); };

      const saved = readSavedChoice();
      const analyticsStorage = saved === 'accepted' ? 'granted' : 'denied';

      // Advanced Consent Mode: establish defaults before loading gtag.js.
      window.gtag('consent', 'default', {
        analytics_storage: analyticsStorage,
        ad_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied',
        wait_for_update: 500,
      });

      setChoice(saved);
      setVisible(saved === null);
      setEnabled(true);
    } catch {
      setEnabled(false);
      setVisible(false);
    }
  }, [publicPage]);

  useEffect(() => {
    const reopen = () => {
      if (publicPage && isProductionAnalyticsHost(window.location.hostname) && !isInternalQaSession()) {
        setVisible(true);
      }
    };
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

  useEffect(() => {
    if (configured.current) sendPageView();
  }, [pathname, sendPageView]);

  function init() {
    if (!enabled || !window.gtag || configured.current) return;
    window.gtag('js', new Date());
    window.gtag('config', GA_MEASUREMENT_ID, {
      send_page_view: false,
      allow_google_signals: false,
      allow_ad_personalization_signals: false,
      page_location: sanitizedAnalyticsLocation(location.href),
      page_referrer: document.referrer ? new URL(document.referrer).origin : '',
    });
    configured.current = true;
    sendPageView();
  }

  function choose(next: ConsentChoice) {
    try { localStorage.setItem(ANALYTICS_CONSENT_KEY, next); } catch { /* Continue with in-memory state. */ }
    setChoice(next);
    setVisible(false);
    window.gtag?.('consent', 'update', {
      analytics_storage: next === 'accepted' ? 'granted' : 'denied',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
    });
  }

  return <>
    {enabled && (
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
        onReady={init}
      />
    )}
    {enabled && visible && (
      <div className="pl">
        <section className="pl-cookie" aria-label="Analytics cookie choices">
          <div>
            <strong>A little insight, with your permission.</strong>
            <p>We use Google Analytics to understand what is useful. If you do not allow analytics cookies, Google receives cookieless measurement signals only. Your form details are never sent to analytics.</p>
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
