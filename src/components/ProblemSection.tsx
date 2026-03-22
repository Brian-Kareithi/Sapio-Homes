export default function ProblemSection() {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              The Problem We Exist
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
                {" "}to Solve
              </span>
            </h2>
            <p className="text-white/70 text-lg mb-6">
              Finding your dream home in Nairobi shouldn't feel like a compromise. We understand
              the challenges of navigating the real estate market—from hidden costs to unreliable
              developers and properties that don't deliver on their promises.
            </p>
            <p className="text-white/70 text-lg mb-6">
              That's why Sapio Homes was born. We curate, develop, and manage properties that
              combine luxury with practicality, ensuring every detail is thoughtfully designed
              for modern living.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="border-l-2 border-amber-500 pl-4">
                <div className="text-2xl font-bold text-white">98%</div>
                <div className="text-white/60 text-sm">Client Satisfaction</div>
              </div>
              <div className="border-l-2 border-amber-500 pl-4">
                <div className="text-2xl font-bold text-white">1,300+</div>
                <div className="text-white/60 text-sm">Units Delivered</div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://ppkfgsakvcijmmhjwbcz.supabase.co/storage/v1/object/public/Photos/real%20estate%20four.jpg"
                alt="Modern Apartment"
                className="w-full h-auto rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Mission and Vision Sections */}
      <div id="mission" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
            <p className="text-white/70">
              To redefine urban living by creating thoughtfully designed, sustainable homes that
              combine luxury with functionality, making quality housing accessible to discerning
              homeowners and investors.
            </p>
          </div>
          <div id="vision" className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
            <p className="text-white/70">
              To become East Africa's most trusted real estate partner, known for delivering
              exceptional properties that enhance lives and build communities for generations to come.
            </p>
          </div>
        </div>
      </div>

      {/* Manifesto */}
      <div id="manifesto" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-2xl p-8 border border-amber-500/20">
          <h3 className="text-2xl font-bold text-white mb-4">Our Manifesto</h3>
          <p className="text-white/70 italic">
            "We believe that home is more than just a place—it's where life happens. Every
            space we create is designed with intention, crafted with care, and delivered with
            integrity. We don't just build houses; we build foundations for dreams, sanctuaries
            for families, and legacies for generations."
          </p>
        </div>
      </div>
    </section>
  );
}