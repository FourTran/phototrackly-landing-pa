> **Imported GTM asset — 2026-10-07**
>
> Source: historical private PhotoTrackly work in `FourTran4444/qrTrackly` (September 2026).
> This file is now stored with the current PhotoTrackly website repository so growth work has one canonical project home.
> Treat company/contact facts, dates, platform rules, URLs, and product assumptions as historical until reverified.
> **Do not use any old `qrtrackly.com` PhotoTrackly link externally.** URL remediation is tracked separately in P1.2.

# Discovery calls and product-feedback loop

Updated 2026-09-11. Purpose: learn how a real job works before deciding what to build. No interviews, quotations or customer results are implied by this template.

## 20-minute conversation

**Minutes 0–2 — Context and permission.** “Thanks for speaking with me. I’m building PhotoTrackly, a pre-launch workflow product. I’d like to understand a recent property job before showing the prototype. It is useful to hear what already works, too.” Confirm their role and the purpose of the conversation. Ask before recording; notes can be sufficient. A meeting agreement is not permission to publish quotes or enrol someone in marketing.

**Minutes 2–8 — Reconstruct the last real job.** “Walk me through the last job that needed extra coordination.” Follow booking → scheduling → photographer → source files → editor → review → delivery. For each transition ask what triggered it, which system held the information, who owned it and what proved it was complete. Do not lead with “How frustrating is your workflow?” or ask them to agree that they need our product.

**Minutes 8–12 — Frequency, consequence and workaround.** “When did this happen before?” “What did the team do to recover?” “What happened to the customer or deadline?” Separate an exceptional failure from ordinary daily work. Ask for estimated time only after the sequence is clear and mark estimates as estimates. Record spend in the currency the person actually uses; never silently mix USD and AUD. Ask what they value about the existing setup.

**Minutes 12–15 — Buying and switching context.** “What have you already tried?” “Who would decide to change this?” “Which tools could not be replaced?” “What would make a trial too risky?” A willingness to look at a prototype is not willingness to pay. Do not announce pricing that has not been approved.

**Minutes 15–18 — Test one prototype task.** Introduce `/workflow-demo` as a local illustrative interaction. Ask the person to move the sample job into editing while a source file is missing, then to explain who should approve delivery. Watch where the meaning is unclear. Do not coach them through every click or call successful clicking product validation. Ask what the example omits from their actual process.

**Minutes 18–20 — Close.** Summarise your understanding and invite correction. Ask whether they would be willing to see a revised example, what would make that worthwhile, and how/when they want to be contacted. Ask for an introduction only where appropriate; do not harvest the colleague's details without permission. Agree one next action with an actual date/time zone.

## Interview record — copy into Interviews

- Date, company, US/Australia, contact and role.
- Current systems and what each is trusted to do.
- The recent job timeline, with responsibilities and evidence.
- Biggest observed coordination problem; frequency and consequences, distinguishing estimates.
- Current workaround and why it is still used.
- Trigger for seeking change, or explicit evidence that no change is wanted.
- Must-have, objection and unacceptable switching risk.
- Willing to test: Yes / Maybe / No, using their actual answer.
- Agreed follow-up and permission scope.
- Source/recording reference with restricted access; no raw client media or access codes.

## Feedback record — one hypothesis per row

Use a stable Feedback ID, date and Prospect ID. Record the observed workflow and source separately from the interpretation. Add frequency/impact, hypothesis, proposed decision, status, acceptance test, owner/next review and source/permission. Do not copy private interview material into a public issue. Use a redacted internal summary when repository audience differs from source audience.

Statuses: Observed → Needs validation → Planned → Prototype → Validated, with Deferred and Rejected available. “Validated” must say what was validated: understanding, usability, operational effect or commercial demand. A positive comment does not validate all four.

## Example structure — hypothetical, not a customer finding

Observed: [Prospect ID] described [specific event] on [date].
Hypothesis: [named role] needs [information] before [transition].
Counterevidence: [a team for which the current process works].
Proposed experiment: show a revised readiness check without changing the rest of the workflow.
Acceptance test: the participant can identify the missing input, next owner and next action without coaching; record any confusion.
Decision: keep, change or reject the design; link the relevant issue/PR.

Use `.github/ISSUE_TEMPLATE/customer-evidence.md` when an observation should become engineering work. Do not automatically change the PRD from every request. First check scope, recurrence, alternatives and first-release constraints.

## Loop back to the same operator

After a change, send a short note only through the agreed contact route: “You described [approved paraphrase]. We changed [specific prototype behavior]. Does this represent your workflow more accurately, and what is still wrong?” Never claim “you asked, we built” without a real source and permission. Log the response and revise the decision rather than merely accumulating feature requests.

## Scorecard

For the first five useful conversations, compare repeated pain, contradictory cases, current workarounds, switching objections and explicit follow-up commitments. Keep US/Australia as segments, not stereotypes. Do not run a “how disappointed would you be without the product?” survey on people who have never used a real product.

Method adapted from the repository's product context and the upstream customer-research interview workflow: https://github.com/coreyhaines31/marketingskills/tree/main/skills/customer-research
