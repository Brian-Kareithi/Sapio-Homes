"use client";

import { Suspense, useState } from "react";
import dynamic from "next/dynamic";
import type { Apartment } from "./types";
import ErrorBoundary from "@/components/ui/ErrorBoundary";

const Tower3D = dynamic(() => import("./Building3D"), { ssr: false });

function FallbackView({ apt }: { apt: Apartment }) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-surface text-sm text-muted">
      <div className="grid h-12 w-12 place-items-center border border-app-border text-lg">
        {apt.code}
      </div>
      <span>{apt.name}</span>
    </div>
  );
}

const statusDotColor: Record<string, string> = {
  Available: "bg-emerald-500",
  "Selling Now": "bg-emerald-500",
  Limited: "bg-red-500",
};

export default function ApartmentViewer({ apt }: { apt: Apartment }) {
  const [interactive, setInteractive] = useState(false);

  return (
    <div className="relative aspect-4/3 overflow-hidden rounded-2xl border border-app-border bg-surface">
      <ErrorBoundary fallback={<FallbackView apt={apt} />}>
        <Suspense fallback={<FallbackView apt={apt} />}>
          <Tower3D interactive={interactive} />
        </Suspense>
      </ErrorBoundary>

      <div className="absolute left-4 top-4 flex items-center gap-2 rounded-md border border-white/10 bg-slate-950/85 px-3 py-1.5 backdrop-blur-md">
        <span
          className={`h-1.5 w-1.5 flex-shrink-0 rounded-full ${statusDotColor[apt.status] ?? "bg-amber-500"}`}
        />
        <span className="text-[0.625rem] uppercase tracking-[0.2em] text-white/80">
          {apt.status}
        </span>
      </div>

      <div className="absolute right-4 top-4 rounded-md border border-amber-500/40 bg-amber-500/15 px-3 py-1.5 backdrop-blur-md">
        <span className="text-[0.625rem] uppercase tracking-[0.2em] text-amber-400">
          Floors {apt.floorRange[0] + 1}&ndash;{apt.floorRange[1] + 1}
        </span>
      </div>

      <button
        onClick={() => setInteractive((v) => !v)}
        className="absolute bottom-4 right-4 z-10 cursor-pointer rounded-lg border px-4 py-2 text-[0.625rem] font-bold uppercase tracking-[0.2em] backdrop-blur-md transition-all"
        style={{
          background: interactive ? "#d4a847" : "rgba(11,15,23,0.85)",
          color: interactive ? "#0b0f17" : "rgba(255,255,255,0.8)",
          borderColor: interactive ? "#d4a847" : "rgba(255,255,255,0.2)",
        }}
      >
        {interactive ? "\u27F3 Auto-rotate" : "\u2922 Explore 3D"}
      </button>

      {interactive && (
        <div className="absolute bottom-4 left-4 rounded-md bg-slate-950/75 px-2.5 py-1.5 text-[0.625rem] text-white/50">
          Drag to orbit &middot; Scroll to zoom
        </div>
      )}
    </div>
  );
}
