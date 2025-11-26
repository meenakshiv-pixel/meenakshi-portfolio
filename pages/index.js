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
  resume: '/Meenakshi_Resume_UPDATED.pdf',
};

/**
 * Timeline: chronological experiences starting 2018 -> 2025
 * Each entry: date, company, role, summary (one-liner), skills (array)
 */
const TIMELINE = [
  {
    date: 'Jul 2018',
    company: 'ATCS Inc (Mercedes-Benz)',
    role: 'Business Analyst',
    summary:
      'Owned warranty analytics and reporting — translated market needs to dashboard requirements and KPI definitions.',
    skills: ['Requirements Gathering', 'KPI Design', 'Stakeholder Mgmt', 'SQL', 'Excel'],
  },
  {
    date: '2019',
    company: 'ATCS Inc (Mercedes-Benz)',
    role: 'Business Analyst — Continued',
    summary:
      'Led multi-market rollouts of the warranty reporting tool and standardized KPI definitions across 29 markets.',
    skills: ['Dashboard Design', 'Data Validation', 'UAT', 'Communication'],
  },
  {
    date: '2020',
    company: 'ATCS Inc (Mercedes-Benz)',
    role: 'Senior Business Analyst',
    summary:
      'Improved warranty cost visibility, introduced drill-down charts and enabled faster investigations for stakeholders.',
    skills: ['Analytics', 'Data Visualisation', 'Stakeholder Training'],
  },
  {
    date: 'May 2021',
    company: 'Ramboll',
    role: 'Assistant Product Specialist',
    summary:
      'Delivered automation and UX improvements to increase tool adoption and save manual hours across teams.',
    skills: ['Automation', 'UX Improvements', 'Process Optimization', 'Change Mgmt'],
  },
  {
    date: 'Jul 2022',
    company: 'American Express',
    role: 'Sr. Associate — Product Management',
    summary:
      'Owned Credit Authorization Systems uplift and collaborated with >20 cross-functional teams for delivery.',
    skills: ['Product Roadmap', 'Agile', 'JIRA', 'Stakeholder Management'],
  },
  {
    date: '2023',
    company: 'American Express',
    role: 'Product Owner — AMP (Charge Verification)',
    summary:
      'Led AMP Charge Verification journey — uplifted APIs and enabled IVR self-service for fraud verification.',
    skills: ['Fraud', 'IVR', 'API Integration', 'Product Ownership'],
  },
  {
    date: '2024',
    company: 'American Express',
    role: 'Product Owner / Workflow Improvements',
    summary:
      'Owned product workflow improvements, wireframes and strengthened UX collaboration across teams.',
    skills: ['UX Collaboration', 'Wireframing', 'Delivery'],
  },
  {
    date: '2025',
    company: 'Transition to Australia / Portfolio Building',
    role: 'Product Manager (aspiring)',
    summary:
      'Preparing for Product Manager roles in Australia — building portfolio, case studies and strengthening data skills.',
    skills: ['Product Strategy', 'Portfolio Building', 'MySQL', 'Data Analysis'],
  },
];

const PROJECTS = [
  {
    title: 'AMP Charge Verification Journey',
    role: 'Product Owner',
    summary:
      'Product Owner for the Authorizations Modernization Program (AMP). Led uplift of high-risk fraud and credit journeys in the IVR channel across US & International markets.',
    tags: ['Fraud & Credit', 'IVR Servicing', 'APIs', 'Product Strategy'],
    link: '/projects/amp-charge-verification',
  },
  {
    title: 'Warranty Excellence Monitor',
    role: 'Business Analyst (ATCS)',
    summary:
      'Web dashboard for Mercedes-Benz warranty repairs across 29 markets and 13 languages. Core KPIs and drill-downs for operations and leadership.',
    tags: ['Analytics', 'Dashboard', 'Mercedes-Benz', 'Warranty'],
    link: '/projects/warranty-excellence',
  },
  {
    title: 'Digital Automation & UX Improvements — Ramboll',
    role: 'Assistant Product Specialist',
    summary:
      'Enhanced engagement and automated processes saving 1200+ person-hours annually.',
    tags: ['Automation', 'UX', 'Process'],
  },
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
        <meta
          name="description"
          content="Portfolio of Meenakshi Verma — Product Owner & aspiring Product Manager."
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&display=swap"
          rel="stylesheet"
        />
        <style>{`
          html { font-family: Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; }
        `}</style>
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
                  I build scalable products and frictionless customer experiences — focusing on product strategy, stakeholder collaboration and data-driven delivery across global markets.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a href={CONTACT.resume} className="px-4 py-2 bg-indigo-600 text-white rounded-lg shadow hover:opacity-95" target="_blank" rel="noreferrer">Download Resume</a>
                  <a href={CONTACT.linkedin} className="px-4 py-2 border rounded-lg hover:bg-zinc-50" target="_blank" rel="noreferrer">LinkedIn</a>
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

          {/* CAREER TIMELINE — centered vertical line, alternating cards */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold">Career Timeline</h2>
            <p className="mt-2 text-sm text-zinc-500">My professional journey from 2018 — 2025. Click items to learn the role and skills I used.</p>

            <div className="relative mt-10">
              {/* center vertical line (hidden on very small screens) */}
              <div className="absolute inset-x-0 flex justify-center pointer-events-none" aria-hidden>
                <div className="w-px h-full bg-gradient-to-b from-indigo-300 to-indigo-600 opacity-40" />
              </div>

              <div className="space-y-10">
                {TIMELINE.map((item, idx) => {
                  const isLeft = idx % 2 === 0;
                  return (
                    <div key={item.date} className="relative">
                      <div className="md:grid md:grid-cols-2 md:items-center">
                        {/* Left column (content on left when isLeft) */}
                        <div className={`md:pr-8 md:col-span-1 ${isLeft ? 'md:text-right' : 'md:order-2'}`}>
                          <div className={`inline-block md:max-w-md ${isLeft ? '' : 'md:ml-auto'}`}>
                            {/* show card only on left when isLeft, otherwise hidden on md */}
                            <div className="rounded-2xl border border-zinc-100 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 p-4 shadow-sm">
                              <p className="text-xs font-semibold uppercase tracking-wide text-indigo-600">{item.date}</p>
                              <h4 className="mt-1 font-semibold">{item.company}</h4>
                              <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300"><strong>{item.role}</strong> — {item.summary}</p>

                              <div className="mt-3 flex flex-wrap justify-start md:justify-end gap-2">
                                {item.skills.map((s) => (
                                  <span key={s} className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200">{s}</span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Center dot and year (always centered) */}
                        <div className="relative md:col-span-0 flex justify-center items-start md:order-none">
                          <div className="w-6 h-6 rounded-full bg-indigo-600 border-2 border-white dark:border-zinc-900 shadow-md z-10 -mt-2" />
                        </div>

                        {/* Right column (content on right when !isLeft) */}
                        <div className={`md:pl-8 md:col-span-1 ${isLeft ? 'md:order-2' : ''}`}>
                          <div className={`inline-block md:max-w-md ${isLeft ? 'md:ml-auto' : ''}`}>
                            {/* show card on right when not isLeft (but on small screens they will stack) */}
                            <div className="rounded-2xl border border-zinc-100 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 p-4 shadow-sm">
                              <p className="text-xs font-semibold uppercase tracking-wide text-indigo-600">{item.date}</p>
                              <h4 className="mt-1 font-semibold">{item.company}</h4>
                              <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300"><strong>{item.role}</strong> — {item.summary}</p>

                              <div className="mt-3 flex flex-wrap gap-2">
                                {item.skills.map((s) => (
                                  <span key={s} className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200">{s}</span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Mobile behavior: show a single stacked card on small screens */}
                      <div className="mt-4 md:hidden">
                        <div className="rounded-2xl border border-zinc-100 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 p-4 shadow-sm">
                          <p className="text-xs font-semibold uppercase tracking-wide text-indigo-600">{item.date}</p>
                          <h4 className="mt-1 font-semibold">{item.company}</h4>
                          <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300"><strong>{item.role}</strong> — {item.summary}</p>
                          <div className="mt-3 flex flex-wrap gap-2">
                            {item.skills.map((s) => (
                              <span key={s} className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200">{s}</span>
                            ))}
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
            <p className="mt-2 text-sm text-zinc-500">A snapshot of my product, delivery and tools stack.</p>

            <div className="mt-4 space-y-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">Product</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  <SkillPill>Product Strategy</SkillPill>
                  <SkillPill>Product Roadmap</SkillPill>
                  <SkillPill>Product Portfolio Management</SkillPill>
                  <SkillPill>Stakeholder Management</SkillPill>
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">Methods & Frameworks</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  <SkillPill>Agile &amp; Scrum</SkillPill>
                  <SkillPill>SAFe</SkillPill>
                  <SkillPill>User Research</SkillPill>
                  <SkillPill>Experimentation / A/B Testing</SkillPill>
                  <SkillPill>Data-driven Decision Making</SkillPill>
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">Tools & Platforms</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  <SkillPill>JIRA</SkillPill>
                  <SkillPill>MySQL</SkillPill>
                  <SkillPill>Tableau</SkillPill>
                  <SkillPill>Microsoft Office Suite</SkillPill>
                  <SkillPill>Visio</SkillPill>
                </div>
              </div>
            </div>
          </section>

          {/* EDUCATION */}
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
