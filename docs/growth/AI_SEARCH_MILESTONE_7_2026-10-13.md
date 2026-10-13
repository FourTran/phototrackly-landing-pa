# PhotoTrackly Milestone 7 — AI search visibility, citations and referral measurement

Audit date: **2026-10-13** (Asia/Ho_Chi_Minh). Property: `sc-domain:phototrackly.com`. GA4 property: `557439732`. Canonical code: `FourTran/phototrackly-landing-pa`.

## Executive decision

PhotoTrackly has crawl/index signals but is **not yet acquiring attributable AI-search referral sessions**. Do not confuse those outcomes with appearances inside ChatGPT Search, Google AI Mode or Perplexity. We implemented a reproducible direct-answer citation tracking system and addressed one evidenced brand-identity ambiguity. A public web-search proxy sample does **not** measure actual ChatGPT or AI Mode mentions/citations; direct answer surfaces are marked **not_tested** until an authorized browser/session and recorded answer evidence exist. It is technically dishonest to report a 0% AI-citation share from zero direct AI observations.

## Current verified performance — use precise windows

- Search Console finalized period `2026-09-14`–`2026-10-11`: **29 Google web impressions, 0 clicks**, average reported position around 5.72 for a tiny sample; the prior comparable window is unavailable. Note that this differs from the earlier 15-impression period by date; it does not establish that new content caused the increase.
- GSC indexed URL tracker `2026-10-13`: **89 tracked, 60 PASS/Submitted and indexed, 23 Discovered currently not indexed, 6 Unknown to Google**. These are local latest URL Inspection states, not the sitemap aggregate.
- Submitted sitemap `https://phototrackly.com/sitemap.xml`: **89 submitted**, last downloaded **2026-10-13T02:14:51Z**, 0 reported errors or warnings. Its aggregate `indexed=0` conflicts with 60 individually indexed PASS outcomes; do not treat that aggregate as proof there are zero indexed pages.
- URL Inspection on `/build-notes` on `2026-10-13T08:29:23Z` returned **Discovered - currently not indexed**, no recorded last crawl. That is not evidence of a confirmed robots block or failed HTTP response.
- GA4 `2026-10-05`–`2026-10-12`: **no identifiable ChatGPT/Perplexity/Gemini/Copilot/Claude referral-source rows** from the connected GSC MCP v2 GA4 AI-referrals classifier. Source/medium shows 521 (direct)/(none) sessions, 1 (not set) session and 1 tagassistant.google.com referral; only 27 engaged sessions across those rows. The concentrated historic direct traffic may be automation/test activity but is not proven bot traffic. Consent and private-mode browsing can hide some influence.
- GA4 has one `generate_lead` event, but GA4 key-event count is 0 and its originating GTM/GA4 rule is unverified. Do not count this as a genuine external signup. No GTM/GA4 mutations are part of Milestone 7.
- GSC query-shape report classifies some visible queries as unusually long/pasted strings; **query shape never establishes an AI Overview or AI Mode source**. No definitive AI-citation metric is exposed by GSC MCP v2.

## Phase 7.1 — Fixed 12-question prompt panel

The `data/ai-visibility-prompts.json` file preserves exact, previously agreed queries and topic intent, with one canonical `phototrackly.com` owner per query; the panel version is `phototrackly-12-v1` and initial market is US.

A01. software to manage real estate photography shoots and editors
A02. real estate media workflow software
A03. how to track photo editor revisions before delivery
A04. best tools to manage real estate photography teams
A05. Tonomo HDPhotoHub Spiro alternatives for production coordination
A06. property media client delivery checklist
A07. manage outsourced photo editors for property shoots
A08. software for real estate photo QC workflow
A09. coordinate photographer assignments and floor plans
A10. multi service shoot scheduling workflow
A11. how to prevent wrong images delivered to agents
A12. real estate photography job status board template

The existing tool session supports public web search, GSC, GA4 and GitHub but cannot independently operate a clean authenticated **ChatGPT Search UI**, **Google AI Mode UI** or **Perplexity answer UI** as three separate user sessions. Accordingly `data/ai-visibility-observations-2026-10-13.json` contains **36 direct AI-surface observations, all `not_tested`**. This is a complete, honest measurement setup, **not** a completed 36-answer citation audit. An authorized operator or ChatGPT Work cloud browser with access to each answer surface must execute and preserve a dated direct observation before results can be scored.

## Public web-search proxy sample — separate observational evidence

Public web-search keyword probes were carried out on October 13 across the 12 question *themes*, sometimes grouped/phrased slightly differently by the search provider. These are **ordinary search result samples**, NOT proof that any site was recommended by ChatGPT Search, AI Mode, or Perplexity, and do not establish a comprehensive or ranked top-10 list.

- Studio software/comparison questions surfaced **Tonomo** `https://www.tonomo.io/`, **Opsicom** `https://opsicom.com/blog/best-real-estate-photography-software-compared`, **RELMX** `https://relmx.com/features/editor-workflow`, **Spiro/HDPhotoHub-related comparisons** and other vendors.
- Production/QC questions surfaced `https://www.autoqc.io/`, `https://relmx.com/features/photo-delivery` and `https://imagen-ai.com/valuable-tips/cloud-photo-editing-checklist-for-real-estate-photographers/`. These product/guide pages make clear workflow claims and concrete task boundaries. Those claims are vendor-published and are not independently verified product performance.
- **Legacy brand collision:** public search still surfaced historical PhotoTrackly pages hosted or indexed under `qrtrackly.com` such as `https://qrtrackly.com/guides/real-estate-photography-workflow-software-checklist`, `https://qrtrackly.com/real-estate-photography-workflow-software` and `https://qrtrackly.com/guides/real-estate-media-quality-control-checklist`. The public search service's old cached index cannot establish their live HTTP redirect state, and attempts to fetch the current `phototrackly.com` domain via the present web tool returned not-accessible. Verify historic redirects in their OWN repository/deployment before changing another site's configuration.
- Public search visibility for exact `phototrackly.com` URLs in this small sample was not demonstrated, but **GSC's direct URL inspections prove 60 URLs are indexed**. A missing sample hit does not disprove indexing.

Actionable implication: historical brand/URL ambiguity is a concrete issue supported by public result evidence. The existing `/about` page now explicitly names `https://phototrackly.com` as the current official home and explains that older PhotoTrackly pages can appear under another domain; it links current build notes/insights, without fabricating live-product claims or creating a thin new URL. Preserve domain-specific canonical sitemap and avoid writing sameAs for an unverified social entity. The old domain redirects **cannot** be fixed from the canonical repo alone; record as a separate verification gate.

## Phase 7.2 — Capturing true citations and competitor answers

Use these three exactly named surfaces: `chatgpt_search`, `google_ai_mode`, `perplexity`. For **each** of the 12 prompts, run a new clean US English query on each available surface. Record the answer date, location/market, output evidence and direct source link. Create a fresh dated copy of the JSON snapshot to avoid overwriting prior observations.

- `status: "not_tested"`: the exact direct AI-surface result has NOT been inspected; `brandMention: null`, empty `citedUrls`, empty `competitorDomains`, `evidenceUrl: null`.
- `status: "observed"`: a human or verified browser session actually observed this prompt's answer. Set `brandMention` true or false; capture the FULL source URLs explicitly cited; identify competitor domains actually named/cited; provide a truthful HTTPS evidence URL for the screenshot or archived answer. A result can legitimately be observed and have NO mention/citation, but must carry evidence.
- Cite `https://phototrackly.com/...` separately from merely mentioning “PhotoTrackly”. Historic `qrtrackly.com` URLs must be counted as **legacy brand mentions/links**, not current canonical-site citations.
- Do not infer chatbot citations from Google indexedCount, web search snippets, generic assistant knowledge, GA4 Direct traffic or source-code structured data.

Command `npm run ai:scorecard` reads `data/ai-visibility-prompts.json` and `data/ai-visibility-observations-2026-10-13.json`. It validates all 36 source/prompt pairs, enforces real evidence for observed answers, and reports measured numerator/denominator or “not measured” where no tests were run. Update the snapshot in a new dated file, then run `node scripts/ai-visibility-scorecard.mjs data/ai-visibility-observations-YYYY-MM-DD.json`. Unit tests reject invented, duplicate or unsafe observations. Future comparisons must use the same panel/version and surface settings.

## Phase 7.3 — Page improvements based on evidence

The existing four commercial category pages, indexed buyer guide, original worksheets and publisher About/Build notes already contain answer-first content and truthful stage distinctions. No evidence from direct AI search shows a specific missing answer/citation, so creating more vendor-alternative SEO pages would be speculative and likely duplicate. This milestone makes one **evidence-based** page correction: `/about#current-website` now clarifies the official product domain versus discoverable older-brand URLs, with links to the verified current source pages; `about` receives truthful `lastModified` and regression tests.

Hold further content edits until a direct prompt's answer is captured and compared with the relevant owner page. For a measured weak result, improve **that existing owner page** with concrete first-party evidence, not marketing filler or fake customer testimonials. Do not target model training by allowing GPTBot simply to affect citations; OAI-SearchBot controls search snippets separately.

## Phase 7.4 — Referral-to-lead conversion tracking

OpenAI publisher guidance at `https://help.openai.com/en/articles/12627856-publishers-and-developers-faq` documents OAI-SearchBot discovery and that ChatGPT search may append `utm_source=chatgpt.com`. Existing PhotoTrackly code already allows all public search crawlers at the `robots.ts` layer and preserves bounded UTM tags via `sanitizedAnalyticsLocation`; this PR adds regression tests for `chatgpt.com` and `perplexity.ai` while stripping email, private fragments and QA tokens. No consent bypass and no new tracking identifiers are added.

Connected GSC MCP v2 `ga4_ai_referrals` and `ga4_source_medium` are the source of truth for identifiable AI-attributed sessions. Report `AI citation`, `AI referral session`, `engaged AI session`, `early_access_success` and a **verified Google Sheets external registration** as distinct events, preserving the initial bot-noise caveat. Do not mark `generate_lead` a key event until its origin is audited and double-counting is ruled out. UTM column persistence still depends on actual deployed Google Apps Script receiver version, not only this repository. Repeat 7-day and 28-day comparisons with their complete dates.

## Infrastructure and external constraints

The required Vercel account `tranvantubk@gmail.com`, workspace `fourtran's projects`, team ID `team_iMOgc2WCTM1NrLydPeLfcV9L` still returned zero projects in this session, despite GitHub Vercel integration statuses for merged code. Cannot independently verify runtime WAF/edge bot access or public production HTML. The public web tool also could not directly fetch `https://phototrackly.com` from this environment; Google's successful historic crawls show some availability to Google, not proof of uptime now. No Vercel workspace switch, DNS/domain move, GTM mutation, analytics secrets or external customer contact performed.

## Acceptance and follow-up

**Completed in-code:** accurate acquisition/indexing baseline, 12-question versioned panel, 36 honest AI surface slots, strict reproducible scorecard, official-domain brand fix, UTM/referral unit tests, substantive report and repeatable measurement workflow.

**Still externally unverified:** all 36 specific direct AI-surface answers/citations; authenticated production crawl/redirect checks; first attributable AI referral and actual external signup. The milestone delivers instrumentation and a truthful baseline, NOT a fabricated AI citation share or guaranteed visits.

- In 14 days: compare latest GSC impressions/first clicks, direct source referrals, exact canonical indexing and any direct AI surface snapshots observed since today.
- In 30 days: assess prompt-tested mention/citation rate **only if** genuine observations exist, top cited competitor domains, qualified sessions and verified leads.
- In 60–90 days: refresh original published evidence or resolve product/crawl blockers before growing the article count.

Sources: `https://developers.google.com/search/docs/appearance/ai-features`, `https://help.openai.com/en/articles/12627856-publishers-and-developers-faq`, live October 13 GSC v2/GA4 and web-search observations documented above. Prior Milestone 6 evidence remains `docs/brand/BRAND_IDENTITY_AUTHORITY_LEDGER_2026-10-12.md`.
