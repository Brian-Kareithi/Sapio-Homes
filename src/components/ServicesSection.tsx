"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Home, Building2, TrendingUp, Shield } from "lucide-react";

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
    <section className="py-16 sm:py-20 bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Our Services
          </h2>
          <div className="w-16 h-0.5 bg-amber-500 mx-auto mb-4" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive real estate solutions tailored to your needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-[#111115] rounded-xl p-6 border border-gray-800 hover:border-amber-500/50 hover:shadow-xl transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-amber-500 transition-all duration-300">
                  <Icon className="w-6 h-6 text-amber-500 group-hover:text-white transition-all duration-300" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
                
                {/* Decorative line on hover */}
                <div className="w-8 h-0.5 bg-amber-500 rounded-full mt-4 group-hover:w-12 transition-all duration-300" />
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div 
          ref={ref} 
          className="bg-[#111115] rounded-xl border border-gray-800 p-6 sm:p-8 shadow-lg"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-white text-center mb-8">
            We are on course to delivering over 1,300 units
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-4 rounded-lg bg-[#0a0a0f] border border-gray-800">
                <div className="text-3xl sm:text-4xl font-bold text-amber-500">
                  {inView ? (
                    <CountUp end={stat.value} duration={2.5} suffix={stat.suffix} />
                  ) : (
                    `0${stat.suffix}`
                  )}
                </div>
                <div className="text-gray-400 text-sm mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Trust Badge */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#111115] rounded-full border border-gray-800">
            <Shield className="w-4 h-4 text-amber-500" />
            <span className="text-gray-400 text-sm">Trusted by 1,300+ homeowners</span>
          </div>
        </div>
      </div>
    </section>
  );
}