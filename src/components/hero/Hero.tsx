"use client";

import { useState, useEffect } from "react";
import PropertySearch from "./PropertySearch";

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    "https://ppkfgsakvcijmmhjwbcz.supabase.co/storage/v1/object/public/Photos/real%20estate%20one.jpg",
    "https://ppkfgsakvcijmmhjwbcz.supabase.co/storage/v1/object/public/Photos/real%20estate%20two.jpg",
    "https://ppkfgsakvcijmmhjwbcz.supabase.co/storage/v1/object/public/Photos/real%20estate%20three.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      id="home"
      className="relative h-screen min-h-[600px] overflow-hidden"
      aria-label="Hero banner"
    >
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentImage === index ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          role="img"
          aria-label={`Property image ${index + 1}`}
        />
      ))}
      <div className="absolute inset-0 bg-black/50" aria-hidden="true" />

      <div className="relative h-full flex flex-col items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6">
            Welcome to
            <span className="block text-amber-400">
              Sapio Homes
            </span>
          </h1>
          <p className="text-white/90 text-lg sm:text-xl mb-12">
            Find your perfect city home. Position yourself among the best cities in the world.
          </p>
        </div>

        <PropertySearch />
      </div>
    </section>
  );
}
