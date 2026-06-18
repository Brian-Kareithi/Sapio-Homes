import Image from "next/image";

export default function ProblemSection() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-app-bg">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-amber-400" />
              <span className="text-xs uppercase tracking-[0.25em] text-amber-500">OUR PURPOSE</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl font-light text-primary leading-tight mb-8">
              The Problem We Exist
              <span className="text-amber-500">
                {" "}to Solve
              </span>
            </h2>
            <p className="text-secondary text-lg mb-8 leading-relaxed">
              Finding your dream home in Nairobi shouldn&apos;t feel like a compromise. We understand
              the challenges of navigating the real estate market — from hidden costs to unreliable
              developers and properties that don&apos;t deliver on their promises.
            </p>
            <p className="text-secondary text-lg mb-8 leading-relaxed">
              That&apos;s why Sapio Homes was born. We curate, develop, and manage properties that
              combine luxury with practicality, ensuring every detail is thoughtfully designed
              for modern living. Our team brings decades of combined experience in Nairobi real estate,
              giving you confidence at every step.
            </p>
            <div className="grid grid-cols-3 gap-8 mt-10">
              <div className="text-center">
                <div className="font-serif text-4xl font-light text-amber-500">98%</div>
                <span className="block h-px w-8 bg-amber-400/50 my-3 mx-auto" />
                <div className="text-xs uppercase tracking-widest text-muted">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="font-serif text-4xl font-light text-amber-500">1,300+</div>
                <span className="block h-px w-8 bg-amber-400/50 my-3 mx-auto" />
                <div className="text-xs uppercase tracking-widest text-muted">Units Delivered</div>
              </div>
              <div className="text-center">
                <div className="font-serif text-4xl font-light text-amber-500">6+</div>
                <span className="block h-px w-8 bg-amber-400/50 my-3 mx-auto" />
                <div className="text-xs uppercase tracking-widest text-muted">Active Projects</div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="https://ppkfgsakvcijmmhjwbcz.supabase.co/storage/v1/object/public/Photos/real%20estate%20four.jpg"
                alt="Modern Apartment"
                width={600}
                height={400}
                className="w-full h-auto rounded-2xl"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-black/30 rounded-2xl" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>

      <div id="mission" className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mt-28">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-[#0f1221] border border-gray-100 dark:border-gray-800/60 shadow-sm rounded-2xl p-10">
            <h3 className="font-serif text-2xl font-light text-primary mb-4">Our Mission</h3>
            <p className="text-secondary leading-relaxed">
              To redefine urban living by creating thoughtfully designed, sustainable homes that
              combine luxury with functionality, making quality housing accessible to discerning
              homeowners and investors across East Africa.
            </p>
          </div>
          <div id="vision" className="bg-white dark:bg-[#0f1221] border border-gray-100 dark:border-gray-800/60 shadow-sm rounded-2xl p-10">
            <h3 className="font-serif text-2xl font-light text-primary mb-4">Our Vision</h3>
            <p className="text-secondary leading-relaxed">
              To become East Africa&apos;s most trusted real estate partner, known for delivering
              exceptional properties that enhance lives and build communities for generations to come.
            </p>
          </div>
          <div id="manifesto" className="bg-white dark:bg-[#0f1221] border border-gray-100 dark:border-gray-800/60 shadow-sm rounded-2xl p-10">
            <h3 className="font-serif text-2xl font-light text-primary mb-4">Our Manifesto</h3>
            <p className="text-secondary leading-relaxed italic">
              &ldquo;We believe that home is more than just a place — it&apos;s where life happens. Every
              space we create is designed with intention, crafted with care, and delivered with
              integrity. We don&apos;t just build houses; we build foundations for dreams, sanctuaries
              for families, and legacies for generations.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
