> **Imported GTM asset — 2026-10-07**
>
> Source: historical private PhotoTrackly work in `FourTran4444/qrTrackly` (September 2026).
> This file is now stored with the current PhotoTrackly website repository so growth work has one canonical project home.
> Treat company/contact facts, dates, platform rules, URLs, and product assumptions as historical until reverified.
> **Do not use any old `qrtrackly.com` PhotoTrackly link externally.** URL remediation is tracked separately in P1.2.

# First-customer outreach playbook

**Stage:** Pre-launch. The product is not generally available.  
**Goal:** Learn from five qualified workflow conversations, not maximize traffic.  
**Primary conversion:** Saved workflow-demo request.  
**Secondary conversion:** Saved early-access registration.

Use `.agents/product-marketing.md` and `reddit-customer-research-2026-09.md` before outreach. Do not claim the product is live, integrated with a prospect's tools, or proven to save a quantified amount of time.

## Who to contact first

Prioritize real-estate media companies where public evidence suggests operational coordination is already a meaningful job. A prospect is stronger when at least two signals are visible:

- Multiple photographers or a team page with several shooters.
- Editing or post-production is delegated to editors or a production team.
- Multiple services such as photography, video, drone, floor plans or 3D tours.
- Multiple service areas or markets.
- Online booking plus a separate delivery/gallery experience.
- Hiring for photographers, editors, coordinators or operations roles.
- Public references to next-day/fast turnaround at meaningful volume.

Avoid using business size or order volume that cannot be verified. Do not infer problems simply because a company uses multiple tools.

## Prospect research card

Create one card before contacting anybody:

```text
Company:
Website:
Market:
Contact name / role:
Public source proving the role:
Fit signal 1 + URL:
Fit signal 2 + URL:
Current workflow clue:
One sentence showing why the outreach is relevant:
Contact channel:
Date contacted:
Message variant:
Reply:
Demo request:
Meeting confirmed:
Key pain / language:
Next action:
```

Do not store personal data in UTM parameters. Campaign links use only the controlled codes defined in `measurement-plan.md`.

## Outreach rule

The first message must make sense even if the recipient never clicks the link. Research first, ask about their workflow second, mention PhotoTrackly third. The goal is a useful conversation, not forcing a signup.

## Cold email — default

**Subject:** quick question about your media workflow

Hi {{first_name}},

I was looking at {{company}} and noticed {{specific public fit signal}}.

I’m building PhotoTrackly for real-estate media teams where the owner or ops person still has to check jobs across photographers, editors, files and delivery.

I’m trying to understand the problem before I build too much. When a job gets stuck at {{relevant handoff}}, how do you currently notice it and who follows it up?

If this is something you deal with, I’d value a 20-minute workflow walkthrough. I can also show you the product direction, but the useful part for me is seeing how you actually run it today.

Tu
PhotoTrackly

**Why this version:** It asks for a recent operational story and clearly states that the product is still being shaped. It does not promise automation, integrations, savings or availability.

## Cold email — shorter

**Subject:** {{company}} workflow question

Hi {{first_name}},

I’m building PhotoTrackly for growing real-estate media teams. I noticed {{specific fit signal}} at {{company}}.

When a shoot moves from photographer → editor → delivery, what part still needs the most manual checking from you or your ops team?

I’m speaking with operators before locking the workflow. Happy to share what we’re building too if it’s relevant.

Tu

## LinkedIn / direct message

Hi {{first_name}} — I’m researching how growing real-estate media teams handle the handoff from shoots to editing/QC/delivery. I noticed {{specific fit signal}} at {{company}}. What part of that workflow still needs the most checking or chasing from your team? I’m building PhotoTrackly around that problem and trying to learn before assuming the answer.

## Follow-up 1 — 3 to 5 business days later

Hi {{first_name}}, quick follow-up because I’m specifically trying to learn from teams that {{fit signal in plain English}}.

Even a one-line answer would help: what is the handoff you most often have to check manually after a shoot?

If it is not a problem for your team, that is useful for me to know too.

## Follow-up 2 — close the loop

Hi {{first_name}}, I’ll close the loop after this.

I’m testing one thesis: as a real-estate media company grows, editing can be delegated but the owner/ops person can still end up reconstructing job status across scheduling, files, messages and delivery.

If that does not describe {{company}}, no need to reply. If it does, I’d be grateful for a short workflow conversation and can share the PhotoTrackly direction in return.

## Discovery call — 20 minutes

Do not start with a demo. Start with a recent job.

### 1. Context — 2 minutes
- “How many people touch a normal property-media order?”
- “Which parts are internal versus external?”

### 2. Recent event — 8 minutes
- “Walk me through the last job where you had to chase something.”
- “How did you first notice it was stuck?”
- “Which tools did you open?”
- “Who was supposed to own the next step?”
- “What did you do to recover it?”

### 3. Frequency and impact — 4 minutes
- “How often does something like that happen?”
- “Which misses actually affect delivery or the client?”
- “What gets annoying but is not worth paying to fix?”

### 4. Alternatives — 3 minutes
- “What have you tried already?”
- “Why do you still use the current setup?”
- “What would make you refuse to add another tool?”

### 5. Product direction — final 3 minutes only
Show the concept around job health, ownership and exceptions. Ask:
- “What did I misunderstand?”
- “Which part is unnecessary?”
- “What would need to be true for this to replace one of your manual checks?”

Do not ask “Would you use this?” as the primary validation question.

## Reddit execution

Use Reddit primarily for research and participation, not direct promotion.

1. Monitor current workflow/business threads in r/RealEstatePhotography.
2. Reply where you can answer the actual question without mentioning PhotoTrackly.
3. If your founder perspective is directly relevant, disclose that you are building a product in the space.
4. Link only when current community rules and the specific thread permit it and the page directly answers the question.
5. Never mass-DM posters identified through pain-point research.
6. Record repeated language and counterexamples in `reddit-customer-research-2026-09.md`.

The workflow/business megathread has explicitly said general brand solicitation is discouraged, with somewhat more flexibility in the designated thread. Re-check current rules before every promotional participation.

## Controlled campaign links

For individually researched outreach:

```text
https://qrtrackly.com/?utm_source=cold-email&utm_medium=email&utm_campaign=first-customers-2026-09&utm_content=outreach-1
```

For a second copy variant:

```text
https://qrtrackly.com/?utm_source=cold-email&utm_medium=email&utm_campaign=first-customers-2026-09&utm_content=outreach-2
```

For a relevant Reddit comment where a link is allowed:

```text
https://qrtrackly.com/?utm_source=reddit&utm_medium=community&utm_campaign=first-customers-2026-09&utm_content=comment
```

Do not put company, recipient, email, username or other identifiers in URLs.

## First 20 sequence

Do not send all 20 at once.

### Batch A — 5 prospects
Research five companies deeply. Send one-to-one messages. Wait for signal and inspect replies before changing copy.

### Review
For each reply, classify:
- problem exists / does not exist / unclear;
- owner still coordinates / delegated successfully;
- relevant handoff;
- current tools;
- objection to another tool;
- willingness to show workflow;
- demo requested / not requested.

### Batch B — next 5
Rewrite only based on what Batch A teaches. Keep the ICP constant enough to learn from the change.

### Batch C/D
Continue to 20 only if the conversations remain within the intended segment. If most qualified prospects say the problem is minor or already solved, stop and revise the thesis rather than increasing outreach volume.

## Scorecard

Track counts separately:

- researched prospects;
- messages actually sent;
- replies;
- qualified replies;
- workflow conversations booked;
- workflow conversations held;
- saved demo requests;
- early-access registrations;
- repeated pain themes;
- explicit “not a problem” responses.

Five useful conversations is the current learning milestone. It is not a conversion forecast or success guarantee.
