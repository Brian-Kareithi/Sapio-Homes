import type { Metadata } from "next";
import Link from "next/link";
import {
  HardDrive,
  Megaphone,
  Settings,
  UserCheck,
  GraduationCap,
  PiggyBank,
  Monitor,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Our Team | Sapio Homes",
  description:
    "Meet the Sapio Homes team — experienced real estate professionals dedicated to delivering affordable luxury living in Nairobi.",
};

const departments = [
  {
    name: "Administration",
    count: 0,
    icon: Settings,
    description: "Overseeing company operations, compliance, and strategic direction.",
  },
  {
    name: "Agent (Full Status)",
    count: 12,
    icon: UserCheck,
    description:
      "Licensed agents driving sales, viewings, and client relationships across Nairobi.",
  },
  {
    name: "Agent (Interns)",
    count: 4,
    icon: GraduationCap,
    description: "Up-and-coming talent learning the trade through hands-on mentorship.",
  },
  {
    name: "Finance",
    count: 0,
    icon: PiggyBank,
    description:
      "Managing company finances, investor relations, and payment processing.",
  },
  {
    name: "IT",
    count: 0,
    icon: Monitor,
    description:
      "Powering our digital infrastructure, website, and property management systems.",
  },
  {
    name: "Marketing",
    count: 0,
    icon: Megaphone,
    description: "Brand strategy, digital campaigns, and property showcasing.",
  },
  {
    name: "Operations",
    count: 1,
    icon: HardDrive,
    description: "Project oversight, vendor coordination, and quality assurance.",
  },
];

const leadership = [
  {
    name: "Samuel Kariuki",
    role: "Founder & CEO",
    bio: "With over 15 years in Nairobi's real estate market, Samuel founded Sapio Homes with a vision to make quality housing accessible to Kenya's growing middle class.",
  },
  {
    name: "Grace Wanjiku",
    role: "Head of Operations",
    bio: "Grace brings 10 years of project management experience, ensuring every Sapio development runs on schedule and meets our exacting quality standards.",
  },
  {
    name: "David Ochieng",
    role: "Head of Sales",
    bio: "David leads our sales team with a client-first approach, having personally facilitated over 500 property transactions across Nairobi.",
  },
  {
    name: "Faith Nyambura",
    role: "Head of Property Management",
    bio: "Faith oversees our property management portfolio, ensuring landlords and tenants alike receive exceptional service and support.",
  },
];

export default function TeamPage() {
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
            eyebrow="Our People"
            title="The team behind Sapio Homes"
            description="Meet the dedicated professionals behind Sapio Homes. Our team combines decades of real estate experience with a passion for creating exceptional living spaces."
            className="mt-10"
          />
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-light text-primary">Leadership</h2>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {leadership.map((person) => (
              <div key={person.name} className="u-card u-card-interactive group p-6 text-center">
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full border-2 border-amber-500/30 bg-amber-500/10 transition-colors duration-300 group-hover:border-amber-500/50 group-hover:bg-amber-500/15">
                  <span className="font-serif text-2xl font-bold text-amber-500">
                    {person.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <h3 className="font-serif text-lg font-medium text-primary">{person.name}</h3>
                <p className="mt-1 text-sm font-medium text-amber-500">{person.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-secondary">{person.bio}</p>
              </div>
            ))}
          </div>

          <div className="mt-20">
            <h2 className="font-serif text-3xl font-light text-primary">Departments</h2>
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {departments.map((dept) => {
                const Icon = dept.icon;
                return (
                  <div key={dept.name} className="u-card u-card-interactive group p-6">
                    <div className="mb-4 flex items-center gap-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-amber-200/60 bg-amber-50 text-amber-500 transition-colors duration-300 group-hover:bg-amber-500 group-hover:text-black dark:border-amber-500/20">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium text-primary">{dept.name}</h3>
                        <span
                          className={
                            dept.count > 0
                              ? "text-sm text-amber-500"
                              : "text-sm text-muted"
                          }
                        >
                          {dept.count} {dept.count === 1 ? "member" : "members"}
                        </span>
                      </div>
                    </div>
                    <p className="text-sm leading-relaxed text-secondary">{dept.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-16 rounded-2xl border border-app-border bg-app-secondary p-10 text-center">
            <h2 className="font-serif text-2xl font-light text-primary">Join Our Team</h2>
            <p className="mx-auto mt-3 max-w-xl text-secondary">
              We&apos;re always looking for talented individuals who share our passion for real estate
              and exceptional service.
            </p>
            <Link
              href="/careers"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-amber-500 px-8 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-black transition-all hover:bg-amber-400"
            >
              View Careers
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
