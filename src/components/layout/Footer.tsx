"use client";

import { useState } from "react";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Home, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { subscribeNewsletter } from "@/lib/api";

const glassCard = "bg-white/5 dark:bg-white/5 backdrop-blur-xl border border-white/10";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subStatus, setSubStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubscribe = async () => {
    if (!email) return;
    setSubStatus("submitting");
    try {
      await subscribeNewsletter();
      setSubStatus("success");
      setEmail("");
    } catch {
      setSubStatus("error");
    }
  };

  return (
    <footer className="bg-app-bg border-t border-app-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top accent bar */}
        <div className="h-1 w-full bg-gradient-to-r from-amber-500/40 via-amber-500 to-amber-500/40" />

        <div className="py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
            {/* Brand */}
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center gap-3 mb-5 group">
                <div className="w-10 h-10 bg-amber-500/20 rounded-xl flex items-center justify-center border border-amber-500/30 group-hover:bg-amber-500/30 transition-all">
                  <Home className="w-5 h-5 text-amber-400" />
                </div>
                <span className="text-xl font-bold text-primary">Sapio Homes</span>
              </Link>
              <p className="text-secondary text-sm leading-relaxed max-w-sm mb-6">
                Where intelligent design meets affordable luxury. Experience thoughtfully crafted
                spaces governed by quality, innovation, and timeless elegance.
              </p>
              <div className="flex gap-3">
                {[
                  { icon: Facebook, href: "#" },
                  { icon: Twitter, href: "#" },
                  { icon: Instagram, href: "#" },
                  { icon: Linkedin, href: "#" },
                ].map(({ icon: Icon, href }, i) => (
                  <Link
                    key={i}
                    href={href}
                    className="w-9 h-9 rounded-full bg-surface hover:bg-amber-500 flex items-center justify-center text-secondary hover:text-white transition-all duration-300"
                  >
                    <Icon className="w-4 h-4" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-primary font-semibold mb-5 text-sm uppercase tracking-widest">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {[
                  { name: "Home", href: "#home" },
                  { name: "About Us", href: "#about" },
                  { name: "Properties", href: "#properties" },
                  { name: "Services", href: "#services" },
                  { name: "Contact", href: "#contact" },
                ].map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-secondary hover:text-amber-500 transition-colors text-sm flex items-center gap-1.5 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-amber-500/0 group-hover:bg-amber-500 transition-all" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pages */}
            <div>
              <h3 className="text-primary font-semibold mb-5 text-sm uppercase tracking-widest">
                Pages
              </h3>
              <ul className="space-y-3">
                {[
                  { name: "Company Profile", href: "/company-profile" },
                  { name: "Property Management", href: "/property-management" },
                  { name: "Our Team", href: "/team" },
                  { name: "Careers", href: "/careers" },
                  { name: "All Properties", href: "/properties" },
                ].map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-secondary hover:text-amber-500 transition-colors text-sm flex items-center gap-1.5 group"
                    >
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all -ml-4 group-hover:ml-0" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-primary font-semibold mb-5 text-sm uppercase tracking-widest">
                Contact
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-secondary">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-400" />
                  <span className="text-sm leading-relaxed">
                    {process.env.NEXT_PUBLIC_COMPANY_ADDRESS || "HH Towers, Nairobi, Kenya"}
                  </span>
                </li>
                <li className="flex items-center gap-3 text-secondary">
                  <Mail className="w-4 h-4 flex-shrink-0 text-amber-400" />
                  <a href="mailto:info@sapiohome.com" className="text-sm hover:text-amber-500 transition-colors">
                    info@sapiohome.com
                  </a>
                </li>
                <li className="flex items-center gap-3 text-secondary">
                  <Phone className="w-4 h-4 flex-shrink-0 text-amber-400" />
                  <a href="tel:+254113556551" className="text-sm hover:text-amber-500 transition-colors">
                    +254 113 556 551
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className={`${glassCard} rounded-2xl p-6 mt-12`}>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
              <div className="flex-1">
                <h4 className="text-primary font-semibold mb-1">Stay Updated</h4>
                <p className="text-secondary text-sm">
                  Subscribe to get updates on new properties and exclusive offers.
                </p>
              </div>
              <div className="w-full sm:w-auto min-w-0 sm:min-w-[320px]">
                {subStatus === "success" ? (
                  <p className="text-green-500 text-sm text-center sm:text-left">
                    Subscribed successfully!
                  </p>
                ) : (
                  <div className="flex">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email address"
                      className="flex-1 bg-app-bg border border-app-border/60 rounded-l-xl px-4 py-2.5 text-primary text-sm placeholder-muted focus:outline-none focus:border-amber-500 transition-colors"
                      onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
                    />
                    <button
                      onClick={handleSubscribe}
                      disabled={subStatus === "submitting" || !email}
                      className="bg-amber-500 hover:bg-amber-600 disabled:bg-gray-500 disabled:cursor-not-allowed px-5 py-2.5 rounded-r-xl text-white text-sm font-medium transition-all"
                    >
                      {subStatus === "submitting" ? "Sending..." : "Subscribe"}
                    </button>
                  </div>
                )}
                {subStatus === "error" && (
                  <p className="text-red-500 text-xs mt-2">Failed. Please try again.</p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-app-border/40 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muted text-xs">
            Copyright &copy; {new Date().getFullYear()} Sapio Homes. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-muted">
            <Link href="#" className="hover:text-amber-500 transition-colors">Privacy Policy</Link>
            <span className="w-1 h-1 rounded-full bg-app-border" />
            <Link href="#" className="hover:text-amber-500 transition-colors">Terms of Service</Link>
            <span className="w-1 h-1 rounded-full bg-app-border" />
            <Link href="#" className="hover:text-amber-500 transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
