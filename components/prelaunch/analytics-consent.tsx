/**
 * Legacy compatibility exports. GA4 is owned globally by
 * components/prelaunch/google-analytics.tsx and runs cookieless with storage denied.
 */
export function CookieSettingsButton() {
  return null;
}

export default function AnalyticsConsent() {
  return null;
}
