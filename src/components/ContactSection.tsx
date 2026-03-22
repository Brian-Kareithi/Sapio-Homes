"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    reason: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log(formData);
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", reason: "" });
    }, 3000);
  };

  const contactMethods = [
    { icon: Mail, title: "Email", details: "info@sapiohome.com", description: "Send us a message anytime" },
    { icon: Phone, title: "Phone", details: "+254 113 556 551", description: "Mon-Fri, 9am - 6pm" },
    { icon: MapPin, title: "Visit", details: "HH Towers, Nairobi", description: "Book an appointment" }
  ];

  return (
    <section id="contact" className="py-20 bg-[#0a0a0f]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/5 border border-amber-500/20 mb-4">
            <MessageCircle className="w-3 h-3 text-amber-500" />
            <span className="text-amber-500 text-xs font-medium">Get in touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-light text-white mb-3">
            Let's Connect
          </h2>
          <div className="w-12 h-px bg-amber-500/50 mx-auto" />
          <p className="text-gray-500 text-sm mt-4 max-w-md mx-auto">
            Have questions? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <div key={index} className="group">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#111115] border border-gray-800 flex items-center justify-center group-hover:border-amber-500/50 transition-all duration-300">
                      <Icon className="w-4 h-4 text-gray-500 group-hover:text-amber-500 transition-colors duration-300" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm mb-0.5">{method.title}</p>
                      <p className="text-white font-medium text-base">{method.details}</p>
                      <p className="text-gray-500 text-xs mt-1">{method.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-[#111115] border border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 transition-all duration-300"
                placeholder="Your name"
                required
              />
            </div>
            
            <div>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-[#111115] border border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 transition-all duration-300"
                placeholder="Email address"
                required
              />
            </div>
            
            <div>
              <textarea
                value={formData.reason}
                onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                rows={4}
                className="w-full bg-[#111115] border border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 transition-all duration-300 resize-none"
                placeholder="How can we help?"
                required
              />
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting || isSubmitted}
              className="w-full py-3 rounded-lg bg-[#111115] border border-gray-800 text-gray-400 hover:text-amber-500 hover:border-amber-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 border border-gray-500 border-t-amber-500 rounded-full animate-spin" />
                  <span className="text-sm">Sending...</span>
                </div>
              ) : isSubmitted ? (
                <span className="text-sm text-green-500">Message sent ✓</span>
              ) : (
                <div className="flex items-center justify-center gap-2">
                  <span className="text-sm">Send message</span>
                  <Send className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              )}
            </button>

            <p className="text-center text-gray-500 text-xs">
              We'll respond within 24 hours
            </p>
          </form>
        </div>

        {/* Footer Note */}
        <div className="mt-16 pt-6 border-t border-gray-800/50 text-center">
          <p className="text-gray-500 text-xs">
            © 2026 Sapio Homes
          </p>
        </div>
      </div>
    </section>
  );
}