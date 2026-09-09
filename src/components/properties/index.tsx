"use client";

import dynamic from "next/dynamic";
import ProjectList from "./ProjectList";
import ApartmentSection from "./ApartmentSection";

const Stats = dynamic(() => import("./Stats"), { ssr: false });

export default function PropertiesSection() {
  return (
    <section
      id="properties"
      className="scroll-mt-24 bg-app-secondary py-24 sm:py-32"
      aria-label="Sapio Homes properties"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4">
              <span className="u-hairline" />
              <span className="u-eyebrow">Projects</span>
            </div>
            <h2 className="mt-6 font-serif text-4xl font-light leading-[1.05] text-primary sm:text-5xl text-balance">
              A growing portfolio of{" "}
              <span className="italic text-amber-500">affordable luxury</span>.
            </h2>
          </div>
          <Stats />
        </div>

        <ProjectList />
        <ApartmentSection />
      </div>
    </section>
  );
}
