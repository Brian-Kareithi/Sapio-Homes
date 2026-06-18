"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Home, Building2, TrendingUp, Shield, Key, BarChart3 } from "lucide-react";

const services = [
  {
    title: "Sales & Marketing",
    description:
      "We curate a select class of affordable luxury apartments designed to dignify small spaces with smart layouts, premium finishes, and proximity to Nairobi's key social amenities. Our strategic marketing reaches qualified buyers across East Africa.",
    icon: TrendingUp,
  },
  {
    title: "Project Management",
    description:
      "For developers who want to build better, faster, and more professionally — we help structure and coordinate site works from start to finish. From contractor vetting to timeline management, we ensure every phase stays on track and on budget.",
    icon: Building2,
  },
  {
    title: "Property Management",
    description:
      "Bought a unit with us? Sit back — we'll take it from here. We provide end-to-end rental management ensuring your apartment stays occupied and well-maintained. Our team handles tenant screening, maintenance, and monthly reporting.",
    icon: Home,
  },
  {
    title: "Real Estate Advisory",
    description:
      "Making sense of Nairobi's property market requires local expertise. We offer tailored advisory services for investors, first-time buyers, and diaspora clients looking to make informed decisions on their next purchase or development.",
    icon: BarChart3,
  },
  {
    title: "Title & Legal Support",
    description:
      "We connect you with trusted conveyancing lawyers to handle due diligence, title transfers, and all statutory requirements. Our network ensures your transaction is secure, transparent, and fully compliant with Kenyan law.",
    icon: Shield,
  },
  {
    title: "Rental & Lease Services",
    description:
      "Looking for a place to rent? Our listings cover prime locations across Nairobi. We help tenants find quality homes and assist landlords with lease agreements, rent collection, and property upkeep.",
    icon: Key,
  },
];

const stats = [
  { label: "Completed in 2024", value: 450, suffix: " units" },
  { label: "Ongoing for 2025", value: 374, suffix: " units" },
  { label: "Ongoing for 2026", value: 700, suffix: " units" },
  { label: "Happy Clients", value: 980, suffix: "+" },
];

const glassCard = "bg-white/10 dark:bg-white/10 backdrop-blur-2xl border border-white/20 shadow-xl";

export default function ServicesSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section className="py-20 bg-app-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Our Services</h2>
          <p className="text-secondary max-w-3xl mx-auto">
            Comprehensive real estate solutions tailored to your needs — from development to
            property management, we handle every aspect of the journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`${glassCard} rounded-2xl p-6 group hover:border-amber-500/50 transition-all duration-300`}
              >
                <div className="w-12 h-12 bg-amber-500/20 backdrop-blur-md rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform border border-amber-500/20">
                  <Icon className="w-6 h-6 text-amber-400" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">{service.title}</h3>
                <p className="text-secondary text-sm leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>

        <div ref={ref} className={`${glassCard} rounded-2xl p-8`}>
          <h3 className="text-2xl font-bold text-primary text-center mb-8">
            We are on course to delivering over 1,300 units
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-amber-400">
                  {inView ? (
                    <CountUp end={stat.value} duration={2.5} suffix={stat.suffix} />
                  ) : (
                    <span>&nbsp;</span>
                  )}
                </div>
                <div className="text-secondary mt-2 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
