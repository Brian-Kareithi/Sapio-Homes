import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";
import { projects } from "@/lib/projects";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore the Sapio Homes portfolio — Park Road Residency, Westway Apartments, Hillside Gardens and more. Affordable luxury apartments for sale and off-plan in Nairobi.",
};

const statusStyles: Record<string, string> = {
  "Selling Now": "bg-amber-500 text-black",
  "Off-Plan": "bg-amber-500/15 text-amber-500 border border-amber-500/30",
  Completed: "bg-app-surface text-secondary border border-app-border",
  "Sold Out": "bg-app-surface text-muted border border-app-border",
};

export default function ProjectsPage() {
  const active = projects.filter((p) => p.status === "Selling Now" || p.status === "Off-Plan");
  const past = projects.filter((p) => p.status === "Completed" || p.status === "Sold Out");

  return (
    <div className="min-h-screen pt-20">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-amber-500"
        >
          &larr; Back to Home
        </Link>

        <SectionHeading
          align="left"
          eyebrow="The Portfolio"
          title="A growing portfolio of affordable luxury"
          description="Over 1,300 units delivered and in development across Nairobi's most connected neighbourhoods."
          className="mt-8"
        />

        <h2 className="mt-16 font-serif text-2xl font-light text-primary">Available Now</h2>
        <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-2">
          {active.map((p) => (
            <Link key={p.slug} href={`/projects/${p.slug}`} className="group u-card u-card-interactive overflow-hidden">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <span className={`absolute left-4 top-4 rounded-full px-3 py-1 text-[0.625rem] font-semibold uppercase tracking-[0.15em] ${statusStyles[p.status]}`}>
                  {p.status}
                </span>
              </div>
              <div className="p-7">
                <div className="flex items-center gap-2 text-xs text-muted">
                  <MapPin className="h-3.5 w-3.5" /> {p.location}
                </div>
                <h3 className="mt-2 font-serif text-2xl font-light text-primary">{p.name}</h3>
                <p className="mt-1 text-sm text-secondary">{p.unitSummary}</p>
                <div className="mt-5 flex items-center justify-between border-t border-app-border pt-4">
                  <div>
                    <div className="text-[0.625rem] uppercase tracking-[0.18em] text-muted">From</div>
                    <div className="font-serif text-xl text-amber-500">{p.priceFrom}</div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-primary transition-all group-hover:gap-2.5 group-hover:text-amber-500">
                    View <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <h2 className="mt-20 font-serif text-2xl font-light text-primary">Delivered &amp; Sold Out</h2>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {past.map((p) => (
            <Link key={p.slug} href={`/projects/${p.slug}`} className="group u-card u-card-interactive p-6">
              <div className="flex items-center justify-between">
                <span className="font-serif text-sm text-muted">{p.code}</span>
                <span className={`rounded-full px-2.5 py-0.5 text-[0.625rem] font-semibold uppercase tracking-[0.14em] ${statusStyles[p.status]}`}>
                  {p.status}
                </span>
              </div>
              <h3 className="mt-3 font-serif text-xl font-light text-primary group-hover:text-amber-500">{p.name}</h3>
              <p className="mt-1 text-xs text-muted">{p.unitSummary} · {p.location}</p>
            </Link>
          ))}
        </div>

        <div className="mt-20 rounded-2xl border border-app-border bg-app-secondary p-10 text-center">
          <h2 className="font-serif text-2xl font-light text-primary">Looking for something specific?</h2>
          <p className="mx-auto mt-3 max-w-xl text-secondary">
            Our advisory team can match you to the right unit, floor and payment plan across the portfolio.
          </p>
          <Link
            href="/#contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-amber-500 px-8 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-black transition-all hover:bg-amber-400"
          >
            Talk to an Advisor
          </Link>
        </div>
      </div>
    </div>
  );
}
