import type { Metadata } from "next";
import Link from "next/link";
import {
  Home,
  Users,
  Wrench,
  BarChart3,
  Shield,
  Bell,
  CheckCircle,
  DollarSign,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Property Management | Sapio Homes",
  description:
    "End-to-end property management services in Nairobi. We handle tenants, maintenance, rent collection, and reporting so you can enjoy passive income.",
};

const services = [
  {
    icon: Users,
    title: "Tenant Management",
    desc: "We handle the entire tenant lifecycle — from advertising and showings to screening, background checks, and lease signing. Our rigorous tenant vetting ensures reliable, long-term occupants for your property.",
  },
  {
    icon: DollarSign,
    title: "Rent Collection",
    desc: "Automated rent collection with late payment follow-ups. We ensure you receive your rental income on time, every month, with detailed financial statements and direct deposit to your account.",
  },
  {
    icon: Wrench,
    title: "Maintenance & Repairs",
    desc: "Our network of vetted contractors handles everything from minor repairs to major renovations. We coordinate, supervise, and quality-check all work so you don't have to lift a finger.",
  },
  {
    icon: BarChart3,
    title: "Monthly Reporting",
    desc: "Receive comprehensive monthly reports including income statements, expense breakdowns, occupancy updates, and market comparisons. Full transparency into your property's performance.",
  },
  {
    icon: Shield,
    title: "Property Protection",
    desc: "Regular property inspections, insurance coordination, and emergency response. We proactively identify and address issues before they become costly problems.",
  },
  {
    icon: CheckCircle,
    title: "Move-In/Move-Out",
    desc: "We manage the entire move-in and move-out process including inventory checks, key handovers, deposit management, and property handover inspections.",
  },
];

export default function PropertyManagementPage() {
  return (
    <div className="min-h-screen pt-20">
      <section className="bg-app-secondary py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-amber-500"
          >
            &larr; Back to Home
          </Link>
          <SectionHeading
            align="left"
            eyebrow="Our Services"
            title="Property management, simplified"
            description="Own a property with us? Sit back — we'll take it from here. Our comprehensive management service ensures your investment stays profitable and stress-free."
            className="mt-10"
          />
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.title} className="u-card u-card-interactive group p-8">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-amber-200/60 bg-amber-50 text-amber-500 transition-colors duration-300 group-hover:bg-amber-500 group-hover:text-black dark:border-amber-500/20">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-3 font-serif text-xl font-medium text-primary">{s.title}</h3>
                  <p className="text-sm leading-relaxed text-secondary">{s.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-20 u-card p-10 sm:p-12">
            <h2 className="font-serif text-3xl font-light text-primary">
              Why Choose Our Management Service?
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <Bell className="mt-1 h-5 w-5 flex-shrink-0 text-amber-400" />
                  <div>
                    <h4 className="mb-1 font-semibold text-primary">24/7 Emergency Support</h4>
                    <p className="text-sm text-secondary">
                      Round-the-clock assistance for any urgent property issues.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Users className="mt-1 h-5 w-5 flex-shrink-0 text-amber-400" />
                  <div>
                    <h4 className="mb-1 font-semibold text-primary">
                      Dedicated Property Manager
                    </h4>
                    <p className="text-sm text-secondary">
                      A single point of contact who knows your property inside out.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <BarChart3 className="mt-1 h-5 w-5 flex-shrink-0 text-amber-400" />
                  <div>
                    <h4 className="mb-1 font-semibold text-primary">Transparent Pricing</h4>
                    <p className="text-sm text-secondary">
                      Clear fee structure with no hidden charges. You always know where your money
                      goes.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Home className="mt-1 h-5 w-5 flex-shrink-0 text-amber-400" />
                  <div>
                    <h4 className="mb-1 font-semibold text-primary">
                      Tenant Placement Guarantee
                    </h4>
                    <p className="text-sm text-secondary">
                      We find quality tenants fast, minimizing vacancy periods and maximizing your
                      returns.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { value: "450+", label: "Units Managed" },
              { value: "98%", label: "Occupancy Rate" },
              { value: "24h", label: "Response Time" },
              { value: "6+", label: "Years Active" },
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

          <div className="mt-16 rounded-2xl border border-app-border bg-app-secondary p-10 text-center">
            <h2 className="font-serif text-2xl font-light text-primary">
              Interested in Our Management Services?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-secondary">
              Let us help you maximize your property&apos;s potential while you enjoy passive income.
            </p>
            <Link
              href="/#contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-amber-500 px-8 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-black transition-all hover:bg-amber-400"
            >
              Get a Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
