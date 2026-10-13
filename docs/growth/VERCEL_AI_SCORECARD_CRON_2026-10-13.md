# PhotoTrackly — Private weekly AI-visibility scorecard cron

**Prepared:** 2026-10-13 (Asia/Ho_Chi_Minh)  
**Canonical repository:** `FourTran/phototrackly-landing-pa`  
**Intended Vercel workspace:** `fourtran's projects`, team `team_iMOgc2WCTM1NrLydPeLfcV9L`  
**User-provided project ID:** `prj_AUx8JX4Jq4PdtV6ezykABURXd9wO` — **NOT YET VERIFIED** against the authorized Vercel connection.

## What gets scheduled

One Vercel Cron Job in `vercel.json`:
- Path: `/api/internal/ai-scorecard`
- Cron: `0 3 * * 1`
- Local time equivalent: Mondays from **10:00 AM Vietnam time**, or within the 10:00–10:59 hour on Vercel Hobby.
- UTC: Monday at 03:00 UTC (no timezone setting in Vercel cron).
- Supported by Hobby plan: weekly frequency is less frequent than the once-per-day maximum. It is not minute-precision on Hobby.

The endpoint is a Next.js App Router GET Vercel Function and requires `Authorization: Bearer <CRON_SECRET>`. Vercel injects that header automatically for cron invocations when the `CRON_SECRET` environment variable exists. No public anonymous API access, no retries from unsecured clients, and no anonymous fallback if the variable is absent. The secret must be a strong random string, at least 16 characters. Set it **inside Vercel Project Settings → Environment Variables → Production**. Never put it in repository code, Google Drive or ChatGPT messages.

## What the run actually does

It reads the versioned 12-prompt, four-surface (`phototrackly-12-v2`) panel and **the committed, dated October 13 observation snapshot**. It calls the exact shared Node.js scorecard function also used by `npm run ai:scorecard` and returns a small JSON result showing actual tested counts, untested counts, mention/citation rates or **null** for unmeasured rates. It records one structured `[ai-scorecard-cron]` line in the Vercel function runtime logs on successful authenticated execution.

**The job does not visit ChatGPT Search, Google AI Mode, Perplexity, or Gemini; it does not retrieve live GSC/GA4 analytics; it does not automatically collect new answer observations or generate new leads.** Until genuinely observed evidence is added to a newer, verified snapshot and the source is updated, the weekly scorecard is intentionally unchanged. This is a schedule for reporting **saved evidence**, not self-operating AI-search monitoring. Vercel Functions have no guaranteed persistent writable filesystem and this implementation does not add a database or external storage. Logs are execution evidence, not a durable historical data store.

## Required release gates

1. Review and merge the focused PR into `main` only after TypeScript, ESLint, Node unit/Google receiver checks, production Next.js build and Playwright browser/API checks pass.
2. Restore access through the *same* authorized Vercel account `tranvantubk@gmail.com` in team `team_iMOgc2WCTM1NrLydPeLfcV9L`. Current API `GET /v9/projects/{idOrName}` for both project name and the supplied project ID returns `404 not_found` despite prior GitHub Vercel integration successes. Do not substitute a different team, invent another project ID, transfer the domain or deploy to the wrong workspace.
3. Verify project identity, team, connected GitHub repo `FourTran/phototrackly-landing-pa`, and actual production branch `main` before applying the project settings.
4. Set `CRON_SECRET` as a secure Vercel Production environment variable, and redeploy the intended production project after the PR merges. Never print or disclose the value.
5. Verify **Project → Settings → Cron Jobs** shows the exact route and UTC cron. Inspect function runtime logs filtered by `requestPath:/api/internal/ai-scorecard`. Check HTTP status 200, `kind: saved_observation_scorecard`, and four surfaces, each 0/12 tested until evidence is imported. Without a secret, it will safely return HTTP 503, not successful scorecard data.
6. Monitor missed/duplicate runs and any Vercel Hobby timing variation. A cron invocation is a fresh GET and the endpoint only recomputes a read-only scorecard; it does not write persistent data or create leads.

## Tests

`tests/vercel-ai-cron.test.ts` checks UTC schedule, fail-closed secret behavior, unauthorized calls, validated 48-observation totals and privacy-safe response caching. `tests/e2e/ai-scorecard-cron.spec.ts` verifies that in CI without `CRON_SECRET` even a forged Vercel user-agent cannot access the internal path. No production credential appears in a fixture.

## Evidence and follow-up

- Official Vercel cron docs: https://vercel.com/docs/cron-jobs/quickstart
- Vercel authorization: https://vercel.com/docs/cron-jobs/manage-cron-jobs
- Hobby cadence/precision: https://vercel.com/docs/cron-jobs/usage-and-pricing
- Historical AI visibility panel: `data/ai-visibility-observations-2026-10-13.json`; current prompt definition: `data/ai-visibility-prompts.json`.
- Future product step: an authenticated dashboard and durable snapshot ingestion should be a separate PR requiring deliberate storage/provider choices and operator authorization; they are not automatically created by this cron configuration.
