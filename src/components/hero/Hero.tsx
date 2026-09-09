"use client";

import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import PropertySearch from "./PropertySearch";

const images = [
  "https://ppkfgsakvcijmmhjwbcz.supabase.co/storage/v1/object/public/Photos/real%20estate%20one.jpg",
  "https://ppkfgsakvcijmmhjwbcz.supabase.co/storage/v1/object/public/Photos/real%20estate%20two.jpg",
  "https://ppkfgsakvcijmmhjwbcz.supabase.co/storage/v1/object/public/Photos/real%20estate%20three.jpg",
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] flex-col overflow-hidden"
      aria-label="Hero banner"
    >
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${
            currentImage === index ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden="true"
        >
          <div
            className={`h-full w-full bg-cover bg-center ${
              currentImage === index ? "animate-kenburns" : ""
            }`}
            style={{ backgroundImage: `url(${img})` }}
          />
        </div>
      ))}

      {/* Cinematic scrim — darkest at edges, readable behind text */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-black/80"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.55)_100%)]"
        aria-hidden="true"
      />

      <div className="relative flex flex-1 flex-col items-center justify-center px-6 pt-28 pb-16">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-amber-400" />
            <span className="u-eyebrow !text-amber-300">Affordable Luxury Living · Nairobi</span>
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-amber-400" />
          </div>

          <h1 className="font-serif text-5xl font-light leading-[1.05] text-white sm:text-6xl md:text-7xl lg:text-[5rem] text-balance">
            Where intelligent design
            <span className="block italic text-amber-300">meets a life of distinction</span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/75 text-pretty">
            Sapio Homes curates, develops, and manages thoughtfully crafted residences
            across Nairobi&apos;s most sought-after neighborhoods — built on quality,
            delivered with integrity.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#properties"
              className="group inline-flex items-center gap-2 rounded-full bg-amber-500 px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.15em] text-black transition-all duration-300 hover:bg-amber-400 hover:shadow-[0_12px_40px_-8px_rgba(198,161,91,0.6)]"
            >
              Explore Properties
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.15em] text-white backdrop-blur-md transition-all duration-300 hover:border-white/50 hover:bg-white/10"
            >
              Book a Viewing
            </a>
          </div>
        </div>

        <div className="mt-14 w-full">
          <PropertySearch />
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            aria-label={`Show image ${index + 1}`}
            className={`h-1 rounded-full transition-all duration-500 ${
              currentImage === index ? "w-8 bg-amber-400" : "w-4 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
