export const profile = {
  name: "Ethan Gapay",
  role: "Data Analyst",
  currentTitle: "Analyst, Data & Analysis",
  currentCompany: "Digitas",
  location: "Hackensack, NJ",
  email: "ethantgapay@gmail.com",
  resume: "/resume.pdf",
  photo: "egapay.jpg",
  available: true,
  availabilityNote: "Open to data analyst roles",
  headline: "Data analyst at Digitas, on the Samsung.com analytics team.",
  summary:
    "Turning site behavior into the reports and models that shape marketing strategy — cross-channel performance reporting, customer journey analysis, and the Python automation that keeps it all running. Previously Cisco and Quality Vision International.",
} as const;

export const socials = [
  { label: "GitHub", handle: "github.com/egapay", href: "https://github.com/egapay" },
  {
    label: "LinkedIn",
    handle: "linkedin.com/in/ethan-gapay",
    href: "https://www.linkedin.com/in/ethan-gapay/",
  },
] as const;

/**
 * Every figure here is traceable to the named source so it survives an interview
 * question. Do not add a metric without one.
 */
export const metrics = [
  { value: "5M", unit: "hands", label: "Blackjack outcomes modeled", source: "Blackjack Game Analysis" },
  { value: "2K+", unit: "pages", label: "Adobe Analytics tags extracted", source: "Samsung.com Analytics" },
  { value: "10K+", unit: "orders", label: "Sales records visualized", source: "Regional Sales Dashboard" },
  { value: "100+", unit: "cases", label: "Misrouted tickets auto-detected", source: "Cisco TAC automation" },
] as const;

export type Experience = {
  company: string;
  title: string;
  start: string;
  end: string;
  current?: boolean;
  context: string;
  bullets: string[];
  stack: string[];
};

export const experience: Experience[] = [
  {
    company: "Digitas",
    title: "Analyst, Data & Analysis (Web Analyst)",
    start: "Apr 2025",
    end: "Present",
    current: true,
    context:
      "Member of the Samsung.com analytics team, delivering website performance analysis and data insights that support marketing and product strategy.",
    bullets: [
      "Partner with Paid Media and CRM analytics teams to deliver monthly cross-channel performance reports, analyzing traffic, revenue, engagement, and conversion metrics to identify key drivers of website performance.",
      "Collaborate with Data & Platforms engineers on an internal analytics API integrating paid media and website data, contributing metric definitions, documentation, and QA validation.",
      "Built Python automation tools, including a web crawler that monitors Samsung.com URL taxonomy changes and scripts that parse analytics tagging data for debugging and validation.",
      "Conduct deep-dive behavioral analysis of site users — engagement depth, customer journey progression, and conversion patterns — to inform paid media strategy.",
    ],
    stack: ["Adobe Analytics", "Python", "Paid Media", "Stakeholder Reporting"],
  },
  {
    company: "Cisco Systems",
    title: "Technical Consultant Engineer Co-Op",
    start: "Jul 2023",
    end: "Dec 2023",
    context:
      "Member of the Technical Assistance Center team, supporting Cisco customers through the support ticket queue.",
    bullets: [
      "Developed an automation script that detected misrouted ASR-900/920 support cases, surfacing 100+ incorrectly categorized tickets and improving routing efficiency.",
      "Stored and structured case data in MongoDB for downstream reporting and analysis.",
      "Delivered technical and professional development presentations to engineering team members.",
    ],
    stack: ["Python", "MongoDB"],
  },
  {
    company: "Quality Vision International",
    title: "Systems Administrator Intern",
    start: "Aug 2022",
    end: "Apr 2023",
    context:
      "Member of the IT team, resolving support tickets and facilitating system administration projects and operational tasks.",
    bullets: [
      "Developed a proof-of-concept inventory tracking application using Python and MySQL.",
      "Built Python scripts to automate reporting workflows and reduce manual email processing time.",
    ],
    stack: ["Python", "MySQL"],
  },
];

export type Project = {
  title: string;
  category: "Analytics" | "Web";
  blurb: string;
  detail: string[];
  metric?: { value: string; label: string };
  tags: string[];
  href: string;
};

export const projects: Project[] = [
  {
    title: "Blackjack Game Analysis",
    category: "Analytics",
    blurb:
      "A statistical study of 5 million simulated hands, mapping how strategy choices move the house edge.",
    detail: [
      "Built a full analytics pipeline in Python, PostgreSQL, and Power BI covering transformation, modeling, and visualization.",
      "Documented the work end to end, from dataset exploration through statistical conclusions.",
    ],
    metric: { value: "5M", label: "hands analyzed" },
    tags: ["Python", "PostgreSQL", "Pandas", "Power BI", "Data Modeling"],
    href: "https://egapay.github.io/blackjack-analysis/",
  },
  {
    title: "Regional Sales Dashboard",
    category: "Analytics",
    blurb:
      "A stakeholder-facing Power BI dashboard turning 10,000+ e-commerce orders into decisions about regional performance.",
    detail: [
      "Designed KPI cards, bar and area charts, and detail tables around the questions stakeholders actually asked.",
      "Modeled an Excel order dataset for a fictional e-commerce company to surface sales performance and regional trends.",
    ],
    metric: { value: "10K+", label: "orders visualized" },
    tags: ["Power BI", "Excel", "Data Modeling"],
    href: "https://egapay.github.io/omni-goods-dashboard/",
  },
  {
    title: "Top Steam Game Analysis",
    category: "Analytics",
    blurb:
      "ETL and exploratory analysis on the top 100 Steam titles since 2009, looking for what separates hits from the rest.",
    detail: [
      "Built visualizations highlighting player engagement, release timing, and popularity patterns.",
    ],
    metric: { value: "100", label: "titles, 2009 onward" },
    tags: ["Python", "SQL", "Pandas", "Power BI", "ETL"],
    href: "https://egapay.github.io/steam-game-analysis/",
  },
  {
    title: "Margo's Dream Foundation",
    category: "Web",
    blurb:
      "A production website for a non-profit foundation, built and shipped for a real client.",
    detail: [],
    tags: ["React", "JavaScript", "Tailwind CSS"],
    href: "https://www.margosdreamfoundation.com/home",
  },
  {
    title: "RIT iSchool Website Redesign",
    category: "Web",
    blurb:
      "A full redesign of the RIT iSchool student website, focused on navigation and information hierarchy.",
    detail: [],
    tags: ["React", "JavaScript", "Tailwind CSS"],
    href: "https://people.rit.edu/~etg5588/ISTE340/iSchoolProject/",
  },
  {
    title: "The Demko Clinic",
    category: "Web",
    blurb:
      "A production website designed and built for a real client, supporting their business and online presence.",
    detail: [],
    tags: ["Client Communication", "Wix"],
    href: "https://www.demkoclinic.com/",
  },
  
];

export const skillGroups = [
  { label: "Languages & Query", items: ["Python", "SQL", "JavaScript"] },
  { label: "Analysis & BI", items: ["Adobe Analytics", "Excel", "Power BI"] },
  { label: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB"] },
  {
    label: "Practice",
    items: ["Data Modeling", "ETL Pipelines", "QA & Validation", "Stakeholder Reporting"],
  },
  // { label: "AI-Assisted Development", items: ["Microsoft Copilot", "Claude Code", "ChatGPT"] },
] as const;

export const education = {
  school: "Rochester Institute of Technology",
  shortSchool: "RIT",
  degree: "B.S. Computing and Information Technology",
  honors: "summa cum laude",
  start: "2020",
  end: "2024",
  concentration: "Databases, Web Development",
} as const;

// Order must match the render order in src/pages/index.tsx — Nav's scroll-spy
// assumes sections[0] is the first on the page and the last is the final one.
export const sections = [
  { id: "skills", label: "Skills" },
  { id: "work", label: "Work" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
] as const;
