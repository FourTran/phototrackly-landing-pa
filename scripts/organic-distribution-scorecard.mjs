/**
 * Proof-gated PhotoTrackly M5 organic distribution scorecard.
 * Read-only: never logs into, submits, schedules, sends or publishes to social networks.
 * npm run growth:organic
 */
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const ORIGIN = 'https://phototrackly.com';
const TOKEN = /^[a-z][a-z0-9._-]{1,70}$/;
const PUBLISH_STATES = new Set(['draft_ready', 'owner_approved', 'published']);

function fullHost(url, hostname) {
  try {
    const parsed = new URL(url);
    return parsed.protocol === 'https:' && (parsed.hostname === hostname || parsed.hostname === 'www.' + hostname);
  } catch { return false; }
}

export function trackedSocialUrl(post) {
  if (post.targetPath === null) {
    if ([post.utmSource, post.utmMedium, post.utmCampaign, post.utmContent].some(v => v !== null)) {
      throw new Error('No-link post cannot carry UTM fields');
    }
    return null;
  }
  if (typeof post.targetPath !== 'string' || !post.targetPath.startsWith('/') ||
      post.targetPath.startsWith('//') || /[?#\\]/.test(post.targetPath) ||
      /%2f|%5c/i.test(post.targetPath)) throw new Error('Unsafe PhotoTrackly target path');
  const tokens=[post.utmSource,post.utmMedium,post.utmCampaign,post.utmContent];
  if (tokens.some(t=>typeof t!=='string' || !TOKEN.test(t))) throw new Error('Unsafe campaign parameter');
  if (post.utmSource!==post.platform || post.utmMedium!=='organic_social') throw new Error('Unexpected organic campaign attribution');
  const url=new URL(post.targetPath,ORIGIN);
  url.searchParams.set('utm_source',post.utmSource);
  url.searchParams.set('utm_medium',post.utmMedium);
  url.searchParams.set('utm_campaign',post.utmCampaign);
  url.searchParams.set('utm_content',post.utmContent);
  return url.toString();
}

function crediblePublicationUrl(post) {
  if (!post.publicationUrl || !fullHost(post.publicationUrl,post.platform==='reddit'?'reddit.com':'linkedin.com')) return false;
  const path=new URL(post.publicationUrl).pathname;
  if (post.platform==='reddit') return /^\/r\/[^/]+\/comments\/[a-z0-9]+\//i.test(path);
  return path.startsWith('/posts/') || path.startsWith('/feed/update/');
}

export function verifyOrganicLedger(ledger) {
  if (ledger?.canonicalOrigin!==ORIGIN || ledger.product!=='PhotoTrackly' ||
      !Array.isArray(ledger.posts) || ledger.posts.length!==8 ||
      !ledger.draftDocumentUrl?.startsWith('https://docs.google.com/document/d/')) {
    throw new Error('Invalid M5 distribution ledger');
  }
  const policy=ledger.policy;
  if (!policy || Object.values(policy).some(v=>typeof v!=='boolean') ||
      policy.outboundCustomerEmail || policy.outboundCustomerDM || policy.paidPromotion ||
      policy.autoCrossPost || policy.postFromUnverifiedAccount ||
      !policy.requireSourceRulesCheck || !policy.requireOwnerReview) {
    throw new Error('M5 no-outreach and publisher-verification policy must remain enforced');
  }
  const ids=new Set();
  const posts=ledger.posts.map(post=>{
    if (!/^p0[1-8]$/.test(post.id) || ids.has(post.id) ||
        !['linkedin','reddit'].includes(post.platform) || !PUBLISH_STATES.has(post.status)) {
      throw new Error('Invalid or duplicate social post');
    }
    ids.add(post.id);
    if (!/^\d{4}-\d{2}-\d{2}$/.test(post.proposedDate) ||
        post.disclosure?.length<40 || post.utmCampaign && post.utmCampaign!==ledger.campaign) {
      throw new Error('Missing editorial context or campaign');
    }
    if (post.platform==='reddit' && (post.targetPath!==null || post.noLinkByDefault!==true)) {
      throw new Error('Reddit community drafts must remain no-link by default');
    }
    const trackedUrl=trackedSocialUrl(post);
    if (post.status==='published') {
      if (!post.publisherProfileUrl || !fullHost(post.publisherProfileUrl,post.platform==='reddit'?'reddit.com':'linkedin.com') ||
          !crediblePublicationUrl(post) ||
          !post.publishedAt || !post.verifiedAt || !post.ownerApprovedAt || !post.sourceRulesCheckedAt ||
          !Number.isFinite(Date.parse(post.publishedAt)) || !Number.isFinite(Date.parse(post.verifiedAt))) {
        throw new Error('Published claim requires platform permalink, account, approval and verified date');
      }
    } else if (post.publicationUrl!==null || post.publishedAt!==null || post.verifiedAt!==null) {
      throw new Error('Unpublished post cannot have a publication proof');
    }
    if (post.status==='owner_approved' && !post.ownerApprovedAt) throw new Error('Approval requires recorded owner approval');
    if (post.status==='draft_ready' && post.ownerApprovedAt!==null) throw new Error('Draft cannot claim approval');
    return {id:post.id,platform:post.platform,topic:post.topic,status:post.status,
      proposedDate:post.proposedDate,trackedUrl,publicationUrl:post.publicationUrl};
  });
  return {
    total:posts.length,
    draftReady:posts.filter(p=>p.status==='draft_ready').length,
    ownerApproved:posts.filter(p=>p.status==='owner_approved').length,
    published:posts.filter(p=>p.status==='published').length,
    posts
  };
}

export function renderOrganicScorecard(summary) {
  const lines=[
    '# PhotoTrackly M5 — Organic social publication ledger',
    '',
    'Prepared: 2026-10-14. Drafts: **'+summary.draftReady+'**; approved: **'+summary.ownerApproved+'**; verified published: **'+summary.published+'**.',
    '',
    '| Draft | Channel | Editorial date (proposal only) | Status | Prepared URL | Verified public post |',
    '| --- | --- | --- | --- | --- | --- |'
  ];
  for(const p of summary.posts){
    lines.push('| '+p.id+' '+p.topic+' | '+p.platform+' | '+p.proposedDate+' | '+p.status+
      ' | '+(p.trackedUrl || 'no link')+' | '+(p.publicationUrl || 'NOT PUBLISHED')+' |');
  }
  lines.push('', 'Publication dates are proposals, NOT scheduled tasks. Prepared tracking URLs do not prove referrals.',
    'Only verified platform-owned public post permalinks may be recorded as published. This script never publishes or communicates.',
    'Actual site conversions require separate, privacy-preserving receipt/lead-sheet verification.');
  return lines.join('\n');
}

if (process.argv[1] && fileURLToPath(import.meta.url)===process.argv[1]) {
  const ledger=JSON.parse(readFileSync('data/organic-distribution-posts-2026-10-14.json','utf8'));
  process.stdout.write(renderOrganicScorecard(verifyOrganicLedger(ledger))+'\n');
}
