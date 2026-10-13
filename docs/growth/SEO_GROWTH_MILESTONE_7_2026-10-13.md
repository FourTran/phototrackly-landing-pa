# PhotoTrackly — Growth Roadmap Milestone 7: Conversion and Lead Quality

**Audit and implementation:** 2026-10-13 (Asia/Ho_Chi_Minh)  
**Canonical site:** https://phototrackly.com  
**Canonical repository:** FourTran/phototrackly-landing-pa  
**Google:** GSC MCP v2 is the only Google Search Console/GA4/GTM growth connector used, exact GA4 property `557439732`, web stream `16046618836`, measurement ID `G-GJQ82ZDWL2`.  
**Leads:** connected Google Drive sheet **PhotoTrackly Landing Page — Early Access Leads**, exact existing `Leads` tab, read-only. Do **not** upload personal contact data to the public repository.

**Scope distinction:** This is **Growth Roadmap Milestone 7 (conversion and lead quality)**, not the previously completed `AI_SEARCH_MILESTONE_7_2026-10-13.md` from a separate technical roadmap.

## Phase 7.1 — Registration journey and receipt safety

The code audit found important safeguards already present; we reused them:
- Hero and footer forms use only **work email, company and explicit consent** as required fields; optional name, role, country, monthly order volume and current bottleneck in the longer footer form.
- `/api/early-access` rejects cross-site requests, non-JSON posts, oversized or invalid payloads. Honeypot field and receiver-side rate limits reduce abuse.
- `captureLead` only confirms success after the approved Google Apps Script endpoint returns **`saved: true` with the matching request ID**, never from HTTP 200 alone.
- Retried submissions reuse their request identity; unexpected redirects, Google login pages, errors and unknown responses fail closed.
- Withdrawal requires a private token and explicit action. Browser analytics must not receive contact fields or private links.
- Existing isolated desktop/mobile Playwright tests cover hero+footer successful persisted receiver mock, optional fields, consent, failures, 415 no-JS fallback, no form PII in URLs, idempotency, and removal. **They use a CI test double, not the live Google Sheet**.

New browser test validates each of the four commercial landing page signups has the correct intent messaging, the same required fields, optional qualifiers and a privacy link. Another test mocks a malicious/invalid HTTP 200 without withdrawal token: the form must not show registration success, must retain typed fields, and must not report a confirmed saved lead.

**Live production end-to-end validation remains unverified**: the canonical Vercel project was previously inaccessible (project 404 / deployment 403), and the deployed Apps Script receiver version/environment cannot be read from repo tests. No fabricated live signup was submitted. To close this external gate, the account owner must use the correctly authorized Vercel team and Apps Script deployment to inspect production env binding, perform an explicit owner-authorized QA-tagged submission, verify exactly one saved row+matching receipt, and remove that test row with consent/retention policy. **Do not perform a production test registration from this milestone PR.**

## Phase 7.2 — Buyer-specific conversion

Previously the four commercial pages shared the same generic footer CTA. The new `lib/conversion-messaging.ts` gives each owner page an honest, specific prompt:
1. **Studio owners / business operations**: coordinating overlapping property jobs and people.
2. **Shoot-to-delivery workflow**: missing context among coordinators, photographers, editors and reviewers.
3. **Scheduling / manual assignments**: access notes, service briefs and reschedules.
4. **Editing / production / QC**: missing source files, revisions, approval ownership and delivery readiness.

The existing `SeoPage` displays a tailored headline, introductory buyer-fit explanation and optional bottleneck prompt adjacent to the **unchanged** footer form. It explicitly says that registration is interest only: no working account, guarantee, payment or mandatory meeting. No new required fields, new routes, unverified customer proof, or actual launch promises.

The homepage already explains prelaunch status, buyer role and product category. Its layout, hero contact field count, images and sample screens are preserved.

## Phase 7.3 — GA4/consent integrity audit (read-only)

Exact GA4 property `557439732` and current full periods:
- **Oct 6–12:** 1 active user, **1 session, 1 engaged**, 0 configured key events; the recorded source was Google Tag Assistant in the latest acquisition report, not an external customer.
- **Sept 15–Oct 12:** **519 active users**, **523 sessions**, **27 engaged (5.16%)**, **0 key events**. Acquisition: 521 Direct / 26 engaged; 1 Unassigned / 0 engaged; 1 `tagassistant.google.com / referral` / 1 engaged. This source profile is not evidence of commercial acquisition; the concentrated Direct spike is plausibly automation/test noise but cannot be proven bots from GA4 alone.
- Event report: **1 `form_submit`, 1 `generate_lead`**, each zero key-event conversions. Event counts ≠ saved rows ≠ actual buyers.
- Configured GA4 key events: **`purchase`, `close_convert_lead`, `qualify_lead`**; `generate_lead` is **not** configured as a key event. The historical user request to enable it has not been implemented in the live property according to the read-only Admin API.
- Client source in `components/prelaunch/lead-form.tsx` calls `track('early_access_success')` and `track('generate_lead')` after a server-confirmed saved receipt, once per success reference **per form instance**. Consent and canonical-host gating are implemented in `lib/analytics.ts`.
- **Unresolved origin risk:** The one recorded `form_submit` and `generate_lead` event may include GA4 enhanced measurement or GTM producers. Prior PR #36 was merged despite an earlier warning to reconcile emitters. We have not independently read the deployed GTM workspace rules or confirmed a full live receipt+event trace. Do **not** add another emitter, mark events as qualified, or change GA4/GTM config until all producers are identified and the user approves configuration changes.

**Suggested approval-gated manual step:** Resolve exact GTM container/workspace ownership, inspect existing `generate_lead`/form-submit triggers, replay one explicitly authorized internal QA submission with a test receiver and consent, verify exactly one recorded lead event per unique persisted reference; then decide whether to configure `generate_lead` as a GA4 key event (`ONCE_PER_EVENT`) if that is still desired. No GA4/GTM write performed.

## Phase 7.4 — Truthful lead-quality system (no PII)

The actual private Google Sheet was read with connected Google Drive, bounded metadata-derived `Leads!A1:V150` (without editing the spreadsheet). As of Oct 13 it contained **one consented saved lead row** with a request reference. Its content looks like an internal/test submission; source is footer, country/volume/role not provided, no UTM attribution, and no independent external buyer proof. **This is not a verified qualified lead.** No contact fields were copied into GitHub or this report.

New privacy-minimizing artifacts:
- `lib/lead-quality.ts`: pure classification. A confirmed external qualified buyer requires **saved row + consent + non-test status + human review + verified buyer fit + external acquisition evidence + not withdrawn**. Other states are `not_saved`, `withdrawn`, `suspected_test`, `saved_unverified`, `verified_qualified_external`.
- `data/growth-lead-quality-baseline-2026-10-13.json`: **anonymous boolean flags only**, one test-like saved record and the actual GA4 aggregate. No emails, company name, private notes, tokens, Sheet row identifiers or reference IDs.
- `tests/growth-conversion.test.ts`: verifies that analytics events never qualify a lead, a saved but unverified record is not a customer, tests are excluded, and human/buyer/channel evidence is required.
- New browser tests ensure no false success for an HTTP 200 without matching receipt contract.

**Review workflow (manual after authorized read):** list saved consented rows only in private Google Sheet; independently validate real business interest, buyer role, country/industry fit and external acquisition evidence (where available); keep test or staff records separated; never place contact data in repo/issue logs; aggregate only counts for public metrics. When attribution is unknown, mark *unattributed*, not Organic or AI referral.

## Release, evidence and external gates

- GitHub checks: TypeScript, ESLint, isolated unit/receiver tests, Next.js production build, desktop/mobile Playwright browser/API.
- Site URLs, robots rules and sitemap entries remain unchanged (89). No GA4/GTM setup, third-party outreach, new leads or Google indexing requests were performed.
- After full green CI, squash-merge PR into `main`, verify the merge SHA and final files. A successful Vercel commit check is **not independent live canonical deployment verification**.
- Only after an authorized live production form test and GA4 producer reconciliation can the team sign off **end-to-end production conversion instrumentation**, qualified external source attribution and any conversion-key-event changes.

## Definition of done

**Completed through this PR:** precise conversion-source audit, four buyer-matched CTAs, preserved low-friction forms and fail-closed receipt verification, anonymized actual saved-row vs GA4 baseline, classification guardrails and regression tests.

**Not yet externally proven:** a qualified outside lead, live production receiver and its environment, root cause of large Direct GA4 spike, GTM event source uniqueness or a live GA4 `generate_lead` key-event setting. Do not claim those outcomes until real evidence exists.

**Next:** Growth Roadmap Milestone 8 — measure commercial impressions, engaged organic/referral visits and verified registrations, and prioritize only supported improvements.
