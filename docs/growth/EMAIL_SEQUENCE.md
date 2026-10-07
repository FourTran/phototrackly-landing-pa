> **Imported GTM asset — 2026-10-07**
>
> Source: historical private PhotoTrackly work in `FourTran4444/qrTrackly` (September 2026).
> This file is now stored with the current PhotoTrackly website repository so growth work has one canonical project home.
> Treat company/contact facts, dates, platform rules, URLs, and product assumptions as historical until reverified.
> **Do not use any old `qrtrackly.com` PhotoTrackly link externally.** URL remediation is tracked separately in P1.2.

# Early-access email sequence — six complete drafts

Updated 2026-09-11. US + Australia. Status: prepared copy and manual operating procedure; no autoresponder, trigger, email job or newsletter enrolment has been enabled.

## Entry, sender and exit rules

Only use the sequence for the purpose and contact permission actually recorded. A researched prospect is not automatically a subscriber. The registration form currently requests early-access contact and optionally a workflow conversation; do not treat that as unlimited promotional consent. Check scope before educational/progress mail. Use the separate first-five pack for eligible outreach.

Before sending, replace every `[[...]]` field from verified information. Required sender configuration: approved display/legal identity, monitored From/Reply-To address, a valid postal address for commercial email, and a working reply-to unsubscribe process. Do not publish a private address by guessing. Use the recipient's local working hours as a proposed test, not a universal best-time claim; US and Australia each span several time zones.

Immediately suppress on opt-out, complaint, hard bounce or a request for no further contact. A reply pauses the sequence and becomes a personal conversation. Activation ends the pre-launch sequence. Do not send repeated reminders merely because a recipient did not open a tracking pixel; opens are not our success metric. Record the template ID, date, recipient, permission source and provider message link in a restricted send log, not anonymous analytics.

Use a reply-based unsubscribe footer on commercial messages: `To stop PhotoTrackly marketing emails, reply “unsubscribe”.` Include the approved sender identity/contact and postal address. Keep the mailbox monitored. These templates do not certify legal compliance.

## E1 — Registration acknowledgement

**Trigger:** a real, confirmed saved registration. Send once for that registration after checking the record, not after a CTA click or failed webhook. Suggested timing: same working day until a verified automated receipt system exists.

**Subject:** Your PhotoTrackly early-access registration

**Preview:** Your details are saved. No account or subscription has started.

**Body:**

Hi [[name-or-there]],

Thanks for registering your interest in PhotoTrackly for [[company]]. Your registration is saved.

We’re building a workspace for the daily property-media workflow, from booking and photographer assignment through files, editing, quality checks and delivery. The product is still in development, so this is not an account activation or a subscription.

We’ll contact you about availability as the first release becomes ready for your team. No payment or meeting is required to stay registered.

You can reply here to correct your details or ask us to stop contacting you.

[[approved-sender-signature]]

**CTA:** reply only if details need correcting. Do not add unrelated promotions to the receipt.

## E2 — Optional workflow conversation

**Segment:** registrants who requested a conversation, or who separately agreed to this contact. **Timing:** suggested next working day. Skip once a meeting is booked or the person replies.

**Subject:** Your team’s booking-to-delivery workflow

**Preview:** A discussion about a recent job—not a demo of finished software.

**Body:**

Hi [[name-or-there]],

You mentioned that you’d like to talk through [[company]]’s workflow.

I’d like to start with one recent property job: what happened from booking to delivery, who was involved, and where someone had to chase an update. That will help us understand whether our first-release direction is relevant to your team.

The conversation is optional and PhotoTrackly is still being built. There is no purchase decision to make.

You can choose a time here: [[verified-calendar-link]]. Please check the time zone shown by the calendar; the meeting is confirmed only after booking completes.

[[approved-sender-signature-and-unsubscribe-footer]]

**CTA:** choose one conversation time. No second competing registration CTA.

## E3 — A useful handoff checklist

**Segment:** people whose recorded permission covers helpful workflow/product email; exclude people in an active personal conversation. **Timing:** proposed day 4–5, not an installed timer.

**Subject:** What makes a property job ready for editing?

**Preview:** A checklist your team can adapt without changing software.

**Body:**

Hi [[name-or-there]],

Before an editor starts, it helps to agree on what “ready” means: the expected source files, the ordered outputs, the editing instructions and the person accepting the handoff.

A folder can exist while the package is still incomplete. A short readiness check makes that distinction explicit.

We put a practical starting point here: https://qrtrackly.com/guides/photographer-editor-handoff

It is an operating suggestion, not a claim that one checklist suits every team. You can use it with your current tools; PhotoTrackly itself is still in development.

[[approved-sender-signature-and-unsubscribe-footer]]

**CTA:** read the checklist. Only send after that URL is deployed and verified.

## E4 — Founder learning follow-up

**Segment:** permission covers follow-up; no reply, no booked meeting and no opt-out. **Timing:** proposed day 8–10. At most one such reminder before pausing.

**Subject:** One question about the last job you delivered

**Preview:** What still needed someone to check or chase?

**Body:**

Hi [[name-or-there]],

One question as we shape PhotoTrackly’s first release:

For the last property job your team delivered, what did you personally have to check or chase before it could move forward?

A short example is more useful than a feature wish list. It is equally helpful to hear that your current process already works well—we do not want to add another tool without a clear reason.

A reply here is enough. No meeting needed.

[[approved-sender-signature-and-unsubscribe-footer]]

**CTA:** reply with one real example. Do not claim interviews have happened until they have.

## E5 — Verified progress update

**Trigger:** a meaningful, verified change worth sharing, not a weekly requirement to manufacture news. Permission must cover updates.

**Subject:** PhotoTrackly update: [[verified-change-in-plain-English]]

**Preview:** What changed, what remains a prototype, and what is still planned.

**Body:**

Hi [[name-or-there]],

Here is a concrete update on PhotoTrackly: [[one-verified-change]].

Available to explore: [[deployed-guide-or-prototype-and-what-it-does]].

Still planned or incomplete: [[relevant-limitations]]. This does not mean a production account is ready, and we have not confirmed an activation date for your team.

The next question we’re testing is [[one-workflow-question]]. You can reply with the part that would not fit your operation.

[[approved-sender-signature-and-unsubscribe-footer]]

**CTA:** one feedback reply. Stop the draft if a placeholder cannot be supported by evidence.

## E6 — Early-access invitation

**Trigger:** an actually usable release, approved eligibility, support/privacy readiness and confirmed fit. This email is not sendable merely because the marketing site or interactive prototype is live.

**Subject:** PhotoTrackly early access for [[company]]

**Preview:** The available scope and activation terms are ready to review.

**Body:**

Hi [[name-or-there]],

We’re ready to invite [[company]] to a limited early-access release of PhotoTrackly.

The available scope is [[verified-available-workflows]]. The following areas are not included yet: [[explicit-exclusions]].

Before you activate, please review [[approved-service-terms-link]], [[current-privacy-link]] and [[onboarding-and-support-details]]. Your confirmed introductory terms are [[approved-account-specific-terms]]. No charge or subscription starts just because you received this invitation.

To review the invitation, open [[secure-invitation-link]]. Do not send customer media or credentials by reply.

[[approved-sender-signature-and-unsubscribe-footer]]

**CTA:** review invitation. Never insert an unsupported “three months guaranteed”, price or launch claim.

## Operational acceptance tests before automating

A failed save sends no receipt. Replaying the same saved registration sends at most one receipt. An opted-out address receives no marketing. Unknown permission is not treated as granted. A reply pauses subsequent nurture. Missing sender/footer values block send. Test delivery, bounce handling and unsubscribe against founder-controlled addresses before adding a provider job queue. The current lead-notification email goes to the owner; it is not a subscriber receipt.

## Official references for owner review

Australia: consent must precede commercial electronic messaging, with accurate sender details and an effective unsubscribe process; do not send a marketing message simply to ask for consent. A public contact route alone is not a completed consent review. https://www.acma.gov.au/avoid-sending-spam

United States: CAN-SPAM covers commercial B2B email as well as bulk mail, including truthful sender/subject information, commercial identification, postal address and opt-out requirements. Do not relabel a sales message as research to evade those rules. https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business
