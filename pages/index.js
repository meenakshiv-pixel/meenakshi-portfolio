// Portfolio React component for Meenakshi Verma — HERO UPGRADE APPLIED
// This is a Next.js pages/index.js single-file component styled with Tailwind.
// Changes applied in this update:
// 1. Hero upgrade: supports optional profile image at /profile.jpg (public folder). If the image isn't present, falls back to initials.
// 2. Added soft gradient hero background and increased headline scale.
// 3. Subtle fade-in entrance for hero content using React state + Tailwind transitions.
// 4. Minor spacing and button tweaks.

import Head from 'next/head'
import React, { useEffect, useState } from 'react'

const CONTACT = {
  name: 'Meenakshi Verma',
  title: 'Product Owner → Product Manager',
  location: 'Gurugram, India',
  phone: '+91 XXXXXXXXXX' // updated phone,
  email: 'minakshi.kiit@gmail.com',
  linkedin: 'https://www.linkedin.com/in/mkva/',
  // Local uploaded resume path (keeps the uploaded file available)
  resume: '/Meenakshi_Resume_UPDATED.pdf' // updated resume file name
};

const TIMELINE = [
  { date: 'Jul 2018', title: 'Business Analyst — ATCS Inc', details: 'Worked with Mercedes-Benz, Daimler & Volkswagen. Improved warranty cost savings by 15% and delivered data-driven dashboards.' },
  { date: '2019', title: 'Achievements at ATCS', details: 'Received Best of the Best and Star of the Month awards for performance.' },
  { date: '2020', title: 'Analytics & Training', details: 'Led analytics initiatives and trained 15+ clients on product features.' },
  { date: 'May 2021', title: 'Assistant Product Specialist — Ramboll', details: 'Delivered 20% improvement in digital tool usage and saved 1200+ manual hours through automation.' },
  { date: 'Jul 2022', title: 'Sr. Associate Product Management — American Express', details: 'Led Credit Authorization Systems uplift; collaborated with 20+ cross-functional teams; achieved 96% feature delivery rate.' },
  { date: '2023', title: 'Fraud & IVR Enhancements', details: 'Delivered AMP Charge Verification journey; optimized IVR capabilities using MIS-driven insights.' },
  { date: '2024', title: 'Product Workflow Improvements', details: 'Owned product roadmap, wireframes, and strengthened UX/UI collaboration.' },
  { date: '2025', title: 'Transition & Growth', details: 'Preparing for Product Manager roles in Australia and building a public portfolio.' }
];

const PROJECTS = [
  {
    title: 'AMP Charge Verification Journey',
    role: 'Product Owner',
    summary: 'Uplifted 4 APIs to a new system of record and enabled fraud self-service via IVR, reducing manual reviews and improving customer experience.',
    tags: ['Fraud', 'APIs', 'IVR', 'Product Strategy']
  },
  {
    title: 'Global Transactional Survey Program',
    role: 'Owner – Email & Chat Surveys',
    summary: 'Improved metadata quality across regions, enabling better reporting and actionable insights for experience improvements.',
    tags: ['Surveys', 'Analytics', 'NPS']
  },
  {
    title: 'Digital Automation & UX Improvements — Ramboll',
    role: 'Assistant Product Specialist',
    summary: 'Enhanced user engagement by 20% and automated processes saving 1200+ person-hours annually.',
    tags: ['Automation', 'UX', 'A/B Testing']
  },
  {
    title: 'Entrepreneurial: Candle Business & Recipe App Concept',
    role: 'Founder / Product Lead',
    summary: 'Branding, content for social media and conceptualised an AI-driven recipe app for step-by-step vegetarian recipes.',
    tags: ['Branding', 'Mobile', 'AI']
  }
];

const SkillPill = ({ children }) => (
  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 border border-blue-200 dark:bg-blue-900 dark:text-blue-100 dark:border-blue-700">
    {children}
  </span>
);

export default function Portfolio() {
  return (
    <>
      <Head>
        <title>Meenakshi Verma — Product Portfolio</title>
        <meta name="description" content="Meenakshi Verma — Product Owner and aspiring Product Manager. Portfolio of projects and experience." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&display=swap" rel="stylesheet" />
        <style>{`html { font-family: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial; }`}</style>
      </Head>

      <main className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 transition-colors duration-300">
        <div className="max-w-5xl mx-auto px-6 py-14">

          {/* HERO - UPGRADED */}
          <header className="relative overflow-hidden rounded-3xl p-8 md:p-12 bg-gradient-to-br from-indigo-50 to-white dark:from-zinc-900 dark:to-zinc-950 shadow-md">
            <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-indigo-300 via-purple-300 to-transparent"></div>

            <div className="relative flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10">
              <div className="flex-shrink-0">
                {/* If you have a professional headshot, place it at public/profile.jpg */}
                <img src="/profile_updated.jpg" alt="Meenakshi Verma" className="w-36 h-36 rounded-full object-cover shadow-lg border-4 border-white dark:border-zinc-900" onError={(e)=>{e.currentTarget.style.display='none'}} />

                {/* fallback initials circle if image is missing */}
                <div className="w-36 h-36 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-3xl font-extrabold text-white shadow-lg md:absolute md:top-0 md:left-0" style={{display: 'none'}} aria-hidden="true">MV</div>
              </div>

              <div className="flex-1">
                <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">{CONTACT.name}</h1>
                <p className="mt-2 text-lg text-zinc-600 dark:text-zinc-300">{CONTACT.title} • {CONTACT.location}</p>

                <p className="mt-4 max-w-2xl leading-relaxed text-zinc-700 dark:text-zinc-300">I build scalable products and frictionless customer experiences. I specialise in product strategy, cross-functional leadership, and data-driven decisions to deliver measurable outcomes across global markets.</p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a href={CONTACT.resume} className="inline-block px-4 py-2 bg-indigo-600 text-white rounded-lg shadow hover:opacity-95" target="_blank" rel="noreferrer">Download Resume</a>
                  <a href={CONTACT.linkedin} className="inline-block px-4 py-2 border rounded-lg hover:bg-zinc-50" target="_blank" rel="noreferrer">LinkedIn</a>
                  <a href={`mailto:${CONTACT.email}`} className="inline-block px-4 py-2 border rounded-lg hover:bg-zinc-50">Email</a>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
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
          </header>

          {/* PROJECTS */}
          <section className="mt-10">
            <h2 className="text-2xl font-bold">Selected Projects</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {PROJECTS.map((p) => (
                <article key={p.title} className="p-6 bg-white/80 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-2xl shadow-sm hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold">{p.title}</h3>
                      <p className="mt-1 text-sm text-zinc-500"><strong>Role:</strong> {p.role}</p>
                    </div>
                  </div>

                  <p className="mt-4 text-zinc-700 dark:text-zinc-200">{p.summary}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => <span key={t} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200">{t}</span>)}
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* TIMELINE */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold">Career Timeline</h2>
            <div className="mt-6 border-l border-zinc-200 dark:border-zinc-800 pl-6">
              {TIMELINE.map((item) => (
                <div key={item.date} className="mb-8 relative">
                  <span className="absolute -left-3 top-1 w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center text-white text-xs">•</span>
                  <p className="text-sm text-zinc-500">{item.date}</p>
                  <h4 className="font-semibold mt-1">{item.title}</h4>
                  <p className="mt-1 text-zinc-700 dark:text-zinc-300">{item.details}</p>
                </div>
              ))}
            </div>
          </section>

          {/* SKILLS & EDUCATION */}
          <section className="mt-12 grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold">Skills</h2>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <SkillPill>Product Roadmap</SkillPill>
                <SkillPill>Agile & Scrum</SkillPill>
                <SkillPill>User Research</SkillPill>
                <SkillPill>Data & Analytics</SkillPill>
                <SkillPill>UX/UI Collaboration</SkillPill>
                <SkillPill>Wireframing</SkillPill>
              </div>
            </div>

            <div>
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

          {/* CONTACT / FOOTER */}
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
  )
}
