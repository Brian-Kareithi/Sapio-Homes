import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Shield, Award, Users, TrendingUp, Building, Globe } from "lucide-react";

const glassCard = "bg-white/10 dark:bg-white/10 backdrop-blur-2xl border border-white/20 shadow-xl";

export const metadata: Metadata = {
  title: "Company Profile | Sapio Homes",
  description: "Learn about Sapio Homes — Nairobi's trusted real estate developer offering affordable luxury apartments, property management, and investment opportunities.",
};

export default function CompanyProfilePage() {
  return (
    <main className="bg-app-bg min-h-screen pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/" className="inline-flex items-center gap-1.5 text-muted hover:text-amber-500 text-sm mb-8 transition-colors">
          &larr; Back to Home
        </Link>
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
            Company Profile
          </h1>
          <p className="text-secondary max-w-3xl mx-auto text-lg">
            Sapio Homes is a Nairobi-based real estate development and management company
            committed to delivering affordable luxury living across East Africa&apos;s most
            dynamic urban centers.
          </p>
        </div>

        {/* About Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-primary mb-6">Who We Are</h2>
            <p className="text-secondary mb-4 leading-relaxed">
              Founded with a vision to bridge the gap between luxury and affordability, Sapio Homes
              has grown into one of Nairobi&apos;s most respected property developers. We specialize
              in creating thoughtfully designed urban homes that combine modern aesthetics with
              practical functionality.
            </p>
            <p className="text-secondary mb-4 leading-relaxed">
              Our portfolio spans residential developments across Nairobi&apos;s prime locations
              including Westlands, Parklands, Kilimani, and South B. Each project reflects our
              commitment to quality construction, sustainable design, and community-focused living.
            </p>
            <p className="text-secondary leading-relaxed">
              With over 1,300 units delivered and a client satisfaction rate of 98%, we have
              established ourselves as a developer that delivers on its promises.
            </p>
          </div>
          <div className="relative rounded-2xl overflow-hidden">
            <Image
              src="https://ppkfgsakvcijmmhjwbcz.supabase.co/storage/v1/object/public/Photos/real%20estate%20two.jpg"
              alt="Sapio Homes property"
              width={600}
              height={450}
              className="w-full h-auto rounded-2xl"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-black/20 rounded-2xl" />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {[
            { value: "1,300+", label: "Units Delivered" },
            { value: "98%", label: "Client Satisfaction" },
            { value: "6+", label: "Active Projects" },
            { value: "12+", label: "Years Experience" },
          ].map((s) => (
            <div key={s.label} className={`${glassCard} rounded-2xl p-6 text-center`}>
              <div className="text-3xl font-bold text-amber-400 mb-2">{s.value}</div>
              <div className="text-sm text-secondary">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Values */}
        <h2 className="text-3xl font-bold text-primary text-center mb-10">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {[
            {
              icon: Shield,
              title: "Integrity",
              desc: "We operate with complete transparency in every transaction. Our clients trust us because we deliver exactly what we promise — on time and on budget.",
            },
            {
              icon: Award,
              title: "Quality",
              desc: "From foundation to finish, every Sapio property is built with premium materials and rigorous quality control. We never compromise on the standards that define our brand.",
            },
            {
              icon: Users,
              title: "Community",
              desc: "We create spaces where people thrive. Our developments are designed to foster genuine community through thoughtful common areas, security, and resident-focused amenities.",
            },
            {
              icon: TrendingUp,
              title: "Innovation",
              desc: "We embrace modern construction techniques, smart-home technology, and sustainable building practices to deliver homes that are ready for the future.",
            },
            {
              icon: Building,
              title: "Accessibility",
              desc: "Affordable luxury is not a contradiction. We make quality home ownership achievable through smart design, efficient construction, and flexible payment plans.",
            },
            {
              icon: Globe,
              title: "Sustainability",
              desc: "We are committed to reducing our environmental footprint through energy-efficient designs, green spaces, and eco-friendly building materials across all our projects.",
            },
          ].map((v) => {
            const Icon = v.icon;
            return (
              <div key={v.title} className={`${glassCard} rounded-2xl p-6`}>
                <div className="w-12 h-12 bg-amber-500/20 backdrop-blur-md rounded-xl flex items-center justify-center mb-4 border border-amber-500/20">
                  <Icon className="w-6 h-6 text-amber-400" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">{v.title}</h3>
                <p className="text-secondary text-sm leading-relaxed">{v.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Google Business Info */}
        <div className={`${glassCard} rounded-2xl p-8 mb-20`}>
          <h2 className="text-2xl font-bold text-primary mb-6">Find Us on Google</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-secondary mb-4 leading-relaxed">
                Sapio Homes is listed on Google Business Profile. You can find our verified
                business information, read client reviews, and get directions directly from Google.
              </p>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3 text-secondary">
                  <span className="text-amber-400 font-semibold w-20">Address:</span>
                  <span>{process.env.NEXT_PUBLIC_COMPANY_ADDRESS || "HH Towers, Nairobi, Kenya"}</span>
                </div>
                <div className="flex items-center gap-3 text-secondary">
                  <span className="text-amber-400 font-semibold w-20">Phone:</span>
                  <span>+254 113 556 551</span>
                </div>
                <div className="flex items-center gap-3 text-secondary">
                  <span className="text-amber-400 font-semibold w-20">Email:</span>
                  <span>info@sapiohome.com</span>
                </div>
                <div className="flex items-center gap-3 text-secondary">
                  <span className="text-amber-400 font-semibold w-20">Hours:</span>
                  <span>Mon - Sat: 8:00 AM - 6:00 PM</span>
                </div>
              </div>
              <a
                href={`https://www.google.com/search?q=${encodeURIComponent("Sapio Homes Nairobi")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 text-amber-500 hover:text-amber-600 transition-colors text-sm font-medium"
              >
                View on Google <Globe className="w-4 h-4" />
              </a>
            </div>
            <div className="rounded-2xl overflow-hidden border border-app-border">
              <iframe
                title="Sapio Homes on Google Maps"
                width="100%"
                height="280"
                style={{ display: "block" }}
                src={`https://maps.google.com/maps?q=${encodeURIComponent(process.env.NEXT_PUBLIC_COMPANY_ADDRESS || "HH Towers, Nairobi, Kenya")}&output=embed`}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-primary mb-4">Ready to Work With Us?</h2>
          <p className="text-secondary mb-6 max-w-xl mx-auto">
            Whether you&apos;re looking to buy, sell, rent, or invest, our team is here to help.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-3 rounded-xl transition-all"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </main>
  );
}
