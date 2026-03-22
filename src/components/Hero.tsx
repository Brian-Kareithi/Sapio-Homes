"use client";

import { useState, useEffect } from "react";
import { Search } from "lucide-react";

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);
  const [filters, setFilters] = useState({
    type: "",
    budget: "",
    sqft: "",
  });

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
  }, []);

  return (
    <section id="home" className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Background Image Slider */}
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
        />
      ))}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6">
            Welcome to
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
              Sapio Homes
            </span>
          </h1>
          <p className="text-white/90 text-lg sm:text-xl mb-12">
            Find your perfect city home. Position yourself among the best cities in the world.
          </p>
        </div>

        {/* Filter Section */}
        <div className="w-full max-w-4xl bg-white/10 backdrop-blur-xl rounded-2xl p-4 sm:p-6 border border-white/20">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <select
              value={filters.type}
              onChange={(e) => setFilters({ ...filters, type: e.target.value })}
              className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-amber-400"
            >
              <option value="" className="text-black">Property Type</option>
              <option value="studio" className="text-black">Studio</option>
              <option value="1bed" className="text-black">1 Bedroom</option>
              <option value="2bed" className="text-black">2 Bedroom</option>
              <option value="3bed" className="text-black">3 Bedroom</option>
              <option value="4bed" className="text-black">4 Bedroom</option>
            </select>

            <select
              value={filters.budget}
              onChange={(e) => setFilters({ ...filters, budget: e.target.value })}
              className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-amber-400"
            >
              <option value="" className="text-black">Budget (KSh)</option>
              <option value="5-10" className="text-black">5M - 10M</option>
              <option value="10-15" className="text-black">10M - 15M</option>
              <option value="15-20" className="text-black">15M - 20M</option>
              <option value="20+" className="text-black">20M+</option>
            </select>

            <select
              value={filters.sqft}
              onChange={(e) => setFilters({ ...filters, sqft: e.target.value })}
              className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-amber-400"
            >
              <option value="" className="text-black">Square Feet</option>
              <option value="500-1000" className="text-black">500 - 1000 sqft</option>
              <option value="1000-1500" className="text-black">1000 - 1500 sqft</option>
              <option value="1500-2000" className="text-black">1500 - 2000 sqft</option>
              <option value="2000+" className="text-black">2000+ sqft</option>
            </select>
          </div>

          <button className="w-full mt-4 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold py-3 rounded-lg transition-all flex items-center justify-center space-x-2">
            <Search className="w-5 h-5" />
            <span>Search Properties</span>
          </button>
        </div>
      </div>
    </section>
  );
}