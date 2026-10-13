/**
 * A reproducible citation audit for evidence collected *inside* an AI search UI.
 * Never infer an answer, mention or citation from ordinary web search, GSC or GA4.
 * Run: node scripts/ai-visibility-scorecard.mjs [dated-observations.json]
 */
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

export const SURFACES = ['chatgpt_search', 'google_ai_mode', 'perplexity'];
const canonical = 'phototrackly.com';

function validEvidenceURL(url) {
  try { const parsed = new URL(url); return parsed.protocol === 'https:' && Boolean(parsed.hostname); }
  catch { return false; }
}
function isPhotoTracklyCitation(value) {
  try { const url = new URL(value); return url.protocol === 'https:' && url.hostname.toLowerCase() === canonical; }
  catch { return false; }
}

export function buildScorecard(panel, snapshot) {
  if (panel?.version !== snapshot?.promptSet || !Array.isArray(panel.prompts) || panel.prompts.length !== 12) {
    throw new Error('Versioned 12-prompt panel does not match the snapshot');
  }
  if (!/^\d{4}-\d{2}-\d{2}$/.test(snapshot.snapshotDate || '')) throw new Error('Invalid snapshot date');
  const prompts = new Map(panel.prompts.map(p => [p.id, p]));
  if (prompts.size !== 12 || panel.prompts.some(p => typeof p.prompt !== 'string' || !p.ownerPath?.startsWith('/'))) {
    throw new Error('Prompt IDs and owner paths must be unique and complete');
  }
  const observations = snapshot.observations;
  if (!Array.isArray(observations) || observations.length !== 36) {
    throw new Error('One observation per surface and prompt is required');
  }
  const seen = new Set();
  for (const obs of observations) {
    const id = `${obs.surface}/${obs.promptId}`;
    if (!SURFACES.includes(obs.surface) || !prompts.has(obs.promptId) || seen.has(id)) {
      throw new Error(`Unknown or duplicate observation: ${id}`);
    }
    seen.add(id);
    if (!['not_tested', 'observed'].includes(obs.status)) throw new Error(`Invalid status: ${id}`);
    if (!Array.isArray(obs.citedUrls) || !Array.isArray(obs.competitorDomains)) throw new Error(`Invalid citations: ${id}`);
    if (obs.status === 'not_tested') {
      if (obs.brandMention !== null || obs.citedUrls.length || obs.competitorDomains.length || obs.evidenceUrl !== null)
        throw new Error(`Unobserved prompt cannot include claimed findings: ${id}`);
    } else if (typeof obs.brandMention !== 'boolean' || !validEvidenceURL(obs.evidenceUrl)) {
      throw new Error(`Observed findings require a boolean mention and direct evidence URL: ${id}`);
    } else if (obs.citedUrls.some(url => !validEvidenceURL(url))) {
      throw new Error(`Citation URLs must be HTTPS: ${id}`);
    }
  }
  const surfaces = SURFACES.map(surface => {
    const entries = observations.filter(obs => obs.surface === surface);
    const observed = entries.filter(obs => obs.status === 'observed');
    const mentioned = observed.filter(obs => obs.brandMention).length;
    const cited = observed.filter(obs => obs.citedUrls.some(isPhotoTracklyCitation)).length;
    const competitorMentions = [...new Set(observed.flatMap(obs => obs.competitorDomains))].sort();
    return {
      surface, prompts: entries.length, tested: observed.length, untested: entries.length - observed.length,
      // Null is "not measured"; NEVER render an untested citation result as 0%.
      brandMentionRate: observed.length ? mentioned / observed.length : null,
      canonicalCitationRate: observed.length ? cited / observed.length : null,
      mentions: observed.length ? mentioned : null,
      citedAnswers: observed.length ? cited : null,
      competitorDomains: competitorMentions,
    };
  });
  return { snapshotDate: snapshot.snapshotDate, market: snapshot.market, promptSet: panel.version, surfaces };
}

function percent(value) { return value === null ? 'not measured' : `${Math.round(value * 1000) / 10}%`; }
export function renderMarkdown(score) {
  const lines = [
    `# PhotoTrackly AI-search citation scorecard — ${score.snapshotDate}`,
    '',
    `Panel: ${score.promptSet} · Market: ${score.market}`,
    '',
    '| Surface | Tested prompts | Untested | Brand mention rate (tested only) | Canonical URL citation rate (tested only) |',
    '| --- | ---: | ---: | ---: | ---: |',
  ];
  for (const s of score.surfaces) {
    lines.push(`| ${s.surface} | ${s.tested}/${s.prompts} | ${s.untested} | ${percent(s.brandMentionRate)} | ${percent(s.canonicalCitationRate)} |`);
  }
  lines.push('', 'A web-search snippet, indexing verdict, GA4 referrer, or brand mention without a cited canonical URL is **not** an AI answer citation.');
  return lines.join('\n');
}

if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  const panel = JSON.parse(readFileSync('data/ai-visibility-prompts.json', 'utf8'));
  const snapshot = JSON.parse(readFileSync(process.argv[2] || 'data/ai-visibility-observations-2026-10-13.json', 'utf8'));
  process.stdout.write(renderMarkdown(buildScorecard(panel, snapshot)) + '\n');
}
