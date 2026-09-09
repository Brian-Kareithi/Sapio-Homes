import type { Metadata } from "next";
import Link from "next/link";
import {
  Briefcase,
  MapPin,
  Clock,
  DollarSign,
  Send,
  Star,
  Users,
  TrendingUp,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Careers | Sapio Homes",
  description:
    "Join the Sapio Homes team. Explore career opportunities in real estate sales, property management, marketing, and more in Nairobi.",
};

const jobOpenings = [
  {
    title: "Real Estate Agent (Full Status)",
    type: "Full-time",
    location: "Nairobi",
    salary: "Commission + Bonuses",
    department: "Sales",
    description:
      "We are looking for experienced real estate agents with a proven track record in Nairobi property sales. You will be responsible for client viewings, negotiations, and closing deals across our portfolio.",
    requirements: [
      "Valid TAKURA license",
      "2+ years in real estate sales",
      "Strong negotiation skills",
      "Own transport is an advantage",
      "Excellent communication skills",
    ],
  },
  {
    title: "Real Estate Agent (Intern)",
    type: "Internship",
    location: "Nairobi",
    salary: "Stipend + Commission",
    department: "Sales",
    description:
      "Kickstart your real estate career with Sapio Homes. Our internship program offers hands-on training in property sales, client management, and market analysis under the guidance of experienced agents.",
    requirements: [
      "Recent graduate in any field",
      "Strong interpersonal skills",
      "Willingness to learn",
      "Self-motivated",
      "Fluent in English and Swahili",
    ],
  },
  {
    title: "Operations Coordinator",
    type: "Full-time",
    location: "Nairobi",
    salary: "Competitive",
    department: "Operations",
    description:
      "Coordinate daily operations across our active projects, manage vendor relationships, and ensure smooth communication between site teams and management.",
    requirements: [
      "3+ years in operations or project coordination",
      "Knowledge of construction processes",
      "Strong organizational skills",
      "Proficiency in MS Office",
    ],
  },
];

const perks = [
  {
    icon: Star,
    title: "Career Growth",
    desc: "Clear progression paths and professional development opportunities.",
  },
  {
    icon: TrendingUp,
    title: "Performance Bonuses",
    desc: "Rewarding compensation structure with uncapped earning potential.",
  },
  {
    icon: Users,
    title: "Great Culture",
    desc: "Collaborative team environment with regular team events and activities.",
  },
  {
    icon: MapPin,
    title: "Prime Location",
    desc: "Our office is centrally located in Nairobi's business district.",
  },
];

export default function CareersPage() {
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
            eyebrow="Join Our Team"
            title="Build your career with Sapio Homes"
            description="Join a team that's reshaping Nairobi's real estate landscape. We're building more than properties — we're building careers."
            className="mt-10"
          />
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {perks.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.title} className="u-card u-card-interactive group p-6 text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-amber-200/60 bg-amber-50 text-amber-500 transition-colors duration-300 group-hover:bg-amber-500 group-hover:text-black dark:border-amber-500/20">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mb-1 font-serif text-lg font-medium text-primary">
                    {p.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-secondary">{p.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-20">
            <h2 className="font-serif text-3xl font-light text-primary">Open Positions</h2>
            <div className="mt-8 space-y-6">
              {jobOpenings.map((job) => (
                <div key={job.title} className="u-card p-8">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="font-serif text-xl font-medium text-primary">
                        {job.title}
                      </h3>
                      <div className="mt-2 flex flex-wrap gap-4 text-sm text-secondary">
                        <span className="flex items-center gap-1.5">
                          <Briefcase className="h-4 w-4 text-amber-400" /> {job.type}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin className="h-4 w-4 text-amber-400" /> {job.location}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <DollarSign className="h-4 w-4 text-amber-400" /> {job.salary}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="h-4 w-4 text-amber-400" /> {job.department}
                        </span>
                      </div>
                    </div>
                    <span className="rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1 text-xs text-amber-500">
                      {job.type}
                    </span>
                  </div>
                  <p className="mb-4 text-sm leading-relaxed text-secondary">
                    {job.description}
                  </p>
                  <div>
                    <h4 className="mb-2 text-sm font-semibold text-primary">Requirements:</h4>
                    <ul className="grid grid-cols-1 gap-2 md:grid-cols-2">
                      {job.requirements.map((req) => (
                        <li key={req} className="flex items-start gap-2 text-sm text-secondary">
                          <span className="mt-1 text-amber-400">&#8226;</span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-6">
                    <Link
                      href={`mailto:careers@sapiohome.com?subject=Application for ${encodeURIComponent(job.title)}`}
                      className="group inline-flex items-center gap-2 rounded-full bg-amber-500 px-6 py-2.5 text-sm font-semibold uppercase tracking-[0.1em] text-black transition-all hover:bg-amber-400"
                    >
                      <Send className="h-4 w-4" /> Apply Now
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 rounded-2xl border border-app-border bg-app-secondary p-10 text-center">
            <h2 className="font-serif text-2xl font-light text-primary">
              Don&apos;t See the Right Role?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-secondary">
              We&apos;re always on the lookout for talented individuals. Send us your CV and
              we&apos;ll keep you in mind for future opportunities.
            </p>
            <Link
              href="mailto:careers@sapiohome.com"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-amber-500 px-8 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-black transition-all hover:bg-amber-400"
            >
              <Send className="h-4 w-4" /> Send Your CV
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
