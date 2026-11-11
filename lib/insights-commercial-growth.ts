import type { Insight } from './insights';

// Commercial-intent publishing batch: software-category education and migration planning.
// Claims about third-party products are sourced to vendor documentation and should be
// re-checked before future substantive updates.
export const commercialGrowthInsights: Insight[] = [
  {
    slug: 'real-estate-photography-crm-vs-production-management',
    category: 'Buying guide',
    title: 'Real Estate Photography CRM vs Production Management Software',
    description: 'Compare real estate photography CRM and production-management software by the work each system owns: clients, booking, jobs, editing, QC and delivery.',
    answer: 'A real estate photography CRM mainly organizes customer relationships, sales activity, booking and communication. Production-management software organizes what happens after a job exists: assignments, source files, editor handoffs, revisions, quality control, approval and delivery readiness. Growing studios often need both capabilities, whether they come from one platform or a connected stack.',
    intro: 'Searching for a real estate photography CRM can mean several different problems. One studio needs a better way to manage agents and bookings. Another already books work successfully but cannot see which photographer, editor or reviewer owns the next step. Choosing the right category starts with the bottleneck, not the software label.',
    image: '/images/insights/property-media-operations-dashboard.webp',
    imageAlt: 'Property media team comparing client relationship management with production workflow management',
    readingMinutes: 8,
    sections: [
      {
        heading: 'What does a real estate photography CRM usually manage?',
        paragraphs: [
          'CRM systems are designed around the relationship with the customer. In a property-media business, that commonly means agent or brokerage records, enquiries, sales follow-up, booking details, communication history, pricing context and repeat-business activity.',
          'Some industry platforms extend beyond CRM into scheduling, payments, project tracking and media delivery. Tonomo, for example, currently describes a platform that combines booking, scheduling, project management, delivery and reporting. That does not change the core buying question: which parts of your workflow need a reliable system of record?',
        ],
        bullets: [
          'Customer and brokerage records.',
          'Lead and sales follow-up.',
          'Booking or order intake.',
          'Communication and account context.',
          'Pricing, invoicing or payment context where supported.',
        ],
      },
      {
        heading: 'What does production-management software manage?',
        paragraphs: [
          'Production management starts from the job that must be completed. The important record is not only who bought the service, but what has to happen next, who owns it and what evidence shows that the work is ready to move forward.',
          'For a photos-plus-drone-plus-floor-plan order, production management should make it possible to see that the photographer finished capture, the drone files arrived, the editor is still waiting on the floor-plan source, the photo set passed review and the whole order is not yet ready for final delivery.',
        ],
        table: { headers: ['Workflow question', 'CRM-oriented answer', 'Production-oriented answer'], rows: [
          ['Who is the customer?', 'Agent, brokerage, account and relationship history', 'Customer context attached to the job'],
          ['What did they order?', 'Order or booking record', 'Tracked deliverables and current states'],
          ['Who acts next?', 'May require a task or note', 'Named next-action owner and due point'],
          ['Are the files ready?', 'Usually outside the CRM core', 'Source, edit, review and approval state'],
          ['Can we deliver?', 'Customer communication can be triggered', 'Delivery gate checks approved deliverables'],
        ] },
      },
      {
        heading: 'When does a studio need CRM, production management or both?',
        paragraphs: [
          'A solo photographer with a small client list may get more value from booking and relationship tools first. A studio with several photographers and editors can have the opposite problem: sales is healthy, but the owner spends the day reconstructing production status from chat messages, calendars and folders.',
          'Use one week of real work as the test. Count how often the team cannot answer a customer question versus how often it cannot answer a production question. If the dominant uncertainty is who the customer is, what they booked or when to follow up, prioritize CRM capability. If the uncertainty is who owns the next handoff, which version is approved or whether the order is ready to deliver, prioritize production management.',
        ],
      },
      {
        heading: 'How should you compare real estate photography software?',
        paragraphs: [
          'Do not compare products with a generic feature checklist. Run the same fictional property job through every candidate and record where the team still needs a separate message, spreadsheet or folder to finish the work.',
          'Ask vendors to demonstrate the exact stages you care about. Tonomo documents integrated booking and order management; HDPhotoHub documents workflow tasks; Aryeo documents centralized media management; Spiro documents a human QC and delivery process. Those published capabilities are useful starting evidence, but your own trial should verify the current product tier, region and workflow.',
        ],
        bullets: [
          'Create the client and property job.',
          'Book or schedule the shoot.',
          'Assign the correct photographer.',
          'Hand source files to an editor.',
          'Request and resolve one revision.',
          'Approve only part of a multi-service order.',
          'Prepare and verify the client delivery.',
        ],
      },
      {
        heading: 'Where does PhotoTrackly fit?',
        paragraphs: [
          'PhotoTrackly is being developed around the operational record that connects the property job, people, production handoffs, review and delivery. It should not be treated as a released CRM, booking platform or production replacement today.',
          'The intended differentiation is the job-level coordination problem: make the next action, owner, blocker and readiness state visible across the shoot-to-delivery workflow. A growing studio may still use dedicated CRM, accounting, storage or booking tools alongside that workflow.',
        ],
      },
    ],
    closing: 'Choose CRM for relationship and booking visibility, production management for job execution visibility, and a connected stack when your studio needs both.',
    sources: [
      { label: 'Tonomo — platform and real estate photography CRM positioning', url: 'https://www.tonomo.io/' },
      { label: 'Tonomo — integrated booking workflow', url: 'https://support.tonomo.io/articles/1300922507-how-does-integrated-booking-work-in-tonomo' },
      { label: 'Tonomo — order management workflow', url: 'https://support.tonomo.io/articles/2353023168-overview-dashboard' },
      { label: 'HDPhotoHub — workflow tasks', url: 'https://support.hdphotohub.com/hc/en-us/articles/37685771899668-Using-Workflow-Tasks' },
      { label: 'Aryeo — content management', url: 'https://www.aryeo.com/products/content-management' },
      { label: 'Spiro — QC and delivery process', url: 'https://support.spiro.media/en/articles/9325414-qc-and-delivery-process-in-spiro' },
    ],
    related: [
      { href: '/insights/evaluate-property-media-workflow-software', label: 'Compare workflow software with a real test job' },
      { href: '/real-estate-photography-business-software', label: 'Explore PhotoTrackly’s planned business workflow' },
    ],
  },
  {
    slug: 'booking-software-vs-workflow-software-real-estate-photography',
    category: 'Buying guide',
    title: 'Booking Software vs Workflow Software for Real Estate Photography',
    description: 'Learn the difference between booking software and workflow software for real estate photography teams, and when a growing studio needs both.',
    answer: 'Booking software answers when, where, what service and which photographer. Workflow software answers what happens after the booking: source-file intake, editing, quality control, revisions, approvals, delivery and the next owner. If your team books work smoothly but loses visibility after the shoot, adding more booking features will not solve the production bottleneck.',
    intro: 'Booking is one moment in a much longer property-media job. The most common software mistake is buying more scheduling automation when the real operational problem begins after the photographer leaves the property.',
    image: '/images/insights/multi-service-shoot-scheduling.webp',
    imageAlt: 'Booking calendar connected to a property media production workflow from shoot through delivery',
    readingMinutes: 8,
    sections: [
      {
        heading: 'What should real estate photography booking software do?',
        paragraphs: [
          'Booking software should help the client or coordinator choose a service, property, date and time while respecting the team’s real availability and operating rules. For multi-service orders, the booking should preserve the scope that the assigned photographer needs to see.',
          'Current Tonomo documentation describes integrated booking that uses photographer availability, skillsets, service areas, scheduling duration and travel rules. That is a good example of the booking problem being solved at the point where an appointment is created.',
        ],
        bullets: [
          'Collect the property and ordered services.',
          'Offer valid appointment times.',
          'Match photographers to skills, geography and availability.',
          'Account for duration and travel constraints.',
          'Send the confirmed appointment and current brief.',
        ],
      },
      {
        heading: 'What should workflow software do after the booking?',
        paragraphs: [
          'Once the appointment exists, the operational questions change. Did every required source file arrive? Which editor owns the job? Is a revision blocking one deliverable or the whole order? Has a human approved the final output? What exactly was delivered?',
          'A workflow system should keep these decisions attached to the same job so the team does not rebuild context from separate chats, spreadsheets, folders and inboxes.',
        ],
        table: { headers: ['Stage', 'Booking software question', 'Workflow software question'], rows: [
          ['Before shoot', 'When and who?', 'Is the current brief complete?'],
          ['After shoot', 'Appointment is complete', 'Did all source sets arrive?'],
          ['Editing', 'Usually outside booking', 'Who owns each deliverable and due time?'],
          ['Review', 'Usually outside booking', 'What is approved versus revision-needed?'],
          ['Delivery', 'May notify the client', 'Is the complete agreed package ready?'],
        ] },
      },
      {
        heading: 'How do you know which problem you actually have?',
        paragraphs: [
          'Look at your last ten delayed or stressful jobs. If the cause was double booking, unavailable photographers, bad time estimates or travel conflicts, improve booking and scheduling. If the cause was missing files, editor confusion, revision ownership, QC or incomplete delivery, improve the post-booking workflow.',
          'A studio can have both problems. The important decision is to avoid treating the calendar as the whole operating system. A scheduled job can still be completely invisible from a production-readiness perspective.',
        ],
      },
      {
        heading: 'What should you test before buying?',
        paragraphs: [
          'Use one fictional job with photos, drone and a floor plan. Book it, reschedule it, change one service, complete the shoot, send one deliverable back for revision and approve the others. Then ask whether the system still makes the current scope and next owner obvious.',
          'Test the same workflow in your current stack and in each candidate tool. The best option is the one that removes the handoff you actually struggle with, not the one with the longest feature list.',
        ],
        bullets: [
          'Late reschedule without stale instructions.',
          'Different skills for photo, drone and floor-plan work.',
          'Missing source set after the shoot.',
          'One deliverable in revision while others are approved.',
          'Partial delivery versus full-order readiness.',
          'Final client handoff with an auditable record.',
        ],
      },
      {
        heading: 'Can one product handle booking and workflow?',
        paragraphs: [
          'Yes, some platforms intentionally span booking, scheduling, project management and delivery. Tonomo currently markets that broad model. Other teams may prefer specialized tools connected by process and integrations.',
          'Do not assume “all-in-one” is automatically better or worse. Verify whether the system gives the people doing the actual work enough context at each handoff. A booking feature is valuable only if the production team can still see the current job after the appointment is created.',
        ],
      },
    ],
    closing: 'Booking software gets the job onto the calendar; workflow software gets the job safely from the calendar to approved client delivery.',
    sources: [
      { label: 'Tonomo — integrated booking', url: 'https://support.tonomo.io/articles/1300922507-how-does-integrated-booking-work-in-tonomo' },
      { label: 'Tonomo — service and scheduling configuration', url: 'https://support.tonomo.io/articles/4626978536-services' },
      { label: 'Tonomo — order management', url: 'https://support.tonomo.io/articles/2353023168-overview-dashboard' },
      { label: 'HDPhotoHub — workflow tasks', url: 'https://support.hdphotohub.com/hc/en-us/articles/37685771899668-Using-Workflow-Tasks' },
    ],
    related: [
      { href: '/real-estate-photography-scheduling-software', label: 'Explore the planned scheduling workflow' },
      { href: '/real-estate-photography-workflow-software', label: 'Explore the planned shoot-to-delivery workflow' },
    ],
  },
  {
    slug: 'move-real-estate-photography-business-from-spreadsheets-dropbox-chat',
    category: 'Operations',
    title: 'How to Move a Real Estate Photography Business Beyond Spreadsheets, Dropbox and Chat',
    description: 'A practical migration plan for property-media teams moving from spreadsheets, Dropbox and chat into a connected job workflow without losing control.',
    answer: 'Do not replace every tool at once. First define one job record with the property, ordered services, appointment, owners, source files, production states, approvals and delivery evidence. Then migrate one handoff at a time: booking-to-shoot, shoot-to-edit, edit-to-review and review-to-delivery. Keep existing storage or communication tools where they still work, but stop using them as the only source of job status.',
    intro: 'Spreadsheets, Dropbox and chat are not inherently bad tools. They become a scaling problem when each one contains a different part of the truth and the owner must mentally join them together for every property.',
    image: '/images/insights/outgrown-spreadsheets-property-media.webp',
    imageAlt: 'Property media workflow moving from spreadsheets folders and chat into one connected job record',
    readingMinutes: 9,
    sections: [
      {
        heading: 'What breaks first in a fragmented property-media stack?',
        paragraphs: [
          'The first failure is usually not storage capacity. It is context. The calendar knows when the shoot happens, the spreadsheet knows the client and status, Dropbox knows where files live, and chat knows why the editor is waiting. No single place can answer what happens next.',
          'That fragmentation creates hidden coordination work: copying updates, checking whether someone saw a message, comparing file versions and asking the owner to reconstruct the latest decision.',
        ],
        table: { headers: ['Tool', 'What it does well', 'What it should not be the only source for'], rows: [
          ['Spreadsheet', 'Lists jobs and basic fields', 'Live ownership, file state and approval history'],
          ['Dropbox or Drive', 'Stores and transfers files', 'Current job status and decision ownership'],
          ['Chat', 'Fast alerts and discussion', 'Authoritative instructions and approvals'],
          ['Calendar', 'Time and availability', 'Production readiness after the shoot'],
        ] },
      },
      {
        heading: 'Build the job record before you migrate tools',
        paragraphs: [
          'Define the information that must stay together for one property: customer, property, ordered services, appointment, access notes, assignments, source-file state, editor owner, review state, revisions, approved versions and delivery event.',
          'This record can start in a carefully designed spreadsheet. The important step is deciding which fields are authoritative and which systems may reference them. Migration becomes much safer once the team agrees what “the job” actually contains.',
        ],
        bullets: [
          'Stable job identifier and property label.',
          'Ordered deliverables rather than one generic status.',
          'Current next action and owner.',
          'Links to source and working files.',
          'Review, revision and approval state.',
          'Client-delivery record and remaining exceptions.',
        ],
      },
      {
        heading: 'Migrate one handoff at a time',
        paragraphs: [
          'Start with the handoff that causes the most repeated checking. If editors regularly wait for incomplete uploads, standardize shoot-to-edit first. If clients receive partial orders accidentally, standardize review-to-delivery first.',
          'Run the old and new process together for a small batch of fictional or low-risk internal test jobs. Define an exit condition before moving the next handoff—for example, every editor-ready job has a complete source manifest, named owner and current instruction set.',
        ],
        bullets: [
          'Booking → shoot: current service brief and appointment.',
          'Shoot → edit: complete source sets and editor instructions.',
          'Edit → review: identifiable proposed versions and reviewer owner.',
          'Review → delivery: explicit approval and package readiness.',
        ],
      },
      {
        heading: 'Keep Dropbox and chat, but change their role',
        paragraphs: [
          'You may still want Dropbox for large file transfer and chat for alerts. The goal is not to ban useful tools. The goal is to stop treating a folder name or message thread as the authoritative state of the job.',
          'A message can say “floor plan needs revision,” but the job record should show the floor plan in revision, the person responsible and the next review point. A folder can hold the corrected file, but the job record should identify which version was approved.',
        ],
      },
      {
        heading: 'Measure whether the migration reduces owner dependency',
        paragraphs: [
          'Track how often the team must ask the owner for status, missing context or a decision that should already be visible. Group those interruptions by root cause and fix the data field, role boundary or handoff rule that caused them.',
          'The migration is working when a coordinator can answer the next owner, blocker and delivery readiness for each active property without reconstructing several tools.',
        ],
      },
    ],
    closing: 'Modernizing the stack is not about replacing every app; it is about creating one trustworthy job story across the tools your team still needs.',
    sources: [
      { label: 'Tonomo — order management example', url: 'https://support.tonomo.io/articles/2353023168-overview-dashboard' },
      { label: 'HDPhotoHub — workflow tasks', url: 'https://support.hdphotohub.com/hc/en-us/articles/37685771899668-Using-Workflow-Tasks' },
      { label: 'Opsicom — jobs and connected project records', url: 'https://www.opsicom.com/product/jobs' },
    ],
    related: [
      { href: '/insights/outgrown-spreadsheets-property-media', label: 'Check whether your team has outgrown spreadsheets' },
      { href: '/insights/why-property-media-workflows-fragment', label: 'Understand why property-media workflows fragment' },
    ],
  },
  {
    slug: 'real-estate-photography-software-stack',
    category: 'Buying guide',
    title: 'What Software Stack Does a Growing Real Estate Photography Business Need?',
    description: 'Map the software stack for a growing real estate photography business across CRM, booking, scheduling, production, storage, QC, delivery and finance.',
    answer: 'A growing real estate photography business usually needs capabilities for customer relationships, booking, scheduling, production coordination, file storage, editing and QC, client delivery, payments and reporting. The exact tools can be separate or combined. The important design rule is that one property job must remain identifiable across the stack so people, files, decisions and delivery do not become disconnected.',
    intro: 'The best software stack is not the one with the most apps or the fewest apps. It is the one where each system has a clear responsibility and the team can still follow one property from order to final handoff.',
    image: '/images/insights/why-property-media-workflows-fragment.webp',
    imageAlt: 'Connected software stack for a real estate photography business from CRM and booking through production and delivery',
    readingMinutes: 9,
    sections: [
      {
        heading: 'What are the core software categories for a property-media business?',
        paragraphs: [
          'Most growing studios eventually need several distinct capabilities even if one vendor provides more than one of them. Think in operating responsibilities rather than product names.',
          'A broad industry platform may combine booking, scheduling, payment, project management and delivery. A specialized stack may use separate CRM, storage and production tools. Either model can work if the property job, current instructions and ownership remain clear.',
        ],
        table: { headers: ['Capability', 'Primary job', 'Failure when unclear'], rows: [
          ['CRM', 'Customer and sales relationship', 'Follow-up and account context disappear'],
          ['Booking', 'Capture order scope and appointment', 'Wrong or incomplete service request'],
          ['Scheduling', 'Match time, skills and travel', 'Double bookings or bad assignments'],
          ['Production', 'Track owners, files, edits and readiness', 'Owner becomes the status database'],
          ['Storage', 'Hold source and final media', 'Files exist without workflow context'],
          ['QC', 'Approve or return specific outputs', 'Uploaded gets confused with approved'],
          ['Delivery', 'Release the correct package', 'Wrong or incomplete client handoff'],
          ['Finance/reporting', 'Payments, payouts and business metrics', 'Operational and financial status diverge'],
        ] },
      },
      {
        heading: 'Should you buy an all-in-one platform or connect specialist tools?',
        paragraphs: [
          'An all-in-one platform reduces some integration work and can keep booking, scheduling and order status together. Tonomo currently presents this broad model and documents booking, scheduling, order management, delivery and reporting within the same platform.',
          'Specialist tools can be stronger for a particular workflow or easier to replace. The tradeoff is integration and duplicated state. If you choose a connected stack, define which system owns the customer, appointment, files, production state and financial truth.',
        ],
      },
      {
        heading: 'How should the systems connect around one property job?',
        paragraphs: [
          'Give the job a stable identifier and carry it through booking, calendar events, file destinations, editor assignments, review records and client delivery. Avoid creating unrelated IDs or naming conventions that require the team to guess whether two records belong to the same property.',
          'Store links between systems instead of copying every field everywhere. For example, the production record can link to the storage folder while retaining the source completeness, editor owner and approval state that the folder itself cannot express.',
        ],
        bullets: [
          'One property/job identity across systems.',
          'One authoritative owner for each field or state.',
          'Explicit transitions between booking, capture, editing, review and delivery.',
          'Automation only after the manual ownership rule is clear.',
        ],
      },
      {
        heading: 'What should a growing studio add first?',
        paragraphs: [
          'Prioritize the constraint that is already creating measurable coordination cost. If agents struggle to order or the team double-books photographers, improve booking and scheduling. If shoots happen on time but files and approvals disappear after capture, improve production management. If delivery corrections are frequent, improve QC and version control.',
          'Do not buy a category only because competitors use it. Review the last month of exceptions and identify the stage that creates the most owner intervention, client risk or missed capacity.',
        ],
      },
      {
        heading: 'How should AI fit into the software stack?',
        paragraphs: [
          'AI can summarize job history, classify exceptions, draft instructions or help operators search across structured records. It should not replace the underlying source of truth. An AI assistant is much more useful when the property, services, owners, files and approvals already have reliable structure.',
          'For AI-search visibility on your public website, the same principle applies: publish clear definitions, concrete examples, named entities, source-backed comparisons and direct answers that systems can quote accurately. This article is written as a buyer guide rather than a feature-claim page because PhotoTrackly is still in development.',
        ],
      },
    ],
    closing: 'Design the stack around one property job and clear system ownership; then choose products that reduce the bottleneck your team can actually observe.',
    sources: [
      { label: 'Tonomo — platform overview', url: 'https://www.tonomo.io/' },
      { label: 'Tonomo — integrated booking', url: 'https://support.tonomo.io/articles/1300922507-how-does-integrated-booking-work-in-tonomo' },
      { label: 'Tonomo — order management', url: 'https://support.tonomo.io/articles/2353023168-overview-dashboard' },
      { label: 'Skyline OS — team management', url: 'https://www.skylineos.app/features/team-management' },
      { label: 'Opsicom — jobs', url: 'https://www.opsicom.com/product/jobs' },
      { label: 'Spiro — QC and delivery', url: 'https://support.spiro.media/en/articles/9325414-qc-and-delivery-process-in-spiro' },
    ],
    related: [
      { href: '/insights/real-estate-photography-crm-vs-production-management', label: 'Compare CRM and production management' },
      { href: '/insights/evaluate-property-media-workflow-software', label: 'Test workflow software before buying' },
    ],
  },
];
