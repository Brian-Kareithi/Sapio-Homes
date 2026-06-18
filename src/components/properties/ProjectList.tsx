"use client";

import { useState, useEffect, useMemo } from "react";
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
    <div style={{ borderTop: "1px solid var(--props-border)", marginTop: 48 }}>
      {hasFilters && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "16px 0",
            borderBottom: "1px solid var(--props-border)",
          }}
        >
          <span style={{ fontSize: 11, color: "var(--props-accent)", letterSpacing: "0.15em", textTransform: "uppercase" }}>
            {filtered.length} {filtered.length === 1 ? "result" : "results"} found
          </span>
          <button
            onClick={clearFilters}
            style={{
              fontSize: 10,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--props-text-muted)",
              background: "rgba(212,168,71,0.1)",
              border: "1px solid rgba(212,168,71,0.3)",
              padding: "6px 14px",
              borderRadius: 2,
              cursor: "pointer",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(212,168,71,0.2)";
              e.currentTarget.style.color = "var(--props-accent)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(212,168,71,0.1)";
              e.currentTarget.style.color = "var(--props-text-muted)";
            }}
          >
            Clear filters &times;
          </button>
        </div>
      )}
      {filtered.length === 0 ? (
        <div
          style={{
            textAlign: "center",
            padding: "64px 24px",
            color: "var(--props-text-muted)",
            fontSize: 13,
            letterSpacing: "0.15em",
          }}
        >
          No properties match your search criteria.
        </div>
      ) : (
        filtered.map((p) => {
          const isSelling = p.status === "Selling Now" || p.status.startsWith("Ongoing");
          return (
            <a
              key={p.code}
              href="#contact"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 24,
                borderBottom: "1px solid var(--props-border)",
                padding: "24px 0",
                textDecoration: "none",
                transition: "padding 0.2s, background 0.2s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--props-surface)";
                e.currentTarget.style.paddingLeft = "20px";
                e.currentTarget.style.paddingRight = "20px";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.paddingLeft = "0";
                e.currentTarget.style.paddingRight = "0";
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
                <span
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: 13,
                    color: "var(--props-text-muted)",
                  }}
                >
                  {p.code}
                </span>
                <div>
                  <div
                    style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      fontSize: 20,
                      fontWeight: 300,
                      color: "var(--props-text)",
                    }}
                  >
                    {p.name}
                  </div>
                  <div style={{ marginTop: 2, fontSize: 11, color: "var(--props-text-muted)" }}>
                    {p.type} &middot; {p.location}
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
                <span
                  style={{
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: isSelling ? "var(--props-accent)" : "var(--props-text-muted)",
                  }}
                >
                  {p.status}
                </span>
                <div
                  style={{
                    width: 40,
                    height: 40,
                    border: "1px solid var(--props-border)",
                    display: "grid",
                    placeItems: "center",
                    color: "var(--props-text-muted)",
                    fontSize: 16,
                    flexShrink: 0,
                    transition: "all 0.2s",
                  }}
                >
                  &rarr;
                </div>
              </div>
            </a>
          );
        })
      )}
    </div>
  );
}
