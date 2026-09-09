"use client";

import { useState } from "react";
import { Facebook, Youtube, Instagram, Linkedin, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { subscribeNewsletter } from "@/lib/api";



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
        <div className="py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
            {/* Brand */}
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center gap-3 mb-5 group">
                <div className="relative w-10 h-10">
                  <Image
                    src="https://ppkfgsakvcijmmhjwbcz.supabase.co/storage/v1/object/public/Photos/SOLD-BY_Sapio-homes-logo.png"
                    alt="Sapio Homes"
                    fill
                    className="object-contain"
                    sizes="40px"
                  />
                </div>
                <span className="font-serif text-xl font-light text-primary group-hover:text-amber-500 transition-colors">Sapio Homes</span>
              </Link>
              <p className="text-secondary text-sm leading-relaxed max-w-sm mb-6">
                Own the future of city living. Sapio Homes designs, builds, and manages
                affordable luxury apartments across Nairobi — governed by quality, innovation,
                and timeless elegance.
              </p>
              <div className="flex gap-3">
                {[
                  { icon: Facebook, href: "https://www.facebook.com/share/1YtGkeuvnE/?mibextid=wwXIfr", label: "Facebook" },
                  { icon: Instagram, href: "https://www.instagram.com/sapiohomes/", label: "Instagram" },
                  { icon: Youtube, href: "https://www.youtube.com/embed/zBW2wQJRmXI", label: "YouTube" },
                  { icon: Linkedin, href: "#", label: "LinkedIn" },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-9 h-9 rounded-full bg-surface hover:bg-amber-500 flex items-center justify-center text-secondary hover:text-black transition-all duration-300"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-serif text-base font-medium text-primary mb-5">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {[
                  { name: "Home", href: "/" },
                  { name: "About", href: "/company-profile" },
                  { name: "Projects", href: "/projects" },
                  { name: "Services", href: "/#services" },
                  { name: "FAQ", href: "/faq" },
                  { name: "Contact", href: "/#contact" },
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
              <h3 className="font-serif text-base font-medium text-primary mb-5">
                Pages
              </h3>
              <ul className="space-y-3">
                {[
                  { name: "Park Road Residency", href: "/projects/park-road-residency" },
                  { name: "Westway Apartments", href: "/projects/westway-apartments" },
                  { name: "Property Management", href: "/property-management" },
                  { name: "Our Team", href: "/team" },
                  { name: "Careers", href: "/careers" },
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
              <h3 className="font-serif text-base font-medium text-primary mb-5">
                Contact
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-secondary">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-400" />
                  <span className="text-sm leading-relaxed">
                    {process.env.NEXT_PUBLIC_COMPANY_ADDRESS || "HH Towers, Moi Avenue, Nairobi, Kenya"}
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
          <div className="bg-app-secondary border border-app-border rounded-2xl p-6 sm:p-8 mt-12">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
              <div className="flex-1">
                <h4 className="font-serif text-lg font-light text-primary mb-1">Stay Updated</h4>
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
                      className="flex-1 bg-app-bg border border-app-border rounded-l-xl px-4 py-2.5 text-primary text-sm placeholder:text-muted focus:outline-none focus:border-amber-400 transition-colors"
                      onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
                    />
                    <button
                      onClick={handleSubscribe}
                      disabled={subStatus === "submitting" || !email}
                      className="bg-amber-500 hover:bg-amber-400 disabled:opacity-40 disabled:cursor-not-allowed px-5 py-2.5 rounded-r-xl text-black text-sm font-semibold transition-all"
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
            <Link href="/privacy" className="hover:text-amber-500 transition-colors">Privacy Policy</Link>
            <span className="w-1 h-1 rounded-full bg-app-border" />
            <Link href="/terms" className="hover:text-amber-500 transition-colors">Terms of Service</Link>
            <span className="w-1 h-1 rounded-full bg-app-border" />
            <a href="/sitemap.xml" className="hover:text-amber-500 transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
