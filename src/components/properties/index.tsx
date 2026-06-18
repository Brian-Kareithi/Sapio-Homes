"use client";

import dynamic from "next/dynamic";
import ProjectList from "./ProjectList";
import ApartmentSection from "./ApartmentSection";

const Stats = dynamic(() => import("./Stats"), { ssr: false });

export default function PropertiesSection() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&display=swap');
        * { box-sizing: border-box; }
        a { transition: all 0.2s; }
      `}</style>

      <section
        id="properties"
        style={{
          background: "var(--props-bg)",
          padding: "96px 0",
          fontFamily: "'DM Sans', system-ui, sans-serif",
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "0 24px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: 32,
              marginBottom: 0,
            }}
          >
            <div style={{ maxWidth: 640 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  fontSize: 11,
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: "var(--props-text-muted)",
                  marginBottom: 16,
                }}
              >
                <span style={{ height: 1, width: 40, background: "var(--props-accent)", display: "inline-block" }} />
                Projects
              </div>
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: "clamp(36px, 5vw, 64px)",
                  fontWeight: 300,
                  color: "var(--props-text)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.01em",
                  margin: 0,
                }}
              >
                A growing portfolio of{" "}
                <span style={{ fontStyle: "italic" }}>affordable luxury</span>.
              </h2>
            </div>
            <Stats />
          </div>

          <ProjectList />
          <ApartmentSection />
        </div>
      </section>
    </>
  );
}
