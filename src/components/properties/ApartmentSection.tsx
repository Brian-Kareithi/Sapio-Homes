"use client";

import { useState, useEffect } from "react";
import { apartments, parseSearchFilters, matchApartmentFilters } from "./types";
import FloorPlan from "./FloorPlan";
import ApartmentViewer from "./ApartmentViewer";

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
    <div style={{ marginTop: 96 }}>
      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: 24, marginBottom: 48 }}>
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              fontSize: 11,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "var(--props-accent)",
              marginBottom: 16,
            }}
          >
            <span style={{ height: 1, width: 40, background: "var(--props-accent)", display: "inline-block" }} />
            The Collection
          </div>
          <h3
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "clamp(32px, 4vw, 52px)",
              fontWeight: 300,
              color: "var(--props-text)",
              lineHeight: 1.05,
              letterSpacing: "-0.01em",
              margin: 0,
            }}
          >
            Three typologies.{" "}
            <span style={{ fontStyle: "italic" }}>One vertical neighborhood.</span>
          </h3>
        </div>
        <p style={{ maxWidth: 360, fontSize: 13, color: "var(--props-text-muted)", lineHeight: 1.7, margin: 0 }}>
          From compact studios to expansive sky residences, every unit is engineered around natural
          light, airflow, and a sense of space.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 32,
          alignItems: "start",
        }}
      >
        <div>
          {apartments.map((a, i) => {
            const isActive = active === a.id;
            return (
              <button
                key={a.id}
                onClick={() => setActive(a.id)}
                style={{
                  width: "100%",
                  textAlign: "left",
                  background: isActive ? "rgba(212,168,71,0.07)" : "transparent",
                  border: "none",
                  borderTop: "1px solid var(--props-border)",
                  borderBottom: i === apartments.length - 1 ? "1px solid var(--props-border)" : "none",
                  padding: isActive ? "24px 20px" : "24px 0",
                  cursor: "pointer",
                  transition: "all 0.25s",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) e.currentTarget.style.paddingLeft = "16px";
                }}
                onMouseLeave={(e) => {
                  if (!isActive) e.currentTarget.style.paddingLeft = "0";
                }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
                  <div>
                    <div style={{ fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--props-text-muted)", marginBottom: 6 }}>
                      {a.code} / Type
                    </div>
                    <div
                      style={{
                        fontFamily: "'Cormorant Garamond', Georgia, serif",
                        fontSize: 22,
                        fontWeight: 300,
                        color: "var(--props-text)",
                        lineHeight: 1.2,
                      }}
                    >
                      {a.name}
                    </div>
                    <div style={{ marginTop: 4, fontSize: 12, color: "var(--props-text-muted)" }}>
                      {a.size} &middot; {a.price}
                    </div>
                  </div>
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      border: `1px solid ${isActive ? "var(--props-accent)" : "var(--props-border)"}`,
                      display: "grid",
                      placeItems: "center",
                      color: isActive ? "var(--props-accent)" : "var(--props-text-muted)",
                      background: isActive ? "rgba(212,168,71,0.1)" : "transparent",
                      flexShrink: 0,
                      fontSize: 14,
                      transition: "all 0.2s",
                    }}
                  >
                    &rarr;
                  </div>
                </div>
              </button>
            );
          })}

          <div
            style={{
              marginTop: 24,
              padding: 20,
              background: "var(--props-surface)",
              border: "1px solid var(--props-border)",
              borderRadius: 2,
            }}
          >
            <FloorPlan apt={current} />
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <ApartmentViewer apt={current} />
          <div style={{ borderLeft: "2px solid var(--props-accent)", paddingLeft: 16 }}>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 17,
                fontStyle: "italic",
                color: "var(--props-text-secondary)",
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              {current.description}
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <div
              style={{
                padding: 20,
                background: "var(--props-surface)",
                border: "1px solid var(--props-border)",
              }}
            >
              <div style={{ fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--props-text-muted)", marginBottom: 12 }}>
                Features
              </div>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                {current.features.map((f) => (
                  <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 12, color: "var(--props-text-secondary)" }}>
                    <span style={{ marginTop: 6, height: 1, width: 16, background: "var(--props-accent)", flexShrink: 0, display: "inline-block" }} />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <div
                style={{
                  padding: 20,
                  background: "rgba(212,168,71,0.06)",
                  border: "1px solid rgba(212,168,71,0.2)",
                  flex: 1,
                }}
              >
                <div style={{ fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--props-text-muted)", marginBottom: 6 }}>
                  Starting price
                </div>
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: 26,
                    fontWeight: 300,
                    color: "var(--props-accent)",
                  }}
                >
                  {current.price}
                </div>
                <div
                  style={{
                    marginTop: 6,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    fontSize: 10,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: current.statusColor,
                    fontWeight: 700,
                  }}
                >
                  <span style={{ width: 5, height: 5, borderRadius: "50%", background: current.statusColor, display: "inline-block" }} />
                  {current.status}
                </div>
              </div>

              <a
                href="#contact"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  background: "var(--props-accent)",
                  color: "#0b0f17",
                  padding: "14px 18px",
                  textDecoration: "none",
                  fontSize: 10,
                  fontWeight: 800,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#c49730")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "var(--props-accent)")}
              >
                Book a viewing <span>&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
