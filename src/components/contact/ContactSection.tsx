"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, ExternalLink } from "lucide-react";
import { submitContactForm, type ContactFormData } from "@/lib/api";
import LocationMap from "./LocationMap";

const COMPANY_ADDRESS = process.env.NEXT_PUBLIC_COMPANY_ADDRESS || "HH Towers, Nairobi, Kenya";
const COMPANY_LAT = process.env.NEXT_PUBLIC_COMPANY_LAT || "-1.2921";
const COMPANY_LNG = process.env.NEXT_PUBLIC_COMPANY_LNG || "36.8219";

const glassCard = "bg-white/10 dark:bg-white/10 backdrop-blur-2xl border border-white/20 shadow-xl";

export default function ContactSection() {
  const [formData, setFormData] = useState<ContactFormData>({ name: "", email: "", reason: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      const result = await submitContactForm(formData);
      setMessage(result.message);
      setStatus("success");
      setFormData({ name: "", email: "", reason: "" });
    } catch {
      setMessage("Something went wrong. Please try again later.");
      setStatus("error");
    }
  };

  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${COMPANY_LAT},${COMPANY_LNG}`;

  return (
    <section id="contact" className="py-20 bg-app-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Get In Touch
          </h2>
          <p className="text-secondary max-w-2xl mx-auto">
            Have questions? We&apos;d love to hear from you. Send us a message and we&apos;ll
            respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div className="space-y-6">
            <div className={`${glassCard} rounded-2xl p-6`}>
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-amber-500/20 backdrop-blur-md rounded-xl flex items-center justify-center border border-amber-500/20">
                  <Mail className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <h3 className="text-primary font-semibold">Email Us</h3>
                  <p className="text-secondary">info@sapiohome.com</p>
                </div>
              </div>
            </div>

            <div className={`${glassCard} rounded-2xl p-6`}>
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-amber-500/20 backdrop-blur-md rounded-xl flex items-center justify-center border border-amber-500/20">
                  <Phone className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <h3 className="text-primary font-semibold">Call Us</h3>
                  <p className="text-secondary">+254 113 556 551</p>
                </div>
              </div>
            </div>

            <div className={`${glassCard} rounded-2xl p-6`}>
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-amber-500/20 backdrop-blur-md rounded-xl flex items-center justify-center border border-amber-500/20">
                  <MapPin className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <h3 className="text-primary font-semibold">Visit Us</h3>
                  <p className="text-secondary">{COMPANY_ADDRESS}</p>
                  <a
                    href={directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-amber-500 hover:text-amber-600 text-xs mt-1 transition-colors"
                  >
                    Get directions <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {status === "success" ? (
            <div className={`${glassCard} rounded-2xl p-6 flex flex-col items-center justify-center text-center`}>
              <div className="text-5xl mb-4">&#9993;</div>
              <h3 className="text-xl font-bold text-primary mb-2">Message Sent!</h3>
              <p className="text-secondary mb-4">{message}</p>
              <button
                onClick={() => setStatus("idle")}
                className="text-amber-500 hover:text-amber-600 underline text-sm"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={`${glassCard} rounded-2xl p-6`}>
              <h3 className="text-xl font-bold text-primary mb-6">Send us a message</h3>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-primary text-sm mb-2">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-surface-hover border border-app-border rounded-lg px-4 py-3 text-primary placeholder-muted focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-primary text-sm mb-2">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-surface-hover border border-app-border rounded-lg px-4 py-3 text-primary placeholder-muted focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="john@example.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="reason" className="block text-primary text-sm mb-2">
                    Reason for Contacting
                  </label>
                  <textarea
                    id="reason"
                    value={formData.reason}
                    onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                    rows={4}
                    className="w-full bg-surface-hover border border-app-border rounded-lg px-4 py-3 text-primary placeholder-muted focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="Tell us how we can help..."
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full bg-amber-500 hover:bg-amber-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-lg transition-all flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>{status === "submitting" ? "Sending..." : "Send Message"}</span>
                </button>
                {status === "error" && (
                  <p className="text-red-500 text-sm text-center">{message}</p>
                )}
              </div>
            </form>
          )}
        </div>

        <LocationMap />
      </div>
    </section>
  );
}
