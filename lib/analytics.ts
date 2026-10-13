export const ANALYTICS_CONSENT_KEY = 'phototrackly.analytics-consent.v1';
export const GA_MEASUREMENT_ID = 'G-GJQ82ZDWL2';
const QA_SESSION_KEY = 'phototrackly.internal-analytics-qa.v1';

/** Never send local development, preview or unrecognized hostnames to production GA4. */
export function isProductionAnalyticsHost(hostname: string): boolean {
  const host = hostname.trim().toLowerCase().replace(/\.$/, '');
  return host === 'phototrackly.com' || host === 'www.phototrackly.com';
}

/** QA links suppress analytics for this browser tab; do not use for customer campaigns. */
export function isInternalQaSession(): boolean {
  try {
    if (new URL(window.location.href).searchParams.get('pt_qa') === '1') {
      sessionStorage.setItem(QA_SESSION_KEY, '1');
    }
    return sessionStorage.getItem(QA_SESSION_KEY) === '1';
  } catch {
    return false;
  }
}


type EventName =
  | 'cta_click'
  | 'early_access_cta_click'
  | 'early_access_form_start'
  | 'early_access_submit'
  | 'early_access_success'
  | 'generate_lead'
  | 'early_access_error'
  | 'sample_stage_view'
  | 'board_filter'
  | 'faq_open';
declare global { interface Window { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void; } }
export function track(event: EventName, params: { location?: string; stage?: string; category?: string; question?: string } = {}) {
  try {
    if (!isProductionAnalyticsHost(window.location.hostname) || isInternalQaSession() || localStorage.getItem(ANALYTICS_CONSENT_KEY) !== 'accepted') return;
    // Never pass form values, email, company, names, URLs, or free text to analytics.
    window.gtag?.('event', event, params);
  } catch { /* Analytics must never block registration or page controls. */ }
}
export function openCookieSettings() { window.dispatchEvent(new Event('phototrackly:cookie-settings')); }
