import type { Metadata } from "next";
import Link from "next/link";
import { Briefcase, MapPin, Clock, DollarSign, Send, Star, Users, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers | Sapio Homes",
  description: "Join the Sapio Homes team. Explore career opportunities in real estate sales, property management, marketing, and more in Nairobi.",
};

const jobOpenings = [
  {
    title: "Real Estate Agent (Full Status)",
    type: "Full-time",
    location: "Nairobi",
    salary: "Commission + Bonuses",
    department: "Sales",
    description: "We are looking for experienced real estate agents with a proven track record in Nairobi property sales. You will be responsible for client viewings, negotiations, and closing deals across our portfolio.",
    requirements: ["Valid TAKURA license", "2+ years in real estate sales", "Strong negotiation skills", "Own transport is an advantage", "Excellent communication skills"],
  },
  {
    title: "Real Estate Agent (Intern)",
    type: "Internship",
    location: "Nairobi",
    salary: "Stipend + Commission",
    department: "Sales",
    description: "Kickstart your real estate career with Sapio Homes. Our internship program offers hands-on training in property sales, client management, and market analysis under the guidance of experienced agents.",
    requirements: ["Recent graduate in any field", "Strong interpersonal skills", "Willingness to learn", "Self-motivated", "Fluent in English and Swahili"],
  },
  {
    title: "Operations Coordinator",
    type: "Full-time",
    location: "Nairobi",
    salary: "Competitive",
    department: "Operations",
    description: "Coordinate daily operations across our active projects, manage vendor relationships, and ensure smooth communication between site teams and management.",
    requirements: ["3+ years in operations or project coordination", "Knowledge of construction processes", "Strong organizational skills", "Proficiency in MS Office"],
  },
];

const perks = [
  { icon: Star, title: "Career Growth", desc: "Clear progression paths and professional development opportunities." },
  { icon: TrendingUp, title: "Performance Bonuses", desc: "Rewarding compensation structure with uncapped earning potential." },
  { icon: Users, title: "Great Culture", desc: "Collaborative team environment with regular team events and activities." },
  { icon: MapPin, title: "Prime Location", desc: "Our office is centrally located in Nairobi's business district." },
];

export default function CareersPage() {
  return (
    <main className="bg-app-bg min-h-screen pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/" className="inline-flex items-center gap-1.5 text-muted hover:text-amber-500 text-sm mb-8 transition-colors">
          &larr; Back to Home
        </Link>
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl sm:text-5xl font-light text-primary mb-4">
            Careers
          </h1>
          <p className="text-secondary max-w-3xl mx-auto text-lg">
            Join a team that&apos;s reshaping Nairobi&apos;s real estate landscape. At Sapio Homes,
            we&apos;re building more than properties — we&apos;re building careers.
          </p>
        </div>

        {/* Perks */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {perks.map((p) => {
            const Icon = p.icon;
            return (
              <div key={p.title} className={"bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-6 text-center shadow-sm"}>
                <Icon className="w-8 h-8 text-amber-400 mx-auto mb-3" />
                <h3 className="text-primary font-semibold mb-1">{p.title}</h3>
                <p className="text-secondary text-xs">{p.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Open Positions */}
        <h2 className="font-serif text-2xl font-light text-primary mb-8">Open Positions</h2>
        <div className="space-y-6 mb-20">
          {jobOpenings.map((job) => (
            <div key={job.title} className={"bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm"}>
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="font-serif text-xl font-medium text-primary">{job.title}</h3>
                  <div className="flex flex-wrap gap-4 mt-2 text-sm text-secondary">
                    <span className="flex items-center gap-1">
                      <Briefcase className="w-4 h-4 text-amber-400" /> {job.type}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4 text-amber-400" /> {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <DollarSign className="w-4 h-4 text-amber-400" /> {job.salary}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4 text-amber-400" /> {job.department}
                    </span>
                  </div>
                </div>
                <span className="text-xs text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                  {job.type}
                </span>
              </div>
              <p className="text-secondary text-sm mb-4 leading-relaxed">{job.description}</p>
              <div>
                <h4 className="text-primary text-sm font-semibold mb-2">Requirements:</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {job.requirements.map((req) => (
                    <li key={req} className="flex items-start gap-2 text-secondary text-sm">
                      <span className="text-amber-400 mt-1">•</span>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6">
                <Link
                  href={`mailto:careers@sapiohome.com?subject=Application for ${encodeURIComponent(job.title)}`}
                  className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-2.5 rounded-xl transition-all text-sm"
                >
                  <Send className="w-4 h-4" /> Apply Now
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Spontaneous Application */}
        <div className={"bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-8 text-center shadow-sm"}>
          <h2 className="font-serif text-2xl font-light text-primary mb-4">Don&apos;t See the Right Role?</h2>
          <p className="text-secondary mb-6 max-w-xl mx-auto">
            We&apos;re always on the lookout for talented individuals. Send us your CV and
            we&apos;ll keep you in mind for future opportunities.
          </p>
          <Link
            href="mailto:careers@sapiohome.com"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-3 rounded-xl transition-all"
          >
            <Send className="w-5 h-5" /> Send Your CV
          </Link>
        </div>
      </div>
    </main>
  );
}
