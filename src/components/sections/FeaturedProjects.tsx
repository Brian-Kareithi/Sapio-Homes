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

const glassCard = "bg-white/10 dark:bg-white/10 backdrop-blur-2xl border border-white/20 shadow-xl";

export default function FeaturedProjects() {
  return (
    <section className="py-20 bg-app-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Why Choose Sapio Homes
          </h2>
          <p className="text-secondary max-w-2xl mx-auto">
            We bring together design, location, and value to create homes that truly work for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`${glassCard} rounded-2xl p-8 text-center group hover:border-amber-500/50 transition-all duration-300`}
              >
                <div className="w-16 h-16 bg-amber-500/20 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform border border-amber-500/20">
                  <Icon className="w-8 h-8 text-amber-400" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">{feature.title}</h3>
                <p className="text-secondary text-sm leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
