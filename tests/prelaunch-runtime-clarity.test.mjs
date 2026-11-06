import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const landing = readFileSync(new URL('../components/marketing/landing.tsx', import.meta.url), 'utf8');
const pkg = JSON.parse(readFileSync(new URL('../package.json', import.meta.url), 'utf8'));

test('Node engine matches the verified Vercel project runtime', () => {
  assert.equal(pkg.engines.node, '24.x');
});

test('homepage makes prelaunch status and buyer roles unambiguous', () => {
  assert.match(landing, /studio coordinators, photographers and editors/);
  assert.match(landing, /PhotoTrackly is in development/);
  assert.match(landing, /Join early access to share/);
});
