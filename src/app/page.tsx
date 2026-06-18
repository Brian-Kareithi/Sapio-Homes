import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/hero/Hero";
import ProblemSection from "@/components/sections/ProblemSection";
import ServicesSection from "@/components/sections/ServicesSection";
import VideoSection from "@/components/sections/VideoSection";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import SiteVisitCalendar from "@/components/site-visit/SiteVisitCalendar";
import ContactSection from "@/components/contact/ContactSection";
import Footer from "@/components/layout/Footer";
import PropertiesSection from "@/components/properties";

export default function Home() {
  return (
    <main id="main-content" className="bg-app-bg">
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
