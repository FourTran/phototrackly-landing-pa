// First-party statements displayed on /about. Keep these tied to published
// product boundaries; do not turn planned work into currently available SaaS.
export type ProductAnswer = {
  question: string;
  answer: string;
  evidenceHref: string;
  evidenceLabel: string;
};

export const productAnswers: readonly ProductAnswer[] = [
  {
    question: 'What is PhotoTrackly?',
    answer: 'PhotoTrackly is a prelaunch business-to-business operations workspace being developed for real estate photography and property media studios. Its proposed job record connects the property brief, people, services, source files, human review and handoff to the client.',
    evidenceHref: '/real-estate-photography-business-software',
    evidenceLabel: 'Explore the proposed studio workflow',
  },
  {
    question: 'Who is PhotoTrackly intended for?',
    answer: 'Its initial audiences are growing media studios in the United States and Australia, particularly owners and coordinators working with photographers, editors and reviewers across multiple property jobs.',
    evidenceHref: '/real-estate-photography-workflow-software',
    evidenceLabel: 'Read the role-by-role workflow',
  },
  {
    question: 'Can I buy or use the finished software now?',
    answer: 'No. PhotoTrackly is in development. Early-access registration records interest; it does not provide a production software account, paid subscription or guaranteed activation date. The current website includes educational material and illustrative examples.',
    evidenceHref: '/build-notes',
    evidenceLabel: 'See the documented build status',
  },
  {
    question: 'Will PhotoTrackly automatically schedule photographers or review images?',
    answer: 'Not as a confirmed first-release feature. The current direction starts with manual photographer assignment and human quality review. Route optimisation, AI image inspection and third-party integrations must not be described as released capabilities.',
    evidenceHref: '/real-estate-photography-scheduling-software',
    evidenceLabel: 'See the stated scheduling limitations',
  },
  {
    question: 'Are your workflow examples tested customer outcomes?',
    answer: 'No. The examples and downloadable worksheets use fictional sample jobs to make operational decisions understandable. They are not actual customer case studies, measured savings, independent vendor tests or screenshots of production software.',
    evidenceHref: '/resources/photographer-handoff-template',
    evidenceLabel: 'Examine a fictional, reusable handoff template',
  },
];
