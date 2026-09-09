import Link from "next/link";

interface Section {
  heading: string;
  body: string[];
}

interface LegalPageProps {
  title: string;
  updated: string;
  intro: string;
  sections: Section[];
}

export default function LegalPage({ title, updated, intro, sections }: LegalPageProps) {
  return (
    <div className="min-h-screen pt-20">
      <div className="mx-auto max-w-3xl px-6 py-16 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-amber-500"
        >
          &larr; Back to Home
        </Link>

        <div className="mt-8 flex items-center gap-4">
          <span className="u-hairline" />
          <span className="u-eyebrow">Legal</span>
        </div>
        <h1 className="mt-6 font-serif text-4xl font-light text-primary sm:text-5xl">{title}</h1>
        <p className="mt-3 text-sm text-muted">Last updated: {updated}</p>
        <p className="mt-6 text-lg leading-relaxed text-secondary">{intro}</p>

        <div className="mt-12 space-y-10">
          {sections.map((section, i) => (
            <section key={section.heading}>
              <h2 className="font-serif text-2xl font-light text-primary">
                <span className="mr-3 text-amber-500">{String(i + 1).padStart(2, "0")}</span>
                {section.heading}
              </h2>
              <div className="mt-4 space-y-4">
                {section.body.map((p, j) => (
                  <p key={j} className="leading-relaxed text-secondary">{p}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-app-border bg-app-secondary p-8">
          <h3 className="font-serif text-xl font-light text-primary">Questions?</h3>
          <p className="mt-2 text-secondary">
            Contact us at{" "}
            <a href="mailto:info@sapiohome.com" className="text-amber-500 hover:underline">
              info@sapiohome.com
            </a>{" "}
            or call +254 113 556 551.
          </p>
        </div>
      </div>
    </div>
  );
}
