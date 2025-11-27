// pages/index.js
import Head from 'next/head';
import React from 'react';

const CONTACT = {
  name: 'Meenakshi Verma',
  title: 'Product Owner → Product Manager',
  location: 'Sydney, Australia',
  phone: '+61 411021915',
  email: 'minakshi.kiit@gmail.com',
  linkedin: 'https://www.linkedin.com/in/mkva/',
  resume: '/Meenakshi_Resume_UPDATED.pdf'
};

// TIMELINE: one role per company (Option B style - AMEX combined)
const TIMELINE = [
  {
    date: '2025',
    company: 'Transition to Australia / Portfolio Building',
    role: 'Aspiring Product Manager / Portfolio Builder',
    summary:
      'Preparing for Product Manager roles in Australia — building public portfolio, case studies and strengthening data & product skills.',
    skills: ['Product Strategy', 'Portfolio Building', 'MySQL', 'Data Analysis'],
  },

  {
    date: '2022 – 2025',
    company: 'American Express',
    role: 'Sr. Associate Product Management / Product Owner',
    summary:
      'Led Credit Authorization Systems uplift; owned AMP (Charge Verification) work for IVR & fraud; managed roadmaps, API uplifts and cross-functional delivery across regions.',
    skills: ['Product Roadmap', 'APIs', 'IVR', 'Fraud', 'Stakeholder Mgmt', 'JIRA'],
  },

  {
    date: 'May 2021 – Jul 2022',
    company: 'Ramboll',
    role: 'Assistant Product Specialist',
    summary:
      'Delivered digital automation and UX improvements that increased adoption and removed manual work — saving significant person-hours annually.',
    skills: ['Automation', 'UX Improvements', 'Process Optimization'],
  },

  {
    date: '2018 – 2020',
    company: 'ATCS Inc (Mercedes-Benz)',
    role: 'Business Analyst → Senior Business Analyst',
    summary:
      'Led requirements & KPI design for the Warranty Excellence Monitor (multi-market warranty dashboard). Managed stakeholder interviews, user stories and UAT across multiple markets.',
    skills: ['Requirements Gathering', 'KPI Design', 'Dashboard', 'Stakeholder Mgmt', 'SQL'],
  }
];

const PROJECTS = [
  {
    title: 'AMP Charge Verification Journey',
    role: 'Product Owner',
    summary:
      'Authorizations Modernization Program (AMP) — uplifted high-risk fraud & credit journeys in IVR across US & International markets; enabled fraud self-service via IVR and API uplifts.',
    tags: ['Fraud', 'IVR', 'APIs', 'Product Strategy'],
    link: '/projects/amp-charge-verification'
  },
  {
    title: 'Warranty Excellence Monitor',
    role: 'Business Analyst (ATCS)',
    summary:
      'Web-based dashboard for Mercedes-Benz warranty repairs across 29 markets & 13 languages. Included 6 core KPIs, drill-down charts and multilingual support to drive faster decisions.',
    tags: ['Analytics', 'Dashboard', 'KPI Design'],
    link: '/projects/warranty-excellence'
  },
  {
    title: 'Digital Automation & UX Improvements — Ramboll',
    role: 'Assistant Product Specialist',
    summary:
      'Automation and UX improvements which improved tool usage and reduced manual workload.',
    tags: ['Automation', 'UX', 'Process']
  }
];

const SkillPill = ({ children }) => (
  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border border-gray-200 dark:border-zinc-700 bg-white/60">
    {children}
  </span>
);

export default function Portfolio() {
  return (
    <>
      <Head>
        <title>Meenakshi Verma — Product Portfolio</title>
        <meta name="description" content="Portfolio of Meenakshi Verma — Product Owner & aspiring Product Manager." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&display=swap" rel="stylesheet" />
        <style>{`html{font-family:Inter,ui-sans-serif,system-ui,-apple-system,'Segoe UI',Roboto,'Helvetica Neue',Arial;}`}</style>
      </Head>

      <main className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6 py-14">

          {/* HERO */}
          <header className="relative overflow-hidden rounded-3xl p-8 md:p-12 bg-gradient-to-br from-indigo-50 to-white dark:from-zinc-900 dark:to-zinc-950 shadow-md">
            <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(ellipse_at_top_left,var(--tw-gradient-stops))] from-indigo-300 via-purple-300 to-transparent" />

            <div className="relative flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10">
              <div className="flex-shrink-0">
                <img src="/profile.jpg" alt="Profile Photo" className="w-36 h-36 rounded-full object-cover shadow-lg border-4 border-white dark:border-zinc-900" />
              </div>

              <div className="flex-1">
                <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">{CONTACT.name}</h1>
                <p className="mt-2 text-lg text-zinc-600 dark:text-zinc-300">{CONTACT.title} • {CONTACT.location}</p>

                <p className="mt-4 max-w-2xl leading-relaxed text-zinc-700 dark:text-zinc-300">
                  I build scalable products and frictionless customer experiences. I specialise in product strategy, cross-functional leadership and data-driven decisions that deliver measurable outcomes across global markets.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a href={CONTACT.resume} target="_blank" rel="noreferrer" className="px-4 py-2 bg-indigo-600 text-white rounded-lg shadow hover:opacity-95">Download Resume</a>
                  <a href={CONTACT.linkedin} target="_blank" rel="noreferrer" className="px-4 py-2 border rounded-lg hover:bg-zinc-50">LinkedIn</a>
                  <a href={`mailto:${CONTACT.email}`} className="px-4 py-2 border rounded-lg hover:bg-zinc-50">Email</a>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
                  <div><p className="text-sm text-zinc-500">Years experience</p><p className="font-semibold">8+</p></div>
                  <div><p className="text-sm text-zinc-500">Focus</p><p className="font-semibold">Product Strategy</p></div>
                  <div><p className="text-sm text-zinc-500">Strength</p><p className="font-semibold">Execution & Delivery</p></div>
                  <div><p className="text-sm text-zinc-500">Tools</p><p className="font-semibold">JIRA, Visio, Tableau</p></div>
                </div>
              </div>
            </div>
          </header>

          {/* PROJECTS */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold">Selected Projects</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {PROJECTS.map((p) => (
                <article key={p.title} className="p-6 bg-white/80 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-2xl shadow-sm hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200">
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <p className="mt-1 text-sm text-zinc-500"><strong>Role:</strong> {p.role}</p>

                  <p className="mt-4 text-zinc-700 dark:text-zinc-200">{p.summary}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200">{t}</span>
                    ))}
                  </div>

                  {p.link && (
                    <a href={p.link} className="mt-4 inline-flex text-sm font-medium text-indigo-600 hover:text-indigo-700">View case study →</a>
                  )}
                </article>
              ))}
            </div>
          </section>

          {/* CAREER TIMELINE */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold">Work Experience</h2>
            <p className="mt-2 text-sm text-zinc-500">Most recent roles first (2025 → 2018). Click cards on small screens to read quickly.</p>

            <div className="relative mt-10">
              {/* center vertical line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 top-6 bottom-0 w-px bg-zinc-200 dark:bg-zinc-800" />

              <div className="space-y-12">
                {TIMELINE.map((item, idx) => {
                  const isRight = idx % 2 === 0; // alternate placement
                  return (
                    <div key={item.company} className="relative">
                      <div className="md:grid md:grid-cols-3 md:items-start gap-4">
                        {/* left side (when isRight=false this will show card on left) */}
                        <div className={`md:col-span-1 ${isRight ? 'md:order-1 md:pr-6' : 'md:order-3 md:pr-6'}`}>
                          <div className={`hidden md:block ${isRight ? 'text-right' : ''}`}>
                            <div className="inline-block">
                              <div className="rounded-2xl border border-zinc-100 dark:border-zinc-800 bg-white/90 dark:bg-zinc-900/80 p-5 shadow-lg max-w-md">
                                <div className="flex items-baseline justify-between">
                                  <h4 className="font-semibold text-lg">{item.role}</h4>
                                  <span className="text-xs text-zinc-500">{item.date}</span>
                                </div>
                                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300"><strong>{item.company}</strong> — {item.summary}</p>
                                <div className="mt-3 flex flex-wrap gap-2">
                                  {item.skills.map((s) => (
                                    <span key={s} className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200">{s}</span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* center column - year badge + dot */}
                        <div className="md:col-span-1 flex flex-col items-center">
                          <div className="relative flex flex-col items-center">
                            {/* year badge */}
                            <div className="z-20 mb-2">
                              <span className="inline-block text-xs font-medium px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200">{item.date}</span>
                            </div>

                            {/* dot (fixed small clean style) */}
                            <div className="z-20">
                              <div className="w-4 h-4 rounded-full bg-white dark:bg-zinc-900 border-2 border-indigo-600 dark:border-indigo-500 shadow-sm" />
                            </div>
                          </div>
                        </div>

                        {/* right side (when isRight=true this will show card on right) */}
                        <div className={`md:col-span-1 ${isRight ? 'md:order-3 md:pl-6' : 'md:order-1 md:pl-6'}`}>
                          <div className={`hidden md:block ${isRight ? '' : ''}`}>
                            <div className="inline-block">
                              <div className="rounded-2xl border border-zinc-100 dark:border-zinc-800 bg-white/90 dark:bg-zinc-900/80 p-5 shadow-lg max-w-md">
                                <div className="flex items-baseline justify-between">
                                  <h4 className="font-semibold text-lg">{item.role}</h4>
                                  <span className="text-xs text-zinc-500">{item.date}</span>
                                </div>
                                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300"><strong>{item.company}</strong> — {item.summary}</p>
                                <div className="mt-3 flex flex-wrap gap-2">
                                  {item.skills.map((s) => (
                                    <span key={s} className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200">{s}</span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* mobile stacked card - shown under center column */}
                        <div className="md:hidden mt-6">
                          <div className="rounded-2xl border border-zinc-100 dark:border-zinc-800 bg-white/90 dark:bg-zinc-900/80 p-4 shadow-sm">
                            <div className="flex items-baseline justify-between">
                              <h4 className="font-semibold">{item.role}</h4>
                              <span className="text-xs text-zinc-500">{item.date}</span>
                            </div>
                            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300"><strong>{item.company}</strong> — {item.summary}</p>
                            <div className="mt-3 flex flex-wrap gap-2">
                              {item.skills.map((s) => (
                                <span key={s} className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200">{s}</span>
                              ))}
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* SKILLS */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold">Skills</h2>
            <p className="mt-2 text-sm text-zinc-500">Product, delivery, analytics and tools I regularly use.</p>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">Product & Strategy</p>
                <div className="mt-3 flex flex-col gap-2">
                  <SkillPill>Product Roadmap</SkillPill>
                  <SkillPill>Product Strategy</SkillPill>
                  <SkillPill>Product Portfolio Management</SkillPill>
                  <SkillPill>Stakeholder Management</SkillPill>
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">Methods & Delivery</p>
                <div className="mt-3 flex flex-col gap-2">
                  <SkillPill>Agile & Scrum</SkillPill>
                  <SkillPill>SAFe</SkillPill>
                  <SkillPill>Wireframing</SkillPill>
                  <SkillPill>UX Collaboration</SkillPill>
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">Data & Tools</p>
                <div className="mt-3 flex flex-col gap-2">
                  <SkillPill>MySQL</SkillPill>
                  <SkillPill>Tableau</SkillPill>
                  <SkillPill>Microsoft Office Suite</SkillPill>
                  <SkillPill>JIRA</SkillPill>
                  <SkillPill>Visio</SkillPill>
                </div>
              </div>
            </div>
          </section>

          {/* EDUCATION & CERTIFICATIONS */}
          <section className="mt-10">
            <h2 className="text-2xl font-bold">Education & Certifications</h2>
            <ul className="mt-4 list-disc list-inside text-zinc-700 dark:text-zinc-300">
              <li>M.Tech — IIT Roorkee (Alternate Hydro Energy Systems)</li>
              <li>B.Tech — KIIT Bhubaneswar (Civil Engineering)</li>
              <li>Safe® Product Owner/Product Manager (POPM)</li>
              <li>Certified Scrum Master (CSM)</li>
              <li>Harvard Leadership Edge</li>
            </ul>
          </section>

          {/* FOOTER */}
          <footer className="mt-12 border-t pt-8">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <h3 className="text-lg font-semibold">Get in touch</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">{CONTACT.name} — {CONTACT.title}</p>
                <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">{CONTACT.location} • <a href={`tel:${CONTACT.phone}`} className="underline">{CONTACT.phone}</a> • <a href={`mailto:${CONTACT.email}`} className="underline">{CONTACT.email}</a></p>
              </div>

              <div className="flex items-center gap-4">
                <a href={CONTACT.linkedin} target="_blank" rel="noreferrer" className="text-sm border px-3 py-2 rounded">LinkedIn</a>
                <a href={CONTACT.resume} target="_blank" rel="noreferrer" className="text-sm border px-3 py-2 rounded">Resume (PDF)</a>
              </div>
            </div>

            <p className="mt-6 text-xs text-zinc-500">Built with ♥ — tailored for Product roles. © {new Date().getFullYear()} {CONTACT.name}</p>
          </footer>

        </div>
      </main>
    </>
  );
}
