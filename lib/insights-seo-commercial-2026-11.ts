import type { Insight } from './insights';

// Draft PR for editorial review. Vendor information describes published positioning,
// not a hands-on product test. Never imply PhotoTrackly is generally available.
export const seoCommercialInsights: Insight[] = [
  {
    slug: 'tonomo-alternatives-real-estate-photography',
    category: 'Buying guide',
    title: 'Tonomo Alternatives for Real Estate Photography Teams',
    description: 'Compare Tonomo alternatives for real estate photography teams using booking, assignments, editing, client delivery and pricing evaluation questions.',
    answer: 'To compare Tonomo alternatives, identify your biggest workflow problem, then run the same fictional property order through Tonomo and shortlisted systems such as Aryeo, HDPhotoHub and Spiro. Record what each vendor documents, what you personally tested, what costs extra, and what still requires manual coordination.',
    intro: 'A studio does not need a longer list of software logos. It needs to know whether a replacement can handle the work its real team performs between booking and final delivery. This guide offers evaluation questions rather than an unverified winner.',
    image: '/images/insights/evaluate-property-media-workflow-software.webp',
    imageAlt: 'Property media team comparing workflow software against a sample production job',
    readingMinutes: 7,
    sections: [
      {
        heading: 'Start with the reason you are looking beyond Tonomo',
        paragraphs: [
          'Tonomo publicly positions its product around booking, scheduling, project management and media delivery. It would be inaccurate to call it just an appointment calendar. First write down the step your current stack handles poorly: incoming orders, assigning the right photographer, receiving source files, reviewing editor output, or packaging a client delivery.',
          'The replacement should be tested against that step. A product that helps clients book faster may not improve quality-control decisions, while a detailed production board may not replace online scheduling.',
        ],
        bullets: ['List the three workflow failures your team encounters most often.', 'Use one fictional property with photos, drone images and a floor plan as a repeatable test.', 'Ask every vendor to demonstrate the same reschedule, revision and delivery exception.'],
      },
      {
        heading: 'Which alternative is worth a closer look?',
        paragraphs: [
          'Aryeo publishes real-estate media and content-management capabilities. HDPhotoHub documents workflow tasks within its property-media operations system. Spiro describes quality-control and delivery processes. These are distinct starting points for evaluation, not claims that the products have identical functionality or pricing.',
          'PhotoTrackly is developing a connected property-media workflow for selected private-beta customers. Its planned direction covers scheduling, people and job coordination, production, and client delivery, but it should not be scored as a fully released alternative.',
        ],
        table: { headers: ['Candidate', 'What to investigate', 'Evidence required'], rows: [
          ['Tonomo', 'Booking, scheduling, assignments and delivery', 'Current tier and a complete demo job'],
          ['Aryeo', 'Media, listing/client experience and handoffs', 'Live demo for your services and region'],
          ['HDPhotoHub', 'Order-level workflow tasks and dependencies', 'Task-owner and delivery tests'],
          ['Spiro', 'Review, QC and final delivery sequence', 'Revision and approval demonstration'],
        ] },
      },
      {
        heading: 'Test the complete handoff, not just a booking page',
        paragraphs: [
          'Create a sample listing, book an appointment, assign the photographer, then change the service brief. After the shoot, leave one source file missing, assign an editor, request a correction, and approve only the completed deliverables. Finally open the delivery as if you were the agent receiving it.',
          'Score each step as demonstrated, documented only, unverified, or unavailable. Record the edition and date. Do not infer a capability from a marketing screenshot.',
        ],
        bullets: ['Can a coordinator identify the next owner and due time?', 'Can photographers and editors access the latest instructions?', 'Can a reviewer distinguish uploaded, approved and revision-needed files?', 'Can the client receive an intentionally partial delivery with the exception recorded?'],
      },
      {
        heading: 'Include pricing and migration in the decision',
        paragraphs: [
          'Ask about subscription commitments, per-order charges, staff seats, delivery storage, payment fees, exports, and regional support. An attractive published starting price may not cover the workflow you actually need.',
          'Before switching, export a fictional job and verify what survives: client records, service definitions, historical orders, files, and delivery references. Run a short parallel trial instead of moving every real client immediately.',
        ],
      },
    ],
    closing: 'Choose the system that passes your specific handoff tests with acceptable cost and migration risk—not the one with the most unchecked feature claims.',
    sources: [
      { label: 'Tonomo — project management', url: 'https://www.tonomo.io/features/project-management' },
      { label: 'Aryeo — content management', url: 'https://www.aryeo.com/products/content-management' },
      { label: 'HDPhotoHub — workflow tasks', url: 'https://support.hdphotohub.com/hc/en-us/articles/37685771899668-Using-Workflow-Tasks' },
      { label: 'Spiro — QC and delivery process', url: 'https://support.spiro.media/en/articles/9325414-qc-and-delivery-process-in-spiro' },
    ],
    related: [
      { href: '/insights/evaluate-property-media-workflow-software', label: 'Use the broader real estate photography software buying guide' },
      { href: '/insights/real-estate-photography-software-pricing-models', label: 'Compare software pricing models' },
      { href: '/real-estate-photography-workflow-software', label: 'Review PhotoTrackly’s planned workflow' },
    ],
  },
  {
    slug: 'real-estate-photography-software-pricing-models',
    category: 'Buying guide',
    title: 'Real Estate Photography Software Pricing: Per Job vs Subscription',
    description: 'Compare per-job and monthly real estate photography software pricing with illustrative break-even calculations and questions about hidden costs.',
    answer: 'Compare total monthly cost at your realistic order volume. Per-job fees may fit unpredictable demand; subscription plans may cost less at steady higher volume. The break-even job count is the subscription cost divided by the per-job charge, adjusted for seats, limits, extra services and transaction fees.',
    intro: 'A pricing page rarely tells you the full cost of coordinating photographers, editors, media delivery and customer communications. Compare the cost of the whole operating workflow before deciding.',
    image: '/images/insights/why-property-media-workflows-fragment.webp',
    imageAlt: 'Property media team reviewing a job-based workflow and operating costs',
    readingMinutes: 6,
    sections: [
      {
        heading: 'Understand three common pricing structures',
        paragraphs: [
          'Per-job pricing varies with the number of completed orders or listings, but you need to know the billing event and whether revisions or extra media services count separately. Monthly and annual subscriptions make the base charge predictable but may have usage caps or seat limits. Hybrid plans combine a base subscription with per-order, storage or transaction charges.',
          'Ask for a written quote matching your actual mix of property photos, floor plans, video, drones and editor seats. Comparing only the lowest advertised tier can hide operational costs.',
        ],
        bullets: ['Per-order: clarify what constitutes one billed order.', 'Subscription: record contract term, permitted jobs and included staff.', 'Hybrid: add transactions, storage, SMS, payment and integration fees.'],
      },
      {
        heading: 'Calculate a break-even volume using your own numbers',
        paragraphs: [
          'For illustration only, suppose one system charges $5 per completed job and another charges $150 monthly for otherwise equivalent limits. At 10 jobs the first costs $50, at 30 jobs both cost $150, and at 60 jobs the subscription costs less. These are hypothetical amounts, not vendor prices.',
          'The arithmetic is 150 divided by 5, or 30 jobs per month. Now include photographer seats, editor access, annual commitments and payment-processing fees. Recalculate for your slow month as well as your busiest month.',
        ],
        table: { headers: ['Illustrative monthly volume', 'Hypothetical $5/job', 'Hypothetical $150/month'], rows: [
          ['10 jobs', '$50', '$150'],
          ['30 jobs', '$150', '$150'],
          ['60 jobs', '$300', '$150'],
        ] },
      },
      {
        heading: 'Check whether a cheaper license creates expensive handoffs',
        paragraphs: [
          'Software expense is only one part of the decision. If production staff must manually reconcile calendars, folders, editing notes and delivery emails, the additional coordination may outweigh a lower license price.',
          'For one typical job, record where the coordinator re-enters data, where an editor needs to request clarification, and whether the reviewer can find the latest approved version. Estimate this effort using your own labor cost rather than claiming an industry average.',
        ],
      },
      {
        heading: 'Ask these questions before signing',
        paragraphs: [
          'Request a current quote in your country and currency. Confirm the plan for seasonal demand, cancellation and trial terms, data export, storage retention, extra editors, branded delivery, support hours, taxes and future price changes.',
          'PhotoTrackly is in private beta and is not presenting a verified general-availability price in this comparison. Join early access to register interest rather than assuming any commercial plan exists.',
        ],
        bullets: ['What precisely is billable?', 'What happens if orders double for two months?', 'Which staff and integrations are included?', 'How do we export client and job records if we leave?'],
      },
    ],
    closing: 'Compare total cost over realistic volume scenarios, then verify that the workflow itself removes enough manual work to justify the spend.',
    related: [
      { href: '/insights/tonomo-alternatives-real-estate-photography', label: 'Compare property media software alternatives' },
      { href: '/insights/evaluate-property-media-workflow-software', label: 'Use the common job-based evaluation checklist' },
      { href: '/real-estate-photography-business-software', label: 'Explore PhotoTrackly’s planned business workspace' },
    ],
  },
  {
    slug: 'manage-real-estate-photographers-editors-jobs',
    category: 'Team operations',
    title: 'How to Manage Multiple Real Estate Photographers and Editors',
    description: 'Coordinate property photographers, editors and job deadlines with explicit ownership, source-file handoffs, QC and delivery-ready decisions.',
    answer: 'Keep one record for each property job, but track each ordered deliverable separately. Every transition from booking to photographer, editor, reviewer and delivery needs a named next owner, the current instructions, a due time and proof that the handoff is complete.',
    intro: 'When several photographers and editors are working on property orders at once, jobs do not usually disappear—they lose ownership or context between calendars, chats and folders. A repeatable handoff method helps the coordinator see what is genuinely blocked.',
    image: '/images/insights/property-media-operations-dashboard.webp',
    imageAlt: 'Coordinator reviewing photographers, editing work and deadlines on a property-media job board',
    readingMinutes: 7,
    sections: [
      {
        heading: 'Separate booking status from job completion',
        paragraphs: [
          'An appointment in the calendar confirms when the shoot should happen. It does not prove that the agreed photos, drone images, floor plan and video have been edited, checked and delivered. Use a shared property-job identifier and an explicit state for each service.',
          'A simple record includes client, property reference, time zone, ordered services, assigned photographer, expected file sets, editor, reviewer, promised delivery point, next action and owner. Protect private access instructions instead of putting them in unrestricted example boards.',
        ],
      },
      {
        heading: 'Define who owns every handoff',
        paragraphs: [
          'The coordinator owns the accuracy of the brief before the photographer travels. The photographer confirms capture or records an exception. The production coordinator checks that expected source files arrived. The editor hands back identifiable versions. The reviewer records approval or a specific correction. The delivery owner checks the recipient-facing package.',
          'These roles can be performed by the same person in a small studio. The point is that responsibility changes explicitly and a finished task has observable evidence.',
        ],
        table: { headers: ['Stage', 'Next owner', 'Evidence'], rows: [
          ['Booking and brief', 'Coordinator', 'Scope and access confirmed'],
          ['Shoot and file receipt', 'Photographer / production', 'Capture exceptions and files reconciled'],
          ['Editing and review', 'Editor / reviewer', 'Version identified and accepted or returned'],
          ['Client delivery', 'Delivery owner', 'Package and client access checked'],
        ] },
      },
      {
        heading: 'Run a short exception-first production review',
        paragraphs: [
          'Start the daily review with jobs due soon and jobs missing an owner. Ask which input prevents the next action rather than calling a generic status meeting. Assign a decision deadline whenever a blocker cannot be resolved immediately.',
          'For example, if the photos are approved but the floor plan needs a label correction, do not mark the entire order completed. Record the revision owner, next review time and whether the client has agreed to partial delivery.',
        ],
        bullets: ['Due soon: are all required services approved?', 'Blocked: what input or decision is missing?', 'Unowned: who will take the next action?', 'Changed: who must acknowledge the updated brief?'],
      },
      {
        heading: 'Measure whether coordination is improving',
        paragraphs: [
          'Once a week, count missing files, unowned edits, incorrect versions, late changes and incomplete client handoffs. Use the repeated failure to improve the brief or handoff rule. Do not treat invented example figures as observed customer outcomes.',
          'This process works with a spreadsheet and shared folders today. PhotoTrackly is developing a connected property-media workspace, but the practices do not require subscribing to a product.',
        ],
      },
    ],
    closing: 'A reliable team workflow lets anyone answering a client question identify what happens next, who owns it and what is ready for delivery.',
    related: [
      { href: '/insights/schedule-multiple-property-photographers', label: 'Schedule several property photographers' },
      { href: '/insights/property-media-job-triage', label: 'Run a property job board triage' },
      { href: '/real-estate-media-production-management', label: 'Explore the planned production workflow' },
    ],
  },
];
