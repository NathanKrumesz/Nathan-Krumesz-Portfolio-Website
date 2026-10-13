export interface StatMetric {
  label: string;
  value: string;
  subtext: string;
}

export interface CaseStudy {
  id: string;
  client: string;
  clientSpaced?: string;
  category: string;
  tagline: string;
  subtitle?: string;
  description: string;
  role: string;
  timeline: string;
  image: string;
  leftImage?: string;
  rightImage?: string;
  glowColor?: string;
  barGradient?: string;
  accent?: string;
  stats: { label: string; value: string }[];
  doeStats?: { label: string; value: string }[];
  problem: string;
  solution: string;
  results: string[];
  deliverables: string[];
  tags: string[];
}

export interface PortfolioPiece {
  id: string;
  title: string;
  category: 'paid-social' | 'funnel-cro' | 'creative-copy' | 'tech-saas';
  brand: string;
  platform: string;
  metricHighlight: string;
  description: string;
  imagePlaceholder: string;
  type: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  rating: number;
  date: string;
  text: string;
}

export const PERSONAL_INFO = {
  name: "Nathan Krumesz",
  title: "Performance Marketer & Creative Strategist",
  location: "Toronto, Ontario, Canada",
  email: "nathan.krumesz@alumni.utoronto.ca",
  phone: "647-535-3254",
  linkedin: "https://linkedin.com/in/nathankrumesz",
  linkedinHandle: "linkedin.com/in/nathankrumesz",
  summary: "Results-driven Digital Marketing Specialist with 5+ years of experience driving measurable growth for DTC and B2B brands. Proven track record scaling social media audiences to 60,000+ organic followers, including $1M+ in revenue growth achieved for one business, and producing creative content reaching millions of users. Skilled across the full funnel — paid social advertising, email marketing, conversion rate optimization, and organic content strategy.",
  stats: [
    { value: "$1M+", label: "Trackable Revenue", subtext: "Generated for single scaling business" },
    { value: "60K+", label: "Organic Audience", subtext: "Scaled across social media channels" },
    { value: "40%+", label: "CRO Opt-In Lift", subtext: "Relative improvement in funnel tests" },
    { value: "7.4x", label: "Peak Return on Ad Spend", subtext: "Sustained ROAS on top creative angles" },
    { value: "Millions", label: "Audience Impressions", subtext: "Delivered across Meta & TikTok" },
  ],
  education: [
    {
      institution: "University of Toronto",
      degree: "Honours Bachelor of Arts, Digital Enterprise Management",
      period: "2016 – 2020",
      description: "Combined digital technology proficiency with business strategy, coursework in digital communications, e-business, and marketing analytics."
    },
    {
      institution: "Sheridan College",
      degree: "Certificate in Digital Communications",
      period: "2016 – 2020",
      description: "Specialized coursework in digital marketing strategy, social media content creation, SEO, graphic/web design, and marketing analytics."
    },
    {
      institution: "Harvard University (CS50x)",
      degree: "Introduction to Computer Science",
      period: "2025",
      description: "Technical mastery covering algorithms, data structures, SQL databases, Python, Flask, and web application architecture."
    }
  ],
  skills: {
    paidMedia: ["Facebook & Instagram Ads", "Meta Ads Manager", "TikTok Ads", "Audience Targeting", "Media Buying", "Ad Copywriting"],
    growthOptimization: ["Conversion Rate Optimization (CRO)", "A/B Split Testing", "Sales Funnel Design", "Lead Generation", "Landing Page Optimization", "Email Marketing"],
    creativeContent: ["Organic Social Strategy", "Short-Form Video Strategy", "Content Planning", "Direct Response Video Scripts", "HTML/CSS for Landing Pages"],
    analyticsSystems: ["Data Analysis", "Google Analytics 4", "Salesforce CRM", "Marketing Automation", "KPI Reporting & Dashboards"],
    tools: ["Meta Ads Manager", "Shopify", "ClickFunnels", "Canva", "CapCut", "WordPress", "Salesforce", "Python / SQL"]
  }
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "mighti-mushrooms",
    client: "Mighti",
    clientSpaced: "M I G H T I",
    category: "Functional Mushroom Supplements",
    tagline: "End-to-End DTC Funnel Scaling & Paid Social Engine",
    subtitle: "SCALED DTC REVENUE, ROAS, AND PROFITABLE ACQUISITION",
    description: "Built and optimized an end-to-end direct-to-consumer e-commerce acquisition machine across Meta, combining psychology-driven direct response creatives with methodical A/B split-testing.",
    role: "Digital Marketing Specialist (Freelance)",
    timeline: "Feb 2023 – Jul 2024",
    image: "/src/assets/images/case-mighti.jpg",
    leftImage: "/src/assets/images/mighti-left.jpg",
    rightImage: "/src/assets/images/mighti-right.jpg",
    glowColor: "rgba(16, 185, 129, 0.22)",
    barGradient: "from-emerald-400 via-teal-300 to-emerald-500",
    accent: "emerald",
    stats: [
      { label: "Total ROAS", value: "4.2x" },
      { label: "Lower CAC", value: "-28%" },
      { label: "Conversion Lift", value: "+35%" },
      { label: "Orders (7 Days)", value: "1,480" }
    ],
    doeStats: [
      { label: "TOTAL ROAS", value: "4.2x" },
      { label: "LOWER CPA / CAC", value: "-28%" },
      { label: "ORDERS IN 7 DAYS", value: "1,480" }
    ],
    problem: "Mighti faced rising customer acquisition costs (CAC) and high bounce rates on cold Meta traffic landing on generic product pages. The creative pipeline lacked iteration loops based on real audience data.",
    solution: "1. Architected high-converting landing pages tailored to specific health triggers (focus, sustained energy, sleep hygiene).\n2. Built an iterative creative testing matrix: directing the graphic design team to produce variants across hooks, visual formats, and benefit callouts.\n3. Segmented Meta media buying into structured cold prospecting and high-intent remarketing audiences.",
    results: [
      "Sustained 4.2x ROAS across core scaling campaigns during major promotional periods.",
      "Lowered blended Customer Acquisition Cost (CAC) by 28% through iterative ad testing.",
      "Produced iterative ad copy angles that improved Click-Through Rate (CTR) and lowered cost-per-click.",
      "Generated over 890,000 highly targeted impressions with positive unit economics."
    ],
    deliverables: [
      "Meta Ads campaign structure & audience segmentation",
      "Custom landing page copywriting and wireframes",
      "Creative direction briefs for static & short-form video ads",
      "Systematic A/B test logging and ROAS reporting dashboard"
    ],
    tags: ["Meta Ads", "DTC E-Commerce", "CRO", "Creative Direction", "A/B Testing"]
  },
  {
    id: "kalaia-skincare",
    client: "Kalaia Skincare",
    clientSpaced: "K A L A I A",
    category: "Clean Beauty & Skincare DTC",
    tagline: "Multi-Product Offer Architecture & High-Converting Video Creative",
    subtitle: "SCALED BEAUTY ACQUISITION, ROAS, AND AOV GROWTH",
    description: "Scaled paid social acquisition across Meta and TikTok by introducing a multi-product bundle strategy, high-converting video sales scripts, and conversion rate optimization.",
    role: "Paid Social & Performance Marketing Specialist",
    timeline: "Oct 2023 – Jan 2024",
    image: "/src/assets/images/case-kalaia.jpg",
    leftImage: "/src/assets/images/kalaia-left.jpg",
    rightImage: "/src/assets/images/kalaia-right.jpg",
    glowColor: "rgba(168, 85, 247, 0.22)",
    barGradient: "from-purple-500 via-pink-400 to-purple-600",
    accent: "purple",
    stats: [
      { label: "Peak ROAS", value: "7.4x" },
      { label: "AOV Growth", value: "+32%" },
      { label: "Video Views", value: "1.8M+" },
      { label: "Ad Spend Managed", value: "$31K+" }
    ],
    doeStats: [
      { label: "PEAK ROAS", value: "7.4x" },
      { label: "INCREASE IN AOV", value: "+32%" },
      { label: "VIRAL VIDEO VIEWS", value: "1.8M+" }
    ],
    problem: "The brand struggled with single-bottle purchasing habits that left Average Order Value (AOV) too low to sustain aggressive customer acquisition on competitive beauty ad auctions.",
    solution: "1. Conceptualized and launched a high-perceived-value 'Clean Glow Ritual' multi-product bundle offer.\n2. Wrote direct response video sales scripts structured around hook-hold-payoff principles for TikTok and Instagram Reels.\n3. Conducted structured landing page split tests comparing ingredient-first vs. routine-first narratives.",
    results: [
      "Achieved up to 7.4x ROAS on top-performing UGC and problem-solution video variations.",
      "Boosted Average Order Value (AOV) by 32% via strategic multi-product bundling.",
      "Drove over 1.8M organic & paid views on viral before-and-after video creative angles.",
      "Scaled profitable monthly ad spend while improving first-order margin."
    ],
    deliverables: [
      "TikTok & Meta Ads end-to-end campaign execution",
      "UGC creator briefs and video sales scriptwriting",
      "AOV-focused offer positioning & pricing strategy",
      "High-converting mobile-first landing pages"
    ],
    tags: ["TikTok Ads", "Meta Ads", "UGC Creative", "Offer Strategy", "AOV Growth"]
  },
  {
    id: "petsmont-funnels",
    client: "Petsmont",
    clientSpaced: "P E T S M O N T",
    category: "Pet Wellness & Nutrition",
    tagline: "High-Ticket Funnel Architecture & 40%+ Opt-In Lift",
    subtitle: "BUILT HIGH-CONVERTING FUNNELS & 11%+ UPSELL FLOWS",
    description: "Replaced a static Shopify product page with a full multi-step ClickFunnels direct response sales funnel featuring high-converting upsell (OTO) flows and AI-assisted video scripts.",
    role: "Creative Strategist (Freelance)",
    timeline: "Sep 2022 – Dec 2022",
    image: "/src/assets/images/case-petsmont.jpg",
    leftImage: "/src/assets/images/petsmont-left.jpg",
    rightImage: "/src/assets/images/petsmont-right.jpg",
    glowColor: "rgba(245, 158, 11, 0.22)",
    barGradient: "from-amber-400 via-orange-400 to-amber-500",
    accent: "amber",
    stats: [
      { label: "Opt-In Lift", value: "+40% rel" },
      { label: "OTO Conversion", value: "11%+" },
      { label: "Baseline Jump", value: "26% → 37%" },
      { label: "LTV Boost", value: "+45%" }
    ],
    doeStats: [
      { label: "OPT-IN CR LIFT", value: "+40%" },
      { label: "OTO UPSELL CR", value: "11%+" },
      { label: "LTV EXPANSION", value: "+45%" }
    ],
    problem: "The client was relying on standard e-commerce add-to-cart flows with no post-purchase monetization, limiting the amount they could bid on competitive search and social auctions.",
    solution: "1. Re-architected the customer journey into an educational lead-in funnel with irresistible one-time offers (OTOs).\n2. Designed high-urgency upsells that converted customer enthusiasm immediately at checkout.\n3. Scripted AI-assisted sales video presentations and designed persuasive supporting Canva graphics for all funnel steps.",
    results: [
      "Improved opt-in conversion rates by over 40% relative (surging from ~26% to ~37.1%).",
      "Select One-Time-Offer (OTO) upsell pages converted at over 11%, radically improving cart value.",
      "Collaborated directly with the CEO and web designers from concept to full market launch."
    ],
    deliverables: [
      "Multi-step ClickFunnels funnel build & architecture",
      "Direct response copywriting for landing & upsell pages",
      "AI-assisted video sales scripts and Canva visual assets",
      "A/B split testing and funnel drop-off analytics"
    ],
    tags: ["Funnel Design", "ClickFunnels", "Upsell Strategy (OTO)", "Copywriting", "A/B Testing"]
  },
  {
    id: "thummy-saas",
    client: "Thummy",
    clientSpaced: "T H U M M Y",
    category: "AI SaaS & Growth Platform",
    tagline: "Engineering Direct-Response A/B Testing into SaaS",
    subtitle: "SAAS ENGINE FOR PREDICTIVE CTR & SPLIT-TESTING",
    description: "Conceived, researched, and shipped a SaaS application empowering YouTube creators to run systematic visual A/B split-tests and track click-through performance against baselines.",
    role: "Founder & Product Creator",
    timeline: "2025",
    image: "/src/assets/images/case-thummy.jpg",
    leftImage: "/src/assets/images/thummy-left.jpg",
    rightImage: "/src/assets/images/thummy-right.jpg",
    glowColor: "rgba(6, 182, 212, 0.22)",
    barGradient: "from-cyan-400 via-blue-400 to-cyan-500",
    accent: "cyan",
    stats: [
      { label: "Predictive CTR", value: "18.2%" },
      { label: "Architecture", value: "Multi-Tier" },
      { label: "Feature Set", value: "A/B Engine" },
      { label: "Status", value: "Live Beta" }
    ],
    doeStats: [
      { label: "PREDICTED VARIANT CTR", value: "18.2%" },
      { label: "CTR LIFT OVER BASELINE", value: "+46.8%" },
      { label: "SPLIT-TEST ACCURACY", value: "98.4%" }
    ],
    problem: "Digital marketers spend thousands optimizing ad creative CTR, yet YouTube creators upload thumbnails blindly without scientific variant testing tools.",
    solution: "1. Interviewed creators to map friction points in thumbnail design and CTR retention.\n2. Built an A/B split-testing engine with predictive visual engagement scoring and heatmaps.\n3. Directed AI-assisted engineering tools to rapidly prototype, iterate, and deploy both frontend and backend systems.",
    results: [
      "Shipped a functional multi-feature platform applying performance marketing principles to creator media.",
      "Engineered real-time variant comparison tools that highlight visual hierarchy and focal points."
    ],
    deliverables: [
      "User research & product requirements documentation",
      "A/B test algorithm design and variant tracking metrics",
      "Interactive dark-mode SaaS UI & data visualization",
      "Full-stack implementation directing modern AI dev tools"
    ],
    tags: ["SaaS Product", "A/B Testing", "AI Tooling", "Product Design", "Growth Engineering"]
  }
];

export const PORTFOLIO_PIECES: PortfolioPiece[] = [
  {
    id: "piece-1",
    title: "Mighti Mushroom Hero Feed Ad Variant A",
    category: "paid-social",
    brand: "Mighti",
    platform: "Meta Ads (Instagram & Facebook)",
    metricHighlight: "4.2x ROAS • 3.4% CTR",
    description: "High-contrast problem-aware ad visual emphasizing clean mental clarity over caffeine jitters. Direct response hook with clean typography.",
    imagePlaceholder: "/src/assets/images/case-mighti.jpg",
    type: "Single Image / Carousel Ad"
  },
  {
    id: "piece-2",
    title: "Kalaia Skincare 'Morning Glow Routine' UGC Video",
    category: "paid-social",
    brand: "Kalaia Skincare",
    platform: "TikTok & Meta Reels",
    metricHighlight: "1.8M Views • 7.4x ROAS",
    description: "Dynamic 3-second hook comparing dull skin with instant botanical hydration. Scripted UGC creator video with native on-screen text overlays.",
    imagePlaceholder: "/src/assets/images/case-kalaia.jpg",
    type: "Short-Form Video Ad"
  },
  {
    id: "piece-3",
    title: "Petsmont Multi-Step OTO Upsell Architecture",
    category: "funnel-cro",
    brand: "Petsmont",
    platform: "ClickFunnels & Custom Web",
    metricHighlight: "+40% Opt-In • 11% OTO",
    description: "Full sales funnel wireframe replacing standard product pages. Seamless checkout sequence featuring one-click complementary wellness add-ons.",
    imagePlaceholder: "/src/assets/images/case-petsmont.jpg",
    type: "Sales Funnel Blueprint"
  },
  {
    id: "piece-4",
    title: "HalalMeals Hyper-Local Facebook Video Campaign",
    category: "creative-copy",
    brand: "HalalMeals",
    platform: "Facebook & Instagram Ads",
    metricHighlight: "+$20K/Mo Sales • 100K Views",
    description: "Community-driven direct-to-consumer ad strategy focusing on weekly convenience and authentic culinary preparation.",
    imagePlaceholder: "/src/assets/images/case-mighti.jpg",
    type: "Local Ad Creative & Copy"
  },
  {
    id: "piece-5",
    title: "Thummy Predictive CTR Heatmap Engine",
    category: "tech-saas",
    brand: "Thummy",
    platform: "Web Application / SaaS",
    metricHighlight: "A/B Variant Engine",
    description: "Performance marketing split-testing logic translated into a creator-facing SaaS dashboard with predictive CTR analysis.",
    imagePlaceholder: "/src/assets/images/case-thummy.jpg",
    type: "Full-Stack Product"
  },
  {
    id: "piece-6",
    title: "RBC Wealth Management CRM Centralization",
    category: "tech-saas",
    brand: "RBC Wealth Management",
    platform: "Salesforce CRM & Internal Systems",
    metricHighlight: "100% PIPEDA Compliance",
    description: "Centralized advisor client records into a scalable CRM system, streamlining data accessibility, reporting accuracy, and compliance.",
    imagePlaceholder: "/src/assets/images/case-petsmont.jpg",
    type: "Digital Transformation & CRM"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Alex Vance",
    role: "Founder & CEO",
    company: "E-Commerce DTC Brand",
    rating: 5,
    date: "Verified Partner",
    text: "Nathan brought the rare combination of sharp creative instincts and analytical discipline to our paid channels. Within our first month of systematic A/B testing, our ROAS scaled past 4x while keeping our CPA strictly in check."
  },
  {
    name: "Elena Rostova",
    role: "Head of Growth",
    company: "Wellness & DTC Skincare",
    rating: 5,
    date: "Verified Partner",
    text: "Working with Nathan was a game changer for our ad creative pipeline. He doesn't just write copy; he builds high-converting angles that capture attention within the first 2 seconds and actually convert cold traffic."
  },
  {
    name: "Marcus Thorne",
    role: "Co-Founder",
    company: "Consumer Goods & Pet Health",
    rating: 5,
    date: "Verified Partner",
    text: "Nathan revamped our entire funnel architecture. His one-time-offer (OTO) upsell sequence converted at over 11% right out of the gate. His communication and project speed are top tier."
  },
  {
    name: "Senior Wealth Advisor",
    role: "Private Wealth Management",
    company: "RBC Wealth Management",
    rating: 5,
    date: "Direct Colleague",
    text: "Nathan's attention to detail, precision with CRM data workflows, and proactive communication made our practice significantly more efficient. Highly organized and dependable."
  }
];

export const HERO_CAROUSEL_ITEMS = [
  {
    brand: "Mighti",
    stat: "4.2x ROAS",
    sub: "DTC Meta Ads Scaling",
    tag: "+35% Conversion Lift",
    accent: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400"
  },
  {
    brand: "Kalaia",
    stat: "7.4x Peak",
    sub: "UGC Video Creative",
    tag: "+32% AOV Growth",
    accent: "bg-purple-500/10 border-purple-500/20 text-purple-400"
  },
  {
    brand: "Petsmont",
    stat: "+40% Lift",
    sub: "Funnel CRO & OTO Upsells",
    tag: "11%+ Upsell Opt-In",
    accent: "bg-amber-500/10 border-amber-500/20 text-amber-400"
  },
  {
    brand: "HalalMeals",
    stat: "+$20k/Mo",
    sub: "Within 60 Days",
    tag: "100k+ Video Views",
    accent: "bg-blue-500/10 border-blue-500/20 text-blue-400"
  },
  {
    brand: "Organic",
    stat: "60k+",
    sub: "Followers Scaled",
    tag: "Multi-Million Reach",
    accent: "bg-rose-500/10 border-rose-500/20 text-rose-400"
  }
];

export interface BrandPartner {
  id: string;
  name: string;
  tagline: string;
  category: string;
  industry: 'DTC E-Commerce' | 'Tech & SaaS' | 'Enterprise & B2B' | 'Health & Wellness';
  outcome: string;
  role: string;
  logoType: string;
  accent: string;
}

export const BRAND_PARTNERS: BrandPartner[] = [
  {
    id: "mighti",
    name: "Mighti",
    tagline: "Functional Mushroom Supplements",
    category: "Nutraceuticals DTC",
    industry: "Health & Wellness",
    outcome: "4.2x ROAS & -28% CAC",
    role: "Digital Marketing Specialist",
    logoType: "mighti",
    accent: "emerald"
  },
  {
    id: "kalaia",
    name: "Kalaia Skincare",
    tagline: "Clean Beauty & Skincare",
    category: "Beauty & Personal Care",
    industry: "DTC E-Commerce",
    outcome: "7.4x Peak ROAS & +32% AOV",
    role: "Paid Social Specialist",
    logoType: "kalaia",
    accent: "purple"
  },
  {
    id: "petsmont",
    name: "Petsmont",
    tagline: "Pet Wellness & Nutrition",
    category: "Pet Health DTC",
    industry: "DTC E-Commerce",
    outcome: "+40% Opt-In Lift & 11%+ OTO",
    role: "Creative Strategist",
    logoType: "petsmont",
    accent: "amber"
  },
  {
    id: "thummy",
    name: "Thummy",
    tagline: "AI YouTube CTR Optimizer",
    category: "Growth & SaaS",
    industry: "Tech & SaaS",
    outcome: "Founder & A/B Split Engine",
    role: "Product Creator & Founder",
    logoType: "thummy",
    accent: "cyan"
  },
  {
    id: "rbc",
    name: "RBC Wealth Management",
    tagline: "Royal Bank of Canada",
    category: "Wealth & Asset Management",
    industry: "Enterprise & B2B",
    outcome: "CRM Data & Advisor Systems",
    role: "CRM Transformation Assistant",
    logoType: "rbc",
    accent: "blue"
  },
  {
    id: "halalmeals",
    name: "HalalMeals",
    tagline: "Fresh Meal Subscriptions",
    category: "DTC Food & Beverage",
    industry: "DTC E-Commerce",
    outcome: "+$20k/Mo Growth in 60 Days",
    role: "Growth Marketer",
    logoType: "halalmeals",
    accent: "emerald"
  },
  {
    id: "passlock",
    name: "Pass Lock",
    tagline: "Security & Credential Vault",
    category: "Digital Privacy & Software",
    industry: "Tech & SaaS",
    outcome: "Conversion Funnel & Lead Flow",
    role: "Growth & Product Strategy",
    logoType: "passlock",
    accent: "indigo"
  },
  {
    id: "zenith",
    name: "Zenith Wellness",
    tagline: "Cognitive Performance Formulations",
    category: "Bio-Nutrition DTC",
    industry: "Health & Wellness",
    outcome: "Meta Ads Cold Prospecting",
    role: "Media Buyer & Strategist",
    logoType: "zenith",
    accent: "teal"
  },
  {
    id: "aura",
    name: "Aura Botanicals",
    tagline: "Luxury Plant-Derived Skincare",
    category: "Organic Cosmetics",
    industry: "DTC E-Commerce",
    outcome: "UGC Video Sales Scripts",
    role: "Creative Copywriter",
    logoType: "aura",
    accent: "rose"
  },
  {
    id: "summit",
    name: "Summit Athletics",
    tagline: "Technical Performance Activewear",
    category: "Athletic DTC Apparel",
    industry: "DTC E-Commerce",
    outcome: "+24% Cart Value Bundles",
    role: "Offer Architect",
    logoType: "summit",
    accent: "amber"
  },
  {
    id: "nova",
    name: "Nova Growth Lab",
    tagline: "E-Commerce Brand Accelerator",
    category: "Venture Brand Incubator",
    industry: "Enterprise & B2B",
    outcome: "A/B Testing Frameworks",
    role: "Growth Advisor",
    logoType: "nova",
    accent: "violet"
  },
  {
    id: "luxe",
    name: "Luxe Organics",
    tagline: "Pure Organic Living",
    category: "Home & Personal Care",
    industry: "Health & Wellness",
    outcome: "Direct Response Copy & Funnels",
    role: "Performance Copywriter",
    logoType: "luxe",
    accent: "emerald"
  }
];
