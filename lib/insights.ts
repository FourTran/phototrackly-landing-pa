import { dayOneInsights } from './insights-day-one';
import { dayTwoInsights } from './insights-day-two';
import { dayThreeInsights } from './insights-day-three';
import { dayFourInsights } from './insights-day-four';
import { dayFiveInsights } from './insights-day-five';
import { daySixInsights } from './insights-day-six';
import { daySevenInsights } from './insights-day-seven';
import { commercialGrowthInsights } from './insights-commercial-growth';

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
  publishedAt?: string;
  sections: {
    heading: string;
    paragraphs: string[];
    bullets?: string[];
    table?: { headers: [string, string, string]; rows: [string, string, string][] };
  }[];
  closing: string;
  sources?: { label: string; url: string }[];
  vendorEvidence?: { vendor: string; publishedCapability: string; testQuestion: string; sourceUrl: string }[];
  related: { href: string; label: string }[];
};

const originalInsights: Insight[] = [
  {
    "slug": "real-estate-photography-job-profitability",
    "category": "Operations",
    "title": "How to calculate profitability per real estate photography job",
    "description": "Track photographer time, outsourced editing, travel and rework to understand job profitability and improve property-media operations.",
    "answer": "Compare net job revenue with direct production costs and a consistent overhead allocation. Track actual hours and rework by property job, then review the difference between estimated and actual cost before changing prices or staffing.",
    "intro": "A full calendar can hide a losing service package. When a photographer returns late, an editor needs another revision and the owner spends an hour finding missing files, the invoice stays the same while the work expands. For a growing US or Australian property-media studio, understanding where that extra work happens is essential to deciding which jobs to accept and how to staff them.",
    "image": "/images/insights/property-media-job-triage.webp",
    "imageAlt": "Studio coordinator reviewing property media contact sheets beside a task board",
    "readingMinutes": 5,
    "sections": [
      {
        "heading": "Separate revenue, direct job costs and overhead",
        "paragraphs": [
          "Start with revenue after discounts and refunds, excluding sales tax or GST collected on behalf of the government where applicable. Record capture labour, travel, external editing, floor-plan contractors and job-specific delivery costs. Include paid coordination and quality review when directly attributable to the job. For owner labour, use an explicit internal cost assumption for management decisions, not a claim about deductible payroll.",
          "University of Maine Cooperative Extension explains service costing through labour, materials and overhead. Xero Australia describes allocating overhead using a consistent measure such as production hours. Keep those categories separate and avoid counting a cost in both direct costs and overhead. Ask your accountant how to reconcile the management estimate with your accounts."
        ],
        "bullets": [
          "Direct job contribution = net revenue minus direct job costs.",
          "Estimated job result = direct job contribution minus allocated overhead.",
          "Estimated job margin = estimated job result divided by net revenue, when revenue is positive."
        ]
      },
      {
        "heading": "A worked example: two versions of the same property order",
        "paragraphs": [
          "Consider a fictional studio charging 450 currency units for photos and a floor plan. Use USD or AUD consistently with your own books; these numbers are not market rates or customer results. The planned order includes capture, travel, editing, floor-plan production and coordination. The actual job requires extra review and a return visit."
        ],
        "table": {
          "headers": [
            "Cost item",
            "Planned",
            "Actual"
          ],
          "rows": [
            [
              "Capture labour",
              "100",
              "140"
            ],
            [
              "Travel",
              "25",
              "45"
            ],
            [
              "Editing and floor plan",
              "95",
              "95"
            ],
            [
              "Coordination and review",
              "30",
              "60"
            ],
            [
              "Total direct cost",
              "250",
              "340"
            ],
            [
              "Revenue less direct costs",
              "200",
              "110"
            ],
            [
              "Allocated overhead (illustrative)",
              "50",
              "50"
            ],
            [
              "Estimated job result",
              "150",
              "60"
            ],
            [
              "Estimated job margin",
              "33.3%",
              "13.3%"
            ]
          ]
        }
      },
      {
        "heading": "Record the reason, not just the extra hours",
        "paragraphs": [
          "If a return visit was caused by incomplete property access instructions, changing the editing supplier will not solve it. If repeated revisions arise from an unclear service brief, make that brief part of the handoff. Distinguish client-requested extra scope from internal rework and record whether the client approved a change before invoicing.",
          "Use one job identifier across the booking, capture assignment, editing brief and delivery record. A simple spreadsheet works: one summary row per property, with a separate time and cost log for each service. Keep client addresses out of any unnecessary shared financial reports."
        ],
        "bullets": [
          "Record estimated and actual labour minutes by role.",
          "Record subcontractor invoices against the relevant service.",
          "Tag avoidable rework, approved scope changes and travel exceptions separately.",
          "Record delivery completion and the person who verified it."
        ]
      },
      {
        "heading": "Review cost overruns weekly and connect the workflow",
        "paragraphs": [
          "Review completed jobs with the largest cost overruns first. Compare similar packages, not an ordinary photo shoot with a complex multi-service order. Ask whether the variance comes from price, service mix, travel, staffing or rework. A single unusual order is a signal to investigate, not enough evidence to redesign pricing.",
          "Choose one operational change and review subsequent comparable jobs. For example, confirm floor-plan access before assigning the photographer, or require a complete editing brief before an editor starts. Measure actual minutes and exceptions rather than assuming the change saved money.",
          "When evaluating software, ask whether the booking, assigned photographer, editing handoff, review and delivery milestones can be traced to the same property job. Those records help explain cost variances even when accounting remains in a separate system.",
          "PhotoTrackly is in development. Its planned connected workflow brings scheduling, photographer and editor assignments, production coordination and client delivery together. It is not presented as a live job-costing or accounting product. If your team needs better visibility into the work behind each invoice, register interest in early access and describe the handoff that creates the most avoidable work.",
          "Illustrative before and after: in the scattered process, a coordinator discovers a missing floor-plan access note only after the shoot and books a return visit. In a connected job record, the coordinator confirms access and service scope before manual assignment; the photographer records completion, the editor receives the same job brief, and a human reviewer checks the deliverables before release. That sequence is the intended PhotoTrackly workflow, not a claim of measured savings or released functionality."
        ]
      }
    ],
    "closing": "Start with five recently completed jobs and compare estimated versus actual work. Use the findings to improve the next booking brief or handoff before buying another tool. PhotoTrackly early-access registration is free and does not guarantee immediate access.",
    "sources": [
      {
        "label": "University of Maine Cooperative Extension — Basic Pricing Strategies for Small Businesses",
        "url": "https://extension.umaine.edu/publications/3000e/"
      },
      {
        "label": "Xero Australia — Overhead costs and allocation",
        "url": "https://www.xero.com/au/guides/what-are-overheads/"
      }
    ],
    "related": [
      {
        "href": "/resources/shoot-to-delivery-checklist",
        "label": "Use the shoot-to-delivery checklist"
      },
      {
        "href": "/real-estate-media-production-management",
        "label": "Explore the planned production workspace"
      }
    ],
    "publishedAt": "2026-11-26T02:31:00Z"
  },
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
      { href: '/insights/deliver-floor-plans-with-property-photography', label: 'Plan the floor-plan review and client delivery handoff' },
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
    title: 'Compare Real Estate Photography Software',
    description: 'Compare real estate photography software for scheduling, editing, QC and delivery, with primary-source evidence for Aryeo, Tonomo, Spiro and more.',
    answer: 'To compare real estate photography software, start with the bottleneck: booking and scheduling, photographer-to-editor production, gallery delivery or whole-business coordination. Test one property job with photos, drone and floor plans through each shortlisted tool. Check handoff ownership, actual capability, regional availability, price and migration work; a vendor-published feature is not a proven trial result.',
    intro: 'A long feature list does not show whether a coordinator can find the missing floor plan on a busy day. A realistic test job reveals where people would still need separate messages, spreadsheets and folders.',
    image: '/images/insights/evaluate-property-media-workflow-software.webp',
    imageAlt: 'Studio team comparing a property workflow with a sample job brief',
    readingMinutes: 8,
    sections: [
      {
        heading: 'Create a test job that exposes handoffs',
        paragraphs: ['Use a fictional property and no real client data. Order photos, drone imagery and a floor plan. Set an appointment, assign a photographer, upload source files, send one item back for revision, approve the others, then prepare a client handoff.', 'Add a realistic change halfway through: the agent moves the appointment or changes a service. Ask whether everyone sees the updated scope and whether the original decision remains traceable.'],
        bullets: ['Coordinator: can I see the next action and the person responsible?', 'Photographer: can I find the current access and service brief?', 'Editor: do I know what files and output are expected?', 'Reviewer: can I approve some items while requesting changes on others?', 'Delivery owner: can I tell exactly what is ready for the client?'],
      },
      {
        heading: 'Compare the same journey across tools',
        paragraphs: [
          'Run the same job in your current stack and each candidate tool. A simple 0–2 score for each handoff can make discussion concrete: 0 means the team must reconstruct it elsewhere; 1 means the information is present but awkward; 2 means the next person can act from the job record. The score is an internal decision aid, not an industry benchmark.',
          'As of October 2026, first-party documentation illustrates different priorities: Tonomo and Ubookr publish booking and scheduling workflows; HDPhotoHub documents order-level and product-level task ownership; Aryeo describes centralised listing media; Spiro documents hands-on quality review; Skyline OS describes photographer and editor portals; and Opsicom describes a job record connecting the property, services, schedule and files.',
          'These are vendor-published capabilities, not independently tested evaluations. Features can vary by subscription, region or product date. Demonstrate your exact workflow in a live trial, then verify support, billing, integrations and data portability for your country. PhotoTrackly itself is in development and cannot yet replace production tools.',
        ],
        bullets: [
          'Tonomo: demonstrate how a coordinator sees project status, photographer assignments and editor ownership.',
          'HDPhotoHub: compare task dependencies, due dates and who receives ready-to-work notifications.',
          'Aryeo: trace a listing with photos, video and floor plans, then test finding or re-delivering its media.',
          'Spiro: trace a human quality-review correction before a final client handoff.',
          'Skyline OS: trace a photographer accepting a job and handing RAW files to an editor, then an editor returning finals for human QC.',
          'Opsicom: confirm that property, services, price, schedule and assets stay attached to the same job without re-entry.',
          'Ubookr: test contractor online booking, changed appointments, storage and reporting within your actual Australian operating needs.',
          'Your current stack: include calendars, messaging and folders in the scorecard; compare real handoff problems rather than marketing checklists.',
          'For every vendor, label each capability demonstrated in a trial, documented by the provider, not verified, or only promised; record the evidence date and the feature tier actually offered.',
        ],
        table: { headers: ['Checkpoint', 'What to demonstrate', 'Evidence to record'], rows: [
          ['Brief to schedule', 'Property, services, time and access travel together.', 'Extra messages required'],
          ['Shoot to edit', 'Source sets and editing instructions are identifiable.', 'Missing context or manual copying'],
          ['Edit to review', 'Revision ownership and approval are separate states.', 'Unclear or duplicated decisions'],
          ['Review to delivery', 'Only agreed final media reaches the client.', 'Packaging and access checks'],
        ] },
      },
      {
        heading: 'Choose a software category and check migration requirements',
        paragraphs: [
          'Booking-first solutions emphasise client ordering and team calendars. Post-production-focused tools emphasise RAW files, editor queues, revisions and QC. Delivery-focused tools organise approved media for agents. Broad operations systems connect multiple stages around the same property job. These categories overlap: never infer that one tool lacks a feature just because its marketing highlights another.',
          'If you already have a booking portal but cannot tell which editor owns a revision, trial production and QC evidence first. If the team is double-booked, trial calendar and assignment controls. If every stage is disconnected, check whether the vendor stores the brief, source assets, decision history and final handoff on a common job record.',
          'A good demo can still fail during migration. Ask how existing clients, ordered services, historical deliveries, appointments and files move into the product, which integrations are live, how data is exported, and which functions stay manual. Check your actual country, currency and tax requirements before adopting pricing or payment claims.',
          'Include the people who perform the handoffs in the evaluation. A studio owner may like the dashboard while the editor still lacks the instructions needed to complete the work.',
        ],
      },
      {
        heading: 'Ten workflows to test before you buy project-management software',
        paragraphs: [
          'A buyer-intent demo should reproduce the moments where property-media work actually breaks. Use the same fictional job in every product so the comparison measures handoffs rather than presentation quality.',
          'For each test, record whether the workflow is demonstrated in the product, documented only by the vendor, requires a workaround, or remains unknown. This makes the evaluation useful to an operations buyer and keeps marketing claims separate from observed evidence.',
        ],
        bullets: [
          '1. New order: create one property with photos, drone and a floor plan without duplicating the job.',
          '2. Scheduling: assign a qualified photographer and then reschedule the appointment without leaving stale instructions.',
          '3. Source intake: identify one missing source set before editing begins.',
          '4. Editor assignment: show who owns each deliverable and when it is due.',
          '5. Revision: return one item for correction while the other deliverables keep their approved state.',
          '6. QC: distinguish uploaded, reviewed, revision-needed and approved files.',
          '7. Partial delivery: release approved photos while keeping an outstanding video visibly open only when the client has agreed.',
          '8. Version recovery: locate the exact version that was previously approved and delivered.',
          '9. Exception handling: surface a blocked or overdue job without manually opening every project.',
          '10. Final handoff: verify the client-facing package, record what was sent and preserve the delivery event.',
        ],
      },
      {
        heading: 'Make a decision with known gaps',
        paragraphs: [
          'Record which problems the tool solves now, which require a workaround, and which are only planned. Set a short trial outcome such as “a coordinator can answer the next owner and readiness for every test job.” Do not choose solely on a generic AI label or a promised automation.',
          'Keep a source-and-status ledger for each comparison claim. Separate (1) vendor documentation checked on a recorded date, (2) a feature actually observed by your team in a working trial, (3) functionality only on a provider roadmap, and (4) anything still unknown. Do not promote a third-party marketing description to a demonstrated result.',
          'Use the same fictional photos-plus-drone-plus-floor-plan job to compare checkpoints. For example, note whether a missing floor-plan file blocks only that deliverable or whether the whole job appears ready: record who noticed, who owned the fix and which final version the reviewer approved. The result is a reusable evaluation method, not measured PhotoTrackly customer performance.',
        ],
      },
    ],
    vendorEvidence: [
      {
        vendor: 'Skyline OS',
        publishedCapability: 'Its team-management page describes photographer accept/decline assignments and RAW upload, plus an editor portal for retrieving RAW files, uploading edits and submitting work for human QC.',
        testQuestion: 'Can a real order trace photographer acceptance, RAW receipt, editor assignment, revision notes and final approval without shifting between tools?',
        sourceUrl: 'https://www.skylineos.app/features/team-management',
      },
      {
        vendor: 'Opsicom',
        publishedCapability: 'Its jobs page describes a booking becoming a job with the client, property, services, price and schedule attached, with files and history added as production progresses.',
        testQuestion: 'When a service, appointment or file version changes, does that same job record preserve the responsible owner, decision and final client handoff?',
        sourceUrl: 'https://www.opsicom.com/product/jobs',
      },
      {
        vendor: 'Ubookr',
        publishedCapability: 'Its real-estate industry page describes online contractor calendar bookings, changing bookings, mobile job details, notifications, reporting and digital asset storage.',
        testQuestion: 'Can an Australian studio schedule contractors, change a property appointment, export activity and deliver the right media without losing current job details?',
        sourceUrl: 'https://ubookr.com/industries/software-for-real-estate',
      },
      {
        vendor: 'Tonomo',
        publishedCapability: 'Its scheduling pages describe automated assignments, calendar availability, travel-aware scheduling and support for multiple photographers on a shoot.',
        testQuestion: 'Which service/skill/location rules can a coordinator override, and what happens after a late reschedule?',
        sourceUrl: 'https://www.tonomo.io/features/scheduling',
      },
      {
        vendor: 'HDPhotoHub',
        publishedCapability: 'Its help center documents order-level and product-level workflow tasks, assigned owners, due dates and ready-to-work email notifications.',
        testQuestion: 'Can editors and reviewers see which task is ready, overdue, blocked or waiting on another service?',
        sourceUrl: 'https://support.hdphotohub.com/hc/en-us/articles/37685771899668-Using-Workflow-Tasks',
      },
      {
        vendor: 'Aryeo',
        publishedCapability: 'Its content-management page describes centralized listing media including photography, video, 3D tours and floor plans, with search and re-delivery.',
        testQuestion: 'Can a team recover the correct approved file version when an agent asks for a revision after delivery?',
        sourceUrl: 'https://www.aryeo.com/products/content-management',
      },
      {
        vendor: 'Spiro',
        publishedCapability: 'Its help center describes a manual QC flow: inspect a property gallery, correct images, re-upload fixed files and initiate client delivery.',
        testQuestion: 'Can a reviewer tell exactly which assets were revised and what was approved before releasing the client package?',
        sourceUrl: 'https://support.spiro.media/en/articles/9325414-qc-and-delivery-process-in-spiro',
      },
    ],
    sources: [
      { label: 'Skyline OS — Team management and editor portals', url: 'https://www.skylineos.app/features/team-management' },
      { label: 'Opsicom — Project and job management', url: 'https://www.opsicom.com/product/jobs' },
      { label: 'Ubookr — Real estate booking and contractor scheduling', url: 'https://ubookr.com/industries/software-for-real-estate' },
      { label: 'Tonomo — Real estate photography project management', url: 'https://www.tonomo.io/features/project-management' },
      { label: 'Tonomo — Scheduling software', url: 'https://www.tonomo.io/features/scheduling' },
      { label: 'HDPhotoHub — Using Workflow Tasks', url: 'https://support.hdphotohub.com/hc/en-us/articles/37685771899668-Using-Workflow-Tasks' },
      { label: 'Aryeo — Real estate media content management', url: 'https://www.aryeo.com/products/content-management' },
      { label: 'Spiro — Real estate media business software', url: 'https://spiro.media/' },
      { label: 'Spiro — QC and delivery process', url: 'https://support.spiro.media/en/articles/9325414-qc-and-delivery-process-in-spiro' },
    ],
    closing: 'Shortlist for your real bottleneck and local market, then run the same fictional job through every candidate. Record each demo result, current tier, export options and remaining manual work. These vendor pages are sources to verify, not proof of customer outcomes. PhotoTrackly remains in development.' ,
    related: [
      { href: '/resources/shoot-to-delivery-checklist', label: 'Use the shoot-to-delivery checklist' },
      { href: '/real-estate-photography-business-software', label: 'See PhotoTrackly’s planned first-release scope' },
    ],
  },
];
const published = (articles: Insight[], publishedAt: string): Insight[] => articles.map(article => ({ ...article, publishedAt: article.publishedAt ?? publishedAt }));
export const insights: Insight[] = [
  ...published(originalInsights, '2026-10-02T07:12:50Z'),
  ...published(dayOneInsights, '2026-10-02T09:42:53Z'),
  ...published(dayTwoInsights, '2026-10-02T09:50:25Z'),
  ...published(dayThreeInsights, '2026-10-03T02:38:00Z'),
  ...published(dayFourInsights, '2026-10-04T02:22:23Z'),
  ...published(dayFiveInsights, '2026-10-05T02:04:27Z'),
  ...published(daySixInsights, '2026-10-06T02:10:20Z'),
  ...published(daySevenInsights, '2026-10-07T02:00:00Z'),
  ...published(commercialGrowthInsights, '2026-11-11T09:10:00Z'),
];
export const insightSlugs = insights.map(article => article.slug);
export function getInsight(slug: string) { return insights.find(article => article.slug === slug); }
