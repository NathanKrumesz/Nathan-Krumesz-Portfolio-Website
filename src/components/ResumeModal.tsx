import React, { useState } from 'react';
import { X, Printer, Copy, Check, Download, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { LogoMark } from './Logo';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContact: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, onOpenContact }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    // Collect the resume DOM node
    const resumeEl = document.getElementById('resume-printable-content');
    if (!resumeEl) {
      window.print();
      return;
    }

    try {
      // In embedded iframe sandboxes, window.print() can sometimes be blocked or print the parent.
      // An isolated hidden iframe ensures reliable Print / Save as PDF across all browsers & iframes.
      const printFrame = document.createElement('iframe');
      printFrame.style.position = 'fixed';
      printFrame.style.right = '0';
      printFrame.style.bottom = '0';
      printFrame.style.width = '0';
      printFrame.style.height = '0';
      printFrame.style.border = '0';
      printFrame.setAttribute('aria-hidden', 'true');
      document.body.appendChild(printFrame);

      const frameDoc = printFrame.contentWindow?.document || printFrame.contentDocument;
      if (!frameDoc || !printFrame.contentWindow) {
        window.print();
        return;
      }

      frameDoc.open();
      frameDoc.write(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>Nathan Krumesz - Resume</title>
            <meta charset="utf-8" />
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
            <style>
              @page {
                size: letter portrait;
                margin: 18mm 16mm;
              }
              * {
                box-sizing: border-box;
                -webkit-print-color-adjust: exact;
                print-color-adjust: exact;
              }
              body {
                font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
                color: #111114;
                background: #ffffff;
                margin: 0;
                padding: 0;
                font-size: 11pt;
                line-height: 1.45;
              }
              h1 {
                font-size: 24pt;
                font-weight: 700;
                margin: 0 0 6px 0;
                letter-spacing: -0.02em;
                text-align: center;
              }
              .contact-line {
                font-family: 'JetBrains Mono', monospace;
                font-size: 8.5pt;
                color: #444;
                text-align: center;
                margin-bottom: 16px;
                padding-bottom: 14px;
                border-bottom: 1.5px solid #000;
              }
              .section-title {
                font-family: 'JetBrains Mono', monospace;
                font-size: 8.5pt;
                font-weight: 700;
                text-transform: uppercase;
                letter-spacing: 0.12em;
                border-bottom: 1px solid #000;
                padding-bottom: 3px;
                margin-top: 14px;
                margin-bottom: 8px;
              }
              .summary-text {
                font-size: 9.5pt;
                line-height: 1.5;
                color: #222;
                margin: 0;
              }
              .skills-grid p {
                font-size: 9pt;
                line-height: 1.45;
                margin: 3px 0;
              }
              .skills-grid strong {
                color: #000;
                font-weight: 600;
              }
              .role-header {
                display: flex;
                justify-content: space-between;
                align-items: baseline;
                font-size: 10pt;
                margin-top: 10px;
              }
              .role-header h3 {
                margin: 0;
                font-size: 10pt;
                font-weight: 700;
              }
              .role-sub {
                font-size: 8.5pt;
                color: #444;
                font-style: italic;
                margin: 1px 0 4px 0;
              }
              .period {
                font-family: 'JetBrains Mono', monospace;
                font-size: 8pt;
                color: #444;
              }
              ul {
                margin: 3px 0 8px 18px;
                padding: 0;
              }
              li {
                font-size: 9pt;
                line-height: 1.4;
                color: #222;
                margin-bottom: 3px;
              }
              @media print {
                body { margin: 0; }
                .no-break { page-break-inside: avoid; }
              }
            </style>
          </head>
          <body>
            ${resumeEl.innerHTML}
          </body>
        </html>
      `);
      frameDoc.close();

      setTimeout(() => {
        try {
          printFrame.contentWindow?.focus();
          printFrame.contentWindow?.print();
        } catch {
          window.print();
        } finally {
          setTimeout(() => {
            if (document.body.contains(printFrame)) {
              document.body.removeChild(printFrame);
            }
          }, 3000);
        }
      }, 350);
    } catch {
      window.print();
    }
  };

  const copyResumeText = () => {
    const text = `
NATHAN KRUMESZ
Toronto, Ontario, Canada | 647-535-3254 | nathan.krumesz@alumni.utoronto.ca | https://linkedin.com/in/nathankrumesz

PROFESSIONAL SUMMARY
${PERSONAL_INFO.summary}

SKILLS
• Paid Media: Facebook & Instagram Ads, Meta Ads Manager, TikTok Ads, Audience Targeting, Media Buying, Ad Copywriting
• Growth & Optimization: Conversion Rate Optimization (CRO), A/B Split Testing, Sales Funnel Design, Lead Generation, Landing Page Optimization, Email Marketing
• Content & Creative: Organic Social Media Strategy, Short-Form Video Strategy, Content Planning, HTML/CSS for Landing Pages & Email
• Analytics & Systems: Data Analysis, Google Analytics, CRM Integration (Salesforce), Marketing Automation, KPI Reporting
• Tools & Platforms: Meta Ads Manager, Canva, CapCut, Shopify, WordPress, Salesforce, ClickFunnels

PROFESSIONAL EXPERIENCE
Administrative Assistant | Feb 2024 – Apr 2025
RBC Wealth Management | Toronto, Canada
- Provided day-to-day administrative support to an Advisor team, including calendar coordination, meeting preparation, and account opening/maintenance.
- Followed up on trades to ensure proper settlement and delivery, tracking key documentation requirements.
- Centralized client records into a CRM system as part of a broader digital transformation initiative.
- Maintained compliance with PIPEDA and internal data privacy policies across all account administration.

Digital Marketing Specialist | Feb 2023 – Jul 2024
Mighti — Functional Mushroom Supplements | Remote — Freelance
- Built and optimized end-to-end DTC e-commerce marketing funnels, improving conversion rates and reducing customer acquisition costs.
- Managed full-cycle paid social ad campaigns across Meta — from creative development and ad copywriting through audience targeting and media buying.
- Ran systematic A/B split testing on landing pages and ad creatives, using data analysis to maximize ROI and lower cost-per-acquisition.
- Directed the graphic design team on iterative ad creative development, providing feedback loops improving CTR and conversion.

Paid Social & Performance Marketing Specialist | Oct 2023 – Jan 2024
Kalaia Skincare | Remote — Freelance
- Led end-to-end paid social campaigns — creative development, media buying, audience targeting, and performance optimization — across Meta and TikTok.
- Developed high-converting ad copy, landing pages, and video sales scripts to drive product awareness, traffic, and conversions.
- Managed structured A/B testing to optimize performance and improve return on ad spend (ROAS).
- Launched a multi-product offer strategy that improved customer acquisition rates and increased average order value (AOV).

Creative Strategist | Sep 2022 – Dec 2022
Petsmont | Remote — Freelance
- Built a complete multi-step sales funnel — landing page, copywriting, and upsell offers — in ClickFunnels for a single-product e-commerce brand.
- Designed “irresistible offer” upsells (OTOs) converting at 11%+.
- Ran structured A/B tests on landing pages improving opt-in conversion rates by over 40% relative (from ~26% to ~37%).

Marketing Coordinator | May 2018 – Jul 2018
Canadian Community Alliance Network (CCAN) | Toronto, Canada — Seasonal
- Built and maintained social media and brand presence across Facebook and Instagram.
- Optimized website design and landing content to increase online lead conversion.

Social Media Manager | Jun 2017 – Dec 2017
HalalMeals | Toronto, Canada (Remote)
- Designed and executed Facebook and Instagram advertising plan that increased online sales by over $20,000/month within 2 months.
- Launched a local viral video ad campaign that generated over 100,000 views.
- Achieved a 2,500% increase in organic reach through strategic content creation.

PROJECTS
Thummy – AI-Powered YouTube Thumbnail Optimization Platform (2025)
- Researched user pain points with existing thumbnail creation tools to define multi-tier SaaS features.
- Designed an A/B split-testing feature allowing users to create visual variants and track CTR performance against baselines.
- Directed AI-assisted engineering tools to build and iterate frontend and backend functionality.

Pass Lock – Web Application (2025 CS50x Final Project, Harvard University)
- Built a Flask-based web application with HTML, CSS, JavaScript, relational SQL database, and real-time client functionality.

EDUCATION
- Honours Bachelor of Arts, Digital Enterprise Management — University of Toronto (2016 – 2020)
- Certificate in Digital Communications — Sheridan College (2016 – 2020)

CERTIFICATIONS
- CS50x: Introduction to Computer Science — Harvard University (2025)
    `;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto">
      <div className="bg-white text-[#0A0A0A] rounded-3xl max-w-4xl w-full border border-black/10 shadow-2xl overflow-hidden my-auto max-h-[94vh] flex flex-col">
        {/* Top Control Bar */}
        <div className="p-4 sm:p-5 border-b border-black/10 flex items-center justify-between bg-[#F7F7F6]">
          <div className="flex items-center gap-2.5">
            <LogoMark size="xs" theme="light" />
            <span className="text-black/30 font-mono text-xs">/</span>
            <span className="text-xs font-mono uppercase tracking-wider text-black/70 font-medium">
              Verified Resume
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={copyResumeText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-black/15 text-xs text-black/80 hover:bg-black/5 transition-all shadow-xs"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black text-white text-xs font-medium hover:bg-black/85 transition-all"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-black/60 hover:text-black hover:bg-black/10 transition-colors ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Body */}
        <div
          id="resume-printable-content"
          className="overflow-y-auto p-6 sm:p-10 lg:p-14 font-sans text-[#111114] leading-normal space-y-8 select-text"
        >
          {/* Header */}
          <div className="text-center pb-6 border-b-2 border-black/10">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-black">
              Nathan Krumesz
            </h1>
            <p className="contact-line mt-2 text-xs sm:text-sm text-black/70 font-mono">
              Toronto, Ontario, Canada &nbsp;|&nbsp; 647-535-3254 &nbsp;|&nbsp; nathan.krumesz@alumni.utoronto.ca &nbsp;|&nbsp; <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline text-black font-medium">{PERSONAL_INFO.linkedinHandle}</a>
            </p>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-black/80 font-bold border-b border-black/20 pb-1 mb-2.5">
              PROFESSIONAL SUMMARY
            </h2>
            <p className="text-xs sm:text-sm text-black/85 leading-relaxed">
              {PERSONAL_INFO.summary}
            </p>
          </div>

          {/* Skills */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-black/80 font-bold border-b border-black/20 pb-1 mb-2.5">
              SKILLS
            </h2>
            <div className="space-y-1.5 text-xs sm:text-sm text-black/85">
              <p><strong className="text-black">Paid Media:</strong> Facebook & Instagram Ads, Meta Ads Manager, TikTok Ads, Audience Targeting, Media Buying, Ad Copywriting</p>
              <p><strong className="text-black">Growth & Optimization:</strong> Conversion Rate Optimization (CRO), A/B Split Testing, Sales Funnel Design, Lead Generation, Landing Page Optimization, Email Marketing</p>
              <p><strong className="text-black">Content & Creative:</strong> Organic Social Media Strategy, Short-Form Video Strategy, Content Planning, HTML/CSS for Landing Pages & Email</p>
              <p><strong className="text-black">Analytics & Systems:</strong> Data Analysis, Google Analytics, CRM Integration (Salesforce), Marketing Automation, KPI Reporting</p>
              <p><strong className="text-black">Tools & Platforms:</strong> Meta Ads Manager, Canva, CapCut, Shopify, WordPress, Salesforce, ClickFunnels</p>
            </div>
          </div>

          {/* Professional Experience */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-black/80 font-bold border-b border-black/20 pb-1 mb-4">
              PROFESSIONAL EXPERIENCE
            </h2>

            <div className="space-y-6">
              {/* RBC */}
              <div>
                <div className="flex justify-between items-baseline text-xs sm:text-sm">
                  <h3 className="font-bold text-black">Administrative Assistant</h3>
                  <span className="font-mono text-black/60 text-xs">Feb 2024 – Apr 2025</span>
                </div>
                <p className="text-xs italic text-black/70 mb-2">
                  RBC Wealth Management | Toronto, Canada — Contract via Hays (Feb 2024–Sep 2024); converted to Full-Time, direct with RBC (Sep 2024–Apr 2025)
                </p>
                <ul className="list-disc list-outside ml-4 space-y-1 text-xs text-black/80 leading-relaxed">
                  <li>Provided day-to-day administrative support to an Advisor team, including calendar coordination, meeting preparation, and account opening and maintenance documentation.</li>
                  <li>Followed up on trades to ensure proper settlement and delivery, and maintained accurate client account records, tracking key dates and documentation requirements.</li>
                  <li>Centralized client records into a CRM system as part of a broader digital transformation initiative, improving data accessibility and reporting accuracy for the team.</li>
                  <li>Maintained compliance with PIPEDA and internal data privacy policies across all account administration and documentation.</li>
                  <li>Helped manage incoming correspondence and communications between advisors, internal departments, and external partners to support smooth day-to-day operations.</li>
                </ul>
              </div>

              {/* Mighti */}
              <div>
                <div className="flex justify-between items-baseline text-xs sm:text-sm">
                  <h3 className="font-bold text-black">Digital Marketing Specialist</h3>
                  <span className="font-mono text-black/60 text-xs">Feb 2023 – Jul 2024</span>
                </div>
                <p className="text-xs italic text-black/70 mb-2">
                  Mighti — Functional Mushroom Supplements | Remote — Freelance
                </p>
                <ul className="list-disc list-outside ml-4 space-y-1 text-xs text-black/80 leading-relaxed">
                  <li>Built and optimized end-to-end DTC e-commerce marketing funnels, improving conversion rates and reducing customer acquisition costs.</li>
                  <li>Managed full-cycle paid social ad campaigns across Meta — from creative development and ad copywriting through audience targeting, media buying, and performance optimization.</li>
                  <li>Ran systematic A/B split testing on landing pages and ad creatives, using data analysis to maximize ROI and lower cost-per-acquisition.</li>
                  <li>Directed the graphic design team on iterative ad creative development, providing feedback loops that improved CTR and conversion performance.</li>
                  <li>Conducted customer and market research to surface audience insights and inform campaign strategy and messaging.</li>
                </ul>
              </div>

              {/* Kalaia Skincare */}
              <div>
                <div className="flex justify-between items-baseline text-xs sm:text-sm">
                  <h3 className="font-bold text-black">Paid Social & Performance Marketing Specialist</h3>
                  <span className="font-mono text-black/60 text-xs">Oct 2023 – Jan 2024</span>
                </div>
                <p className="text-xs italic text-black/70 mb-2">
                  Kalaia Skincare | Remote — Freelance
                </p>
                <ul className="list-disc list-outside ml-4 space-y-1 text-xs text-black/80 leading-relaxed">
                  <li>Led end-to-end paid social campaigns — creative development, media buying, audience targeting, and performance optimization — across Meta and TikTok.</li>
                  <li>Developed high-converting ad copy, landing pages, and video sales scripts to drive product awareness, traffic, and conversions.</li>
                  <li>Managed structured A/B testing to optimize performance and improve return on ad spend (ROAS).</li>
                  <li>Launched a multi-product offer strategy that improved customer acquisition rates and increased average order value (AOV).</li>
                </ul>
              </div>

              {/* Petsmont */}
              <div>
                <div className="flex justify-between items-baseline text-xs sm:text-sm">
                  <h3 className="font-bold text-black">Creative Strategist</h3>
                  <span className="font-mono text-black/60 text-xs">Sep 2022 – Dec 2022</span>
                </div>
                <p className="text-xs italic text-black/70 mb-2">
                  Petsmont | Remote — Freelance
                </p>
                <ul className="list-disc list-outside ml-4 space-y-1 text-xs text-black/80 leading-relaxed">
                  <li>Built a complete multi-step sales funnel — landing page, copywriting, and upsell offers — in ClickFunnels for a single-product e-commerce brand, replacing a single Shopify product page with a full funnel strategy.</li>
                  <li>Designed “irresistible offer” upsells (OTOs) to increase average order value, with select upsell pages converting at 11%+.</li>
                  <li>Ran structured A/B tests on landing pages using ClickFunnels analytics, improving opt-in conversion rates by over 40% relative (from ~26% to ~37%) through iterative testing.</li>
                  <li>Wrote sales video concepts and scripts (AI-assisted) and designed supporting graphics in Canva for landing and upsell pages.</li>
                  <li>Collaborated directly with the company's CEO and a web/funnel designer to plan and execute the full funnel strategy from concept to launch.</li>
                </ul>
              </div>

              {/* CCAN */}
              <div>
                <div className="flex justify-between items-baseline text-xs sm:text-sm">
                  <h3 className="font-bold text-black">Marketing Coordinator</h3>
                  <span className="font-mono text-black/60 text-xs">May 2018 – Jul 2018</span>
                </div>
                <p className="text-xs italic text-black/70 mb-2">
                  Canadian Community Alliance Network (CCAN) | Toronto, Canada — Seasonal
                </p>
                <ul className="list-disc list-outside ml-4 space-y-1 text-xs text-black/80 leading-relaxed">
                  <li>Built and maintained the organization's social media and brand presence across Facebook and Instagram, publishing daily content to support community outreach.</li>
                  <li>Optimized website design and landing content to increase online lead conversion.</li>
                  <li>Designed social media graphics and wrote daily post copy, maintaining a consistent, approachable brand voice.</li>
                </ul>
              </div>

              {/* HalalMeals */}
              <div>
                <div className="flex justify-between items-baseline text-xs sm:text-sm">
                  <h3 className="font-bold text-black">Social Media Manager</h3>
                  <span className="font-mono text-black/60 text-xs">Jun 2017 – Dec 2017</span>
                </div>
                <p className="text-xs italic text-black/70 mb-2">
                  HalalMeals | Toronto, Canada (Remote)
                </p>
                <ul className="list-disc list-outside ml-4 space-y-1 text-xs text-black/80 leading-relaxed">
                  <li>Designed and executed a Facebook and Instagram advertising plan that increased online sales by over $20,000/month within 2 months.</li>
                  <li>Launched a local viral video ad campaign that generated over 100,000 views across social platforms.</li>
                  <li>Achieved a 2,500% increase in organic reach through strategic content creation and community management.</li>
                  <li>Conducted extensive split-testing of ad imagery and copy to optimize click-through rate (CTR) and conversion volume.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-black/80 font-bold border-b border-black/20 pb-1 mb-3">
              PROJECTS
            </h2>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-baseline text-xs sm:text-sm">
                  <h3 className="font-bold text-black">Thummy – AI-Powered YouTube Thumbnail Optimization Platform</h3>
                  <span className="font-mono text-black/60 text-xs">2025</span>
                </div>
                <p className="text-xs italic text-black/70 mb-1">Personal Project</p>
                <ul className="list-disc list-outside ml-4 space-y-1 text-xs text-black/80 leading-relaxed">
                  <li>Researched user pain points with existing thumbnail-creation tools used by YouTube creators to define features for a multi-tier SaaS platform.</li>
                  <li>Designed an A/B split-testing feature allowing users to create visual variants and track click-through performance against a baseline, applying the same testing principles used in paid ad optimization.</li>
                  <li>Worked directly with an AI development tool to build and iterate on the platform's front end and backend functionality, directing AI-assisted development to ship a working, multi-feature product.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-baseline text-xs sm:text-sm">
                  <h3 className="font-bold text-black">Pass Lock – Web Application</h3>
                  <span className="font-mono text-black/60 text-xs">2025</span>
                </div>
                <p className="text-xs italic text-black/70 mb-1">CS50x Final Project (Harvard University)</p>
                <ul className="list-disc list-outside ml-4 space-y-1 text-xs text-black/80 leading-relaxed">
                  <li>Built a Flask-based web application with HTML, CSS, and JavaScript, including a relational SQL database and real-time client-side functionality.</li>
                  <li>Conducted user research to define product requirements, translating user pain points into a working, testable solution.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education & Certifications */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-black/80 font-bold border-b border-black/20 pb-1 mb-3">
              EDUCATION & CERTIFICATIONS
            </h2>

            <div className="space-y-3 text-xs sm:text-sm">
              <div>
                <div className="flex justify-between items-baseline">
                  <p><strong className="text-black">Honours Bachelor of Arts, Digital Enterprise Management</strong> — University of Toronto</p>
                  <span className="font-mono text-black/60 text-xs">2016 – 2020</span>
                </div>
                <p className="text-xs text-black/70 mt-0.5">Combined digital technology proficiency with business strategy, coursework in digital communications, e-business, and marketing analytics.</p>
              </div>

              <div>
                <div className="flex justify-between items-baseline">
                  <p><strong className="text-black">Certificate in Digital Communications</strong> — Sheridan College</p>
                  <span className="font-mono text-black/60 text-xs">2016 – 2020</span>
                </div>
                <p className="text-xs text-black/70 mt-0.5">Coursework in digital marketing strategy, social media content creation, SEO, graphic/web design, and marketing analytics.</p>
              </div>

              <div>
                <div className="flex justify-between items-baseline">
                  <p><strong className="text-black">CS50x: Introduction to Computer Science</strong> — Harvard University</p>
                  <span className="font-mono text-black/60 text-xs">2025</span>
                </div>
                <p className="text-xs text-black/70 mt-0.5">Covered algorithms, data structures, SQL, and web application development with Python, Flask, HTML, CSS, and JavaScript.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-5 border-t border-black/10 bg-[#F7F7F6] flex items-center justify-between">
          <span className="text-xs font-mono text-black/60">
            Looking to hire Nathan? Let's talk today.
          </span>
          <button
            onClick={() => {
              onClose();
              onOpenContact();
            }}
            className="px-5 py-2 rounded-full bg-black text-white text-xs font-medium hover:bg-black/85"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
};
