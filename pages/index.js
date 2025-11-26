// pages/index.js
import Head from 'next/head';

const CONTACT = {
  name: 'Meenakshi Verma',
  title: 'Product Owner → Product Manager',
  location: 'Sydney, Australia',
  phone: '+61 411021915',
  email: 'minakshi.kiit@gmail.com',
  linkedin: 'https://www.linkedin.com/in/mkva/',
  // IMPORTANT: this file must exist inside /public
  resume: '/Meenakshi_Resume_UPDATED.pdf',
};

const TIMELINE = [
  {
    date: 'Jul 2018',
    title: 'Business Analyst — ATCS Inc',
    details:
      'Worked with Mercedes-Benz, Daimler & Volkswagen. Improved warranty cost savings by 15% and delivered data-driven dashboards.',
  },
  {
    date: '2019',
    title: 'Achievements at ATCS',
    details:
      'Received Best of the Best and Star of the Month awards for performance.',
  },
  {
    date: '2020',
    title: 'Analytics & Training',
    details:
      'Led analytics initiatives and trained 15+ clients on product features.',
  },
  {
    date: 'May 2021',
    title: 'Assistant Product Specialist — Ramboll',
    details:
      'Delivered 20% improvement in digital tool usage and saved 1200+ manual hours through automation.',
  },
  {
    date: 'Jul 2022',
    title: 'Sr. Associate Product Management — American Express',
    details:
      'Led Credit Authorization Systems uplift; collaborated with 20+ cross-functional teams; achieved 96% feature delivery rate.',
  },
  {
    date: '2023',
    title: 'Fraud & IVR Enhancements',
    details:
      'Delivered AMP Charge Verification journey; optimized IVR capabilities using MIS-driven insights.',
  },
  {
    date: '2024',
    title: 'Product Workflow Improvements',
    details:
      'Owned product roadmap, wireframes, and strengthened UX/UI collaboration.',
  },
  {
    date: '2025',
    title: 'Transition & Growth',
    details:
      'Preparing for Product Manager roles in Australia and building a public portfolio.',
  },
];

const PROJECTS = [
  {
    title: 'AMP Charge Verification Journey',
    role: 'Product Owner',
    summary:
      'Product Owner for the Authorizations Modernization Program (AMP). Led uplift of high-risk fraud and credit journeys in the IVR channel across US & International markets, improving decisioning speed, IVR containment and customer experience.',
    tags: ['Fraud & Credit', 'IVR Servicing', 'Global Rollout', 'Modernization'],
    link: '/projects/amp-charge-verification',
  },
  {
    title: 'Warranty Excellence Monitor',
    role: 'Business Analyst (ATCS)',
    summary:
      'Web-based dashboard for Mercedes-Benz warranty repairs across 29 markets and 13 languages. Provided KPIs and charts for damages per visit, cost per damage, cost per visit and other warranty metrics, giving leadership a single source of truth.',
    tags: ['Analytics', 'Dashboard', 'Mercedes-Benz', 'Warranty'],
    link: '/projects/warranty-excellence',
  },
  {
    title: 'Digital Automation & UX Improvements — Ramboll',
    role: 'Assistant Product Specialist',
    summary:
      'Enhanced user engagement by 20% and automated processes saving 1200+ person-hours annually across digital tools.',
    tags: ['Automation', 'UX', 'Change Management'],
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
          html {
            font-family: Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;
          }
        `}</style>
      </Head>

      <main className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 transition-colors duration-300">
        <div className="max-w-5xl mx-auto px-6 py-14">
          {/* HERO */}
          <header className="relative overflow-hidden rounded-3xl p-8 md:p-12 bg-gradient-to-br from-indigo-50 to-white dark:from-zinc-900 dark:to-zinc-950 shadow-md">
            <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(ellipse_at_top_left,var(--tw-gradient-stops))] from-indigo-300 via-purple-300 to-transparent" />

            <div className="relative flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10">
              {/* Profile image */}
              <div className="flex-shrink-0">
                <img
                  src="/profile.jpg"
                  alt="Profile Photo"
                  className="w-36 h-36 rounded-full object-cover shadow-lg border-4 border-white dark:border-zinc-900"
                />
              </div>

              <div className="flex-1">
                <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
                  {CONTACT.name}
                </h1>

                <p className="mt-2 text-lg text-zinc-600 dark:text-zinc-300">
                  {CONTACT.title} • {CONTACT.location}
                </p>

                <p className="mt-4 max-w-2xl leading-relaxed text-zinc-700 dark:text-zinc-300">
                  I build scalable products and frictionless customer experiences.
                  I specialise in product strategy, cross-functional leadership,
                  and data-driven decisions to deliver measurable outcomes across
                  global markets.
                </p>

                {/* Buttons */}
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={CONTACT.resume}
                    className="px-4 py-2 bg-indigo-600 text-white rounded-lg shadow hover:opacity-95"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Download Resume
                  </a>
                  <a
                    href={CONTACT.linkedin}
                    className="px-4 py-2 border rounded-lg hover:bg-zinc-50"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="px-4 py-2 border rounded-lg hover:bg-zinc-50"
                  >
                    Email
                  </a>
                </div>

                {/* Stats */}
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
          <section className="mt-12">
            <h2 className="text-2xl font-bold">Selected Projects</h2>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {PROJECTS.map((p) => (
                <article
                  key={p.title}
                  className="p-6 bg-white/80 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-2xl shadow-sm hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
                >
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <p className="mt-1 text-sm text-zinc-500">
                    <strong>Role:</strong> {p.role}
                  </p>

                  <p className="mt-4 text-zinc-700 dark:text-zinc-200">
                    {p.summary}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {p.link && (
                    <a
                      href={p.link}
                      className="mt-4 inline-flex text-sm font-medium text-indigo-600 hover:text-indigo-700"
                    >
                      View case study →
                    </a>
                  )}
                </article>
              ))}
            </div>
          </section>

          {/* TIMELINE */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold">Career Timeline</h2>
            <p className="mt-2 text-sm text-zinc-500">
              A quick view of how my career evolved across analytics, product and fraud platforms.
            </p>

            <div className="mt-6 relative">
              {/* Vertical gradient line */}
              <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/70 via-purple-500/50 to-transparent" />

              <div className="space-y-6">
                {TIMELINE.map((item, idx) => (
                  <div key={item.date} className="relative pl-12">
                    {/* Node */}
                    <div className="absolute left-1 top-3 w-6 h-6 rounded-full bg-white dark:bg-zinc-950 border-2 border-indigo-500 flex items-center justify-center text-[10px] font-semibold text-indigo-600 shadow-sm">
                      {idx + 1}
                    </div>

                    {/* Card */}
                    <div className="rounded-2xl border border-zinc-100 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 p-4 shadow-sm">
                      <p className="text-xs font-semibold uppercase tracking-wide text-indigo-600">
                        {item.date}
                      </p>
                      <h4 className="mt-1 font-semibold">{item.title}</h4>
                      <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                        {item.details}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* SKILLS – FULL WIDTH */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold">Skills</h2>
            <p className="mt-2 text-sm text-zinc-500">
              A snapshot of my product, delivery and tools stack.
            </p>

            <div className="mt-4 space-y-6">
              {/* Product Skills */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                  Product
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  <SkillPill>Product Strategy</SkillPill>
                  <SkillPill>Product Roadmap</SkillPill>
                  <SkillPill>Product Portfolio Management</SkillPill>
                  <SkillPill>Stakeholder Management</SkillPill>
                </div>
              </div>

              {/* Methods & Frameworks */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                  Methods &amp; Frameworks
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  <SkillPill>Agile &amp; Scrum</SkillPill>
                  <SkillPill>SAFe</SkillPill>
                  <SkillPill>User Research</SkillPill>
                  <SkillPill>Experimentation / A/B Testing</SkillPill>
                  <SkillPill>Data-driven Decision Making</SkillPill>
                </div>
              </div>

              {/* Tools */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                  Tools &amp; Platforms
                </p>
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

          {/* EDUCATION – SEPARATE SECTION */}
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
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  {CONTACT.name} — {CONTACT.title}
                </p>
                <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">
                  {CONTACT.location} •{' '}
                  <a href={`tel:${CONTACT.phone}`} className="underline">
                    {CONTACT.phone}
                  </a>{' '}
                  •{' '}
                  <a href={`mailto:${CONTACT.email}`} className="underline">
                    {CONTACT.email}
                  </a>
                </p>
              </div>

              <div className="flex items-center gap-4">
                <a
                  href={CONTACT.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm border px-3 py-2 rounded"
                >
                  LinkedIn
                </a>
                <a
                  href={CONTACT.resume}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm border px-3 py-2 rounded"
                >
                  Resume (PDF)
                </a>
              </div>
            </div>

            <p className="mt-6 text-xs text-zinc-500">
              Built with ♥ — tailored for Product roles. ©{' '}
              {new Date().getFullYear()} {CONTACT.name}
            </p>
          </footer>
        </div>
      </main>
    </>
  );
}
