'use client';
import Script from 'next/script';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useRef } from 'react';
import {
  GA_MEASUREMENT_ID, isInternalQaSession, isProductionAnalyticsHost,
  isPublicMarketingPath, track,
} from '@/lib/analytics';
import { sanitizedAnalyticsLocation } from '@/lib/campaign-attribution';

export default function GoogleAnalytics() {
  const pathname = usePathname();
  const publicPage = isPublicMarketingPath(pathname || '');
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
    const click = (event: MouseEvent) => {
      const el = event.target instanceof Element ? event.target.closest<HTMLElement>('[data-track]') : null;
      if (el?.dataset.track === 'cta_click') track('cta_click', { location: el.dataset.location });
      if (el?.dataset.track === 'early_access_cta_click') track('early_access_cta_click', { location: el.dataset.location });
    };
    document.addEventListener('click', click);
    return () => document.removeEventListener('click', click);
  }, []);

  useEffect(() => {
    if (configured.current) sendPageView();
  }, [pathname, sendPageView]);

  function init() {
    if (!publicPage || !isProductionAnalyticsHost(window.location.hostname) || isInternalQaSession()) return;
    if (!configured.current) {
      window.dataLayer = window.dataLayer || [];
      // eslint-disable-next-line prefer-rest-params
      window.gtag = function () { window.dataLayer!.push(arguments); };
      window.gtag('js', new Date());
      window.gtag('config', GA_MEASUREMENT_ID, {
        send_page_view: false,
        allow_google_signals: false,
        allow_ad_personalization_signals: false,
        page_location: sanitizedAnalyticsLocation(location.href),
        page_referrer: document.referrer ? new URL(document.referrer).origin : '',
      });
      configured.current = true;
    }
    sendPageView();
  }

  return publicPage ? (
    <Script
      src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      strategy="afterInteractive"
      onReady={init}
    />
  ) : null;
}
