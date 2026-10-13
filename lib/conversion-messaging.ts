/** Prelaunch signup copy is tailored to buyer tasks, never to unreleased capabilities. */
export type BuyerSignupCopy = { heading: string; introduction: string; contextPrompt: string };

export const buyerSignupCopy: Record<string, BuyerSignupCopy> = {
  'real-estate-photography-business-software': {
    heading: 'Help shape a clearer way to run your media studio.',
    introduction: 'If you manage several property jobs, photographers or editors, join early access and tell us which everyday handoff takes the most coordination.',
    contextPrompt: 'Optional: describe how your team currently tracks jobs, owners or deadlines.',
  },
  'real-estate-photography-workflow-software': {
    heading: 'Tell us where your shoot-to-delivery workflow gets stuck.',
    introduction: 'Coordinate briefs, photographers, editors and approvals? Register your interest and share the handoff that your existing tools make hardest to follow.',
    contextPrompt: 'Optional: tell us which brief, editing, review or delivery step loses context.',
  },
  'real-estate-photography-scheduling-software': {
    heading: 'Help shape scheduling for real estate media teams.',
    introduction: 'If you plan multi-service shoots or assign photographers manually, tell us what changes or instructions are most difficult to keep current.',
    contextPrompt: 'Optional: share how your studio handles access notes, reschedules or assignments.',
  },
  'real-estate-media-production-management': {
    heading: 'Share your hardest editing and approval handoff.',
    introduction: 'If you coordinate editors, revisions or human QC before client delivery, register interest and tell us which decision is hardest to track.',
    contextPrompt: 'Optional: describe a missing file, edit revision, approval or client-delivery blocker.',
  },
};
