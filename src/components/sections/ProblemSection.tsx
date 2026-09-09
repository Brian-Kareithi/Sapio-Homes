import Image from "next/image";

const pillars = [
  {
    id: "mission",
    title: "Our Mission",
    body: "To redefine urban living by creating thoughtfully designed, sustainable homes that combine luxury with functionality, making quality housing accessible to discerning homeowners and investors across East Africa.",
  },
  {
    id: "vision",
    title: "Our Vision",
    body: "To become East Africa's most trusted real estate partner, known for delivering exceptional properties that enhance lives and build communities for generations to come.",
  },
  {
    id: "manifesto",
    title: "Our Manifesto",
    body: "“We believe that home is more than just a place — it's where life happens. Every space we create is designed with intention, crafted with care, and delivered with integrity.”",
    italic: true,
  },
];

export default function ProblemSection() {
  return (
    <section id="about" className="scroll-mt-24 bg-app-bg py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-4">
              <span className="u-hairline" />
              <span className="u-eyebrow">Our Purpose</span>
            </div>
            <h2 className="mt-6 font-serif text-4xl font-light leading-[1.1] text-primary sm:text-5xl text-balance">
              The problem we exist <span className="italic text-amber-500">to solve</span>
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-secondary">
              Finding your dream home in Nairobi shouldn&apos;t feel like a compromise. We understand
              the challenges of navigating the real estate market — from hidden costs to unreliable
              developers and properties that don&apos;t deliver on their promises.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-secondary">
              That&apos;s why Sapio Homes was born. We curate, develop, and manage properties that
              combine luxury with practicality, with decades of combined experience in Nairobi real
              estate giving you confidence at every step.
            </p>

            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-app-border pt-10">
              {[
                ["98%", "Client Satisfaction"],
                ["1,300+", "Units Delivered"],
                ["6+", "Active Projects"],
              ].map(([value, label]) => (
                <div key={label}>
                  <div className="font-serif text-3xl font-light text-amber-500 sm:text-4xl">{value}</div>
                  <span className="mt-3 block h-px w-8 bg-amber-400/40" />
                  <div className="mt-3 text-[0.6875rem] uppercase tracking-[0.18em] text-muted">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative overflow-hidden rounded-2xl border border-app-border shadow-premium-lg">
              <Image
                src="https://ppkfgsakvcijmmhjwbcz.supabase.co/storage/v1/object/public/Photos/real%20estate%20four.jpg"
                alt="Modern apartment interior by Sapio Homes"
                width={640}
                height={800}
                className="h-full w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" aria-hidden="true" />
            </div>
          </div>
        </div>

        <div id="mission" className="mt-24 grid grid-cols-1 gap-6 md:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.id} id={p.id} className="u-card scroll-mt-24 p-10">
              <h3 className="mb-4 font-serif text-2xl font-light text-primary">{p.title}</h3>
              <p className={`leading-relaxed text-secondary ${p.italic ? "italic" : ""}`}>{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
