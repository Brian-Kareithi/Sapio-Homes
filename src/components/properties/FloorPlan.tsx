"use client";

import { useState } from "react";
import type { Apartment } from "./types";

export default function FloorPlan({ apt }: { apt: Apartment }) {
  const floors = 25;
  const [hovered, setHovered] = useState<number | null>(null);
  const [lo, hi] = apt.floorRange;

  return (
    <div className="flex flex-col gap-0.5 py-4">
      <div className="mb-3 text-[0.625rem] uppercase tracking-[0.2em] text-muted">
        Floor selector &middot; 25 Levels
      </div>
      <div className="max-h-60 overflow-y-auto pr-1.5">
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
                className="mb-0.5 flex cursor-default items-center gap-2"
              >
                <div
                  className={`h-2 flex-1 rounded-sm transition-colors ${
                    inRange
                      ? isHov
                        ? "bg-amber-500"
                        : "bg-amber-500/55"
                      : "bg-app-border"
                  }`}
                />
                {inRange && isHov && (
                  <span className="whitespace-nowrap text-[0.5625rem] uppercase tracking-[0.15em] text-amber-500">
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
