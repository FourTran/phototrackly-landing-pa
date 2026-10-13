import { insights, type Insight } from './insights';

export const insightTopics = [
  { id: 'operations', title: 'Job visibility and team operations', categories: ['Operations', 'Team operations', 'Buying guide'] },
  { id: 'scheduling', title: 'Scheduling and photographer assignments', categories: ['Scheduling'] },
  { id: 'production', title: 'Files, editing and quality review', categories: ['Editing', 'Production', 'File operations', 'Quality review', 'Quality control'] },
  { id: 'delivery', title: 'Client delivery and revisions', categories: ['Delivery'] },
];
export function topicFor(article: Insight) {
  return insightTopics.find(topic => topic.categories.includes(article.category));
}
// Each editorial topic has one corresponding commercial owner; do not turn
// informational guides into promises of an available PhotoTrackly product.
const commercialOwnerByTopic: Record<string, { href: string; label: string }> = {
  operations: { href: '/real-estate-photography-business-software', label: 'planned studio operations software' },
  scheduling: { href: '/real-estate-photography-scheduling-software', label: 'planned real estate photography scheduling software' },
  production: { href: '/real-estate-media-production-management', label: 'planned real estate media production management' },
  delivery: { href: '/real-estate-photography-workflow-software', label: 'planned shoot-to-delivery workflow software' },
};
export function commercialOwnerForInsight(article: Insight) {
  const topic = topicFor(article);
  return topic ? commercialOwnerByTopic[topic.id] ?? null : null;
}
export function relatedInsights(article: Insight): Insight[] {
  const topic = topicFor(article);
  const words = new Set(article.slug.split('-'));
  return insights.filter(other => other.slug !== article.slug && topicFor(other)?.id === topic?.id)
    .map(other => ({ article: other, score: other.slug.split('-').filter(word => words.has(word)).length }))
    .sort((a, b) => b.score - a.score || a.article.slug.localeCompare(b.article.slug))
    .slice(0, 4).map(item => item.article);
}
export function publicationLabel(value: string): string {
  return new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' }).format(new Date(value));
}

export const insightWorksheets: Record<string, { file: string; label: string }> = {
  'property-media-job-triage': { file: 'job-status', label: 'Job status and next-action worksheet' },
  'track-every-active-property-media-job': { file: 'job-status', label: 'Job status and next-action worksheet' },
  'multi-service-shoot-scheduling': { file: 'shoot-brief', label: 'Multi-service shoot brief worksheet' },
  'complete-property-shoot-job-instructions': { file: 'shoot-brief', label: 'Multi-service shoot brief worksheet' },
  'real-estate-media-delivery-readiness': { file: 'delivery-readiness', label: 'Delivery readiness worksheet' },
  'track-property-media-client-delivery-event': { file: 'delivery-readiness', label: 'Delivery readiness worksheet' },
  'evaluate-property-media-workflow-software': { file: 'software-evaluation', label: 'Workflow software evaluation worksheet' },
  'outgrown-spreadsheets-property-media': { file: 'software-evaluation', label: 'Workflow software evaluation worksheet' },
};
