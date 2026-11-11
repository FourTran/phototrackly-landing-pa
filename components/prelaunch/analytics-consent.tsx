'use client';
import { openCookieSettings } from '@/lib/analytics';

export function CookieSettingsButton() {
  return <button className="pl-footer-link" type="button" onClick={openCookieSettings}>Cookie settings</button>;
}

/**
 * Legacy compatibility export. The global consent UI and Google tag are owned
 * by components/prelaunch/google-analytics.tsx.
 */
export default function AnalyticsConsent() {
  return null;
}
