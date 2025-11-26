import Head from 'next/head';
import Link from 'next/link';

const Pill = ({ children }) => (
  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200">
    {children}
  </span>
);

export default function AmpChargeVerification() {
  return (
    <>
      <Head>
        <title>AMP Charge Verification Journey — Case Study | Meenakshi Verma</title>
        <meta
          name="description"
          content="Case study: Product Owner for the Authorizations Modernization Program (AMP) at American Express, modernizing high-risk Fraud and Credit journeys in IVR."
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

          {/* HERO / PROGRAM HEADER */}
          <header className="mt-4 rounded-3xl bg-gradient-to-br from-sky-500 via-blue-600 to-indigo-700 text-white p-8 shadow-lg">
            <h1 className="text-3xl md:text-4xl font-bold">Meenakshi Verma</h1>
            <p className="mt-2 text-lg font-medium">
              Product Owner — Authorization Modernization Program (AMP)
            </p>

            <p className="mt-4 max-w-3xl text-sm md:text-base text-sky-50/90">
              Leading modernization of high-risk Fraud and Credit journeys in IVR
              across US &amp; International markets. I owned fraud/charge
              verification and credit journeys in the IVR channel, improving
              decisioning speed, IVR containment and customer experience while
              aligning with AMEX&apos;s authorization strategy.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <Pill>Product Ownership</Pill>
              <Pill>IVR Servicing</Pill>
              <Pill>Fraud &amp; Credit Risk</Pill>
              <Pill>Global Rollout</Pill>
              <Pill>Modernization</Pill>
            </div>
          </header>

          {/* MAIN GRID: CONTENT + SIDE PANEL */}
          <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,2fr),minmax(0,1.2fr)]">
            {/* LEFT: PROGRAM OVERVIEW & DELIVERABLES */}
            <section className="space-y-8">
              {/* Program Overview */}
              <div>
                <h2 className="text-lg font-semibold tracking-wide text-sky-700 uppercase">
                  Program Overview
                </h2>
                <p className="mt-3 text-sm md:text-base text-zinc-700 dark:text-zinc-200">
                  As a Product Owner in the Authorizations Modernization Program
                  (AMP), I led the uplift of high-risk{' '}
                  <strong>Fraud/Charge Verification</strong> and{' '}
                  <strong>Credit</strong> journeys in the IVR channel for both US
                  and International markets. I owned discovery-to-go-live
                  delivery, ensuring that servicing journeys were secure,
                  compliant, scalable and aligned with modernized authorization
                  capabilities.
                </p>
              </div>

              {/* Key Deliverables */}
              <div>
                <h2 className="text-lg font-semibold tracking-wide text-sky-700 uppercase">
                  Key Deliverables
                </h2>

                <div className="mt-4 space-y-6">
                  {/* Fraud & Charge Verification */}
                  <div className="rounded-2xl border border-zinc-100 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 p-4 shadow-sm">
                    <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                      Fraud &amp; Charge Verification — US &amp; International
                    </h3>
                    <ul className="mt-2 list-disc pl-5 text-sm text-zinc-700 dark:text-zinc-200 space-y-1">
                      <li>
                        Delivered inbound &amp; outbound IVR journeys from
                        discovery through go-live for all markets.
                      </li>
                      <li>
                        Aligned IVR flows with updated fraud risk logic and
                        verification strategies.
                      </li>
                      <li>
                        Reduced reliance on agent transfers by enabling secure
                        self-service verification.
                      </li>
                    </ul>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <Pill>Fraud Servicing</Pill>
                      <Pill>Charge Verification</Pill>
                      <Pill>Inbound &amp; Outbound</Pill>
                    </div>
                  </div>

                  {/* Credit Risk Journeys */}
                  <div className="rounded-2xl border border-zinc-100 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 p-4 shadow-sm">
                    <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                      Credit Risk Journeys — Global Inbound &amp; Outbound
                    </h3>
                    <ul className="mt-2 list-disc pl-5 text-sm text-zinc-700 dark:text-zinc-200 space-y-1">
                      <li>
                        Delivered credit servicing journeys across US &amp;
                        International markets.
                      </li>
                      <li>
                        Ramped traffic to near 100% IVR for supported flows
                        through phased rollout.
                      </li>
                      <li>
                        Reduced manual intervention for common credit scenarios
                        via improved routing &amp; logic.
                      </li>
                    </ul>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <Pill>Credit Servicing</Pill>
                      <Pill>Traffic Ramp to IVR</Pill>
                      <Pill>Global Markets</Pill>
                    </div>
                  </div>

                  {/* Scalable Rollout Framework */}
                  <div className="rounded-2xl border border-zinc-100 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 p-4 shadow-sm">
                    <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                      Scalable Global Rollout Framework
                    </h3>
                    <ul className="mt-2 list-disc pl-5 text-sm text-zinc-700 dark:text-zinc-200 space-y-1">
                      <li>
                        Created reusable documentation, templates and readiness
                        criteria to accelerate market activation.
                      </li>
                      <li>
                        Standardized readiness checks and go-live playbooks for
                        Fraud &amp; Credit journeys.
                      </li>
                    </ul>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <Pill>Reusable Frameworks</Pill>
                      <Pill>Market Readiness</Pill>
                      <Pill>Go-live Governance</Pill>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* RIGHT: ROLE SNAPSHOT & SIDE PANELS */}
            <aside className="space-y-4">
              {/* Role Snapshot */}
              <div className="rounded-2xl border border-zinc-100 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 p-4 shadow-sm">
                <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                  Role Snapshot
                </h3>
                <dl className="mt-3 text-xs md:text-sm text-zinc-700 dark:text-zinc-200 space-y-1">
                  <div className="flex justify-between gap-4">
                    <dt className="font-medium">Title</dt>
                    <dd>Product Owner</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="font-medium">Program</dt>
                    <dd>Authorizations Modernization Program (AMP)</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="font-medium">Channel</dt>
                    <dd>IVR Servicing (Fraud &amp; Credit)</dd>
                  </div>
                </dl>
              </div>

              {/* Leadership & Collaboration */}
              <div className="rounded-2xl border border-zinc-100 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 p-4 shadow-sm">
                <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                  Leadership &amp; Collaboration
                </h3>
                <ul className="mt-2 list-disc pl-5 text-xs md:text-sm text-zinc-700 dark:text-zinc-200 space-y-1">
                  <li>
                    Owned backlog prioritization and sprint planning for IVR
                    Fraud &amp; Credit journeys.
                  </li>
                  <li>
                    Led refinement, sprint ceremonies and stakeholder showcases.
                  </li>
                  <li>
                    Partnered with high-risk journey owners, fraud strategy, IVR
                    tech &amp; operations teams.
                  </li>
                </ul>
              </div>

              {/* Stakeholders */}
              <div className="rounded-2xl border border-zinc-100 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 p-4 shadow-sm">
                <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                  Stakeholder Landscape
                </h3>
                <p className="mt-2 text-xs md:text-sm text-zinc-700 dark:text-zinc-200">
                  Regular collaboration across:
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <Pill>IVR Tech</Pill>
                  <Pill>Fraud Strategy</Pill>
                  <Pill>Credit Risk</Pill>
                  <Pill>Global Servicing</Pill>
                  <Pill>Operations</Pill>
                  <Pill>Dialer / ISP</Pill>
                  <Pill>Program Office</Pill>
                </div>
              </div>

              {/* Challenges & Response */}
              <div className="rounded-2xl border border-zinc-100 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 p-4 shadow-sm">
                <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                  Challenges &amp; How I Responded
                </h3>
                <ul className="mt-2 list-disc pl-5 text-xs md:text-sm text-zinc-700 dark:text-zinc-200 space-y-1">
                  <li>
                    <strong>High-risk journeys:</strong> Structured deeper
                    requirement detailing and coordinated approvals.
                  </li>
                  <li>
                    <strong>Platform constraints:</strong> Partnered with IVR
                    Tech to refine flows and optimize routing.
                  </li>
                  <li>
                    <strong>Compressed timelines:</strong> Reprioritized scope
                    and aligned teams around phased delivery.
                  </li>
                  <li>
                    <strong>Conflicting priorities:</strong> Used transparent
                    trade-offs and data-backed recommendations.
                  </li>
                </ul>
              </div>
            </aside>
          </div>

          {/* IMPACT HIGHLIGHTS */}
          <section className="mt-10">
            <h2 className="text-lg font-semibold tracking-wide text-sky-700 uppercase">
              Impact Highlights
            </h2>

            <div className="mt-4 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-zinc-100 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 p-4 text-sm">
                <h3 className="text-xs font-semibold text-sky-700 uppercase">
                  IVR Containment
                </h3>
                <p className="mt-1 text-zinc-700 dark:text-zinc-200">
                  More customers fully served in IVR with fewer handoffs to
                  agents.
                </p>
              </div>
              <div className="rounded-2xl border border-zinc-100 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 p-4 text-sm">
                <h3 className="text-xs font-semibold text-sky-700 uppercase">
                  Risk Outcomes
                </h3>
                <p className="mt-1 text-zinc-700 dark:text-zinc-200">
                  Improved fraud detection with fewer false negatives and false
                  declines.
                </p>
              </div>
              <div className="rounded-2xl border border-zinc-100 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 p-4 text-sm">
                <h3 className="text-xs font-semibold text-sky-700 uppercase">
                  Operational Efficiency
                </h3>
                <p className="mt-1 text-zinc-700 dark:text-zinc-200">
                  Reduced agent transfers and manual verification effort.
                </p>
              </div>
              <div className="rounded-2xl border border-zinc-100 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 p-4 text-sm">
                <h3 className="text-xs font-semibold text-sky-700 uppercase">
                  Customer Experience
                </h3>
                <p className="mt-1 text-zinc-700 dark:text-zinc-200">
                  Streamlined flows, reduced friction and clearer IVR
                  experiences.
                </p>
              </div>
              <div className="rounded-2xl border border-zinc-100 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 p-4 text-sm">
                <h3 className="text-xs font-semibold text-sky-700 uppercase">
                  Decision Speed
                </h3>
                <p className="mt-1 text-zinc-700 dark:text-zinc-200">
                  Faster Fraud &amp; Credit decisions through modernized
                  journeys.
                </p>
              </div>
              <div className="rounded-2xl border border-zinc-100 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 p-4 text-sm">
                <h3 className="text-xs font-semibold text-sky-700 uppercase">
                  Global Scale
                </h3>
                <p className="mt-1 text-zinc-700 dark:text-zinc-200">
                  Enabled rapid rollout across markets with common patterns and
                  controls.
                </p>
              </div>
            </div>
          </section>

          {/* TOOLS & STRENGTHS */}
          <section className="mt-10 grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-lg font-semibold tracking-wide text-sky-700 uppercase">
                Tools &amp; Platforms
              </h2>
              <div className="mt-3 flex flex-wrap gap-2">
                <Pill>Confluence</Pill>
                <Pill>JIRA</Pill>
                <Pill>Tableau</Pill>
                <Pill>Excel</Pill>
                <Pill>Swagger / API Docs</Pill>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-semibold tracking-wide text-sky-700 uppercase">
                Strengths &amp; Focus Areas
              </h2>
              <div className="mt-3 flex flex-wrap gap-2">
                <Pill>Customer Journey Design</Pill>
                <Pill>Fraud &amp; Credit Risk</Pill>
                <Pill>IVR Modernization</Pill>
                <Pill>Global Rollouts</Pill>
                <Pill>Cross-functional Leadership</Pill>
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
                className="text-indigo-600 hover:underline"
              >
                Download my resume
              </a>
              .
            </div>
            <Link href="/" legacyBehavior>
              <a className="text-sm text-indigo-600 hover:underline">
                Back to main portfolio →
              </a>
            </Link>
          </section>
        </div>
      </main>
    </>
  );
}
