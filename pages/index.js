// pages/index.js
import Head from 'next/head'
import React, { useEffect, useState } from 'react'

const CONTACT = {
  name: 'Meenakshi Verma',
  title: 'Product Owner → Product Manager',
  location: 'Sydney, Australia',
  phone: '+61 411021915',
  email: 'minakshi.kiit@gmail.com',
  linkedin: 'https://www.linkedin.com/in/mkva/',
  resume: '/Meenakshi_Resume_UPDATED.pdf' // put final resume into /public
};

// Full skill list with small emoji/svg icons (replace with brand svgs if you add them to public)
const SKILLS = [
  { id: 'product-roadmap', name: 'Product Roadmap', icon: '📈', color: 'bg-blue-50' },
  { id: 'product-portfolio', name: 'Product Portfolio Management', icon: '🗂️', color: 'bg-blue-50' },
  { id: 'agile', name: 'Agile & Scrum', icon: '⚡', color: 'bg-blue-50' },
  { id: 'safe', name: 'SAFe', icon: '🧩', color: 'bg-blue-50' },
  { id: 'jira', name: 'JIRA', icon: '🧭', color: 'bg-blue-50' },
  { id: 'mysql', name: 'MySQL', icon: '🛢️', color: 'bg-blue-50' },
  { id: 'sql', name: 'SQL (Basics)', icon: '💾', color: 'bg-blue-50' },
  { id: 'data-analytics', name: 'Data & Analytics', icon: '📊', color: 'bg-blue-50' },
  { id: 'ux', name: 'UX/UI Collaboration', icon: '🎨', color: 'bg-blue-50' },
  { id: 'wireframing', name: 'Wireframing', icon: '🧱', color: 'bg-blue-50' },
  { id: 'office', name: 'Microsoft Office Suite', icon: '📎', color: 'bg-blue-50' },
  { id: 'prioritization', name: 'Prioritization', icon: '🎯', color: 'bg-blue-50' },
  { id: 'api', name: 'API Product Management', icon: '🔗', color: 'bg-blue-50' },
  { id: 'research', name: 'User Research', icon: '🔍', color: 'bg-blue-50' }
];

const TIMELINE = [
  {
    yearLabel: '2025',
    company: 'Portfolio Builder',
    role: 'Aspiring Product Manager / Transitioning to Australia',
    period: '2025',
    description: 'Preparing for Product Manager roles in Australia — building public portfolio, case studies and strengthening product & data skills.',
    skills: ['Product Strategy', 'Portfolio Building', 'MySQL']
  },
  {
    yearLabel: '2022 – 2025',
    company: 'American Express',
    role: 'Sr. Associate Product Management / Product Owner',
    period: '2022 – 2025',
    description: 'Led Credit Authorization uplift; owned AMP (Charge Verification) for IVR & fraud, managed roadmaps, API uplifts and cross-functional delivery.',
    skills: ['Product Roadmap', 'APIs', 'IVR', 'Fraud', 'Stakeholder Mgmt', 'JIRA']
  },
  {
    yearLabel: '2021',
    company: 'Ramboll',
    role: 'Assistant Product Specialist',
    period: '2021',
    description: 'Delivered automation & UX improvements that increased digital adoption and saved manual hours.',
    skills: ['Automation', 'UX', 'SQL']
  },
  {
    yearLabel: '2018 – 2021',
    company: 'ATCS Inc',
    role: 'Business Analyst — Warranty Excellence Monitor',
    period: '2018 – 2021',
    description: 'Built web dashboard for Mercedes-Benz warranty repairs across 29 markets & 13 languages; defined KPIs and improved reporting cadence.',
    skills: ['Analytics', 'KPI Design', 'Stakeholder Mgmt', 'Dashboard']
  }
];

const PROJECTS = [
  {
    title: 'AMP Charge Verification Journey',
    role: 'Product Owner',
    summary: 'Uplifted 4 APIs to a new system of record and enabled fraud self-service via IVR, reducing manual reviews and improving customer experience.',
    tags: ['Fraud', 'APIs', 'IVR', 'Product Strategy'],
    link: '/projects/amp-charge-verification' // optional page if you create it
  },
  {
    title: 'Warranty Excellence Monitor',
    role: 'Business Analyst (ATCS)',
    summary: 'Web dashboard for Mercedes-Benz warranty repairs across 29 markets & 13 languages with 6 core KPIs and drill-down charts.',
    tags: ['Analytics', 'Dashboard', 'KPI Design', 'Stakeholder Mgmt'],
    link: '/projects/warranty-excellence'
  }
];

function SkillTile({ s }) {
  return (
    <div
      role="button"
      tabIndex={0}
      className="flex items-center gap-3 p-4 rounded-lg shadow-sm transform transition hover:-translate-y-1 hover:shadow-md cursor-default select-none"
      style={{ background: 'linear-gradient(180deg, rgba(235,249,255,0.8), rgba(225,241,251,0.85))' }}
    >
      <div className="w-10 h-10 rounded-md flex items-center justify-center text-xl">{s.icon}</div>
      <div className="text-sm font-medium">{s.name}</div>
    </div>
  );
}

export default function Portfolio() {
  useEffect(() => {
    // optional: highlight nav link on scroll
    const onScroll = () => {
      const sections = ['about', 'projects', 'experience', 'skills', 'education', 'contact'];
      const offsets = sections.map(id => {
        const el = document.getElementById(id);
        return el ? { id, top: Math.abs(el.getBoundingClientRect().top) } : { id, top: Infinity };
      });
      const nearest = offsets.reduce((a, b) => (a.top < b.top ? a : b), offsets[0]);
      document.querySelectorAll('[data-nav]').forEach(n => n.classList.remove('bg-indigo-600', 'text-white'));
      const active = document.querySelector(`[data-nav="${nearest.id}"]`);
      if (active) active.classList.add('bg-indigo-600', 'text-white');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <Head>
        <title>{CONTACT.name} — Product Portfolio</title>
        <meta name="description" content="Portfolio of Meenakshi Verma — Product Owner & aspiring Product Manager." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&display=swap" rel="stylesheet" />
        <style>{`
          html { scroll-behavior: smooth; font-family: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial; }
        `}</style>
      </Head>

      <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur-sm border-b">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="font-semibold">{CONTACT.name}</div>
            <div className="text-sm text-zinc-500 hidden md:block">— {CONTACT.title}</div>
          </div>

          <div className="flex items-center gap-3">
            {['about', 'projects', 'experience', 'skills', 'education', 'contact'].map(id => (
              <a
                key={id}
                data-nav={id}
                href={`#${id}`}
                className="px-3 py-1 rounded text-sm text-zinc-700 hover:bg-indigo-600 hover:text-white transition"
              >
                {id === 'about' ? 'About' : id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <main className="min-h-screen bg-white text-zinc-900">
        <section id="about" className="pt-8 pb-12" style={{ background: 'linear-gradient(180deg,#eaf8ff 0%, #e6f7ff 100%)' }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="rounded-2xl p-8 bg-white shadow-md flex flex-col md:flex-row gap-6 md:gap-10 items-center">
              {/* Profile */}
              <div className="flex-shrink-0">
                <img
                  src="/profile.jpg"
                  alt={`${CONTACT.name} headshot`}
                  className="w-36 h-36 object-cover rounded-full border-4 border-white shadow-lg"
                  onError={(e) => {
                    // fallback to initials circle
                    e.currentTarget.style.display = 'none';
                    const el = document.getElementById('initials-fallback');
                    if (el) el.style.display = 'flex';
                  }}
                />
                <div id="initials-fallback" style={{ display: 'none' }} className="w-36 h-36 rounded-full bg-indigo-600 text-white flex items-center justify-center text-3xl font-extrabold shadow-lg">MV</div>
              </div>

              <div className="flex-1">
                <h1 className="text-3xl md:text-4xl font-extrabold">{CONTACT.name}</h1>
                <p className="mt-2 text-lg text-zinc-600">{CONTACT.title} • {CONTACT.location}</p>

                <p className="mt-4 text-zinc-700 max-w-3xl">I build scalable products and frictionless customer experiences — product strategy, cross-functional leadership and data-driven delivery across global markets.</p>

                <div className="mt-5 flex flex-wrap gap-3">
                  <a href={CONTACT.resume} className="px-4 py-2 rounded-lg bg-indigo-600 text-white shadow" target="_blank" rel="noopener noreferrer">Download Resume</a>
                  <a href={CONTACT.linkedin} className="px-4 py-2 rounded-lg border" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  <a href={`mailto:${CONTACT.email}`} className="px-4 py-2 rounded-lg border">Email</a>
                </div>

                <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-zinc-600">
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

          {/* angled divider */}
          <div className="mt-8">
            <svg viewBox="0 0 1440 64" className="w-full" preserveAspectRatio="none" style={{ display: 'block' }}>
              <path d="M0,0 L1440,0 L1440,64 L0,0 Z" fill="#07263b" opacity="0.06" />
            </svg>
          </div>
        </section>

        {/* Projects - darker blue */}
        <section id="projects" className="py-12" style={{ background: 'linear-gradient(180deg,#07263b 0%, #06283a 100%)' }}>
          <div className="max-w-6xl mx-auto px-6 text-white">
            <h2 className="text-3xl font-bold">Projects</h2>
            <p className="mt-2 text-zinc-200">Case studies and notable work I’ve led.</p>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {PROJECTS.map(p => (
                <div key={p.title} className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <h3 className="text-xl font-semibold text-white">{p.title}</h3>
                  <p className="mt-1 text-sm text-zinc-200"><strong>Role:</strong> {p.role}</p>
                  <p className="mt-4 text-zinc-200">{p.summary}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map(t => (
                      <span key={t} className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-xs text-white/90">
                        {t}
                      </span>
                    ))}
                  </div>

                  {p.link && (
                    <div className="mt-4">
                      <a href={p.link} className="text-sm text-sky-200 hover:underline" >View case study →</a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Work Experience (timeline) - light blue */}
        <section id="experience" className="py-12" style={{ background: 'linear-gradient(180deg,#eaf6fb 0%, #eef9fe 100%)' }}>
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold">Work Experience</h2>
            <p className="mt-2 text-zinc-600">Most recent roles first (2025 → 2018). Click/tap cards on small screens to read quickly.</p>

            <div className="mt-10 relative">
              {/* center vertical line */}
              <div className="absolute inset-x-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-zinc-300/50" />

              <div className="space-y-14">
                {TIMELINE.map((item, i) => {
                  const left = i % 2 === 0;
                  return (
                    <div key={item.company} className="relative flex flex-col md:flex-row items-start md:items-stretch">
                      {/* card container */}
                      <div className={`md:w-1/2 ${left ? 'md:pr-8 md:pl-0 md:text-right' : 'md:pl-8 md:pr-0'}`}>
                        <div className={`${left ? 'md:ml-auto md:text-left' : ''} md:max-w-lg`}>
                          <div className="bg-white rounded-2xl p-6 shadow">
                            <div className="flex items-start justify-between gap-4">
                              <div>
                                <h3 className="text-lg font-semibold">{item.role}</h3>
                                <div className="text-sm text-zinc-500">{item.company}</div>
                              </div>
                              <div className="text-sm text-zinc-400">{item.period}</div>
                            </div>

                            <p className="mt-3 text-zinc-700">{item.description}</p>

                            <div className="mt-4 flex flex-wrap gap-2">
                              {item.skills.map(s => <span key={s} className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-sky-50 text-sky-700">{s}</span>)}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* timeline dot (center) */}
                      <div className="md:w-0 flex justify-center md:contents">
                        <div className="w-4 h-4 rounded-full bg-white border-2 border-sky-400 -mt-2 md:mt-6"></div>
                      </div>

                      {/* opposite side empty on desktop when left aligned */}
                      <div className={`md:w-1/2 ${left ? 'md:pl-8' : 'md:pr-8'}`}>
                        {/* keep space symmetrical; on mobile stack cards */}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Skills & Education stack vertically on small screens; side-by-side on larger screens */}
        <section id="skills" className="py-12" style={{ background: 'linear-gradient(180deg,#edf9ff 0%, #e6f7ff 100%)' }}>
          <div className="max-w-6xl mx-auto px-6 grid gap-10 grid-cols-1 lg:grid-cols-2">
            {/* Skills column */}
            <div>
              <h2 className="text-2xl font-bold">Skills</h2>
              <p className="mt-2 text-zinc-600">Tools, techniques and areas I use frequently.</p>

              <div className="mt-6 grid gap-4 grid-cols-2 sm:grid-cols-3">
                {SKILLS.map(s => <SkillTile key={s.id} s={s} />)}
              </div>
            </div>

            {/* Education & Certifications column */}
            <div id="education" className="space-y-6">
              <h2 className="text-2xl font-bold">Education</h2>

              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 shadow">
                  <div className="flex justify-between">
                    <div>
                      <div className="font-semibold">M.Tech — IIT Roorkee</div>
                      <div className="text-sm text-zinc-600">Alternate Hydro Energy Systems</div>
                      <ul className="mt-2 text-sm text-zinc-700 list-disc list-inside">
                        <li>Graduate coursework in data analysis, energy systems modeling</li>
                        <li>Member of Placement Cell</li>
                        <li>Dissertation: GIS Integrated Hydropower Assessment</li>
                      </ul>
                    </div>
                    <div className="text-sm text-zinc-400">2016–2018</div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 shadow">
                  <div className="flex justify-between">
                    <div>
                      <div className="font-semibold">B.Tech — KIIT University, Bhubaneswar</div>
                      <div className="text-sm text-zinc-600">Civil Engineering</div>
                      <ul className="mt-2 text-sm text-zinc-700 list-disc list-inside">
                        <li>Project: Hydrated Lime for Modification of Bituminous Binder</li>
                        <li>Active Member: National Service Scheme (2014)</li>
                      </ul>
                    </div>
                    <div className="text-sm text-zinc-400">2010–2014</div>
                  </div>
                </div>
              </div>

              <h3 className="text-lg font-semibold">Certifications</h3>
              <div className="space-y-3">
                <div className="bg-white rounded-lg p-4 shadow flex items-center justify-between">
                  <div>
                    <div className="font-semibold">Certified Scrum Master (CSM) — Scrum Alliance</div>
                    <div className="text-sm text-zinc-600">Issued: 2020</div>
                  </div>
                  <div>
                    <a href="/certs/CSM.pdf" className="text-sky-600 hover:underline" target="_blank" rel="noopener noreferrer">View Certificate →</a>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 shadow flex items-center justify-between">
                  <div>
                    <div className="font-semibold">SAFe® Product Owner/Product Manager (POPM)</div>
                    <div className="text-sm text-zinc-600">Issued: Jan 2024</div>
                  </div>
                  <div>
                    <a href="/certs/POPM.jpeg" className="text-sky-600 hover:underline" target="_blank" rel="noopener noreferrer">View Certificate →</a>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 shadow flex items-center justify-between">
                  <div>
                    <div className="font-semibold">Harvard Leadership Edge</div>
                    <div className="text-sm text-zinc-600">Issued: Oct 2023</div>
                  </div>
                  <div>
                    <a href="/certs/Harvard_Leadership.jpeg" className="text-sky-600 hover:underline" target="_blank" rel="noopener noreferrer">View Certificate →</a>
                  </div>
                </div>
              </div>

              <h3 className="text-lg font-semibold mt-6">Awards & Achievements</h3>
              <ul className="list-disc list-inside text-zinc-700">
                <li><strong>Best of the Best Award</strong> — ATCS (2019): Recognized for Warranty Excellence Dashboard (29 markets, 13 languages).</li>
                <li><strong>Star of the Month</strong> — ATCS (multiple times): For stakeholder coordination & releases.</li>
                <li><strong>Sprint Leadership Recognition</strong> — American Express: For leading cross-functional API uplift delivery.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact / Footer */}
        <section id="contact" className="py-8">
          <div className="max-w-6xl mx-auto px-6">
            <div className="bg-white rounded-2xl p-6 shadow flex flex-col md:flex-row items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold">Get in touch</h3>
                <p className="text-sm text-zinc-600 mt-1">{CONTACT.name} — {CONTACT.title}</p>
                <p className="text-sm text-zinc-600 mt-1">{CONTACT.location} • <a href={`tel:${CONTACT.phone}`} className="underline">{CONTACT.phone}</a> • <a href={`mailto:${CONTACT.email}`} className="underline">{CONTACT.email}</a></p>
              </div>

              <div className="mt-4 md:mt-0 flex gap-3">
                <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className="px-4 py-2 border rounded">LinkedIn</a>
                <a href={CONTACT.resume} target="_blank" rel="noopener noreferrer" className="px-4 py-2 border rounded">Resume (PDF)</a>
              </div>
            </div>

            <p className="mt-6 text-sm text-zinc-500">Built with ♥ — tailored for Product roles. © {new Date().getFullYear()} {CONTACT.name}</p>
          </div>
        </section>
      </main>
    </>
  );
}
