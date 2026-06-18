"use client";

import { Suspense, useState } from "react";
import dynamic from "next/dynamic";
import type { Apartment } from "./types";
import ErrorBoundary from "@/components/ui/ErrorBoundary";

const Tower3D = dynamic(() => import("./Building3D"), { ssr: false });

function FallbackView({ apt }: { apt: Apartment }) {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "var(--props-bg)",
        color: "var(--props-text-muted)",
        fontSize: 13,
        gap: 12,
      }}
    >
      <div
        style={{
          width: 48,
          height: 48,
          border: "2px solid var(--props-border)",
          display: "grid",
          placeItems: "center",
          fontSize: 20,
        }}
      >
        {apt.code}
      </div>
      <span>{apt.name}</span>
    </div>
  );
}

export default function ApartmentViewer({ apt }: { apt: Apartment }) {
  const [interactive, setInteractive] = useState(false);

  return (
    <div
      style={{
        position: "relative",
        borderRadius: 2,
        overflow: "hidden",
        background: "var(--props-bg)",
        aspectRatio: "4/3",
        border: "1px solid var(--props-border)",
      }}
    >
      <ErrorBoundary fallback={<FallbackView apt={apt} />}>
        <Suspense fallback={<FallbackView apt={apt} />}>
          <Tower3D interactive={interactive} />
        </Suspense>
      </ErrorBoundary>

      <div
        style={{
          position: "absolute",
          top: 16,
          left: 16,
          display: "flex",
          alignItems: "center",
          gap: 8,
          background: "rgba(11,15,23,0.85)",
          backdropFilter: "blur(6px)",
          padding: "6px 12px",
          borderRadius: 2,
          border: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <span
          style={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            background: apt.statusColor,
            flexShrink: 0,
          }}
        />
        <span style={{ fontSize: 10, color: "rgba(255,255,255,0.8)", letterSpacing: "0.2em", textTransform: "uppercase" }}>
          {apt.status}
        </span>
      </div>

      <div
        style={{
          position: "absolute",
          top: 16,
          right: 16,
          background: "rgba(212,168,71,0.15)",
          border: "1px solid rgba(212,168,71,0.4)",
          padding: "6px 12px",
          borderRadius: 2,
        }}
      >
        <span style={{ fontSize: 10, color: "var(--props-accent)", letterSpacing: "0.2em", textTransform: "uppercase" }}>
          Floors {apt.floorRange[0] + 1}&ndash;{apt.floorRange[1] + 1}
        </span>
      </div>

      <button
        onClick={() => setInteractive((v) => !v)}
        style={{
          position: "absolute",
          bottom: 16,
          right: 16,
          background: interactive ? "var(--props-accent)" : "rgba(11,15,23,0.85)",
          color: interactive ? "#0b0f17" : "rgba(255,255,255,0.8)",
          border: `1px solid ${interactive ? "var(--props-accent)" : "rgba(255,255,255,0.2)"}`,
          backdropFilter: "blur(6px)",
          padding: "8px 16px",
          borderRadius: 2,
          cursor: "pointer",
          fontSize: 10,
          fontWeight: 700,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          transition: "all 0.2s",
          zIndex: 10,
        }}
      >
        {interactive ? "\u27F3 Auto-rotate" : "\u2922 Explore 3D"}
      </button>

      {interactive && (
        <div
          style={{
            position: "absolute",
            bottom: 16,
            left: 16,
            background: "rgba(11,15,23,0.75)",
            padding: "6px 10px",
            borderRadius: 2,
            fontSize: 10,
            color: "rgba(255,255,255,0.5)",
            letterSpacing: "0.1em",
          }}
        >
          Drag to orbit &middot; Scroll to zoom
        </div>
      )}
    </div>
  );
}
