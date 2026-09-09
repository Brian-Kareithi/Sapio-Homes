"use client";

import { useState, useCallback } from "react";
import { Search } from "lucide-react";

interface Filters {
  type: string;
  budget: string;
  sqft: string;
}

const FIELDS: {
  key: keyof Filters;
  label: string;
  placeholder: string;
  options: { value: string; label: string }[];
}[] = [
  {
    key: "type",
    label: "Property Type",
    placeholder: "Any type",
    options: [
      { value: "studio", label: "Studio" },
      { value: "1bed", label: "1 Bedroom" },
      { value: "2bed", label: "2 Bedroom" },
      { value: "3bed", label: "3 Bedroom" },
      { value: "4bed", label: "4 Bedroom" },
    ],
  },
  {
    key: "budget",
    label: "Budget (KSh)",
    placeholder: "Any budget",
    options: [
      { value: "5-10", label: "5M – 10M" },
      { value: "10-15", label: "10M – 15M" },
      { value: "15-20", label: "15M – 20M" },
      { value: "20+", label: "20M+" },
    ],
  },
  {
    key: "sqft",
    label: "Floor Area",
    placeholder: "Any size",
    options: [
      { value: "500-1000", label: "500 – 1,000 sqft" },
      { value: "1000-1500", label: "1,000 – 1,500 sqft" },
      { value: "1500-2000", label: "1,500 – 2,000 sqft" },
      { value: "2000+", label: "2,000+ sqft" },
    ],
  },
];

export default function PropertySearch() {
  const [filters, setFilters] = useState<Filters>({ type: "", budget: "", sqft: "" });

  const handleSearch = useCallback(() => {
    const params = new URLSearchParams();
    if (filters.type) params.set("type", filters.type);
    if (filters.budget) params.set("budget", filters.budget);
    if (filters.sqft) params.set("sqft", filters.sqft);
    const qs = params.toString();
    window.location.hash = qs ? `#properties?${qs}` : "#properties";
    document.querySelector("#properties")?.scrollIntoView({ behavior: "smooth" });
  }, [filters]);

  return (
    <div
      className="mx-auto w-full max-w-4xl rounded-2xl border border-white/15 bg-white/[0.07] p-2 shadow-[0_24px_80px_-24px_rgba(0,0,0,0.6)] backdrop-blur-2xl"
      role="search"
      aria-label="Property search"
    >
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-[1fr_1fr_1fr_auto]">
        {FIELDS.map((field) => (
          <label key={field.key} className="group flex flex-col gap-1 rounded-xl px-4 py-2.5 transition-colors hover:bg-white/5">
            <span className="text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-white/50">
              {field.label}
            </span>
            <select
              value={filters[field.key]}
              onChange={(e) => setFilters({ ...filters, [field.key]: e.target.value })}
              className="w-full cursor-pointer appearance-none bg-transparent text-sm text-white focus:outline-none"
              aria-label={field.label}
            >
              <option value="" className="bg-neutral-900 text-white">{field.placeholder}</option>
              {field.options.map((o) => (
                <option key={o.value} value={o.value} className="bg-neutral-900 text-white">
                  {o.label}
                </option>
              ))}
            </select>
          </label>
        ))}

        <button
          onClick={handleSearch}
          className="group m-1 flex items-center justify-center gap-2 rounded-xl bg-amber-500 px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-black transition-all duration-300 hover:bg-amber-400 sm:aspect-square sm:px-0"
          aria-label="Search properties"
        >
          <Search className="h-4 w-4" />
          <span className="sm:hidden">Search</span>
        </button>
      </div>
    </div>
  );
}
