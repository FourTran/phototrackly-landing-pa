# Growth roadmap Milestone 2 — Commercial Keyword SEO

**Prepared:** 2026-10-13 (Asia/Ho_Chi_Minh)  
**PR:** https://github.com/FourTran/phototrackly-landing-pa/pull/50  
**Baseline source:** `docs/growth/SEO_GEO_M1_BASELINE_2026-10-13.md`, GSC MCP v2 property `sc-domain:phototrackly.com`, finalized through 2026-10-11.  
**Status:** Code changes proposed; Google recrawl, rankings and production deployment are **not** demonstrated by the PR.

## Completed changes by phase

### 2.1 — Four canonical buyer pages
- `/real-estate-photography-business-software`: intended studio owners and multi-job visibility.
- `/real-estate-photography-workflow-software`: brief → capture → editing → human review → delivery and handoff responsibility.
- `/real-estate-photography-scheduling-software`: property-linked manual assignments, access instructions and changes, NOT automated routes or two-way calendar integrations.
- `/real-estate-media-production-management`: production lead, missing files, revisions, human QC and delivery readiness, NOT autonomous editing.
- Updated page-specific title, description, H1 and one relevant introduction; no added routes or fake customer stories.
- Changed homepage SEO title to `PhotoTrackly — Property Media Operations for Growing Studios` so the workflow-software title is uniquely owned by the dedicated page. This resolves a **content-positioning overlap**, not a confirmed GSC cannibalization issue.

### 2.2 — Relevant terminology, without keyword stuffing
The first part of each existing H1 names its canonical owner keyword cluster. Body copy explains buyer tasks instead of mechanically repeating synonyms. The production page naturally references a production or project manager. Existing `/insights` and `/resources` guides are retained as supporting material. No new landing pages for slight variations, competitor brand synonyms or unsupported features.

### 2.3 — Buyer decision evidence
Added **three distinct and actionable product-evaluation questions per owner page** (12 total). Every question includes a realistic, reproducible comparison test and an explicit limit of what the example proves. The guidance is usable with a studio's current tools and does **not** assert that PhotoTrackly already implements it. A shared visible link points to the existing primary-source-backed `/insights/evaluate-property-media-workflow-software` buying guide. The existing four role-handoff table and honest `planned/not promised` product boundaries remain.

### 2.4 — Validation and release safety
- Unit contracts confirm 4 unique page titles, 4 unique meta descriptions, canonical intent phrase within title/H1, honest development state, exactly 3 evidence-based evaluation checks per page and no spammy performance claims.
- Browser tests confirm 3 evaluation cards and comparison-guide link per commercial page alongside canonical metadata, H1, no horizontal overflow, existing handoff table and product boundaries. Browser suite runs desktop and mobile in GitHub Actions.
- Sitemap `lastmod` updates **only** homepage and the four changed commercial routes to 2026-10-13; the URL list and other dates remain unchanged. The lastmod change reflects a substantive content refresh, not a freshness tactic. Unit assertions updated.
- Standard checks: TypeScript, ESLint, lead receiver unit tests, Next.js production build, Playwright browser/API tests and Vercel deployment status; report actual CI findings from PR head before merge.

## Measurement baseline and acceptance

Before any effect could be measured, GSC (Sep 14–Oct 11) reported **29 impressions, zero clicks**, with 13 impression-bearing article pages and no commercial owner URL in performance rows. All four commercial URLs independently passed URL Inspection. The sitemap listed 88 submitted URLs, zero warnings/errors, though its aggregate indexed value contradicted independent positive inspections. There is no confirmed buyer-keyword demand or actionable CTR/cannibalization at this sample size.

After verified deployment and Google recrawl, monitor commercial URL impressions, *relevant* searches, clicks and engaged organic sessions. GA4 28-day data was dominated by suspicious direct traffic and should not be counted as customers. GA4 `generate_lead` is not a configured key event; actual qualified registrations require separate independent record verification.

**Do not claim ranking lifts, GEO/AI citations, organic traffic or new customers from the code change.** Google emphasizes helpful people-first content, descriptive titles, crawlable internal links, and no special AI-only schema: https://developers.google.com/search/docs/fundamentals/seo-starter-guide ; https://developers.google.com/search/docs/appearance/ai-features

## Production access gate
Earlier authorized Vercel project `phototrackly-landing-pa` in team `team_iMOgc2WCTM1NrLydPeLfcV9L` returned `404 not_found` under the connected account; read-only listing deployments in that team returned `403 forbidden` on 2026-10-13. GitHub Vercel check may succeed without proving the correct production domain serves the matching commit. Resolve correct production project/team permission through its owner; do not search other teams, guess scope, or claim independent live verification. This is a deployment confirmation blocker rather than a code change requested within this milestone.

## Release and rollback
After all GitHub checks pass and head SHA remains unchanged, squash merge PR #50 into `main`. This release only changes copy, HTML evaluation aids, styling, sitemap lastmod and tests. If a live regression is confirmed, revert the merge commit through standard repo review. There is no database migration, GA4/GTM configuration, outbound email, new URL, or customer data change.
