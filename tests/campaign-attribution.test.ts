import test from 'node:test';
import assert from 'node:assert/strict';
import { sanitizedAnalyticsLocation } from '../lib/campaign-attribution.ts';

test('retains only bounded campaign identifiers, not arbitrary personal query strings', () => {
  const url = sanitizedAnalyticsLocation(
    'https://phototrackly.com/?utm_source=linkedin&utm_medium=social&utm_campaign=workflow_launch&utm_content=checklist&email=secret%40example.com&token=secret#private-token'
  );
  assert.equal(url, 'https://phototrackly.com/?utm_source=linkedin&utm_medium=social&utm_campaign=workflow_launch&utm_content=checklist');
  assert.ok(!url.includes('secret'));
});

test('omits campaign parameters containing email-like or potentially sensitive values', () => {
  assert.equal(
    sanitizedAnalyticsLocation('https://phototrackly.com/about?utm_source=first%40last.com&utm_campaign=work%20email&utm_medium=social'),
    'https://phototrackly.com/about?utm_medium=social',
  );
});

test('retains standard click identifiers without forwarding unrelated parameters', () => {
  assert.equal(
    sanitizedAnalyticsLocation('https://phototrackly.com/?gclid=AbC123_xyz-5&msclkid=07abc&fbclid=FB123&utm_term=real_estate_photo&name=Alice'),
    'https://phototrackly.com/?utm_term=real_estate_photo&gclid=AbC123_xyz-5&msclkid=07abc&fbclid=FB123',
  );
});
