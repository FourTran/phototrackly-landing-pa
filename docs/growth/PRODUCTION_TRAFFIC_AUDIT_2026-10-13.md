# PhotoTrackly production traffic and acquisition audit — 2026-10-13

## Exact sources and dates

- Production: `https://phototrackly.com`
- GA4 property: `557439732`; reporting timezone Asia/Saigon; observed 2026-10-05 through 2026-10-12.
- Vercel project: `phototrackly-landing-pa`, project ID `prj_AUx8JX4Jq4PdtV6ezykABURXd9wO`.
- GSC property: `sc-domain:phototrackly.com`, finalized 28-day period 2026-09-14 through 2026-10-11.
- Private production lead source of truth: Google Sheet titled **PhotoTrackly Landing Page — Early Access Leads**, `Leads` tab (do not copy contact data into GitHub).

## Verified findings

| Source | Measurement | Value |
| --- | --- | ---: |
| GA4 all hostnames | Sessions | 523 |
| GA4 localhost only | Sessions | 511 |
| GA4 phototrackly.com only | Sessions | 12 |
| GA4 phototrackly.com only | Active users / page views / engaged sessions | 9 / 27 / 2 |
| Vercel Web Analytics | Visitors / page views | 35 / 171 |
| GSC web search | Impressions / clicks | 29 / 0 |

**Do not add these together.** Vercel and GA4 count differently, may observe different sessions, and do not prove humans or buyer intent. The high-volume `localhost` GA4 traffic is development/test activity, not US production acquisition.

Vercel Web Analytics country grouping observed visitors from US (26), Vietnam (6), Canada (1), and Germany (1) in its bounded 2026-10-05 to 2026-10-12 report. This is distinct from GA4's production-host country breakdown (four Vietnam sessions and eight unknown-country sessions). Vercel geolocation is not a measure of qualified prospects.

GA4 production session sources: 10 direct/none, one not-set and one Tag Assistant referral. No reliable GA4 organic/social or AI referral session was confirmed. The only `tagassistant.google.com` referral is instrumentation/test context, not acquisition. GSC search impressions are not visits.

One successful early-access registration row dated 2026-10-05T16:19Z is stored in the production landing-page lead Sheet, with a matching submission-day GA4 `generate_lead` event. The company field is test-like, optional business qualification is empty, and attribution is not verified. **Label probable test; zero verified qualified external registrations.** Preserve the row and consent record; do not publish personal details.

## Prevent recurrence

The production site's consent-gated GA4 script and custom events now require an exact production hostname (`phototrackly.com` or `www.phototrackly.com`). They are suppressed for localhost, preview domains, and QA-session links. This code fix cannot remove prior data already recorded by Google, prevent server-side Measurement Protocol from another integration, or fix a GTM rule outside this repository.

Historical acquisition reports must filter by GA4 `hostName=phototrackly.com` (include `www.phototrackly.com` only if observed). Do not rely on unfiltered GA4 Overview, geography, or attribution tables. Compare with Vercel Web Analytics using separately labelled definitions and date windows.

## Conversion-source caution

PR #36 merged on 2026-10-12 and explicitly emits `generate_lead` after a confirmed registration response. However an event with that name was already observed on 2026-10-05 **before PR #36**, so an additional GA4/GTM event creation rule may exist. GTM account listing fails with `GTM_ERROR Illegal invocation`; the rule is therefore unverified. On 2026-10-13 the GA4 key-event configuration lists `purchase`, `close_convert_lead`, and `qualify_lead` but not `generate_lead`. Do not enable counting or claim unique leads until the duplicate origin is checked.

## Acquisition execution order

1. **Measurement:** ship the exact-host analytics guard after CI and production review; segment legacy reports and confirm first clean week. Production deployment must be verified separately from GitHub merge.
2. **Qualification:** compare every future `generate_lead` event with a real, consented saved Sheet row and mark test versus external. The landing-page Sheet remains canonical.
3. **ICP:** target established US/Australian property-media teams with multiple shooters, editors and handoffs; owner or operations manager is the initial buyer. Prioritize qualitative conversations and workflow review offer, not unqualified traffic.
4. **Distribution:** reuse the existing first-party handoff resources and `Founding Operator Workflow Review`. Draft evidence-led educational answers on permitted public channels, disclose affiliation, and attach UTM-labelled production links only if a community permits them. No outreach or posts were sent during this audit.
5. **Outcomes:** report unique contacted companies (only actually sent), replies, interviews booked/held, verified registrations, GA4 production-host sessions, Vercel visitors, and GSC clicks independently. Never manufacture acquisition outcomes.

## Next validation

- Verify the branch CI checks and Vercel preview with the correct connector account scope. No site or GA4 changes should be claimed live before production deployment.
- Test a local accepted-consent page and confirm no request to `googletagmanager.com/gtag/js?id=G-GJQ82ZDWL2` and no production `gtag` events. Test an explicit consented production browser separately and verify only canonical-host events appear. Do not create fake external leads.
- Identify the prior `generate_lead` event-creation source through an authorized GTM fix or manual Google UI review before enabling it as a key event.
