export type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  meta: string;
  kicker: string;
  summary: string;
  problem: string;
  insight: string;
  strategy: string;
  execution: string;
  outcome: string;
  scope: string;
  tags: string[];
  metrics: string[];
  mediaType?: "video" | "image";
  coverImage: string;
  posterImage?: string;
  backgroundImage: string;
};

export type Article = {
  slug: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
};

export type Venture = {
  slug: string;
  name: string;
  category: string;
  description: string;
  impact: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "ipx",
    title: "IPX",
    client: "IPX",
    meta: "Fintech / IP Monetization / Venture Systems",
    kicker:
      "Reframing IP from a legal asset into a monetizable operating platform.",
    summary:
      "Built a premium strategic identity and venture narrative for a platform turning intellectual property into a more liquid, investable asset class.",
    problem:
      "The category lacked a coherent language that could speak to founders, rights holders, capital partners, and institutional stakeholders at the same level of sophistication.",
    insight:
      "The opportunity was not just branding a fintech company. It was designing trust for a new market behavior where intellectual property could be treated like infrastructure.",
    strategy:
      "Position IPX as a category-defining platform with the discipline of financial technology, the clarity of an enterprise product, and the cultural fluency of a modern brand system.",
    execution:
      "Developed the strategic architecture, market language, narrative hierarchy, visual direction, and executive-facing communication system to support partnerships, investor dialogue, and ecosystem growth.",
    outcome:
      "The platform moved from a conceptual proposition to a high-credibility operating brand able to frame larger conversations around assetization, innovation, and structured growth.",
    scope:
      "Category strategy, narrative architecture, visual system, founder positioning, investor communications, and ecosystem framing.",
    tags: ["Category Design", "Fintech", "Brand System"],
    metrics: [
      "Established a premium market narrative suitable for institutional conversations.",
      "Created a modular system spanning brand, product, and partnership communication.",
      "Supported a more credible foundation for capital, advisory, and strategic expansion.",
    ],
    mediaType: "video",
    coverImage: "/media/ipx-new-v2.mp4",
    posterImage:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=80",
    backgroundImage:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1800&q=80",
  },
  {
    slug: "cbd-water",
    title: "CBD Water",
    client: "CBD Water",
    meta: "CPG / Wellness / Cultural Brand Strategy",
    kicker:
      "Building a beverage brand that could operate credibly in both lifestyle and retail environments.",
    summary:
      "Created a sharper strategic position and premium visual language for a wellness beverage competing in an increasingly crowded category.",
    problem:
      "The market was flooded with lookalike wellness products that either leaned too clinical or too trend-driven, making differentiation fragile and short-lived.",
    insight:
      "The strongest opportunity sat in creating a system that could feel culturally current while remaining shelf-ready, scalable, and commercially disciplined.",
    strategy:
      "Build a brand system that balanced desirability with legitimacy, allowing the product to move fluidly across consumer, retail, and partnership contexts.",
    execution:
      "Defined the positioning, packaging direction, creative architecture, and storytelling system while aligning the brand with a wider growth narrative around modern wellness and everyday ritual.",
    outcome:
      "The company gained a more ownable presence, a cleaner go-to-market story, and a stronger platform for distribution, partnerships, and audience expansion.",
    scope:
      "Positioning, packaging direction, creative leadership, retail narrative, and strategic communications.",
    tags: ["CPG", "Wellness", "Go-To-Market"],
    metrics: [
      "Clarified the role of the brand across shelf, content, and partnership touchpoints.",
      "Improved category distinction without sacrificing commercial accessibility.",
      "Created a more scalable framework for future product extensions.",
    ],
    mediaType: "video",
    coverImage: "/media/cbd-water-revised.mp4",
    posterImage: "/media/cbd-water-life-enhanced-1.png",
    backgroundImage: "/media/cbd-water-life-enhanced-1.png",
  },
  {
    slug: "agency-ecosystem",
    title: "Agency Ecosystem",
    client: "Multi-venture Agency Platform",
    meta: "Creative / Strategy / Operating Model",
    kicker:
      "Turning fragmented capabilities into a coordinated growth engine.",
    summary:
      "Designed an interconnected agency ecosystem capable of serving brands across strategy, creative, production, and venture incubation without losing coherence.",
    problem:
      "Traditional agency structures often isolate strategy, creative, and execution into separate business lines, slowing decision-making and weakening leverage.",
    insight:
      "The real differentiator was not service breadth. It was orchestration: building a system where specialized capabilities felt like one operating environment.",
    strategy:
      "Shape the platform as an ecosystem rather than a holding company, with a shared strategic language, aligned positioning, and distinct but interoperable offers.",
    execution:
      "Developed the architecture, narrative, service design, and internal framing needed to align multiple ventures under a common strategic philosophy while preserving individual market relevance.",
    outcome:
      "The ecosystem gained a clearer market story, stronger internal coherence, and a more scalable way to win higher-value mandates that demanded integrated thinking.",
    scope:
      "Platform strategy, brand architecture, service design, offer framing, and growth narrative.",
    tags: ["Platform Design", "Agency Model", "Systems Thinking"],
    metrics: [
      "Unified multiple ventures under a consistent market narrative.",
      "Improved clarity for clients evaluating complex, cross-disciplinary mandates.",
      "Created a stronger foundation for scalable collaboration and expansion.",
    ],
    mediaType: "video",
    coverImage: "/media/agency-ecosystem-reel.mp4",
    posterImage:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&q=80",
    backgroundImage:
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=1800&q=80",
  },
];

export const articles: Article[] = [
  {
    slug: "brand-as-operating-system",
    title: "Brand as Operating System",
    category: "Strategy",
    date: "2026",
    excerpt:
      "Why the most effective brands no longer behave like communications layers, but like integrated decision-making systems.",
  },
  {
    slug: "cultural-timing-is-a-capability",
    title: "Cultural Timing Is a Capability",
    category: "Culture",
    date: "2026",
    excerpt:
      "Relevance is not luck. It is a discipline built from pattern recognition, narrative precision, and decisive execution.",
  },
  {
    slug: "ai-workflows-for-executive-teams",
    title: "AI Workflows for Executive Teams",
    category: "AI Workflows",
    date: "2026",
    excerpt:
      "How leadership teams can use AI to compress research, accelerate ideation, and increase strategic throughput without diluting judgment.",
  },
  {
    slug: "ip-monetization-needs-better-design",
    title: "IP Monetization Needs Better Design",
    category: "IP Monetization",
    date: "2026",
    excerpt:
      "The future of intangible asset markets depends on better interfaces for trust, valuation, and narrative framing.",
  },
];

export const ventures: Venture[] = [
  {
    slug: "ipx",
    name: "IPX",
    category: "Fintech Platform",
    description:
      "A platform built around the monetization and structured activation of intellectual property as a strategic asset class.",
    impact:
      "Creates a clearer bridge between innovation, ownership, and enterprise value creation.",
  },
  {
    slug: "agency-ecosystem",
    name: "Agency Ecosystem",
    category: "Operating Platform",
    description:
      "A coordinated set of ventures and specialist capabilities designed to deliver integrated strategy, creative, and execution.",
    impact:
      "Turns fragmented service capacity into a scalable ecosystem with stronger leverage and higher-value outcomes.",
  },
  {
    slug: "cbd-water",
    name: "CBD Water",
    category: "Consumer Venture",
    description:
      "A wellness-forward beverage platform shaped to balance lifestyle desire, retail readiness, and long-term brand equity.",
    impact:
      "Demonstrates how category fluency and disciplined positioning can unlock more durable growth paths in CPG.",
  },
];
