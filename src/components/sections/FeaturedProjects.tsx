import { Leaf, Sparkles, MapPin, Building, Star, Trees } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

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
    <section className="bg-app-secondary py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Designed for a life of distinction"
          description="We bring together design, location, and value to create homes that truly work for you."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="u-card u-card-interactive group p-8 text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-amber-200/60 bg-amber-50 text-amber-500 transition-colors duration-300 group-hover:bg-amber-500 group-hover:text-black dark:border-amber-500/20">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mb-3 font-serif text-xl font-medium text-primary">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-secondary">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
