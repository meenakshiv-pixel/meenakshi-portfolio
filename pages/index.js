// pages/index.js
import Head from 'next/head'
import React, { useEffect, useState } from 'react'

/**
 * Meenakshi Portfolio - index.js
 * - Sections use blue shades and separated backgrounds
 * - Timeline first item role updated
 * - Skills tiles have icons and light-blue colored tiles (also dark-mode compatible)
 * - "Selected Projects" renamed to "Projects"
 */

const CONTACT = {
  name: 'Meenakshi Verma',
  title: 'Product Owner → Product Manager',
  location: 'Sydney, Australia',
  phone: '+61 411021915',
  email: 'meenakshi.kiit@gmail.com',
  linkedin: 'https://www.linkedin.com/in/mkva/',
  resume: '/Meenakshi_Resume_UPDATED.pdf'
}

/* Timeline entries — top (latest) -> bottom (oldest) */
const TIMELINE = [
  {
    date: '2025',
    company: 'Transition to Australia / Portfolio Building',
    role: 'Aspiring Product Manager/Transitioning to Australia',
    summary:
      'Building a public portfolio and case studies while strengthening data & product skills for Product Manager roles in Australia.',
    skills: ['Product Strategy', 'Portfolio Building', 'MySQL', 'Data Analysis']
  },
  {
    date: '2022 – 2025',
    company: 'American Express',
    role: 'Sr. Associate Product Management / Product Owner',
    summary:
      'Led Credit Authorization uplift; owned AMP (Charge Verification) work for IVR & fraud; managed roadmaps and cross-functional delivery.',
    skills: ['Product Roadmap', 'APIs', 'IVR', 'Fraud', 'Stakeholder Mgmt', 'JIRA']
  },
  {
    date: 'May 2021 – Jul 2022',
    company: 'Ramboll',
    role: 'Assistant Product Specialist',
    summary:
      'Delivered digital automation and UX improvements that increased adoption and removed manual work.',
    skills: ['Automation', 'UX Improvements', 'Process Optimization']
  },
  {
    date: '2018 – 2020',
    company: 'ATCS Inc (Mercedes-Benz)',
    role: 'Business Analyst → Senior Business Analyst',
    summary:
      'Led requirements & KPI design for the Warranty Excellence Monitor — multi-market warranty dashboard and stakeholder rollouts.',
    skills: ['Requirements', 'KPI Design', 'Dashboard', 'Stakeholder Mgmt', 'SQL']
  }
]

const PROJECTS = [
  {
    title: 'AMP Charge Verification Journey',
    role: 'Product Owner',
    summary:
      'AMP: uplifted fraud & credit journeys in IVR; enabled fraud self-service through API & IVR improvements.',
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
    summary:
      'Automation and UX improvements which improved tool usage and reduced manual workload.',
    tags: ['Automation', 'UX', 'Process']
  }
]

/* NAV links for top sticky nav */
const NAV_LINKS = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Work Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' }
]

/* Skill list with icon SVG and light-blue color theme per-pill */
const SKILLS = [
  // Product & Strategy
  { name: 'Product Roadmap', key: 'roadmap', color: 'sky', icon: 'roadmap' },
  { name: 'Product Strategy', key: 'strategy', color: 'blue', icon: 'target' },
  { name: 'Product Portfolio Management', key: 'portfolio', color: 'indigo', icon: 'layers' },
  { name: 'Stakeholder Management', key: 'stakeholder', color: 'cyan', icon: 'users' },

  // Methods & Delivery
  { name: 'Agile & Scrum', key: 'agile', color: 'teal', icon: 'sprint' },
  { name: 'SAFe', key: 'safe', color: 'sky', icon: 'framework' },
  { name: 'Wireframing', key: 'wireframe', color: 'blue', icon: 'layout' },
  { name: 'UX Collaboration', key: 'ux', color: 'indigo', icon: 'design' },

  // Data & Tools
  { name: 'MySQL', key: 'mysql', color: 'cyan', icon: 'database' },
  { name: 'Tableau', key: 'tableau', color: 'sky', icon: 'chart' },
  { name: 'Microsoft Office Suite', key: 'office', color: 'blue', icon: 'spreadsheet' },
  { name: 'JIRA', key: 'jira', color: 'indigo', icon: 'checklist' },
  { name: 'Visio', key: 'visio', color: 'teal', icon: 'diagram' }
]

/* Helper: small SVG icons (kept simple and neutral, fill/stroke styled via classes) */
function IconSVG ({ name, className = 'w-4 h-4 mr-2 flex-shrink-0' }) {
  switch (name) {
    case 'target':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
          <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="12" cy="12" r="2" fill="currentColor" />
        </svg>
      )
    case 'roadmap':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M3 7h6v10H3zM15 7h6v10h-6zM9 7h6v4H9z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    case 'layers':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M12 2l9 5-9 5-9-5 9-5z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
          <path d="M3 12l9 5 9-5" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
        </svg>
      )
    case 'users':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M16 11a4 4 0 1 0-8 0" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M2 20v-1a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v1" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    case 'sprint':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M3 12h18M8 6l4 6 4-6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    case 'framework':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
          <rect x="3" y="4" width="6" height="6" stroke="currentColor" strokeWidth="1.3" />
          <rect x="15" y="4" width="6" height="6" stroke="currentColor" strokeWidth="1.3" />
          <rect x="3" y="14" width="6" height="6" stroke="currentColor" strokeWidth="1.3" />
          <rect x="15" y="14" width="6" height="6" stroke="currentColor" strokeWidth="1.3" />
        </svg>
      )
    case 'layout':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
          <rect x="3" y="3" width="18" height="18" stroke="currentColor" strokeWidth="1.2" />
          <path d="M9 3v18M15 3v18" stroke="currentColor" strokeWidth="1.2" />
        </svg>
      )
    case 'design':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M12 2l4 7-4 3-4-3 4-7z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
          <path d="M2 22l20 0" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
        </svg>
      )
    case 'database':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
          <ellipse cx="12" cy="6" rx="9" ry="3" stroke="currentColor" strokeWidth="1.3"/>
          <path d="M3 6v6c0 1.7 4 3 9 3s9-1.3 9-3V6" stroke="currentColor" strokeWidth="1.3"/>
        </svg>
      )
    case 'chart':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M3 3v18h18" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7 14v-4M12 18v-8M17 10v-2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        </svg>
      )
    case 'spreadsheet':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
          <rect x="3" y="3" width="18" height="18" stroke="currentColor" strokeWidth="1.1"/>
          <path d="M8 3v18M3 8h18" stroke="currentColor" strokeWidth="1.1"/>
        </svg>
      )
    case 'checklist':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M9 11l2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M21 12v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h11" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    case 'diagram':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
          <rect x="3" y="3" width="6" height="6" stroke="currentColor" strokeWidth="1.1"/>
          <rect x="15" y="3" width="6" height="6" stroke="currentColor" strokeWidth="1.1"/>
          <rect x="9" y="13" width="6" height="6" stroke="currentColor" strokeWidth="1.1"/>
          <path d="M6 9l6 4 6-4" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/>
        </svg>
      )
    case 'database-simple':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
          <ellipse cx="12" cy="6" rx="6" ry="2" stroke="currentColor" strokeWidth="1.1"/>
          <path d="M6 6v6c0 1 3 2 6 2s6-1 6-2V6" stroke="currentColor" strokeWidth="1.1"/>
        </svg>
      )
    default:
      return <svg className={className} viewBox="0 0 24 24" aria-hidden><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.1"/></svg>
  }
}

/* Skill pill component: colored light-blue theme with icon */
function SkillPill ({ name, icon, color = 'sky' }) {
  // color maps to tailwind shades
  const bg = {
    sky: 'bg-sky-100 text-sky-800 border-sky-200 dark:bg-sky-900 dark:text-sky-100 dark:border-sky-700',
    blue: 'bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900 dark:text-blue-100 dark:border-blue-700',
    indigo: 'bg-indigo-100 text-indigo-800 border-indigo-200 dark:bg-indigo-900 dark:text-indigo-100 dark:border-indigo-700',
    cyan: 'bg-cyan-100 text-cyan-800 border-cyan-200 dark:bg-cyan-900 dark:text-cyan-100 dark:border-cyan-700',
    teal: 'bg-teal-100 text-teal-800 border-teal-200 dark:bg-teal-900 dark:text-teal-100 dark:border-teal-700'
  }[color] || 'bg-sky-100 text-sky-800 border-sky-200 dark:bg-sky-900 dark:text-sky-100 dark:border-sky-700'

  return (
    <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${bg}`}>
      <IconSVG name={icon} />
      <span>{name}</span>
    </div>
  )
}

export default function Portfolio () {
  const [active, setActive] = useState('about')
  const sectionIds = NAV_LINKS.map(n => n.id)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.documentElement.style.scrollBehavior = 'smooth'
    }

    const handleScroll = () => {
      const offsets = sectionIds.map(id => {
        const el = document.getElementById(id)
        if (!el) return { id, distance: Infinity }
        const rect = el.getBoundingClientRect()
        const distance = Math.abs(rect.top + rect.height / 2 - window.innerHeight / 2)
        return { id, distance }
      })
      offsets.sort((a, b) => a.distance - b.distance)
      if (offsets[0] && offsets[0].id && offsets[0].id !== active) setActive(offsets[0].id)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [active])

  const scrollToId = id => {
    const el = document.getElementById(id)
    if (!el) return
    const NAV_OFFSET = 80
    const y = el.getBoundingClientRect().top + window.pageYOffset - NAV_OFFSET
    window.scrollTo({ top: y, behavior: 'smooth' })
  }

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

      <main className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50">
        {/* sticky nav */}
        <nav className="sticky top-0 z-40 bg-white/90 dark:bg-zinc-950/90 backdrop-blur-sm border-b border-zinc-200 dark:border-zinc-800">
          <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="text-lg font-bold">{CONTACT.name}</div>
              <div className="hidden md:block text-sm text-zinc-500">— {CONTACT.title}</div>
            </div>

            <div className="flex items-center gap-3">
              <div className="hidden md:flex items-center gap-2">
                {NAV_LINKS.map(l => (
                  <button
                    key={l.id}
                    onClick={() => scrollToId(l.id)}
                    className={`px-3 py-2 rounded-md text-sm font-medium ${active === l.id ? 'bg-indigo-600 text-white' : 'text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800'}`}
                    aria-current={active === l.id ? 'page' : undefined}
                  >
                    {l.label}
                  </button>
                ))}
              </div>

              <div className="md:hidden">
                <select value={active} onChange={e => scrollToId(e.target.value)} className="rounded-md border px-2 py-1 text-sm">
                  {NAV_LINKS.map(l => <option key={l.id} value={l.id}>{l.label}</option>)}
                </select>
              </div>
            </div>
          </div>
        </nav>

        <div className="max-w-6xl mx-auto">

          {/* ABOUT — light blue shade */}
          <section id="about" className="px-6 py-10 bg-sky-50 dark:bg-sky-900/60">
            <div className="max-w-5xl mx-auto rounded-2xl p-6 md:p-10 bg-white/80 dark:bg-zinc-900/70 shadow">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="flex-shrink-0">
                  <img src="/profile.jpg" alt="Profile" className="w-28 h-28 md:w-36 md:h-36 rounded-full object-cover shadow-lg border-4 border-white dark:border-zinc-900" onError={(e)=>{e.currentTarget.style.display='none'}} />
                </div>
                <div className="flex-1">
                  <h1 className="text-2xl md:text-4xl font-extrabold">{CONTACT.name}</h1>
                  <p className="mt-2 text-md md:text-lg text-zinc-700 dark:text-zinc-300">{CONTACT.title} • {CONTACT.location}</p>
                  <p className="mt-4 text-zinc-700 dark:text-zinc-300 max-w-2xl leading-relaxed">
                    I build scalable products and frictionless customer experiences — product strategy, cross-functional leadership and data-driven delivery across global markets.
                  </p>

                  <div className="mt-5 flex flex-wrap gap-3">
                    <a href={CONTACT.resume} target="_blank" rel="noreferrer" className="px-4 py-2 bg-indigo-600 text-white rounded-lg shadow text-sm">Download Resume</a>
                    <a href={CONTACT.linkedin} target="_blank" rel="noreferrer" className="px-4 py-2 border rounded-lg hover:bg-zinc-50 text-sm">LinkedIn</a>
                    <a href={`mailto:${CONTACT.email}`} className="px-4 py-2 border rounded-lg hover:bg-zinc-50 text-sm">Email</a>
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
                    <div><p className="text-xs text-zinc-500">Years experience</p><p className="font-semibold">8+</p></div>
                    <div><p className="text-xs text-zinc-500">Focus</p><p className="font-semibold">Product Strategy</p></div>
                    <div><p className="text-xs text-zinc-500">Strength</p><p className="font-semibold">Execution & Delivery</p></div>
                    <div><p className="text-xs text-zinc-500">Tools</p><p className="font-semibold">JIRA, Visio, Tableau</p></div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* PROJECTS — slightly deeper blue */}
          <section id="projects" className="px-6 py-10 bg-blue-50 dark:bg-blue-900/40">
            <div className="max-w-5xl mx-auto">
              <div className="mb-4">
                <h2 className="text-2xl font-bold">Projects</h2>
                <p className="text-sm text-zinc-600 dark:text-zinc-300">Case studies and notable work I’ve led.</p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {PROJECTS.map(p => (
                  <article key={p.title} className="p-6 bg-white/90 dark:bg-zinc-900/80 rounded-2xl shadow hover:shadow-lg transition max-w-[520px]">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-semibold">{p.title}</h3>
                        <p className="mt-1 text-sm text-zinc-500"><strong>Role:</strong> {p.role}</p>
                      </div>
                    </div>

                    <p className="mt-4 text-zinc-700 dark:text-zinc-200">{p.summary}</p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {p.tags.map(t => (
                        <div key={t} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-sky-100 text-sky-800 border border-sky-200 dark:bg-sky-900 dark:text-sky-100 dark:border-sky-700">
                          <IconSVG name="chart" className="w-4 h-4 mr-2" />
                          {t}
                        </div>
                      ))}
                    </div>

                    {p.link && <a href={p.link} className="mt-4 inline-flex text-sm font-medium text-indigo-600 hover:text-indigo-700">View case study →</a>}
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* EXPERIENCE — cyan-ish blue */}
          <section id="experience" className="px-6 py-10 bg-cyan-50 dark:bg-cyan-900/40">
            <div className="max-w-5xl mx-auto">
              <div className="mb-4">
                <h2 className="text-2xl font-bold">Work Experience</h2>
                <p className="text-sm text-zinc-600 dark:text-zinc-300">Most recent roles first (2025 → 2018).</p>
              </div>

              <div className="relative mt-6">
                <div className="absolute left-1/2 transform -translate-x-1/2 top-6 bottom-6 w-[2px] bg-zinc-200 dark:bg-zinc-800" />

                <div className="space-y-8">
                  {TIMELINE.map((item, idx) => {
                    const isRight = idx % 2 === 0
                    return (
                      <div key={item.company} className="relative">
                        <div className="hidden md:grid grid-cols-[1fr_80px_1fr] items-start gap-4">
                          {/* left card */}
                          <div className="flex justify-end">
                            {!isRight && (
                              <div className="max-w-[420px] w-full bg-white/95 dark:bg-zinc-900/80 rounded-2xl p-5 shadow-lg border border-zinc-100 dark:border-zinc-800">
                                <div className="flex items-start justify-between">
                                  <div className="pr-2">
                                    <h4 className="font-semibold text-lg">{item.role}</h4>
                                    <p className="mt-1 text-sm text-zinc-500"><strong>{item.company}</strong></p>
                                  </div>
                                  <div className="text-xs text-zinc-500">{item.date}</div>
                                </div>
                                <p className="mt-3 text-sm text-zinc-700 dark:text-zinc-300">{item.summary}</p>
                                <div className="mt-3 flex flex-wrap gap-2">
                                  {item.skills.map(s => {
                                    const meta = SKILLS.find(x => x.name === s) || { icon: 'database-simple', color: 'sky' }
                                    return <SkillPill key={s} name={s} icon={meta.icon || 'database'} color={meta.color || 'sky'} />
                                  })}
                                </div>
                              </div>
                            )}
                          </div>

                          {/* center */}
                          <div className="flex flex-col items-center">
                            <div className="mb-2">
                              <span className="inline-block text-xs font-medium px-2.5 py-1 rounded-full bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200">{item.date}</span>
                            </div>
                            <div>
                              <div className="w-4 h-4 rounded-full bg-white dark:bg-zinc-900 border-2 border-indigo-600 dark:border-indigo-500 shadow-sm" />
                            </div>
                          </div>

                          {/* right card */}
                          <div>
                            {isRight && (
                              <div className="max-w-[420px] w-full bg-white/95 dark:bg-zinc-900/80 rounded-2xl p-5 shadow-lg border border-zinc-100 dark:border-zinc-800">
                                <div className="flex items-start justify-between">
                                  <div className="pr-2">
                                    <h4 className="font-semibold text-lg">{item.role}</h4>
                                    <p className="mt-1 text-sm text-zinc-500"><strong>{item.company}</strong></p>
                                  </div>
                                  <div className="text-xs text-zinc-500">{item.date}</div>
                                </div>
                                <p className="mt-3 text-sm text-zinc-700 dark:text-zinc-300">{item.summary}</p>
                                <div className="mt-3 flex flex-wrap gap-2">
                                  {item.skills.map(s => {
                                    const meta = SKILLS.find(x => x.name === s) || { icon: 'database-simple', color: 'sky' }
                                    return <SkillPill key={s} name={s} icon={meta.icon || 'database'} color={meta.color || 'sky'} />
                                  })}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>

                        {/* mobile stacked */}
                        <div className="md:hidden mt-6 flex flex-col items-center">
                          <div className="mb-2">
                            <span className="inline-block text-xs font-medium px-3 py-1 rounded-full bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200">{item.date}</span>
                          </div>
                          <div className="w-4 h-4 rounded-full bg-white dark:bg-zinc-900 border-2 border-indigo-600 dark:border-indigo-500 shadow-sm mb-3" />
                          <div className="w-full bg-white/95 dark:bg-zinc-900/80 rounded-2xl p-4 shadow-sm border border-zinc-100 dark:border-zinc-800">
                            <div className="flex items-start justify-between">
                              <div>
                                <h4 className="font-semibold">{item.role}</h4>
                                <p className="mt-1 text-sm text-zinc-500"><strong>{item.company}</strong></p>
                              </div>
                              <div className="text-xs text-zinc-500">{item.date}</div>
                            </div>
                            <p className="mt-3 text-sm text-zinc-700 dark:text-zinc-300">{item.summary}</p>
                            <div className="mt-3 flex flex-wrap gap-2">
                              {item.skills.map(s => {
                                const meta = SKILLS.find(x => x.name === s) || { icon: 'database-simple', color: 'sky' }
                                return <SkillPill key={s} name={s} icon={meta.icon || 'database'} color={meta.color || 'sky'} />
                              })}
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </section>

          {/* SKILLS — deeper indigo-blue shade */}
          <section id="skills" className="px-6 py-10 bg-indigo-50 dark:bg-indigo-900/40">
            <div className="max-w-5xl mx-auto">
              <div className="mb-4">
                <h2 className="text-2xl font-bold">Skills</h2>
                <p className="text-sm text-zinc-600 dark:text-zinc-300">Product, delivery, analytics and tools I regularly use.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">Product & Strategy</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {SKILLS.filter(s => ['roadmap','strategy','portfolio','stakeholder'].includes(s.key)).map(s => (
                      <SkillPill key={s.key} name={s.name} icon={s.icon} color={s.color} />
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">Methods & Delivery</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {SKILLS.filter(s => ['agile','safe','wireframe','ux'].includes(s.key)).map(s => (
                      <SkillPill key={s.key} name={s.name} icon={s.icon} color={s.color} />
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">Data & Tools</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {SKILLS.filter(s => ['mysql','tableau','office','jira','visio'].includes(s.key)).map(s => (
                      <SkillPill key={s.key} name={s.name} icon={s.icon} color={s.color} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* EDUCATION — lighter blue */}
          <section id="education" className="px-6 py-10 bg-sky-50 dark:bg-sky-900/30">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl font-bold">Education & Certifications</h2>
              <ul className="mt-4 list-disc list-inside text-zinc-700 dark:text-zinc-300">
                <li>M.Tech — IIT Roorkee (Alternate Hydro Energy Systems)</li>
                <li>B.Tech — KIIT Bhubaneswar (Civil Engineering)</li>
                <li>Safe® Product Owner/Product Manager (POPM)</li>
                <li>Certified Scrum Master (CSM)</li>
                <li>Harvard Leadership Edge</li>
              </ul>
            </div>
          </section>

          {/* CONTACT / FOOTER — deep blue */}
          <section id="contact" className="px-6 py-10 bg-blue-50 dark:bg-blue-900/40 border-t border-zinc-100 dark:border-zinc-800">
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div>
                  <h3 className="text-lg font-semibold">Get in touch</h3>
                  <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">{CONTACT.name} — {CONTACT.title}</p>
                  <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">{CONTACT.location} • <a href={`tel:${CONTACT.phone}`} className="underline">{CONTACT.phone}</a> • <a href={`mailto:${CONTACT.email}`} className="underline">{CONTACT.email}</a></p>
                </div>

                <div className="flex items-center gap-4">
                  <a href={CONTACT.linkedin} target="_blank" rel="noreferrer" className="text-sm border px-3 py-2 rounded bg-white/90 dark:bg-zinc-900/80">LinkedIn</a>
                  <a href={CONTACT.resume} target="_blank" rel="noreferrer" className="text-sm border px-3 py-2 rounded bg-white/90 dark:bg-zinc-900/80">Resume (PDF)</a>
                </div>
              </div>

              <p className="mt-6 text-xs text-zinc-500">Built with ♥ — tailored for Product roles. © {new Date().getFullYear()} {CONTACT.name}</p>
            </div>
          </section>

        </div>
      </main>
    </>
  )
}
