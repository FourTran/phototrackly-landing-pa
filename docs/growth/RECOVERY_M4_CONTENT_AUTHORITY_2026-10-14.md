# PhotoTrackly Recovery M4 — Five Editorial Operating Examples

**Date:** 2026-10-14 (Asia/Ho_Chi_Minh)  
**Scope:** Recovery roadmap M4 Content Authority, not the earlier unrelated SEO Growth Roadmap M4 competitor review.  
**Source of truth:** `FourTran/phototrackly-landing-pa` on a focused feature branch targeting `main`.  
**Audience:** US/Australian real estate photography and property-media teams coordinating multiple handoffs.

## Phase 4.1 — Existing-article audit and prioritization

We reuse five **existing** editorial URLs and the four original CSV worksheet families. We do not add similar-content URLs or claim that low-volume Google Search Console results demonstrate search demand. Review of October 1–14 Search Console showed few impressions and zero organic clicks. These priorities reflect buyer relevance and observed first-party coordination pain, not a measured Google keyword-volume/CTR opportunity.

| Existing article | Gap addressed by new original example | Associated worksheet |
| --- | --- | --- |
| `/insights/scale-photography-business-without-owner-bottleneck` | Which decisions the owner can delegate, with explicit escalation boundary | `job-status` |
| `/insights/real-estate-photography-editing-workflow` | Missing source sets, version-scoped revision and human approval | `delivery-readiness` |
| `/insights/property-media-editing-queue` | Feasible queue order vs blocked inputs and downstream review capacity | `job-status` |
| `/insights/prevent-double-booked-photographers` | Full booking interval including travel/setup, not just start times | `shoot-brief` |
| `/insights/manage-property-photographer-availability` | Short-notice reassignment, service qualifications and client promises | `shoot-brief` |

Previously expanded guide examples for job triage, multi-service scheduling, delivery readiness, vendor evaluation and post-delivery revision are preserved.

## Phase 4.2 — Substantive editorial upgrades

Add one `WorkflowExample` per selected article. Each includes:
- a clearly **fictional** property-media operating scenario and specific decision rule;
- four concrete handoff checkpoints specifying stage, responsible owner, trigger/signal, exact next action and evidence of completion;
- links to existing blank CSV and fictional example worksheets, useful even without PhotoTrackly access;
- an explicit `updatedAt: '2026-10-14'` content-date marker for just these five improved guides.

The shared article template already labels scenarios fictional, product mockups illustrative, and PhotoTrackly prelaunch. The edits deliberately make **no** claims about paying customers, production software, autonomous AI quality control, live calendar integration, times saved, or vendor rankings.

## Phase 4.3 — SEO ownership and honest schema dates

Reuse `/insights/[slug]`; no new sitemap URLs or route slugs. For the five genuinely changed articles, visible `Updated` date, Article `dateModified`, and sitemap `lastmod` now align on 2026-10-14. Unchanged worked examples retain their existing historical dates (October 12, except vendor comparison October 13). Other articles retain their existing previously recorded update dates. Do **not** change `datePublished` or use a global build timestamp.

## Phase 4.4 — Verification and measurement

Regression tests protect:
1. Ten worked examples exactly, all with named owners/actions/evidence and supported worksheet links; five new ones require explicit October 14 `updatedAt`.
2. Sitemap remains 89 unique public URLs; only the five selected article paths gain the October 14 lastmod; historical examples and unchanged content retain dates.
3. Browser tests verify four visible checkpoints, honest fictional disclaimer, real worksheet link, new visible update and JSON-LD `dateModified`, with no horizontal overflow.

Required CI: TypeScript, ESLint, unit/receiver, production build, Playwright desktop/mobile. Vercel preview build is a separate additional check. Do not merge before actual CI and explicit user authorization. After production release, track page/query impressions, relevant search intents, organic referrals and confirmed early-access registrations. Do not attribute Google ranking gains or new visitors to the content changes without subsequent observed evidence.

## Distribution and boundaries

These are evergreen operational guides meant for real studio owners and coordinators, including source material for M5 organic community distribution. **No cold customer email, automated DMs, fake backlinks, mass publication or outreach is performed as part of M4.** Community posting will be handled separately in M5 and requires an authorized external account/publication action where applicable.
