import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { insights } from '../lib/insights.ts';
import { resources } from '../lib/resources.ts';
import { workflowExamples } from '../lib/workflow-examples.ts';

const expected = ['property-media-job-triage', 'multi-service-shoot-scheduling', 'real-estate-media-delivery-readiness', 'evaluate-property-media-workflow-software', 'handle-client-delivery-revisions-property-media'];

test('five editorial examples provide a real decision with a named owner and evidence of completion', () => {
  assert.deepEqual(Object.keys(workflowExamples).sort(), expected.sort());
  for (const [slug, example] of Object.entries(workflowExamples)) {
    assert.ok(insights.some(item => item.slug === slug), slug);
    assert.ok(example.scenario.startsWith('Fictional'), slug);
    assert.ok(example.decisionRule.length > 80, slug);
    assert.ok(example.checkpoints.length >= 3, slug);
    for (const point of example.checkpoints) {
      assert.ok(point.stage && point.owner && point.signal, slug);
      assert.ok(point.nextAction.length > 35 && point.evidence.length > 25, slug);
    }
    assert.ok(example.worksheet && example.worksheetLabel, slug);
  }
});

test('four resources keep blank CSV contracts and supply original fictional example companions', () => {
  assert.equal(resources.length, 4);
  for (const resource of resources) {
    assert.equal(resource.updated, 'October 2026');
    assert.equal(resource.worksheet.instructions.length, 3, resource.slug);
    const blank = readFileSync(join(process.cwd(), 'public', 'worksheets', resource.worksheet.blank + '.csv'), 'utf8').trim().split(/\r?\n/);
    const sample = readFileSync(join(process.cwd(), 'public', 'worksheets', resource.worksheet.example + '.csv'), 'utf8').trim().split(/\r?\n/);
    assert.equal(sample[0], blank[0], resource.slug);
    assert.ok(blank.length >= 2 && sample.length >= 4, resource.slug);
    assert.ok(sample.slice(1).every(row => row.includes('SAMPLE-') && row.includes('fictional')), resource.slug);
    const cols = sample[0].split(',').length;
    for (const row of sample.slice(1)) assert.equal(row.split(',').length, cols, resource.slug);
  }
});
