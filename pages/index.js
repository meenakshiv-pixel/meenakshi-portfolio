// pages/index.js
import Head from "next/head";
import React, { useState, useEffect } from "react";

const CONTACT = {
  name: "Meenakshi Verma",
  title: "Product Owner / Product Manager",
  location: "Sydney, Australia",
  phone: "+61 411021915",
  email: "minakshi.kiit@gmail.com",
  linkedin: "https://www.linkedin.com/in/mkva/",
};

const PROJECTS = [
  {
    id: "amp",
    title: "AMP Charge Verification Journey",
    role: "Product Owner",
    summary:
      "Uplifted 4 APIs to a new system of record and enabled fraud self-service via IVR, reducing manual reviews and improving customer experience.",
    tags: ["Fraud", "APIs", "IVR", "Product Strategy"],
    caseStudy: "/projects/amp-charge-verification",
  },
  {
    id: "warranty",
    title: "Warranty Excellence Monitor",
    role: "Business Analyst (ATCS)",
    summary:
      "Web dashboard for Mercedes-Benz warranty repairs across 29 markets & 13 languages with 6 core KPIs and drill-down charts.",
    tags: ["Analytics", "Dashboard", "KPI Design", "Stakeholder Mgmt"],
    caseStudy: "/projects/warranty-excellence",
  },
  {
    id: "brannkoncept",
    title: "Digital Brannkoncept — Fire Safety Assessment",
    role: "Assistant Product Specialist (Ramboll)",
    summary:
      "A digital tool that captures a building's design characteristics — floors, walls, stairways, extinguisher coverage — and converts them into a fire hazard score. Rolled out across Norway, Sweden and the US.",
    tags: ["Product Development", "Digitalization", "Fire Safety", "Multi-market"],
    caseStudy: "/projects/digital-brannkoncept",
  },
];

const TIMELINE = [
  {
    id: "t2026",
    year: "2026 – Present",
    title: "Assistant Manager — Account Development Strategy & Support",
    org: "American Express · Sydney, Australia",
    blurb:
      "Provide servicing support to client managers to lift overall team efficiency; drive process-improvement initiatives across systems and proactively identify opportunities to streamline ways of working.",
    skills: ["Stakeholder Mgmt", "Risk Management", "Analytics", "Market Research"],
  },
  {
    id: "t2022",
    year: "2022 – 2026",
    title: "Sr. Associate Product Management / Product Owner",
    org: "American Express",
    blurb:
      "Led Credit Authorization uplift; owned AMP (Charge Verification) for IVR & fraud, managed roadmaps, API uplifts and cross-functional delivery.",
    skills: ["Product Roadmap", "APIs", "IVR", "Fraud", "Stakeholder Mgmt", "JIRA"],
  },
  {
    id: "t2021",
    year: "2021",
    title: "Assistant Product Specialist",
    org: "Ramboll",
    blurb:
      "Delivered automation & UX improvements that saved manual hours and increased digital tool adoption.",
    skills: ["Automation", "UX", "SQL"],
  },
  {
    id: "t2018",
    year: "2018 – 2021",
    title: "Business Analyst — Warranty Excellence Monitor",
    org: "ATCS Inc",
    blurb:
      "Built a web-based dashboard for Mercedes-Benz warranty repairs across 29 markets & 13 languages; defined KPIs and improved reporting cadence.",
    skills: ["Analytics", "KPI Design", "Stakeholder Mgmt"],
  },
];

const SKILLS = [
  "Product Roadmap",
  "Product Portfolio Management",
  "API Product Management",
  "Prioritization",
  "Agile & Scrum",
  "SAFe",
  "User Research",
  "UX/UI Collaboration",
  "Wireframing",
  "Data & Analytics",
  "SQL / MySQL",
  "JIRA",
];

const NAV_LINKS = [
  ["#about", "About"],
  ["#projects", "Projects"],
  ["#experience", "Experience"],
  ["#skills", "Skills"],
  ["#education", "Education"],
  ["#contact", "Contact"],
];

function TimelineCard({ item }) {
  return (
    <article className="bg-white rounded-2xl p-6 shadow-sm border border-stone-200/80 hover:shadow-md transition-shadow relative z-10">
      <div className="flex justify-between items-start gap-4">
        <div>
          <h3 className="text-lg font-semibold text-stone-900">{item.title}</h3>
          <div className="text-sm text-stone-500 mt-1">{item.org}</div>
        </div>
        <div className="text-xs font-medium text-teal-800 bg-teal-50 border border-teal-100 px-2.5 py-1 rounded-full whitespace-nowrap md:hidden">
          {item.year}
        </div>
      </div>
      <p className="mt-4 text-stone-700 leading-relaxed">{item.blurb}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {item.skills.map((s) => (
          <span key={s} className="text-xs bg-stone-100 text-stone-700 px-3 py-1 rounded-full">
            {s}
          </span>
        ))}
      </div>
    </article>
  );
}

export default function Index() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    const handler = (e) => {
      const link = e.target.closest("a");
      if (link && link.hash && link.origin === window.location.origin) {
        const el = document.querySelector(link.hash);
        if (el) {
          e.preventDefault();
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          setMobileNavOpen(false);
        }
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  return (
    <>
      <Head>
        <title>Meenakshi Verma — Product Portfolio</title>
        <meta
          name="description"
          content="Portfolio of Meenakshi Verma — Product Manager with 8+ years across fraud, risk and servicing products at American Express, Ramboll and Mercedes-Benz (ATCS)."
        />
        <meta property="og:title" content="Meenakshi Verma — Product Portfolio" />
        <meta
          property="og:description"
          content="Product Manager with 8+ years shipping fraud, risk and servicing products across global markets."
        />
        <meta property="og:type" content="website" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <style>{`
          html { font-family: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial; scroll-behavior: smooth; }
          .font-display { font-family: Fraunces, Georgia, serif; }
          @media (prefers-reduced-motion: reduce) { html { scroll-behavior: auto; } }
          a:focus-visible, button:focus-visible { outline: 2px solid #0f766e; outline-offset: 2px; border-radius: 4px; }
        `}</style>
      </Head>

      <div className="min-h-screen bg-stone-50 text-stone-900">
        {/* NAV */}
        <nav className="sticky top-0 z-40 bg-stone-50/90 backdrop-blur border-b border-stone-200">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center justify-between h-14">
              <a href="#about" className="font-display font-semibold text-lg tracking-tight">
                {CONTACT.name}
              </a>

              {/* Desktop menu */}
              <div className="hidden md:flex items-center gap-1">
                {NAV_LINKS.map(([href, label]) => (
                  <a
                    key={href}
                    href={href}
                    className="text-sm px-3 py-1.5 rounded-md text-stone-600 hover:text-teal-900 hover:bg-teal-50 transition-colors"
                  >
                    {label}
                  </a>
                ))}
              </div>

              {/* mobile toggle */}
              <div className="md:hidden">
                <button
                  aria-label="Toggle menu"
                  aria-expanded={mobileNavOpen}
                  onClick={() => setMobileNavOpen((s) => !s)}
                  className="p-2 rounded-md hover:bg-stone-100"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                    {mobileNavOpen ? (
                      <path d="M6 6l12 12M18 6L6 18" stroke="#1c1917" strokeWidth="1.5" strokeLinecap="round" />
                    ) : (
                      <path d="M4 6h16M4 12h16M4 18h16" stroke="#1c1917" strokeWidth="1.5" strokeLinecap="round" />
                    )}
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {mobileNavOpen && (
            <div className="md:hidden border-t border-stone-200 bg-stone-50/95">
              <div className="px-6 py-4 flex flex-col gap-1">
                {NAV_LINKS.map(([href, label]) => (
                  <a key={href} href={href} className="py-2 text-stone-700">
                    {label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </nav>

        <main className="max-w-6xl mx-auto px-6 pb-20">
          {/* HERO */}
          <section id="about" className="scroll-mt-20 pt-14 md:pt-20">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12">
              <img
                src="/profile.jpg"
                alt="Portrait of Meenakshi Verma"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = "/profile.png";
                }}
                className="w-32 h-32 md:w-40 md:h-40 rounded-2xl object-cover shadow-md ring-1 ring-stone-200"
              />

              <div className="flex-1">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-800">
                  Product · {CONTACT.location}
                </p>
                <h1 className="font-display mt-3 text-4xl md:text-5xl font-bold tracking-tight text-stone-900">
                  {CONTACT.name}
                </h1>
                <p className="mt-2 text-lg text-stone-600">{CONTACT.title}</p>

                <p className="mt-5 max-w-2xl text-stone-700 leading-relaxed">
                  I build scalable products and frictionless customer experiences — product strategy,
                  cross-functional leadership and data-driven delivery across global markets.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={CONTACT.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block px-5 py-2.5 bg-teal-900 text-white text-sm font-medium rounded-lg shadow-sm hover:bg-teal-800 transition-colors"
                  >
                    Connect on LinkedIn
                  </a>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="inline-block px-5 py-2.5 border border-stone-300 text-sm font-medium rounded-lg hover:border-teal-800 hover:text-teal-900 transition-colors"
                  >
                    Email me
                  </a>
                </div>
              </div>
            </div>

            {/* Stat strip */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 border-y border-stone-200 divide-x divide-stone-200 text-center">
              {[
                ["8+", "Years experience"],
                ["Product Strategy", "Focus"],
                ["Execution & Delivery", "Strength"],
                ["29", "Markets shipped to"],
              ].map(([value, label]) => (
                <div key={label} className="py-5 px-3">
                  <div className="font-display text-xl md:text-2xl font-semibold text-teal-900">{value}</div>
                  <div className="mt-1 text-xs uppercase tracking-wide text-stone-500">{label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* PROJECTS */}
          <section id="projects" className="scroll-mt-20 mt-16">
            <div className="rounded-2xl bg-gradient-to-b from-teal-950 to-teal-900 text-white p-8 md:p-12 shadow-lg">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-300">Selected work</p>
              <h2 className="font-display mt-2 text-3xl font-bold">Projects</h2>
              <p className="mt-2 text-teal-100/80">Case studies and notable work I&rsquo;ve led.</p>

              <div className="mt-8 grid gap-5 md:grid-cols-2">
                {PROJECTS.map((p) => (
                  <div
                    key={p.id}
                    className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-colors flex flex-col"
                  >
                    <h3 className="text-lg font-semibold">{p.title}</h3>
                    <p className="mt-1 text-sm text-teal-200">{p.role}</p>
                    <p className="mt-4 text-white/80 leading-relaxed flex-1">{p.summary}</p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span key={t} className="text-xs bg-white/10 py-1 px-3 rounded-full">
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="mt-5">
                      {p.caseStudy ? (
                        <a
                          href={p.caseStudy}
                          className="inline-flex items-center gap-1 text-sm font-medium text-teal-200 hover:text-white transition-colors"
                        >
                          Read case study <span aria-hidden>→</span>
                        </a>
                      ) : (
                        <span className="inline-flex items-center text-sm text-white/50">Case study coming soon</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* WORK EXPERIENCE / TIMELINE */}
          <section id="experience" className="scroll-mt-20 mt-16">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-800">Career</p>
            <h2 className="font-display mt-2 text-3xl font-bold">Work Experience</h2>
            <p className="mt-2 text-stone-600">Most recent roles first (present → 2018).</p>

            <div className="relative mt-10">
              {/* vertical center line (desktop) */}
              <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-2 bottom-2 w-px bg-stone-300" aria-hidden />

              <div className="space-y-8 md:space-y-12">
                {TIMELINE.map((item, index) => {
                  const leftCard = index % 2 === 0;
                  return (
                    <div key={item.id} className="md:flex md:items-center md:justify-between relative">
                      {/* LEFT COLUMN (desktop only) */}
                      <div className="hidden md:block md:w-5/12">
                        {leftCard ? <TimelineCard item={item} /> : <div />}
                      </div>

                      {/* CENTER marker + year (desktop only) */}
                      <div className="hidden md:flex md:w-2/12 flex-col items-center z-20">
                        <div className="w-4 h-4 rounded-full border-[3px] border-stone-50 bg-teal-700 shadow" />
                        <div className="mt-3 text-xs font-medium text-teal-900 bg-white px-3 py-1 rounded-full border border-stone-200 shadow-sm whitespace-nowrap">
                          {item.year}
                        </div>
                      </div>

                      {/* RIGHT COLUMN (desktop only) */}
                      <div className="hidden md:block md:w-5/12">
                        {leftCard ? <div /> : <TimelineCard item={item} />}
                      </div>

                      {/* Mobile stacked card */}
                      <div className="md:hidden">
                        <TimelineCard item={item} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* SKILLS */}
          <section id="skills" className="scroll-mt-20 mt-16">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-800">Toolkit</p>
            <h2 className="font-display mt-2 text-3xl font-bold">Skills</h2>
            <p className="mt-2 text-stone-600">Tools, techniques and areas I use frequently.</p>

            <div className="mt-6 flex flex-wrap gap-2.5">
              {SKILLS.map((s) => (
                <span
                  key={s}
                  className="text-sm font-medium bg-white text-stone-800 border border-stone-200 px-4 py-2 rounded-full shadow-sm hover:border-teal-700 hover:text-teal-900 transition-colors"
                >
                  {s}
                </span>
              ))}
            </div>

            {/* EDUCATION */}
            <div id="education" className="scroll-mt-20 mt-14">
              <h3 className="font-display text-2xl font-semibold">Education</h3>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-200/80">
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <div className="font-semibold">M.Tech — IIT Roorkee</div>
                      <div className="text-sm text-stone-500 mt-0.5">Alternate Hydro Energy Systems</div>
                    </div>
                    <div className="text-sm text-stone-400 whitespace-nowrap">2016–2018</div>
                  </div>
                  <ul className="mt-3 text-sm text-stone-700 list-disc list-inside space-y-1">
                    <li>Graduate coursework in data analysis, energy systems modeling</li>
                    <li>Member of Placement Cell</li>
                    <li>Dissertation: GIS Integrated Hydropower Assessment</li>
                  </ul>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-200/80">
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <div className="font-semibold">B.Tech — KIIT University, Bhubaneswar</div>
                      <div className="text-sm text-stone-500 mt-0.5">Civil Engineering</div>
                    </div>
                    <div className="text-sm text-stone-400 whitespace-nowrap">2010–2014</div>
                  </div>
                  <ul className="mt-3 text-sm text-stone-700 list-disc list-inside space-y-1">
                    <li>Project: Hydrated Lime for Modification of Bituminous Binder</li>
                    <li>Active Member: National Service Scheme (2014)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CERTIFICATIONS */}
            <div id="certifications" className="mt-14">
              <h3 className="font-display text-2xl font-semibold">Certifications</h3>
              <div className="mt-5 space-y-3">
                {[
                  ["Certified Scrum Master (CSM) — Scrum Alliance", "Issued: 2020", "/certs/CSM.pdf"],
                  ["SAFe® Product Owner/Product Manager (POPM)", "Issued: Jan 2024", "/certs/POPM.jpeg"],
                  ["Harvard Leadership Edge", "Issued: Oct 2023", "/certs/Harvard_Leadership.jpeg"],
                ].map(([title, issued, href]) => (
                  <div
                    key={title}
                    className="bg-white rounded-2xl p-5 shadow-sm border border-stone-200/80 flex items-center justify-between gap-4"
                  >
                    <div>
                      <div className="font-semibold">{title}</div>
                      <div className="text-sm text-stone-500">{issued}</div>
                    </div>
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-medium text-teal-800 hover:text-teal-950 whitespace-nowrap"
                    >
                      View <span aria-hidden>→</span>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CONTACT / FOOTER */}
          <section id="contact" className="scroll-mt-20 mt-16">
            <div className="rounded-2xl bg-teal-950 text-white p-8 md:p-12 text-center shadow-lg">
              <h3 className="font-display text-3xl font-bold">Let&rsquo;s talk product.</h3>
              <p className="mt-3 text-teal-100/80 max-w-xl mx-auto">
                Open to product roles and conversations about fraud, risk and customer-servicing platforms.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="px-5 py-2.5 bg-white text-teal-950 text-sm font-medium rounded-lg hover:bg-teal-50 transition-colors"
                >
                  {CONTACT.email}
                </a>
                <a
                  href={CONTACT.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 border border-white/30 text-sm font-medium rounded-lg hover:bg-white/10 transition-colors"
                >
                  LinkedIn
                </a>
              </div>
              <p className="mt-8 text-xs text-teal-200/60">
                © {new Date().getFullYear()} {CONTACT.name} · Sydney, Australia
              </p>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
