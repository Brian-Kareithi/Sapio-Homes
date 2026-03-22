export default function FeaturedProjects() {
  const features = [
    {
      title: "Green Environment",
      description:
        "Sustainable living starts here. We prioritize energy-efficient homes, green spaces, and eco-friendly designs to reduce your carbon footprint without compromising comfort.",
    },
    {
      title: "Comprehensive Amenities",
      description:
        "From smart-home tech to resort-style pools and gyms, our curated properties offer lifestyle-enhancing amenities that cater to modern living.",
    },
    {
      title: "Prime Locations",
      description:
        "Handpicked properties in thriving neighborhoods with top schools, transit links, and appreciation potential.",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Why Choose Us
          </h2>
          <div className="w-16 h-0.5 bg-amber-500 mx-auto mb-4" />
          <p className="text-white/60 max-w-2xl mx-auto">
            Discover what makes our properties stand out from the rest
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white/5 rounded-xl p-6 sm:p-8 border border-white/10 hover:border-amber-500/40 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Decorative Number */}
              <div className="absolute top-4 right-4 text-4xl font-bold text-white/5 group-hover:text-white/10 transition-colors duration-300">
                {String(index + 1).padStart(2, '0')}
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Title with underline effect */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 group-hover:text-amber-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                {/* Decorative line */}
                <div className="w-12 h-0.5 bg-amber-500/50 rounded-full mb-4 group-hover:w-20 transition-all duration-300" />
                
                {/* Description */}
                <p className="text-white/60 leading-relaxed">
                  {feature.description}
                </p>
                
                {/* Learn more indicator */}
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-amber-400 text-sm inline-flex items-center gap-1">
                    Learn more
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Quote */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="inline-block border-t border-white/10 pt-6">
            <p className="text-white/50 text-sm">
              Experience the difference with thoughtfully curated spaces
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}