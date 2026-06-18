"use client";

import { useState, useMemo } from "react";
import { submitSiteVisit } from "@/lib/api";

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const TIMES = ["10:00 AM", "11:00 AM", "2:00 PM", "3:00 PM", "4:00 PM"];
const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

function getMonthDays(year: number, month: number) {
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const daysInMonth = lastDay.getDate();
  const startOffset = (firstDay.getDay() + 6) % 7;
  return { daysInMonth, startOffset, year, month };
}

export default function SiteVisitCalendar() {
  const today = new Date();
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const { daysInMonth, startOffset } = useMemo(() => getMonthDays(year, month), [year, month]);

  const prevMonth = () => {
    if (month === 0) {
      setYear((y) => y - 1);
      setMonth(11);
    } else {
      setMonth((m) => m - 1);
    }
    setSelectedDate(null);
    setSelectedTime(null);
    setStatus("idle");
  };

  const nextMonth = () => {
    if (month === 11) {
      setYear((y) => y + 1);
      setMonth(0);
    } else {
      setMonth((m) => m + 1);
    }
    setSelectedDate(null);
    setSelectedTime(null);
    setStatus("idle");
  };

  const canGoPrev = year > today.getFullYear() || (year === today.getFullYear() && month > today.getMonth());
  const isFutureMonth = year > today.getFullYear() || (year === today.getFullYear() && month >= today.getMonth());

  const handleSchedule = async () => {
    if (!selectedDate || !selectedTime) return;
    setStatus("submitting");
    try {
      const dateStr = `${MONTHS[month]} ${selectedDate}, ${year}`;
      const result = await submitSiteVisit({ date: dateStr, time: selectedTime });
      setMessage(result.message);
      setStatus("success");
    } catch {
      setMessage("Failed to schedule. Please try again.");
      setStatus("error");
    }
  };

  return (
    <section className="py-20 bg-app-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="${glassCard} rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-primary mb-2">Sapio Homes</h3>
              <p className="text-amber-500 text-sm mb-4">Site Visit &amp; Apartment Tour</p>
              <p className="text-secondary mb-4">1 hr</p>
              <p className="text-secondary">
                Experience the charm and convenience of our future community in person.
                This guided visit includes exploring a model apartment, viewing the
                construction status, and getting a feel for the amenities that will
                define living here.
              </p>
            </div>
          </div>

          <div className="${glassCard} rounded-2xl p-8">
            <h3 className="text-xl font-bold text-primary mb-6">Select a Date &amp; Time</h3>

            {status === "success" ? (
              <div className="text-center py-8">
                <div className="text-4xl mb-4">&#10003;</div>
                <p className="text-primary font-semibold mb-2">Visit Scheduled!</p>
                <p className="text-secondary text-sm">{message}</p>
                <button
                  onClick={() => {
                    setStatus("idle");
                    setSelectedDate(null);
                    setSelectedTime(null);
                    setMessage("");
                  }}
                  className="mt-4 text-amber-500 hover:text-amber-600 underline text-sm"
                >
                  Schedule another visit
                </button>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between mb-6">
                  <button
                    onClick={prevMonth}
                    disabled={!canGoPrev}
                    className="text-secondary hover:text-primary disabled:opacity-30 disabled:cursor-not-allowed"
                    aria-label="Previous month"
                  >
                    &larr;
                  </button>
                  <span className="text-primary font-semibold">
                    {MONTHS[month]} {year}
                  </span>
                  <button
                    onClick={nextMonth}
                    className="text-secondary hover:text-primary"
                    aria-label="Next month"
                  >
                    &rarr;
                  </button>
                </div>

                <div className="grid grid-cols-7 gap-2 mb-6">
                  {DAYS.map((day) => (
                    <div key={day} className="text-muted text-sm text-center py-2">
                      {day}
                    </div>
                  ))}
                  {Array.from({ length: startOffset }).map((_, i) => (
                    <div key={`empty-${i}`} className="py-2" />
                  ))}
                  {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((date) => {
                    const isPast = !isFutureMonth && date < today.getDate();
                    return (
                      <button
                        key={date}
                        onClick={() => !isPast && setSelectedDate(date)}
                        disabled={isPast}
                        className={`py-2 text-center rounded-lg transition-all ${
                          selectedDate === date
                            ? "bg-amber-500 text-white"
                            : isPast
                              ? "text-muted cursor-not-allowed"
                              : "text-secondary hover:bg-surface-hover"
                        }`}
                      >
                        {date}
                      </button>
                    );
                  })}
                </div>

                <div className="mb-6">
                  <h4 className="text-primary text-sm mb-3">Select Time</h4>
                  <div className="grid grid-cols-3 gap-2">
                    {TIMES.map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`py-2 text-sm rounded-lg transition-all ${
                          selectedTime === time
                            ? "bg-amber-500 text-white"
                            : "bg-white/10 backdrop-blur-md text-white/80 hover:bg-white/20"
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  onClick={handleSchedule}
                  disabled={!selectedDate || !selectedTime || status === "submitting"}
                  className="w-full bg-amber-500 hover:bg-amber-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-lg transition-all"
                >
                  {status === "submitting" ? "Scheduling..." : "Schedule Visit"}
                </button>

                {status === "error" && (
                  <p className="text-red-500 text-sm text-center mt-4">{message}</p>
                )}

                <p className="text-muted text-xs text-center mt-4">
                  Cookie settings &bull; Privacy Policy
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
