import { Leaf, Sparkles, MapPin, Building, Star, Trees } from "lucide-react";

const features = [
  {
    icon: Trees,
    title: "Green Environment",
    description:
      "Sustainable living starts here. We prioritize energy-efficient homes, green spaces, and eco-friendly designs to reduce your carbon footprint without compromising comfort. Rooftop gardens, solar-ready infrastructure, and rainwater harvesting are standard.",
  },
  {
    icon: Sparkles,
    title: "Comprehensive Amenities",
    description:
      "From smart-home technology and high-speed fibre to resort-style swimming pools, fully-equipped gyms, and children's play areas — our curated properties offer lifestyle-enhancing amenities that cater to modern urban living.",
  },
  {
    icon: MapPin,
    title: "Prime Locations",
    description:
      "Handpicked properties in Nairobi's most thriving neighborhoods. Each location is selected for proximity to top schools, hospitals, shopping centres, major transport links, and strong property appreciation potential.",
  },
  {
    icon: Building,
    title: "Quality Construction",
    description:
      "Every Sapio Homes property is built with premium materials and under rigorous quality control. We work with Kenya's most reputable contractors to ensure structural integrity, superior finishes, and long-term durability.",
  },
  {
    icon: Star,
    title: "Investment Value",
    description:
      "Our properties are priced for appreciation. With Nairobi's urban expansion and growing demand for quality housing, investing with Sapio Homes means strong capital growth and attractive rental yields.",
  },
  {
    icon: Leaf,
    title: "Community Living",
    description:
      "We don't just build apartments — we create communities. Thoughtfully designed common areas, social spaces, and events foster a sense of belonging among residents, making every estate a true neighborhood.",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="py-20 bg-app-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-8 bg-amber-400" />
            <span className="text-xs uppercase tracking-[0.25em] text-amber-500">WHY CHOOSE US</span>
            <span className="h-px w-8 bg-amber-400" />
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl font-light text-primary leading-tight mb-5">
            Designed for a Life of Distinction
          </h2>
          <p className="text-secondary/70 max-w-2xl mx-auto">
            We bring together design, location, and value to create homes that truly work for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white dark:bg-[#0f1221] border border-gray-100 dark:border-gray-800/60 shadow-sm rounded-2xl p-8 text-center hover:border-amber-400/30 transition-all duration-500"
              >
                <div className="w-16 h-16 bg-amber-50 dark:bg-amber-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-amber-200/50 dark:border-amber-500/20">
                  <Icon className="w-7 h-7 text-amber-500" />
                </div>
                <h3 className="font-serif text-xl font-medium text-primary mb-3">{feature.title}</h3>
                <p className="text-secondary/70 text-sm leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
