import type { Metadata } from "next";
import Link from "next/link";
import { Home, Users, Wrench, BarChart3, Shield, Bell, CheckCircle, DollarSign } from "lucide-react";

export const metadata: Metadata = {
  title: "Property Management | Sapio Homes",
  description: "End-to-end property management services in Nairobi. We handle tenants, maintenance, rent collection, and reporting so you can enjoy passive income.",
};

export default function PropertyManagementPage() {
  return (
    <main className="bg-app-bg min-h-screen pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/" className="inline-flex items-center gap-1.5 text-muted hover:text-amber-500 text-sm mb-8 transition-colors">
          &larr; Back to Home
        </Link>
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl sm:text-5xl font-light text-primary mb-4">
            Property Management
          </h1>
          <p className="text-secondary max-w-3xl mx-auto text-lg">
            Own a property with us? Sit back — we&apos;ll take it from here. Our comprehensive
            management service ensures your investment stays profitable and stress-free.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {[
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
          ].map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.title} className={"bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm"}>
                <div className="w-12 h-12 bg-amber-50 dark:bg-amber-500/10 rounded-xl flex items-center justify-center mb-4 border border-amber-500/20">
                  <Icon className="w-6 h-6 text-amber-400" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">{s.title}</h3>
                <p className="text-secondary text-sm leading-relaxed">{s.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Why Choose Us */}
        <div className={"bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-8 mb-20 shadow-sm"}>
          <h2 className="font-serif text-2xl font-light text-primary mb-6">Why Choose Our Management Service?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Bell className="w-5 h-5 text-amber-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-primary font-semibold mb-1">24/7 Emergency Support</h4>
                  <p className="text-secondary text-sm">Round-the-clock assistance for any urgent property issues.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Users className="w-5 h-5 text-amber-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-primary font-semibold mb-1">Dedicated Property Manager</h4>
                  <p className="text-secondary text-sm">A single point of contact who knows your property inside out.</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <BarChart3 className="w-5 h-5 text-amber-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-primary font-semibold mb-1">Transparent Pricing</h4>
                  <p className="text-secondary text-sm">Clear fee structure with no hidden charges. You always know where your money goes.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Home className="w-5 h-5 text-amber-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-primary font-semibold mb-1">Tenant Placement Guarantee</h4>
                  <p className="text-secondary text-sm">We find quality tenants fast, minimizing vacancy periods and maximizing your returns.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {[
            { value: "450+", label: "Units Managed" },
            { value: "98%", label: "Occupancy Rate" },
            { value: "24h", label: "Response Time" },
            { value: "6+", label: "Years Active" },
          ].map((s) => (
            <div key={s.label} className={"bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-6 text-center shadow-sm"}>
              <div className="text-3xl font-bold text-amber-400 mb-2">{s.value}</div>
              <div className="text-sm text-secondary">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h2 className="font-serif text-2xl font-light text-primary mb-4">Interested in Our Management Services?</h2>
          <p className="text-secondary mb-6 max-w-xl mx-auto">
            Let us help you maximize your property&apos;s potential while you enjoy passive income.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-3 rounded-xl transition-all"
          >
            Get a Free Consultation
          </Link>
        </div>
      </div>
    </main>
  );
}
