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
  videoRemote?: string;
  videoTitle?: string;
  videoPoster?: string;
  secondaryVideoUrl?: string;
  secondaryVideoTitle?: string;
  secondaryVideoPoster?: string;
  leftImage?: string;
  rightImage?: string;
  leftVideo?: string;
  leftVideoRemote?: string;
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
  dashboardScreenshots?: CaseStudyVisualAsset[];
  featuredCreatives?: CaseStudyVisualAsset[];
}

export interface CaseStudyVisualAsset {
  title: string;
  metric?: string;
  subtitle?: string;
  image: string;
  description?: string;
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
  galleryCaptions?: string[];
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
  screenshotProof?: string;
  screenshotTitle?: string;
}

export const PERSONAL_INFO = {
  name: "Nathan Krumesz",
  title: "Performance Marketer & Creative Strategist",
  location: "Toronto, Ontario, Canada",
  email: "nathan.krumesz@alumni.utoronto.ca",
  linkedin: "https://linkedin.com/in/nathankrumesz",
  linkedinHandle: "linkedin.com/in/nathankrumesz",
  spotifyPodcast: {
    title: "The Performance Playbook",
    showName: "The Performance Playbook",
    url: "https://open.spotify.com/show/0uvYSFwog366kyHsrmFZ3D?si=cd69d48bf2d74df9",
    episodes: 70,
    coverArt: "/portfolio/podcast-cover.jpg",
    rating: "5.0 ★",
    topic: "Paid Ads & Business Math",
    description: "Most marketing advice is theory taught by people who don't spend real money on growth. The Performance Playbook is the opposite. Every episode, performance marketer Nathan Krumesz breaks down the exact inputs required to scale direct response ads, sales funnels, and viral frameworks that generate real revenue.",
    fullDescription: "Most marketing advice is theory taught by people who don't spend real money on growth. The Performance Playbook is the opposite. Every episode, performance marketer and creative strategist Nathan Krumesz breaks down the exact inputs required to scale: high-converting direct response video ads, multi-tier sales funnels, and organic viral content frameworks that generate real revenue. The formula is simple: Make better creative, build higher-converting backend funnels, out-execute everyone else. If you want motivation, listen to someone else."
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
    videoUrl: "https://r2-origin.submagic.pro/9d1b83c5-cc7b-4486-b35d-d4078e33af08/x0ygzRZemEeBrEd2LHf69/pw-sales-video-1mov-download-1793033245846.mp4",
    videoRemote: "https://r2-origin.submagic.pro/9d1b83c5-cc7b-4486-b35d-d4078e33af08/x0ygzRZemEeBrEd2LHf69/pw-sales-video-1mov-download-1793033245846.mp4",
    videoTitle: "Mighty Fungi 'Level Up' Direct Response Sales Video (VSL)",
    videoPoster: "/portfolio/video-thumbs/mighti-submagic-poster.jpg",
    secondaryVideoUrl: "/videos/mighti-lvl-up-person.mp4",
    secondaryVideoTitle: "Mighti 'If Level Up Was A Person' Creative Video Ad",
    secondaryVideoPoster: "/portfolio/video-thumbs/mighti-lvl-up-person-frame.jpg",
    leftVideo: "/videos/mighti-submagic-card.mp4",
    leftVideoRemote: "https://r2-origin.submagic.pro/9d1b83c5-cc7b-4486-b35d-d4078e33af08/x0ygzRZemEeBrEd2LHf69/pw-sales-video-1mov-download-1793033245846.mp4",
    leftImage: "/portfolio/video-thumbs/mighti-submagic-poster.jpg",
    rightImage: "/portfolio/mighti-sales-page-top.jpg",
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
        tags: ["Meta Ads", "ClickFunnels", "Klaviyo", "DTC E-Commerce", "CRO", "Creative Direction", "A/B Testing"],
    dashboardScreenshots: [
      {
        title: "ClickFunnels 'Level Up' Direct Response Long-Form Sales Funnel",
        metric: "Full-Length Acquisition Page",
        subtitle: "High-Ticket Custom DTC Funnel Architecture",
        image: "/portfolio/mighti-sales-page.jpg",
        description: "Full-page direct response sales funnel architected for Mighti, featuring avatar-targeted problem-agitation copywriting, clinical proof citations, 20 active nootropics mechanism breakdown, and multi-tier bundle offers."
      }
    ],
    featuredCreatives: [
      {
        title: "Mighti 'Clear Brain Fog in 15 Min' Ad",
        metric: "#1 Best Performing Ad in Brand History",
        subtitle: "Beat Multi-Person Agency Team",
        image: "/portfolio/mighti-brain-fog.png",
        description: "The company's top-performing direct-response ad creative, delivering the lowest CPA across Meta Ads and outperforming the agency's creative suite."
      },
      {
        title: "'The #1 Brain Booster of 2024' Authority Ad",
        metric: "High Authority Headline",
        subtitle: "Clean Cognitive Energy",
        image: "/portfolio/mighti-brain-booster.png",
        description: "High-intent positioning creative contrasting adaptogens against afternoon caffeine crashes."
      },
      {
        title: "'Old Me vs New Me' Transformation Creative",
        metric: "Comparative A/B Angle",
        subtitle: "Before & After Cognitive Shift",
        image: "/portfolio/mighti-old-vs-new.png",
        description: "Split-awareness comparative ad visual highlighting daily productivity differences."
      },
      {
        title: "Full-Length ClickFunnels Sales Funnel Wireframe",
        metric: "2x AOV Cart Value Expansion",
        subtitle: "Complete Funnel Architecture",
        image: "/portfolio/mighti-funnel-mocks.png",
        description: "Custom sales funnel with avatar copywriting, comparison charts, and one-time offer checkout sequences."
      },
      {
        title: "Live ClickFunnels Direct Response Sales Page",
        metric: "Full-Length DTC Sales Page",
        subtitle: "Desktop & Mobile Optimized",
        image: "/portfolio/mighti-sales-page.jpg",
        description: "High-converting sales page designed from scratch to scale paid social traffic."
      },
      {
        title: "Native iMessage Chat Pattern-Interrupt Ad",
        metric: "Top Scroll-Stopping Rate",
        subtitle: "Brain vs You Conversation",
        image: "/portfolio/mighti-brain-texts.png",
        description: "Ultra-native chat format that broke feed blindness and drove exceptional read-through rates."
      }
    ]
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
    videoUrl: "https://r2-origin.submagic.pro/9d1b83c5-cc7b-4486-b35d-d4078e33af08/Vtl12sLoFd81r6f6k547O/kalaia-reelmp4-download-1792178164555.mp4",
    videoTitle: "Kalaia Detox & Balance Social Reel Video Ad",
    videoPoster: "/portfolio/video-thumbs/kalaia-reel-poster.jpg",
    leftVideo: "/videos/kalaia-reel-card.mp4",
    leftVideoRemote: "https://r2-origin.submagic.pro/9d1b83c5-cc7b-4486-b35d-d4078e33af08/Vtl12sLoFd81r6f6k547O/kalaia-reelmp4-download-1792178164555.mp4",
    leftImage: "/portfolio/video-thumbs/kalaia-reel-poster.jpg",
    rightImage: "/portfolio/kalaia-sales-page-top.png",
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
        tags: ["TikTok Ads", "Meta Ads", "Video Sales Letter", "Offer Strategy", "ClickFunnels", "Email Automation"],
    dashboardScreenshots: [
      {
        title: "ClickFunnels 'Detox & Balance' High-Converting Sales Funnel",
        metric: "Full-Length Funnel Architecture",
        subtitle: "High-Ticket Custom Acquisition Page",
        image: "/portfolio/kalaia-detox-bar-v2.png",
        description: "Complete long-form direct response sales landing page engineered for Kalaia, showcasing active botanicals mechanism breakdown, clinical trust badges, social proof, and multi-tier bundle offers."
      }
    ],
    featuredCreatives: [
      {
        title: "30% Off Bundle Offer + 2 Free Bamboo Trays",
        metric: "Top Converting Bundle Ad",
        subtitle: "Promotional Offer Architecture",
        image: "/portfolio/kalaia-ads/3.png",
        description: "High-urgency promotional bundle creative designed with free custom bamboo trays to incentivize multi-unit orders and lift initial order value."
      },
      {
        title: "3-Tier Botanical Active Ingredients Breakdown",
        metric: "Mechanism Storytelling",
        subtitle: "Antioxidants, Anti-bacterials & Butters",
        image: "/portfolio/kalaia-ads/1.png",
        description: "Educational breakdown graphic highlighting tropical active botanicals and dermal absorption benefits."
      },
      {
        title: "Chemical-Free Trust Badges & Clinical Purity",
        metric: "Friction Elimination",
        subtitle: "Cruelty-Free, Paraben-Free, Made in USA",
        image: "/portfolio/kalaia-ads/2.png",
        description: "High-authority clean beauty badges removing consumer hesitation regarding synthetic additives."
      },
      {
        title: "Verified Customer Endorsement & Proof",
        metric: "Peer-to-Peer Social Proof",
        subtitle: "Authentic Client Review Hook",
        image: "/portfolio/kalaia-ads/4.png",
        description: "Direct quote ad emphasizing visible skin clarification and gentle lathering."
      },
      {
        title: "Acne & Blemish Face-to-Face Comparison",
        metric: "Problem-Aware Comparative Angle",
        subtitle: "Kalaia vs Harsh Chemical Cleansers",
        image: "/portfolio/kalaia-ads/5.png",
        description: "Visual comparison illustrating why harsh drying cleansers trigger rebound oil production."
      },
      {
        title: "#SkincareFact: Papain Enzyme Exfoliation",
        metric: "Scientific Authority Hook",
        subtitle: "Gentle Fruit Enzyme Mechanism",
        image: "/portfolio/kalaia-ads/6.png",
        description: "Detailed ingredient infographic on papaya enzymatic action that clears pores without micro-tears."
      },
      {
        title: "Interactive Skin Type Self-Assessment Quiz",
        metric: "High-CTR Interactive Creative",
        subtitle: "Top-of-Funnel Engagement Poll",
        image: "/portfolio/kalaia-ads/7.png",
        description: "Interactive quiz format asking scrollers about their skin type to generate high click-through volume."
      },
      {
        title: "Daily Morning & Evening Cleansing Ritual",
        metric: "Habit-Stacking Angle",
        subtitle: "Lifestyle Integration Creative",
        image: "/portfolio/kalaia-ads/8.png",
        description: "Demonstration of how easily the Detox & Balance bar integrates into existing bathroom routines."
      },
      {
        title: "Bamboo Charcoal & Pure Clay Deep Pore Cleanser",
        metric: "Sensory & Ingredient Hook",
        subtitle: "Deep Detox Formulation",
        image: "/portfolio/kalaia-ads/9.png",
        description: "High-contrast sensory visual showcasing the natural charcoal purifying lather and skin balance."
      }
    ]
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
    leftVideo: "/videos/petsmont-left-loop.mp4",
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
        tags: ["Funnel Design", "ClickFunnels", "Upsell Strategy (OTO)", "Copywriting", "A/B Testing"],
    dashboardScreenshots: [
      {
        title: "ClickFunnels A/B Split Test Analytics Dashboard",
        metric: "+40% Relative Opt-In Lift (26% → 37.1%)",
        subtitle: "Empirical Conversion Surge Report",
        image: "/portfolio/petsmont/received_1454860371647966.jpeg",
        description: "ClickFunnels analytics dashboard confirming the conversion jump from ~26% to 37.1% on opt-in pages."
      },
      {
        title: "One-Time-Offer (OTO) Upsell Step Performance",
        metric: "11%+ Post-Purchase Upsell Conversion",
        subtitle: "Immediate Checkout Margin Expansion",
        image: "/portfolio/petsmont/received_2133455063527944.jpeg",
        description: "Detailed order breakdown showing post-purchase upsell conversion at over 11%, doubling cart revenue."
      },
      {
        title: "Funnel Step-by-Step Conversion Flow Breakdown",
        metric: "High Customer Retention Through Checkout",
        subtitle: "Full Acquisition Journey",
        image: "/portfolio/petsmont/received_1253537781876089.jpeg",
        description: "Step-by-step funnel drop-off analysis demonstrating conversion retention across cold traffic."
      },
      {
        title: "Variant Comparison & Traffic Allocation Report",
        metric: "Statistical Significance Verification",
        subtitle: "Controlled Acquisition Test",
        image: "/portfolio/petsmont/received_651337156665694.jpeg",
        description: "A/B split-test performance report demonstrating clear statistical outperformance of the new funnel architecture."
      },
      {
        title: "3-Screen Complete Sales Funnel Customer Journey",
        metric: "Multi-Tier Funnel Architecture",
        subtitle: "Landing Page → OTO Upsell → Order Confirmation",
        image: "/portfolio/touch-heal-3-screen.png",
        description: "High-resolution 3-screen wireframe of the entire multi-step customer journey replacing static Shopify pages."
      }
    ],
    featuredCreatives: [
      {
        title: "Petsmont Canine Paw Balm Hero Creative",
        metric: "High Scroll-Stopping Hook",
        image: "/portfolio/petsmont/received_508047694677798.jpeg"
      },
      {
        title: "Veterinary Problem-Solution Comparison",
        metric: "Direct Response Feed Creative",
        image: "/portfolio/petsmont/received_2116438681869121.jpeg"
      },
      {
        title: "Touch & Heal Natural Ingredient Proof",
        metric: "Trust Badge & Value Proposition",
        image: "/portfolio/petsmont/received_380447327608275.jpeg"
      },
      {
        title: "Canine Paw Care Benefit Callouts",
        metric: "Educational Social Creative",
        image: "/portfolio/petsmont/received_782365896146558.jpeg"
      }
    ]
  }
];

export const PORTFOLIO_PIECES: PortfolioPiece[] = [
  // ==========================================
  // 1. VIDEO ADS & DIRECT RESPONSE VSLs
  // ==========================================
  {
    id: "piece-vsl-mighti",
    title: "Mighti 'Level Up' Full Video Sales Letter (VSL)",
    category: "video-ads",
    brand: "Mighti Fungi",
    platform: "ClickFunnels Sales Funnel",
    metricHighlight: "Doubled AOV $90 → $180 • #1 Brand Ad",
    description: "Complete direct response Video Sales Letter (VSL) scripted, conceptualized, and produced for Mighti's 'Level Up' nootropic supplement. Outperformed dedicated third-party agency creative.",
    imagePlaceholder: "/portfolio/video-thumbs/mighti-submagic-poster.jpg",
    videoUrl: "https://r2-origin.submagic.pro/9d1b83c5-cc7b-4486-b35d-d4078e33af08/x0ygzRZemEeBrEd2LHf69/pw-sales-video-1mov-download-1793033245846.mp4",
    type: "Full Direct Response Video Sales Letter"
  },
  {
    id: "piece-vid-mighti-person",
    title: "Mighti 'If Level Up Was A Person' Creative Video Ad",
    category: "video-ads",
    brand: "Mighti Fungi",
    platform: "Meta & TikTok Feeds",
    metricHighlight: "Viral Persona Angle • High Retention",
    description: "Creative direct response video ad humanizing the adaptogenic benefits of Level Up. High scroll-stopping hook built to capture top-of-funnel TikTok and Instagram attention.",
    imagePlaceholder: "/portfolio/video-thumbs/mighti-lvl-up-person-frame.jpg",
    videoUrl: "/videos/mighti-lvl-up-person.mp4",
    type: "Short-Form Video Ad"
  },
  {
    id: "piece-vid-mighti-notes",
    title: "Mighti 'iPhone Notes App Confession' Pattern-Interrupt Video",
    category: "video-ads",
    brand: "Mighti Fungi",
    platform: "Meta Ads & TikTok",
    metricHighlight: "Native Feed Interrupt • High Hook Rate",
    description: "Ultra-native UGC pattern-interrupt video styled as an authentic personal iPhone Notes confession, achieving peak 3-second hook retention and eliminating ad fatigue.",
    imagePlaceholder: "/portfolio/video-thumbs/mighti-iphone-notes-frame.jpg",
    videoUrl: "/videos/mighti-iphone-notes.mp4",
    type: "Pattern-Interrupt Video Creative"
  },
  {
    id: "piece-vsl-kalaia",
    title: "Kalaia Detox & Balance Social Reel Video Ad",
    category: "video-ads",
    brand: "Kalaia Skincare",
    platform: "Meta & TikTok Reels",
    metricHighlight: "Core Sales Video • Multi-Tier Upsells",
    description: "Full direct-response video sales presentation and demonstration creative scripted and produced for Kalaia's flagship Detox & Balance Cleansing Bar. Anchored the customer acquisition funnel and multi-product checkout flow.",
    imagePlaceholder: "/portfolio/video-thumbs/kalaia-reel-poster.jpg",
    videoUrl: "https://r2-origin.submagic.pro/9d1b83c5-cc7b-4486-b35d-d4078e33af08/Vtl12sLoFd81r6f6k547O/kalaia-reelmp4-download-1792178164555.mp4",
    type: "Direct Response Video Reel"
  },
  {
    id: "piece-vid-kalaia-demo",
    title: "Kalaia 'How To Use Detox Bar' Ritual & Demonstration Video",
    category: "video-ads",
    brand: "Kalaia Skincare",
    platform: "TikTok & Meta Reels (9:16)",
    metricHighlight: "Sensory Product Demo • 9:16 Video",
    description: "Sensory-rich step-by-step product demonstration video showcasing the luxurious charcoal and clay lather and gentle exfoliating ritual for clearer skin.",
    imagePlaceholder: "/portfolio/video-thumbs/kalaia-how-to-use-frame.jpg",
    videoUrl: "/videos/kalaia-how-to-use.mp4",
    type: "Vertical Product Ritual Demonstration"
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
    id: "piece-vid-halalmeals",
    title: "HalalMeals Local Viral Toronto Video Ad",
    category: "video-ads",
    brand: "HalalMeals",
    platform: "Facebook & Instagram Ads",
    metricHighlight: "+$20K/Mo in 60 Days • 100k+ Views",
    description: "Conceptualized and ran a local direct-response video ad across the Greater Toronto Area that went viral organically, scaling fresh meal subscription revenue from $0 to $20,000/month.",
    imagePlaceholder: "/portfolio/video-thumbs/halal-meals-ad-frame.jpg",
    videoUrl: "https://r2-origin.submagic.pro/9d1b83c5-cc7b-4486-b35d-d4078e33af08/ManGXXpbifAvSuNj-GydP/halalmeals-video-admp4-download-1793906099288.mp4",
    type: "Viral Direct Response Video Ad"
  },
  {
    id: "piece-vid-faith-quotes",
    title: "Viral Motion Quotes Reel: Faith & Direct Response Pacing",
    category: "video-ads",
    brand: "Christian Media",
    platform: "Instagram Reels & YouTube Shorts",
    metricHighlight: "High Organic Retention & Viral Reach",
    description: "Direct-response typography and cinematic motion pacing applied to short-form video quotes, maximizing organic reach and algorithm watch time.",
    imagePlaceholder: "/portfolio/video-thumbs/orthodox-christian-quote-frame.jpg",
    videoUrl: "/videos/orthodox-christian-quote.mp4",
    type: "Viral Motion Typography Reel"
  },

  // ==========================================
  // 2. PAID SOCIAL CREATIVES: MIGHTI FUNGI
  // ==========================================
  {
    id: "piece-mighti-brainfog",
    title: "Mighti 'Clear Brain Fog in 15 Min' Static Ad",
    category: "paid-social",
    brand: "Mighti Fungi",
    platform: "Meta Ads (IG & FB)",
    metricHighlight: "#1 Best Performing Ad (2x AOV)",
    description: "Direct-response problem-aware ad visual targeting mental fatigue. The founder confirmed this ad was the single best-performing creative in company history, beating their external agency.",
    imagePlaceholder: "/portfolio/mighti-brain-fog.png",
    type: "Direct Response Feed Ad Creative"
  },
  {
    id: "piece-mighti-booster",
    title: "Mighti 'The #1 Brain Booster of 2024' Authority Ad",
    category: "paid-social",
    brand: "Mighti Fungi",
    platform: "Meta Ads (Feed & Stories)",
    metricHighlight: "High Authority Hook • Low CPA",
    description: "High-intent positioning creative contrasting 20 active adaptogens against afternoon caffeine crashes and synthetic energy drinks.",
    imagePlaceholder: "/portfolio/mighti-brain-booster.png",
    type: "Authority Positioning Ad"
  },
  {
    id: "piece-mighti-oldnew",
    title: "Mighti 'Old Me vs New Me' Transformation Creative",
    category: "paid-social",
    brand: "Mighti Fungi",
    platform: "Meta Ads (IG Feed)",
    metricHighlight: "Comparative A/B Angle • High ROAS",
    description: "Split-awareness comparative ad visual highlighting the daily productivity difference between an unfocused morning slump vs sharp cognitive flow.",
    imagePlaceholder: "/portfolio/mighti-old-vs-new.png",
    type: "Split-Awareness Comparative Ad"
  },
  {
    id: "piece-mighti-texts",
    title: "Mighti Native iMessage Chat Pattern-Interrupt Ad",
    category: "paid-social",
    brand: "Mighti Fungi",
    platform: "Meta & TikTok Feeds",
    metricHighlight: "Top Scroll-Stopping Rate",
    description: "Ultra-native chat format that broke feed blindness with an authentic conversation between 'Your Brain' and 'You' at 2:30 PM.",
    imagePlaceholder: "/portfolio/mighti-brain-texts.png",
    type: "Native Pattern-Interrupt Ad"
  },
  {
    id: "piece-mighti-3cat",
    title: "Mighti '3 Categories of Brain Supplements' Educational Breakdown",
    category: "paid-social",
    brand: "Mighti Fungi",
    platform: "Meta Ads Feed & Carousel",
    metricHighlight: "Market Education Angle",
    description: "Visual market categorization positioning adaptogenic mushrooms above generic caffeine pills and crash-inducing synthetic stimulants.",
    imagePlaceholder: "/portfolio/mighti-3-categories.png",
    type: "Educational Market Categorization Ad"
  },
  {
    id: "piece-mighti-review",
    title: "Mighti '1-Star Review of Coffee' Reverse Psychology Ad",
    category: "paid-social",
    brand: "Mighti Fungi",
    platform: "Instagram & Facebook Feeds",
    metricHighlight: "Reverse Psychology Hook",
    description: "High-CTR pattern-interrupt creative featuring a verified review detailing the mid-day jitters and crashes caused by conventional energy drinks.",
    imagePlaceholder: "/portfolio/mighti-one-star-review.png",
    type: "Reverse Psychology Testimonial Ad"
  },
  {
    id: "piece-mighti-whiteboard",
    title: "Mighti 'Whiteboard Formula Breakdown' Mechanism Ad",
    category: "paid-social",
    brand: "Mighti Fungi",
    platform: "Meta Ads Feed",
    metricHighlight: "Mechanism Transparency Hook",
    description: "Hand-drawn style whiteboard breakdown detailing the science of Lion's Mane, Cordyceps, and Chaga mushroom synergies for sustained ATP energy.",
    imagePlaceholder: "/portfolio/mighti-whiteboard.png",
    type: "Formula Mechanism Breakdown"
  },
  {
    id: "piece-mighti-willpower",
    title: "Mighti 'Willpower vs Biology' Reframe Ad",
    category: "paid-social",
    brand: "Mighti Fungi",
    platform: "Meta Ads",
    metricHighlight: "Psychological Reframe Angle",
    description: "Reframing afternoon fatigue as a biological nutrient deficit rather than a willpower failure to unlock direct response purchasing intent.",
    imagePlaceholder: "/portfolio/mighti-willpower.png",
    type: "Direct Response Reframe Creative"
  },
  {
    id: "piece-mighti-struggles",
    title: "Mighti 'Midday Energy Struggles' Problem-Agitation Ad",
    category: "paid-social",
    brand: "Mighti Fungi",
    platform: "Meta Ads",
    metricHighlight: "Problem-Agitation Hook",
    description: "Empathetic problem-agitation creative illustrating the 2 PM energy slump that entrepreneurs and professionals face daily.",
    imagePlaceholder: "/portfolio/mighti-struggles.png",
    type: "Problem-Agitation Feed Ad"
  },
  {
    id: "piece-mighti-supercharge",
    title: "Mighti 'Supercharge Your Focus' Benefit Grid",
    category: "paid-social",
    brand: "Mighti Fungi",
    platform: "Meta Ads",
    metricHighlight: "Feature-Benefit Mapping",
    description: "Clean benefit mapping illustrating sustained memory, clean alertness, and zero crash from adaptogenic nootropics.",
    imagePlaceholder: "/portfolio/mighti-supercharge.png",
    type: "Feature-Benefit Grid Creative"
  },
  {
    id: "piece-mighti-meme",
    title: "Mighti Native Social Meme Pattern-Interrupt Ad",
    category: "paid-social",
    brand: "Mighti Fungi",
    platform: "Instagram & Twitter/X",
    metricHighlight: "Native Meme Format • Viral CTR",
    description: "Culturally native meme-style ad format engineered to blend seamlessly into user feeds while driving cold clicks.",
    imagePlaceholder: "/portfolio/mighti-meme-ad.jpg",
    type: "Native Social Meme Format"
  },

  // ==========================================
  // 3. PAID SOCIAL CREATIVES: KALAIA SKINCARE
  // (Consolidated 9-Creative Suite Card)
  // ==========================================
  {
    id: "piece-kalaia-ads-suite",
    title: "Kalaia Detox & Balance: 9-Piece Paid Social Creative Suite",
    category: "paid-social",
    brand: "Kalaia Skincare",
    platform: "Meta & TikTok Ads (Feed & Stories)",
    metricHighlight: "9 Multi-Angle Creatives • 32% AOV Boost",
    description: "Complete 9-piece direct response paid social creative suite designed for Kalaia's Detox & Balance Cleansing Bar. Spans promotional bundle offers, tropical botanical mechanism breakdowns, clinical trust badges, social proof, acne comparison charts, papain enzyme infographics, interactive skin quiz, and daily ritual angles.",
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
    galleryCaptions: [
      "Ad #1: 30% Off Bundle Offer + 2 Free Bamboo Trays (Top Converting Offer)",
      "Ad #2: 3-Tier Botanical Active Ingredients Breakdown (Mechanism Storytelling)",
      "Ad #3: Chemical-Free Trust Badges & Clinical Purity (Friction Elimination)",
      "Ad #4: Verified Customer Endorsement & Proof (Social Proof)",
      "Ad #5: Acne & Blemish Face-to-Face Comparison (Problem-Aware)",
      "Ad #6: #SkincareFact Papain Enzyme Exfoliation (Authority Infographic)",
      "Ad #7: Interactive Skin Type Self-Assessment Quiz (High CTR)",
      "Ad #8: Daily Morning & Evening Cleansing Ritual (Lifestyle Integration)",
      "Ad #9: Bamboo Charcoal & Pure Clay Deep Pore Cleanser (Sensory Hook)"
    ],
    type: "9-Creative Paid Social Ad Suite"
  },

  // ==========================================
  // 4. PAID SOCIAL CREATIVES: PETSMONT
  // ==========================================
  {
    id: "piece-petsmont-creatives",
    title: "Petsmont Canine Paw Care: Direct Response Ad Creatives",
    category: "paid-social",
    brand: "Petsmont",
    platform: "Meta Ads (IG & FB)",
    metricHighlight: "Problem-Solution & Trust Angle",
    description: "Direct response comparative and ingredient transparency ad suite educating pet owners on the hazards of chemical-laden paw balms vs lick-safe, 100% human-grade organic waxes.",
    imagePlaceholder: "/portfolio/petsmont/received_2116438681869121.jpeg",
    galleryImages: [
      "/portfolio/petsmont/received_2116438681869121.jpeg",
      "/portfolio/petsmont/received_380447327608275.jpeg",
      "/portfolio/petsmont/received_782365896146558.jpeg"
    ],
    galleryCaptions: [
      "Ad #1: Veterinary Problem-Solution Comparison (Direct Response)",
      "Ad #2: 100% Organic Ingredient Transparency & Lick-Safe Badges",
      "Ad #3: Canine Paw Care Benefit Callouts & Winter Protection"
    ],
    type: "Multi-Angle Paid Social Suite"
  },

  // ==========================================
  // 5. FUNNELS & CRO ARCHITECTURES
  // ==========================================
  {
    id: "piece-funnel-mighti",
    title: "Mighti 'Level Up' Long-Form DTC Sales Funnel",
    category: "funnel-cro",
    brand: "Mighti Fungi",
    platform: "ClickFunnels & DTC E-Commerce",
    metricHighlight: "2x AOV Lift • $180 Peak Cart Value",
    description: "Complete full-length ClickFunnels sales page and upsell architecture engineered for Mighti's 'Level Up' nootropic supplement. Features direct response avatar copywriting, competitive breakdown, clinical ingredients, customer proof, and one-time offer checkout sequences.",
    imagePlaceholder: "/portfolio/mighti-funnel-mocks.png",
    galleryImages: [
      "/portfolio/mighti-funnel-mocks.png",
      "/portfolio/mighti-sales-page.jpg"
    ],
    galleryCaptions: [
      "ClickFunnels Multi-Step Wireframe & Upsell Sequence (Desktop + Mobile)",
      "Full Live Direct Response Sales Page with Clinical Proof & Bundle Offers"
    ],
    type: "Multi-Step Sales Funnel & CRO Architecture"
  },
  {
    id: "piece-funnel-kalaia",
    title: "Kalaia 'Detox & Balance' High-Converting Sales Funnel",
    category: "funnel-cro",
    brand: "Kalaia Skincare",
    platform: "ClickFunnels & Clean Beauty DTC",
    metricHighlight: "Full Funnel Build • Multi-Tier Upsells",
    description: "Full-length direct response acquisition page and upsell funnel engineered for Kalaia, showcasing active botanicals mechanism breakdown, clinical trust badges, social proof, and bundle offers.",
    imagePlaceholder: "/portfolio/kalaia-detox-bar-v2.png",
    galleryImages: [
      "/portfolio/kalaia-detox-bar-v2.png",
      "/portfolio/kalaia-sales-page-top.png",
      "/portfolio/kalaia-screen-mock.png"
    ],
    galleryCaptions: [
      "Full Long-Form Acquisition Sales Funnel for Detox & Balance Bar",
      "Desktop Landing Page Hero & Offer Presentation",
      "Multi-Device Funnel Wireframe & Mobile Checkout Architecture"
    ],
    type: "Multi-Step Sales Funnel & Upsell Blueprint"
  },
  {
    id: "piece-funnel-petsmont",
    title: "Petsmont 'Touch & Heal' Long-Form Sales Funnel",
    category: "funnel-cro",
    brand: "Petsmont",
    platform: "ClickFunnels & Custom Web",
    metricHighlight: "+40% Opt-In Lift • 11%+ OTO",
    description: "Full ClickFunnels sales page, multi-tier upsell architecture, and complete verified analytics report suite. All customer journey wireframes, live funnel steps, and split-test performance dashboards consolidated in one place.",
    imagePlaceholder: "/portfolio/touch-heal-3-screen.png",
    galleryImages: [
      "/portfolio/touch-heal-3-screen.png",
      "/portfolio/petsmont-sales-page.jpg",
      "/portfolio/petsmont/received_1454860371647966.jpeg",
      "/portfolio/petsmont/received_2133455063527944.jpeg",
      "/portfolio/petsmont/received_1253537781876089.jpeg",
      "/portfolio/petsmont/received_651337156665694.jpeg"
    ],
    galleryCaptions: [
      "3-Screen Complete Customer Journey Wireframe (Landing → OTO → Thank You)",
      "Full Live ClickFunnels Sales Page with Ingredient Proof & Testimonials",
      "A/B Split Test Analytics: 26% → 37.1% Relative Conversion Lift (+40% rel)",
      "One-Time-Offer (OTO) Checkout Performance: 11%+ Post-Purchase Uptake",
      "Funnel Step-by-Step Conversion Flow Breakdown",
      "Variant Comparison & Controlled Traffic Allocation Report"
    ],
    type: "Multi-Step Sales Funnel & Analytics Suite"
  },

  // ==========================================
  // 6. ORGANIC & VIRAL SOCIAL ENGINES
  // ==========================================
  {
    id: "piece-organic-rumi",
    title: "Rumi: Organic Short-Form Growth Engine",
    category: "organic-viral",
    brand: "Rumi",
    platform: "Instagram Reels & TikTok",
    metricHighlight: "2.0M+ Views in 30 Days (1k → 11k Followers)",
    description: "Engineered full video ideation, CapCut editing, niche competitor research, and trial reels strategy. Grew micro-influencer account from 1,000 to 11,000+ organic followers in 30 days with over 2,000,000 views across Reels ($0 ad spend). Peak reel achieved 821,873 views and generated 5,687 new followers from a single post.",
    imagePlaceholder: "/portfolio/rumi/rumi-profile-2m-views.png",
    galleryImages: [
      "/portfolio/rumi/rumi-profile-2m-views.png",
      "/portfolio/rumi/rumi-reel-821k-views.png",
      "/portfolio/rumi/rumi-reel-458k-views.png",
      "/portfolio/rumi/rumi-reel-354k-views.png",
      "/portfolio/rumi/rumi-reel-259k-views-11k-shares.png",
      "/portfolio/rumi/rumi-reel-58k-views.png",
      "/portfolio/rumi/rumi-reel-56k-views.png",
      "/portfolio/rumi/rumi-reel-55k-views.png",
      "/portfolio/rumi/rumi-reel-43k-views.png"
    ],
    galleryCaptions: [
      "Profile Overview: 2.0M Views in 30 Days • 8,112 Followers • 676K Top Pinned Reel",
      "Peak Reel #1: 821,873 Views • 675,355 Accounts Reached • 5,687 Follows Gained",
      "Viral Reel #2: 458,561 Views • 280,014 Accounts Reached • 942 Follows • 1.4K Comments",
      "Viral Reel #3: 354,851 Views • 276,794 Reach • 3,186 Follows Gained • 1.7K Shares",
      "Viral Shares Reel #4: 259,387 Views • 11,000 Shares (7.0% Share Rate!) • 2.5K Saves",
      "Growth Reel #5: 58,048 Views • 42,913 Reached • 568 New Followers",
      "Trial Reel #6: 56,761 Views • 12,269 Viewers • 133 Follows",
      "Algorithm Reach #7: 55,658 Views • 33,721 Reached (44.3% Skip / 1.1% Like)",
      "Repeatable Baseline #8: 43,496 Views • 26,148 Viewers • 345 Follows • 460 Shares"
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
    galleryCaptions: [
      "Gloria Quotes: 60k Followers Milestone Proof",
      "Gloria Quotes Fan Page Profile & Verified Engagement",
      "NBA Did You Know: High-CTR Trivia & Engagement",
      "NBA Did You Know 16k Community Proof",
      "Manny Quotes: Viral Motivational Community",
      "Manny Quotes 16k Community Growth",
      "Post Engagement: 3,200 Reactions & Comments",
      "Post Engagement: 2,900 Organic Interactions",
      "Post Engagement: 2,200 Organic Interactions",
      "Post Engagement: 2,100 Organic Interactions",
      "Raptors Kingdom Fan Page Growth"
    ],
    type: "Organic Audience Scaling & Multi-Page Growth"
  },
  {
    id: "piece-christian-graphics",
    title: "Christian Social Media Graphics & YouTube Thumbnails",
    category: "organic-viral",
    brand: "Christian Content",
    platform: "YouTube & Social Feeds",
    metricHighlight: "10+ High-CTR Custom Thumbnails & Reels",
    description: "Creative concepts designed for faith-based content channels: bold typography, curiosity-driven framing, and high-contrast color grading designed for high CTR and viral feed engagement.",
    imagePlaceholder: "/portfolio/christian/68e705e8d5895_frivanbeard.png",
    galleryImages: [
      "/portfolio/christian/68e705e8d5895_frivanbeard.png",
      "/portfolio/christian/68e705dc4e653_frivanmasculinity.png",
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
    videoUrl: "https://r2-origin.submagic.pro/9d1b83c5-cc7b-4486-b35d-d4078e33af08/yWmLgwcoJMSnhGR59Dh85/brandon-taftmp4-download-1793894790753.mp4",
    videoPoster: "/portfolio/video-thumbs/brandon-taft-testimonial-frame.jpg",
    screenshotProof: "/testimonials/testimonial-proof-2.png",
    screenshotTitle: "Brandon Taft Campaign Result Verification Screenshot",
    text: "Nathan generated about $7,500 in revenue in just 4 days from his Facebook ads campaign. His targeted local campaign brought in 8 qualified clients at $3.22 per lead, resulting in an incredible 291x ROAS."
  },
  {
    name: "Sheana Lasenby",
    role: "Licensed Realtor & Broker",
    company: "RE/MAX Sarnia Realty",
    rating: 5,
    date: "Verified Video Testimonial",
    metric: "60 Leads in 1 Week • 2 Signed Clients",
    videoUrl: "/videos/lasenby-testimonial.mp4",
    videoPoster: "/portfolio/video-thumbs/lasenby-testimonial-frame.jpg",
    screenshotProof: "/testimonials/rb-comment.jpeg",
    screenshotTitle: "Sheana Lasenby Campaign Review Verification Screenshot",
    text: "I started a one-week trial using Krumesz Media and was able to generate approximately 60 leads throughout that one-week timeframe. I was able to gain two solid clients from this one-week trial program, plus two additional potential clients connected with a mortgage broker. Having specific leads to follow up on sure beats door knocking."
  },
  {
    name: "Leon Lim",
    role: "CEO & Founder",
    company: "Groundup.ai",
    rating: 5,
    date: "Verified Recommendation",
    metric: "Elite Performance & Strategy",
    screenshotProof: "/testimonials/testimonial-proof-3.png",
    screenshotTitle: "Leon Lim (CEO, Groundup.ai) Recommendation Screenshot",
    text: "Nathan is an elite leader in online marketing. He hustles non-stop to get his clients results, giving deep breakdowns after scanning through campaigns rapidly with great grasp of the fundamentals. He shows immense care for his clients and is a true pleasure to work with."
  },
  {
    name: "Vince Wang",
    role: "E-Commerce Brand Owner",
    company: "DTC Brand Group",
    rating: 5,
    date: "Verified Recommendation",
    metric: "Exponential Brand Growth",
    screenshotProof: "/testimonials/testimonial-proof-4.png",
    screenshotTitle: "Vince Wang Verified Recommendation Screenshot",
    text: "Nathan is without a doubt a very hardworking individual. I have nothing but praise for him. His unique set of skills is a rare find and his marketing and SEO knowledge is vast. Nathan has a proven track record of being in the upper tier of the extraordinary few that can help a business grow exponentially."
  },
  {
    name: "Henri Liiv",
    role: "Founder & CEO",
    company: "Mighti Fungi",
    rating: 5,
    date: "Verified Client Review",
    metric: "Great Ad Results & Ongoing Retainer",
    screenshotProof: "/testimonials/testimonial-proof-1.png",
    screenshotTitle: "Henri Liiv (Founder & CEO, Mighti Fungi) Client Review Screenshot",
    text: "By the way Nathan, your ads are showing some great results."
  },
  {
    name: "Maria",
    role: "Brand Partner & E-Commerce Founder",
    company: "DTC Brand Client",
    rating: 5,
    date: "Verified Client Review",
    metric: "Inspiring Funnels & Authenticity",
    screenshotProof: "/testimonials/maria-review.png",
    screenshotTitle: "Maria Written Review & Performance Screenshot",
    text: "Nathan you’re extremely talented, you actually inspired me to continue working on my own funnels. I'm checking out your brilliant Meta (FB) pages... very informative. I love your humor and how authentic you are, thank you!"
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
