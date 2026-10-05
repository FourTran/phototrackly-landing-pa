# SEO foundation improvements — 5 October 2026

Base: FourTran/phototrackly-landing-pa main, 39a3b968e5e31b98fca0aa55df2a416cb58f462a. Scope: marketing metadata, trust pages, editorial markup, topic navigation and canonical hostname. No release authorized.

- Homepage now names the software category and includes accurate Organization/WebSite identity markup.
- About explains planned scope, editorial responsibility, AI assistance, illustrative examples and publication-date provenance. Contact reuses the existing registration receiver instead of inventing an inbox or exposing personal contact details.
- Article author is the existing PhotoTrackly editorial organization. Publication dates reflect verified merged_at timestamps: PR #12 original articles; #13–14 October 2; #17 October 3; #18 October 4; #19 October 5. These are first-main-publication baselines, not verified deployment timestamps. No dateModified is invented for unchanged article bodies.
- Four original downloadable CSV worksheets support eight existing articles: job status/next action, shoot brief, delivery readiness and software evaluation. They contain headings and prompts, not customer data.
- Related articles are limited to four in the same topic. The Insights hub groups all articles into operations, scheduling, production/QC and delivery.
- www.phototrackly.com permanently redirects to the apex domain with the original path and query preserved by Next.js redirect handling. Other hosts are unaffected.
- Privacy now has a specific meta description. About/Contact are included in the production sitemap; preview sitemap/noindex rules remain.

## Existing analytics verification scope

Source review confirms generate_lead emits after a backend-confirmed receipt and respects analytics consent. captureLead requires saved=true and a matching request reference. Preserve this existing implementation. Focused mock-receiver tests can validate failure/success handling without inserting production leads. Live GA4 report access and key-event configuration remain separate checks; neither is proved by a public measurement ID.

## Search state

GSC MCP can inspect PhotoTrackly, and the sitemap was accepted with 66 URLs and no errors/warnings. Earlier October 5 inspection: homepage unknown; four software pages discovered but not indexed. Sitemap counts are not a reliable indexed inventory. This change does not submit URL indexing requests. The exposed GSC MCP inspection tool reads stored state; manual URL Inspection live tests and Request indexing remain needed if not already done. No repeated requests or restricted Google Indexing API for marketing pages.

## Remaining growth work

Use real permissioned interview insights or original operating assets when improving articles. Do not invent customer evidence or author credentials. GA4 report access, Bing verification, production bot access, deployed redirect behavior and post-release smoke checks remain separate verification work.

## Validation

Local production build, ESLint and TypeScript pass. All 45 unit tests pass using `node --import tsx --test tests/*.test.ts tests/*.test.mjs` (the workspace blocks the standard tsx IPC socket). All 136 browser/API checks pass across desktop and mobile: all 54 article routes, hub and sitemap, new identity/trust metadata, hostname redirect, existing registration receipts, withdrawal, failure handling and consent-aware analytics. Receiver tests use an isolated mock, never production leads. Four CSV files parse with consistent column counts.

The workspace uses Node 24 instead of repository CI Node 22. A temporary, uncommitted Playwright configuration binds the server to 127.0.0.1 while keeping browser and configured site origins at localhost; the first mismatched-origin run was corrected and the full rerun passed. Production canonical build was separately verified with NEXT_PUBLIC_SITE_URL=https://phototrackly.com. GitHub CI remains the independent Node 22 verification.
