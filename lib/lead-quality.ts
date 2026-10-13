/**
 * Privacy-minimizing, operator-reviewed lead quality. Do not include emails,
 * names, company names, request IDs or withdrawal tokens in audit snapshots.
 * "Saved" and "generate_lead" are not equivalent to a qualified buyer.
 */
export type LeadReviewSignal = {
  sheetRowSaved: boolean;
  consentRecorded: boolean;
  suspectedTest: boolean;
  humanReviewed: boolean;
  buyerFitVerified: boolean;
  externalAcquisitionVerified: boolean;
  withdrawn: boolean;
};

export type LeadReviewStatus =
  | 'not_saved' | 'withdrawn' | 'suspected_test' | 'saved_unverified' | 'verified_qualified_external';

export function reviewLeadStatus(lead: LeadReviewSignal): LeadReviewStatus {
  if (!lead.sheetRowSaved || !lead.consentRecorded) return 'not_saved';
  if (lead.withdrawn) return 'withdrawn';
  // Even when a consented row exists, tests and automation are not buyers.
  if (lead.suspectedTest) return 'suspected_test';
  if (!lead.humanReviewed || !lead.buyerFitVerified || !lead.externalAcquisitionVerified) return 'saved_unverified';
  return 'verified_qualified_external';
}

export function countLeadReviews(leads: readonly LeadReviewSignal[]) {
  const byStatus: Record<LeadReviewStatus, number> = {
    not_saved: 0, withdrawn: 0, suspected_test: 0,
    saved_unverified: 0, verified_qualified_external: 0,
  };
  for (const lead of leads) byStatus[reviewLeadStatus(lead)] += 1;
  return {
    savedRows: leads.filter(l => l.sheetRowSaved && !l.withdrawn).length,
    confirmedQualifiedExternal: byStatus.verified_qualified_external,
    byStatus,
  };
}
