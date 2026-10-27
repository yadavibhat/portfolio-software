// All portfolio content lives here. Edit text, add projects, or reorder entries; the UI maps over these arrays.

export type Project = [year: string, title: string, event: string, problem: string, role: string, built: string, tools: string[], link: string];

export const projects: Project[] = [
  [
    "2026",
    "MicroCreate",
    "Team ERROR 402 · x402 Global Challenge",
    "AI agents depend on subscriptions, API keys and human-approved payments, so they cannot pay for services on their own.",
    "Builder, with Srujan S and Srusti D K.",
    "A pay-per-use creative API. An agent requests a generation, receives an HTTP 402 challenge, signs the exact payment, settles 0.01 USDC on Algorand and gets the result with an on-chain transaction ID as proof. Includes payment verification, replay protection, asset opt-in, transaction history and API documentation.",
    [
      "x402",
      "Algorand TestNet",
      "USDC ASA",
      "Web3Auth Embedded Wallets",
      "Pera Wallet",
      "Agent Signer"
    ],
    "https://github.com/yadavibhat"
  ],
  [
    "2026",
    "NyayaNetra",
    "KSP Datathon 2026 · Problem Statement 1",
    "Investigators need to query large crime databases without writing queries or reading through records manually.",
    "Team leader of 5.",
    "A bilingual (English and Kannada) conversational AI copilot with cited answers, a suspect-network graph, PDF case dossiers and audit logs. Runs with an offline-safe JSON backup so it keeps working when the database is unreachable. Deployed on Zoho Catalyst.",
    [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Zoho Catalyst",
      "Conversational AI"
    ],
    "https://github.com/yadavibhat/NyayaNetra"
  ],
  [
    "2026",
    "Aegistrack",
    "AMD Slingshot · Regional finalist",
    "Tourists and authorities lack a shared, real-time view when a safety incident occurs.",
    "Team lead; built the authority dashboard, website and alert system.",
    "A hardware-and-web safety system. The hardware sends signals that reach a dashboard where authorities see and act on alerts. Selected among the Top 10 teams in Karnataka, out of 3,000+ nationally, for the regional finale at REVA University.",
    [
      "TypeScript",
      "Dashboard",
      "Alert system",
      "Hardware integration"
    ],
    "https://github.com/yadavibhat/aegis-authority-web"
  ],
  [
    "2026",
    "Dayflow",
    "Odoo × NMIT Bangalore Hackathon '26",
    "Odoo's hackathon brief: deliver a working Human Resource Management System inside a single coding day (9 AM to 5 PM).",
    "Team lead and integrator for a team of four. Teammates owned employee experience (Dania), attendance and leave (Mahi), and payroll and audit (Qariba).",
    "Dayflow, an HRMS covering the employee experience, attendance and leave, and payroll with an audit trail. Next.js and TypeScript on the front, Supabase for Postgres, auth and row-level security, Zod for validation, with the UI designed in Stitch. Worked in one Git branch per teammate, with integration owned by me.",
    [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Supabase",
      "Postgres RLS",
      "Zod"
    ],
    "https://github.com/yadavibhat/dayflow"
  ],
  [
    "2026",
    "CampusOne",
    "Databricks Genie Campus Intelligence · Bengaluru Tech Week 2026",
    "Hackathon theme: a Genie-powered campus intelligence layer, built on Databricks Free Edition with a Genie Agent at its core.",
    "Product and architecture design.",
    "A verified, NMIT-only student network: skill-based people matching, a team builder and opportunities hub (including SIH team formation), a clubs and culture wall, a campus digest, and a Genie-powered assistant with academic and what-if modes. Minimal grayscale interface on React, FastAPI and Databricks (Unity Catalog, Delta tables, Genie Agent).",
    [
      "React",
      "TypeScript",
      "Vite",
      "FastAPI",
      "Databricks",
      "Genie Agent",
      "Delta tables"
    ],
    ""
  ],
  [
    "2026",
    "SWARMA",
    "KPIT Sparkle 2026 · Team Innoverse",
    "Robot swarms usually rely on a central leader, which becomes a single point of failure.",
    "Team member, with Sanjana Suresh Patil, Srujan S and A Mohammad Nasir.",
    "“Swarm Without a Leader”: a decentralized decision engine where robots coordinate without a central controller. Delivered a six-slide proposal with a validation plan, and an early simulation prototype.",
    [
      "Decentralized systems",
      "Simulation",
      "Decision engine"
    ],
    ""
  ],
  [
    "2026",
    "SwasthyaSetu",
    "Smart India Hackathon 2025 · Team Terminals · Internal round",
    "Submission to NMIT’s internal round of Smart India Hackathon 2025 (Team ID 162184).",
    "Team member; prepared the proposal deck.",
    "A six-slide proposal: proposed solution, technical approach, feasibility and viability, impact and benefits, and research references. Its structure became my template for later submissions, including the Ministry of Tribal Affairs scholarship-management problem statement for SIH 2026.",
    [
      "SIH 2025",
      "Technical proposal",
      "Feasibility analysis"
    ],
    "https://github.com/yadavibhat"
  ],
  [
    "2026",
    "Adaptive Spaced Repetition",
    "IEEE-format research paper",
    "Engineering students often retain little because they cram before exams.",
    "Lead author, with Dania Ahmed and Chaithanya M.",
    "A six-page IEEE conference paper studying adaptive spaced-repetition schedules and their effect on exam performance, with results, graphs and recent references. Written in LaTeX.",
    [
      "LaTeX",
      "IEEE",
      "Data analysis",
      "Research writing"
    ],
    ""
  ],
  [
    "2025",
    "BookMyAdmission",
    "Sir MVIT inter-institutional startup competition",
    "Students choose colleges from long listings without knowing where they will actually fit.",
    "Market and finance lead, with Dania Ahmed, Sakshi H R and Vrinda Baral.",
    "A college-admissions platform focused on fit rather than listings. Pitched with a working prototype, business phases, a revenue model and a live Q&A, planned one day before the event.",
    [
      "Prototype",
      "Business model",
      "Pitching"
    ],
    ""
  ]
];

export const results: Record<string, string> = {
  "MicroCreate": "Built and deployed for the x402 Global Challenge",
  "NyayaNetra": "Built and deployed for KSP Datathon 2026",
  "Aegistrack": "Top 100 of 3,000+ teams · Top 10 in Karnataka",
  "SwasthyaSetu": "2nd place · internal SIH 2025"
};

export const ledger: [repo: string, language: string, note: string][] = [
  [
    "NyayaNetra",
    "JavaScript",
    "React and Node.js crime-database copilot"
  ],
  [
    "dayflow",
    "TypeScript",
    "Next.js and Supabase HRMS for Odoo × NMIT"
  ],
  [
    "aegis-authority-web",
    "TypeScript",
    "Authority dashboard for Aegistrack"
  ],
  [
    "tourist-safety-app",
    "TypeScript",
    "Tourist safety application (fork)"
  ],
  [
    "queuecutter",
    "TypeScript",
    "Queue management web app"
  ],
  [
    "nmit-canteen",
    "HTML",
    "Campus canteen interface"
  ],
  [
    "culture-craft",
    "HTML",
    "Culture-focused web project"
  ],
  [
    "yjb-photog-portf",
    "HTML",
    "Photography portfolio site"
  ],
  [
    "Code-crafters",
    "Python",
    "Python project, forked by one contributor"
  ],
  [
    "DSA-in-java · DSA-cpp · ds_c",
    "Java · C++ · C",
    "Data structures practice in three languages"
  ],
  [
    "leetcode-company-wise-problems",
    "CSV (fork)",
    "Company-wise problem sets for placement prep"
  ]
];

export const recognition: [year: string, title: string, result: string, note: string][] = [
  [
    "2026",
    "Technical Storytelling Competition, NMIT",
    "1st place · across 50+ teams",
    "Placed first among 50+ teams at NMIT, judged on storytelling, problem framing, technical depth and outcomes. Shows I can explain a complex system to a mixed audience."
  ],
  [
    "2026",
    "AAKAR 2026",
    "1st Essay · 2nd Debate · 2nd Technical Speech · 2nd Presentation",
    "Competed in four formats at Dr. Ambedkar Institute of Technology. Shows range: writing, argument, technical communication, and teaching an unfamiliar domain (civil engineering)."
  ],
  [
    "2026",
    "Survekshan 2026 Shark Tank",
    "3rd place, with Dania Ahmed",
    "Pitched a civil-engineering idea at NMIT with no civil background, using research and validation. Shows how I enter a new field."
  ],
  [
    "2026",
    "AMD Slingshot",
    "Regional finalist · Top 100 of 3,000+ teams",
    "Applied and led Team Aegistrack from the first PPT round to demo day. Shows I can lead a hardware-and-software build under deadline."
  ],
  [
    "2026",
    "x402 Global Challenge",
    "Built and deployed MicroCreate",
    "Delivered a working on-chain payments prototype with Team ERROR 402 in a hackathon window."
  ],
  [
    "2026",
    "NMIT essay competition",
    "1st prize",
    "Essay on how algorithms shape choices, creativity and digital life, for the Department of Humanities and Social Sciences."
  ],
  [
    "2026",
    "Jain University CMS",
    "2nd place, debate",
    "Argued on digitalization and digital education in rural areas. Shows I can reason on technology and access."
  ],
  [
    "2026",
    "Flipkart GWC 7.0",
    "Shortlisted among 27,747 candidates",
    "Cleared the first screening of Flipkart’s early-careers programme."
  ],
  [
    "2025",
    "Smart India Hackathon · internal round",
    "2nd place",
    "Placed second in NMIT’s college round of India’s national hackathon with the SwasthyaSetu proposal."
  ],
  [
    "2025",
    "Sir MVIT startup competition",
    "Participant · Sep 3, 2025",
    "Pitched BookMyAdmission with a working prototype, business phases, a revenue model and a live Q&A, planned in a day. Shows I can turn an idea into a defensible pitch fast."
  ],
  [
    "2025",
    "Atria × IIT Bombay Startup Pitch",
    "Participant",
    "My first startup competition, in third semester, with an agritech idea for farmers."
  ]
];

export const certs: [year: string, title: string, issuer: string, note: string][] = [
  [
    "2025",
    "Google Cloud Skill Badge",
    "Set Up an App Dev Environment on Google Cloud",
    "Hands-on cloud setup, verified through Credly."
  ],
  [
    "2025",
    "Microsoft Learn badge",
    "Fundamental AI Concepts",
    "Core AI concepts and responsible use."
  ],
  [
    "2025",
    "GitHub Hands-on Workshop",
    "OSCode NMIT",
    "Version control and collaboration workflows."
  ],
  [
    "2025",
    "Figma Unplugged",
    "Diseño Divino, NMIT",
    "UI/UX fundamentals in Figma."
  ],
  [
    "2024",
    "Google Cloud Arcade Facilitator",
    "Google",
    "Guided peers through the programme’s milestones."
  ],
  [
    "Academics",
    "CGPA 9.36 / 10",
    "B.E. Computer Science, NMIT",
    "Pre-university score of 97.67% (586/600)."
  ]
];

export const timeline: [when: string, role: string, where: string][] = [
  [
    "Sep 2025 – now",
    "Tech Co-Lead",
    "DataWiz NMIT · led 12 members across ODOO x NMIT and WizAlyze"
  ],
  [
    "Sep 2025 – Jan 2026",
    "Documentation member",
    "GDG NMIT · content and documentation"
  ],
  [
    "May – Oct 2025",
    "Tech and social media member",
    "DataWiz NMIT"
  ],
  [
    "Mar 2025 – now",
    "Tech member",
    "OSCode NMIT · open-source club, technical team"
  ],
  [
    "Jul 2025",
    "Content creator",
    "IIM Bangalore · with technical speaker Arsh Goyal"
  ],
  [
    "Jul – Aug 2024",
    "Facilitator",
    "Google Cloud Arcade"
  ]
];

export const seen: string[] = [
  "DSA-in-java, DSA-cpp and ds_c; NyayaNetra, MicroCreate and Aegistrack",
  "NyayaNetra (React, Express, MongoDB); Dayflow (Next.js, Supabase); nmit-canteen; queuecutter",
  "NyayaNetra’s cited copilot; MicroCreate on Algorand TestNet",
  "NyayaNetra on Zoho Catalyst; the research paper in LaTeX; OSCode workshops",
  "Pattern-based DSA prep from Striver’s A2Z sheet; ns-2 networking labs; the Theory of Computation deck",
  "Department of Photography; the decks behind the SIH 2025 and storytelling results"
];

export const frames: [big: string, title: string, caption: string, gold?: number][] = [
  [
    "1st",
    "AAKAR 2026",
    "Essay: Lakes of Bangalore",
    1
  ],
  [
    "2nd",
    "AAKAR 2026",
    "Debate on urbanization and sustainability"
  ],
  [
    "2nd",
    "AAKAR 2026",
    "Technical speech on digitalization"
  ],
  [
    "2nd",
    "AAKAR 2026",
    "Civil engineering presentation"
  ],
  [
    "3rd",
    "Survekshan 2026",
    "Shark Tank at NMIT"
  ],
  [
    "1st",
    "Technical Storytelling",
    "Competition at NMIT · 50+ teams",
    1
  ],
  [
    "1st",
    "NMIT essay prize",
    "Azadi in the Age of Algorithms",
    1
  ],
  [
    "2nd",
    "SIH 2025 internal",
    "Smart India Hackathon, NMIT round"
  ],
  [
    "2nd",
    "Jain CMS debate",
    "Digital education in rural areas"
  ],
  [
    "Top 100",
    "AMD Slingshot",
    "3,000+ teams · regional finalist"
  ],
  [
    "27,747",
    "Flipkart GWC 7.0",
    "Shortlisted for the next round"
  ]
];

export const milestones: [when: string, title: string, note: string, key?: number][] = [
  [
    "Jul–Aug 2024",
    "Google Cloud Arcade facilitator",
    "Guided peers through the programme’s skill-badge milestones."
  ],
  [
    "Sep 2024",
    "Started B.E. Computer Science at NMIT",
    "Joined with a 97.67% pre-university score."
  ],
  [
    "Mar 2025",
    "Joined OSCode NMIT’s technical team",
    "Open-source club; later part of its GitHub workshop and TechSync events."
  ],
  [
    "Jul 14, 2025",
    "Content creator at IIM Bangalore",
    "Covered a day with technical speaker Arsh Goyal."
  ],
  [
    "Aug 25, 2025",
    "First startup competition",
    "Atria × IIT Bombay pitch, an agritech idea for farmers.",
    0
  ],
  [
    "Sep 3, 2025",
    "Sir MVIT startup competition",
    "Pitched BookMyAdmission with a working prototype, planned in a day.",
    0
  ],
  [
    "Sep 2025",
    "Became Tech Co-Lead, DataWiz NMIT",
    "Now leads the 12-member tech team.",
    1
  ],
  [
    "2025",
    "2nd place, internal Smart India Hackathon",
    "With the SwasthyaSetu proposal.",
    1
  ],
  [
    "Jan 2026",
    "TechSync at Microsoft Research India",
    "Organizing team and event photographer for OSCode.",
    0
  ],
  [
    "2025–26",
    "Organized 5+ hackathons",
    "Including ODOO x NMIT, where I led the 12-member tech team.",
    1
  ],
  [
    "2026",
    "AMD Slingshot: Top 100 of 3,000+ teams",
    "Led Team Aegistrack to the regional finale at REVA University.",
    1
  ],
  [
    "2026",
    "AAKAR 2026: four events, three podiums",
    "1st in essay writing; 2nd in debate, technical speech and presentation.",
    1
  ],
  [
    "2026",
    "Deployed MicroCreate and NyayaNetra",
    "On-chain payments on Algorand TestNet; a bilingual crime-data copilot on Zoho Catalyst.",
    0
  ],
  [
    "2026",
    "1st place, Technical Storytelling Competition",
    "Across 50+ teams at NMIT.",
    1
  ]
];

export const gallery = [
  { src: "/images/gallery-1.jpg", w: 760, h: 506, alt: "Survekshan 2026 awards", title: "Survekshan 2026", cap: "3rd place · Shark Tank, NMIT" },
  { src: "/images/gallery-2.jpg", w: 760, h: 1139, alt: "AAKAR 2026 certificates", title: "AAKAR 2026", cap: "Four events · three podiums" },
  { src: "/images/gallery-3.jpg", w: 760, h: 570, alt: "AMD Slingshot regional finale", title: "AMD Slingshot", cap: "Regional finale · REVA University" },
  { src: "/images/gallery-4.jpg", w: 760, h: 958, alt: "TechSync at Microsoft Research India", title: "TechSync", cap: "OSCode · Microsoft Research India" },
  { src: "/images/gallery-5.jpg", w: 760, h: 506, alt: "GSoC meetup at Google Ananta", title: "GSoC meetup", cap: "GDG Bengaluru · Google Ananta" },
  { src: "/images/gallery-6.jpg", w: 760, h: 1065, alt: "Startup pitch", title: "Startup pitch", cap: "Atria × IIT Bombay" },
  { src: "/images/gallery-7.jpg", w: 760, h: 941, alt: "Jain University debate", title: "Jain CMS debate", cap: "2nd place" },
  { src: "/images/gallery-8.jpg", w: 663, h: 414, alt: "Presenting at NMIT", title: "Presenting", cap: "NMIT · early competitions" },
];

export const stats: { label: string; n: number; d?: number }[] = [
  { label: "Podium finishes", n: 9 },
  { label: "First places", n: 3 },
  { label: "Repositories", n: 36 },
  { label: "CGPA", n: 9.36, d: 2 },
];

export const beyond = [
  { tag: "Side project · Music", title: "Advaita", text: "A college band concept built on blending two musicians into one sound, with an Indian college-fest aesthetic. I work on the songwriting, the poster design and the music-generation prompts." },
  { tag: "Study systems", title: "Decks I build to learn", text: "Interactive study decks with SVG diagrams, solved question banks and MCQ arenas, built for DBMS, DAA, SEPM, EVS, EDA and more. Writing them forces me to understand the why, not only the what." },
];

// Optional status badge shown under a project (for work that is still in progress).
export const statuses: Record<string, string> = {
  CampusOne: "In development",
};
