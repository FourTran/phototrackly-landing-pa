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
};

export const marketingPages: MarketingPage[] = [
  {
    slug: 'real-estate-photography-business-software',
    title: 'Real Estate Photography Business Software',
    description: 'Explore a planned real estate photography business workspace for studio owners coordinating photographers, editors, job handoffs and client delivery.',
    eyebrow: 'FOR PROPERTY MEDIA BUSINESSES',
    heading: 'Real estate photography business software for the work around every shoot',
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
    questions: [
      { question: 'Who is PhotoTrackly for?', answer: 'Growing real estate photography studios and property media companies coordinating several shoots, people, services or production handoffs.' },
      { question: 'Can I use the software today?', answer: 'PhotoTrackly is in development. Joining early access registers your interest; it does not create an account or guarantee immediate access.' },
      { question: 'Does it edit photos or find clients?', answer: 'Those are not the planned first-release focus. PhotoTrackly is designed to coordinate the business workflow around property media jobs.' },
    ],
  },
  {
    slug: 'real-estate-photography-workflow-software',
    title: 'Real Estate Photography Workflow Software',
    description: 'Follow a real estate photography job from brief and photographer assignment to editor handoffs, approval and delivery in PhotoTrackly’s planned workflow.',
    eyebrow: 'SHOOT TO DELIVERY',
    heading: 'A clearer workflow from property brief to client delivery',
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
    questions: [
      { question: 'Can workflows include multiple services?', answer: 'The first release is planned to support configurable services and add-ons on a property job.' },
      { question: 'Does PhotoTrackly assign photographers automatically?', answer: 'Manual assignment is the initial priority. Rules-based or AI-assisted assignment is a possible later direction.' },
      { question: 'Is this a client gallery?', answer: 'Client delivery is part of the planned workflow, but PhotoTrackly should not be presented as an available gallery product today.' },
    ],
  },
  {
    slug: 'real-estate-photography-scheduling-software',
    title: 'Real Estate Photography Scheduling Software',
    description: 'Plan real estate photography shoots with the assigned photographer, property access notes and ordered photo, drone or floor-plan services tied to one job.',
    eyebrow: 'SHOOT PLANNING',
    heading: 'Schedule the shoot with its full property brief',
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
    questions: [
      { question: 'Will PhotoTrackly optimize travel routes?', answer: 'Travel route optimization is not a confirmed first-release capability.' },
      { question: 'Are calendar integrations available?', answer: 'Integrations are not confirmed yet; the initial focus is a usable, connected workspace for the daily job.' },
      { question: 'Who updates the schedule?', answer: 'The first-release direction is for a coordinator to schedule shoots and manually assign photographers.' },
    ],
  },
  {
    slug: 'real-estate-media-production-management',
    title: 'Real Estate Media Production Management',
    description: 'Keep photo, video and floor-plan editing, quality review, revision ownership and delivery readiness visible in a planned property-media workflow.',
    eyebrow: 'AFTER THE SHOOT',
    heading: 'Keep editing, review and delivery tied to the property job',
    introduction: 'Finishing a property shoot does not mean the client deliverables are ready. PhotoTrackly is being built to distinguish received source files, editing in progress, requested changes and approved media — with a clear owner for the next action.',
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
