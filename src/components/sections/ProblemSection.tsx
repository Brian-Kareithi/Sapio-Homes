import Image from "next/image";

const glassCard = "bg-white/10 dark:bg-white/10 backdrop-blur-2xl border border-white/20 shadow-xl";

export default function ProblemSection() {
  return (
    <section id="about" className="py-20 bg-app-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
              The Problem We Exist
              <span className="text-amber-500">
                {" "}to Solve
              </span>
            </h2>
            <p className="text-secondary text-lg mb-6 leading-relaxed">
              Finding your dream home in Nairobi shouldn&apos;t feel like a compromise. We understand
              the challenges of navigating the real estate market — from hidden costs to unreliable
              developers and properties that don&apos;t deliver on their promises.
            </p>
            <p className="text-secondary text-lg mb-6 leading-relaxed">
              That&apos;s why Sapio Homes was born. We curate, develop, and manage properties that
              combine luxury with practicality, ensuring every detail is thoughtfully designed
              for modern living. Our team brings decades of combined experience in Nairobi real estate,
              giving you confidence at every step.
            </p>
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="border-l-2 border-amber-500 pl-4">
                <div className="text-2xl font-bold text-primary">98%</div>
                <div className="text-muted text-sm">Client Satisfaction</div>
              </div>
              <div className="border-l-2 border-amber-500 pl-4">
                <div className="text-2xl font-bold text-primary">1,300+</div>
                <div className="text-muted text-sm">Units Delivered</div>
              </div>
              <div className="border-l-2 border-amber-500 pl-4">
                <div className="text-2xl font-bold text-primary">6+</div>
                <div className="text-muted text-sm">Active Projects</div>
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

      <div id="mission" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className={`${glassCard} rounded-2xl p-8`}>
            <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
            <p className="text-secondary leading-relaxed">
              To redefine urban living by creating thoughtfully designed, sustainable homes that
              combine luxury with functionality, making quality housing accessible to discerning
              homeowners and investors across East Africa.
            </p>
          </div>
          <div id="vision" className={`${glassCard} rounded-2xl p-8`}>
            <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
            <p className="text-secondary leading-relaxed">
              To become East Africa&apos;s most trusted real estate partner, known for delivering
              exceptional properties that enhance lives and build communities for generations to come.
            </p>
          </div>
          <div id="manifesto" className="bg-amber-500/10 backdrop-blur-2xl rounded-2xl p-8 border border-amber-500/20 shadow-xl">
            <h3 className="text-2xl font-bold text-primary mb-4">Our Manifesto</h3>
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
