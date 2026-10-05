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
