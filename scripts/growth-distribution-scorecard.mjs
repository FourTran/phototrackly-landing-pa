/**
 * Read-only earned-distribution tracker; never submits, posts, emails or pays.
 * Run: npm run growth:distribution
 */
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const safeToken = /^[a-z][a-z0-9._-]{1,70}$/;
const candidateStates = new Set([
  'owner_authorization_required','editorial_permission_required',
  'payment_and_owner_approval_required','owner_login_and_launch_readiness_required',
  'deferred_paid','ineligible','submitted','published',
]);

export function trackedReferralUrl(candidate) {
  if (!candidate.targetPath?.startsWith('/') || candidate.targetPath.startsWith('//') ||
      candidate.targetPath.includes('?') || candidate.targetPath.includes('#')) {
    throw new Error('Invalid canonical target path');
  }
  const url = new URL(candidate.targetPath, 'https://phototrackly.com');
  const tokens = [candidate.utmSource, candidate.utmMedium, candidate.utmCampaign, candidate.utmContent];
  if (tokens.some(v => !safeToken.test(v))) throw new Error('Invalid UTM token');
  url.searchParams.set('utm_source', candidate.utmSource);
  url.searchParams.set('utm_medium', candidate.utmMedium);
  url.searchParams.set('utm_campaign', candidate.utmCampaign);
  url.searchParams.set('utm_content', candidate.utmContent);
  return url.toString();
}

export function buildDistributionScorecard(catalog, baseline) {
  if (catalog?.product?.canonicalUrl !== 'https://phototrackly.com' ||
      !Array.isArray(catalog.opportunities) || !catalog.opportunities.length) {
    throw new Error('Invalid PhotoTrackly distribution catalog');
  }
  if (!catalog.rules?.noOutboundCommunication || !catalog.rules?.noAutomaticSubmissions ||
      !catalog.rules?.noPayments) throw new Error('Distribution policy must prohibit unapproved actions');
  const seen = new Set();
  const items = catalog.opportunities.map(item => {
    if (seen.has(item.id) || !candidateStates.has(item.status)) throw new Error('Duplicate or unrecognized channel');
    seen.add(item.id);
    if (!/^https:\/\//.test(item.sourceUrl) || !item.name || !item.requirements || !item.action) {
      throw new Error('Channel needs public evidence and permission policy');
    }
    if (item.status === 'published') {
      if (!item.proofUrl?.startsWith('https://')) throw new Error('Published channel requires external proof');
      const proof = new URL(item.proofUrl);
      if (proof.hostname === 'phototrackly.com') throw new Error('First-party URL cannot prove publication');
    } else if (item.proofUrl !== null) throw new Error('Unpublished channel cannot carry a published proof URL');
    return {id:item.id, name:item.name, status:item.status, trackedUrl:trackedReferralUrl(item), proofUrl:item.proofUrl};
  });
  if (!Array.isArray(baseline.acquisition) || baseline.sessions !== 523 ||
      baseline.acquisition.reduce((sum,row) => sum+row.sessions,0) !== baseline.sessions) {
    throw new Error('Unexpected GA4 baseline; refresh with verified property-level data');
  }
  const published=items.filter(item=>item.status==='published');
  const submitted=items.filter(item=>item.status==='submitted');
  return {
    researchedOn:catalog.researchedOn, items, published:published.length,
    submitted:submitted.length, eligibleForReview:items.filter(item=>!['ineligible','deferred_paid'].includes(item.status)).length,
    ga4: {dateRange:baseline.dateRange,sessions:baseline.sessions,engaged:baseline.engagedSessions,
      confirmedExternalReferralSessions:baseline.externalAcquisitionConfirmed,
      confirmedQualifiedSignups:baseline.qualifiedExternalSignupsConfirmed,
      directSessions:baseline.acquisition.find(row=>row.sourceMedium.startsWith('(direct)'))?.sessions ?? 0}
  };
}

export function renderDistributionReport(data) {
  const lines = [
    '# PhotoTrackly — Earned authority and referral tracker',
    '','Research date: '+data.researchedOn,
    'Published independently verified listings: **'+data.published+'**',
    'Submitted listings verified: **'+data.submitted+'**',
    '','| Channel | Status | Tracked landing URL |',
    '| --- | --- | --- |'
  ];
  for(const item of data.items)lines.push('| '+item.name+' | '+item.status+' | '+item.trackedUrl+' |');
  lines.push('', 'GA4 baseline: '+data.ga4.sessions+' sessions, '+data.ga4.engaged+
    ' engaged; '+data.ga4.directSessions+' unattributed Direct sessions; '+
    data.ga4.confirmedExternalReferralSessions+' confirmed external referral sessions; '+
    data.ga4.confirmedQualifiedSignups+' confirmed external signups.');
  lines.push('Prepared links are **not evidence** that anyone has submitted or published them. Never equate unattributed Direct traffic with qualified visitors.');
  return lines.join('\n');
}

if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  const catalog=JSON.parse(readFileSync('data/growth-distribution-opportunities-2026-10-13.json','utf8'));
  const baseline=JSON.parse(readFileSync('data/growth-referral-baseline-2026-10-13.json','utf8'));
  process.stdout.write(renderDistributionReport(buildDistributionScorecard(catalog,baseline))+'\n');
}
