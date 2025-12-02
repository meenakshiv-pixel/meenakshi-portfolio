// pages/index.js
import Head from 'next/head'
import React from 'react'

const CONTACT = {
  name: 'Meenakshi Verma',
  title: 'Product Owner → Product Manager',
  location: 'Sydney, Australia',
  phone: '+61 411021915',
  email: 'minakshi.kiit@gmail.com',
  linkedin: 'https://www.linkedin.com/in/mkva/',
  resume: '/Meenakshi_Resume_UPDATED.pdf'
}

const PROJECTS = [
  {
    title: 'AMP Charge Verification Journey',
    role: 'Product Owner',
    summary:
      'Uplifted 4 APIs to a new system of record and enabled fraud self-service via IVR, reducing manual reviews and improving customer experience.',
    tags: ['Fraud', 'IVR', 'APIs', 'Product Strategy'],
    link: '/projects/amp-charge-verification'
  },
  {
    title: 'Warranty Excellence Monitor',
    role: 'Business Analyst (ATCS)',
    summary:
      'Web dashboard for Mercedes-Benz warranty repairs across 29 markets & 13 languages with 6 core KPIs and drill-down charts.',
    tags: ['Analytics', 'Dashboard', 'KPI Design'],
    link: '/projects/warranty-excellence'
  },
  {
    title: 'Digital Automation & UX Improvements — Ramboll',
    role: 'Assistant Product Specialist',
    summary: 'Enhanced user engagement by 20% and automated processes saving 1200+ person-hours annually.',
    tags: ['Automation', 'UX', 'A/B Testing']
  }
]

const TIMELINE = [
  { year: '2025', title: 'Aspiring Product Manager / Transitioning to Australia', company: 'Portfolio Builder', blurb: 'Preparing for Product Manager roles in Australia — building public portfolio & case studies.', skills: ['Product Strategy', 'Portfolio Building'] },
  { year: '2022–2025', title: 'Sr. Associate Product Management / Product Owner', company: 'American Express', blurb: 'Led Credit Authorization uplift; owned AMP (Charge Verification) work for IVR & fraud; managed roadmaps and API uplifts.', skills: ['Product Roadmap', 'APIs', 'IVR', 'Stakeholder Mgmt'] },
  { year: '2021', title: 'Assistant Product Specialist', company: 'Ramboll', blurb: 'Delivered automation & UX improvements that saved manual hours and improved digital adoption.', skills: ['Automation', 'UX', 'SQL'] },
  { year: '2018–2021', title: 'Business Analyst', company: 'ATCS (Mercedes-Benz)', blurb: 'Delivered Warranty Excellence Monitor — multi-market dashboards, KPI design and stakeholder alignment.', skills: ['Analytics', 'KPI Design', 'Stakeholder Mgmt'] }
]

const SkillPill = ({ children }) => (
  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-sky-100 text-sky-800 shadow-sm">
    {children}
  </span>
)

export default function Portfolio() {
  return (
    <>
      <Head>
        <title>Meenakshi Verma — Product Portfolio</title>
        <meta name="description" content="Portfolio of Meenakshi Verma — Product Owner & aspiring Product Manager." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&display=swap" rel="stylesheet" />
        <style>{`
          html { font-family: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial; }
        `}</style>
      </Head>

      <main className="min-h-screen bg-white text-zinc-900">
        <div className="max-w-5xl mx-auto px-6">

          {/* HERO */}
          <header className="mt-8 rounded-2xl overflow-hidden bg-gradient-to-b from-sky-50 to-white border">
            {/* unified gentle gradient (replaced the old radial overlay that caused banding) */}
            <div className="px-6 md:px-10 py-8 md:py-10">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="flex-shrink-0 w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden ring-4 ring-white shadow-md">
                  <img src="/profile_new.jpg" alt="Meenakshi Verma" className="w-full h-full object-cover" />
                </div>

                <div className="flex-1">
                  <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">{CONTACT.name}</h1>
                  <p className="mt-2 text-base text-zinc-600">{CONTACT.title} • {CONTACT.location}</p>

                  <p className="mt-4 max-w-2xl text-zinc-700">I build scalable products and frictionless customer experiences — product strategy, cross-functional leadership and data-driven delivery across global markets.</p>

                  <div className="mt-5 flex flex-wrap gap-3">
                    <a href={CONTACT.resume} target="_blank" rel="noreferrer" className="inline-block px-4 py-2 bg-indigo-600 text-white rounded-md shadow-sm">Download Resume</a>
                    <a href={CONTACT.linkedin} target="_blank" rel="noreferrer" className="inline-block px-4 py-2 border rounded-md">LinkedIn</a>
                    <a href={`mailto:${CONTACT.email}`} className="inline-block px-4 py-2 border rounded-md">Email</a>
                  </div>

                  <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div>
                      <p className="text-sm text-zinc-500">Years experience</p>
                      <p className="font-semibold">8+</p>
                    </div>
                    <div>
                      <p className="text-sm text-zinc-500">Focus</p>
                      <p className="font-semibold">Product Strategy</p>
                    </div>
                    <div>
                      <p className="text-sm text-zinc-500">Strength</p>
                      <p className="font-semibold">Execution & Delivery</p>
                    </div>
                    <div>
                      <p className="text-sm text-zinc-500">Tools</p>
                      <p className="font-semibold">JIRA, Visio, Tableau</p>
                    </div>
                  </div>
                </div>
              </div>
            </div> {/* end hero inner */}
          </header>

          {/* smaller spacer — tightened so Projects appears sooner */}
          <div className="mt-6"></div>

          {/* Projects section (darker blue band background) */}
          <section id="projects" className="rounded-2xl overflow-hidden mt-6" style={{ background: 'linear-gradient(180deg,#0f172a 0%, #0b1220 100%)' }}>
            <div className="px-6 md:px-10 py-8 bg-gradient-to-b from-sky-100/40 to-transparent" style={{ backgroundBlendMode: 'overlay' }}>
              <h2 className="text-2xl font-bold text-white">Projects</h2>
              <p className="text-zinc-200 mt-1">Case studies and notable work I've led.</p>

              <div className="mt-6 grid gap-6 md:grid-cols-2">
                {PROJECTS.map((p) => (
                  <article key={p.title} className="p-6 bg-white/90 rounded-xl shadow-sm">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-lg font-semibold">{p.title}</h3>
                        <p className="mt-1 text-sm text-zinc-500"><strong>Role:</strong> {p.role}</p>
                      </div>
                      <div className="text-sm text-zinc-400">{/* optional small date/place */}</div>
                    </div>

                    <p className="mt-4 text-zinc-700">{p.summary}</p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span key={t} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-sky-100 text-sky-800 shadow-sm">
                          {t}
                        </span>
                      ))}
                    </div>

                    {p.link && (
                      <div className="mt-4">
                        <a href={p.link} className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium">View case study →</a>
                      </div>
                    )}
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* Timeline / experience section — tighter spacing and single center line */}
          <section id="work" className="mt-8">
            <h2 className="text-2xl font-bold">Work Experience</h2>
            <p className="text-sm text-zinc-500 mt-1">Most recent roles first (2025 → 2018).</p>

            <div className="relative mt-8">
              {/* center vertical line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-[2px] bg-zinc-200 opacity-60"></div>

              <div className="space-y-10">
                {TIMELINE.map((t, idx) => {
                  const isLeft = idx % 2 === 0
                  return (
                    <div key={t.year} className="relative">
                      <div className={`md:flex md:items-start ${isLeft ? 'md:flex-row-reverse' : ''} gap-6`}>
                        {/* card */}
                        <div className={`md:w-1/2 ${isLeft ? 'md:ml-auto md:text-right' : ''}`}>
                          <div className="p-6 bg-white rounded-xl shadow-sm">
                            <div className="flex items-start justify-between">
                              <div>
                                <h3 className="font-semibold text-lg">{t.title}</h3>
                                <p className="text-sm text-zinc-500 mt-1"><strong>{t.company}</strong></p>
                              </div>
                              <div className="text-sm text-zinc-400">{t.year}</div>
                            </div>

                            <p className="mt-3 text-zinc-700">{t.blurb}</p>

                            <div className="mt-3 flex flex-wrap gap-2">
                              {t.skills.map((s) => (
                                <span key={s} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-sky-100 text-sky-800 shadow-sm">
                                  {s}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* spacer that sits at center */}
                        <div className="hidden md:block w-0 md:w-8"></div>
                      </div>

                      {/* small center marker */}
                      <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3 w-8 h-8 rounded-full bg-white border-2 border-indigo-200 flex items-center justify-center z-10">
                        <div className="w-3 h-3 rounded-full bg-indigo-500"></div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>

          {/* Skills & Education (skills use colored tiles as requested) */}
          <section id="skills" className="mt-10">
            <h2 className="text-2xl font-bold">Skills</h2>
            <p className="text-sm text-zinc-500 mt-1">Key skills I use day-to-day.</p>

            <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg bg-sky-50 shadow-sm flex items-center gap-3">
                <div className="w-8 h-8 rounded-md bg-sky-200 flex items-center justify-center text-sky-800 font-semibold">DB</div>
                <div>
                  <div className="font-semibold">MySQL</div>
                  <div className="text-sm text-zinc-500">Data modelling & queries</div>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-sky-50 shadow-sm flex items-center gap-3">
                <div className="w-8 h-8 rounded-md bg-sky-200 flex items-center justify-center text-sky-800 font-semibold">J</div>
                <div>
                  <div className="font-semibold">JIRA</div>
                  <div className="text-sm text-zinc-500">Issue & release tracking</div>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-sky-50 shadow-sm flex items-center gap-3">
                <div className="w-8 h-8 rounded-md bg-sky-200 flex items-center justify-center text-sky-800 font-semibold">EX</div>
                <div>
                  <div className="font-semibold">Microsoft Office</div>
                  <div className="text-sm text-zinc-500">Excel, PowerPoint, Word</div>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-sky-50 shadow-sm flex items-center gap-3">
                <div className="w-8 h-8 rounded-md bg-sky-200 flex items-center justify-center text-sky-800 font-semibold">PM</div>
                <div>
                  <div className="font-semibold">Product Roadmap</div>
                  <div className="text-sm text-zinc-500">Strategy & prioritisation</div>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-sky-50 shadow-sm flex items-center gap-3">
                <div className="w-8 h-8 rounded-md bg-sky-200 flex items-center justify-center text-sky-800 font-semibold">SAFe</div>
                <div>
                  <div className="font-semibold">SAFe</div>
                  <div className="text-sm text-zinc-500">Scaled Agile practices</div>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-sky-50 shadow-sm flex items-center gap-3">
                <div className="w-8 h-8 rounded-md bg-sky-200 flex items-center justify-center text-sky-800 font-semibold">AN</div>
                <div>
                  <div className="font-semibold">Data & Analytics</div>
                  <div className="text-sm text-zinc-500">KPI design & dashboards</div>
                </div>
              </div>
            </div>
          </section>

          {/* Education below skills as requested */}
          <section id="education" className="mt-10">
            <h2 className="text-2xl font-bold">Education & Certifications</h2>
            <ul className="mt-4 list-disc list-inside text-zinc-700">
              <li>M.Tech — IIT Roorkee (Alternate Hydro Energy Systems)</li>
              <li>B.Tech — KIIT Bhubaneswar (Civil Engineering)</li>
              <li>Safe® Product Owner/Product Manager (POPM)</li>
              <li>Certified Scrum Master (CSM)</li>
              <li>Harvard Leadership Edge</li>
            </ul>
          </section>

          {/* footer */}
          <footer className="mt-12 py-8 text-center text-sm text-zinc-500">
            Built with ♥ — tailored for Product roles. © {new Date().getFullYear()} {CONTACT.name}
          </footer>
        </div>
      </main>
    </>
  )
}
