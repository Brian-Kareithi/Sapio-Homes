import type { Metadata } from "next";
import Link from "next/link";
import { Home, Building, BadgePercent, TrendingUp, Search, Filter } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Properties | Sapio Homes",
  description: "Browse Sapio Homes property listings. Find apartments for sale and rent in Nairobi. Studios, 1BR, 2BR, and luxury residences in prime locations.",
};

const propertyTypes = [
  {
    title: "Properties on Show",
    count: 4,
    icon: Building,
    desc: "Featured developments currently available for viewing. Schedule a site visit to experience our latest projects firsthand.",
    link: "/#properties",
  },
  {
    title: "Under Management",
    count: 450,
    icon: Home,
    desc: "Units managed by our in-house team across Nairobi — from tenant sourcing and rent collection to maintenance and monthly reporting.",
    link: "/#properties",
  },
  {
    title: "Buy Property",
    count: 6,
    icon: TrendingUp,
    desc: "Developments available across the portfolio — from affordable starter homes to luxury residences with premium finishes.",
    link: "/projects",
  },
  {
    title: "Sell / Let Your Home",
    count: null,
    icon: BadgePercent,
    desc: "List your property with Sapio Homes. Our experienced agents will market your home to qualified buyers and tenants across our extensive network.",
    link: "/#contact",
  },
];

export default function PropertiesPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <Link href="/" className="inline-flex items-center gap-1.5 text-muted hover:text-amber-500 text-sm transition-colors">
          &larr; Back to Home
        </Link>
        <SectionHeading
          align="left"
          eyebrow="Listings"
          title="Properties"
          description="Explore our comprehensive portfolio of properties across Nairobi. Whether you're looking to buy, rent, or sell, Sapio Homes has you covered."
          className="mt-8"
        />

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { label: "Units Delivered", value: "1,300+" },
            { label: "Active Developments", value: "6+" },
            { label: "Client Satisfaction", value: "98%" },
            { label: "Sold in 2024", value: "120+" },
          ].map((s) => (
            <div key={s.label} className={"u-card p-6 text-center"}>
              <div className="text-3xl font-bold text-amber-400 mb-1">{s.value}</div>
              <div className="text-sm text-secondary">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Property Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {propertyTypes.map((pt) => {
            const Icon = pt.icon;
            return (
              <Link
                key={pt.title}
                href={pt.link}
                className={"u-card p-6 shadow-sm group hover:border-amber-500/50 transition-all duration-300"}
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-amber-50 dark:bg-amber-500/10 rounded-2xl flex items-center justify-center flex-shrink-0 border border-amber-500/20 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-amber-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-xl font-bold text-primary">{pt.title}</h3>
                      {pt.count !== null && (
                        <span className="text-2xl font-bold text-amber-400">{pt.count}</span>
                      )}
                    </div>
                    <p className="text-secondary text-sm leading-relaxed">{pt.desc}</p>
                    <span className="inline-flex items-center gap-1 text-amber-500 text-sm mt-3 font-medium group-hover:gap-2 transition-all">
                      {pt.title === "Sell / Let Your Home" ? "Get Started" : "Browse Listings"} &rarr;
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Property Type Filter */}
        <div className={"u-card p-8 mb-16"}>
          <div className="flex items-center gap-3 mb-6">
            <Filter className="w-5 h-5 text-amber-400" />
            <h2 className="font-serif text-xl font-medium text-primary">Browse by Type</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { type: "Studio", count: 2 },
              { type: "1 Bedroom", count: 3 },
              { type: "2 Bedroom", count: 2 },
              { type: "3 Bedroom", count: 1 },
              { type: "4 Bedroom+", count: 1 },
            ].map((t) => (
              <Link
                key={t.type}
                href={`/#properties?type=${t.type.toLowerCase().replace(/\s+/g, "").replace("+", "bed")}`}
                className={"u-card p-4 text-center hover:border-amber-500/50 transition-all"}
              >
                <div className="text-lg font-bold text-primary">{t.type}</div>
                <div className="text-sm text-muted">{t.count} {t.count === 1 ? "development" : "developments"}</div>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className={"u-card p-8 text-center"}>
          <Search className="w-8 h-8 text-amber-400 mx-auto mb-4" />
          <h2 className="font-serif text-2xl font-light text-primary mb-4">
            Can&apos;t Find What You&apos;re Looking For?
          </h2>
          <p className="text-secondary mb-6 max-w-xl mx-auto">
            Our team can help you find the perfect property. Get in touch for personalized assistance.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-semibold px-8 py-3 rounded-xl transition-all"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
