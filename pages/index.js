// pages/index.js
import Head from "next/head";
import React, { useEffect } from "react";

/*
  Updated Portfolio index.js
  - Blue-shaded section backgrounds
  - Nav menu that scrolls to sections
  - Skills tiles with icons and hover micro-animations
  - Education cards + Certifications gallery + Achievements
  - First timeline entry title updated to "Aspiring Product Manager / Transitioning to Australia"
  - Certifications link to /certs/... PDFs (upload to public/certs/)
*/

const CONTACT = {
  name: "Meenakshi Verma",
  title: "Product Owner → Product Manager",
  location: "Sydney, Australia",
  phone: "+61 411021915",
  email: "minakshi.kiit@gmail.com",
  linkedin: "https://www.linkedin.com/in/mkva/",
  resume: "/Meenakshi_Resume_UPDATED.pdf",
};

const TIMELINE = [
  { date: "2025", title: "Aspiring Product Manager / Transitioning to Australia", details: "Preparing for Product Manager roles in Australia — building public portfolio & case studies." },
  { date: "2022–2025", title: "Sr. Associate Product Management — American Express", details: "Led Credit Authorization uplift; owned AMP (Charge Verification) work for IVR & fraud; managed roadmaps and API uplifts." },
  { date: "May 2021", title: "Assistant Product Specialist — Ramboll", details: "Delivered automation & UX improvements that saved manual hours and improved adoption." },
  { date: "Jul 2018", title: "Business Analyst — ATCS", details: "Worked with Mercedes-Benz/Daimler — delivered Warranty Excellence Monitor and analytics dashboards across multiple markets." }
];

const PROJECTS = [
  {
    title: "AMP Charge Verification Journey",
    role: "Product Owner",
    summary: "Uplifted 4 APIs to a new system of record and enabled fraud self-service via IVR, reducing manual reviews and improving customer experience.",
    tags: ["Fraud", "APIs", "IVR", "Product Strategy"],
    link: "/projects/amp-charge-verification"
  },
  {
    title: "Warranty Excellence Monitor",
    role: "Business Analyst (ATCS)",
    summary: "Web dashboard for Mercedes-Benz warranty repairs across 29 markets & 13 languages with 6 core KPIs and drill-down charts.",
    tags: ["Analytics", "Dashboard", "KPI Design", "Stakeholder Mgmt"],
    link: "/projects/warranty-excellence"
  }
];

const SKILLS = [
  { id: "product-roadmap", name: "Product Roadmap", icon: "📈" },
  { id: "product-portfolio", name: "Product Portfolio Management", icon: "🗂️" },
  { id: "agile-scrum", name: "Agile & Scrum", icon: "⚡" },
  { id: "safe", name: "SAFe", icon: "🧩" },
  { id: "jira", name: "JIRA", icon: "🧭" },
  { id: "mysql", name: "MySQL", icon: "🛢️" },
  { id: "sql", name: "SQL (Basics)", icon: "💾" },
  { id: "data-analytics", name: "Data & Analytics", icon: "📊" },
  { id: "ux-ui", name: "UX/UI Collaboration", icon: "🎨" },
  { id: "wireframing", name: "Wireframing", icon: "🧱" },
  { id: "ms-office", name: "Microsoft Office Suite", icon: "📎" },
  { id: "prioritization", name: "Prioritization", icon: "🎯" },
  { id: "api-product", name: "API Product Management", icon: "🔌" },
  { id: "user-research", name: "User Research", icon: "🔍" }
];


const EDUCATION = [
  {
    degree: "M.Tech — IIT Roorkee",
    subject: "Alternate Hydro Energy Systems",
    years: "2016–2018",
    bullets: [
      "Graduate coursework in data analysis, energy systems modeling",
      "Member of Placement Cell",
      "Dissertation: GIS Integrated Hydropower Assessment"
    ]
  },
  {
    degree: "B.Tech — KIIT University, Bhubaneswar",
    subject: "Civil Engineering",
    years: "2010–2014",
    bullets: [
      "Project: Hydrated Lime for Modification of Bituminous Binder",
      "Active Member: National Service Scheme (2014)"
    ]
  }
];

const CERTIFICATIONS = [
  { name: "Certified Scrum Master (CSM) — Scrum Alliance", issued: "2020", file: "/certs/CSM.pdf" },
 { name: "SAFe® Product Owner/Product Manager (POPM)", issued: "Jan 2024", file: "/certs/POPM.jpeg" },

{ name: "Harvard Leadership Edge", issued: "Oct 2023", file: "/certs/Harvard_Leadership.jpeg" },
];

const ACHIEVEMENTS = [
  { title: "Best of the Best Award — ATCS (2019)", desc: "Recognized among top performers for delivering the Warranty Excellence Dashboard (29 markets, 13 languages)." },
  { title: "Star of the Month — ATCS (multiple)", desc: "For outstanding stakeholder coordination & dashboard releases." },
  { title: "Sprint Leadership Recognition — American Express", desc: "Led cross-functional API uplift delivery with 96% feature completion rate." }
];

export default function Portfolio() {
  // smooth-scroll for nav anchors (works in most browsers)
  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.style.scrollBehavior = "smooth";
    }
  }, []);

  return (
    <>
      <Head>
        <title>{CONTACT.name} — Product Portfolio</title>
        <meta name="description" content="Portfolio of Meenakshi Verma — Product Owner & Product Manager" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&display=swap" rel="stylesheet" />
        <style>{`html { font-family: Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; }`}</style>
      </Head>

      <nav className="w-full sticky top-0 z-30 bg-white/80 backdrop-blur-sm border-b">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="font-semibold">{CONTACT.name}</div>
            <div className="text-sm text-zinc-600 hidden md:block">— {CONTACT.title}</div>
          </div>

          <div className="flex gap-4">
            <a href="#about" className="px-3 py-1 rounded-md bg-indigo-600 text-white text-sm">About</a>
            <a href="#projects" className="px-3 py-1 rounded-md text-sm hover:bg-zinc-100">Projects</a>
            <a href="#experience" className="px-3 py-1 rounded-md text-sm hover:bg-zinc-100">Work Experience</a>
            <a href="#skills" className="px-3 py-1 rounded-md text-sm hover:bg-zinc-100">Skills</a>
            <a href="#education" className="px-3 py-1 rounded-md text-sm hover:bg-zinc-100">Education</a>
            <a href="#contact" className="px-3 py-1 rounded-md text-sm hover:bg-zinc-100">Contact</a>
          </div>
        </div>
      </nav>

      <main className="min-h-screen bg-white text-zinc-900">
        <div id="about" className="max-w-6xl mx-auto px-6 pt-10">
          {/* About / Hero — light blue panel */}
          <section className="rounded-2xl p-8 md:p-12 bg-gradient-to-b from-[#eaf6ff] to-[#e1f0ff] shadow-sm">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <img src="/profile.png" alt={CONTACT.name} className="w-36 h-36 rounded-full object-cover border-4 border-white shadow-md" />
              </div>

              <div className="flex-1">
                <h1 className="text-3xl md:text-4xl font-extrabold">{CONTACT.name}</h1>
                <p className="mt-2 text-lg text-zinc-700">{CONTACT.title} • {CONTACT.location}</p>

                <p className="mt-4 text-zinc-700 max-w-3xl">
                  I build scalable products and frictionless customer experiences — product strategy, cross-functional leadership and data-driven delivery across global markets.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a href={CONTACT.resume} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-lg bg-indigo-600 text-white shadow">Download Resume</a>
                  <a href={CONTACT.linkedin} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-lg border">LinkedIn</a>
                  <a href={`mailto:${CONTACT.email}`} className="px-4 py-2 rounded-lg border">Email</a>
                </div>

                <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-zinc-600">
                  <div>
                    <div className="text-xs">Years experience</div>
                    <div className="font-semibold">8+</div>
                  </div>
                  <div>
                    <div className="text-xs">Focus</div>
                    <div className="font-semibold">Product Strategy</div>
                  </div>
                  <div>
                    <div className="text-xs">Strength</div>
                    <div className="font-semibold">Execution & Delivery</div>
                  </div>
                  <div>
                    <div className="text-xs">Tools</div>
                    <div className="font-semibold">JIRA, Visio, Tableau</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Projects - darker blue panel */}
        <div id="projects" className="max-w-6xl mx-auto px-6 mt-10">
          <section className="rounded-2xl p-8 md:p-12 bg-gradient-to-b from-[#0f2940] to-[#172f47] text-white shadow-inner">
            <h2 className="text-2xl font-bold">Projects</h2>
            <p className="mt-2 text-zinc-200">Case studies and notable work I've led.</p>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {PROJECTS.map((p) => (
                <article key={p.title} className="p-6 bg-white/8 rounded-xl border border-white/10 backdrop-blur-sm">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                      <p className="text-sm mt-1 text-zinc-200">Role: {p.role}</p>
                    </div>
                    <div className="text-sm text-zinc-200">{/* optional date */}</div>
                  </div>

                  <p className="mt-4 text-zinc-100">{p.summary}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-800/40 text-sm text-white">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="opacity-90"><circle cx="12" cy="12" r="10" stroke="white" strokeOpacity="0.2"></circle></svg>
                        {t}
                      </span>
                    ))}
                  </div>

                  {p.link && (
                    <a href={p.link} className="mt-4 inline-block text-sm font-medium text-sky-200 hover:text-white">View case study →</a>
                  )}
                </article>
              ))}
            </div>
          </section>
        </div>

        {/* Experience / Timeline - lightest blue */}
        <div id="experience" className="max-w-6xl mx-auto px-6 mt-10">
          <section className="rounded-2xl p-8 md:p-12 bg-gradient-to-b from-[#e7f4ff] to-[#dbeefc] shadow-sm">
            <h2 className="text-2xl font-bold">Work Experience</h2>
            <p className="mt-2 text-zinc-700">Most recent roles first (2025 → 2018). Click cards on small screens to read quickly.</p>

            <div className="mt-8 relative">
              {/* vertical center line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 top-8 bottom-8 w-px bg-sky-300"></div>

              <div className="space-y-12">
                {TIMELINE.map((item, idx) => {
                  const left = idx % 2 === 0;
                  return (
                    <div key={item.date} className="relative">
                      <div className={`w-full md:flex ${left ? "md:flex-row-reverse" : "md:flex-row"} items-start md:items-center`}>
                        <div className="md:w-1/2 md:px-6">
                          <div className={`p-6 bg-white rounded-xl shadow-md max-w-xl ${left ? "md:ml-auto" : ""}`}>
                            <div className="flex items-start justify-between">
                              <div>
                                <h3 className="font-semibold">{item.title}</h3>
                                <div className="text-sm text-zinc-500 mt-1">{item.date}</div>
                              </div>
                            </div>

                            <p className="mt-3 text-zinc-700">{item.details}</p>

                            <div className="mt-4 flex flex-wrap gap-2">
                              {/* pick some dynamic skill tags from text (simple heuristic) */}
                              {item.title.toLowerCase().includes("product") && <span className="px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-sm">Product Roadmap</span>}
                              {item.title.toLowerCase().includes("analyst") && <span className="px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-sm">Analytics</span>}
                              {item.title.toLowerCase().includes("assistant") && <span className="px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-sm">Automation</span>}
                            </div>
                          </div>
                        </div>

                        <div className="hidden md:block md:w-1/6 relative">
                          {/* center point */}
                          <div className="absolute left-1/2 transform -translate-x-1/2 top-8 w-4 h-4 rounded-full bg-white border-4 border-sky-400"></div>
                        </div>

                        <div className="md:w-1/2 md:px-6"></div>
                      </div>

                      {/* small circle under each item for mobile spacing */}
                      <div className="md:hidden mt-4 flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-sky-400"></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </div>

        {/* Skills + Education side-by-side */}
        <div id="skills" className="max-w-6xl mx-auto px-6 mt-10">
          <section className="rounded-2xl overflow-hidden grid md:grid-cols-2">
            {/* Skills panel (lighter blue) */}
            <div className="p-8 bg-gradient-to-b from-[#e6f7ff] to-[#d6efff] border-r">
              <h2 className="text-2xl font-bold">Skills</h2>
              <p className="mt-2 text-zinc-700">Tools, techniques and areas I use frequently.</p>

              <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4">
                {SKILLS.map((s) => (
                  <div key={s.id} className="flex items-center gap-3 p-3 rounded-lg bg-sky-50 hover:scale-105 transform transition-all duration-150 cursor-default">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center bg-white shadow-sm">{s.icon}</div>
                    <div>
                      <div className="text-sm font-medium text-zinc-800">{s.name}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education & Certifications panel (darker blue) */}
            <div id="education" className="p-8 bg-gradient-to-b from-[#dbeeff] to-[#c9e6ff]">
              <h2 className="text-2xl font-bold">Education</h2>

              <div className="mt-4 space-y-4">
                {EDUCATION.map((ed) => (
                  <div key={ed.degree} className="p-4 bg-white rounded-lg shadow-sm">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="font-semibold">{ed.degree}</div>
                        <div className="text-sm text-zinc-600">{ed.subject}</div>
                      </div>
                      <div className="text-sm text-zinc-500">{ed.years}</div>
                    </div>

                    <ul className="mt-3 list-disc list-inside text-sm text-zinc-700">
                      {ed.bullets.map((b,i) => <li key={i}>{b}</li>)}
                    </ul>
                  </div>
                ))}
              </div>

              <h3 className="mt-8 text-xl font-semibold">Certifications</h3>
              <p className="text-sm text-zinc-700 mt-1">Click to view certificate (PDF).</p>

              <div className="mt-4 grid grid-cols-1 gap-3">
                {CERTIFICATIONS.map((c) => (
                  <a key={c.name} href={c.file} target="_blank" rel="noreferrer" className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm hover:shadow-md">
                    <div className="w-12 h-12 rounded-md bg-sky-50 flex items-center justify-center text-xl">📜</div>
                    <div>
                      <div className="font-medium">{c.name}</div>
                      <div className="text-sm text-zinc-500">Issued: {c.issued}</div>
                    </div>
                    <div className="ml-auto text-sm text-sky-600">View Certificate →</div>
                  </a>
                ))}
              </div>

              <h3 className="mt-8 text-xl font-semibold">Awards & Achievements</h3>
              <div className="mt-4 space-y-3">
                {ACHIEVEMENTS.map((a) => (
                  <div key={a.title} className="p-3 bg-white rounded-lg shadow-sm">
                    <div className="font-semibold">{a.title}</div>
                    <div className="text-sm text-zinc-700 mt-1">{a.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* Contact / Footer */}
        <div id="contact" className="max-w-6xl mx-auto px-6 mt-10 pb-16">
          <footer className="rounded-2xl p-8 bg-white/60 border">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <div className="font-semibold text-lg">Get in touch</div>
                <div className="text-sm text-zinc-700 mt-2">{CONTACT.name} — {CONTACT.title}</div>
                <div className="text-sm text-zinc-700 mt-1">{CONTACT.location} • <a href={`tel:${CONTACT.phone}`} className="underline">{CONTACT.phone}</a> • <a href={`mailto:${CONTACT.email}`} className="underline">{CONTACT.email}</a></div>
              </div>

              <div className="flex gap-3">
                <a href={CONTACT.linkedin} target="_blank" rel="noreferrer" className="px-3 py-2 rounded border">LinkedIn</a>
                <a href={CONTACT.resume} target="_blank" rel="noreferrer" className="px-3 py-2 rounded border">Resume (PDF)</a>
              </div>
            </div>

            <p className="mt-6 text-xs text-zinc-500">Built with ♥ — tailored for Product roles. © {new Date().getFullYear()} {CONTACT.name}</p>
          </footer>
        </div>
      </main>
    </>
  );
}
