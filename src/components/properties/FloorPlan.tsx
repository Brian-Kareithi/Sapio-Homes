"use client";

import { useState } from "react";
import type { Apartment } from "./types";

export default function FloorPlan({ apt }: { apt: Apartment }) {
  const floors = 25;
  const [hovered, setHovered] = useState<number | null>(null);
  const [lo, hi] = apt.floorRange;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 2, padding: "16px 0" }}>
      <div style={{ fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--props-text-muted)", marginBottom: 8 }}>
        Floor selector &middot; 25 Levels
      </div>
      <div style={{ maxHeight: 240, overflowY: "auto", paddingRight: 6 }}>
        {Array.from({ length: floors })
          .map((_, i) => floors - 1 - i)
          .map((i) => {
            const inRange = i >= lo && i <= hi;
            const isHov = hovered === i;
            return (
              <div
                key={i}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  cursor: inRange ? "pointer" : "default",
                  marginBottom: 3,
                }}
              >
                <div
                  style={{
                    height: 8,
                    flex: 1,
                    borderRadius: 2,
                    background: inRange
                      ? isHov
                        ? "var(--props-accent)"
                        : "rgba(212,168,71,0.55)"
                      : "var(--props-border)",
                    transition: "background 0.2s",
                  }}
                />
                {inRange && isHov && (
                  <span style={{ fontSize: 9, color: "var(--props-accent)", letterSpacing: "0.15em", textTransform: "uppercase", whiteSpace: "nowrap" }}>
                    Floor {i + 1}
                  </span>
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
}
