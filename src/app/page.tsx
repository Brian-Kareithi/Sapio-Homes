"use client";

import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProblemSection from "../components/ProblemSection";
import ServicesSection from "../components/ServicesSection";
import PropertiesSection from "../components/PropertiesSection";
import VideoSection from "../components/VideoSection";
import FeaturedProjects from "../components/FeaturedProjects";
import SiteVisitCalendar from "../components/SiteVisitCalendar";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import LoadingSpinner from "../components/LoadingSpinner";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for assets
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    // Preload critical images
    const preloadImages = async () => {
      const imagesToPreload = [
        "https://ppkfgsakvcijmmhjwbcz.supabase.co/storage/v1/object/public/Photos/real%20estate%20one.jpg",
        "https://ppkfgsakvcijmmhjwbcz.supabase.co/storage/v1/object/public/Photos/real%20estate%20two.jpg",
        "https://ppkfgsakvcijmmhjwbcz.supabase.co/storage/v1/object/public/Photos/real%20estate%20three.jpg",
        "/logo.png",
      ];

      const imagePromises = imagesToPreload.map((src) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = resolve; // Resolve even on error to prevent hanging
        });
      });

      await Promise.all(imagePromises);
    };

    preloadImages().catch(console.error);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <ProblemSection />
      <ServicesSection />
      <PropertiesSection />
      <VideoSection />
      <FeaturedProjects />
      <SiteVisitCalendar />
      <ContactSection />
      <Footer />
    </main>
  );
}