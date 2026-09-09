import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Check, MapPin } from "lucide-react";
import { projects, getProject } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: project.name,
    description: `${project.name} by Sapio Homes — ${project.unitSummary} in ${project.location}. ${project.tagline}. Completion ${project.completion}.`,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const isAvailable = project.status === "Selling Now" || project.status === "Off-Plan";

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <div className="relative h-[52vh] min-h-[380px] w-full overflow-hidden">
        <Image src={project.image} alt={project.name} fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30" />
        <div className="absolute inset-x-0 bottom-0">
          <div className="mx-auto max-w-7xl px-6 pb-10 lg:px-8">
            <Link
              href="/projects"
              className="text-sm text-white/70 transition-colors hover:text-amber-300"
            >
              &larr; All Projects
            </Link>
            <div className="mt-4 flex items-center gap-3">
              <span className="rounded-full bg-amber-500 px-3 py-1 text-[0.625rem] font-semibold uppercase tracking-[0.15em] text-black">
                {project.status}
              </span>
              <span className="flex items-center gap-1.5 text-sm text-white/80">
                <MapPin className="h-4 w-4" /> {project.neighborhood}
              </span>
            </div>
            <h1 className="mt-3 font-serif text-4xl font-light text-white sm:text-6xl">{project.name}</h1>
            <p className="mt-2 font-serif text-lg italic text-amber-300">{project.tagline}</p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_360px]">
          {/* Main */}
          <div>
            <div className="flex items-center gap-4">
              <span className="u-hairline" />
              <span className="u-eyebrow">Overview</span>
            </div>
            {project.overview.map((p, i) => (
              <p key={i} className="mt-5 text-lg leading-relaxed text-secondary">{p}</p>
            ))}

            {/* Units */}
            <h2 className="mt-14 font-serif text-3xl font-light text-primary">Units &amp; pricing</h2>
            <div className="mt-6 overflow-x-auto">
              <table className="w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-app-border text-[0.6875rem] uppercase tracking-[0.15em] text-muted">
                    <th className="py-3 pr-4 font-medium">Type</th>
                    <th className="py-3 pr-4 font-medium">Layout</th>
                    <th className="py-3 pr-4 font-medium">Size</th>
                    <th className="py-3 pr-4 font-medium">Price</th>
                    <th className="py-3 pr-4 font-medium">Deposit</th>
                    <th className="py-3 font-medium">Installment</th>
                  </tr>
                </thead>
                <tbody>
                  {project.units.map((u) => (
                    <tr key={u.name} className="border-b border-app-border/60 text-secondary">
                      <td className="py-4 pr-4 font-serif text-base text-primary">{u.name}</td>
                      <td className="py-4 pr-4">{u.beds}</td>
                      <td className="py-4 pr-4">{u.size}</td>
                      <td className="py-4 pr-4 font-medium text-amber-500">{u.price}</td>
                      <td className="py-4 pr-4">{u.deposit ?? "—"}</td>
                      <td className="py-4">{u.installment ? `${u.installment}${u.term ? ` · ${u.term}` : ""}` : "—"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Amenities */}
            <h2 className="mt-14 font-serif text-3xl font-light text-primary">Amenities</h2>
            <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {project.amenities.map((a) => (
                <li key={a} className="flex items-start gap-3 text-secondary">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-500" />
                  {a}
                </li>
              ))}
            </ul>

            {project.nearby && (
              <>
                <h2 className="mt-14 font-serif text-3xl font-light text-primary">The neighbourhood</h2>
                <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
                  {project.nearby.map((n) => (
                    <div key={n.label} className="rounded-xl border border-app-border p-4">
                      <div className="font-serif text-lg text-primary">{n.distance}</div>
                      <div className="text-xs uppercase tracking-[0.14em] text-muted">{n.label}</div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Sticky sidebar */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="u-card p-7">
              <div className="text-[0.6875rem] uppercase tracking-[0.18em] text-muted">
                {isAvailable ? "Starting from" : "Status"}
              </div>
              <div className="mt-1 font-serif text-3xl font-light text-amber-500">{project.priceFrom}</div>

              <dl className="mt-6 space-y-3 border-t border-app-border pt-6 text-sm">
                <div className="flex justify-between">
                  <dt className="text-muted">Location</dt>
                  <dd className="text-primary">{project.location}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted">Units</dt>
                  <dd className="text-primary">{project.unitSummary}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted">Completion</dt>
                  <dd className="text-primary">{project.completion}</dd>
                </div>
              </dl>

              <div className="mt-6 space-y-2 border-t border-app-border pt-6">
                {project.investment.map((m) => (
                  <div key={m.label} className="flex justify-between text-sm">
                    <span className="text-muted">{m.label}</span>
                    <span className="font-medium text-primary">{m.value}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/#contact"
                className="mt-7 flex items-center justify-center gap-2 rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-black transition-all hover:bg-amber-400"
              >
                {isAvailable ? "Book a Viewing" : "Enquire"}
              </Link>
              <a
                href="tel:+254113556551"
                className="mt-3 flex items-center justify-center gap-2 rounded-full border border-app-border px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-primary transition-all hover:border-amber-400 hover:text-amber-500"
              >
                Call +254 113 556 551
              </a>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
