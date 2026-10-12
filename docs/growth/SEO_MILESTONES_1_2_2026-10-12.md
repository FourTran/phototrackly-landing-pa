# PhotoTrackly — SEO milestones 1 & 2 audit and release gates

**Audit:** 2026-10-12 (Asia/Ho_Chi_Minh)  
**Property:** `sc-domain:phototrackly.com`  
**Canonical repo:** `FourTran/phototrackly-landing-pa`, PR against `main`  
**Status:** repository-level remediation implemented in a focused PR; some externally controlled infrastructure/Google requirements remain open. Do not report every milestone as complete until the live gates pass.

## Milestone 1 — technical foundation

### 1.1 GitHub, Vercel, domain
- Authenticated GitHub user `FourTran` (ID `13285951`) verified. Canonical repo read: `FourTran/phototrackly-landing-pa`; default branch `main`.
- Required Vercel link is the account with email `tranvantubk@gmail.com`; required team is `team_iMOgc2WCTM1NrLydPeLfcV9L` (`fourtrans-projects`). The Vercel API `list_projects` and `list_deployments` return no projects/deployments; direct `get_project('phototrackly-landing-pa')` returns **HTTP 404 not_found / Project not found**, operation `GET /v9/projects/{idOrName}`. This is a **workspace/project authorization or ownership mismatch**, not permission to search another team. Do not silently deploy, transfer domains or change accounts.
- GitHub Vercel statuses on previous main commits reported successful build/deploy checks, but those statuses do not demonstrate authenticated ownership of production or verify the public domain serving a given commit.
- Code uses `https://phototrackly.com` as canonical deployed site, strips alternate hosts via permanent redirects (`www.phototrackly.com`, `phototrackly.cloud`, `www.phototrackly.cloud`, `phototrackly-landing-pa.vercel.app`), generates canonical metadata and HTTPS sitemaps. Existing local tests cover host redirects. Live redirects, DNS, SSL, WAF, runtime logs and Web Vitals remain **not independently verified** from the required Vercel connection.

### 1.2 Crawlers
- `app/robots.ts` allows all user agents to crawl public content, exposes a sitemap, and disallows `/workspace/`, `/delivery/`, `/api/`; previews block crawling. No code-level ban on OAI-SearchBot, Googlebot or Bingbot was found.
- Google URL Inspection confirms **successful mobile Googlebot fetch**, allowed robots and matching canonical for the homepage and all four commercial software pages. Homepage last crawled `2026-10-11T20:35:50Z` per October 12 inspection.
- Direct web requests to `https://phototrackly.com/`, `/robots.txt`, `/sitemap.xml`, `/insights` and `/resources` failed from this tool environment; an independent container request failed DNS with `NameResolutionError: Temporary failure in name resolution`. This is not proof that the site is unavailable publicly. **Production verification remains blocked.**
- New browser/API tests run against the built local app as Googlebot/Bingbot/OAI-SearchBot to validate public HTML access. These local checks cannot verify real CDN/WAF bot challenges.

### 1.3 Structured content / technical metadata
- Existing app includes Organization/WebSite schema at homepage, CollectionPage/ItemList schema at /insights and /resources, Article schema with published dates on articles, unique canonical/page metadata, HTML links, image alt text and robots rules. Do not invent extra schema or fake author qualifications.
- Existing canonical sitemap publishes **88 URLs**; this PR preserves the same URL set and makes lastmod accurately reflect October 12 substantive homepage/commercial/article/hub changes without resetting all old article timestamps to build time.
- New hub content explicitly guides visitors to relevant operations examples, checklists and the correct category pages. Each of four commercial URLs links to a distinct corresponding how-to guide.

### 1.4 Analytics and conversion measurement
- GSC MCP v2 reports GA4 connection enabled, no reconnect required, property `557439732`, stream `16046618836`, hostname `phototrackly.com`, last successful sync `2026-10-12T00:17:30Z`. Production analytics on-site still requires separate live verification.
- Google Analytics lists `purchase`, `close_convert_lead`, `qualify_lead` as key events, **not** `generate_lead`. The original source of one recorded `generate_lead` event is unclear. Existing draft PR #36 explicitly warns not to merge until its GTM rule is identified. GTM API `gtm_list_accounts` returned **GTM_ERROR Illegal invocation (incorrect `this` reference)**. Do **not** create a second conversion emitter, mark the unverified `generate_lead` source as conversion, or change GA4/GTM without resolving duplicate-source risk and confirming a saved form lead.
- Existing form backend verifies consent and a saved Google Sheet receipt before a success event. PR #40 previously improved bounded UTM attribution, but the Google Apps Script receiver update is independent of a Git merge; actual deployed version must be confirmed separately.
- The GA4 October 5 anomaly is still not explained by verified raw request logs. 522 sessions were concentrated in two reporting hours. Treat this as possible test/automated traffic, not 522 qualified visitors.

## Milestone 2 — indexing and architecture

### Snapshot and discrepancy
- Search Console 28-day finalized `2026-09-13`–`2026-10-10`: **15 impressions, 0 clicks**. No valid comparison period.
- GSC local tracked latest summary: **88 inspected URLs: 53 indexed/PASS, 14 discovered-not-indexed, 21 URL unknown to Google**.
- Sitemap submitted `2026-10-08`, downloaded `2026-10-10`, **88 submitted**, **0 errors / 0 warnings**. Aggregate sitemap indexed field returns **0**, conflicting with positive URL Inspection and does not negate 53 individually inspected URLs. Avoid misleading counting or needless resubmissions.
- URL Inspection verdict can move between `Discovered` and `Unknown` on consecutive reads; preserve exact timestamp rather than infer an indexing regression without corroboration.
- Selective October 12 live API inspections:
  - Indexed (PASS): `/`, `/about`, all four commercial URLs.
  - Not confirmed indexed (NEUTRAL): `/contact`, `/insights`, `/resources`, `/resources/photographer-handoff-template`.
  - Googlebot's robots/indexing status for never-crawled hubs is `UNSPECIFIED`, not an established block.

### What changed in this PR
1. Add original role-based, task-focused entrance content to `/insights`, linking to job triage, multi-service scheduling, delivery readiness and software evaluation; clarify examples are illustrative.
2. Add a concise, explicit sequence for using the four actual downloadable templates on `/resources`; link relevant article and product owner.
3. Add contextual from-commercial-to-article links for each of the four existing software pages. Retain canonical URLs, all 88 sitemap entries, four article sections, original worksheets, and product-stage disclosures.
4. Update accurate `lastmod` metadata for meaningful October 12 homepage/commercial/hub and buying-guide changes, while preserving earlier dates for untouched articles and resources.
5. Add desktop/mobile browser/API tests for both hubs, crawlable local HTML, canonical tags, sitemap/robots rules, and commercial-to-guide linking.

### Remaining indexing work that cannot be declared complete today
- Indexing is controlled by Google. This change cannot force Google to crawl or index `/insights`, `/resources`, `/contact` or other excluded URLs.
- After confirmed **production** deployment, inspect those URLs and the main source-backed buyer guide again (including Google-canonical and last crawl). Allow time for indexing; avoid bulk requests for all 35 excluded URLs without unique substantive fixes.
- If live server/edge logs show 403/429/5xx to crawlers, address that exact issue in the canonical Vercel workspace. Otherwise treat “discovered but not indexed” primarily as an indexing/content-quality/discovery problem, not proof of a broken robots rule.
- Review the 21 unknown/14 discovered pages for shallow overlap, near-duplicate topics and internal links before adding new pages. Do not mass-generate content just for SEO.

## Verification/release gates
- CI must run `npm run typecheck`, `npm run lint`, `npm run test:unit`, `npm run build`, and desktop/mobile Playwright browser/API tests.
- PR targets `main`; do not deploy through a different Vercel account or skip CI. Merge after tests are green, then verify actual merge SHA/main. A GitHub Vercel status check is not itself a live site crawl or proof that canonical Vercel MCP has access.
- To fully close Milestone 1: operator must resolve Vercel access within team `team_iMOgc2WCTM1NrLydPeLfcV9L`, verify current production project/branch/domain/logs and an end-to-end signup, and repair GTM connector inspection before resolving duplicate conversion source. No secrets should be put into tickets, docs or chat.
- To fully close Milestone 2: Google must actually confirm indexing/canonical outcomes of priority hubs after recrawl. There is no guaranteed date and no ethical workaround to force it.

Sources: GSC MCP v2 URL Inspection and Search Analytics read 2026-10-12; Google Drive project SEO audits; current FourTran canonical repository source and CI. Google reference https://developers.google.com/search/docs/fundamentals/how-search-works and https://developers.google.com/search/docs/crawling-indexing/links-crawlable .
