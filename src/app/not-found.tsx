import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you're looking for doesn't exist or has been moved.",
};

const links = [
  { name: "Properties", href: "/properties" },
  { name: "Company Profile", href: "/company-profile" },
  { name: "Our Team", href: "/team" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/#contact" },
];

export default function NotFound() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-app-bg px-6 pt-24 pb-16">
      <div className="mx-auto max-w-xl text-center">
        <div className="flex items-center justify-center gap-4">
          <span className="u-hairline" />
          <span className="u-eyebrow">Error 404</span>
          <span className="u-hairline rotate-180" />
        </div>

        <p className="mt-8 font-serif text-[7rem] font-light leading-none text-amber-500 sm:text-[9rem]">
          404
        </p>

        <h1 className="mt-2 font-serif text-3xl font-light text-primary sm:text-4xl">
          This address doesn&apos;t exist
        </h1>
        <p className="mx-auto mt-4 max-w-md leading-relaxed text-secondary">
          The page you&apos;re looking for may have been moved, renamed, or is no longer
          available. Let&apos;s get you back on track.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 rounded-full bg-amber-500 px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-black transition-all duration-300 hover:bg-amber-400"
          >
            <Home className="h-4 w-4" />
            Back to Home
          </Link>
          <Link
            href="/properties"
            className="inline-flex items-center gap-2 rounded-full border border-app-border px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-primary transition-all duration-300 hover:border-amber-400 hover:text-amber-500"
          >
            <ArrowLeft className="h-4 w-4" />
            Browse Properties
          </Link>
        </div>

        <div className="mt-14 border-t border-app-border pt-8">
          <p className="u-eyebrow">Popular Pages</p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-secondary transition-colors hover:text-amber-500"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
