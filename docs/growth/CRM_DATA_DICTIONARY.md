> **Imported GTM asset — 2026-10-07**
>
> Source: historical private PhotoTrackly work in `FourTran4444/qrTrackly` (September 2026).
> This file is now stored with the current PhotoTrackly website repository so growth work has one canonical project home.
> Treat company/contact facts, dates, platform rules, URLs, and product assumptions as historical until reverified.
> **Do not use any old `qrtrackly.com` PhotoTrackly link externally.** URL remediation is tracked separately in P1.2.

# CRM data and reporting conventions

The existing Google workbook is the operational record; source code does not automatically synchronise these CRM tabs. Its original UTC reporting timezone was retained. Log timed activity consistently in that reporting timezone and keep intended local scheduling time separately when coordinating US/Australian contacts.

- **Leads / Events:** existing intake schemas, not a researched prospect list. Do not insert fake successes or test prospect rows here. Reconcile founder-controlled test submissions before reporting actual registrations.
- **Prospects A:U:** researched company, country, market, priority, copy/pipeline status, contact/role, public route, website, fit signal, discovery angle, last contact, next action/date, reply, conversation, notes, source URL, owner, send eligibility, permission/review evidence and stable prospect ID. Copy-ready status alone never authorises sending.
- **Activity A:I:** actual date, prospect ID, country, event, channel, evidence/message link, owner, outcome and unique record ID. Log one First contact per prospect. A given incoming message is either Reply or Positive reply, not two records. Dashboard totals count events, not automatically deduplicated people.
- **Interviews A:P:** actual discussion notes, including current tools, observed pain, frequency, workaround, switching objection, willingness to test, follow-up and source/permission. A blank template is not a completed conversation.
- **Content A:L:** proposed date, intended market, channel, pillar, hook, status, CTA, URL/UTM, notes, copy source, actual publication date and real published URL. Proposed dates are not scheduled tasks. Mark Published only after the platform actually publishes.
- **Feedback A:L:** one observation/hypothesis/decision per record, with source and permission. Keep fact, interpretation and product decision separate.
- **Dashboard:** formula output. B23:B24 are editable weekly dates. Historical activity does not depend on a prospect's current pipeline status. Country for anonymous leads is not fabricated from campaign tags.

Current bounded formulas cover up to 500 CRM/content/feedback rows and 1,000 activity/intake rows. Expand the corresponding ranges, filters and validation deliberately when approaching those limits. Empty metrics are zero because no activity has been logged, not because a campaign was run unsuccessfully.

The sheet records send eligibility and suppression decisions for manual review; it is not connected to an automatic mail sender. On opt-out, record the event, set Send Eligibility to Do not contact, remove planned marketing follow-ups and include the record in the pre-send suppression review. Do not erase the suppression evidence while deleting unrelated research notes.
