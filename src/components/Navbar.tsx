"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

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

  const handleMouseEnter = (itemName: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setOpenDropdown(itemName);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 300);
  };

  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 z-50 w-full transition-all duration-700 ease-out ${
          isScrolled
            ? "bg-black/60 backdrop-blur-2xl border-b border-white/10 shadow-2xl"
            : "bg-transparent"
        }`}
        style={{
          backdropFilter: isScrolled ? "blur(20px)" : "blur(0px)",
          WebkitBackdropFilter: isScrolled ? "blur(20px)" : "blur(0px)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link 
              href="/" 
              className="flex items-center group transition-transform duration-500 hover:scale-105"
            >
              <div className="relative w-20 h-20 sm:w-24 sm:h-24">
                <Image
                  src="/logo.png"
                  alt="Sapio Homes"
                  fill
                  className="object-contain drop-shadow-2xl"
                  sizes="(max-width: 640px) 80px, 96px"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.dropdown && handleMouseEnter(item.name)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="relative px-3 lg:px-4 py-2 text-white/80 hover:text-white transition-all duration-300 rounded-xl hover:bg-white/10 group overflow-hidden"
                  >
                    <span className="relative z-10 text-sm lg:text-base font-medium">
                      {item.name}
                    </span>
                    {item.dropdown && (
                      <ChevronDown className={`inline-block w-4 h-4 ml-1 transition-all duration-300 ${
                        openDropdown === item.name ? "rotate-180" : ""
                      }`} />
                    )}
                    {/* Hover effect */}
                    <span className="absolute inset-0 bg-white/5 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-300" />
                  </button>

                  {/* Dropdown Menu */}
                  {item.dropdown && openDropdown === item.name && (
                    <div 
                      className="absolute top-full left-0 mt-2 w-56 bg-black/80 backdrop-blur-2xl rounded-2xl border border-white/20 shadow-2xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-300"
                      style={{
                        backdropFilter: "blur(20px)",
                        WebkitBackdropFilter: "blur(20px)",
                      }}
                      onMouseEnter={() => handleMouseEnter(item.name)}
                      onMouseLeave={handleMouseLeave}
                    >
                      {item.dropdown.map((dropdownItem) => (
                        <button
                          key={dropdownItem.name}
                          onClick={() => scrollToSection(dropdownItem.href)}
                          className="block w-full text-left px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300 text-sm relative group overflow-hidden"
                        >
                          <span className="relative z-10">{dropdownItem.name}</span>
                          <span className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 group"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-white relative z-10" />
              ) : (
                <Menu className="w-5 h-5 text-white relative z-10" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Liquid Glass Theme */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop with blur */}
          <div 
            className="fixed inset-0 z-40 md:hidden animate-in fade-in duration-500"
            style={{
              background: "rgba(0, 0, 0, 0.6)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
            }}
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Menu Panel */}
          <div 
            className="fixed right-0 top-0 bottom-0 z-40 w-80 md:hidden animate-in slide-in-from-right duration-500 ease-out"
            style={{
              background: "rgba(0, 0, 0, 0.75)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              borderLeft: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            <div className="flex flex-col h-full">
              {/* Mobile Menu Header - Only close button */}
              <div className="flex justify-end p-6">
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="relative w-12 h-12 flex items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 group"
                  aria-label="Close menu"
                >
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <X className="w-5 h-5 text-white relative z-10" />
                </button>
              </div>

              {/* Logo in center */}
              <div className="flex justify-center mb-8">
                <div className="relative w-28 h-28">
                  <Image
                    src="/logo.png"
                    alt="Sapio Homes"
                    fill
                    className="object-contain drop-shadow-2xl"
                    sizes="112px"
                  />
                </div>
              </div>

              {/* Mobile Navigation Links */}
              <div className="flex-1 overflow-y-auto px-6">
                {navItems.map((item) => (
                  <div key={item.name} className="mb-2">
                    <button
                      onClick={() => {
                        if (item.dropdown) {
                          setOpenDropdown(openDropdown === item.name ? null : item.name);
                        } else {
                          scrollToSection(item.href);
                        }
                      }}
                      className="flex items-center justify-between w-full px-4 py-4 text-white/80 hover:text-white transition-all duration-300 rounded-xl hover:bg-white/10 group"
                    >
                      <span className="text-lg font-medium">{item.name}</span>
                      {item.dropdown && (
                        <ChevronDown
                          className={`w-5 h-5 transition-all duration-300 ${
                            openDropdown === item.name ? "rotate-180" : ""
                          }`}
                        />
                      )}
                    </button>
                    {item.dropdown && openDropdown === item.name && (
                      <div className="ml-4 space-y-1 animate-in slide-in-from-top-2 duration-200">
                        {item.dropdown.map((dropdownItem) => (
                          <button
                            key={dropdownItem.name}
                            onClick={() => scrollToSection(dropdownItem.href)}
                            className="block w-full text-left px-6 py-3 text-white/60 hover:text-white hover:bg-white/10 transition-all duration-300 rounded-lg text-sm"
                          >
                            {dropdownItem.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Mobile Menu Footer */}
              <div className="p-6 border-t border-white/10 mt-auto">
                <p className="text-white/40 text-xs text-center">
                  © 2026 Sapio Homes
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}