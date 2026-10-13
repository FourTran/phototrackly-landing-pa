/** Type declarations for the shared dependency-free Node scorecard script. */
export interface AiVisibilitySurface {
  surface: string;
  prompts: number;
  tested: number;
  untested: number;
  brandMentionRate: number | null;
  canonicalCitationRate: number | null;
  mentions: number | null;
  citedAnswers: number | null;
  competitorDomains: string[];
}
export interface AiVisibilityScorecard {
  snapshotDate: string;
  market: string;
  promptSet: string;
  surfaces: AiVisibilitySurface[];
}
export function buildScorecard(panel: unknown, snapshot: unknown): AiVisibilityScorecard;
export function renderMarkdown(score: AiVisibilityScorecard): string;
