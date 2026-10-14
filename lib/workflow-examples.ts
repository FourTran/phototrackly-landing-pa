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
  /** Recorded date of a substantive example update; absent on historical examples. */
  updatedAt?: string;
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
  'scale-photography-business-without-owner-bottleneck': {
    title: 'Three decisions a studio owner can delegate — and one to keep',
    scenario: 'Fictional studio: the owner is covering eight shoots and three deliveries while a coordinator and production lead are available. Routine questions keep interrupting the owner even when the current job notes contain the answer.',
    decisionRule: 'Delegate repeatable checks with a written completion rule and next owner; escalate changes to a client commitment, price or scope before the team makes an unauthorized promise.',
    checkpoints: [
      { stage: 'Missing gate code', owner: 'Coordinator', signal: 'Photographer cannot confirm access for tomorrow', nextAction: 'Request the correct access instructions and have the assignee acknowledge the current brief', evidence: 'Timestamped instructions and photographer acknowledgement on the job' },
      { stage: 'Source-file intake', owner: 'Production lead', signal: 'Photo files uploaded but floor-plan inputs are absent', nextAction: 'Mark the floor-plan service blocked and ask the assigned operator for the missing set', evidence: 'Missing deliverable, named owner and agreed next check time' },
      { stage: 'Edited photos awaiting QC', owner: 'Reviewer', signal: 'Editor has submitted a new set for review', nextAction: 'Check agreed image count and exact version before approving or requesting corrections', evidence: 'Recorded decision tied to approved file versions' },
      { stage: 'New scope after confirmation', owner: 'Studio owner', signal: 'Client requests an extra service with the same delivery promise', nextAction: 'Decide whether scope, price or delivery timing changes before the coordinator confirms it', evidence: 'Owner decision and revised commitment explicitly recorded' },
    ],
    worksheet: 'job-status',
    worksheetLabel: 'Download the blank job-status board',
    updatedAt: '2026-10-14',
  },
  'real-estate-photography-editing-workflow': {
    title: 'A photo set moves from intake to approval without losing revisions',
    scenario: 'Fictional property: an editor receives indoor and exterior source images, but the drone folder is empty. A later edit fails the colour check on two kitchen frames.',
    decisionRule: 'A file transfer never proves editing is ready or final media is approved. Record missing inputs before assignment, then require a reviewer decision on each version before delivery.',
    checkpoints: [
      { stage: 'Intake gate', owner: 'Production lead', signal: 'Photo originals present; promised drone originals missing', nextAction: 'Mark the drone service waiting on capture and allow only the complete photo set into the editing queue', evidence: 'Property reference, service checklist and missing-source owner recorded' },
      { stage: 'Editing assignment', owner: 'Photo editor', signal: 'Current photo brief and reference style are complete', nextAction: 'Acknowledge exact input folder, required output format and review cutoff time', evidence: 'Editor acknowledgement and agreed photo deliverable count' },
      { stage: 'Specific revision', owner: 'Reviewer → editor', signal: 'Kitchen frames 12 and 13 have inconsistent colour', nextAction: 'Request correction of those two frame IDs in a new version without replacing approved files', evidence: 'Issue scoped to filenames and a new version submitted for review' },
      { stage: 'Approval handoff', owner: 'Reviewer → delivery owner', signal: 'Photo version two passes human quality checks', nextAction: 'Approve photo v2, keep the drone service pending and communicate package readiness accurately', evidence: 'Approved photo version and explicit outstanding drone state' },
    ],
    worksheet: 'delivery-readiness',
    worksheetLabel: 'Download the blank review and delivery checklist',
    updatedAt: '2026-10-14',
  },
  'property-media-editing-queue': {
    title: 'Choose the next feasible edit without hiding blocked work',
    scenario: 'Fictional production desk: job A has complete photos due tomorrow; job B has a floor plan due tomorrow but missing measurements; job C has a video due in two days with an available editor.',
    decisionRule: 'Prioritize the earliest feasible client commitment with enough time for human review. Keep incomplete inputs out of the ready queue but visible as owned exceptions, not silently postponed tasks.',
    checkpoints: [
      { stage: 'A · Photos ready', owner: 'Production lead → photo editor', signal: 'All source photos and the brief are present; delivery due tomorrow', nextAction: 'Assign the photo edit and reserve time for reviewer approval and any corrections', evidence: 'Acknowledged editor, edit due time and review slot' },
      { stage: 'B · Floor-plan blocked', owner: 'Intake coordinator', signal: 'Property measurements are missing despite a close due date', nextAction: 'Request measurements and set a decision deadline instead of marking the service ready', evidence: 'Blocker linked to the named measurement owner and escalation time' },
      { stage: 'C · Video scheduled', owner: 'Video editor', signal: 'Video sources complete and delivery due in two days', nextAction: 'Confirm a work slot that leaves capacity for video review without displacing job A', evidence: 'Editor commitment, review reservation and updated queue order' },
      { stage: 'Queue reshuffle', owner: 'Production lead', signal: 'Client adds a genuine same-day rush request', nextAction: 'Re-check editor and reviewer capacity and obtain a decision on any affected client promises', evidence: 'Recorded ordering reason, new owners and any changed commitments' },
    ],
    worksheet: 'job-status',
    worksheetLabel: 'Download the blank status and blocker board',
    updatedAt: '2026-10-14',
  },
  'prevent-double-booked-photographers': {
    title: 'Check a full appointment block, not just its start time',
    scenario: 'Fictional schedule: photographer Ana is on a photo-and-floor-plan job through 11:30 am. Another agent requests a noon shoot across town with additional equipment setup.',
    decisionRule: 'A free calendar start time is not availability. Confirm service duration, travel and setup buffers, existing holds and assignee acceptance before promising a slot.',
    checkpoints: [
      { stage: 'Existing commitment', owner: 'Scheduler', signal: 'First shoot may finish at 11:30 am but has an unresolved site-access delay', nextAction: 'Review the full reserved interval and whether the job can overrun before offering another slot', evidence: 'Confirmed expected release time and current booking status' },
      { stage: 'New-service requirements', owner: 'Scheduler → photographer', signal: 'Second shoot includes extra equipment and a different property location', nextAction: 'Check travel, setup, ordered services and whether the assignee can complete the full second job', evidence: 'Realistic full appointment block reviewed by the assignee' },
      { stage: 'Conflict decision', owner: 'Coordinator', signal: 'Noon would leave insufficient travel and setup time', nextAction: 'Offer a later appointment or another confirmed qualified photographer before committing to the client', evidence: 'Accepted conflict-free slot or an explicit declined request' },
      { stage: 'If the first job moves', owner: 'Scheduler', signal: 'Client changes the first appointment time after second booking', nextAction: 'Recheck both full intervals and reconfirm affected photographers and contacts', evidence: 'Updated authoritative schedule with acknowledgements' },
    ],
    worksheet: 'shoot-brief',
    worksheetLabel: 'Download the blank shoot assignment brief',
    updatedAt: '2026-10-14',
  },
  'manage-property-photographer-availability': {
    title: 'Reassign a shoot after a photographer becomes unavailable',
    scenario: 'Fictional Tuesday: an assigned photographer reports a morning absence. Two property shoots are confirmed, one with drone capture and another with interiors and a floor plan.',
    decisionRule: 'An open time slot does not prove the substitute can fulfil every ordered service. Verify qualification, capacity, property access and client commitment before announcing a reassignment.',
    checkpoints: [
      { stage: 'Availability exception', owner: 'Scheduler', signal: 'The booked photographer cannot attend two scheduled jobs', nextAction: 'Mark the original assignments unavailable and identify the affected client and service commitments', evidence: 'Both jobs visibly blocked with current appointment windows' },
      { stage: 'Qualification check', owner: 'Scheduler → replacement', signal: 'One job includes aerial capture, the other requires a floor plan', nextAction: 'Confirm each substitute can lawfully and practically handle the exact ordered services and travel', evidence: 'Named qualified assignee and separately confirmed service fit for each job' },
      { stage: 'New assignment brief', owner: 'Coordinator', signal: 'Replacement accepts the available appointment', nextAction: 'Send current access instructions, site contact, services, delivery notes and file destination', evidence: 'Updated job brief and replacement acknowledgement' },
      { stage: 'Client commitment check', owner: 'Coordinator or owner', signal: 'No qualified replacement is available for the drone service', nextAction: 'Get a client decision on rescheduling or changing scope before promising unchanged delivery', evidence: 'Recorded client agreement and updated downstream editing/review timing' },
    ],
    worksheet: 'shoot-brief',
    worksheetLabel: 'Download the blank shoot assignment brief',
    updatedAt: '2026-10-14',
  },
};
