/**
 * Original, fictional operating examples designed for a real-estate media studio.
 * They are editorial teaching tools, not PhotoTrackly customer data, published
 * product screenshots, benchmarks, or evidence of live integrations.
 */
export type WorkflowCheckpoint = {
  stage: string;
  owner: string;
  signal: string;
  nextAction: string;
  evidence: string;
};
export type WorkflowExample = {
  title: string;
  scenario: string;
  decisionRule: string;
  checkpoints: WorkflowCheckpoint[];
  worksheet: string;
  worksheetLabel: string;
};
export const workflowExamples: Record<string, WorkflowExample> = {
  'property-media-job-triage': {
    title: 'A five-minute board review with three different blockers',
    scenario: 'Fictional studio: an owner checks three active property jobs before a busy shoot day. Each job needs one explicit next owner; a status such as “editing” does not count as an action.',
    decisionRule: 'Prioritize a client delivery due today, then a job with a missing input, then an otherwise healthy job. Escalate when the next owner or a decision time is absent.',
    checkpoints: [
      { stage: 'P-101 · Photos', owner: 'Review lead', signal: 'Edit set ready; client delivery due today', nextAction: 'Check final files against the order before approving', evidence: 'Approval decision and final file versions recorded' },
      { stage: 'P-102 · Floor plan', owner: 'Coordinator', signal: 'Capture done but floor-plan export missing', nextAction: 'Ask assigned operator for a file and confirmed delivery time', evidence: 'Named operator and next check time on the job' },
      { stage: 'P-103 · Drone', owner: 'Production lead', signal: 'Sources uploaded; no editing owner', nextAction: 'Assign an editor who has the current service brief', evidence: 'Editor acknowledges brief and deadline' },
    ],
    worksheet: 'job-status',
    worksheetLabel: 'Download the blank job-status board',
  },
  'multi-service-shoot-scheduling': {
    title: 'One appointment, three services and a changed access time',
    scenario: 'Fictional property: the same order includes interior photography, aerial capture and a floor plan. The site contact changes the access window after a photographer is assigned.',
    decisionRule: 'Never treat a calendar update as proof that each service owner received the new instructions. Record the changed brief once and confirm each affected handoff.',
    checkpoints: [
      { stage: 'Before confirmation', owner: 'Coordinator', signal: 'Photo, drone and floor-plan services requested', nextAction: 'Separate deliverables and prerequisites by service', evidence: 'Complete service brief with access window and output owner' },
      { stage: 'Assignment', owner: 'Coordinator → photographer', signal: 'Time slot accepted', nextAction: 'Confirm access contact, parking, capture scope and file destination', evidence: 'Assigned photographer acknowledges current brief' },
      { stage: 'Late access change', owner: 'Coordinator', signal: 'Entry moves later the same day', nextAction: 'Update one brief; reconfirm affected crew and editing deadline', evidence: 'Timestamped change and acknowledgements recorded' },
      { stage: 'After capture', owner: 'Photographer → production lead', signal: 'Photo sources arrive; floor-plan set is pending', nextAction: 'Transfer available source sets and explicitly mark the pending one', evidence: 'Job shows what was received and what is still expected' },
    ],
    worksheet: 'shoot-brief',
    worksheetLabel: 'Download the blank multi-service shoot brief',
  },
  'real-estate-media-delivery-readiness': {
    title: 'Partially approved media must not become an unapproved delivery',
    scenario: 'Fictional order: approved property photos, a floor plan with an unresolved label, and a video that is still exporting. The agent asks if anything can be sent now.',
    decisionRule: 'A file being uploaded is not equivalent to a reviewer approving it. Only deliver an explicitly agreed subset when the client accepts partial delivery.',
    checkpoints: [
      { stage: 'Photos · version 3', owner: 'Reviewer', signal: 'All requested images exported', nextAction: 'Verify property identity, exposure and agreed image count', evidence: 'Approved v3 set with reviewer decision' },
      { stage: 'Floor plan · version 2', owner: 'Floor-plan editor', signal: 'Room label question remains', nextAction: 'Correct or clarify the label before requesting approval again', evidence: 'Corrected file and renewed reviewer approval' },
      { stage: 'Video · export pending', owner: 'Video editor', signal: 'Required video file not ready', nextAction: 'Provide the export ETA and flag impact on delivery', evidence: 'File receipt or visible blocker with named owner' },
      { stage: 'Client handoff', owner: 'Delivery coordinator', signal: 'Agent requests photos first', nextAction: 'Confirm written agreement for partial delivery; test the photo link', evidence: 'Recipient, agreed subset, approved versions and send time recorded' },
    ],
    worksheet: 'delivery-readiness',
    worksheetLabel: 'Download the blank delivery-readiness worksheet',
  },
  'evaluate-property-media-workflow-software': {
    title: 'One consistent trial script instead of four unrelated vendor demos',
    scenario: 'Fictional order: photos, drone and floor plan, with a late appointment change and a one-image revision. Use the same test job in each candidate product and your current tools.',
    decisionRule: 'Record whether the feature was demonstrated, merely documented, only promised or not verified. Vendor-published descriptions are not equivalent to tested behavior.',
    checkpoints: [
      { stage: 'Brief to appointment', owner: 'Studio coordinator', signal: 'Site contact changes access time', nextAction: 'Show where one change is reflected and acknowledged', evidence: 'Screenshot or notes identifying the current instruction' },
      { stage: 'Capture to editor', owner: 'Photographer → production lead', signal: 'Drone sources missing from initial upload', nextAction: 'Find the missing-service state and assign its next owner', evidence: 'Visible blocker, owner and deadline' },
      { stage: 'Review and revision', owner: 'Editor → reviewer', signal: 'One photo needs color correction', nextAction: 'Request and recheck a specific version while preserving approvals of other media', evidence: 'Revision history plus explicit approval' },
      { stage: 'Final delivery', owner: 'Delivery coordinator', signal: 'Photos approved; floor plan not ready', nextAction: 'Demonstrate partial-delivery controls or a documented manual procedure', evidence: 'Exact delivered subset and recipient access verification' },
    ],
    worksheet: 'software-evaluation',
    worksheetLabel: 'Download the blank software-evaluation scorecard',
  },
  'handle-client-delivery-revisions-property-media': {
    title: 'Locate a revised asset without replacing the wrong property file',
    scenario: 'Fictional event: two weeks after delivery, an agent requests a brighter kitchen image. The editor has multiple exports from two different property orders.',
    decisionRule: 'Revisions belong to a property, ordered deliverable and version. Never overwrite the approved delivery set until the revised file is checked and the handoff is explicitly recorded.',
    checkpoints: [
      { stage: 'Revision request', owner: 'Coordinator', signal: 'Agent asks to revise kitchen image', nextAction: 'Record property reference, filename/version and requested adjustment', evidence: 'Single scoped request linked to the original deliverable' },
      { stage: 'Source identification', owner: 'Editor', signal: 'Similar kitchen photos from different jobs', nextAction: 'Match job ID and original source/version before editing', evidence: 'Correct source located; previous approved file retained' },
      { stage: 'Quality review', owner: 'Reviewer', signal: 'Replacement export ready', nextAction: 'Compare against the requested fix and confirm correct property', evidence: 'New version specifically approved by a reviewer' },
      { stage: 'Re-delivery', owner: 'Delivery coordinator', signal: 'Approved version ready to send', nextAction: 'Test recipient link and record replacement version', evidence: 'Exact approved asset, recipient and re-delivery time documented' },
    ],
    worksheet: 'delivery-readiness',
    worksheetLabel: 'Download the blank delivery-readiness worksheet',
  },
};
