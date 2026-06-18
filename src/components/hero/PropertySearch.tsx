"use client";

import { useState, useCallback } from "react";
import { Search } from "lucide-react";

interface Filters {
  type: string;
  budget: string;
  sqft: string;
}

export default function PropertySearch() {
  const [filters, setFilters] = useState<Filters>({ type: "", budget: "", sqft: "" });

  const handleSearch = useCallback(() => {
    const params = new URLSearchParams();
    if (filters.type) params.set("type", filters.type);
    if (filters.budget) params.set("budget", filters.budget);
    if (filters.sqft) params.set("sqft", filters.sqft);
    const qs = params.toString();
    const hash = qs ? `#properties?${qs}` : "#properties";
    window.location.hash = hash;
    const el = document.querySelector("#properties");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }, [filters]);

  const glassClass = "bg-white/10 dark:bg-white/10 backdrop-blur-2xl border border-white/20 shadow-xl";

  return (
    <div
      className={`w-full max-w-4xl ${glassClass} rounded-2xl p-4 sm:p-6`}
      role="search"
      aria-label="Property search"
    >
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <select
          value={filters.type}
          onChange={(e) => setFilters({ ...filters, type: e.target.value })}
          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-amber-500 appearance-none"
          aria-label="Property type"
        >
          <option value="" className="text-gray-800">Property Type</option>
          <option value="studio" className="text-gray-800">Studio</option>
          <option value="1bed" className="text-gray-800">1 Bedroom</option>
          <option value="2bed" className="text-gray-800">2 Bedroom</option>
          <option value="3bed" className="text-gray-800">3 Bedroom</option>
          <option value="4bed" className="text-gray-800">4 Bedroom</option>
        </select>

        <select
          value={filters.budget}
          onChange={(e) => setFilters({ ...filters, budget: e.target.value })}
          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-amber-500 appearance-none"
          aria-label="Budget range"
        >
          <option value="" className="text-gray-800">Budget (KSh)</option>
          <option value="5-10" className="text-gray-800">5M - 10M</option>
          <option value="10-15" className="text-gray-800">10M - 15M</option>
          <option value="15-20" className="text-gray-800">15M - 20M</option>
          <option value="20+" className="text-gray-800">20M+</option>
        </select>

        <select
          value={filters.sqft}
          onChange={(e) => setFilters({ ...filters, sqft: e.target.value })}
          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-amber-500 appearance-none"
          aria-label="Square footage"
        >
          <option value="" className="text-gray-800">Square Feet</option>
          <option value="500-1000" className="text-gray-800">500 - 1000 sqft</option>
          <option value="1000-1500" className="text-gray-800">1000 - 1500 sqft</option>
          <option value="1500-2000" className="text-gray-800">1500 - 2000 sqft</option>
          <option value="2000+" className="text-gray-800">2000+ sqft</option>
        </select>
      </div>

      <button
        onClick={handleSearch}
        className="w-full mt-4 bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 rounded-xl transition-all flex items-center justify-center space-x-2 shadow-lg shadow-amber-500/25"
      >
        <Search className="w-5 h-5" />
        <span>Search Properties</span>
      </button>
    </div>
  );
}
