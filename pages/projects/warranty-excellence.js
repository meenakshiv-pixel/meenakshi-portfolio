import Head from 'next/head';
import Link from 'next/link';

const Pill = ({ children }) => (
  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200">
    {children}
  </span>
);

export default function WarrantyExcellence() {
  return (
    <>
      <Head>
        <title>Warranty Excellence Monitor — Case Study | Meenakshi Verma</title>
        <meta
          name="description"
          content="Case study: Warranty Excellence Monitor dashboard for Mercedes-Benz — multi-market warranty analytics across 29 markets and 13 languages."
        />
      </Head>

      <main className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50">
        <div className="max-w-5xl mx-auto px-6 py-10">
          {/* Back link */}
          <Link href="/" legacyBehavior>
            <a className="text-sm text-zinc-500 hover:underline">
              ← Back to main portfolio
            </a>
          </Link>

          {/* HERO */}
          <header className="mt-4 rounded-3xl bg-gradient-to-br from-emerald-500 via-teal-600 to-sky-700 text-white p-8 shadow-lg">
            <h1 className="text-3xl md:text-4xl font-bold">
              Warranty Excellence Monitor
            </h1>
            <p className="mt-2 text-lg font-medium">
              Business Analyst — ATCS Inc (Mercedes-Benz)
            </p>

            <p className="mt-4 max-w-3xl text-sm md:text-base text-emerald-50/90">
              A web-based analytics tool that consolidated all warranty repairs for Mercedes-Benz
              vehicles across 29 markets and 13 languages. The dashboard provided KPIs, trends and
              drill-down views for damages, costs and repair behavior, enabling markets and central
              teams to make faster, data-driven warranty decisions.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <Pill>Warranty Analytics</Pill>
              <Pill>Mercedes-Benz</Pill>
              <Pill>Global Dashboard</Pill>
              <Pill>KPI Design</Pill>
              <Pill>Business Analysis</Pill>
            </div>
          </header>

          {/* MAIN GRID */}
          <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,2fr),minmax(0,1.2fr)]">
            {/* LEFT: OVERVIEW & DETAILS */}
            <section className="space-y-8">
              {/* Overview */}
              <div>
                <h2 className="text-lg font-semibold tracking-wide text-emerald-700 uppercase">
                  Project Overview
                </h2>
                <p className="mt-3 text-sm md:text-base text-zinc-700 dark:text-zinc-200">
                  Over almost three years, I worked as a Business Analyst on the{' '}
                  <strong>Warranty Excellence Monitor</strong>, a central analytics solution for
                  Mercedes-Benz. The tool brought together warranty repair data from{' '}
                  <strong>29 markets</strong> and <strong>13 languages</strong> into a single,
                  consistent dashboard. It gave product, service and quality teams the ability to
                  monitor damages, costs and repair behavior across models, markets and time.
                </p>
              </div>

              {/* Responsibilities */}
              <div>
                <h2 className="text-lg font-semibold tracking-wide text-emerald-700 uppercase">
                  My Responsibilities
                </h2>
                <div className="mt-4 rounded-2xl border border-zinc-100 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 p-4 shadow-sm">
                  <ul className="list-disc pl-5 text-sm text-zinc-700 dark:text-zinc-200 space-y-2">
                    <li>
                      Led <strong>requirements discovery</strong> with central and market
                      stakeholders to understand warranty reporting needs.
                    </li>
                    <li>
                      Defined <strong>KPI formulas</strong>, dimensions and filters (model, market,
                      repair type, time period, etc.) in partnership with data teams.
                    </li>
                    <li>
                      Created <strong>detailed user stories</strong> and acceptance criteria for
                      engineering and BI teams to implement dashboard features.
                    </li>
                    <li>
                      Worked closely with UI/UX and developers to iterate on dashboard layouts,
                      charts and drill-down behavior.
                    </li>
                    <li>
                      Planned and led <strong>UAT cycles</strong> for multiple releases, capturing
                      feedback from markets and ensuring data accuracy.
                    </li>
                    <li>
                      Conducted demos and training sessions to help markets adopt the dashboard as
                      their primary warranty reporting tool.
                    </li>
                  </ul>
                </div>
              </div>

              {/* KPIs & Analytics Design */}
              <div>
                <h2 className="text-lg font-semibold tracking-wide text-emerald-700 uppercase">
                  KPI &amp; Dashboard Design
                </h2>
                <p className="mt-3 text-sm text-zinc-700 dark:text-zinc-200">
                  The dashboard centered on six core KPIs that answered questions around how often
                  damages occur, how much they cost and how repairs vary across markets and models.
                </p>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border border-zinc-100 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 p-4 text-sm">
                    <h3 className="text-xs font-semibold text-emerald-700 uppercase">
                      Volume &amp; Frequency
                    </h3>
                    <ul className="mt-2 list-disc pl-5 space-y-1">
                      <li>Damages per Visit</li>
                      <li>Warranty Repair Count</li>
                      <li>Average Repair Time</li>
                    </ul>
                  </div>
                  <div className="rounded-2xl border border-zinc-100 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 p-4 text-sm">
                    <h3 className="text-xs font-semibold text-emerald-700 uppercase">
                      Cost &amp; Efficiency
                    </h3>
                    <ul className="mt-2 list-disc pl-5 space-y-1">
                      <li>Cost per Damage</li>
                      <li>Cost per Visit</li>
                      <li>Warranty Cost by Model / Market</li>
                    </ul>
                  </div>
                </div>

                <p className="mt-3 text-sm text-zinc-700 dark:text-zinc-200">
                  Each KPI had dedicated charts (trend lines, bar charts and breakdowns) with
                  filters for market, model series, repair type and time period. This helped teams
                  quickly identify outliers, trends and markets needing attention.
                </p>
              </div>
            </section>

            {/* RIGHT: SIDE PANELS */}
            <aside className="space-y-4">
              {/* Role Snapshot */}
              <div className="rounded-2xl border border-zinc-100 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 p-4 shadow-sm">
                <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                  Role Snapshot
                </h3>
                <dl className="mt-3 text-xs md:text-sm text-zinc-700 dark:text-zinc-200 space-y-1">
                  <div className="flex justify-between gap-4">
                    <dt className="font-medium">Title</dt>
                    <dd>Business Analyst</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="font-medium">Client</dt>
                    <dd>Mercedes-Benz</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="font-medium">Tenure</dt>
                    <dd>~3 years on the product</dd>
                  </div>
                </dl>
              </div>

              {/* Stakeholders */}
              <div className="rounded-2xl border border-zinc-100 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 p-4 shadow-sm">
                <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                  Stakeholder Landscape
                </h3>
                <p className="mt-2 text-xs md:text-sm text-zinc-700 dark:text-zinc-200">
                  Regular collaboration with:
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <Pill>Central Warranty Team</Pill>
                  <Pill>Market Service Heads</Pill>
                  <Pill>After-sales Operations</Pill>
                  <Pill>Data Engineering</Pill>
                  <Pill>BI / Reporting</Pill>
                  <Pill>UX &amp; Design</Pill>
                </div>
              </div>

              {/* How I worked */}
              <div className="rounded-2xl border border-zinc-100 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 p-4 shadow-sm">
                <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                  How I Worked
                </h3>
                <ul className="mt-2 list-disc pl-5 text-xs md:text-sm text-zinc-700 dark:text-zinc-200 space-y-1">
                  <li>Translating complex business needs into clear, testable stories.</li>
                  <li>Balancing central KPIs with individual market nuances.</li>
                  <li>Driving alignment on KPI definitions across stakeholders.</li>
                  <li>Using data samples and mockups to validate designs early.</li>
                </ul>
              </div>
            </aside>
          </div>

          {/* IMPACT */}
          <section className="mt-10">
            <h2 className="text-lg font-semibold tracking-wide text-emerald-700 uppercase">
              Impact Highlights
            </h2>

            <div className="mt-4 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-zinc-100 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 p-4 text-sm">
                <h3 className="text-xs font-semibold text-emerald-700 uppercase">
                  Single Source of Truth
                </h3>
                <p className="mt-1 text-zinc-700 dark:text-zinc-200">
                  Markets and central teams used one consistent dashboard for warranty performance.
                </p>
              </div>
              <div className="rounded-2xl border border-zinc-100 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 p-4 text-sm">
                <h3 className="text-xs font-semibold text-emerald-700 uppercase">
                  Faster Insights
                </h3>
                <p className="mt-1 text-zinc-700 dark:text-zinc-200">
                  Reduced manual data preparation time and enabled quicker investigation of trends.
                </p>
              </div>
              <div className="rounded-2xl border border-zinc-100 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 p-4 text-sm">
                <h3 className="text-xs font-semibold text-emerald-700 uppercase">
                  Better Decisions
                </h3>
                <p className="mt-1 text-zinc-700 dark:text-zinc-200">
                  Clear KPIs and visualizations helped identify high-cost areas and target actions.
                </p>
              </div>
            </div>
          </section>

          {/* GROWTH FOR ME */}
          <section className="mt-10 grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-lg font-semibold tracking-wide text-emerald-700 uppercase">
                Skills I Strengthened
              </h2>
              <div className="mt-3 flex flex-wrap gap-2">
                <Pill>Data Analysis</Pill>
                <Pill>KPI Design</Pill>
                <Pill>Requirements Gathering</Pill>
                <Pill>Stakeholder Communication</Pill>
                <Pill>Story Writing</Pill>
              </div>
            </div>
            <div>
              <h2 className="text-lg font-semibold tracking-wide text-emerald-700 uppercase">
                Tools &amp; Techniques
              </h2>
              <div className="mt-3 flex flex-wrap gap-2">
                <Pill>SQL / Data Exploration</Pill>
                <Pill>Excel &amp; Pivoting</Pill>
                <Pill>Dashboard Wireframing</Pill>
                <Pill>Agile Ceremonies</Pill>
              </div>
            </div>
          </section>

          {/* FOOTER ACTIONS */}
          <section className="mt-10 border-t pt-6 flex flex-wrap items-center justify-between gap-4">
            <div className="text-sm text-zinc-700 dark:text-zinc-200">
              Want the full picture?{' '}
              <a
                href="/Meenakshi_Resume_UPDATED.pdf"
                target="_blank"
                rel="noreferrer"
                className="text-emerald-700 hover:underline"
              >
                Download my resume
              </a>
              .
            </div>
            <Link href="/" legacyBehavior>
              <a className="text-sm text-emerald-700 hover:underline">
                Back to main portfolio →
              </a>
            </Link>
          </section>
        </div>
      </main>
    </>
  );
}
