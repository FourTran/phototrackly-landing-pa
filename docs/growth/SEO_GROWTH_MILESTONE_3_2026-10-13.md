# PhotoTrackly Growth Roadmap — Milestone 3: Indexing and Internal Linking

**Date:** October 13, 2026, Asia/Ho_Chi_Minh  
**Properties:** GSC `sc-domain:phototrackly.com`; GA4 is out of scope for this indexing-only milestone.  
**Repository:** `FourTran/phototrackly-landing-pa`, PR against `main`.  
**Interpretation:** We can finish *the implementation, diagnosis, and verification*, not force Google to index a page.

## 3.1 — Priority URL inspection (live GSC MCP v2)

Nine individually checked URLs on October 13:
- PASS, indexed, successfully fetched by Google mobile crawler, robots allowed, canonical matches: `/`, four commercial software landing pages, and `/resources/photographer-handoff-template`.
- NEUTRAL, discovered but not indexed (no last crawl): `/contact` and `/resources`.
- NEUTRAL, unknown to Google (no last crawl): `/insights`.
- Results can oscillate between `Discovered` and `Unknown` on consecutive inspections without establishing a regression. Prior check observed `/contact` unknown and `/insights` discovered.

Saved tracking summary at outset: 88 tracked URL entries; **60 indexed**, **22 discovered**, **6 unknown**, all inspected. On October 13, the missing `/build-notes` URL was added to the *local GSC MCP v2 indexing tracker* and inspected as **Discovered - currently not indexed**, making the latest complete inventory **89 tracked: 60 indexed / 23 discovered / 6 unknown**. This is a latest-verdict snapshot, not the aggregate Google Page Indexing report.

The submitted sitemap `https://phototrackly.com/sitemap.xml` was last downloaded October 13, reported **89 submitted**, **0 warnings**, **0 errors** and **0** in an inconsistent aggregate indexed field. Source code and a unit test verify **89 distinct public sitemap URLs**; the earlier 88 count is a historical count and does not indicate this PR adds a URL. Before reconciliation, the local tracker had 88 entries while the live sitemap reported 89. The missing URL was `/build-notes`. It is now tracked, restoring matched totals of 89, and no extra sitemap route was generated.

Latest finalized 28-day GSC performance through October 11: **29 impressions, 0 clicks**. No search-performance improvement may be attributed to this PR at this time.

## 3.2 — Technical crawl/indexability audit

- `app/robots.ts` allows `/` on production, disallows internal API/workspace/delivery routes, publishes the sitemap; previews are intentionally not indexed.
- Public routes use canonical relative URLs resolved by the canonical site origin. Indexed URLs have matching Google canonical/user canonical.
- `/insights` and `/resources` already contain server-rendered CollectionPage/ItemList schema, original task-focused text and real links; `/contact` has its own form-based feedback purpose and canonical metadata.
- Previously merged internal-link changes, hub content and old crawl tests are reused. There is **no evidence** from GSC for a production robots/indexing block on the three lagging URLs; their crawler state is **UNSPECIFIED** because no last crawl is recorded.
- External live fetch from this assistant's public web environment was unavailable for these pages. This cannot establish that the public site is down; it means that a CDN/WAF/runtime or deployed-commit check could not be independently completed.
- GitHub's successful Vercel commit status is **not** proof that `https://phototrackly.com` is serving the exact merged SHA. The specified connected Vercel team/project returned 404 and 403 during the preceding audit. Verify ownership/production access separately before claiming live crawler behavior, 4xx/5xx logs or Web Vitals.

**Decision:** Do not change robots rules, create redirect hacks, spam new URLs, request indexing for dozens of pages, or resubmit an unchanged sitemap.

## 3.3 — Focused internal link and intent changes

Changes are designed to help *humans* traverse related content naturally, with crawlable Next.js Link anchor tags:
1. Insight article related navigation now links each editorial category to its most relevant **existing** commercial intent-owner page. Operations → business software; scheduling → scheduling; production/editing → production management; delivery → workflow. The link explicitly says PhotoTrackly is still in development. Also links to free resources.
2. `/insights` has a short role-based choice section for studio owners, coordinators, schedulers, editors/reviewers; connects to all four indexed commercial owners without creating new URLs.
3. `/resources` gives template users an immediate choice between operations guides, planned workflow/production software and a specific feedback question via `/contact`.
4. `/contact` adds clear links to existing self-help content and accurate expectations: the registration form is for interest and optional feedback, not a guaranteed help desk.
5. Sitemap `lastmod` updated **only** for `/contact`, `/resources` and `/insights` on October 13 to reflect substantive changes. Editorial articles have no fabricated fresh dates: shared navigational enhancements do not rewrite each article publication date.

## 3.4 — Release checks and indexing follow-up

Automated assertions:
- Every article's topic maps to a valid existing commercial URL, not a nonexistent landing page.
- Representative operations, scheduling, editing and delivery articles map to distinct owner intents.
- Hub pages link to the exact intended commercial and help routes.
- Public Googlebot, Bingbot and OAI-SearchBot requests to `/contact`, `/resources`, `/insights` return locally crawlable public HTML without noindex.
- Relevant article text renders appropriate links; sitemap has 89 unique canonical URLs and accurately scoped last-modified values.
- Standard CI: TypeScript, ESLint, unit and receiver tests, Next.js build, mobile and desktop Playwright browser/API checks.

**After CI pass:** squash merge PR and verify merged SHA and presence of code on `main`. Reinspect `/contact`, `/resources`, `/insights` only after a confirmed deployed change and sufficient Google recrawl time. Watch actual last crawl, canonical and index verdict, without promising indexing.

## Decisions and constraints

- **Indexing not yet confirmed:** Google still decides which of three hub/contact routes to crawl and index; treat this as an outcome under observation, not a milestone coding failure.
- **Indexing inventory reconciliation completed:** the missing `/build-notes` was added to the local tracker and inspected. Counting 89 tracked URLs does not mean Google has indexed them all.
- **Prelaunch truthfulness:** no fake software integrations, product usage statistics, real customer cases, AI citation guarantees or artificial backlinks.
- **No GA4/GTM edits, customer contacts, outreach, sitemap submission or Google Search Console configuration change.** Local GSC MCP v2 tracking was updated for one already published URL.
