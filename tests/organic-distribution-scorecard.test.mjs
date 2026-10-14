import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { verifyOrganicLedger, trackedSocialUrl, renderOrganicScorecard } from '../scripts/organic-distribution-scorecard.mjs';

const ledger=JSON.parse(readFileSync('data/organic-distribution-posts-2026-10-14.json','utf8'));

test('M5 has eight source-linked, unpublished, account-gated organic drafts',()=>{
  const score=verifyOrganicLedger(ledger);
  assert.equal(score.total,8);
  assert.equal(score.draftReady,8);
  assert.equal(score.ownerApproved,0);
  assert.equal(score.published,0);
  assert.equal(score.posts.filter(x=>x.platform==='linkedin').length,6);
  assert.equal(score.posts.filter(x=>x.platform==='reddit').length,2);
  assert.ok(score.posts.every(x=>x.publicationUrl===null));
  assert.match(renderOrganicScorecard(score),/NOT PUBLISHED/);
  assert.match(renderOrganicScorecard(score),/NOT scheduled tasks/);
});

test('canonical tracked social links contain only four clean attribution fields',()=>{
  const score=verifyOrganicLedger(ledger);
  assert.equal(score.posts.filter(x=>x.trackedUrl).length,5);
  for(const p of score.posts.filter(x=>x.trackedUrl)){
    const url=new URL(p.trackedUrl);
    assert.equal(url.origin,'https://phototrackly.com');
    assert.deepEqual([...url.searchParams.keys()],['utm_source','utm_medium','utm_campaign','utm_content']);
    assert.equal(url.searchParams.get('utm_source'),'linkedin');
    assert.equal(url.searchParams.get('utm_campaign'),'m5_workflow_202610');
    assert.ok(!url.search.includes('email='));
    assert.ok(!url.search.includes('token='));
  }
  const example=ledger.posts[0];
  assert.throws(()=>trackedSocialUrl({...example,targetPath:'//example.com'}),/Unsafe PhotoTrackly/);
  assert.throws(()=>trackedSocialUrl({...example,targetPath:'/foo?email=person'}),/Unsafe PhotoTrackly/);
  assert.throws(()=>trackedSocialUrl({...example,utmSource:'linkedin@example.com'}),/Unsafe campaign/);
  const noLink=ledger.posts.find(p=>p.platform==='reddit');
  assert.equal(trackedSocialUrl(noLink),null);
  assert.throws(()=>trackedSocialUrl({...noLink,utmSource:'reddit'}),/No-link post/);
});

test('cannot mark a post published without real channel-bound proof and owner approval',()=>{
  const fixture=structuredClone(ledger);
  const p=fixture.posts[0];
  p.status='published';
  assert.throws(()=>verifyOrganicLedger(fixture),/Published claim requires/);
  p.publisherProfileUrl='https://linkedin.com/in/example';
  p.publicationUrl='https://phototrackly.com/insights/property-media-editing-queue';
  p.publishedAt='2026-10-14T12:00:00Z';
  p.verifiedAt='2026-10-14T12:10:00Z';
  p.ownerApprovedAt='2026-10-14T10:00:00Z';
  p.sourceRulesCheckedAt='2026-10-14';
  assert.throws(()=>verifyOrganicLedger(fixture),/Published claim requires/);
  p.publicationUrl='https://www.linkedin.com/posts/example-example-123';
  assert.equal(verifyOrganicLedger(fixture).published,1);
  // This URL is only a schema validation fixture, NOT a live or observed publication.
  p.publicationUrl='https://www.reddit.com/r/RealEstatePhotography/comments/example/post/';
  assert.throws(()=>verifyOrganicLedger(fixture),/Published claim requires/);
});

test('Reddit posts remain no-link and unpublished without proven permission',()=>{
  const fixture=structuredClone(ledger);
  const reddit=fixture.posts.find(p=>p.platform==='reddit');
  reddit.targetPath='/';
  assert.throws(()=>verifyOrganicLedger(fixture),/Reddit community drafts/);
  const altered=structuredClone(ledger);
  altered.policy.outboundCustomerDM=true;
  assert.throws(()=>verifyOrganicLedger(altered),/policy must remain/);
});
