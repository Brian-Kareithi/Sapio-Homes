"use client";

import { useState, useEffect, useMemo } from "react";
import { ArrowRight } from "lucide-react";
import { projects, parseSearchFilters, matchFilters, type SearchFilters } from "./types";

export default function ProjectList() {
  const [filters, setFilters] = useState<SearchFilters | null>(null);

  useEffect(() => {
    const onHashChange = () => {
      setFilters(parseSearchFilters(window.location.hash));
    };
    onHashChange();
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const filtered = useMemo(() => {
    if (!filters) return projects;
    return projects.filter((p) => matchFilters(p, filters));
  }, [filters]);

  const clearFilters = () => {
    window.location.hash = "#properties";
    setFilters(null);
  };

  const hasFilters = filters !== null;

  return (
    <div className="mt-14 border-t border-app-border">
      {hasFilters && (
        <div className="flex items-center justify-between border-b border-app-border px-0 py-4">
          <span className="text-[0.6875rem] uppercase tracking-[0.16em] text-amber-500">
            {filtered.length} {filtered.length === 1 ? "result" : "results"} found
          </span>
          <button
            onClick={clearFilters}
            className="rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-[0.625rem] uppercase tracking-[0.2em] text-amber-600 transition-all hover:bg-amber-500/20"
          >
            Clear filters &times;
          </button>
        </div>
      )}

      {filtered.length === 0 ? (
        <div className="py-20 text-center text-sm uppercase tracking-[0.15em] text-muted">
          No properties match your search criteria.
        </div>
      ) : (
        filtered.map((p) => {
          const isSelling =
            p.status === "Selling Now" ||
            p.status.startsWith("Ongoing") ||
            p.status.startsWith("Off-Plan");
          return (
            <a
              key={p.code}
              href={`/projects/${p.slug}`}
              className="group flex items-center justify-between gap-6 border-b border-app-border px-0 py-6 transition-all duration-300 hover:bg-surface hover:px-4"
            >
              <div className="flex items-center gap-7">
                <span className="font-serif text-sm text-muted">{p.code}</span>
                <div>
                  <div className="font-serif text-xl font-light text-primary transition-colors group-hover:text-amber-500">
                    {p.name}
                  </div>
                  <div className="mt-0.5 text-[0.6875rem] text-muted">
                    {p.type} &middot; {p.location}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <span
                  className={`text-[0.625rem] font-bold uppercase tracking-[0.22em] ${
                    isSelling ? "text-amber-500" : "text-muted"
                  }`}
                >
                  {p.status}
                </span>
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center border border-app-border text-muted transition-all group-hover:border-amber-400 group-hover:bg-amber-500 group-hover:text-black">
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </a>
          );
        })
      )}
    </div>
  );
}
