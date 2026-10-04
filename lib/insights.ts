import { dayOneInsights } from './insights-day-one';
import { dayTwoInsights } from './insights-day-two';
import { dayThreeInsights } from './insights-day-three';
import { dayFourInsights } from './insights-day-four';

export type Insight = {
  slug: string;
  category: string;
  title: string;
  description: string;
  answer: string;
  intro: string;
  image: string;
  imageAlt: string;
  readingMinutes: number;
  sections: {
    heading: string;
    paragraphs: string[];
    bullets?: string[];
    table?: { headers: [string, string, string]; rows: [string, string, string][] };
  }[];
  closing: string;
  related: { href: string; label: string }[];
};

const originalInsights: Insight[] = [
  {
    slug: 'property-media-job-triage',
    category: 'Operations',
    title: 'How to triage a busy property media job board',
    description: 'A practical daily triage method for real estate photography studios: find blocked jobs, name the next owner, and protect client delivery.',
    answer: 'For each active property job, identify its current stage, the next action, the person responsible, and the due time. Review blocked or due-soon jobs first. A stage label alone does not tell a coordinator what to do next.',
    intro: 'When a studio has several shoots, edits and deliveries underway, the owner can become the status database. A short daily triage works better when the team looks at the same job record and decides the next action together.',
    image: '/images/insights/property-media-job-triage.webp',
    imageAlt: 'Studio coordinator reviewing property media contact sheets beside a task board',
    readingMinutes: 5,
    sections: [
      {
        heading: 'Start with four fields, not a long status meeting',
        paragraphs: ['A useful board gives each job a stage, next action, owner and due time. Add a blocker only when something prevents that action. “Editing” is a stage; “Maya checks the missing kitchen images by 2 pm” is an actionable update.', 'Keep one row per property job. For a multi-service order, show the state of each deliverable within that job rather than marking the entire order complete when only the photos are ready.'],
        bullets: ['Stage: scheduled, shot, waiting for files, editing, review, revision, approved or delivered.', 'Next action: a verb and a specific output, such as “upload drone originals.”', 'Owner: one person who can move the job to the next stage.', 'Due time: the time the next action is needed, with its local time zone.'],
      },
      {
        heading: 'A worked example: 12 jobs on a Monday',
        paragraphs: ['This is an illustrative scenario, not PhotoTrackly customer data. Imagine a coordinator opening a board with 12 active jobs. Seven are moving normally, three need a decision, and two are due for delivery today. The coordinator reviews the two delivery jobs and three blocked jobs first.'],
        table: { headers: ['Job signal', 'Decision in the review', 'Next owner'], rows: [
          ['Photos approved; floor plan still in revision', 'Confirm the floor plan due time and whether partial delivery is agreed with the client.', 'Coordinator'],
          ['Shoot scheduled; access code missing', 'Ask the property contact for access details and confirm receipt with the photographer.', 'Coordinator'],
          ['Source files uploaded; no editor assigned', 'Assign editing ownership and confirm the full service brief.', 'Production lead'],
          ['All media approved; delivery due today', 'Open the client-facing link and verify the package before sending it.', 'Delivery owner'],
        ] },
      },
      {
        heading: 'Run the review in a repeatable order',
        paragraphs: ['Sort by promised delivery time, then look for a missing owner or blocked handoff. Ask what must happen before the next person can work. Update the job record during the discussion, not in a separate private note.', 'At the end, each exception should have an owner and a decision time. A job can remain blocked, but it should not remain ambiguous.'],
        bullets: ['Due today: is every ordered deliverable approved?', 'Blocked: what input or decision is missing, and who can provide it?', 'Unowned: who takes the next action?', 'Changed: does the photographer, editor or client need the new instruction?'],
      },
      {
        heading: 'Review the pattern weekly',
        paragraphs: ['Count recurring blockers rather than blaming a person for every delay. If access details repeatedly arrive after assignment, change the booking brief. If editing waits on incomplete files, improve the source-file handoff. This is an operating practice you can use in a spreadsheet or board today.'],
      },
    ],
    closing: 'The board succeeds when a coordinator can answer what happens next without reconstructing a conversation.',
    related: [
      { href: '/resources/property-job-status-board-template', label: 'Copy the job status board template' },
      { href: '/real-estate-media-production-management', label: 'Explore the planned production workspace' },
    ],
  },
  {
    slug: 'multi-service-shoot-scheduling',
    category: 'Scheduling',
    title: 'Scheduling a property shoot with photos, drone and floor plan',
    description: 'A real estate photography scheduling example that keeps the appointment, ordered services, access notes and photographer brief together.',
    answer: 'A multi-service property shoot is ready to schedule when the team has the property address, client contact, ordered services, requested timing and access instructions. Assign the responsible people, confirm their briefs, and record changes on the same job.',
    intro: 'A calendar event says where and when. It rarely explains every service a property-media team must produce. For a shoot with photos, drone images and a floor plan, the coordinator needs to make the service brief travel with the appointment.',
    image: '/images/insights/multi-service-shoot-scheduling.webp',
    imageAlt: 'Photographer preparing cameras, drone equipment and floor-plan tools for a property shoot',
    readingMinutes: 5,
    sections: [
      {
        heading: 'Define “ready to schedule” before offering a time',
        paragraphs: ['A confirmed appointment with an incomplete brief creates another round of messages. Separate the information needed to hold a tentative time from what must be confirmed before the photographer arrives.', 'The following is an illustrative job. An agency orders interior photos, drone images and a floor plan for one property. The coordinator records each service as its own deliverable under the same job.'],
        table: { headers: ['Field', 'Question to resolve', 'Where it belongs'], rows: [
          ['Property and access', 'Who opens the property, and what happens if the contact is late?', 'Shared job brief'],
          ['Ordered services', 'Which outputs are required and which are optional?', 'Service list on the job'],
          ['People', 'Who captures each service and who receives the source files?', 'Assignments and handoff'],
          ['Timing', 'What is the local appointment time and expected delivery date?', 'Schedule and job record'],
        ] },
      },
      {
        heading: 'Confirm service-specific instructions',
        paragraphs: ['The photographer should see the property contact, access notes and full service list in one brief. If another team member handles a floor plan or video, name that person and the sequence of work. The coordinator should confirm who will upload each source set and where it goes.', 'Drone work can be affected by conditions and permissions. The responsible operator should assess the shoot under applicable local requirements; a generic calendar checkbox is not a substitute for that decision.'],
        bullets: ['Photos: agreed areas, property readiness and any requested angles.', 'Drone: who is responsible for the aerial service and what decision may change the plan.', 'Floor plan: access to all required spaces and the agreed format.', 'Files: destination, naming convention and receiving editor or coordinator.'],
      },
      {
        heading: 'Handle a late change without losing the brief',
        paragraphs: ['Suppose the agent moves the appointment by a day and adds twilight images. Update the job time and service list, then ask each affected person to acknowledge the change. Do not assume that editing or delivery dates automatically remain valid.', 'A change log can be simple: what changed, who requested it, when it was confirmed, and who was notified. The purpose is to stop old instructions from living beside new ones.'],
      },
      {
        heading: 'Close the scheduling handoff',
        paragraphs: ['Before marking the shoot ready, check that an assigned person has the current brief and a path for reporting on-site exceptions. After the shoot, the next owner should know which files to expect. This turns scheduling into the first production handoff.'],
      },
    ],
    closing: 'The appointment is ready when the people doing the work can see the same scope and current instructions.',
    related: [
      { href: '/resources/photographer-handoff-template', label: 'Use the photographer handoff template' },
      { href: '/real-estate-photography-scheduling-software', label: 'Explore the planned scheduling workspace' },
    ],
  },
  {
    slug: 'real-estate-media-delivery-readiness',
    category: 'Production',
    title: 'When is a real estate media job ready to deliver?',
    description: 'A delivery-readiness decision for property media teams: ordered services, human review, revisions, package access and client handoff.',
    answer: 'A property-media job is ready to deliver when every agreed deliverable has a clear disposition, the intended files have passed human review, open revisions are resolved or explicitly agreed, and the client-facing package has been checked.',
    intro: 'An editor can finish a file while the job is still waiting on another service or a client decision. Treating “uploaded” as “approved” is an easy way to send an incomplete package.',
    image: '/images/insights/real-estate-media-delivery-readiness.webp',
    imageAlt: 'Editor checking property photos, floor plan and video frames before delivery',
    readingMinutes: 5,
    sections: [
      {
        heading: 'Track readiness by deliverable',
        paragraphs: ['Consider an illustrative order for photos, a floor plan and a short video. The photos are approved, the floor plan needs a label correction, and the video is still exporting. The job should not show one undifferentiated “complete” badge.', 'Use states that describe a decision, not merely file movement. A received source file is not a reviewed final file.'],
        table: { headers: ['State', 'Meaning', 'Next decision'], rows: [
          ['Received', 'Source material arrived for this service.', 'Is the material complete enough to edit?'],
          ['In review', 'A proposed final is awaiting a human check.', 'Approve or request a revision.'],
          ['Revision needed', 'A specific issue and owner have been recorded.', 'Recheck the corrected version.'],
          ['Approved', 'The intended final meets the agreed scope.', 'Add it to the delivery package.'],
        ] },
      },
      {
        heading: 'Make exceptions explicit',
        paragraphs: ['Sometimes the client agrees to receive photos before a video or floor plan. Record that agreement and which items remain outstanding; do not quietly mark the whole job delivered. If a required service cannot be completed, the coordinator should contact the client before sending a package that appears final.', 'A revision note should identify the exact item, the requested change, its owner and the next review time. “Fix photos” does not give the editor a usable decision.'],
      },
      {
        heading: 'Perform a client-view check',
        paragraphs: ['Before sending, open the link or package as the client would. Confirm the property identifier, agreed file types, version, access settings and any delivery instructions. This is especially useful when several property jobs are being prepared on the same day.'],
        bullets: ['Does the package contain every approved item and exclude superseded versions?', 'Does its label clearly identify the right property and client?', 'Can the intended recipient open it with the access you expect?', 'Are any remaining items and their next update explained?'],
      },
      {
        heading: 'Record the final handoff',
        paragraphs: ['Keep the delivery time, recipient and package reference attached to the job. If the client requests a change later, the team can distinguish a new revision from an unsent item. The final handoff is a job event, not just an email in one person’s inbox.'],
      },
    ],
    closing: 'Delivery readiness is a deliberate approval decision across the whole order, with any partial handoff clearly agreed.',
    related: [
      { href: '/resources/media-editing-review-checklist', label: 'Use the editing and review checklist' },
      { href: '/real-estate-media-production-management', label: 'Explore the planned production workspace' },
    ],
  },
  {
    slug: 'evaluate-property-media-workflow-software',
    category: 'Buying guide',
    title: 'How to evaluate software for a growing property media team',
    description: 'A one-job evaluation script for real estate photography business software, covering scheduling, production handoffs, review, delivery and migration.',
    answer: 'Test property-media software with one realistic job that includes several services and a late change. Follow the job from request to client delivery, and ask each role to show how it finds its next action. Record gaps before comparing prices or feature lists.',
    intro: 'A long feature list does not show whether a coordinator can find the missing floor plan on a busy day. A realistic test job reveals where people would still need separate messages, spreadsheets and folders.',
    image: '/images/insights/evaluate-property-media-workflow-software.webp',
    imageAlt: 'Studio team comparing a property workflow with a sample job brief',
    readingMinutes: 6,
    sections: [
      {
        heading: 'Create a test job that exposes handoffs',
        paragraphs: ['Use a fictional property and no real client data. Order photos, drone imagery and a floor plan. Set an appointment, assign a photographer, upload source files, send one item back for revision, approve the others, then prepare a client handoff.', 'Add a realistic change halfway through: the agent moves the appointment or changes a service. Ask whether everyone sees the updated scope and whether the original decision remains traceable.'],
        bullets: ['Coordinator: can I see the next action and the person responsible?', 'Photographer: can I find the current access and service brief?', 'Editor: do I know what files and output are expected?', 'Reviewer: can I approve some items while requesting changes on others?', 'Delivery owner: can I tell exactly what is ready for the client?'],
      },
      {
        heading: 'Compare the same journey across tools',
        paragraphs: ['Run the same job in your current stack and each candidate tool. A simple 0–2 score for each handoff can make discussion concrete: 0 means the team must reconstruct it elsewhere; 1 means the information is present but awkward; 2 means the next person can act from the job record. The score is an internal decision aid, not an industry benchmark.'],
        table: { headers: ['Checkpoint', 'What to demonstrate', 'Evidence to record'], rows: [
          ['Brief to schedule', 'Property, services, time and access travel together.', 'Extra messages required'],
          ['Shoot to edit', 'Source sets and editing instructions are identifiable.', 'Missing context or manual copying'],
          ['Edit to review', 'Revision ownership and approval are separate states.', 'Unclear or duplicated decisions'],
          ['Review to delivery', 'Only agreed final media reaches the client.', 'Packaging and access checks'],
        ] },
      },
      {
        heading: 'Ask about adoption and migration',
        paragraphs: ['A good demonstration can still fail when the team has to move active jobs or change daily habits. Ask how current clients, service packages, schedules and files would be represented, which integrations exist today, and what remains manual. Confirm the actual product stage rather than assuming a roadmap feature is available.', 'Include the people who perform the handoffs in the evaluation. An owner may like a dashboard while an editor still lacks the instructions needed to finish work.'],
      },
      {
        heading: 'Make a decision with known gaps',
        paragraphs: ['Record which problems the tool solves now, which require a workaround, and which are only planned. Set a short trial outcome such as “a coordinator can answer the next owner and readiness for every test job.” Do not choose solely on a generic AI label or a promised automation.'],
      },
    ],
    closing: 'The best evaluation is whether your real team can move one representative job without losing its context.',
    related: [
      { href: '/resources/shoot-to-delivery-checklist', label: 'Use the shoot-to-delivery checklist' },
      { href: '/real-estate-photography-business-software', label: 'See PhotoTrackly’s planned first-release scope' },
    ],
  },
];
export const insights: Insight[] = [...originalInsights, ...dayOneInsights, ...dayTwoInsights, ...dayThreeInsights, ...dayFourInsights];
export const insightSlugs = insights.map(article => article.slug);
export function getInsight(slug: string) { return insights.find(article => article.slug === slug); }
