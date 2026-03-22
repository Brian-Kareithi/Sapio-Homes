import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Categories */}
          <div>
            <h3 className="text-white font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-white/60 hover:text-amber-400 transition-colors">
                  Real Estate
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/60 hover:text-amber-400 transition-colors">
                  Uncategorized
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/60 hover:text-amber-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-white/60">
                <MapPin className="w-4 h-4" />
                <span>HH Towers, Nairobi, Kenya</span>
              </li>
              <li className="flex items-center space-x-2 text-white/60">
                <Mail className="w-4 h-4" />
                <span>info@sapiohome.com</span>
              </li>
              <li className="flex items-center space-x-2 text-white/60">
                <Phone className="w-4 h-4" />
                <span>+254 113 556 551</span>
              </li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Useful Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-white/60 hover:text-amber-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/60 hover:text-amber-400 transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/60 hover:text-amber-400 transition-colors">
                  User Guide
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/60 hover:text-amber-400 transition-colors">
                  Support Center
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/60 hover:text-amber-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-4">Newsletter</h3>
            <p className="text-white/60 text-sm mb-4">
              Subscribe to get updates on new properties and offers.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Email address..."
                className="flex-1 bg-white/10 border border-white/20 rounded-l-lg px-4 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-1 focus:ring-amber-400"
              />
              <button className="bg-gradient-to-r from-amber-500 to-orange-500 px-4 py-2 rounded-r-lg text-white hover:from-amber-600 hover:to-orange-600 transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex space-x-4">
              <Link
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white/60 hover:text-white hover:bg-gradient-to-r from-amber-500 to-orange-500 transition-all"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white/60 hover:text-white hover:bg-gradient-to-r from-amber-500 to-orange-500 transition-all"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white/60 hover:text-white hover:bg-gradient-to-r from-amber-500 to-orange-500 transition-all"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white/60 hover:text-white hover:bg-gradient-to-r from-amber-500 to-orange-500 transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
            <p className="text-white/40 text-sm">
              Copyright © Sapio Homes 2026. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}