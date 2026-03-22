"use client";

import { useState, useEffect, useRef } from "react";

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [imageErrors, setImageErrors] = useState<boolean[]>([]);

  const images = [
    "https://ppkfgsakvcijmmhjwbcz.supabase.co/storage/v1/object/public/Photos/real%20estate%20one.jpg",
    "https://ppkfgsakvcijmmhjwbcz.supabase.co/storage/v1/object/public/Photos/real%20estate%20two.jpg",
    "https://ppkfgsakvcijmmhjwbcz.supabase.co/storage/v1/object/public/Photos/real%20estate%20three.jpg",
  ];

  // Fallback image in case main images fail to load
  const fallbackImage = "https://via.placeholder.com/1920x1080/1a1a2e/ffffff?text=Sapio+Homes";

  // Handle image loading errors
  const handleImageError = (index: number) => {
    setImageErrors(prev => {
      const newErrors = [...prev];
      newErrors[index] = true;
      return newErrors;
    });
  };

  // Image carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Card carousel on mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;
    
    if (Math.abs(distance) < minSwipeDistance) return;
    
    if (distance > 0) {
      // Swipe left - next card
      setCurrentCardIndex((prev) => (prev + 1) % valueProps.length);
    } else {
      // Swipe right - previous card
      setCurrentCardIndex((prev) => (prev - 1 + valueProps.length) % valueProps.length);
    }
    
    setTouchStart(0);
    setTouchEnd(0);
  };

  const valueProps = [
    {
      title: "Your Dream Home Awaits",
      description: "We don't just sell houses, we help you find the perfect space where memories are made and futures are built.",
    },
    {
      title: "Smart Investment Choice",
      description: "Properties that appreciate in value. Our expert insights ensure you make the best investment for your future.",
    },
    {
      title: "Trusted by Hundreds",
      description: "Join over 1,300+ happy homeowners who trusted us to guide them to their perfect property.",
    }
  ];

  // Auto-advance card carousel on mobile
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (!isMobile) return;
    
    const cardInterval = setInterval(() => {
      setCurrentCardIndex((prev) => (prev + 1) % valueProps.length);
    }, 5000);
    
    return () => clearInterval(cardInterval);
  }, [valueProps.length]);

  const getImageUrl = (index: number) => {
    if (imageErrors[index]) {
      return fallbackImage;
    }
    return images[index];
  };

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Background Image Slider */}
      {images.map((_, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentImage === index ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${getImageUrl(index)})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          onError={() => handleImageError(index)}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/80" />

      {/* Content */}
      <div className="relative min-h-screen flex flex-col items-center justify-center px-4 py-16">
        {/* Hero Text */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20 md:mb-24">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Welcome to
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
              Sapio Homes
            </span>
          </h1>
          <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto">
            Your journey to finding the perfect home starts here. Let us guide you every step of the way.
          </p>
        </div>

        {/* Spacer between text and containers - DOUBLED */}
        <div className="h-24 sm:h-32 md:h-40" />

        {/* Three Persuasive Containers */}
        <div className="w-full max-w-5xl mx-auto">
          {/* Desktop: Grid Layout */}
          <div className="hidden md:grid md:grid-cols-3 gap-6 md:gap-8">
            {valueProps.map((item, index) => (
              <div
                key={index}
                className="group relative bg-white/10 backdrop-blur-xl rounded-xl p-5 border border-white/20 hover:border-white/40 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-amber-500/0 to-orange-500/0 group-hover:from-amber-500/10 group-hover:to-orange-500/10 transition-all duration-300" />
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-amber-400 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {item.description}
                </p>
                <div className="w-8 h-0.5 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full mt-3 group-hover:w-12 transition-all duration-300" />
              </div>
            ))}
          </div>

          {/* Mobile: Carousel Swipe */}
          <div className="md:hidden">
            <div
              className="relative overflow-hidden"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{
                  transform: `translateX(-${currentCardIndex * 100}%)`,
                }}
              >
                {valueProps.map((item, index) => (
                  <div
                    key={index}
                    className="w-full flex-shrink-0 px-2"
                  >
                    <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20">
                      <h3 className="text-lg font-semibold text-white mb-3">
                        {item.title}
                      </h3>
                      <p className="text-white/60 text-sm leading-relaxed">
                        {item.description}
                      </p>
                      <div className="w-10 h-0.5 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full mt-4" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {valueProps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentCardIndex(index)}
                  className={`transition-all duration-300 rounded-full ${
                    currentCardIndex === index
                      ? "w-6 h-2 bg-amber-500"
                      : "w-2 h-2 bg-white/40 hover:bg-white/60"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Swipe Hint */}
            <div className="flex justify-center mt-4">
              <span className="text-white/40 text-xs">← swipe to explore →</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
        <div className="w-5 h-8 border border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-1.5 bg-white/50 rounded-full mt-1.5 animate-pulse" />
        </div>
      </div>
    </section>
  );
}