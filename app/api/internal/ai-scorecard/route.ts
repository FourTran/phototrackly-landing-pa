import { authorizedCronRequest } from '@/lib/cron-authorization';
import { buildScorecard } from '@/scripts/ai-visibility-scorecard.mjs';
import prompts from '@/data/ai-visibility-prompts.json';
import observations from '@/data/ai-visibility-observations-2026-10-13.json';

export const dynamic = 'force-dynamic';
export const maxDuration = 10;

const noStore = { 'Cache-Control': 'private, no-store' };

export function GET(request: Request): Response {
  const secret = process.env.CRON_SECRET;
  if (!secret || secret.length < 16) {
    console.error('[ai-scorecard-cron] CRON_SECRET is missing or too short');
    return Response.json({ ok: false, error: 'Cron is not configured' }, { status: 503, headers: noStore });
  }
  if (!authorizedCronRequest(request.headers.get('authorization'), secret)) {
    return Response.json({ ok: false, error: 'Unauthorized' }, { status: 401, headers: noStore });
  }

  try {
    // Snapshot is committed evidence only. Cron does NOT generate AI search answers.
    const score = buildScorecard(prompts, observations);
    const summary = {
      ok: true,
      kind: 'saved_observation_scorecard',
      generatedAt: new Date().toISOString(),
      ...score,
    };
    // Vercel runtime logs provide execution evidence, not a persistent history store.
    console.info('[ai-scorecard-cron]', JSON.stringify(summary));
    return Response.json(summary, { headers: noStore });
  } catch {
    // Avoid leaking internal details or any future evidence artifacts to clients.
    console.error('[ai-scorecard-cron] Saved observation data failed validation');
    return Response.json({ ok: false, error: 'Scorecard data invalid' }, { status: 500, headers: noStore });
  }
}
