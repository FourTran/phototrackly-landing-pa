export type MarketingPage = {
  slug: string;
  title: string;
  description: string;
  eyebrow: string;
  heading: string;
  introduction: string;
  image: string;
  imageAlt: string;
  problem: string;
  example: string;
  steps: { title: string; detail: string }[];
  questions: { question: string; answer: string }[];
  buyerGuide: {
    directAnswer: string;
    forTeams: string[];
    exampleHandoffs: { checkpoint: string; owner: string; decision: string }[];
    plannedFirstRelease: string[];
    notPromised: string[];
  };
};

export const marketingPages: MarketingPage[] = [
  {
    slug: 'real-estate-photography-business-software',
    title: 'Real Estate Photography Business Software for Studios',
    description: 'Explore PhotoTrackly’s planned real estate photography business software for studios coordinating shoots, photographers, editors and client handoffs.',
    eyebrow: 'FOR PROPERTY MEDIA BUSINESSES',
    heading: 'Real estate photography business software for studio operations',
    introduction: 'For studio owners balancing shoots, edits and delivery deadlines, the hardest question is often who owns the next step. PhotoTrackly is being built to connect the property brief, assigned people, files, review and delivery in one planned job workspace.',
    image: '/images/reference/on-site.webp',
    imageAlt: 'Photographer working on a property media shoot',
    problem: 'A studio may sell photography, drone imagery and floor plans on the same order. When the property brief sits in email, the appointment in a calendar and files in a folder, an owner has to reconstruct the job each time someone asks what happens next.',
    example: 'Consider a property job with interior photos, drone images and a floor plan. The coordinator records the requested services and access notes, assigns a photographer, tracks incoming files, then checks what has been reviewed before the client handoff. This is an illustrative workflow, not a claim about a live customer.',
    steps: [
      { title: 'Keep the job together', detail: 'Attach the property, client, ordered services, instructions and working materials to one job.' },
      { title: 'Give each person context', detail: 'Make the shoot time, assigned photographer and editing or review responsibility clear.' },
      { title: 'See what is ready', detail: 'Follow production, revisions and approval through to the final client delivery.' },
    ],
    buyerGuide: {
      directAnswer: "Real estate photography business software should help a growing studio keep property orders, ordered services, appointments, team responsibilities and client delivery connected. PhotoTrackly is developing that job-centred operations workspace; it is not an available billing, sales CRM or photo-editing product.",
      forTeams: [
      "Owner managing several photographers and editors across overlapping client jobs",
      "Operations coordinator checking whether every promised service is on track",
      "Small media studio moving beyond individual calendars, inboxes and folders"
      ],
      exampleHandoffs: [
        { checkpoint: "Order accepted", owner: "Coordinator", decision: "Record the property, client, ordered photo/drone/floor-plan services, due date and one accountable job owner." },
        { checkpoint: "Shoot assignment", owner: "Coordinator", decision: "Confirm the photographer, service requirements, property access and which revision of the brief is current." },
        { checkpoint: "Production", owner: "Editor or production lead", decision: "Check that every required source set arrived and identify the next owner for missing media." },
        { checkpoint: "Client handoff", owner: "Reviewer / delivery owner", decision: "Confirm individual deliverables are approved before sending the agreed package." },
      ],
      plannedFirstRelease: [
      "One shared job record for client, property, services and add-ons",
      "Scheduling and manual assignment of the responsible photographer",
      "Production, human review and delivery status within the property job"
      ],
      notPromised: [
      "A currently available replacement for booking, invoicing or accounting systems",
      "Automatically generated customer leads or AI image editing",
      "Confirmed payment, CRM or external calendar integrations"
      ],
    },
    questions: [
      { question: 'Who is PhotoTrackly for?', answer: 'Growing real estate photography studios and property media companies coordinating several shoots, people, services or production handoffs.' },
      { question: 'Can I use the software today?', answer: 'PhotoTrackly is in development. Joining early access registers your interest; it does not create an account or guarantee immediate access.' },
      { question: 'Does it edit photos or find clients?', answer: 'Those are not the planned first-release focus. PhotoTrackly is designed to coordinate the business workflow around property media jobs.' },
    ],
  },
  {
    slug: 'real-estate-photography-workflow-software',
    title: 'Real Estate Photography Workflow Software for Teams',
    description: 'PhotoTrackly is developing real estate photography workflow software for shoot briefs, photographer-to-editor handoffs, human review and client delivery.',
    eyebrow: 'SHOOT TO DELIVERY',
    heading: 'Real estate photography workflow software from brief to delivery',
    introduction: 'When several shoots overlap, an editor needs more than a folder, and a coordinator needs more than a calendar. This planned workflow puts each handoff, missing item and next responsible person in the context of the same property job.',
    image: '/images/reference/interior.webp',
    imageAlt: 'Residential interior photographed for a property media job',
    problem: 'A booked shoot is only the beginning. The team must carry service choices, access instructions, source files, edit requests and approval decisions across several people without losing the context of the original order.',
    example: 'A coordinator records photography, video and floor plan services for one property. The assigned photographer sees the brief, an editor sees the required deliverables, and a reviewer can identify the items that still need changes. The final handoff follows the same job. This is an illustrative workflow for the planned product.',
    steps: [
      { title: 'Brief', detail: 'Record the property, client, services, timing and access instructions.' },
      { title: 'Shoot', detail: 'Schedule the visit and manually assign the photographer with a complete brief.' },
      { title: 'Produce and review', detail: 'Keep source files, editing progress, change requests and approval visible.' },
      { title: 'Deliver', detail: 'Hand approved media to the client with the job history still connected.' },
    ],
    buyerGuide: {
      directAnswer: "Real estate photography workflow software connects the work after a client requests a shoot: collecting the brief, assigning capture, receiving source media, coordinating editors, approving revisions and delivering final assets. PhotoTrackly's planned focus is handoff ownership and job context, not a live automation service.",
      forTeams: [
      "Coordinator who cannot tell why a property job stopped moving",
      "Photographer and editor exchanging files and notes across separate tools",
      "Reviewer responsible for deciding which assets can be delivered"
      ],
      exampleHandoffs: [
        { checkpoint: "Brief to capture", owner: "Coordinator → photographer", decision: "Verify property access, current ordered services and who reports an on-site exception." },
        { checkpoint: "Capture to edit", owner: "Photographer → editor", decision: "Identify which photos, video or floor-plan source sets arrived and what is still missing." },
        { checkpoint: "Editing to review", owner: "Editor → reviewer", decision: "Associate a revision request with a specific asset/version and assign its next owner." },
        { checkpoint: "Review to delivery", owner: "Reviewer → coordinator", decision: "Separate approved files from still-revising assets before the client receives a link." },
      ],
      plannedFirstRelease: [
      "Visible stages and next action for each property job",
      "Source-file and editing handoffs linked to ordered services",
      "Human quality review, revision tracking and readiness for delivery"
      ],
      notPromised: [
      "A production-ready end-to-end software product today",
      "Automated AI-based file approvals or photo enhancement",
      "Guaranteed integrations with Dropbox, editing software or MLS systems"
      ],
    },
    questions: [
      { question: 'Can workflows include multiple services?', answer: 'The first release is planned to support configurable services and add-ons on a property job.' },
      { question: 'Does PhotoTrackly assign photographers automatically?', answer: 'Manual assignment is the initial priority. Rules-based or AI-assisted assignment is a possible later direction.' },
      { question: 'Is this a client gallery?', answer: 'Client delivery is part of the planned workflow, but PhotoTrackly should not be presented as an available gallery product today.' },
    ],
  },
  {
    slug: 'real-estate-photography-scheduling-software',
    title: 'Real Estate Photography Scheduling Software for Teams',
    description: 'Explore planned real estate photography scheduling software with manual photographer assignments, current property briefs and service-specific shoot instructions.',
    eyebrow: 'SHOOT PLANNING',
    heading: 'Real estate photography scheduling software with the full shoot brief',
    introduction: 'A confirmed calendar appointment does not answer who is shooting, which services are included or whether the photographer has the latest access instructions. PhotoTrackly’s planned manual assignment links the appointment with the property job and the details required for a complete handoff.',
    image: '/images/reference/exterior.webp',
    imageAlt: 'Residential property exterior representing a scheduled photo shoot',
    problem: 'A time slot can be confirmed while the gate code, service list or contact details arrive in a separate message. The coordinator then has to chase updates and tell the photographer which version is current.',
    example: 'For a property with photography and drone work, a coordinator records the agreed time, address, access notes and ordered services together, then assigns a photographer. If the appointment changes, the team can look back at the job context rather than a disconnected calendar event. This example describes the intended workflow.',
    steps: [
      { title: 'Capture the request', detail: 'Record the property, contact, services and requested timing.' },
      { title: 'Set the appointment', detail: 'Plan the shoot and manually assign the responsible photographer.' },
      { title: 'Share the brief', detail: 'Keep access notes and service requirements with the assignment.' },
    ],
    buyerGuide: {
      directAnswer: "Real estate photography scheduling software should connect an appointment with the full job brief: address, site contact, ordered services, the photographer and any changes. PhotoTrackly plans manual scheduling and assignments first; automatic route optimization and real-time calendar integrations have not been confirmed.",
      forTeams: [
      "Owner coordinating shoots for two or more photographers",
      "Scheduler handling drone, photo, video and floor-plan services on one property",
      "Photographer who needs one current version of access and capture instructions"
      ],
      exampleHandoffs: [
        { checkpoint: "Before offering a slot", owner: "Coordinator", decision: "Check property location, ordered services, estimated on-site work and requested delivery date." },
        { checkpoint: "At assignment", owner: "Coordinator → photographer", decision: "Record the shoot time, access contact, service list and assigned team member." },
        { checkpoint: "When the client reschedules", owner: "Coordinator → affected team", decision: "Update the job brief, reconfirm availability and identify any affected editing or delivery deadline." },
        { checkpoint: "After capture", owner: "Photographer → production", decision: "Mark the shoot handoff and tell the next owner which source files to expect." },
      ],
      plannedFirstRelease: [
      "Job-linked appointment details and manual assignment",
      "Service-specific brief and current property access instructions",
      "Visible changes and downstream ownership through production"
      ],
      notPromised: [
      "Automatic travel-route calculation or twilight scheduling",
      "Confirmed two-way Google/Apple calendar integration",
      "Automatic skills-based dispatch or multi-photographer availability matching"
      ],
    },
    questions: [
      { question: 'Will PhotoTrackly optimize travel routes?', answer: 'Travel route optimization is not a confirmed first-release capability.' },
      { question: 'Are calendar integrations available?', answer: 'Integrations are not confirmed yet; the initial focus is a usable, connected workspace for the daily job.' },
      { question: 'Who updates the schedule?', answer: 'The first-release direction is for a coordinator to schedule shoots and manually assign photographers.' },
    ],
  },
  {
    slug: 'real-estate-media-production-management',
    title: 'Real Estate Media Production Management Software',
    description: 'Explore planned real estate media production management for editor assignments, human quality checks, revision ownership and delivery readiness.',
    eyebrow: 'AFTER THE SHOOT',
    heading: 'Real estate media production management from editing to delivery',
    introduction: 'A real estate photography production or project manager needs to distinguish received source files, editing in progress, requested changes and approved media before client delivery. PhotoTrackly is being built to make each handoff and its responsible owner visible within the same property job.',
    image: '/images/reference/in-studio.webp',
    imageAlt: 'Property media editor at work in a studio',
    problem: 'When photos, video and floor plans move through different hands, a folder alone cannot explain what is missing or whether revisions were approved. The owner becomes the person everyone asks for status.',
    example: 'After a multi-service shoot, the editor checks the requested deliverables and working files. A reviewer flags a revision on selected images while the approved floor plan is ready. The coordinator sees the outstanding work before sending the final package. This is an illustrative example, not a live automation claim.',
    steps: [
      { title: 'Receive materials', detail: 'Keep source files and deliverable requirements connected to the job.' },
      { title: 'Track editing', detail: 'Make work ownership, progress and missing items easier to see.' },
      { title: 'Review and revise', detail: 'Record what needs changes and what has approval.' },
      { title: 'Decide on delivery', detail: 'Know which media is ready for the client handoff.' },
    ],
    buyerGuide: {
      directAnswer: "Real estate media production management is the coordination of source files, editor assignments, quality checks, revision requests and approved deliverables before an agent receives finished media. PhotoTrackly is developing a shared job workflow for those decisions, not autonomous visual QC or a live editing service.",
      forTeams: [
      "Production lead coordinating in-house and outsourced photo editors",
      "Quality reviewer handling mixed photo, video and floor-plan deliverables",
      "Coordinator protecting the agreed client handoff date during revisions"
      ],
      exampleHandoffs: [
        { checkpoint: "Source files received", owner: "Photographer → production lead", decision: "Confirm files belong to the correct property and each ordered service has the expected inputs." },
        { checkpoint: "Editing assigned", owner: "Production lead → editor", decision: "Record the export style, due time, owner and what is missing before work starts." },
        { checkpoint: "Quality review", owner: "Editor → reviewer", decision: "Mark individual items approved or needing revision, with a specific reason and next owner." },
        { checkpoint: "Delivery decision", owner: "Reviewer → delivery owner", decision: "Recheck final versions, partial-delivery agreement and package access before release." },
      ],
      plannedFirstRelease: [
      "Editor and reviewer responsibilities visible on the job",
      "Revision status and human quality-control handoffs",
      "Clear distinction between files received, approved and ready for delivery"
      ],
      notPromised: [
      "AI auto-retouching or autonomous quality inspection",
      "A production-available client gallery or fulfillment system today",
      "Fully automated third-party editor or payment integrations"
      ],
    },
    questions: [
      { question: 'Does PhotoTrackly edit images with AI?', answer: 'Automated image editing is not part of the planned first-release promise.' },
      { question: 'Does it automatically inspect visual quality?', answer: 'Autonomous visual quality control is not a confirmed capability. The planned workflow supports human review and revision tracking.' },
      { question: 'Does it manage every accounting step?', answer: 'Comprehensive accounting is outside the current first-release scope.' },
    ],
  },
];

export const marketingPageSlugs = marketingPages.map(page => page.slug);
export function getMarketingPage(slug: string) {
  return marketingPages.find(page => page.slug === slug);
}
