# PhotoTrackly Milestone 4 — Competitor evidence, content ownership and gap decisions

**Audit date:** 2026-10-12
**Target:** growing US/Australia real estate media studios
**Repository:** FourTran/phototrackly-landing-pa
**Methods:** official competitor feature/help documentation, existing PhotoTrackly page inventory, prior verified competitor benchmark in project Drive, latest Search Console. No competitor customer, traffic, ranking or AI citation data is asserted without source.

## Milestone phase disposition
- **4.1 Competitor content benchmark:** prior in-depth Drive research plus reconfirmed 2026-10-12 public documentation on Tonomo, HDPhotoHub, Aryeo, Spiro.
- **4.2 Source-backed software evaluation guide:** already shipped via PR #41 on the **existing** URL `/insights/evaluate-property-media-workflow-software`. This is not a new product review page.
- **4.3 Evidence-based decision guidance:** new vendor evidence table on same indexed buyer guide. Four rows describe only what primary vendor pages actually document and provide a specific buyer demo question, with their public-source links. Two additional primary citations are made visible and reflected in Article.citation JSON-LD. Published capability != verified on a particular paid plan.
- **4.4 Topic gap / ownership audit:** the inventory and decisions below prevent another cluster of near-duplicate pages. No customer case study or integration help docs are invented for unreleased PhotoTrackly.

## Source-backed competitive patterns (not an independent feature test)

| Vendor | Documented workflow emphasis | What PhotoTrackly can responsibly learn | Official source |
| --- | --- | --- | --- |
| Tonomo | Project management: real-time job status/assignments and automated scheduling with availability and travel | A high-intent feature page should define one buyer task and show its inputs and next decision, but PhotoTrackly currently plans **manual** assignment, not auto-routing | https://www.tonomo.io/features/project-management ; https://www.tonomo.io/features/scheduling |
| HDPhotoHub | Workflow tasks for whole orders or specific products, ready-to-work emails, due dates | Explain a task's owner, deadline, readiness, blockers; link to a practical operating template | https://support.hdphotohub.com/hc/en-us/articles/37685771899668-Using-Workflow-Tasks ; https://support.hdphotohub.com/hc/en-us/articles/37685937820820-Using-Workflow-Task-Due-Dates |
| Aryeo | Listing-based central storage, photography/video/tour/floor-plan content, downloading and re-delivery | Explain retrieval of a correct approved deliverable alongside the property job; do not promise a live gallery | https://www.aryeo.com/products/content-management |
| Spiro | Ordering/scheduling/editing/delivery sequence and explicit QC steps of reviewing, correcting and replacing photos | Show an illustrative workflow for revision ownership, re-approval and delivery; do not claim PhotoTrackly has live QC automation | https://spiro.media/ ; https://support.spiro.media/en/articles/9325414-qc-and-delivery-process-in-spiro |

Observed models: feature-category owner pages for buyer intent; task-specific support articles for actual, available software; named verified experiences for trust. PhotoTrackly's current product is in development and cannot pretend to have existing paying operators, support walkthroughs, integration behavior or testimonials.

## Canonical topic ownership — no overlapping commercial URLs

| Buyer intent / owner URL | Strong existing supporting materials | Coverage gap worth improving | New URL? |
| --- | --- | --- | --- |
| Business/operations `/real-estate-photography-business-software` | `/insights/evaluate-property-media-workflow-software`, `/insights/outgrown-spreadsheets-property-media`, `/insights/scale-photography-business-without-owner-bottleneck`, `/worksheets/software-evaluation.csv` (download) | Direct category answer, realistic operational boundaries, owned evidence from an actual job | NO; improve existing |
| Shoot-to-delivery `/real-estate-photography-workflow-software` | `/insights/property-media-job-triage`, `/insights/real-estate-photography-editing-workflow`, `/insights/track-every-active-property-media-job`, `/resources/shoot-to-delivery-checklist` | Role-specific handoff input/output and approval-ready conditions | NO; improve existing |
| Scheduling `/real-estate-photography-scheduling-software` | `/insights/multi-service-shoot-scheduling`, `/insights/assign-property-photographers-by-skills`, `/insights/manage-property-photographer-availability`, `/resources/photographer-handoff-template` | What manual assignment *can* do and what automatic/travel optimization is NOT promised | NO; improve existing |
| Production/QC `/real-estate-media-production-management` | `/insights/real-estate-media-delivery-readiness`, `/insights/qc-outsourced-real-estate-photo-editing`, `/insights/handle-client-delivery-revisions-property-media`, `/resources/media-editing-review-checklist` | File-version owner and review/approval example with accurate human actions | NO; improve existing |

The current site also has an Insights category hub and resources hub that should point users to these owners. Duplicative brand-name 'alternatives' URLs should **not** be mass-generated: the existing buying guide already addresses alternative evaluation and gives a neutral worksheet.

## Evidence gaps to resolve before future content claims

**Real product proof:** screenshots of implemented (not just illustrative) job flows after a verified release; no blanket testimony allowed.
**Review/authorship:** first-party explanations with an accountable editorial source and actual change date; third-party testing needed for true comparisons.
**Integrations:** verify with real code/tests before publishing feature claims for calendar, Stripe, Dropbox, AI QC or editor marketplace.
**Market outcomes:** no verified external early-access registrations in previously inspected lead sheet; no measured time savings, customer ROI or category ranking may be claimed.
**Distribution:** owner-approved authentic published mentions or citations when available; direct customer outreach excluded by user decision.
**Search:** GSC 2026-09-13 through 2026-10-10 only 15 impressions/0 clicks, most detailed query rows noncommercial and unrelated to software buyers. No factual basis yet for building 30 new overlapping articles.

## Proposed no-copy reuse rules

1. When a query matches one of four product-owner URLs, improve that existing page; do not publish a second software landing page.
2. When a query describes a procedure, map it to the most relevant current insight or worksheet first; update with original worked evidence.
3. When discussing competitors, link official source pages and label untested claims; never use their testimonials/photos/wording as PhotoTrackly proof.
4. Keep a visible distinction between vendor-documented features, confirmed PhotoTrackly roadmap, and actually available functionality.
5. No fake `Review`, `AggregateRating`, vendor `FAQPage` rich-result schema or false customer logos.
6. Revisit indexing/CTR and real demos at least 14–30 days after recrawl; AI visibility is not guaranteed by additional schema tags.

## Release and validation

New content affects only the existing buyer-guide route: `lib/insights.ts` data, `app/insights/[slug]/page.tsx` render, and associated unit/browser tests. The output includes real accessible source links and matching Article.citation references; it does not create an 89th sitemap URL. CI must pass, PR must be mergeable, and GitHub `main` merge SHA verified. Required Vercel workspace remains unresolved in earlier audit; a GitHub Vercel status is not independent public deployment verification.

## Source links
Google Search Central: https://developers.google.com/search/docs/fundamentals/creating-helpful-content
Existing verified Drive benchmark: https://docs.google.com/document/d/1Do9dKw78nilsVEY75IYMJeDvJE400dSnMMr_Ykw0bw8/edit
