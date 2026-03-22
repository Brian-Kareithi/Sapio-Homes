"use client";

import { useState } from "react";

export default function ProblemSection() {
  const [activeTab, setActiveTab] = useState("mission");

  const tabs = {
    mission: {
      title: "Our Mission",
      content: "To redefine urban living by creating thoughtfully designed, sustainable homes that combine luxury with functionality, making quality housing accessible to discerning homeowners and investors."
    },
    vision: {
      title: "Our Vision",
      content: "To become East Africa's most trusted real estate partner, known for delivering exceptional properties that enhance lives and build communities for generations to come."
    },
    manifesto: {
      title: "Our Manifesto",
      content: "We believe that home is more than just a place—it's where life happens. Every space we create is designed with intention, crafted with care, and delivered with integrity. We don't just build houses; we build foundations for dreams, sanctuaries for families, and legacies for generations."
    }
  };

  return (
    <section id="about" className="py-16 sm:py-20 bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              The Problem We Exist
              <span className="text-amber-500"> to Solve</span>
            </h2>
            <p className="text-gray-300 text-base sm:text-lg mb-4 leading-relaxed">
              Finding your dream home in Nairobi shouldn't feel like a compromise. We understand
              the challenges of navigating the real estate market—from hidden costs to unreliable
              developers and properties that don't deliver on their promises.
            </p>
            <p className="text-gray-300 text-base sm:text-lg mb-6 leading-relaxed">
              That's why Sapio Homes was born. We curate, develop, and manage properties that
              combine luxury with practicality, ensuring every detail is thoughtfully designed
              for modern living.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="border-l-3 border-amber-500 pl-4">
                <div className="text-2xl sm:text-3xl font-bold text-white">98%</div>
                <div className="text-gray-400 text-sm">Client Satisfaction</div>
              </div>
              <div className="border-l-3 border-amber-500 pl-4">
                <div className="text-2xl sm:text-3xl font-bold text-white">1,300+</div>
                <div className="text-gray-400 text-sm">Units Delivered</div>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="order-1 lg:order-2">
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <img
                src="https://ppkfgsakvcijmmhjwbcz.supabase.co/storage/v1/object/public/Photos/real%20estate%20four.jpg"
                alt="Modern Apartment"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          </div>
        </div>

        {/* Tabs Section - Mission, Vision, Manifesto */}
        <div className="mt-16 sm:mt-20">
          {/* Tab Headers */}
          <div className="flex flex-wrap gap-2 sm:gap-4 border-b border-gray-800 pb-0">
            {Object.entries(tabs).map(([key, tab]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`
                  px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-medium transition-all duration-300
                  ${activeTab === key 
                    ? "text-amber-500 border-b-2 border-amber-500 -mb-px" 
                    : "text-gray-400 hover:text-gray-300 hover:border-b-2 hover:border-gray-600"
                  }
                `}
              >
                {tab.title}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="mt-6 sm:mt-8 p-6 sm:p-8 bg-[#111115] rounded-xl border border-gray-800 shadow-lg">
            <div className="min-h-[120px] sm:min-h-[100px]">
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed italic">
                "{tabs[activeTab as keyof typeof tabs].content}"
              </p>
            </div>
          </div>

          {/* Decorative Element */}
          <div className="mt-6 flex justify-center">
            <div className="w-12 h-0.5 bg-amber-500/50 rounded-full" />
          </div>
        </div>

        {/* Additional Trust Indicators */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div className="p-4 bg-[#111115] rounded-lg border border-gray-800">
            <div className="text-2xl font-bold text-white">2018</div>
            <div className="text-gray-400 text-sm">Year Established</div>
          </div>
          <div className="p-4 bg-[#111115] rounded-lg border border-gray-800">
            <div className="text-2xl font-bold text-white">12+</div>
            <div className="text-gray-400 text-sm">Prime Locations</div>
          </div>
          <div className="p-4 bg-[#111115] rounded-lg border border-gray-800">
            <div className="text-2xl font-bold text-white">24/7</div>
            <div className="text-gray-400 text-sm">Support Available</div>
          </div>
          <div className="p-4 bg-[#111115] rounded-lg border border-gray-800">
            <div className="text-2xl font-bold text-white">100%</div>
            <div className="text-gray-400 text-sm">Transparency</div>
          </div>
        </div>
      </div>
    </section>
  );
}