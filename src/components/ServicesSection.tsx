"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Home, Building2, TrendingUp, Trophy } from "lucide-react";

export default function ServicesSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  const services = [
    {
      title: "Sales & Marketing",
      description:
        "We curate a select class of affordable luxury apartments designed to dignify small spaces with smart layouts, premium finishes, and proximity to Nairobi's key social amenities.",
      icon: TrendingUp,
    },
    {
      title: "Project Management",
      description:
        "For developers who want to build better, faster, and more professionally—we help structure and coordinate site works from start to finish.",
      icon: Building2,
    },
    {
      title: "Property Management",
      description:
        "Bought a unit with us? Sit back—we'll take it from here. We provide end-to-end rental management ensuring your apartment stays occupied and well-maintained.",
      icon: Home,
    },
  ];

  const stats = [
    { label: "Completed in 2024", value: 450, suffix: " units" },
    { label: "Ongoing for 2025", value: 374, suffix: " units" },
    { label: "Ongoing for 2026", value: 700, suffix: " units" },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Comprehensive real estate solutions tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-amber-500/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-white/60">{service.description}</p>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div ref={ref} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            We are on course to delivering over 1,300 units
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
                  {inView ? (
                    <CountUp end={stat.value} duration={2.5} suffix={stat.suffix} />
                  ) : (
                    `0${stat.suffix}`
                  )}
                </div>
                <div className="text-white/60 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}