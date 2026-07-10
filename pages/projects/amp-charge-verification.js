// pages/projects/amp-charge-verification.js
import Head from "next/head";
import Link from "next/link";

const Pill = ({ children, dark }) => (
  <span
    className={
      dark
        ? "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white"
        : "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-stone-100 text-stone-700"
    }
  >
    {children}
  </span>
);

const SectionLabel = ({ children }) => (
  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-800">{children}</p>
);

export default function AmpChargeVerification() {
  return (
    <>
      <Head>
        <title>AMP Charge Verification — Case Study | Meenakshi Verma</title>
        <meta
          name="description"
          content="Case study: Product Owner for the Authorizations Modernization Program (AMP) at American Express — modernizing high-risk Fraud and Credit journeys in IVR across US and International markets."
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <style>{`
          html { font-family: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial; }
          .font-display { font-family: Fraunces, Georgia, serif; }
        `}</style>
      </Head>

      <main className="min-h-screen bg-stone-50 text-stone-900">
        <div className="max-w-4xl mx-auto px-6 py-10">
          {/* Back link */}
          <Link href="/" legacyBehavior>
            <a className="text-sm text-stone-500 hover:text-teal-900">← Back to portfolio</a>
          </Link>

          {/* HERO */}
          <header className="mt-5 rounded-2xl bg-gradient-to-b from-teal-950 to-teal-900 text-white p-8 md:p-12 shadow-lg">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-300">
              Case study · American Express · 2022–2026
            </p>
            <h1 className="font-display mt-3 text-3xl md:text-4xl font-bold">
              AMP — Charge Verification Journey
            </h1>
            <p className="mt-3 text-lg text-teal-100">
              Modernizing high-risk Fraud &amp; Credit journeys in the IVR channel
            </p>
            <p className="mt-4 max-w-2xl text-teal-100/80 leading-relaxed">
              As Product Owner in the Authorizations Modernization Program (AMP), I owned the
              fraud/charge-verification and credit journeys in IVR for US and International markets
              — from discovery through go-live — improving decisioning speed, IVR containment and
              customer experience while keeping every change compliant with Amex&rsquo;s
              authorization strategy.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <Pill dark>Product Ownership</Pill>
              <Pill dark>IVR Servicing</Pill>
              <Pill dark>Fraud &amp; Credit Risk</Pill>
              <Pill dark>Global Rollout</Pill>
            </div>
          </header>

          {/* AT A GLANCE */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 border-y border-stone-200 divide-x divide-stone-200 text-center">
            {[
              ["4", "APIs uplifted to a new system of record"],
              ["~100%", "IVR ramp for supported flows"],
              ["US + Intl", "Markets covered"],
              ["7+", "Stakeholder teams aligned"],
            ].map(([value, label]) => (
              <div key={label} className="py-5 px-3">
                <div className="font-display text-xl md:text-2xl font-semibold text-teal-900">{value}</div>
                <div className="mt-1 text-xs uppercase tracking-wide text-stone-500">{label}</div>
              </div>
            ))}
          </div>

          {/* THE PROBLEM */}
          <section className="mt-12">
            <SectionLabel>Context</SectionLabel>
            <h2 className="font-display mt-2 text-2xl font-semibold">The problem</h2>
            <p className="mt-4 text-stone-700 leading-relaxed">
              When a transaction looks suspicious, a card member needs to verify it — fast. But
              fraud and credit journeys in the IVR channel were built on legacy authorization
              systems: verification often required a transfer to an agent, manual reviews consumed
              operations capacity, and the underlying APIs pointed at a system of record that the
              enterprise was moving away from. Every unnecessary agent transfer meant longer waits
              for customers and higher servicing cost — on some of the most sensitive, highest-risk
              call types Amex handles.
            </p>
            <p className="mt-4 text-stone-700 leading-relaxed">
              The Authorizations Modernization Program (AMP) existed to fix this at the platform
              level. My slice of it: make fraud/charge verification and credit journeys work
              natively on the modernized stack, and let customers safely self-serve in IVR instead
              of waiting for an agent.
            </p>
          </section>

          {/* MY ROLE */}
          <section className="mt-12">
            <SectionLabel>My role</SectionLabel>
            <h2 className="font-display mt-2 text-2xl font-semibold">What I owned</h2>
            <ul className="mt-4 space-y-3 text-stone-700 leading-relaxed list-disc pl-5">
              <li>
                End-to-end delivery of inbound &amp; outbound IVR journeys for fraud/charge
                verification and credit — discovery, requirements, build, and go-live across US and
                International markets.
              </li>
              <li>
                Backlog prioritization, sprint planning, refinement and stakeholder showcases for
                the IVR Fraud &amp; Credit workstream.
              </li>
              <li>
                Alignment across seven-plus partner teams: IVR tech, fraud strategy, credit risk,
                global servicing, operations, dialer/ISP and the program office.
              </li>
            </ul>
          </section>

          {/* WHAT I DELIVERED */}
          <section className="mt-12">
            <SectionLabel>Delivery</SectionLabel>
            <h2 className="font-display mt-2 text-2xl font-semibold">What was delivered</h2>
            <div className="mt-6 space-y-4">
              <div className="bg-white rounded-2xl p-6 border border-stone-200/80 shadow-sm">
                <h3 className="font-semibold text-teal-900">API uplift to the new system of record</h3>
                <p className="mt-2 text-stone-700 leading-relaxed">
                  Uplifted 4 APIs powering charge verification onto the modernized authorization
                  platform — decoupling the IVR journeys from legacy infrastructure and enabling
                  faster, more reliable fraud and credit decisions.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-stone-200/80 shadow-sm">
                <h3 className="font-semibold text-teal-900">Fraud self-service in IVR</h3>
                <p className="mt-2 text-stone-700 leading-relaxed">
                  Enabled secure self-service charge verification, aligned with updated fraud-risk
                  logic and verification strategies — so customers could confirm or dispute
                  transactions without an agent, reducing transfers and manual reviews.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-stone-200/80 shadow-sm">
                <h3 className="font-semibold text-teal-900">Credit journeys ramped to IVR</h3>
                <p className="mt-2 text-stone-700 leading-relaxed">
                  Delivered global inbound &amp; outbound credit servicing journeys and ramped
                  traffic to near-100% IVR for supported flows through a phased, market-by-market
                  rollout.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-stone-200/80 shadow-sm">
                <h3 className="font-semibold text-teal-900">A reusable rollout framework</h3>
                <p className="mt-2 text-stone-700 leading-relaxed">
                  Created readiness criteria, templates and go-live playbooks that turned each new
                  market activation from a bespoke project into a repeatable process.
                </p>
              </div>
            </div>
          </section>

          {/* THE HARD PARTS */}
          <section className="mt-12">
            <SectionLabel>Challenges</SectionLabel>
            <h2 className="font-display mt-2 text-2xl font-semibold">The hard parts</h2>
            <p className="mt-4 text-stone-700 leading-relaxed">
              Fraud and credit are the journeys where a product mistake costs real money — a flow
              that verifies too loosely lets fraud through; one that verifies too strictly declines
              genuine customers. Working in that space shaped how I ran the workstream:
            </p>
            <div className="mt-6 space-y-4">
              {[
                [
                  "High-risk journeys meant zero room for ambiguity",
                  "Requirements for fraud flows can't be 'figured out in sprint.' I structured deeper requirement detailing up front and coordinated formal approvals with fraud strategy and risk partners before build — slower to start, far fewer late-stage surprises.",
                ],
                [
                  "Platform constraints vs. ideal journeys",
                  "The IVR platform couldn't always support the flow we designed on paper. I partnered directly with IVR tech to refine flows and optimize routing — trading some elegance for journeys that actually shipped.",
                ],
                [
                  "Compressed timelines",
                  "When delivery windows shrank, I re-cut scope into phases and aligned every team around what shipped first and why — protecting the go-live rather than the wishlist.",
                ],
                [
                  "Conflicting stakeholder priorities",
                  "Fraud strategy, operations and servicing don't always want the same thing. I kept trade-offs transparent and backed recommendations with data, which made decisions faster and less political.",
                ],
              ].map(([title, body]) => (
                <div key={title} className="bg-white rounded-2xl p-6 border border-stone-200/80 shadow-sm">
                  <h3 className="font-semibold text-stone-900">{title}</h3>
                  <p className="mt-2 text-stone-700 leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* IMPACT */}
          <section className="mt-12">
            <SectionLabel>Impact</SectionLabel>
            <h2 className="font-display mt-2 text-2xl font-semibold">What changed</h2>
            <ul className="mt-4 space-y-3 text-stone-700 leading-relaxed list-disc pl-5">
              <li>
                <strong>More customers fully served in IVR</strong> — supported flows ramped to
                near-100% IVR traffic, with fewer handoffs to agents.
              </li>
              <li>
                <strong>Lower operational load</strong> — secure self-service verification reduced
                agent transfers and manual fraud reviews.
              </li>
              <li>
                <strong>Better risk outcomes</strong> — journeys aligned to updated fraud logic
                improved detection while reducing false declines for genuine customers.
              </li>
              <li>
                <strong>Faster decisions</strong> — modernized APIs shortened the path from call to
                fraud/credit decision.
              </li>
              <li>
                <strong>Scale by design</strong> — the rollout framework let new markets activate
                with common patterns and controls instead of one-off builds.
              </li>
            </ul>
          </section>

          {/* TOOLS */}
          <section className="mt-12">
            <SectionLabel>Toolkit</SectionLabel>
            <h2 className="font-display mt-2 text-2xl font-semibold">Tools &amp; platforms</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              <Pill>JIRA</Pill>
              <Pill>Confluence</Pill>
              <Pill>Swagger / API Docs</Pill>
              <Pill>Tableau</Pill>
              <Pill>Excel</Pill>
            </div>
          </section>

          {/* FOOTER NAV */}
          <div className="mt-14 pt-8 border-t border-stone-200 flex justify-between text-sm">
            <Link href="/" legacyBehavior>
              <a className="text-stone-500 hover:text-teal-900">← Back to portfolio</a>
            </Link>
            <Link href="/projects/warranty-excellence" legacyBehavior>
              <a className="font-medium text-teal-800 hover:text-teal-950">
                Next: Warranty Excellence Monitor →
              </a>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
