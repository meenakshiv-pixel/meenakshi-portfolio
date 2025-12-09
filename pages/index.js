// pages/index.js
import Head from "next/head";
import React, { useEffect, useState } from "react";

const CONTACT = {
  name: "Meenakshi Verma",
  title: "Product Owner → Product Manager",
  location: "Sydney, Australia",
  phone: "+61 411021915",
  email: "minakshi.kiit@gmail.com",
  linkedin: "https://www.linkedin.com/in/mkva/",
  resume: "/Meenakshi_Resume_UPDATED.pdf", // ensure this file is in /public
};

const PROJECTS = [
  {
    title: "AMP Charge Verification Journey",
    role: "Product Owner",
    summary:
      "Uplifted 4 APIs to a new system of record and enabled fraud self-service via IVR, reducing manual reviews and improving customer experience.",
    tags: ["Fraud", "APIs", "IVR", "Product Strategy"],
    link: "/projects/amp-charge-verification",
  },
  {
    title: "Warranty Excellence Monitor",
    role: "Business Analyst (ATCS)",
    summary:
      "Web dashboard for Mercedes-Benz warranty repairs across 29 markets & 13 languages. Included 6 core KPIs, drill-down charts and multilingual support.",
    tags: ["Analytics", "Dashboard", "KPI Design", "Stakeholder Mgmt"],
    link: "/projects/warranty-excellence",
  },
  {
    title: "Digital Automation & UX Improvements — Ramboll",
    role: "Assistant Product Specialist",
    summary:
      "Delivered automation and UX improvements that increased digital adoption and saved ~1200 person-hours annually.",
    tags: ["Automation", "UX", "SQL", "A/B Testing"],
    link: "/projects/ramboll-automation",
  },
];

const TIMELINE = [
  {
    yearRange: "2025",
    company: "Portfolio Builder",
    title: "Aspiring Product Manager / Transitioning to Australia",
    roleShort: "Portfolio Builder",
    desc:
      "Preparing for Product Manager roles in Australia — building public portfolio, case studies and strengthening product & data skills.",
    skills: ["Product Strategy", "Portfolio Building", "MySQL"],
  },
  {
    yearRange: "2022 — 2025",
    company: "American Express",
    title: "Sr. Associate Product Management / Product Owner",
    roleShort: "Product Owner",
    desc:
      "Led Credit Authorization uplift; owned AMP (Charge Verification) work for IVR & fraud; managed roadmaps, API uplifts and cross-functional delivery across regions.",
    skills: ["Product Roadmap", "APIs", "IVR", "Stakeholder Mgmt", "JIRA"],
  },
  {
    yearRange: "2021",
    company: "Ramboll",
    title: "Assistant Product Specialist",
    roleShort: "Assistant Product Specialist",
    desc:
      "Delivered automation and UX improvements that saved manual hours and increased adoption of digital tools.",
    skills: ["Automation", "UX", "SQL"],
  },
  {
    yearRange: "2018 — 2021",
    company: "ATCS Inc",
    title: "Business Analyst — Warranty Excellence Monitor",
    roleShort: "Business Analyst",
    desc:
      "Built a web-based dashboard for Mercedes-Benz warranty repairs across 29 markets & 13 languages; defined KPIs and improved reporting cadence.",
    skills: ["Analytics", "KPI Design", "Stakeholder Mgmt"],
  },
];

const SKILLS = [
  { id: "product-roadmap", name: "Product Roadmap", icon: "📈" },
  { id: "product-portfolio", name: "Product Portfolio Management", icon: "📁" },
  { id: "mysql", name: "MySQL", icon: "🛢" },
  { id: "jira", name: "JIRA", icon: "🧭" },
  { id: "safe", name: "SAFe", icon: "🧩" },
  { id: "agile", name: "Agile & Scrum", icon: "⚡️" },
  { id: "ux", name: "UX/UI Collaboration", icon: "🎨" },
  { id: "data-analytics", name: "Data & Analytics", icon: "📊" },
  { id: "sql", name: "SQL (Basics)", icon: "🗄" },
  { id: "wireframing", name: "Wireframing", icon: "🧱" },
  { id: "ms-office", name: "Microsoft Office Suite", icon: "📎" },
  { id: "prioritization", name: "Prioritization", icon: "🎯" },
  { id: "api-product", name: "API Product Management", icon: "🔗" },
  { id: "user-research", name: "User Research", icon: "🔎" },
];

function TopNav() {
  // small nav that uses anchors (smooth scroll)
  return (
    <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="font-semibold">Meenakshi Verma</div>
          <div className="text-sm text-zinc-500 hidden md:block">— Product Owner → Product Manager</div>
        </div>

        <div className="flex items-center gap-4 text-sm">
          {[
            ["About", "#about"],
            ["Projects", "#projects"],
            ["Work Experience", "#work"],
            ["Skills", "#skills"],
            ["Education", "#education"],
            ["Contact", "#contact"],
          ].map(([label, href]) => (
            <a key={href} href={href} className="px-3 py-1 rounded-md hover:bg-indigo-50">
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default function Portfolio() {
  // optional fade for hero
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setReady(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <Head>
        <title>Meenakshi Verma — Product Portfolio</title>
        <meta name="description" content="Portfolio of Meenakshi Verma — Product Owner & aspiring Product Manager." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&display=swap" rel="stylesheet" />
        <style>{`html { scroll-behavior: smooth; font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial; }`}</style>
      </Head>

      <TopNav />

      <main className="min-h-screen bg-zinc-50 text-zinc-900">
        <section id="about" className="pt-10 pb-16 bg-gradient-to-b from-sky-50 via-sky-50 to-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="rounded-2xl bg-white shadow-lg p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
              {/* profile */}
              <div className="flex-shrink-0">
                <img
                  src="/profile.jpg"
                  alt="Meenakshi Verma"
                  onError={(e) => {
                    // fallback to png or hide
                    e.currentTarget.src = "/profile.png";
                  }}
                  className="w-36 h-36 rounded-full object-cover border-4 border-white shadow-md"
                />
              </div>

              <div className="flex-1">
                <h1 className="text-3xl md:text-4xl font-extrabold">{CONTACT.name}</h1>
                <p className="mt-2 text-zinc-600">{CONTACT.title} • {CONTACT.location}</p>

                <p className="mt-4 text-zinc-700 max-w-3xl">
                  I build scalable products and frictionless customer experiences — product strategy, cross-functional leadership and data-driven delivery across global markets.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a href={CONTACT.resume} target="_blank" rel="noreferrer" className="inline-block px-4 py-2 bg-indigo-600 text-white rounded-lg shadow">Download Resume</a>
                  <a href={CONTACT.linkedin} target="_blank" rel="noreferrer" className="inline-block px-4 py-2 border rounded-lg">LinkedIn</a>
                  <a href={`mailto:${CONTACT.email}`} className="inline-block px-4 py-2 border rounded-lg">Email</a>
                </div>

                <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm text-zinc-600">
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
          </div>
        </section>

        {/* Projects (dark blue shade) */}
        <section id="projects" className="pt-16 pb-16 bg-gradient-to-b from-sky-900 to-sky-800 text-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="rounded-2xl p-8 md:p-12 bg-gradient-to-tr from-sky-900/90 to-sky-800/90 shadow-lg">
              <h2 className="text-2xl font-bold text-white">Projects</h2>
              <p className="text-sky-200 mt-2">Case studies and notable work I’ve led.</p>

              <div className="mt-6 grid gap-6 md:grid-cols-2">
                {PROJECTS.map((p) => (
                  <article key={p.title} className="bg-white/6 border border-white/10 rounded-2xl p-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                        <p className="text-sm text-sky-200 mt-1"><strong>Role:</strong> {p.role}</p>
                      </div>
                      <div className="text-sky-200 text-sm">{/* small date/placeholder */}</div>
                    </div>

                    <p className="mt-4 text-sky-100">{p.summary}</p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span key={t} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-700/40 text-xs text-white">
                          <span className="w-2 h-2 rounded-full bg-sky-300/60" /> {t}
                        </span>
                      ))}
                    </div>

                    <div className="mt-4">
                      <a href={p.link} className="text-sky-200 text-sm font-medium">View case study →</a>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Work experience / timeline (lighter blue background) */}
        <section id="work" className="pt-16 pb-16 bg-sky-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl font-bold">Work Experience</h2>
            <p className="text-zinc-600 mt-2">Most recent roles first (2025 → 2018). Click cards on small screens to read quickly.</p>

            <div className="mt-12 relative">
              {/* vertical center line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-px bg-zinc-200" aria-hidden />

              <div className="space-y-16">
                {TIMELINE.map((item, idx) => {
                  const isLeft = idx % 2 === 1; // alternate: idx 0 -> right, 1 -> left etc (so newest on top appears right)
                  return (
                    <div key={item.title} className="relative">
                      {/* year badge at center line */}
                      <div className="absolute left-1/2 -translate-x-1/2 -top-3">
                        <div className="bg-white rounded-full p-1.5 border-2 border-sky-200 shadow-sm">
                          <div className="w-3 h-3 rounded-full bg-sky-500" />
                        </div>
                      </div>

                      <div
                        className={`md:w-1/2 md:absolute md:top-0 ${
                          isLeft ? "md:left-0 md:pr-8" : "md:right-0 md:pl-8"
                        }`}
                      >
                        <div className="bg-white rounded-2xl p-6 shadow">
                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <h4 className="font-semibold text-lg">{item.title}</h4>
                              <div className="text-sm text-zinc-500 mt-1">{item.company} — <span className="font-medium">{item.roleShort}</span></div>
                            </div>
                            <div className="text-sm text-zinc-400">{item.yearRange}</div>
                          </div>

                          <p className="mt-3 text-zinc-700">{item.desc}</p>

                          <div className="mt-4 flex flex-wrap gap-2">
                            {item.skills.map((s) => (
                              <span key={s} className="inline-flex items-center px-3 py-1 rounded-full bg-sky-100 text-xs text-sky-800">{s}</span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* spacer for small screens */}
                      <div className="md:hidden mt-6">
                        {/* small-screen stacked card */}
                        <div className="bg-white rounded-2xl p-6 shadow">
                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <h4 className="font-semibold text-lg">{item.title}</h4>
                              <div className="text-sm text-zinc-500 mt-1">{item.company} — <span className="font-medium">{item.roleShort}</span></div>
                            </div>
                            <div className="text-sm text-zinc-400">{item.yearRange}</div>
                          </div>
                          <p className="mt-3 text-zinc-700">{item.desc}</p>
                          <div className="mt-4 flex flex-wrap gap-2">
                            {item.skills.map((s) => (
                              <span key={s} className="inline-flex items-center px-3 py-1 rounded-full bg-sky-100 text-xs text-sky-800">{s}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Skills + Education + Certs stacked (each full width) */}
        <section id="skills" className="pt-16 pb-16 bg-gradient-to-b from-sky-50 to-white">
          <div className="max-w-6xl mx-auto px-6">
            {/* Skills block (full width) */}
            <div className="rounded-2xl bg-white shadow-md p-8">
              <h2 className="text-2xl font-bold">Skills</h2>
              <p className="text-zinc-600 mt-2">Tools, techniques and areas I use frequently.</p>

              <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {SKILLS.map((s) => (
                  <div
                    key={s.id}
                    className="flex items-center gap-3 p-3 rounded-lg bg-sky-50 hover:shadow-md transform hover:-translate-y-1 transition"
                    title={s.name}
                  >
                    <div className="text-2xl">{s.icon}</div>
                    <div className="text-sm font-medium">{s.name}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education & Certifications */}
            <div id="education" className="mt-10 space-y-6">
              <div className="rounded-2xl bg-white p-6 shadow-md">
                <h2 className="text-2xl font-bold">Education</h2>

                <div className="mt-4 space-y-4">
                  <div className="bg-sky-50 rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="font-semibold">M.Tech — IIT Roorkee</div>
                        <div className="text-sm text-zinc-500">Alternate Hydro Energy Systems</div>
                      </div>
                      <div className="text-sm text-zinc-400">2016–2018</div>
                    </div>
                    <ul className="mt-3 list-disc list-inside text-sm text-zinc-700">
                      <li>Graduate coursework in data analysis, energy systems modelling</li>
                      <li>Member of Placement Cell</li>
                      <li>Dissertation: GIS Integrated Hydropower Assessment</li>
                    </ul>
                  </div>

                  <div className="bg-sky-50 rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="font-semibold">B.Tech — KIIT University, Bhubaneswar</div>
                        <div className="text-sm text-zinc-500">Civil Engineering</div>
                      </div>
                      <div className="text-sm text-zinc-400">2010–2014</div>
                    </div>
                    <ul className="mt-3 list-disc list-inside text-sm text-zinc-700">
                      <li>Project: Hydrated Lime for Modification of Bituminous Binder</li>
                      <li>Active Member: National Service Scheme (2014)</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Certifications & Achievements */}
              <div className="rounded-2xl bg-white p-6 shadow-md">
                <h2 className="text-2xl font-bold">Certifications</h2>
                <p className="text-zinc-600 mt-2">Click to view certificate (PDF/image).</p>

                <div className="mt-4 space-y-3">
                  <a className="flex items-center justify-between p-4 rounded-lg bg-sky-50" href="/certs/CSM.pdf" target="_blank" rel="noreferrer">
                    <div>
                      <div className="font-semibold">Certified Scrum Master (CSM) — Scrum Alliance</div>
                      <div className="text-sm text-zinc-500">Issued: 2020</div>
                    </div>
                    <div className="text-indigo-600">View Certificate →</div>
                  </a>

                  <a className="flex items-center justify-between p-4 rounded-lg bg-sky-50" href="/certs/POPM.jpeg" target="_blank" rel="noreferrer">
                    <div>
                      <div className="font-semibold">SAFe® Product Owner/Product Manager (POPM)</div>
                      <div className="text-sm text-zinc-500">Issued: Jan 2024</div>
                    </div>
                    <div className="text-indigo-600">View Certificate →</div>
                  </a>

                  <a className="flex items-center justify-between p-4 rounded-lg bg-sky-50" href="/certs/Harvard_Leadership.jpeg" target="_blank" rel="noreferrer">
                    <div>
                      <div className="font-semibold">Harvard Leadership Edge</div>
                      <div className="text-sm text-zinc-500">Issued: Oct 2023</div>
                    </div>
                    <div className="text-indigo-600">View Certificate →</div>
                  </a>
                </div>

                <h3 className="mt-6 text-lg font-semibold">Awards & Achievements</h3>
                <ul className="mt-3 list-disc list-inside text-sm text-zinc-700">
                  <li>🏆 Best of the Best Award — ATCS (2019) — For delivering the Warranty Excellence Dashboard across markets.</li>
                  <li>⭐ Star of the Month — ATCS (multiple) — For stakeholder coordination & releases.</li>
                  <li>🌟 Sprint Leadership Recognition — American Express — For leading cross-functional API uplift delivery (96% feature completion).</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT / FOOTER */}
        <footer id="contact" className="pt-12 pb-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="rounded-2xl bg-sky-50 p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-semibold">Get in touch</h3>
                <p className="text-zinc-700 mt-2">{CONTACT.name} — {CONTACT.title}</p>
                <p className="text-zinc-700 mt-1">{CONTACT.location} • <a className="underline" href={`tel:${CONTACT.phone}`}>{CONTACT.phone}</a> • <a className="underline" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></p>
              </div>

              <div className="flex items-center gap-4">
                <a href={CONTACT.linkedin} target="_blank" rel="noreferrer" className="px-4 py-2 border rounded-md">LinkedIn</a>
                <a href={CONTACT.resume} target="_blank" rel="noreferrer" className="px-4 py-2 border rounded-md">Resume (PDF)</a>
              </div>
            </div>

            <p className="mt-6 text-xs text-zinc-500">Built with ♥ — tailored for Product roles. © {new Date().getFullYear()} {CONTACT.name}</p>
          </div>
        </footer>
      </main>
    </>
  );
}
