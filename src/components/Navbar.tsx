"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home", dropdown: null },
    {
      name: "About Us",
      href: "#about",
      dropdown: [
        { name: "Manifesto", href: "#manifesto" },
        { name: "Our Mission", href: "#mission" },
        { name: "Our Vision", href: "#vision" },
      ],
    },
    {
      name: "Properties",
      href: "#properties",
      dropdown: [
        { name: "Park Road Residency", href: "#park-road" },
        { name: "Hillside Gardens", href: "#hillside" },
        { name: "Westway Apartments", href: "#westway" },
      ],
    },
    { name: "Blog", href: "#blog", dropdown: null },
    { name: "Contact", href: "#contact", dropdown: null },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  return (
    <>
      <nav
        className={`fixed top-0 z-50 w-full transition-all duration-500 ${
          isScrolled
            ? "bg-black/80 backdrop-blur-xl border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="https://ppkfgsakvcijmmhjwbcz.supabase.co/storage/v1/object/public/Photos/SOLD-BY_Sapio-homes-logo.png"
                alt="Sapio Homes"
                width={50}
                height={50}
                className="w-12 h-12 object-contain"
              />
              <span className="text-white text-xl font-bold hidden sm:block">
                Sapio Homes
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => setOpenDropdown(item.name)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="flex items-center space-x-1 px-4 py-2 text-white/80 hover:text-white transition-colors rounded-lg hover:bg-white/10"
                  >
                    <span>{item.name}</span>
                    {item.dropdown && (
                      <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                    )}
                  </button>

                  {/* Dropdown Menu */}
                  {item.dropdown && openDropdown === item.name && (
                    <div className="absolute top-full left-0 mt-2 w-56 bg-black/90 backdrop-blur-xl rounded-lg border border-white/20 shadow-xl overflow-hidden">
                      {item.dropdown.map((dropdownItem) => (
                        <button
                          key={dropdownItem.name}
                          onClick={() => scrollToSection(dropdownItem.href)}
                          className="block w-full text-left px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                        >
                          {dropdownItem.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden bg-black/95 backdrop-blur-xl">
          <div className="flex flex-col h-full pt-20">
            {navItems.map((item) => (
              <div key={item.name} className="border-b border-white/10">
                <button
                  onClick={() => {
                    if (item.dropdown) {
                      setOpenDropdown(openDropdown === item.name ? null : item.name);
                    } else {
                      scrollToSection(item.href);
                    }
                  }}
                  className="flex items-center justify-between w-full px-6 py-4 text-white/80 hover:text-white"
                >
                  <span>{item.name}</span>
                  {item.dropdown && (
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        openDropdown === item.name ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </button>
                {item.dropdown && openDropdown === item.name && (
                  <div className="bg-white/5">
                    {item.dropdown.map((dropdownItem) => (
                      <button
                        key={dropdownItem.name}
                        onClick={() => scrollToSection(dropdownItem.href)}
                        className="block w-full text-left px-12 py-3 text-white/60 hover:text-white"
                      >
                        {dropdownItem.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}