/**
 * Legacy compatibility shim.
 *
 * GA4 is owned globally by components/prelaunch/google-analytics.tsx.
 * Older marketing pages may still import these exports; keep them as no-ops
 * so they cannot create a second tag or consent gate.
 */
export function CookieSettingsButton() {
  return null;
}

export default function AnalyticsConsent() {
  return null;
}
