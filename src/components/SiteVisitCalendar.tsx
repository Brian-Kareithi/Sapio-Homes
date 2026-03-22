"use client";

import { useState } from "react";
import { Calendar, Clock } from "lucide-react";

export default function SiteVisitCalendar() {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const dates = Array.from({ length: 30 }, (_, i) => i + 1);
  const times = ["10:00 AM", "11:00 AM", "2:00 PM", "3:00 PM", "4:00 PM"];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side */}
          <div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-2">Sapio Homes</h3>
              <p className="text-amber-400 text-sm mb-4">Site Visit & Apartment Tour</p>
              <p className="text-white/70 mb-4">1 hr</p>
              <p className="text-white/70">
                Experience the charm and convenience of our future community in person.
                This guided visit includes exploring a model apartment, viewing the
                construction status, and getting a feel for the amenities that will
                define living here.
              </p>
            </div>
          </div>

          {/* Right Side - Calendar */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-xl font-bold text-white mb-6">Select a Date & Time</h3>

            {/* Month Display */}
            <div className="flex items-center justify-between mb-6">
              <button className="text-white/60 hover:text-white">←</button>
              <span className="text-white font-semibold">March 2026</span>
              <button className="text-white/60 hover:text-white">→</button>
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-2 mb-6">
              {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                <div key={day} className="text-white/40 text-sm text-center py-2">
                  {day}
                </div>
              ))}
              {Array.from({ length: 7 }, (_, i) => (
                <div key={`empty-${i}`} className="py-2" />
              ))}
              {dates.slice(0, 31).map((date) => (
                <button
                  key={date}
                  onClick={() => setSelectedDate(date.toString())}
                  className={`py-2 text-center rounded-lg transition-all ${
                    selectedDate === date.toString()
                      ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white"
                      : "text-white/60 hover:bg-white/10"
                  }`}
                >
                  {date}
                </button>
              ))}
            </div>

            {/* Time Selection */}
            <div className="mb-6">
              <h4 className="text-white text-sm mb-3">Select Time</h4>
              <div className="grid grid-cols-3 gap-2">
                {times.map((time) => (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={`py-2 text-sm rounded-lg transition-all ${
                      selectedTime === time
                        ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white"
                        : "bg-white/10 text-white/60 hover:bg-white/20"
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            <button className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold py-3 rounded-lg hover:from-amber-600 hover:to-orange-600 transition-all">
              Schedule Visit
            </button>
            <p className="text-white/40 text-xs text-center mt-4">
              Cookie settings • Privacy Policy
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}