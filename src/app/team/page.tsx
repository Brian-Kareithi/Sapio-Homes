import type { Metadata } from "next";
import Link from "next/link";
import { HardDrive, Megaphone, Settings, UserCheck, GraduationCap, PiggyBank, Monitor } from "lucide-react";

const glassCard = "bg-white/10 dark:bg-white/10 backdrop-blur-2xl border border-white/20 shadow-xl";

export const metadata: Metadata = {
  title: "Our Team | Sapio Homes",
  description: "Meet the Sapio Homes team — experienced real estate professionals dedicated to delivering affordable luxury living in Nairobi.",
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
    description: "Licensed agents driving sales, viewings, and client relationships across Nairobi.",
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
    description: "Managing company finances, investor relations, and payment processing.",
  },
  {
    name: "IT",
    count: 0,
    icon: Monitor,
    description: "Powering our digital infrastructure, website, and property management systems.",
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
    <main className="bg-app-bg min-h-screen pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
            Our Team
          </h1>
          <p className="text-secondary max-w-3xl mx-auto text-lg">
            Meet the dedicated professionals behind Sapio Homes. Our team combines decades of
            real estate experience with a passion for creating exceptional living spaces.
          </p>
        </div>

        {/* Leadership */}
        <h2 className="text-2xl font-bold text-primary mb-8">Leadership</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {leadership.map((person) => (
            <div key={person.name} className={`${glassCard} rounded-2xl p-6 text-center`}>
              <div className="w-20 h-20 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-amber-500/30">
                <span className="text-2xl font-bold text-amber-400">
                  {person.name.split(" ").map((n) => n[0]).join("")}
                </span>
              </div>
              <h3 className="text-lg font-bold text-primary">{person.name}</h3>
              <p className="text-amber-400 text-sm font-medium mb-3">{person.role}</p>
              <p className="text-secondary text-sm leading-relaxed">{person.bio}</p>
            </div>
          ))}
        </div>

        {/* Departments */}
        <h2 className="text-2xl font-bold text-primary mb-8">Departments</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {departments.map((dept) => {
            const Icon = dept.icon;
            return (
              <div key={dept.name} className={`${glassCard} rounded-2xl p-6`}>
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-10 h-10 bg-amber-500/20 backdrop-blur-md rounded-xl flex items-center justify-center border border-amber-500/20">
                    <Icon className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-primary font-semibold">{dept.name}</h3>
                    <span className={dept.count > 0 ? "text-amber-400 text-sm" : "text-muted text-sm"}>
                      {dept.count} {dept.count === 1 ? "member" : "members"}
                    </span>
                  </div>
                </div>
                <p className="text-secondary text-sm leading-relaxed">{dept.description}</p>
              </div>
            );
          })}
        </div>

        {/* Join the team */}
        <div className={`${glassCard} rounded-2xl p-8 text-center`}>
          <h2 className="text-2xl font-bold text-primary mb-4">Join Our Team</h2>
          <p className="text-secondary mb-6 max-w-xl mx-auto">
            We&apos;re always looking for talented individuals who share our passion for real estate
            and exceptional service. Check our current openings or send us your CV.
          </p>
          <Link
            href="/careers"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-3 rounded-xl transition-all"
          >
            View Careers
          </Link>
        </div>
      </div>
    </main>
  );
}
