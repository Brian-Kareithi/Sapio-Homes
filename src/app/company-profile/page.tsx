import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Shield,
  Award,
  Users,
  TrendingUp,
  Building,
  Globe,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Company Profile | Sapio Homes",
  description:
    "Sapio Homes — Nairobi's trusted real estate developer. Affordable luxury apartments, property management, and investment opportunities across East Africa.",
};

const values = [
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
];

const milestones = [
  { year: "2013", event: "Sapio Homes founded in Nairobi" },
  { year: "2015", event: "First project — Nyayo View Suites delivered" },
  { year: "2018", event: "Balozi Suites completed and sold out" },
  { year: "2021", event: "The Reveal sells out ahead of schedule" },
  { year: "2023", event: "Hillside Gardens delivered — 13 floors of premium living" },
  { year: "2024", event: "120+ units sold; Park Road Residency launches" },
  { year: "2025", event: "Westway Apartments off-plan sales begin" },
  { year: "2026", event: "1,300+ units delivered and in development" },
];

export default function CompanyProfilePage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative overflow-hidden bg-app-secondary py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-amber-500"
          >
            &larr; Back to Home
          </Link>
          <SectionHeading
            align="left"
            eyebrow="Company Profile"
            title="Building Nairobi's future, one home at a time"
            description="Sapio Homes is a Nairobi-based real estate development and management company committed to delivering affordable luxury living across East Africa's most dynamic urban centers."
            className="mt-10"
          />
        </div>
      </section>

      {/* Who We Are + Image */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div>
              <div className="flex items-center gap-4">
                <span className="u-hairline" />
                <span className="u-eyebrow">Who We Are</span>
              </div>
              <h2 className="mt-6 font-serif text-4xl font-light leading-[1.1] text-primary sm:text-5xl text-balance">
                Redefining urban living{" "}
                <span className="italic text-amber-500">since 2013</span>
              </h2>
              <p className="mt-8 text-lg leading-relaxed text-secondary">
                Founded with a vision to bridge the gap between luxury and
                affordability, Sapio Homes has grown into one of Nairobi&apos;s most
                respected property developers. We specialize in creating
                thoughtfully designed urban homes that combine modern aesthetics
                with practical functionality.
              </p>
              <p className="mt-5 text-lg leading-relaxed text-secondary">
                Our portfolio spans residential developments across Nairobi&apos;s
                prime locations including Westlands, Parklands, Kilimani, and
                South B. Each project reflects our commitment to quality
                construction, sustainable design, and community-focused living.
              </p>
              <p className="mt-5 text-lg leading-relaxed text-secondary">
                With over 1,300 units delivered and a client satisfaction rate
                of 98%, we have established ourselves as a developer that
                delivers on its promises.
              </p>

              {/* Key metrics inline */}
              <div className="mt-12 grid grid-cols-3 gap-6 border-t border-app-border pt-10">
                {[
                  ["1,300+", "Units Delivered"],
                  ["98%", "Client Satisfaction"],
                  ["12+", "Years of Excellence"],
                ].map(([value, label]) => (
                  <div key={label}>
                    <div className="font-serif text-3xl font-light text-amber-500 sm:text-4xl">
                      {value}
                    </div>
                    <span className="mt-3 block h-px w-8 bg-amber-400/40" />
                    <div className="mt-3 text-[0.6875rem] uppercase tracking-[0.18em] text-muted">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-app-border shadow-premium-lg">
              <Image
                src="https://ppkfgsakvcijmmhjwbcz.supabase.co/storage/v1/object/public/Photos/real%20estate%20two.jpg"
                alt="Sapio Homes — modern apartment development in Nairobi"
                width={640}
                height={800}
                className="h-full w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-app-border bg-app-secondary py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { value: "1,300+", label: "Units Delivered" },
              { value: "98%", label: "Client Satisfaction" },
              { value: "6+", label: "Active Projects" },
              { value: "450+", label: "Units Under Management" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-serif text-4xl font-light text-amber-500 sm:text-5xl">
                  {s.value}
                </div>
                <span className="mx-auto mt-4 block h-px w-8 bg-amber-400/40" />
                <div className="mt-3 text-[0.6875rem] uppercase tracking-[0.18em] text-muted">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission / Vision / Manifesto */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Purpose"
            title="Mission, vision & manifesto"
            description="The principles that guide every decision we make and every home we build."
          />

          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="u-card p-10">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-amber-200/60 bg-amber-50 dark:border-amber-500/20 dark:bg-amber-500/10">
                <TrendingUp className="h-6 w-6 text-amber-500" />
              </div>
              <h3 className="mb-4 font-serif text-2xl font-light text-primary">
                Our Mission
              </h3>
              <p className="leading-relaxed text-secondary">
                To redefine urban living by creating thoughtfully designed,
                sustainable homes that combine luxury with functionality, making
                quality housing accessible to discerning homeowners and investors
                across East Africa.
              </p>
            </div>

            <div className="u-card p-10">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-amber-200/60 bg-amber-50 dark:border-amber-500/20 dark:bg-amber-500/10">
                <Globe className="h-6 w-6 text-amber-500" />
              </div>
              <h3 className="mb-4 font-serif text-2xl font-light text-primary">
                Our Vision
              </h3>
              <p className="leading-relaxed text-secondary">
                To become East Africa&apos;s most trusted real estate partner,
                known for delivering exceptional properties that enhance lives
                and build communities for generations to come.
              </p>
            </div>

            <div className="u-card p-10">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-amber-200/60 bg-amber-50 dark:border-amber-500/20 dark:bg-amber-500/10">
                <Award className="h-6 w-6 text-amber-500" />
              </div>
              <h3 className="mb-4 font-serif text-2xl font-light text-primary">
                Our Manifesto
              </h3>
              <p className="italic leading-relaxed text-secondary">
                &ldquo;We believe that home is more than just a place — it&apos;s
                where life happens. Every space we create is designed with
                intention, crafted with care, and delivered with
                integrity.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-app-secondary py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Values"
            title="The principles that define us"
            description="Six core values underpin every project, partnership, and promise we make."
          />

          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="u-card u-card-interactive group p-8">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-amber-200/60 bg-amber-50 text-amber-500 transition-colors duration-300 group-hover:bg-amber-500 group-hover:text-black dark:border-amber-500/20">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-3 font-serif text-xl font-medium text-primary">
                    {v.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-secondary">
                    {v.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline / Milestones */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Journey"
            title="A decade of milestones"
            description="From our first project to a portfolio of over 1,300 units — the moments that shaped Sapio Homes."
          />

          <div className="relative mt-16">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-app-border sm:left-1/2 sm:-translate-x-px" aria-hidden="true" />
            <div className="space-y-12">
              {milestones.map((m, i) => (
                <div
                  key={m.year}
                  className={`relative flex items-start gap-8 sm:gap-0 ${
                    i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                  }`}
                >
                  <div className={`hidden sm:block sm:w-1/2 ${i % 2 === 0 ? "pr-12 text-right" : "pl-12"}`}>
                    <div className="inline-block">
                      <span className="font-serif text-3xl font-light text-amber-500">
                        {m.year}
                      </span>
                      <p className="mt-1 text-sm text-secondary">{m.event}</p>
                    </div>
                  </div>
                  <div className="relative z-10 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border-2 border-amber-500 bg-app-bg">
                    <span className="h-2 w-2 rounded-full bg-amber-500" />
                  </div>
                  <div className="sm:hidden">
                    <span className="font-serif text-2xl font-light text-amber-500">
                      {m.year}
                    </span>
                    <p className="mt-1 text-sm text-secondary">{m.event}</p>
                  </div>
                  <div className="hidden sm:block sm:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Find Us */}
      <section className="bg-app-secondary py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Get in Touch"
            title="Find us in the heart of Nairobi"
            description="Our doors are open. Visit us for a private consultation or reach out by phone or email."
          />

          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="space-y-6">
              <div className="u-card p-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-amber-200/60 bg-amber-50 dark:border-amber-500/20 dark:bg-amber-500/10">
                    <MapPin className="h-6 w-6 text-amber-500" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-medium text-primary">
                      Visit Us
                    </h3>
                    <p className="text-sm text-secondary">
                      {process.env.NEXT_PUBLIC_COMPANY_ADDRESS ||
                        "HH Towers, Moi Avenue, Nairobi, Kenya"}
                    </p>
                  </div>
                </div>
              </div>
              <div className="u-card p-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-amber-200/60 bg-amber-50 dark:border-amber-500/20 dark:bg-amber-500/10">
                    <Phone className="h-6 w-6 text-amber-500" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-medium text-primary">
                      Call Us
                    </h3>
                    <p className="text-sm text-secondary">+254 113 556 551</p>
                  </div>
                </div>
              </div>
              <div className="u-card p-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-amber-200/60 bg-amber-50 dark:border-amber-500/20 dark:bg-amber-500/10">
                    <Mail className="h-6 w-6 text-amber-500" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-medium text-primary">
                      Email Us
                    </h3>
                    <p className="text-sm text-secondary">
                      info@sapiohome.com
                    </p>
                  </div>
                </div>
              </div>
              <div className="u-card p-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-amber-200/60 bg-amber-50 dark:border-amber-500/20 dark:bg-amber-500/10">
                    <Globe className="h-6 w-6 text-amber-500" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-medium text-primary">
                      Business Hours
                    </h3>
                    <p className="text-sm text-secondary">
                      Monday — Saturday, 8:00 AM — 6:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-app-border">
              <iframe
                title="Sapio Homes on Google Maps"
                width="100%"
                height="100%"
                style={{ display: "block", minHeight: "360px" }}
                src={`https://maps.google.com/maps?q=${encodeURIComponent(
                  process.env.NEXT_PUBLIC_COMPANY_ADDRESS ||
                    "HH Towers, Nairobi, Kenya"
                )}&output=embed`}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="u-card p-10 sm:p-16 text-center">
            <SectionHeading
              eyebrow="Next Steps"
              title="Ready to work with us?"
              description="Whether you're looking to buy, sell, rent, invest, or partner — our team is here to help you every step of the way."
            />
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-amber-500 px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-black transition-all duration-300 hover:bg-amber-400"
              >
                Get in Touch
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-full border border-app-border px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-primary transition-all duration-300 hover:border-amber-400 hover:text-amber-500"
              >
                View Our Projects
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
