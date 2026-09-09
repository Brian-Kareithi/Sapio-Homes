"use client";

import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { apartments, parseSearchFilters, matchApartmentFilters } from "./types";
import FloorPlan from "./FloorPlan";
import ApartmentViewer from "./ApartmentViewer";

const statusDotColor: Record<string, string> = {
  Available: "bg-emerald-500",
  "Selling Now": "bg-emerald-500",
  Limited: "bg-red-500",
};

export default function ApartmentSection() {
  const [active, setActive] = useState("one");

  useEffect(() => {
    const onHashChange = () => {
      const filters = parseSearchFilters(window.location.hash);
      if (filters?.type) {
        const match = apartments.find((a) => matchApartmentFilters(a, filters));
        if (match) setActive(match.id);
      }
    };
    onHashChange();
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const current = apartments.find((a) => a.id === active)!;

  return (
    <div className="mt-24">
      <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
        <div>
          <div className="flex items-center gap-4">
            <span className="u-hairline" />
            <span className="u-eyebrow">The Collection</span>
          </div>
          <h3 className="mt-5 font-serif text-3xl font-light leading-[1.1] text-primary sm:text-4xl">
            Three typologies.{" "}
            <span className="italic text-amber-500">One vertical neighborhood.</span>
          </h3>
        </div>
        <p className="max-w-sm text-sm leading-relaxed text-muted">
          From compact studios to expansive sky residences, every unit is engineered around
          natural light, airflow, and a sense of space.
        </p>
      </div>

      <div className="grid items-start gap-8 lg:grid-cols-2">
        <div>
          {apartments.map((a, i) => {
            const isActive = active === a.id;
            return (
              <button
                key={a.id}
                onClick={() => setActive(a.id)}
                aria-pressed={isActive}
                className={`flex w-full items-center justify-between gap-3 border-b border-app-border bg-transparent py-6 text-left transition-all duration-300 ${
                  isActive ? "px-5 bg-amber-500/5" : ""
                } ${i === apartments.length - 1 ? "border-b" : ""}`}
              >
                <div>
                  <div className="mb-1.5 text-[0.625rem] uppercase tracking-[0.22em] text-muted">
                    {a.code} / Type
                  </div>
                  <div className="font-serif text-2xl font-light text-primary">{a.name}</div>
                  <div className="mt-1 text-xs text-muted">
                    {a.size} &middot; {a.price}
                  </div>
                </div>
                <div
                  className={`flex h-9 w-9 flex-shrink-0 items-center justify-center border transition-all ${
                    isActive
                      ? "border-amber-400 bg-amber-500/10 text-amber-500"
                      : "border-app-border text-muted"
                  }`}
                >
                  <ArrowRight className="h-4 w-4" />
                </div>
              </button>
            );
          })}

          <div className="mt-6 rounded-2xl border border-app-border bg-surface p-5">
            <FloorPlan apt={current} />
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <ApartmentViewer apt={current} />
          <div className="border-l-2 border-amber-400 pl-4">
            <p className="font-serif text-lg italic leading-relaxed text-secondary">
              {current.description}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl border border-app-border bg-surface p-5">
              <div className="mb-3 text-[0.625rem] uppercase tracking-[0.22em] text-muted">
                Features
              </div>
              <ul className="flex flex-col gap-2">
                {current.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-xs text-secondary">
                    <span className="mt-1.5 inline-block h-px w-4 flex-shrink-0 bg-amber-400" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex-1 rounded-2xl border border-amber-500/20 bg-amber-500/5 p-5">
                <div className="mb-1.5 text-[0.625rem] uppercase tracking-[0.22em] text-muted">
                  Starting price
                </div>
                <div className="font-serif text-2xl font-light text-amber-500">{current.price}</div>
                <div className="mt-1.5 inline-flex items-center gap-1.5 text-[0.625rem] font-bold uppercase tracking-[0.15em] text-secondary">
                  <span
                    className={`inline-block h-1.5 w-1.5 rounded-full ${statusDotColor[current.status] ?? "bg-amber-500"}`}
                  />
                  {current.status}
                </div>
              </div>

              <a
                href="#contact"
                className="flex items-center justify-between rounded-2xl bg-amber-500 px-5 py-3.5 text-[0.625rem] font-extrabold uppercase tracking-[0.2em] text-black transition-colors hover:bg-amber-400"
              >
                Book a viewing <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
