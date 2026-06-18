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
    <section className="py-20 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="h-px w-8 bg-amber-400" />
          <span className="text-xs uppercase tracking-[0.25em] text-amber-500">SCHEDULE A VISIT</span>
        </div>

        <h2 className="font-serif text-4xl sm:text-5xl font-light text-primary leading-tight text-center mb-12">
          Book Your Private Showing
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white dark:bg-[#0f1221] border border-gray-100 dark:border-gray-800/60 shadow-sm rounded-2xl p-8">
            <h3 className="font-serif text-2xl font-light text-primary mb-2">Sapio Homes</h3>
            <p className="text-xs uppercase tracking-[0.25em] text-amber-500 mb-4">Site Visit &amp; Apartment Tour</p>
            <p className="text-muted text-sm mb-4">1 hr</p>
            <p className="text-muted text-sm leading-relaxed">
              Experience the charm and convenience of our future community in person.
              This guided visit includes exploring a model apartment, viewing the
              construction status, and getting a feel for the amenities that will
              define living here.
            </p>
          </div>

          <div className="bg-white dark:bg-[#0f1221] border border-gray-100 dark:border-gray-800/60 shadow-sm rounded-2xl p-8">
            <p className="text-xs uppercase tracking-[0.25em] text-amber-500 mb-6">Site Visit &amp; Apartment Tour</p>

            {status === "success" ? (
              <div className="text-center py-8">
                <div className="text-4xl mb-4">&#10003;</div>
                <p className="text-primary font-semibold mb-2">Visit Scheduled!</p>
                <p className="text-muted text-sm">{message}</p>
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
                    className="text-muted hover:text-primary disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                    aria-label="Previous month"
                  >
                    &larr;
                  </button>
                  <span className="font-serif text-xl font-light text-primary">
                    {MONTHS[month]} {year}
                  </span>
                  <button
                    onClick={nextMonth}
                    className="text-muted hover:text-primary transition-all"
                    aria-label="Next month"
                  >
                    &rarr;
                  </button>
                </div>

                <div className="grid grid-cols-7 gap-1 mb-6">
                  {DAYS.map((day) => (
                    <div key={day} className="text-xs uppercase tracking-widest text-muted text-center py-2">
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
                        className={`py-2 text-center rounded-lg transition-all text-sm ${
                          selectedDate === date
                            ? "bg-amber-500 text-white"
                            : isPast
                              ? "text-muted cursor-not-allowed opacity-40"
                              : "text-secondary hover:bg-amber-50 dark:hover:bg-amber-500/10 hover:text-amber-600"
                        }`}
                      >
                        {date}
                      </button>
                    );
                  })}
                </div>

                <div className="mb-6">
                  <h4 className="text-sm text-muted mb-3">Select Time</h4>
                  <div className="grid grid-cols-3 gap-2">
                    {TIMES.map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`py-2 text-sm rounded-lg transition-all ${
                          selectedTime === time
                            ? "bg-amber-500 text-white"
                            : "bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-secondary hover:border-amber-400 hover:text-amber-600 transition-all"
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
                  className="w-full bg-amber-500 hover:bg-amber-600 disabled:bg-gray-300 dark:disabled:bg-gray-700 disabled:cursor-not-allowed text-white font-medium py-3 rounded-xl transition-all"
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
