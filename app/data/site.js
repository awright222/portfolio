// All copy and links for the portfolio live here so they can be reviewed and
// edited without touching components. Anything marked REVIEW is provisional or
// could not be confirmed from the existing codebase, the product sites, or Alex.

export const site = {
  name: "Alex Wright",
  url: "https://www.alexwrightportfolio.com",
  email: "alex.gr.wright@gmail.com",
  links: {
    linkedin: "https://www.linkedin.com/in/alexgwright2",
    github: "https://github.com/awright222",
    meadowlark: "https://meadowlark-labs.com/",
  },
};

export const nav = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

// REVIEW: provisional hero copy supplied by Alex; expect further wording changes.
export const hero = {
  name: "Alex Wright",
  subheading: "Program management. Client relationships. Software development.",
  intro:
    "I've spent much of my career working directly with clients and managing operations, first at EXOS at Google and later in real estate. More recently, I've been building and launching software through Meadowlark Labs.",
};

export const work = {
  heading: "Tools for decisions that usually live in spreadsheets",
  // REVIEW: framing taken from the "About" text on meadowlark-labs.com.
  // The studio name sits between the two parts and is rendered as a link.
  introBefore: "These products come out of ",
  introAfter:
    ", the independent software studio I run. After years of working with buyers, investors and builders, I kept seeing important decisions made from scattered spreadsheets and separate tools. I started building small tools to answer the questions I kept running into.",
};

// REVIEW: problem statements and feature lists are drawn from each product's own
// site and from the DealForge codebase. Stack details are only listed where they
// are confirmed in code (DealForge); add them for the others if you want them shown.
export const featured = {
  name: "DealForge",
  category: "Deal analysis",
  // REVIEW: the "question" on each project is provisional wording, derived from the
  // product's own tagline. It frames what each tool is for; it is not a claim about results.
  question: "Is this deal worth doing?",
  url: "https://dealforgehq.com",
  image: "/DealForge.png",
  imageWidth: 2658,
  imageHeight: 1530,
  imageAlt:
    "DealForge dashboard showing an 82 out of 100 deal score, cap rate, cash-on-cash return, DSCR, IRR and a ten-year cash flow chart for an eight-unit apartment building.",
  problem:
    "Takes the deal details and returns cap rate, DSCR, IRR and cash flow, a 0–100 score, and a plain-language read on what is driving the result and what could go wrong.",
  points: [
    "Handles four kinds of deal: real estate, businesses, hybrids and ground-up development.",
    "Stress-tests a deal against a downturn and shows how sensitive the returns are to the assumptions.",
    "Pairs an AI model with a fixed set of underwriting rules to write the summary.",
    "Exports PDFs and CSVs, including a negotiation brief.",
  ],
  stack: "Next.js, TypeScript, Firebase, OpenAI API",
};

export const projects = [
  {
    name: "OppMap",
    category: "Market screening",
    question: "Is this market worth a closer look?",
    url: "https://www.oppmap.com/",
    image: "/work/oppmap.png",
    imageAlt:
      "OppMap showing scores for self storage, RV storage and warehouse use in Bozeman, Montana, with a map of nearby competitors.",
    problem:
      "Enter a city and OppMap scores commercial property types there on demand, supply, cost and risk, using public data. The scoring is rule-based and the reasoning is shown.",
  },
  {
    name: "BuildGrade",
    category: "Cost estimating",
    question: "What will this cost to build?",
    url: "https://www.usebuildgrade.com/",
    image: "/work/buildgrade.png",
    imageAlt:
      "BuildGrade home page with estimated cost ranges for a pole barn shop and a stick-built garage.",
    problem:
      "Calculators for garages, shops, metal buildings and commercial projects. Change the size, building type, finish level or region and the estimated range updates. A methodology page explains the assumptions and limits.",
  },
  {
    name: "YardCalc",
    category: "Material calculators",
    question: "How much material does this project need?",
    url: "https://yardcalcapp.com/",
    image: "/work/yardcalc.png",
    imageAlt:
      "YardCalc home page with gravel, mulch and concrete calculator cards.",
    problem:
      "Takes the dimensions, including areas traced on a satellite map, and returns the amount in cubic yards, tons or bags, with a rough cost.",
  },
];

// REVIEW: the program management and real estate roles and dates (2015–2019,
// 2019–2025) come from an older résumé that has since been removed; they are still
// unconfirmed. The Meadowlark Labs dates are as stated by Alex: independent software
// development began in 2025, and Meadowlark Labs LLC was founded in 2026 (title:
// Founder). "Six years in real estate" appears in About and matches 2019–2025.
// Removed from the page until confirmed, so they can be restored if wanted:
//   - EXOS: "client engagement increased by 30%" (no baseline, period or definition)
//   - EXOS: "team of 50+" (unclear whether direct reports or the wider team)
// EXOS was the employer, and the work was done at Google through EXOS; always write
// it as "EXOS at Google" and never present Google as the direct employer.
export const experience = {
  heading: "Experience",
  intro:
    "The order I'd tell it in: program management first, then real estate, and now software.",
  entries: [
    {
      dates: "2015 – 2019",
      role: "Program Manager",
      org: "EXOS at Google",
      points: [
        "Led a team and worked with leadership, stakeholders and clients on cross-functional programs.",
        "Led initiatives to increase client engagement, using tailored solutions and data-driven decisions.",
        "Acted as a technical advisor to leadership, using data to find where workflows could be improved.",
      ],
    },
    {
      dates: "2019 – 2025",
      role: "Licensed Realtor",
      org: "Real estate",
      points: [
        "Negotiated and closed transactions for buyers, investors and builders, relying on market analysis and ongoing client relationships.",
        "Built custom market analyses to show investment opportunities and help clients decide.",
        "Ran targeted marketing campaigns to raise property visibility.",
      ],
      closing:
        "The recurring problem was data scattered across spreadsheets and separate tools, which made decisions harder than they needed to be. That led me to start building software.",
    },
    {
      dates: "2026 – Present",
      role: "Founder",
      org: "Meadowlark Labs LLC",
      orgUrl: site.links.meadowlark,
      points: [
        "Started building software independently in 2025, after completing App Academy's full-stack software engineering bootcamp.",
        "Founded Meadowlark Labs LLC in 2026 as the company behind my products.",
        "Built and launched DealForge, OppMap, BuildGrade and YardCalc.",
      ],
    },
  ],
};

// REVIEW: wording is provisional. Each item draws only on the EXOS and real estate
// roles above, and on the Meadowlark Labs products. The small label under each
// item names where the experience comes from.
export const capabilities = {
  heading: "Capabilities",
  items: [
    {
      title: "Client & stakeholder relationships",
      body: "With EXOS at Google, I worked with leadership, stakeholders and clients across teams. In real estate I worked directly with buyers, investors and builders, and those relationships were a big part of closing transactions.",
      source: "EXOS at Google · Real estate",
    },
    {
      title: "Consultative sales & negotiation",
      body: "As a realtor I negotiated and closed transactions for buyers, investors and builders. I built custom market analyses to show clients their options and help them make important decisions, and ran marketing campaigns to make properties more visible.",
      source: "Real estate",
    },
    {
      title: "Program & operations management",
      body: "With EXOS at Google I led a team and managed programs that involved leadership, stakeholders and clients, with a focus on how efficiently the operation ran.",
      source: "EXOS at Google",
    },
    {
      title: "Process improvement",
      body: "With EXOS at Google I acted as a technical advisor to leadership, using data to find where workflows could be improved. In real estate I saw decisions made from scattered spreadsheets and separate tools, and I've since built software for part of that work: deal underwriting, market screening and cost estimating.",
      source: "EXOS at Google · Meadowlark Labs",
    },
    {
      title: "Product development",
      body: "I've built and launched four products, DealForge, OppMap, BuildGrade and YardCalc, aimed at the decisions people make about real estate, construction and yard projects.",
      source: "Meadowlark Labs",
    },
    {
      title: "Technical skills",
      body: "Languages, frameworks and tools I've worked with. Dynamics 365 Business Central is one I've studied.",
      source: "App Academy · Meadowlark Labs",
      skills: [
        "JavaScript",
        "TypeScript",
        "Python",
        "SQL",
        "React",
        "Next.js",
        "Flask",
        "PostgreSQL",
        "Firebase",
        "Docker",
        "Tailwind CSS",
        "API integrations",
        "OpenAI API",
        "Dynamics 365 Business Central",
      ],
    },
  ],
};

export const about = {
  heading: "About",
  paragraphs: [
    "I started in program management at EXOS at Google, spent six years in real estate working with buyers, investors and builders, and now build software through Meadowlark Labs.",
    "In all three, the work was mostly the same: listen to someone with a decision to make or a process that isn't working, figure out what is really going on, and help them get to something that works.",
    "I'm looking for client-facing technical work, such as solutions engineering, technical account management and customer success.",
    "Outside of work I'm usually outdoors or with family.",
  ],
};

// REVIEW: per Alex, the Microsoft Dynamics 365 Business Central Functional Consultant
// Associate certification expired in July 2026 and has not been renewed. The page
// therefore only states that the MB-800 exam was passed in July 2025; it never
// calls the certification current, and does not link to the Microsoft Learn profile.
// If the formal credential is ever shown, its expired status must be stated beside it.
export const credentials = {
  heading: "Education & Training",
  education: [
    {
      name: "App Academy",
      detail: "Full-Stack Software Engineering Bootcamp, 2025",
    },
    {
      name: "San Jose State University",
      detail: "B.S., Kinesiology",
    },
  ],
  training: [
    {
      name: "Microsoft MB-800 exam",
      detail: "Dynamics 365 Business Central Functional Consultant. Passed July 2025.",
    },
  ],
};

// REVIEW: phone number is intentionally left off the page. Add it back if you
// want it public.
export const contact = {
  heading: "Contact",
  intro:
    "Email is the easiest way to reach me. I'm also on LinkedIn, and some of my code is on GitHub.",
  links: [
    { label: "Email", value: site.email, href: `mailto:${site.email}` },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/alexgwright2",
      href: site.links.linkedin,
      external: true,
    },
    {
      label: "GitHub",
      value: "github.com/awright222",
      href: site.links.github,
      external: true,
    },
    {
      label: "Meadowlark Labs",
      value: "meadowlark-labs.com",
      href: site.links.meadowlark,
      external: true,
    },
  ],
};
