# PhotoTrackly — technical growth recovery execution (12 October 2026)

This document records a **code-level improvement**, not proof that production has been deployed. No prospect outreach, pitches, DMs, emails or customer contact was performed.

## Baseline and observation window

- GA4 PhotoTrackly property `557439732`: 5–11 October 2026, 519 active users, 523 sessions (522 on 5 October), 27 engaged sessions, 624 page views. Do **not** describe this as 519 qualified people; the one-day spike remains unexplained.
- GA4 acquisition: 521 direct sessions, 1 Tag Assistant referral, 1 unassigned; 0 attributable organic or social sessions in that range. Direct attribution cannot establish provenance. The prior code explicitly replaced each `page_location` with origin and pathname, discarding all UTM parameters.
- Search Console `sc-domain:phototrackly.com`: 12 September–9 October, 15 impressions, 0 clicks. URL Inspection snapshot: 53 indexed, 13 discovered not indexed, 22 unknown to Google out of 88 tracked. The sitemap's aggregate indexed counter of 0 conflicts with confirmed URL Inspections, so it must not be treated as definitive.
- Canonical lead sheet in Google Drive: one identifiable internal test registration; no verified external signup. GA4 recorded one `generate_lead` event but not as a key event. The event's originating GA4/GTM rule could not be inspected because the connected GTM list action fails with `GTM_ERROR Illegal invocation`.

## Implemented in this branch

1. Preserve **only** bounded, allowlisted campaign query values (`utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term`, `utm_id` and common click identifiers) when reporting GA4 `page_location`. Unknown query parameters, possible email values, and URL fragments remain excluded.
2. Explicit QA link `?pt_qa=1` excludes the current browser tab from the custom GA4 script/events; do not use this link as a real campaign. This is a convenience for internal testing, **not** a reliable bot filter or a way to cleanse historical GA4 data.
3. Carry bounded `utm_source`, `utm_medium`, `utm_campaign`, `utm_content` through early-access request validation and into the existing dedicated 4 Google Sheets columns. Attribution is metadata, never proof of a qualified lead. Existing submissions without UTMs continue to work.
4. Sharpen the home-page problem statement for studio owners/coordinators and improve the existing four commercial pages around handoffs, the photographer brief, editorial review and delivery readiness. Keep product claims conditional/pre-launch and existing illustrative UI clearly labeled.
5. Update the privacy notice and add attribution, receiver and browser test coverage.

## Mandatory validation gates

- CI: `npm run typecheck`, `npm run lint`, `npm run test:unit`, `npm run build`, desktop + mobile `npm run test:e2e`. Do not claim they passed before the GitHub job results appear.
- Production: confirm verified Vercel project under **fourtran's projects** `team_iMOgc2WCTM1NrLydPeLfcV9L`, GitHub repository `FourTran/phototrackly-landing-pa`, production branch, domain, environment settings and deployment ID. Current authenticated Vercel project listing in this team returned zero projects, and direct lookup of `phototrackly-landing-pa` returned 404. This blocks production deployment and server log, bot, performance and error audits.
- A GitHub merge alone does **not** deploy the Google Apps Script. Update/redeploy the version-controlled receiver using `docs/GOOGLE-SHEETS-LEADS.md` under the authorized owner, with no credential exposure. Until then, GA4 UTM reporting will be improved after website deployment but the live lead-sheet UTM columns may remain empty.
- Verify 1 consented test registration through each form against a Google receiver row, matching receipt, and unambiguous GA4 `early_access_success` count. Label tests and remove them only via the correct user-controlled removal process.
- **Do not merge the independent draft `generate_lead` PR #36 or create another `generate_lead` emitter until the existing GA4/GTM event-creation rule is identified and duplicate events are ruled out.** Re-check GA4 key event configuration after that. The live GA4 admin listing contains `purchase`, `close_convert_lead`, `qualify_lead` but not `generate_lead`. A form_submit event is not a persisted lead.

## Still pending, intentionally not claimed

- Root cause of 5 October spike and any reliable clean-human segment (needs raw request logs / verified production analytics).
- Performance (LCP/INP/CLS), uptime, 4xx/5xx, geographic edge requests (correct Vercel owner not accessible; this account's Cloudflare zones did not include phototrackly.com).
- Search Console indexing improvement for the 35 URLs: audit individually, compare canonical/quality/internal links, and only request indexing following substantive fixes; no blanket resubmission.
- New organic clicks or AI referrals: no results can be guaranteed by code changes.
- Customer outreach, interviews and manual community posting: **excluded at the user's direction**.

## After merging / deploying

Track a verified 7-day baseline comparing GA4 campaign sessions, landing-page engagement, GSC search impressions/clicks, confirmed actual lead rows versus QA rows, and internally tagged test visits. Report source limitations; do not silently substitute totals of page views, impressions, or bot traffic for customers.

Canonical project materials: Google Drive folder `1-Ina3LlkvNkoz-SXnUFx-dMVzlnI5CbZ`. GitHub repository: `FourTran/phototrackly-landing-pa`.
