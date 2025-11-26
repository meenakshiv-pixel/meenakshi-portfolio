import Head from 'next/head'
import Link from 'next/link'

export default function WarrantyExcellence() {
  return (
    <>
      <Head>
        <title>Warranty Excellence Monitor — Case Study | Meenakshi Verma</title>
        <meta name="description" content="Case study: Warranty Excellence Monitor, a multi-market Mercedes-Benz dashboard with KPIs and charts." />
      </Head>

      <main className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50">
        <div className="max-w-4xl mx-auto p-6">
          <Link href="/" className="text-sm text-zinc-500 hover:underline">← Back to Portfolio</Link>

          <h1 className="text-3xl font-bold mt-6">Warranty Excellence Monitor</h1>
          <p className="text-zinc-600 mt-2">Business Analyst · ATCS · 2018–2021</p>

          <section className="mt-8">
            <h2 className="text-xl font-semibold">Overview</h2>
            <p className="mt-2 text-zinc-700">
              A web-based dashboard for Mercedes-Benz warranty repairs across 29 markets and 13 languages.
              Included KPI tiles, charts, drill-downs and exportable reports. I worked as a Business Analyst 
              for nearly 3 years, handling stakeholder requirements, KPI definitions, user stories and UAT.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold">My Role</h2>
            <ul className="list-disc pl-6 mt-3 text-zinc-700 space-y-2">
              <li>Requirements gathering from global stakeholders</li>
              <li>KPI definition (Damages/Visit, Cost/Damage, Cost/Visit etc.)</li>
              <li>User story creation and acceptance criteria</li>
              <li>Wireframes and dashboard workflows</li>
              <li>Coordinated with data & engineering to validate ETL and dashboard outputs</li>
              <li>Led UAT phases and implemented feedback</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold">Impact</h2>
            <p className="

cat > pages/projects/warranty-excellence.js << 'EOF'
import Head from 'next/head'
import Link from 'next/link'

export default function WarrantyExcellence() {
  return (
    <>
      <Head>
        <title>Warranty Excellence Monitor — Case Study | Meenakshi Verma</title>
        <meta name="description" content="Case study: Warranty Excellence Monitor, a multi-market Mercedes-Benz dashboard with KPIs and charts." />
      </Head>

      <main className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50">
        <div className="max-w-4xl mx-auto p-6">
          <Link href="/" className="text-sm text-zinc-500 hover:underline">← Back to Portfolio</Link>

          <h1 className="text-3xl font-bold mt-6">Warranty Excellence Monitor</h1>
          <p className="text-zinc-600 mt-2">Business Analyst · ATCS · 2018–2021</p>

          <section className="mt-8">
            <h2 className="text-xl font-semibold">Overview</h2>
            <p className="mt-2 text-zinc-700">
              A web-based dashboard for Mercedes-Benz warranty repairs across 29 markets and 13 languages.
              Included KPI tiles, charts, drill-downs and exportable reports. I worked as a Business Analyst 
              for nearly 3 years, handling stakeholder requirements, KPI definitions, user stories and UAT.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold">My Role</h2>
            <ul className="list-disc pl-6 mt-3 text-zinc-700 space-y-2">
              <li>Requirements gathering from global stakeholders</li>
              <li>KPI definition (Damages/Visit, Cost/Damage, Cost/Visit etc.)</li>
              <li>User story creation and acceptance criteria</li>
              <li>Wireframes and dashboard workflows</li>
              <li>Coordinated with data & engineering to validate ETL and dashboard outputs</li>
              <li>Led UAT phases and implemented feedback</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold">Impact</h2>
            <p className="mt-2 text-zinc-700">
              Standardized warranty KPIs across 29 markets, improved reporting speed, enabled data-driven decisions 
              and eliminated manual consolidation efforts.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold">Key KPIs</h2>
            <ul className="list-disc pl-6 mt-3 text-zinc-700 space-y-1">
              <li>Damages per Visit</li>
              <li>Cost per Damage</li>
              <li>Cost per Visit</li>
              <li>Warranty Repair Count</li>
              <li>Average Repair Time</li>
              <li>Warranty Cost by Model</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold">Resume</h2>
            <a href="/Meenakshi_Resume_UPDATED.pdf" target="_blank" className="text-indigo-600 hover:underline">
              Download My Resume
            </a>
          </section>
        </div>
      </main>
    </>
  );
}
