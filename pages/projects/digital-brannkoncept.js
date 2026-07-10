// pages/projects/digital-brannkoncept.js
import Head from "next/head";
import Link from "next/link";

const Pill = ({ children }) => (
  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white">
    {children}
  </span>
);

const SectionLabel = ({ children }) => (
  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-800">{children}</p>
);

export default function DigitalBrannkoncept() {
  return (
    <>
      <Head>
        <title>Digital Brannkoncept — Case Study | Meenakshi Verma</title>
        <meta
          name="description"
          content="Case study: Digital Brannkoncept at Ramboll — a digital fire-safety assessment tool that converts building design inputs into a fire hazard score, rolled out across Norway, Sweden and the US."
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
              Case study · Ramboll · 2021
            </p>
            <h1 className="font-display mt-3 text-3xl md:text-4xl font-bold">Digital Brannkoncept</h1>
            <p className="mt-3 text-lg text-teal-100">
              Turning fire-safety engineering expertise into a digital assessment tool
            </p>
            <p className="mt-4 max-w-2xl text-teal-100/80 leading-relaxed">
              A guided digital questionnaire that captures a building&rsquo;s design and construction
              characteristics — floors, walls, stairways, fire extinguishers and more — and converts
              them into a structured fire hazard score, giving engineers and clients a consistent,
              repeatable view of fire risk. Rolled out across Norway, Sweden and the US.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <Pill>Product Development</Pill>
              <Pill>Digitalization</Pill>
              <Pill>Fire Safety Engineering</Pill>
              <Pill>Multi-market Rollout</Pill>
            </div>
          </header>

          {/* CONTEXT */}
          <section className="mt-12">
            <SectionLabel>Context</SectionLabel>
            <h2 className="font-display mt-2 text-2xl font-semibold">The problem</h2>
            <p className="mt-4 text-stone-700 leading-relaxed">
              Fire-safety assessments at Ramboll traditionally relied on manual, expert-driven
              evaluation. Each assessment depended heavily on the individual engineer&rsquo;s
              process, making it time-consuming to produce and difficult to standardize across
              projects and markets. With operations spanning multiple countries — each with its own
              building regulations — the firm needed a way to make fire-risk evaluation faster, more
              consistent, and scalable without diluting engineering rigor.
            </p>
          </section>

          {/* SOLUTION */}
          <section className="mt-12">
            <SectionLabel>Solution</SectionLabel>
            <h2 className="font-display mt-2 text-2xl font-semibold">What we built</h2>
            <p className="mt-4 text-stone-700 leading-relaxed">
              Digital Brannkoncept guided users through a structured set of questions about a
              building&rsquo;s design and construction — number of floors, wall composition,
              stairways, fire extinguisher coverage, and other risk-relevant characteristics. The
              application then computed a fire hazard score for the building, translating dozens of
              individual inputs into a single, comparable measure of risk.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {[
                ["Structured intake", "A guided questionnaire replaced free-form assessment, ensuring no risk factor was overlooked."],
                ["Scoring engine", "Building characteristics were weighted and combined into a standardized fire hazard score."],
                ["Multi-market design", "Built to serve assessments in Norway, Sweden and the US, accounting for differing regulatory contexts."],
              ].map(([title, body]) => (
                <div key={title} className="bg-white rounded-2xl p-5 border border-stone-200/80 shadow-sm">
                  <div className="font-semibold text-teal-900">{title}</div>
                  <p className="mt-2 text-sm text-stone-600 leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* MY ROLE */}
          <section className="mt-12">
            <SectionLabel>My role</SectionLabel>
            <h2 className="font-display mt-2 text-2xl font-semibold">What I did</h2>
            {/* TODO(Meenakshi): replace with your actual responsibilities — see questions from Claude */}
            <ul className="mt-4 space-y-3 text-stone-700 leading-relaxed list-disc pl-5">
              <li>[Placeholder: e.g. gathered requirements from fire-safety engineers and translated domain expertise into the question set and scoring logic]</li>
              <li>[Placeholder: e.g. designed UX flows / wireframes for the questionnaire experience]</li>
              <li>[Placeholder: e.g. coordinated rollout and adoption across the Norway, Sweden and US teams]</li>
            </ul>
          </section>

          {/* IMPACT */}
          <section className="mt-12">
            <SectionLabel>Impact</SectionLabel>
            <h2 className="font-display mt-2 text-2xl font-semibold">What changed</h2>
            {/* TODO(Meenakshi): add real or approximate figures */}
            <ul className="mt-4 space-y-3 text-stone-700 leading-relaxed list-disc pl-5">
              <li>[Placeholder: e.g. reduced assessment time from X days to Y hours]</li>
              <li>[Placeholder: e.g. adopted by N engineers / used on M projects across three markets]</li>
              <li>Standardized fire-risk evaluation across markets, replacing ad-hoc manual assessment with a consistent, repeatable process.</li>
            </ul>
          </section>

          {/* FOOTER NAV */}
          <div className="mt-14 pt-8 border-t border-stone-200 flex justify-between text-sm">
            <Link href="/" legacyBehavior>
              <a className="text-stone-500 hover:text-teal-900">← Back to portfolio</a>
            </Link>
            <Link href="/projects/amp-charge-verification" legacyBehavior>
              <a className="font-medium text-teal-800 hover:text-teal-950">Next: AMP Charge Verification →</a>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
