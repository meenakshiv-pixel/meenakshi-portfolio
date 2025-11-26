import Head from 'next/head';
import Link from 'next/link';

export default function WarrantyExcellence() {
  return (
    <>
      <Head>
        <title>Warranty Excellence Monitor — Case Study | Meenakshi Verma</title>
        <meta
          name="description"
          content="Case study: Warranty Excellence Monitor, a multi-market Mercedes-Benz dashboard for warranty KPIs and insights."
        />
      </Head>

      <main className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <Link href="/" legacyBehavior>
            <a className="text-sm text-zinc-500 hover:underline">← Back to Portfolio</a>
          </Link>

          <h1 className="mt-6 text-3xl font-bold">
            Warranty Excellence Monitor
          </h1>
          <p className="mt-2 text-zinc-600">
            Business Analyst · ATCS · 2018–2021
          </p>

          <section className="mt-8">
            <h2 className="text-xl font-semibold">Overview</h2>
            <p className="mt-2 text-zinc-700 dark:text-zinc-200">
              Warranty Excellence Monitor is a web-based dashboard for Mercedes-Benz
              warranty repairs across 29 markets and 13 languages. It brings together
              KPIs, charts and drill-downs so stakeholders can monitor warranty cost,
              volume and repair performance in a single place.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold">My Role</h2>
            <ul className="mt-3 list-disc pl-6 text-zinc-700 dark:text-zinc-200 space-y-1">
              <li>Led requirements gathering with global stakeholders.</li>
              <li>Defined KPI formulas (Damages/Visit, Cost/Damage, Cost/Visit, etc.).</li>
              <li>Created detailed user stories and acceptance criteria for the dev team.</li>
              <li>Collaborated with data & engineering teams to validate dashboard outputs.</li>
              <li>Supported UAT cycles and incorporated feedback across multiple releases.</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold">Key KPIs & Analytics</h2>
            <ul className="mt-3 list-disc pl-6 text-zinc-700 dark:text-zinc-200 space-y-1">
              <li>Damages per Visit</li>
              <li>Cost per Damage</li>
              <li>Cost per Visit</li>
              <li>Warranty Repair Count</li>
              <li>Average Repair Time</li>
              <li>Warranty Cost by Model / Market</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold">Impact</h2>
            <p className="mt-2 text-zinc-700 dark:text-zinc-200">
              The dashboard standardised warranty KPIs across 29 markets, reduced
              manual effort needed for reporting, and enabled faster, data-driven
              decisions on warranty costs and product quality.
            </p>
          </section>

          <section className="mt-10 border-t pt-6">
            <h2 className="text-lg font-semibold">Resume</h2>
            <a
              href="/Meenakshi_Resume_UPDATED.pdf"
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-block text-indigo-600 hover:underline"
            >
              Download my resume (PDF)
            </a>
          </section>
        </div>
      </main>
    </>
  );
}
