// pages/index.js
import Head from "next/head";
import React, { useState, useEffect } from "react";

const CONTACT = {
  name: "Meenakshi Verma",
  title: "Product Owner → Product Manager",
  location: "Sydney, Australia",
  phone: "+61 411021915",
  email: "minakshi.kiit@gmail.com",
  linkedin: "https://www.linkedin.com/in/mkva/",
  resume: "/Meenakshi_Resume_UPDATED.pdf",
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
    id: "ramboll",
    title: "Digital Automation & UX Improvements — Ramboll",
    role: "Assistant Product Specialist",
    summary:
      "Delivered automation and UX improvements that increased adoption of digital tools and saved significant manual effort.",
    tags: ["Automation", "UX", "SQL"],
    caseStudy: null,
  },
];

const TIMELINE = [
  {
    id: "t2025",
    year: 2025,
    title: "Aspiring Product Manager / Transitioning to Australia",
    org: "Portfolio Builder",
    blurb:
      "Preparing for Product Manager roles in Australia — building public portfolio and case studies; strengthening product & data skills.",
    skills: ["Product Strategy", "Portfolio Building", "MySQL"],
  },
  {
    id: "t2022",
    year: "2022–2025",
    title: "Sr. Associate Product Management / Product Owner",
    org: "American Express",
    blurb:
      "Led Credit Authorization uplift; owned AMP (Charge Verification) for IVR & fraud, managed roadmaps, API uplifts and cross-functional delivery.",
    skills: ["Product Roadmap", "APIs", "IVR", "Fraud", "Stakeholder Mgmt", "JIRA"],
  },
  {
    id: "t2021",
    year: 2021,
    title: "Assistant Product Specialist",
    org: "Ramboll",
    blurb:
      "Delivered automation & UX improvements that saved manual hours and increased digital tool adoption.",
    skills: ["Automation", "UX", "SQL"],
  },
  {
    id: "t2018",
    year: "2018–2021",
    title: "Business Analyst — Warranty Excellence Monitor",
    org: "ATCS Inc",
    blurb:
      "Built a web-based dashboard for Mercedes-Benz warranty repairs across 29 markets & 13 languages; defined KPIs and improved reporting cadence.",
    skills: ["Analytics", "KPI Design", "Stakeholder Mgmt"],
  },
];

const SKILLS = [
  { id: "product-roadmap", name: "Product Roadmap", icon: "📈" },
  { id: "product-portfolio", name: "Product Portfolio Management", icon: "🗂" },
  { id: "mysql", name: "MySQL", icon: "🛢" },
  { id: "jira", name: "JIRA", icon: "🧭" },
  { id: "safe", name: "SAFe", icon: "🧩" },
  { id: "agile", name: "Agile & Scrum", icon: "⚡️" },
  { id: "ux", name: "UX/UI Collaboration", icon: "🎨" },
  { id: "data-analytics", name: "Data & Analytics", icon: "📊" },
  { id: "sql", name: "SQL (Basics)", icon: "💾" },
  { id: "wireframing", name: "Wireframing", icon: "🧱" },
  { id: "ms-office", name: "Microsoft Office Suite", icon: "📎" },
  { id: "prioritization", name: "Prioritization", icon: "🎯" },
  { id: "api-pm", name: "API Product Management", icon: "🔗" },
  { id: "user-research", name: "User Research", icon: "🔍" },
];

export default function Index() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    const handler = (e) => {
      if (e.target.tagName === "A" && e.target.hash) {
        const el = document.querySelector(e.target.hash);
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
        <meta name="description" content="Portfolio of Meenakshi Verma — Product Owner & aspiring Product Manager." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&display=swap" rel="stylesheet" />
        <style>{`html { font-family: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial; }`}</style>
      </Head>

      <div className="min-h-screen bg-white">
        {/* NAV */}
        <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center justify-between h-14">
              <div className="flex items-center gap-4">
                <a href="#about" className="font-semibold text-lg">{CONTACT.name}</a>
                <span className="text-sm text-zinc-500 hidden sm:inline">— {CONTACT.title}</span>
              </div>

              {/* Desktop menu */}
              <div className="hidden md:flex items-center gap-6">
                <a href="#about" className="text-sm hover:underline px-2 py-1 rounded">About</a>
                <a href="#projects" className="text-sm hover:underline px-2 py-1 rounded">Projects</a>
                <a href="#experience" className="text-sm hover:underline px-2 py-1 rounded">Experience</a>
                <a href="#skills" className="text-sm hover:underline px-2 py-1 rounded">Skills</a>
                <a href="#education" className="text-sm hover:underline px-2 py-1 rounded">Education</a>
                <a href="#contact" className="text-sm hover:underline px-2 py-1 rounded">Contact</a>
              </div>

              {/* mobile toggle */}
              <div className="md:hidden">
                <button aria-label="Toggle menu" onClick={() => setMobileNavOpen((s) => !s)} className="p-2 rounded-md hover:bg-zinc-100">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M4 6h16M4 12h16M4 18h16" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {mobileNavOpen && (
            <div className="md:hidden border-t bg-white/95">
              <div className="px-6 py-4 flex flex-col gap-2">
                <a href="#about" className="py-2">About</a>
                <a href="#projects" className="py-2">Projects</a>
                <a href="#experience" className="py-2">Experience</a>
                <a href="#skills" className="py-2">Skills</a>
                <a href="#education" className="py-2">Education</a>
                <a href="#contact" className="py-2">Contact</a>
              </div>
            </div>
          )}
        </nav>

        <main className="max-w-6xl mx-auto px-6 pb-20">
          {/* HERO */}
          <section id="about" className="mt-8">
            <div className="rounded-xl bg-white shadow-lg p-8 md:p-12 -mt-6">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <img src="/profile.jpg" alt="Profile" onError={(e)=>{e.currentTarget.onerror=null; e.currentTarget.src='/profile.png'}} className="w-36 h-36 rounded-full object-cover shadow-md ring-4 ring-white"/>
                </div>

                <div className="flex-1">
                  <h1 className="text-3xl md:text-4xl font-extrabold">{CONTACT.name}</h1>
                  <p className="mt-1 text-zinc-600">{CONTACT.title} • {CONTACT.location}</p>

                  <p className="mt-4 max-w-3xl text-zinc-700">
                    I build scalable products and frictionless customer experiences — product strategy,
                    cross-functional leadership and data-driven delivery across global markets.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <a href={CONTACT.resume} className="inline-block px-4 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700" target="_blank" rel="noreferrer">Download Resume</a>
                    <a href={CONTACT.linkedin} className="inline-block px-4 py-2 border rounded-lg hover:bg-zinc-50" target="_blank" rel="noreferrer">LinkedIn</a>
                    <a href={`mailto:${CONTACT.email}`} className="inline-block px-4 py-2 border rounded-lg hover:bg-zinc-50">Email</a>
                  </div>

                  <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm text-zinc-600">
                    <div><div className="text-xs">Years experience</div><div className="font-semibold">8+</div></div>
                    <div><div className="text-xs">Focus</div><div className="font-semibold">Product Strategy</div></div>
                    <div><div className="text-xs">Strength</div><div className="font-semibold">Execution & Delivery</div></div>
                    <div><div className="text-xs">Tools</div><div className="font-semibold">JIRA, Visio, Tableau</div></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 overflow-hidden" aria-hidden>
              <svg viewBox="0 0 1200 60" className="w-full h-14" preserveAspectRatio="none">
                <path d="M0,20 C300,70 900,-20 1200,30 L1200,60 L0,60 Z" fill="#f1fbff" />
              </svg>
            </div>
          </section>

          {/* PROJECTS */}
          <section id="projects" className="mt-8">
            <div className="rounded-xl bg-gradient-to-b from-slate-900 to-slate-800 text-white p-10 shadow-inner">
              <h2 className="text-2xl font-bold">Projects</h2>
              <p className="mt-2 text-slate-200">Case studies and notable work I’ve led.</p>

              <div className="mt-6 grid gap-6 md:grid-cols-2">
                {PROJECTS.map((p) => (
                  <div key={p.id} className="p-6 bg-white/5 rounded-2xl border border-white/10">
                    <h3 className="text-lg font-semibold">{p.title}</h3>
                    <p className="mt-1 text-sm text-white/80"><strong>Role:</strong> {p.role}</p>
                    <p className="mt-4 text-white/80">{p.summary}</p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {p.tags.map((t) => <span key={t} className="text-xs bg-white/10 py-1 px-3 rounded-full">{t}</span>)}
                    </div>

                    <div className="mt-4">
                      {p.caseStudy ? (
                        <a href={p.caseStudy} className="inline-flex items-center text-sm text-sky-200 hover:underline">View case study →</a>
                      ) : (
                        <span className="inline-flex items-center text-sm text-white/60">Case study not available</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* WORK EXPERIENCE / TIMELINE (center line, alternate cards) */}
          <section id="experience" className="mt-12">
            <h2 className="text-2xl font-bold">Work Experience</h2>
            <p className="mt-1 text-zinc-600">Most recent roles first (2025 → 2018). Click cards on small screens to read quickly.</p>

            <div className="relative mt-10">
              {/* vertical center line, behind content */}
              <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0 z-0 pointer-events-none">
                <div className="mx-auto w-0.5 h-full bg-zinc-200" />
              </div>

              <div className="space-y-12">
                {TIMELINE.map((item, index) => {
                  const leftCard = index % 2 === 0;
                  return (
                    <div key={item.id} className="md:flex md:items-center md:justify-between relative">
                      {/* LEFT COLUMN */}
                      <div className="md:w-5/12">
                        {leftCard ? (
                          <article className="bg-white rounded-xl p-6 shadow-md relative z-10">
                            <div className="flex justify-between items-start">
                              <div>
                                <h3 className="text-lg font-semibold">{item.title}</h3>
                                <div className="text-sm text-zinc-500 mt-1">{item.org}</div>
                              </div>
                              <div className="text-sm text-zinc-400 hidden md:block">{item.year}</div>
                            </div>
                            <p className="mt-4 text-zinc-700">{item.blurb}</p>
                            <div className="mt-4 flex flex-wrap gap-2">
                              {item.skills.map((s) => <span key={s} className="text-xs bg-sky-50/80 text-sky-700 px-3 py-1 rounded-full">{s}</span>)}
                            </div>
                          </article>
                        ) : (
                          <div className="hidden md:block" />
                        )}
                      </div>

                      {/* CENTER COLUMN with marker and year badge */}
                      <div className="md:w-2/12 flex flex-col items-center z-20">
                        {/* marker (circle) centered vertically via items-center on parent */}
                        <div className="w-6 h-6 rounded-full border-4 border-white bg-sky-50 flex items-center justify-center shadow-md">
                          <div className="w-2 h-2 rounded-full bg-sky-500" />
                        </div>

                        {/* year badge — hidden on mobile inside cards; on md show near marker */}
                        <div className="mt-3 hidden md:block">
                          <div className="text-sm bg-white px-3 py-1 rounded-full shadow-inner border">{item.year}</div>
                        </div>
                      </div>

                      {/* RIGHT COLUMN */}
                      <div className="md:w-5/12">
                        {leftCard ? (
                          <div className="hidden md:block" />
                        ) : (
                          <article className="bg-white rounded-xl p-6 shadow-md relative z-10">
                            <div className="flex justify-between items-start">
                              <div>
                                <h3 className="text-lg font-semibold">{item.title}</h3>
                                <div className="text-sm text-zinc-500 mt-1">{item.org}</div>
                              </div>
                              <div className="text-sm text-zinc-400 hidden md:block">{item.year}</div>
                            </div>
                            <p className="mt-4 text-zinc-700">{item.blurb}</p>
                            <div className="mt-4 flex flex-wrap gap-2">
                              {item.skills.map((s) => <span key={s} className="text-xs bg-sky-50/80 text-sky-700 px-3 py-1 rounded-full">{s}</span>)}
                            </div>
                          </article>
                        )}
                      </div>

                      {/* Mobile stacked card fallback (shown on md:hidden) */}
                      <div className="md:hidden mt-4 relative z-10">
                        <article className="bg-white rounded-xl p-6 shadow-md">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="text-lg font-semibold">{item.title}</h3>
                              <div className="text-sm text-zinc-500 mt-1">{item.org}</div>
                            </div>
                            <div className="text-sm text-zinc-400">{item.year}</div>
                          </div>
                          <p className="mt-4 text-zinc-700">{item.blurb}</p>
                          <div className="mt-4 flex flex-wrap gap-2">
                            {item.skills.map((s) => <span key={s} className="text-xs bg-sky-50/80 text-sky-700 px-3 py-1 rounded-full">{s}</span>)}
                          </div>
                        </article>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* SKILLS / EDUCATION / CERTIFICATIONS */}
          <section id="skills" className="mt-12">
            <h2 className="text-2xl font-bold">Skills</h2>
            <p className="mt-1 text-zinc-600">Tools, techniques and areas I use frequently.</p>

            <div className="mt-6 grid gap-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {SKILLS.map((s) => (
                  <div key={s.id} className="flex items-center gap-3 p-3 rounded-lg bg-sky-50 hover:-translate-y-1 transition transform shadow-sm" title={s.name}>
                    <div className="text-xl">{s.icon}</div>
                    <div className="text-sm font-medium text-sky-900">{s.name}</div>
                  </div>
                ))}
              </div>

              <div id="education" className="mt-6">
                <h3 className="text-xl font-semibold">Education</h3>
                <div className="mt-4 space-y-4">
                  <div className="bg-white rounded-lg p-4 shadow-sm border">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="font-semibold">M.Tech — IIT Roorkee</div>
                        <div className="text-sm text-zinc-500">Alternate Hydro Energy Systems</div>
                      </div>
                      <div className="text-sm text-zinc-400">2016–2018</div>
                    </div>
                    <ul className="mt-3 text-sm text-zinc-700 list-disc list-inside">
                      <li>Graduate coursework in data analysis, energy systems modeling</li>
                      <li>Member of Placement Cell</li>
                      <li>Dissertation: GIS Integrated Hydropower Assessment</li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-lg p-4 shadow-sm border">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="font-semibold">B.Tech — KIIT University, Bhubaneswar</div>
                        <div className="text-sm text-zinc-500">Civil Engineering</div>
                      </div>
                      <div className="text-sm text-zinc-400">2010–2014</div>
                    </div>
                    <ul className="mt-3 text-sm text-zinc-700 list-disc list-inside">
                      <li>Project: Hydrated Lime for Modification of Bituminous Binder</li>
                      <li>Active Member: National Service Scheme (2014)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div id="certifications" className="mt-6">
                <h3 className="text-xl font-semibold">Certifications</h3>
                <p className="text-sm text-zinc-600 mt-1">Click to view certificate (PDF/image).</p>

                <div className="mt-4 space-y-3">
                  <div className="bg-white rounded-lg p-4 shadow-sm border flex items-center justify-between">
                    <div>
                      <div className="font-semibold">Certified Scrum Master (CSM) — Scrum Alliance</div>
                      <div className="text-sm text-zinc-500">Issued: 2020</div>
                    </div>
                    <div><a href="/certs/CSM.pdf" target="_blank" rel="noreferrer" className="text-sky-600 hover:underline">View Certificate →</a></div>
                  </div>

                  <div className="bg-white rounded-lg p-4 shadow-sm border flex items-center justify-between">
                    <div>
                      <div className="font-semibold">SAFe® Product Owner/Product Manager (POPM)</div>
                      <div className="text-sm text-zinc-500">Issued: Jan 2024</div>
                    </div>
                    <div><a href="/certs/POPM.jpeg" target="_blank" rel="noreferrer" className="text-sky-600 hover:underline">View Certificate →</a></div>
                  </div>

                  <div className="bg-white rounded-lg p-4 shadow-sm border flex items-center justify-between">
                    <div>
                      <div className="font-semibold">Harvard Leadership Edge</div>
                      <div className="text-sm text-zinc-500">Issued: Oct 2023</div>
                    </div>
                    <div><a href="/certs/Harvard_Leadership.jpeg" target="_blank" rel="noreferrer" className="text-sky-600 hover:underline">View Certificate →</a></div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CONTACT / FOOTER */}
          <section id="contact" className="mt-12">
            <div className="bg-white rounded-xl p-6 shadow-md border">
              <h3 className="text-lg font-semibold">Get in touch</h3>
              <p className="mt-2 text-sm text-zinc-700">{CONTACT.name} — {CONTACT.title}</p>
              <p className="mt-1 text-sm text-zinc-700">
                {CONTACT.location} • <a href={`tel:${CONTACT.phone}`} className="underline">{CONTACT.phone}</a> •{" "}
                <a href={`mailto:${CONTACT.email}`} className="underline">{CONTACT.email}</a>
              </p>

              <div className="mt-4 flex gap-3">
                <a href={CONTACT.linkedin} target="_blank" rel="noreferrer" className="text-sm border px-3 py-2 rounded">LinkedIn</a>
                <a href={CONTACT.resume} target="_blank" rel="noreferrer" className="text-sm border px-3 py-2 rounded">Resume (PDF)</a>
              </div>

              <p className="mt-6 text-xs text-zinc-500">Built with ♥ — tailored for Product roles. © {new Date().getFullYear()} {CONTACT.name}</p>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
