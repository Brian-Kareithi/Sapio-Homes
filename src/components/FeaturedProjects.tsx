import { Leaf, Sparkles, MapPin } from "lucide-react";

export default function FeaturedProjects() {
  const features = [
    {
      icon: Leaf,
      title: "Green Environment",
      description:
        "Sustainable living starts here. We prioritize energy-efficient homes, green spaces, and eco-friendly designs to reduce your carbon footprint without compromising comfort.",
    },
    {
      icon: Sparkles,
      title: "Comprehensive Amenities",
      description:
        "From smart-home tech to resort-style pools and gyms, our curated properties offer lifestyle-enhancing amenities that cater to modern living.",
    },
    {
      icon: MapPin,
      title: "Prime Locations",
      description:
        "Handpicked properties in thriving neighborhoods with top schools, transit links, and appreciation potential.",
    },
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center group hover:border-amber-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-white/60">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}