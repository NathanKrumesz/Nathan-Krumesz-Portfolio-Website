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
  videoUrl?: string;
  videoTitle?: string;
  videoPoster?: string;
  secondaryVideoUrl?: string;
  secondaryVideoTitle?: string;
  secondaryVideoPoster?: string;
  leftImage?: string;
  rightImage?: string;
  leftVideo?: string;
  rightVideo?: string;
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
  category: 'video-ads' | 'paid-social' | 'funnel-cro' | 'lead-gen' | 'organic-viral' | 'tech-saas';
  brand: string;
  platform: string;
  metricHighlight: string;
  description: string;
  imagePlaceholder: string;
  videoUrl?: string;
  type: string;
  galleryImages?: string[];
  externalUrl?: string;
  externalUrlLabel?: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  rating: number;
  date: string;
  text: string;
  videoUrl?: string;
  videoPoster?: string;
  metric?: string;
}

export const PERSONAL_INFO = {
  name: "Nathan Krumesz",
  title: "Performance Marketer & Creative Strategist",
  location: "Toronto, Ontario, Canada",
  email: "nathan.krumesz@alumni.utoronto.ca",
  linkedin: "https://linkedin.com/in/nathankrumesz",
  linkedinHandle: "linkedin.com/in/nathankrumesz",
  spotifyPodcast: {
    title: "SaaS Growth Secrets with Nathan Krumesz",
    showName: "SaaS Growth Secrets",
    url: "https://open.spotify.com/show/0uvYSFwog366kyHsrmFZ3D?si=cd69d48bf2d74df9",
    episodes: 70,
    coverArt: "/portfolio/podcast-cover.jpg",
    rating: "5.0 ★",
    description: "Documenting practical takeaways, webinar sales scripts, funnel hacking epiphanies, and conversion frameworks learned while scaling high-growth SaaS and e-commerce companies."
  },
  summary: "Results-driven Digital Marketing Specialist with 5+ years of experience driving measurable growth for DTC and B2B brands. Proven track record scaling social media audiences to 60,000+ organic followers, including $1M+ in revenue growth achieved for one business, and producing creative content reaching millions of users. Skilled across the full funnel — paid social advertising, email marketing, conversion rate optimization, and organic content strategy.",
  stats: [
    { value: "$1M+", label: "Trackable Revenue", subtext: "Generated for single scaling business" },
    { value: "60K+", label: "Organic Audience", subtext: "Scaled across social media channels" },
    { value: "40%+", label: "CRO Opt-In Lift", subtext: "Relative improvement in funnel tests" },
    { value: "2x", label: "AOV Expansion", subtext: "Doubled average order value from $90 to $180" },
    { value: "2M+", label: "IG Reels Views in 30 Days", subtext: "Achieved for an account with only 1k followers" },
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
    subtitle: "SCALED DTC REVENUE, DOUBLED AOV, AND OUTPERFORMED AGENCY TEAM",
    description: "Led the full marketing campaign for Mighti's flagship 'Level Up' nootropic supplement. Designed high-converting ClickFunnels landing and upsell pages, produced top-performing Meta ad creatives, directed copywriting and video sales scripts, and executed Klaviyo email flows.",
    role: "Digital Marketing Specialist (Freelance)",
    timeline: "Feb 2023 – Jul 2024",
    image: "/src/assets/images/case-mighti.jpg",
    videoUrl: "/videos/mighti-sales-vsl.mp4",
    videoPoster: "/portfolio/video-thumbs/mighti-sales-vsl-frame.jpg",
    secondaryVideoUrl: "/videos/mighti-lvl-up-person.mp4",
    secondaryVideoTitle: "Mighti 'If Level Up Was A Person' Creative Video Ad",
    secondaryVideoPoster: "/portfolio/video-thumbs/mighti-lvl-up-person-frame.jpg",
    leftVideo: "/videos/mighti-iphone-notes.mp4",
    leftImage: "/portfolio/video-thumbs/mighti-iphone-notes-frame.jpg",
    rightVideo: "/videos/mighti-lvl-up-person.mp4",
    rightImage: "/portfolio/video-thumbs/mighti-lvl-up-person-frame.jpg",
    glowColor: "rgba(16, 185, 129, 0.22)",
    barGradient: "from-emerald-400 via-teal-300 to-emerald-500",
    accent: "emerald",
    stats: [
      { label: "AOV Growth", value: "2x" },
      { label: "Baseline AOV", value: "$90" },
      { label: "Optimized AOV", value: "$180" },
      { label: "Agency Beat", value: "Top Performer" }
    ],
    doeStats: [
      { label: "AOV EXPANSION", value: "2x" },
      { label: "PEAK CART VALUE", value: "$180" },
      { label: "OUTPERFORMED AGENCY", value: "#1 Ad Set" }
    ],
    problem: "Mighti was launching their new nootropic supplement 'Level Up' into a crowded market. An external third-party agency team with multiple employees had been hired, but their generic ads and cold product pages failed to achieve sustainable average order values or audience retention.",
    solution: "1. Architected high-converting ClickFunnels landing pages and upsell flows tailored directly to customer avatars (combating brain fog, boosting sustained focus, eliminating caffeine jitters).\n2. Built an iterative creative testing matrix across hooks, visual formats (e.g. 'Clear Brain Fog in 15 Min', '#1 Brain Booster', 'Old Me vs New Me', 'iPhone Notes'), and benefit callouts.\n3. Managed full-cycle media buying and audience segmentation on Meta Ads Manager.\n4. Deployed automated Klaviyo email flows (abandoned cart recovery and customer onboarding).",
    results: [
      "Created the company's best-performing ads in brand history, outperforming a dedicated multi-person third-party agency.",
      "Doubled Average Order Value (AOV) from ~$90 to $180 at peak through strategic upsell sequences.",
      "Engineered winning video sales scripts and high-converting visual creative angles that scaled direct acquisition.",
      "Built automated post-purchase and abandoned cart recovery email sequences with Klaviyo."
    ],
    deliverables: [
      "ClickFunnels landing pages and multi-step upsell architecture",
      "High-converting static & short-form video ad creative concepts",
      "Direct response copywriting and video sales presentation scripts",
      "Meta Ads campaign structure, audience targeting & media buying",
      "Klaviyo email marketing automation & abandoned cart flows"
    ],
    tags: ["Meta Ads", "ClickFunnels", "Klaviyo", "DTC E-Commerce", "CRO", "Creative Direction", "A/B Testing"]
  },
  {
    id: "kalaia-skincare",
    client: "Kalaia Skincare",
    clientSpaced: "K A L A I A",
    category: "Clean Beauty & Skincare DTC",
    tagline: "Multi-Product Offer Architecture & High-Converting Video Creative",
    subtitle: "SCALED BEAUTY ACQUISITION & CUSTOM SALES FUNNEL ARCHITECTURE",
    description: "Built the full-cycle direct response campaign for Kalaia's Detox & Balance Cleansing Bar. Engineered the complete ClickFunnels sales funnel, upsell flows, persuasive video sales scripts, Meta ad creatives, and automated email retention workflows.",
    role: "Paid Social & Funnel Specialist",
    timeline: "Oct 2023 – Jan 2024",
    image: "/src/assets/images/case-kalaia.jpg",
    videoUrl: "/videos/kalaia-sales-vsl.mp4",
    videoTitle: "Kalaia Detox & Balance Direct Response Sales Video (VSL)",
    videoPoster: "/portfolio/video-thumbs/kalaia-sales-vsl-frame.jpg",
    secondaryVideoUrl: "/videos/kalaia-how-to-use.mp4",
    secondaryVideoTitle: "Kalaia 'How To Use Detox & Balance Bar' Demonstration Ad",
    leftVideo: "/videos/kalaia-how-to-use.mp4",
    leftImage: "/portfolio/video-thumbs/kalaia-how-to-use-frame.jpg",
    rightImage: "/src/assets/images/kalaia-left.jpg",
    glowColor: "rgba(168, 85, 247, 0.22)",
    barGradient: "from-purple-500 via-pink-400 to-purple-600",
    accent: "purple",
    stats: [
      { label: "Funnel Build", value: "100%" },
      { label: "Upsell Flow", value: "Multi-Tier" },
      { label: "Sales Script", value: "Direct Response" },
      { label: "Email Retention", value: "Automated" }
    ],
    doeStats: [
      { label: "CAMPAIGN ARCHITECTURE", value: "100%" },
      { label: "VIDEO SALES LETTER", value: "Direct Response" },
      { label: "OFFER CREATION", value: "Multi-Step" }
    ],
    problem: "The brand struggled with single-item purchasing habits on static Shopify pages that left cart value too low to scale customer acquisition on competitive social ad channels.",
    solution: "1. Conceptualized and launched a high-perceived-value 'Detox & Balance' multi-product bundle offer with custom landing page design.\n2. Wrote direct response video sales presentation scripts structured around hook-hold-payoff principles for Meta and TikTok.\n3. Designed 9:16 vertical demonstration video ads and creative assets showcasing the unique bar lather and natural ingredients.\n4. Deployed automated abandoned cart email sequences with targeted promotions to recover lost shoppers.",
    results: [
      "Engineered an end-to-end ClickFunnels acquisition funnel with post-purchase upsells.",
      "Scripted and produced high-retention direct response video sales presentations and 9:16 demonstration ads.",
      "Created graphic design assets, sales copy, and landing page wireframes from scratch.",
      "Built high-converting abandoned cart promotional email sequences to maximize campaign margin."
    ],
    deliverables: [
      "ClickFunnels landing page and upsell funnel design",
      "Direct response video sales scriptwriting & video ads",
      "9:16 vertical product ritual video demonstration",
      "Meta Ads 'Detox & Balance' 9-creative paid social ad suite (promotions, mechanism breakdown, comparisons)",
      "Meta Ads campaign structure, creative testing matrix & media buying"
    ],
    tags: ["TikTok Ads", "Meta Ads", "Video Sales Letter", "Offer Strategy", "ClickFunnels", "Email Automation"]
  },
  {
    id: "petsmont-funnels",
    client: "Petsmont",
    clientSpaced: "P E T S M O N T",
    category: "Pet Wellness & Nutrition",
    tagline: "Touch & Heal Paw Balm: High-Ticket Funnel Architecture & 40%+ Opt-In Lift",
    subtitle: "BUILT HIGH-CONVERTING FUNNELS & 11%+ UPSELL FLOWS",
    description: "Brought in to promote Petsmont's 'Touch and Heal' paw balm for dogs. Engineered an end-to-end ClickFunnels sales funnel replacing a standard Shopify product page, designed irresistible One-Time-Offer (OTO) upsells, wrote video sales scripts, and ran systematic A/B split tests.",
    role: "Creative Strategist & Funnel Architect (Freelance)",
    timeline: "Sep 2022 – Dec 2022",
    image: "/portfolio/touch-heal-3-screen.png",
    videoUrl: "/videos/petsmont-sales-vsl.mp4",
    videoTitle: "Petsmont Touch & Heal Canine Paw Balm Sales Presentation",
    videoPoster: "/portfolio/video-thumbs/petsmont-sales-vsl-frame.jpg",
    leftVideo: "/videos/petsmont-sales-vsl.mp4",
    leftImage: "/portfolio/video-thumbs/petsmont-sales-vsl-frame.jpg",
    rightImage: "/portfolio/petsmont/received_508047694677798.jpeg",
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
    problem: "Petsmont was relying on standard e-commerce add-to-cart flows with no post-purchase monetization, limiting the amount they could bid on competitive search and social auctions for single product sales.",
    solution: "1. Re-architected the customer journey into an educational lead-in funnel with irresistible one-time offers (OTOs).\n2. Designed high-urgency upsells that converted customer enthusiasm immediately at checkout.\n3. Scripted sales video presentations and designed persuasive supporting graphics for all funnel steps.\n4. Collaborated directly with the CEO and web designer from initial wireframing to successful live launch.",
    results: [
      "Improved opt-in conversion rates by over 40% relative (surging from ~26% to ~37.1%).",
      "Select One-Time-Offer (OTO) upsell pages converted at over 11%, radically improving cart value.",
      "Delivered a repeatable funnel blueprint that lowered acquisition costs and elevated customer lifetime value.",
      "Produced comprehensive long-form direct-response sales copy, video presentation scripts, and graphic layouts."
    ],
    deliverables: [
      "Multi-step ClickFunnels funnel build & architecture",
      "Direct response copywriting for long-form sales & upsell pages",
      "Video sales presentation script and supporting visual assets",
      "A/B split testing and funnel drop-off analytics"
    ],
    tags: ["Funnel Design", "ClickFunnels", "Upsell Strategy (OTO)", "Copywriting", "A/B Testing"]
  }
];

export const PORTFOLIO_PIECES: PortfolioPiece[] = [
  // --- VIDEO ADS & VSLs ---
  {
    id: "piece-vsl-mighti",
    title: "Mighti 'Level Up' Full Video Sales Letter (VSL)",
    category: "video-ads",
    brand: "Mighti",
    platform: "ClickFunnels Sales Funnel",
    metricHighlight: "Doubled AOV $90 → $180 • #1 Brand Ad",
    description: "Complete direct response Video Sales Letter (VSL) scripted, conceptualized, and produced for Mighti's 'Level Up' nootropic supplement. Outperformed dedicated third-party agency creative.",
    imagePlaceholder: "/portfolio/video-thumbs/mighti-sales-vsl-frame.jpg",
    videoUrl: "/videos/mighti-sales-vsl.mp4",
    type: "Full Direct Response Video Sales Letter"
  },
  {
    id: "piece-vsl-kalaia",
    title: "Kalaia 'Detox & Balance' Full Video Sales Letter (VSL)",
    category: "video-ads",
    brand: "Kalaia Skincare",
    platform: "Direct Response Funnel",
    metricHighlight: "Full Video Sales Letter & Funnel",
    description: "Full direct-response video sales presentation scripted and produced for Kalaia's Detox & Balance Cleansing Bar, structured with compelling problem-solution hooks and botanical proof.",
    imagePlaceholder: "/portfolio/video-thumbs/kalaia-sales-vsl-frame.jpg",
    videoUrl: "/videos/kalaia-sales-vsl.mp4",
    type: "Full Direct Response Video Sales Letter"
  },
  {
    id: "piece-vsl-petsmont",
    title: "Petsmont 'Touch & Heal' Sales Presentation Video",
    category: "video-ads",
    brand: "Petsmont",
    platform: "ClickFunnels Sales Page",
    metricHighlight: "+40% Opt-In Lift • 11%+ OTO",
    description: "Educational canine wellness sales video presentation scripted and created for Petsmont's Touch and Heal paw balm, driving high checkout conversion and multi-unit bundle uptake.",
    imagePlaceholder: "/portfolio/video-thumbs/petsmont-sales-vsl-frame.jpg",
    videoUrl: "/videos/petsmont-sales-vsl.mp4",
    type: "Video Sales Presentation & Script"
  },
  {
    id: "piece-vid-kalaia-demo",
    title: "Kalaia 'How To Use Detox & Balance Bar' Video Ad",
    category: "video-ads",
    brand: "Kalaia Skincare",
    platform: "Meta & TikTok Video Ads (9:16)",
    metricHighlight: "9:16 Vertical Product Ritual Ad",
    description: "Dynamic product demonstration and educational ritual video ad designed in 9:16 format, showcasing instant lathering, usage instructions, and clean botanical ingredients.",
    imagePlaceholder: "/portfolio/video-thumbs/kalaia-how-to-use-frame.jpg",
    videoUrl: "/videos/kalaia-how-to-use.mp4",
    type: "9:16 Product Demo & Social Video Ad"
  },
  {
    id: "piece-vid-halalmeals",
    title: "HalalMeals Local Viral Toronto Video Ad",
    category: "video-ads",
    brand: "HalalMeals",
    platform: "Facebook & Instagram Ads",
    metricHighlight: "+$20K/Mo in 60 Days • 100k+ Views",
    description: "Conceptualized and ran a local direct-response video ad across the Greater Toronto Area that went viral organically, scaling fresh meal subscription revenue from $0 to $20,000/month.",
    imagePlaceholder: "/portfolio/video-thumbs/halal-meals-ad-frame.jpg",
    videoUrl: "/videos/halal-meals-ad.mp4",
    type: "Viral Direct Response Video Ad"
  },
  {
    id: "piece-vid-mighti-person",
    title: "Mighti 'If Level Up Was A Person' Creative Video Ad",
    category: "video-ads",
    brand: "Mighti",
    platform: "TikTok & Reels Video Ad (9:16)",
    metricHighlight: "9:16 Short-Form Persona Ad",
    description: "Humorous, high-retention persona ad positioning 'Level Up' against sluggish afternoon fatigue. Direct response angle crafted to capture attention within the first 2 seconds.",
    imagePlaceholder: "/portfolio/video-thumbs/mighti-lvl-up-person-frame.jpg",
    videoUrl: "/videos/mighti-lvl-up-person.mp4",
    type: "Short-Form Social Video Ad"
  },
  {
    id: "piece-vid-mighti-notes",
    title: "Mighti 'iPhone Notes' Pattern Interrupt Video Ad",
    category: "video-ads",
    brand: "Mighti",
    platform: "Meta & TikTok Native Ad (9:16)",
    metricHighlight: "Pattern-Interrupt Hook Creative",
    description: "Ultra-native raw iPhone notes interface video ad tapping into relatable cognitive struggles, outperforming polished agency creative on click-through efficiency.",
    imagePlaceholder: "/portfolio/video-thumbs/mighti-iphone-notes-frame.jpg",
    videoUrl: "/videos/mighti-iphone-notes.mp4",
    type: "Native Direct Response Hook Ad"
  },
  {
    id: "piece-vid-christian",
    title: "Orthodox Christian Quote: St. Isaac the Syrian Video Reel",
    category: "video-ads",
    brand: "Christian Content",
    platform: "Instagram Reels & TikTok (9:16)",
    metricHighlight: "9:16 Cinematic Short-Form Video",
    description: "Cinematic short-form vertical video reel crafted in CapCut with evocative typography, serene soundscapes, and contemplative pacing for modern digital audiences.",
    imagePlaceholder: "/portfolio/video-thumbs/orthodox-christian-quote-frame.jpg",
    videoUrl: "/videos/orthodox-christian-quote.mp4",
    type: "Cinematic Short-Form Video Reel"
  },

  // --- MIGHTI FUNGI AD CREATIVES (GRAPHIC & STATIC) ---
  {
    id: "piece-mighti-brainfog",
    title: "Mighti 'Clear Brain Fog in 15 Min' Static Ad",
    category: "paid-social",
    brand: "Mighti",
    platform: "Meta Ads (IG & FB)",
    metricHighlight: "Best Performing Ad in Brand History",
    description: "Direct-response problem-aware ad visual targeting mental fatigue. The founder confirmed this ad was the best performing in company history, beating their external agency.",
    imagePlaceholder: "/portfolio/mighti-brain-fog.png",
    type: "Direct Response Feed Ad Creative"
  },
  {
    id: "piece-mighti-booster",
    title: "Mighti 'The #1 Brain Booster of 2024' Ad",
    category: "paid-social",
    brand: "Mighti",
    platform: "Meta Ads (IG & FB)",
    metricHighlight: "High Authority Headline Creative",
    description: "High-authority social proof creative emphasizing cognitive stamina over caffeine crashes. Iterative design angle with benefit-driven visual hierarchy.",
    imagePlaceholder: "/portfolio/mighti-brain-booster.png",
    type: "Authority Headline Ad Creative"
  },
  {
    id: "piece-mighti-oldnew",
    title: "Mighti 'Old Me vs New Me' Transformation Creative",
    category: "paid-social",
    brand: "Mighti",
    platform: "Meta Ads (Instagram & Facebook)",
    metricHighlight: "High-Intent Comparison Split Test",
    description: "Split-awareness comparative ad visual highlighting the daily difference in focus, task completion, and mood between unsupplemented fatigue and Level Up.",
    imagePlaceholder: "/portfolio/mighti-old-vs-new.png",
    type: "Split-Screen Comparative Ad"
  },
  {
    id: "piece-mighti-texts",
    title: "Mighti 'Brain Text Messages' Native Conversation Ad",
    category: "paid-social",
    brand: "Mighti",
    platform: "Meta Ads (IG Feed & Stories)",
    metricHighlight: "High Scroll-Stopping Rate",
    description: "Conversational mobile iMessage hook framing brain fog as a text conversation between 'Your Brain' and 'You', yielding exceptional read-through rates.",
    imagePlaceholder: "/portfolio/mighti-brain-texts.png",
    type: "Native Chat Pattern-Interrupt Ad"
  },
  {
    id: "piece-mighti-review",
    title: "Mighti 'One Star Review' Reverse-Hook Ad",
    category: "paid-social",
    brand: "Mighti",
    platform: "Meta Ads Feed & Reels",
    metricHighlight: "Reverse Psychology Hook",
    description: "Provocative 1-star review hook format ('Warning: Do not take this if you enjoy procrastination') designed to break feed blindness and spike comments.",
    imagePlaceholder: "/portfolio/mighti-one-star-review.png",
    type: "Direct Response Reverse-Hook Ad"
  },
  {
    id: "piece-mighti-struggles",
    title: "Mighti 'Things I Struggled With' Pain-Point Ad",
    category: "paid-social",
    brand: "Mighti",
    platform: "Meta Ads (IG & FB)",
    metricHighlight: "Relatable Pain-Point Hook",
    description: "High-retention handwritten and checklist style creative framing the daily battle against brain fog, missed focus, and afternoon cognitive fatigue.",
    imagePlaceholder: "/portfolio/mighti-struggles.png",
    type: "Direct Response Pain-Point Ad"
  },
  {
    id: "piece-mighti-whiteboard",
    title: "Mighti 'Whiteboard Breakdown' Educational Creative",
    category: "paid-social",
    brand: "Mighti",
    platform: "Meta Ads Feed & Stories",
    metricHighlight: "Educational Direct Response",
    description: "Informative whiteboard diagram breaking down the neurochemistry of Lion's Mane, Cordyceps, and sustained focus vs. jittery caffeine burnout.",
    imagePlaceholder: "/portfolio/mighti-whiteboard.png",
    type: "Authority Whiteboard Ad Creative"
  },
  {
    id: "piece-mighti-willpower",
    title: "Mighti 'Willpower vs Chemistry' Feed Ad",
    category: "paid-social",
    brand: "Mighti",
    platform: "Meta Ads (Instagram & Facebook)",
    metricHighlight: "High-CTR Psychology Hook",
    description: "Philosophical and scientific contrast ad demonstrating that afternoon sluggishness is a neurochemical problem solvable through adaptogenic mushrooms.",
    imagePlaceholder: "/portfolio/mighti-willpower.png",
    type: "Cognitive Psychology Feed Ad"
  },
  {
    id: "piece-mighti-meme",
    title: "Mighti 'Relatable Fatigue' Cultural Meme Ad",
    category: "paid-social",
    brand: "Mighti",
    platform: "Meta Ads & TikTok",
    metricHighlight: "Viral Culture Pattern Interrupt",
    description: "Culturally resonant meme creative tapping into 2 PM work exhaustion to lower cost-per-click and drive casual scrollers into the sales funnel.",
    imagePlaceholder: "/portfolio/mighti-meme-ad.jpg",
    type: "Meme-Format Direct Response Ad"
  },
  {
    id: "piece-mighti-supercharge",
    title: "Mighti 'Helps Supercharge Your Day' Story Ad",
    category: "paid-social",
    brand: "Mighti",
    platform: "Instagram Stories & TikTok (9:16)",
    metricHighlight: "Full 9:16 Vertical Story Creative",
    description: "Full-screen vertical story ad engineered for mobile viewports, featuring crisp benefit tags, mushroom botanical highlights, and direct-to-checkout CTA.",
    imagePlaceholder: "/portfolio/mighti-supercharge.png",
    type: "Vertical Mobile Story Ad (1080x1920)"
  },

  // --- KALAIA & PETSMONT PAID SOCIAL CREATIVES ---
  {
    id: "piece-kalaia-detox-suite",
    title: "Kalaia 'Detox & Balance' Meta Paid Social Ad Suite",
    category: "paid-social",
    brand: "Kalaia Skincare",
    platform: "Meta Ads (Instagram & Facebook Feeds)",
    metricHighlight: "9-Creative Direct Response Suite",
    description: "Complete testing suite of 9 direct-response paid social creatives engineered for Kalaia's Detox & Balance Cleansing Bar. Creative angles include: 30% off promotional bundle with 2 free bamboo trays, 3-tier botanical breakdown (antioxidants, anti-bacterials, hydrating butters), chemical-free trust badges, customer proof, side-by-side acne product comparison, #SkincareFact Papain enzyme education, and interactive quiz polls.",
    imagePlaceholder: "/portfolio/kalaia-ads/3.png",
    galleryImages: [
      "/portfolio/kalaia-ads/3.png",
      "/portfolio/kalaia-ads/1.png",
      "/portfolio/kalaia-ads/2.png",
      "/portfolio/kalaia-ads/4.png",
      "/portfolio/kalaia-ads/5.png",
      "/portfolio/kalaia-ads/6.png",
      "/portfolio/kalaia-ads/7.png",
      "/portfolio/kalaia-ads/8.png",
      "/portfolio/kalaia-ads/9.png"
    ],
    type: "Paid Social Direct-Response Ad Suite (9 Creatives)"
  },
  {
    id: "piece-petsmont-creatives",
    title: "Petsmont 'Touch & Heal' Canine Ad Creative Suite",
    category: "paid-social",
    brand: "Petsmont",
    platform: "Facebook & Instagram Feed Ads",
    metricHighlight: "Top Converting Creative Suite",
    description: "Complete creative suite of direct response static ads, veterinary comparisons, and canine paw balm benefit graphics that powered the acquisition funnel.",
    imagePlaceholder: "/portfolio/petsmont/received_508047694677798.jpeg",
    galleryImages: [
      "/portfolio/petsmont/received_508047694677798.jpeg",
      "/portfolio/petsmont/received_1253537781876089.jpeg",
      "/portfolio/petsmont/received_1454860371647966.jpeg",
      "/portfolio/petsmont/received_2133455063527944.jpeg",
      "/portfolio/petsmont/received_651337156665694.jpeg",
      "/portfolio/petsmont/received_2116438681869121.jpeg",
      "/portfolio/petsmont/received_380447327608275.jpeg",
      "/portfolio/petsmont/received_782365896146558.jpeg"
    ],
    type: "Direct Response Paid Social Ad Suite"
  },

  // --- FUNNELS & CRO ---
  {
    id: "piece-funnel-mighti",
    title: "Mighti 'Level Up' Long-Form DTC Sales Funnel",
    category: "funnel-cro",
    brand: "Mighti",
    platform: "ClickFunnels & DTC E-Commerce",
    metricHighlight: "2x AOV Lift • $180 Peak Cart Value",
    description: "Complete full-length ClickFunnels sales page and upsell architecture engineered for Mighti's 'Level Up' nootropic supplement. Features direct response avatar copywriting, competitive breakdown, clinical ingredients, customer proof, and one-time offer checkout sequences.",
    imagePlaceholder: "/portfolio/mighti-funnel-mocks.png",
    galleryImages: [
      "/portfolio/mighti-funnel-mocks.png",
      "/portfolio/mighti-sales-page.jpg"
    ],
    type: "Multi-Step Sales Funnel & CRO Architecture"
  },
  {
    id: "piece-funnel-petsmont",
    title: "Petsmont 'Touch & Heal' Long-Form Sales Funnel",
    category: "funnel-cro",
    brand: "Petsmont",
    platform: "ClickFunnels & Custom Web",
    metricHighlight: "+40% Opt-In Lift • 11%+ OTO",
    description: "Full ClickFunnels sales page and multi-tier upsell architecture replacing static Shopify page. Displays 3-screen customer journey mockup alongside the complete full-length sales page with interactive scroll inspection.",
    imagePlaceholder: "/portfolio/touch-heal-3-screen.png",
    galleryImages: ["/portfolio/touch-heal-3-screen.png", "/portfolio/petsmont-sales-page.jpg"],
    type: "Multi-Step Sales Funnel & Upsell Blueprint"
  },
  {
    id: "piece-funnel-kalaia",
    title: "Kalaia Skincare 'Detox & Balance' Bundle Funnel",
    category: "funnel-cro",
    brand: "Kalaia Skincare",
    platform: "ClickFunnels & Shopify",
    metricHighlight: "Multi-Step Bundle & Cart Upsell Funnel",
    description: "Architected a multi-product bundle funnel and post-purchase checkout sequences for Kalaia's cleansing bar, radically lifting cart value over single-unit purchases.",
    imagePlaceholder: "/portfolio/kalaia-screen-mock.png",
    type: "E-Commerce Funnel & Bundle Architecture"
  },

  // --- ORGANIC & VIRAL SOCIAL ---
  {
    id: "piece-organic-rumi",
    title: "Rumi: Organic Short-Form Growth Engine",
    category: "organic-viral",
    brand: "Rumi",
    platform: "Instagram Reels & TikTok",
    metricHighlight: "2M+ Views in 30 Days (1k → 11k Followers)",
    description: "Engineered full video ideation, CapCut editing, niche research, and trial reels strategy. Grew micro-influencer account from 1,000 to 11,000+ organic followers in 30 days with over 2,000,000 views across Reels ($0 ad spend).",
    imagePlaceholder: "/portfolio/rumi/rumi-2m-views-profile.png",
    galleryImages: [
      "/portfolio/rumi/rumi-2m-views-profile.png",
      "/portfolio/rumi/rumi-259k-views.png",
      "/portfolio/rumi/rumi-58k-views.png",
      "/portfolio/rumi/rumi-56k-views.png",
      "/portfolio/rumi/rumi-43k-views.png",
      "/portfolio/rumi/rumi-9k-views.png",
      "/portfolio/rumi/rumi-6k-views.png",
      "/portfolio/rumi/rumi-3k-views.png"
    ],
    type: "Organic Short-Form Video Growth Engine"
  },
  {
    id: "piece-organic-facebook-pages",
    title: "Viral Facebook Communities: Multi-Page Organic Growth (80K+ Combined Followers)",
    category: "organic-viral",
    brand: "Viral Facebook Pages (Gloria Quotes, NBA, Manny)",
    platform: "Facebook Fan Pages & Groups",
    metricHighlight: "0 to 60k in 90 Days • 80K+ Total Followers",
    description: "Built and scaled multiple viral Facebook fan pages from absolute zero to 80,000+ combined organic followers entirely through viral organic posts, caption hooks, and engagement algorithms. Scaled Gloria Quotes from 0 to 60k followers in 3 months with zero ad spend.",
    imagePlaceholder: "/portfolio/facebook-pages/gloria-quotes-viral-proof.png",
    galleryImages: [
      "/portfolio/facebook-pages/gloria-quotes-viral-proof.png",
      "/portfolio/facebook-pages/gloria-quotes-49k-followers.png",
      "/portfolio/facebook-pages/nba-did-you-know-proof.png",
      "/portfolio/facebook-pages/nba-did-you-know-16k.png",
      "/portfolio/facebook-pages/manny-quotes-proof.png",
      "/portfolio/facebook-pages/manny-quotes-16k.png",
      "/portfolio/facebook-pages/post-engagement-3.2k.png",
      "/portfolio/facebook-pages/post-engagement-2.9k.png",
      "/portfolio/facebook-pages/post-engagement-2.2k.png",
      "/portfolio/facebook-pages/post-engagement-2.1k.png",
      "/portfolio/facebook-pages/raptors-kingdom-proof.png"
    ],
    type: "Organic Audience Scaling & Multi-Page Growth"
  },
  {
    id: "piece-christian-graphics",
    title: "Christian Social Media Graphics & YouTube Thumbnails",
    category: "organic-viral",
    brand: "Christian Content",
    platform: "YouTube & Social Feeds",
    metricHighlight: "High-CTR Custom Thumbnails",
    description: "Creative concepts designed for faith-based content channels: bold typography, curiosity-driven framing, and high-contrast color grading designed for high CTR and viral feed engagement.",
    imagePlaceholder: "/portfolio/christian/68e705dc4e653_frivanmasculinity.png",
    galleryImages: [
      "/portfolio/christian/68e705dc4e653_frivanmasculinity.png",
      "/portfolio/christian/68e705e8d5895_frivanbeard.png",
      "/portfolio/christian/68e705fe4d6cb_frivanlift.png",
      "/portfolio/christian/68e7060f88f9f_frivandiebeforedie.png",
      "/portfolio/christian/68e7063fb1a82_frivanorthobros.png",
      "/portfolio/christian/68e7064ce9146_frivanprn.png",
      "/portfolio/christian/68e55d0cbf339_stsilouanquote.png",
      "/portfolio/christian/68ed10ea74446_fr.seraphimroselaterred.png",
      "/portfolio/christian/ST PETER ATHOS BOOK.png",
      "/portfolio/christian/Errors of Latins Promo Post.png"
    ],
    type: "Social Media Posts & YouTube Thumbnails"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Brandon Taft",
    role: "Nutritionist & Fitness Trainer",
    company: "Brandon Taft Coaching",
    rating: 5,
    date: "Verified Video Testimonial",
    metric: "$7,500 in 4 Days • 291x ROAS",
    videoUrl: "/videos/brandon-taft-testimonial.mp4",
    videoPoster: "/portfolio/video-thumbs/brandon-taft-testimonial-frame.jpg",
    text: "Nathan generated about $7,500 in revenue in just 4 days from his Facebook ads campaign. His targeted local campaign brought in 8 qualified clients at $3.22 per lead, resulting in an incredible 291x ROAS."
  },
  {
    name: "Sheana Lasenby",
    role: "Licensed Realtor & Broker",
    company: "Lasenby Realty",
    rating: 5,
    date: "Verified Video Testimonial",
    metric: "34 Qualified Leads • $1.94 / Lead",
    videoUrl: "/videos/lasenby-testimonial.mp4",
    videoPoster: "/portfolio/video-thumbs/lasenby-testimonial-frame.jpg",
    text: "Working with Nathan was a fantastic experience. He set up our Facebook ads campaign and generated 34 qualified real estate buyer leads at just $1.94 per lead in Sarnia. His audience targeting, ad strategy, and speed of execution were outstanding."
  },
  {
    name: "Leon Lim",
    role: "CEO & Founder",
    company: "Groundup.ai",
    rating: 5,
    date: "Verified Recommendation",
    metric: "Elite Performance & Strategy",
    text: "Nathan is an elite leader in online marketing. He hustles non-stop to get his clients results, giving deep breakdowns after scanning through campaigns rapidly with great grasp of the fundamentals. He shows immense care for his clients and is a true pleasure to work with."
  },
  {
    name: "Vince Wang",
    role: "E-Commerce Brand Owner",
    company: "DTC Brand Group",
    rating: 5,
    date: "Verified Recommendation",
    metric: "Exponential Brand Growth",
    text: "Nathan is without a doubt a very hardworking individual. I have nothing but praise for him. His unique set of skills is a rare find and his marketing and SEO knowledge is vast. Nathan has a proven track record of being in the upper tier of the extraordinary few that can help a business grow exponentially."
  },
  {
    name: "Sheila Meloche",
    role: "Licensed Realtor",
    company: "Nexstar Real Estate",
    rating: 5,
    date: "Verified Client Review",
    metric: "60 Leads • 2 Signed Clients in 1 Wk",
    text: "I ran a trial campaign with Nathan and was able to generate approximately 60 leads within that timeframe. I was impressed with his ability to drive client interest—I gained two solid clients from the campaign and two additional prospective buyers connected with the mortgage broker."
  }
];

export const HERO_CAROUSEL_ITEMS = [
  {
    brand: "Mighti",
    stat: "2x AOV",
    sub: "Doubled to $180",
    tag: "#1 Ad Creatives (Beat Agency)",
    accent: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400"
  },
  {
    brand: "Brandon Taft",
    stat: "$7,500",
    sub: "Generated in 4 Days",
    tag: "291x ROAS (Lead Gen)",
    accent: "bg-amber-500/10 border-amber-500/20 text-amber-400"
  },
  {
    brand: "Kalaia",
    stat: "Full Funnel",
    sub: "Video Sales Presentation",
    tag: "9:16 Demonstration Ad",
    accent: "bg-purple-500/10 border-purple-500/20 text-purple-400"
  },
  {
    brand: "Petsmont",
    stat: "+40% Lift",
    sub: "Funnel CRO & OTO Upsells",
    tag: "11%+ Upsell Opt-In",
    accent: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400"
  },
  {
    brand: "HalalMeals",
    stat: "+$20k/Mo",
    sub: "Within 60 Days",
    tag: "100k+ Video Views",
    accent: "bg-blue-500/10 border-blue-500/20 text-blue-400"
  },
  {
    brand: "Rumi",
    stat: "2M+ Views",
    sub: "In 30 Days (1k to 11k)",
    tag: "Organic Video Engine",
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
    tagline: "Functional Mushroom Supplements (Level Up)",
    category: "Nutraceuticals DTC",
    industry: "Health & Wellness",
    outcome: "2x AOV Expansion ($90 to $180)",
    role: "Digital Marketing Specialist",
    logoType: "mighti",
    accent: "emerald"
  },
  {
    id: "kalaia",
    name: "Kalaia Skincare",
    tagline: "Clean Beauty & Skincare (Detox & Balance)",
    category: "Beauty & Personal Care",
    industry: "DTC E-Commerce",
    outcome: "End-to-End Funnel & Video Ad",
    role: "Paid Social Specialist",
    logoType: "kalaia",
    accent: "purple"
  },
  {
    id: "petsmont",
    name: "Petsmont",
    tagline: "Pet Wellness & Paw Balm (Touch & Heal)",
    category: "Pet Health DTC",
    industry: "DTC E-Commerce",
    outcome: "+40% Opt-In Lift & 11%+ OTO",
    role: "Creative Strategist",
    logoType: "petsmont",
    accent: "amber"
  },
  {
    id: "btaft",
    name: "Brandon Taft Fitness",
    tagline: "Nutrition & Custom Health Coaching",
    category: "Fitness & Performance Lead Gen",
    industry: "Health & Wellness",
    outcome: "$7,500 in 4 Days • 291x ROAS",
    role: "Performance Media Buyer",
    logoType: "btaft",
    accent: "amber"
  },
  {
    id: "halalmeals",
    name: "HalalMeals",
    tagline: "Fresh Meal Subscriptions (Toronto DTC)",
    category: "DTC Food & Beverage",
    industry: "DTC E-Commerce",
    outcome: "+$20k/Mo in 60 Days • 100k+ Views",
    role: "Growth Marketer",
    logoType: "halalmeals",
    accent: "emerald"
  },
  {
    id: "yuregen",
    name: "Yuregen",
    tagline: "Natural Joint Health & Mobility Supplements",
    category: "Natural Joint Supplements DTC",
    industry: "Health & Wellness",
    outcome: "Video Sales Script, Offer Creation & Funnel",
    role: "Creative Strategist & Funnel Builder",
    logoType: "yuregen",
    accent: "teal"
  },
  {
    id: "lasenby",
    name: "Lasenby Realty",
    tagline: "Residential & Commercial Brokerage",
    category: "Real Estate Digital Marketing",
    industry: "Enterprise & B2B",
    outcome: "$5k Commissions from $500 Spend (10x ROI)",
    role: "Digital Marketing Specialist",
    logoType: "lasenby",
    accent: "blue"
  },
  {
    id: "torontodance",
    name: "Toronto Dance Salsa",
    tagline: "Canada's Largest Latin Dance School",
    category: "Arts, Fitness & Community",
    industry: "DTC E-Commerce",
    outcome: "Local Facebook & Instagram Ad Campaigns",
    role: "Paid Social Marketer",
    logoType: "torontodance",
    accent: "rose"
  },
  {
    id: "yardsale",
    name: "Restaurant Client (Yard Sale Campaign)",
    tagline: "Free Dessert with Your Meal Promotion",
    category: "Food & Beverage / Hospitality",
    industry: "DTC E-Commerce",
    outcome: "203 Leads at $0.55/Lead ($112 Spend)",
    role: "Campaign Strategist & Media Buyer",
    logoType: "yardsale",
    accent: "indigo"
  },
  {
    id: "ccan",
    name: "CCAN Alliance",
    tagline: "Canadian Community Alliance Network",
    category: "Community Outreach & Digital",
    industry: "Enterprise & B2B",
    outcome: "Social Growth & Online Lead Gen",
    role: "Marketing Coordinator",
    logoType: "ccan",
    accent: "emerald"
  },
  {
    id: "rumi",
    name: "Rumi",
    tagline: "Lifestyle & Micro-Influencer Creator",
    category: "Short-Form Video & Reels",
    industry: "DTC E-Commerce",
    outcome: "2M+ Views in 30 Days (1k to 11k Followers)",
    role: "Video Strategist & Editor",
    logoType: "rumi",
    accent: "rose"
  },
  {
    id: "gloria",
    name: "Gloria Quotes",
    tagline: "High-Growth Viral Facebook Media Pages",
    category: "Organic Social Media",
    industry: "Enterprise & B2B",
    outcome: "0 to 60k Followers in 3 Months",
    role: "Organic Growth Strategist",
    logoType: "gloria",
    accent: "blue"
  },
  {
    id: "rbc",
    name: "RBC Wealth Management",
    tagline: "Royal Bank of Canada",
    category: "Wealth & Asset Management",
    industry: "Enterprise & B2B",
    outcome: "+400% Social Media Engagement",
    role: "Social Media Specialist",
    logoType: "rbc",
    accent: "blue"
  }
];
