# PhotoTrackly Growth Roadmap — Milestone 5: GEO and AI Search Visibility

**Date:** October 13, 2026 (Asia/Ho_Chi_Minh)  
**Canonical site:** https://phototrackly.com  
**Google property:** `sc-domain:phototrackly.com` (read-only checks via **GSC MCP v2 only**).  
**Repo:** FourTran/phototrackly-landing-pa.  
**Dependencies reused:** Milestone 2 buyer owner pages, Milestone 3 contextual links, Milestone 4 cited vendor guide, older original-resources report, and the separate **PR #53** AI citation scorecard + domain-identity work.  
**Important:** Completion means implementation, docs, regression tests and a versioned honest measurement framework. It **does not mean** measured citations or a verified production crawler pass.

## Phase 5.1 — AI discoverability audit

| Evidence | Confirmed | Unknown / boundary |
| --- | --- | --- |
| Production `app/robots.ts` | `User-agent: *` permits public pages, disallows internal workspace, delivery and API; preview environments are noindex | No blanket robots exclusion of OAI-SearchBot, PerplexityBot, Googlebot or Bingbot, but **real CDN/WAF/rate-limit access remains unverified** |
| GSC MCP v2 inspection | Homepage, business software, software evaluation guide, handoff template and `/about` previously confirmed indexed with successful mobile Googlebot fetch and matching canonical | Google indexing does not imply ChatGPT/Perplexity/Gemini citation |
| GSC indexing summary October 13 | **60 indexed / 23 discovered / 6 unknown, 89 tracked** | Sitemap's aggregate `indexed=0` conflicts with individual inspections, so do not rely on it for real indexed count |
| Sitemap | 89 submitted URLs and no warnings/errors | This PR adds **zero new URLs**; only new source-linked content on existing pages |
| Source transparency | Already has prelaunch positioning, original handoff templates, editorial disclosure, source-backed vendor evaluation, Article/WebSite structured data | No fake Review, AggregateRating, FAQ rich-result claim, AI-only schema or `llms.txt` added |
| Public website | General public search surfaces PhotoTrackly pages on **legacy `qrtrackly.com`**, despite `phototrackly.com` being official | Old-domain live HTTP 301/308 responses and production serving SHA have not been independently verified by this session |

Official source guidance: https://developers.google.com/search/docs/appearance/ai-features and https://developers.openai.com/api/docs/bots. Google says no extra AI-specific files/markup are required for AI Overviews/AI Mode; OpenAI distinguishes search discovery by `OAI-SearchBot` from foundation-model training by `GPTBot`. Network/IP/CDN access is a separate test, not inferred from robots.txt.

## Phase 5.2 — Direct factual answers and trustworthy page connections

Added `lib/geo-evidence.ts` as a single first-party source for five product answers on existing `/about`:
1. What PhotoTrackly is (prelaunch B2B operations concept, not available SaaS).
2. Intended users and initial **US/Australia** markets.
3. Present availability (early-access interest only; no paid account or guaranteed launch).
4. Scope boundaries (manual photographer assignment and human QC; no confirmed auto-routing/AI inspection/integrations).
5. Fictional illustrative workflows versus actual customer results.

Each answer is rendered as readable, accessible `<dl>` content with a link to an existing product, build-status or handoff page. The `/about#current-website` official-domain section from merged PR #53 is **preserved**, not overwritten. No new public route, fake FAQ schema, invented image, testimonial or unsupported integration claim.

## Phase 5.3 — Evidence that readers can reproduce

Reused existing October 12 original workflow figures and blank/fictional CSV examples; these remain **teaching cases**, not observed customers.

Expanded the existing `/insights/evaluate-property-media-workflow-software` conclusion with a comparison evidence ledger:
- **Vendor-published documentation** with date/source.
- **Actually observed trial behaviour** recorded by the buyer.
- **Roadmap/planned feature** that cannot be claimed as available.
- **Unknown or untested** operation.

It tells a studio to run the same fictional photos/drone/floor-plan job, record who owns a blocked file, who approves a revision, and what source version reaches delivery. This adds practical source/proof context without cloning a software comparison URL or claiming measurable customer results. Existing Milestone 4 official vendor citations are preserved.

## Phase 5.4 — Versioned AI visibility benchmark, no fabricated results

Instead of creating a duplicate fixture, **reuse the canonical scorecard added in merged PR #53**:
- `data/ai-visibility-prompts.json`: **12 prompts** versioned **phototrackly-12-v2**, now 6 US-specific + 6 Australia-specific.
- `data/ai-visibility-observations-2026-10-13.json`: **48 slots** = 12 prompts × 4 answer surfaces, all **not_tested**.
- `scripts/ai-visibility-scorecard.mjs`, `npm run ai:scorecard`: detects missing/duplicate evidence, requires direct answer evidence before declaring observed, separates uncited brand mention from **clickable canonical `phototrackly.com` citations**, excludes legacy `qrtrackly.com` citations from canonical share.
- Four platforms: `chatgpt_search`, `google_ai_mode`, `perplexity`, `gemini`.

**No independent provider answer session was executed here.** The output citation rates are **not measured** (null), *not* zero-percent citation results. Ordinary browser search snippets, GSC long-query classification and GA4 referral rows are **not** substitutes for observations inside ChatGPT Search, Google AI Mode, Perplexity or Gemini. An authorized operator or cloud browser should execute each fixed prompt in the actual UI, save the dated answer/source links in a permissioned storage location, and create a new dated observation snapshot. Compute rates only for executed/evidenced prompts.

Current GSC MCP v2 finalized performance **September 14–October 11:** **29 impressions, 0 clicks**. The query classifier saw no branded category and various unusual question-like pasted strings; **none is proof of an AI answer citation**. GA4 **September 15–October 12:** **523 sessions**, **27 engaged**, with **521 Direct** and one Tag Assistant referral. No identifiable genuine organic or AI-referral acquisition; Direct may be automation/test noise, not proven real customer growth. GA4 events are not qualified leads.

Public search results surfaced historical PhotoTrackly on `qrtrackly.com`; investigate actual canonical legacy redirect status and external references as a **separate authority/hosting issue**. Do not change the old domain, CDN or other repo from this evidence alone.

## Verification and release gates

- Unit contracts for 5 truthful source-linked About answers; 12 unique versioned US/AU owner URLs; 48 untested observations with all 4 expected surfaces.
- Existing canonical scorecard tests continue to reject duplicate, invalid or source-less citations.
- Browser/API verifies semantic About answers, actual linked routes, canonical About URL and local HTML access as OAI-SearchBot/PerplexityBot/Googlebot/Bingbot. **Local built-app tests do not prove production WAF access.**
- Sitemaps stay at **89** existing URLs; About `lastmod` remains October 13 after substantive copy changes. Unmodified articles keep their original dates.
- GitHub check gate: TypeScript, ESLint, unit/receiver, Next.js production build and desktop/mobile Playwright. A green Vercel GitHub commit status is not independent proof of production domain serving the merged SHA; correct Vercel team/project access remains unresolved in prior audits.
- No analytics/GTM config change, customer contact/outreach, extra lead submission, Search Console mutation, new product URL or guaranteed AI ranking.

## Completion and external follow-up

**Code/documentation and reproducible measurement system:** deliverable when PR is green and merged.  
**Direct AI citations, actual AI-referral visitors, real qualified signups, and legacy redirect status:** remain *unverified* until separately observed. A developer must not report "AI share grew" or claim finished production verification from this PR alone.

Official references:
- https://developers.google.com/search/docs/appearance/ai-features
- https://developers.openai.com/api/docs/bots
- https://help.openai.com/en/articles/12627856-publishers-and-developers-faq
- https://docs.perplexity.ai/guides/bots
