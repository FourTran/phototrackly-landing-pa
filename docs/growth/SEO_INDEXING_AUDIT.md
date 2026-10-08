# SEO foundation improvements — 5 October 2026

Base: FourTran/phototrackly-landing-pa current main after GA4 consent fixes. Scope: marketing metadata, trust pages, editorial markup, topic navigation and canonical hostname. No release authorized by this document.

- Homepage names the software category and includes accurate Organization/WebSite identity markup.
- About explains planned scope, editorial responsibility, AI assistance, illustrative examples and publication-date provenance. Contact reuses the existing registration receiver instead of inventing an inbox or exposing personal contact details.
- Article author is the existing PhotoTrackly editorial organization. Publication dates reflect verified first-main merge timestamps: PR #12 original articles; #13–14 October 2; #17 October 3; #18 October 4; #19 October 5. These are first-main-publication baselines, not verified deployment timestamps. No dateModified is invented for unchanged article bodies.
- Four original downloadable CSV worksheets support eight existing articles: job status/next action, shoot brief, delivery readiness and software evaluation. They contain headings and prompts, not customer data.
- Related articles are limited to four in the same topic. The Insights hub groups all articles into operations, scheduling, production/QC and delivery.
- www.phototrackly.com permanently redirects to the apex domain with the original path and query preserved by Next.js redirect handling. Other hosts are unaffected.
- Privacy has a specific meta description. About/Contact are included in the production sitemap; preview sitemap/noindex rules remain.
- The sitemap grows from 66 to 68 intended public URLs because About and Contact are added.

## Existing analytics verification scope

The branch is synchronized with the current consent-gated GA4 implementation on main. GA4 loads only after analytics consent and uses PhotoTrackly measurement ID G-GJQ82ZDWL2. The early-access form emits early_access_success only after the backend confirms a successful registration and returns the expected receipt fields. Custom analytics events do not include form values, email, company, names, free text or private removal tokens. Live GA4 report access and marking early_access_success as a key event remain separate verification steps.

## Search state

GSC currently exposes sc-domain:phototrackly.com with owner access. The existing 66-URL sitemap was submitted and read on October 5 with zero errors and zero warnings, while the sitemap summary currently reports zero indexed URLs and Search Analytics has no page/query rows yet. The URL Inspection connector is currently returning a backend D1_ERROR (no such table: url_inspections), so the current per-URL coverage state cannot be revalidated from the connector at this moment. Earlier same-day inspection evidence showed the four commercial software pages as discovered but not indexed, with the sitemap as a discovery source; treat that as historical evidence until inspection works again.

This change does not submit indexing requests. Do not repeatedly request all URLs. Recheck representative priority URLs after release and once URL Inspection is healthy.

## Remaining growth work

Use real permissioned interview insights or original operating assets when improving articles. Do not invent customer evidence or author credentials. GA4 key-event configuration, Bing monitoring, production bot access and post-release indexing checks remain separate verification work.

## Validation

This PR originally passed production build, ESLint, TypeScript, unit and desktop/mobile browser/API checks before the latest main synchronization. After synchronizing with main, GitHub/Vercel checks are the authoritative current verification and must pass again before merge. Receiver tests use isolated mocks and must not create production leads. Production canonical behavior should use NEXT_PUBLIC_SITE_URL=https://phototrackly.com.


---

## Live GSC MCP v2 follow-up — 8 October 2026

This **newer inspection snapshot supersedes the historical October 5 tool-error and 66-URL observations above**. It is a point-in-time report, not a promise of Google ranking or full index coverage.

### Scope and measured baseline

- Canonical property: `sc-domain:phototrackly.com`.
- Submitted sitemap: `https://phototrackly.com/sitemap.xml`; **88 submitted URLs**, last read October 7, **0 reported sitemap errors/warnings**.
- GSC sitemap aggregate still reports **0 indexed**, but per-URL Inspection has confirmed indexed pages. Do not treat the aggregate as proof that no pages are indexed.
- All **88 known sitemap URLs registered** in the GSC MCP v2 local indexing tracker; the first expanded inspection pass produced **55 completed URL states**: **35 "Submitted and indexed"**, **12 "Discovered - currently not indexed"**, **8 "URL is unknown to Google"**, and **33 uninspected/timeout**. The remaining 33 have no confirmed verdict, not a negative verdict.
- **All four** commercial pages (`/real-estate-photography-business-software`, `/real-estate-photography-workflow-software`, `/real-estate-photography-scheduling-software`, `/real-estate-media-production-management`) have independently passed URL Inspection; the apex homepage is also indexed with matching HTTPS canonical.
- `/insights`, `/resources` and `/contact` remain **discovered, currently not indexed**, with no recorded Google crawl date in their inspected results. They are already in the sitemap with canonical metadata and internal links; this is not a demonstrated robots block.
- Search Performance (finalized **September 9–October 6**): **0 Google impressions, 0 clicks, no query rows** on the canonical property. GA4 property `557439732` has **no identifiable ChatGPT/Perplexity/Gemini/Copilot/Claude referral** in that period. Attribution cannot capture all AI influence.
- Avoid interpreting today's inspection states as appearing in older finalized GSC performance data; many article batches were published **October 2–7**, and crawl/reporting may lag.

### Cross-domain discovery — investigate without conflating traffic

Public search results still surface *historically crawled* PhotoTrackly pages on `qrtrackly.com`; the archived `FourTran4444/qrTrackly` repository already defines permanent redirects for the old PhotoTrackly routes toward `https://phototrackly.com`. The live response of those old routes was **not independently confirmed** during this audit, so do not claim deployment/redirect success from code alone.

The older GSC property `sc-domain:qrtrackly.com` shows **223 impressions and 3 clicks** for September 9–October 6, but its top pages are predominantly **former Craft House paths**. These are **not PhotoTrackly organic search results** and must not be included in PhotoTrackly growth KPIs.

Do not publish new `qrtrackly.com` PhotoTrackly links. Verify deployment of existing old-domain redirects through hosting access before making DNS or redirect-rule changes; preserve the old Craft House redirects.

### Conversion integrity and measurement

- Current website explicitly sends consent-gated `early_access_success` only when `/api/early-access` returns a verified saved-registration receipt.
- Website source has no explicit `generate_lead` emitter, although GA4 property `557439732` recorded one `generate_lead` on October 5. Its source could not be attributed from GA4 aggregate reporting; connector GTM operations currently error with `Illegal invocation`.
- **Do not merge draft PR #36 or mark `generate_lead` as a key event** until any GA4/GTM event-creation rule has been inspected for attempt-based or duplicate firing. User authorized configuration only after successful-registration verification; that condition remains unmet. The private lead Sheet remains the registration source of truth.

### Next evidence-driven priorities

1. Continue inspecting the **33 unconfirmed URLs** when Google API quotas/timeouts allow; prioritize indexed commercial routes and high-intent editorial pages.
2. Allow Google to recrawl the discovered hubs after PR #33 internal links and PR #35 factual collection metadata; do not resubmit the sitemap or fabricate fixes without evidence.
3. Recheck finalized GSC impressions/clicks and GA4 attributable AI referrals after the indexed pages have had time to appear in reporting.
4. Reconcile historical `qrtrackly.com` search-result links with actual deployed redirects only when reliable hosting or HTTP response evidence is available.
5. Resume legitimate US/Australia discovery and distribution from the documented GTM workflow. **Do not equate research drafts with sent outreach or visits.**
