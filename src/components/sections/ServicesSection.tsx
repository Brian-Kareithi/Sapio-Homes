"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Home, Building2, TrendingUp, Shield, Key, BarChart3 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

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
  { label: "Completed in 2024", value: 120, suffix: "+" },
  { label: "Ongoing for 2025", value: 540, suffix: "" },
  { label: "Ongoing for 2026", value: 640, suffix: "" },
  { label: "Client Satisfaction", value: 98, suffix: "%" },
];

export default function ServicesSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section id="services" className="scroll-mt-24 bg-app-secondary py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="What We Offer"
          title="A full-service real estate partner"
          description="From the first site visit to the final title transfer, every stage is handled by one accountable team."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="u-card u-card-interactive group p-8">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-amber-200/60 bg-amber-50 text-amber-500 transition-colors duration-300 group-hover:bg-amber-500 group-hover:text-black dark:border-amber-500/20">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-3 font-serif text-xl font-medium text-primary">{service.title}</h3>
                <p className="text-sm leading-relaxed text-secondary">{service.description}</p>
              </div>
            );
          })}
        </div>

        <div ref={ref} className="u-card mt-20 p-10 sm:p-14">
          <h3 className="text-center font-serif text-3xl font-light text-primary">
            On course to deliver over <span className="italic text-amber-500">1,300 units</span>
          </h3>
          <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-serif text-4xl font-light text-amber-500 sm:text-5xl">
                  {inView ? (
                    <CountUp end={stat.value} duration={2.5} suffix={stat.suffix} />
                  ) : (
                    <span>&nbsp;</span>
                  )}
                </div>
                <span className="mx-auto mt-4 block h-px w-8 bg-amber-400/40" />
                <div className="mt-3 text-[0.6875rem] uppercase tracking-[0.18em] text-muted">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
