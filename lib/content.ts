// Single source of truth for site copy, generated from CV.md.
// Update CV.md and mirror changes here — page components stay presentational.

export type NavLink = {
  label: string;
  href: string;
};

export type Profile = {
  name: string;
  monogram: string;
  eyebrow: string;
  taglines: string[];
  positioning: string;
  location: string;
  phone: string;
  email: string;
  github: string;
  linkedin: string;
};

export type AboutContent = {
  whoIAm: string;
  whatIBuild: string;
};

export type EducationEntry = {
  institution: string;
  location: string;
  credential: string;
  dates: string;
  honors: string[];
};

export type ContinuingEducationEntry = {
  title: string;
  provider: string;
};

export type ImageAsset = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  stack: string[];
  repoUrl?: string;
  liveUrl?: string;
  image?: ImageAsset;
};

export type ExperienceEntry = {
  title: string;
  org: string;
  dateLine: string;
  bullets: string[];
  stack?: string[];
  image?: ImageAsset;
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export type RecognitionStat = {
  value: string;
  label: string;
};

export type ListItem = {
  title: string;
  detail: string;
};

export const navLinks: NavLink[] = [
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Recognition", href: "#recognition" },
  { label: "Contact", href: "#contact" },
];

export const profile: Profile = {
  name: "Malama Masheke",
  monogram: "MM",
  eyebrow: "Software Engineer",
  taglines: [
    "I build to solve problems",
    "I build data-driven products",
    "I build for fun",
    "I lead projects",
    "I work in teams",
    "I am hardworking, goal oriented and resilient",
  ],
  positioning: "Software Development, Product Management, and Data Analysis.",
  location: "Salisbury, North Carolina, USA",
  phone: "(+1) 704-223-7645",
  email: "gabrielmasheke@gmail.com",
  github: "https://github.com/malgmash",
  linkedin: "https://www.linkedin.com/in/malama-masheke",
};

export const about: AboutContent = {
  whoIAm:
    "Undergraduate at Livingstone College, Presidential Scholar with a 4.0 GPA. I use my hardwork, determination and resilience to analyze, design, lead and build projects. I solve problems and have fun while doing it. From front-end to back-end to interpreting data, I do it all and do not limit myself.",
  whatIBuild:
    "From full-stack applications to AI agents, I design security into the schema rather than adding it later, and I build for the cases where correctness matters: who can access what, whether the data holds up, and what happens when the system is asked something it can't answer. I also work alongside AI coding agents, scoping the tasks, reviewing the output, and owning the design decisions myself.",
};

export const education: EducationEntry[] = [
  {
    institution: "Livingstone College",
    location: "Salisbury, NC",
    credential: "Undergraduate, Computer Information Systems",
    dates: "January 2026 to December 2029",
    honors: ["Presidential Scholar", "GPA: 4.0", "Honors Student"],
  },
];

export const continuingEducation: ContinuingEducationEntry = {
  title: "Python Programming: Machine Learning and Deep Learning",
  provider: "Oak Academy via Udemy",
};

// Demos first: it has both a repo and a live deployment.
export const projects: Project[] = [
  {
    slug: "demos",
    title: "demos, Full-Stack Voting Platform",
    subtitle: "2-person team, backend and system design owner (July 2026)",
    description:
      "Built and deployed a workspace-scoped voting platform supporting single-choice, multiple-choice, and ranked-choice voting, roughly 11,700 lines across the codebase.",
    details: [
      "Authored the system design document and relational data model from scratch, then implemented 17 migrations totaling about 2,000 lines of SQL",
      "Designed the authorization layer as 40 Row-Level Security policies across 12 tables, backed by 30 security-definer functions with search_path pinned on every one",
      "Implemented Instant-Runoff Voting tabulation in full, including exhausted ballots dropped from both the round count and the majority denominator, and ties for lowest where all tied candidates are eliminated in the same round behind an all-tied guard",
      "Enforced vote integrity with three structural database constraints: unique(session_id, user_id), unique(vote_id, option_id), and a unique index on (vote_id, rank)",
      "Found and closed a real ballot-secrecy vulnerability where vote_selections could be joined back to votes through vote_id, replacing the linkage with a dense_rank() anonymized ballot_ref in migration 014",
      "Shipped the departments feature that the original design document had scoped as phase two",
      "Directed an AI coding agent as an engineering partner: scoped tasks, reviewed every diff, and retained architecture and security decisions",
      "Current work: adding test coverage and CI, which the project does not yet have",
    ],
    stack: [
      "Next.js",
      "Supabase",
      "PostgreSQL",
      "Row-Level Security",
      "Supabase Auth",
      "Supabase Realtime",
      "SQL",
      "TypeScript",
    ],
    repoUrl: "https://github.com/malgmash/Demos",
    liveUrl: "https://demos-rust-eight.vercel.app/",
    image: {
      src: "/demos-screenshot.png",
      width: 1919,
      height: 942,
      alt: "Dēmos workspace dashboard showing sessions, total votes cast, and turnout",
    },
  },
  {
    slug: "tri-ask-me",
    title: "Tri-Ask-Me, AI-Powered Support Triage Agent",
    subtitle: "HackerRank Orchestrate 24-hour hackathon (May 2026)",
    description:
      "Built a terminal-based AI agent that triages real support tickets across three product ecosystems: HackerRank, Claude, and Visa.",
    details: [
      "Architected a modular pipeline of retriever, classifier, responder, and orchestrator components",
      "Implemented TF-IDF retrieval over a local support corpus for retrieval-augmented generation, with inference through Amazon Bedrock at temperature 0.3",
      "Designed an escalation decision matrix with 30+ keyword triggers routing security, financial, legal, data privacy and compliance, and account access cases to specialist human review",
      "Built anti-hallucination guarantees: grounding checks that refuse to answer when retrieval returns nothing, plus constrained system prompts",
      "Emitted structured output with status, product_area, response, justification, and request_type fields",
      "Placed in the top 10% globally",
    ],
    stack: ["Python", "Amazon Bedrock", "TF-IDF retrieval", "RAG", "prompt engineering"],
    repoUrl: "https://github.com/malgmash/Tri-Ask-Me",
    image: {
      src: "/tri-ask-me-diagram.png",
      width: 1004,
      height: 507,
      alt: "Tri-Ask-Me pipeline diagram: tickets flow through an orchestrator to a retriever, classifier, and responder, ending in a reply or an escalation",
    },
  },
];

export const experience: ExperienceEntry[] = [
  {
    title: "NSF-Funded Spectrum Sizzle Workshop, SMART Hub",
    org: "Baylor University",
    dateLine: "June 2026",
    bullets: [
      "Selected as one of 40 undergraduates nationwide for an NSF-funded RF and spectrum research workshop",
      "Worked directly with engineers and researchers from Google and Keysight Technologies",
      "Implemented signal processing and numerical computing exercises in MATLAB",
    ],
    stack: ["MATLAB", "signal processing", "RF spectrum fundamentals"],
    image: {
      src: "/spectrum-sizzle.jpeg",
      width: 1538,
      height: 2048,
      alt: "Working at a signal-analysis workstation during the NSF-Funded Spectrum Sizzle Workshop",
    },
  },
  {
    title: "Cato University 2026, Summer Term I",
    org: "Cato Institute",
    dateLine: "August 2026",
    bullets: [
      "Selected for the Cato Institute's residential student program on political economy and public policy",
      "Focused sessions on technology and finance policy, and on public speaking and argumentation",
    ],
    image: {
      src: "/cato-university.jpeg",
      width: 4284,
      height: 5712,
      alt: "Wearing a Cato University conference badge at Cato University 2026",
    },
  },
  {
    title: "Adobe Student Ambassador",
    org: "Adobe",
    dateLine: "",
    bullets: [
      "Selected to represent Adobe on campus at Livingstone College",
      "Ran peer education sessions and live technical demonstrations for the student community",
    ],
  },
];

export const skills: SkillGroup[] = [
  {
    category: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "SQL", "MATLAB"],
  },
  {
    category: "Web and Full-Stack",
    items: ["Next.js", "React", "App Router", "React 19", "Framer Motion", "responsive UI"],
  },
  {
    category: "Data and Backend",
    items: ["PostgreSQL", "Supabase", "relational data modeling", "database migrations", "SQL query design"],
  },
  {
    category: "Security and Authorization",
    items: [
      "Row-Level Security",
      "security-definer functions with pinned search_path",
      "authorization design",
      "auth and session handling",
      "threat modeling",
      "structural data integrity constraints",
    ],
  },
  {
    category: "AI and ML",
    items: [
      "Retrieval-augmented generation",
      "Amazon Bedrock",
      "TF-IDF retrieval",
      "prompt engineering",
      "AI agent orchestration",
      "machine learning and deep learning fundamentals",
      "AI-assisted development workflows",
    ],
  },
  {
    category: "Deployment and Tooling",
    items: ["Vercel", "Git", "GitHub", "VS Code", "Claude Code", "Turbopack"],
  },
  {
    category: "Creative",
    items: ["Adobe Photoshop", "Adobe Premiere Pro"],
  },
];

export const recognitionStats: RecognitionStat[] = [
  { value: "4.0", label: "GPA, Presidential Scholar" },
  { value: "Top 10%", label: "Globally, HackerRank Orchestrate hackathon" },
  { value: "1 of 40", label: "Undergraduates nationwide, NSF Spectrum Sizzle Workshop" },
];

// Awards and Recognition, plus the ColorStack line from Leadership and Community
// (Adobe Student Ambassador already appears under Experience, so it isn't duplicated here).
export const awards: ListItem[] = [
  { title: "Presidential Scholar", detail: "Livingstone College, with a 4.0 GPA" },
  { title: "Top 10% globally", detail: "HackerRank Orchestrate hackathon, May 2026" },
  {
    title: "NSF-funded Spectrum Sizzle Workshop selectee",
    detail: "One of 40 undergraduates nationwide, Baylor University with Google and Keysight Technologies, June 2026",
  },
  { title: "Odessa J. Robinson Scholarship", detail: "Promise City Church" },
  { title: "Cato University 2026 selectee", detail: "Cato Institute" },
  { title: "ColorStack member", detail: "The national community for Black and Latinx students in computing" },
];

export const interests =
  "Security and privacy-conscious engineering, responsible human-directed AI development, and building tools that solve real problems at scale. Outside of engineering: video and photo editing in Photoshop and Premiere Pro, and competing in EAFC, ranked #1 in Zambia for 2 years running 4 national titles (2024 to 2026).";

export const currentYear = new Date().getFullYear();
