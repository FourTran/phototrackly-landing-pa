# PhotoTrackly Milestone 6 — Public identity, first-party evidence & authority ledger

**Date:** 2026-10-12  
**Product source:** `PhotoTrackly_Product_and_Landing_Page_Brief.md` (September 15, 2026), canonical repo and current deployment/SEO evidence.  
**Scope:** first-party website identity and honest build disclosure. No outreach, speculative partnerships, fake credentials, added social accounts or purchased citations.

## 6.1 Consistent identity — implemented

Verified first-party brand fields:
- Canonical project name: **PhotoTrackly**, stylized website wordmark `photoTrackly`.
- Public domain and canonical site URL in repository configuration: `https://phototrackly.com`. Independent live Vercel domain ownership/response requires the correct connected team permissions.
- Business category: **prelaunch B2B property media operations/workflow software**, not a photographer marketplace, photo editing studio, estate agent listing site, CRM or AI image-editing platform.
- Initial markets and relevant buyers: **US and Australia; growing real estate photography studios, media business owners, coordinators and production teams**. Real estate agents are usually customers of those studios, not the primary software buyer.
- Product stage: **in development**. Planned first release jobs/services/add-ons, manual photographer assignment, files, production status, human quality control/revision, final client handoff. No promised prices, integration availability, customer totals, savings or launch dates.

Updates: `/about` now has a visible brand-and-product-stage section; existing public homepage Organization schema retains **PhotoTrackly** as name with `photoTrackly` as the actual visible wordmark variant. Existing category pages/metadata retain their truthful prelaunch wording.

## 6.2 Owned profiles and public-channel inventory — audit, no invented links

**Verified and controlled in this thread:** canonical GitHub repository `https://github.com/FourTran/phototrackly-landing-pa` using the authenticated FourTran account (GitHub ID 13285951). That is a **website source repository**, not proof that a separate company-owned GitHub profile or social-media page exists. Main public website's canonical URL is configured as `phototrackly.com` and supported by Google URL Inspection on known pages.

**Not independently verified or available for mutation:** an official company-owned PhotoTrackly LinkedIn page, Facebook Page, Instagram, TikTok, YouTube or community listing. A targeted public search showed pages for different entities **pTrackly** (`https://www.linkedin.com/company/ptrackly`, a cybersecurity/compliance service using `ptrackly.dev`) and **PhotoTracK** (`https://www.linkedin.com/company/phototrack`, photography/archiving in Denmark). These are **not** evidence of a PhotoTrackly property-media SaaS identity and MUST NOT be linked with `sameAs`, used for reviews or described as affiliates. Public search cannot prove no official account exists.

**Blocked pending verification:** for every future official profile, first confirm administrator access and an exact identity match (name, site URL, target users, verified current availability). Then—and only then—consider updating its description and adding a `sameAs` link, with the user's explicit account authorization. Do not impersonate brands or auto-register accounts to manufacture authority.

## 6.3 Original first-party build notes — implemented

One substantive `/build-notes` page documents:
- Why a **property job** is the coordinating object across customer brief, appointment, files, editing, review and delivery.
- What the **public browser sample model** actually implements: Booked → Scheduled → Source files → Editing → In review → Delivered; manual photographer requirement; source-file requirement before editing; four human review checks; revisions clear stale approvals. Source: `lib/model.ts`, `tests/model.test.ts`, `components/prelaunch/sample-job.tsx`.
- What the **website early access system** does in source code: consented form requests and a verified saved-receipt contract, distinct from a deployed SaaS account; source `lib/lead-store.ts`, `app/api/early-access/route.ts`. Actual live Google Apps Script deployment still needs independent verification.
- What **is not** confirmed: production-grade scheduling, external integrations, automated routing, AI image editing, autonomous quality control, business performance, real customer results or launch date.
- Direct link to the source repository, historical relevant PRs and public `/about#editorial` disclosure.

The build note is an original evidence artifact, not a generic SEO blog or customer case study. It gets a unique canonical, Article publisher/author/datePublished schema, a single sitemap URL and links from `/about` and public website footers.

## 6.4 Authentic external mentions / authority — evaluated, no outreach

No independently verified third-party endorsement of **this** PhotoTrackly property-media SaaS was identified in the scoped public lookup. This is **not** proof that no mentions exist anywhere. The two similar-looking LinkedIn brand names above must remain disambiguated. Existing competitor visibility reports describe authentic source-backed vendor docs, but their popularity cannot be claimed for PhotoTrackly.

Future authority candidates must be based on real evidence: a publicly verifiable original workflow resource, accurate engineering/design case study from an authorized contributor, legitimate permissioned product preview, or independently written industry explanation. Any subsequent case-study claims need actual observations and permissions, not invented percentages, customers or testimonials. Skip contact/outreach as previously directed.

## Release, tests and verification

Branch `content/m6-brand-identity-build-notes-20261012`, focused PR to `main`. Tests cover about/home consistency, truthful Organization alternateName, absence of unverified sameAs, build-notes Article markup, code references, footer links, sitemap unique count and preview no-index rules. Run TypeScript, ESLint, unit tests, production build and desktop/mobile Playwright before merging. Current Google sitemap previously held 88 URLs; this **one substantive first-party page** changes intended count to 89 after verified release. No claims of Google indexing, AI citations or referral lift before recrawl.

The prescribed Vercel account/workspace access (`tranvantubk@gmail.com`, team ID `team_iMOgc2WCTM1NrLydPeLfcV9L`) previously returned `404 Project not found`; a successful GitHub Vercel integration status cannot alone establish that the production URL is serving the latest commit. Do not move domains or deploy to a different team to work around this.

## Primary references
- User-provided PhotoTrackly Product and Landing-Page Brief (September 15, 2026).
- `https://github.com/FourTran/phototrackly-landing-pa` source and implementation tests.
- `https://developers.google.com/search/docs/appearance/structured-data/organization`: Organization name, url and optional verified sameAs.
- `https://developers.google.com/search/docs/fundamentals/creating-helpful-content`: accurate Who/How/Why and original value.
- Public disambiguation evidence: `https://www.linkedin.com/company/ptrackly`, `https://www.linkedin.com/company/phototrack`.
