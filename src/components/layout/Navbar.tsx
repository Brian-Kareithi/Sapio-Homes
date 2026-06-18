"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

interface DropdownItem {
  name: string;
  href: string;
}

interface NavItem {
  name: string;
  href: string;
  dropdown: DropdownItem[] | null;
}

const navItems: NavItem[] = [
  { name: "Home", href: "/", dropdown: null },
  {
    name: "About Us",
    href: "/company-profile",
    dropdown: [
      { name: "Our Team", href: "/team" },
      { name: "Careers", href: "/careers" },
    ],
  },
  {
    name: "Properties",
    href: "/properties",
    dropdown: [
      { name: "Property Management", href: "/property-management" },
    ],
  },
  {
    name: "Services",
    href: "/#services",
    dropdown: null,
  },
  { name: "Contact", href: "/#contact", dropdown: null },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState("home");
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const mobileButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isHome) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            if (id) setActiveSection(id);
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    const sections = document.querySelectorAll("section[id]");
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [isHome]);

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false);
        mobileButtonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.documentElement.classList.add("overflow-hidden");
    } else {
      document.documentElement.classList.remove("overflow-hidden");
    }
    return () => {
      document.documentElement.classList.remove("overflow-hidden");
    };
  }, [isMobileMenuOpen]);

  const navigate = (href: string) => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
    if (href.startsWith("/#")) {
      const id = href.replace("/#", "");
      if (pathname === "/") {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      } else {
        router.push(href);
      }
    }
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

  const handleDropdownKeyDown = (e: React.KeyboardEvent, itemName: string) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setOpenDropdown(openDropdown === itemName ? null : itemName);
    }
    if (e.key === "Escape") {
      setOpenDropdown(null);
    }
  };

  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/" && !isScrolled;
    if (href.startsWith("/#")) return activeSection === href.replace("/#", "");
    return pathname === href;
  };

  const isHashLink = (href: string) => href.startsWith("/#");

  return (
    <>
      <nav
        className="fixed top-0 z-50 w-full transition-all duration-500"
        role="navigation"
        aria-label="Main navigation"
      >
        <div
          className={`transition-all duration-500 ${
            isScrolled
              ? "w-full bg-app-bg/85 backdrop-blur-2xl border-b border-app-border/60 shadow-[0_0_24px_rgba(212,168,71,0.1)]"
              : isHome
                ? "w-full bg-transparent"
                : "w-full bg-app-bg/85 backdrop-blur-2xl border-b border-app-border/60"
          }`}
        >
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 sm:h-20">
              <Link href="/" className="flex items-center space-x-3 group pr-4 sm:pr-6 border-r border-app-border/50">
                <div className="relative w-10 h-10 sm:w-12 sm:h-12">
                  <Image
                    src="https://ppkfgsakvcijmmhjwbcz.supabase.co/storage/v1/object/public/Photos/SOLD-BY_Sapio-homes-logo.png"
                    alt="Sapio Homes"
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 40px, 48px"
                    priority
                  />
                </div>
                <span className="text-primary text-lg sm:text-xl font-bold hidden sm:block group-hover:text-amber-500 transition-all duration-300">
                  Sapio Homes
                </span>
              </Link>

              <div className="hidden md:flex items-center space-x-1 ml-4">
                {navItems.map((item) => (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => item.dropdown && handleMouseEnter(item.name)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {isHashLink(item.href) ? (
                      <button
                        onClick={() => navigate(item.href)}
                        className={`
                          relative flex items-center space-x-1 px-4 py-2 transition-all duration-300 rounded-full group
                          ${isActive(item.href)
                            ? "text-amber-500 bg-amber-500/10"
                            : "text-secondary hover:text-primary hover:bg-surface-hover"
                          }
                        `}
                      >
                        <span className="text-sm lg:text-base relative">
                          {item.name}
                          <span className={`absolute -bottom-0.5 left-0 h-0.5 bg-amber-500 transition-all duration-300 rounded-full ${isActive(item.href) ? "w-full" : "w-0 group-hover:w-full"}`} />
                        </span>
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        className={`
                          relative flex items-center space-x-1 px-4 py-2 transition-all duration-300 rounded-full group
                          ${isActive(item.href)
                            ? "text-amber-500 bg-amber-500/10"
                            : "text-secondary hover:text-primary hover:bg-surface-hover"
                          }
                        `}
                        onKeyDown={(e) => item.dropdown && handleDropdownKeyDown(e, item.name)}
                        aria-expanded={item.dropdown ? openDropdown === item.name : undefined}
                        aria-haspopup={item.dropdown ? "true" : undefined}
                      >
                        <span className="text-sm lg:text-base relative">
                          {item.name}
                          <span className={`absolute -bottom-0.5 left-0 h-0.5 bg-amber-500 transition-all duration-300 rounded-full ${isActive(item.href) ? "w-full" : "w-0 group-hover:w-full"}`} />
                        </span>
                        {item.dropdown && (
                          <ChevronDown className={`w-3.5 h-3.5 transition-all duration-300 ${openDropdown === item.name ? "rotate-180" : ""}`} />
                        )}
                      </Link>
                    )}

                    {item.dropdown && openDropdown === item.name && (
                      <div
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-app-bg/95 backdrop-blur-2xl rounded-2xl border border-app-border/60 shadow-2xl overflow-hidden"
                        onMouseEnter={() => handleMouseEnter(item.name)}
                        onMouseLeave={handleMouseLeave}
                        role="menu"
                      >
                        <div className="py-2">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="block w-full text-left px-5 py-2.5 text-secondary hover:text-amber-500 hover:bg-amber-500/5 transition-all duration-200 text-sm"
                              role="menuitem"
                              onClick={() => { setIsMobileMenuOpen(false); setOpenDropdown(null); }}
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
                <div className="ml-2 pl-2 border-l border-app-border/50">
                  <ThemeToggle />
                </div>
              </div>

              <div className="flex items-center space-x-2 md:hidden">
                <ThemeToggle />
                <button
                  ref={mobileButtonRef}
                  className={`p-2 rounded-full transition-all duration-300 ${
                    isMobileMenuOpen
                      ? "bg-amber-500/10 text-amber-500"
                      : "text-secondary hover:text-primary hover:bg-surface-hover"
                  }`}
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                  aria-expanded={isMobileMenuOpen}
                >
                  {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />
          <div
            className="fixed right-4 top-20 bottom-4 z-40 w-72 bg-app-bg/95 backdrop-blur-2xl md:hidden shadow-2xl rounded-2xl border border-app-border/60 overflow-hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-5 border-b border-app-border/50">
                <div className="relative w-9 h-9">
                  <Image
                    src="https://ppkfgsakvcijmmhjwbcz.supabase.co/storage/v1/object/public/Photos/SOLD-BY_Sapio-homes-logo.png"
                    alt="Sapio Homes"
                    fill
                    className="object-contain"
                    sizes="36px"
                  />
                </div>
                <span className="text-primary font-bold text-sm">Sapio Homes</span>
              </div>

              <div className="flex-1 overflow-y-auto py-3 px-3">
                {navItems.map((item) => (
                  <div key={item.name} className="mb-1">
                    {isHashLink(item.href) ? (
                      <button
                        onClick={() => navigate(item.href)}
                        className={`
                          flex items-center justify-between w-full px-4 py-3 rounded-xl transition-all duration-200
                          ${isActive(item.href)
                            ? "text-amber-500 bg-amber-500/10"
                            : "text-secondary hover:text-primary hover:bg-surface-hover"
                          }
                        `}
                      >
                        <span className="text-sm font-medium">{item.name}</span>
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => { setIsMobileMenuOpen(false); setOpenDropdown(null); }}
                        className={`
                          flex items-center justify-between w-full px-4 py-3 rounded-xl transition-all duration-200
                          ${isActive(item.href)
                            ? "text-amber-500 bg-amber-500/10"
                            : "text-secondary hover:text-primary hover:bg-surface-hover"
                          }
                        `}
                      >
                        <span className="text-sm font-medium">{item.name}</span>
                        {item.dropdown && (
                          <ChevronDown
                            className={`w-3.5 h-3.5 transition-transform duration-200 ${openDropdown === item.name ? "rotate-180" : ""}`}
                            onClick={(e) => { e.preventDefault(); setOpenDropdown(openDropdown === item.name ? null : item.name); }}
                          />
                        )}
                      </Link>
                    )}
                    {item.dropdown && openDropdown === item.name && (
                      <div className="ml-3 mt-1 mb-2 bg-surface rounded-xl overflow-hidden">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            onClick={() => { setIsMobileMenuOpen(false); setOpenDropdown(null); }}
                            className="block w-full text-left px-4 py-2.5 text-muted hover:text-primary hover:bg-surface-hover transition-all duration-200 text-sm"
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="p-4 border-t border-app-border/50">
                <p className="text-muted text-xs text-center">
                  &copy; 2025 Sapio Homes
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
