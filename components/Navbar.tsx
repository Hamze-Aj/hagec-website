"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Gallery", href: "/gallery" },
  { label: "Clients", href: "/clients" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
            ? "bg-white shadow-nav backdrop-blur-sm"
            : "bg-white/95 backdrop-blur-sm"
          }`}
        style={{ borderBottom: scrolled ? "1px solid rgba(0,102,204,0.08)" : "1px solid transparent" }}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between min-h-[76px] py-3 lg:min-h-[80px]">
            {/* Logo — crisp PNG, 56px mark */}
            <Link href="/" className="flex items-center gap-3 flex-shrink-0">
              <div className="relative h-14 w-14 shrink-0">
                <Image
                  src="/Image.png"
                  alt="HAGEC Logo"
                  fill
                  className="object-contain"
                  sizes="56px"
                  priority
                />
              </div>
              <div className="hidden sm:block">
                <div
                  className="text-[19px] font-800 tracking-tight leading-tight"
                  style={{ color: "#0A2540", fontWeight: 800 }}
                >
                  HAGEC
                </div>
                <div className="text-[11px] font-500 tracking-wide text-[#64748B] leading-tight uppercase">
                  Engineering Consultancy
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-2.5 xl:gap-3" aria-label="Main navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link px-3.5 xl:px-4 py-2 rounded-md text-[14px] transition-colors ${isActive(link.href)
                      ? "text-[#0066CC] font-600"
                      : "text-[#0A2540] hover:text-[#0066CC] font-500"
                    }`}
                  aria-current={isActive(link.href) ? "page" : undefined}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center">
              <Link
                href="/contact"
                className="btn-primary text-[13px] px-4 py-2.5 flex items-center gap-2"
                id="nav-contact-btn"
              >
                <Phone size={14} />
                Contact Us
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] text-[#0A2540] transition-colors hover:bg-[#EFF6FF]"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              id="mobile-menu-toggle"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <div
        className={`mobile-nav lg:hidden transition-all duration-300 ${mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        style={{ transform: mobileOpen ? "translateX(0)" : "translateX(100%)" }}
        aria-hidden={!mobileOpen}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        {/* Close button */}
        <button
          onClick={() => setMobileOpen(false)}
          className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center text-white/70 hover:text-white rounded-lg border border-white/20 transition-colors"
          aria-label="Close navigation"
        >
          <X size={20} />
        </button>

        {/* Logo in mobile */}
        <div className="mb-8 text-center">
          <div className="text-white text-[22px] font-800" style={{ fontWeight: 800 }}>HAGEC</div>
          <div className="text-white/50 text-[11px] uppercase tracking-widest mt-1">
            Engineering Consultancy
          </div>
        </div>

        <nav className="flex flex-col items-center gap-2 w-full px-8" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[18px] font-600 py-3 w-full text-center rounded-xl transition-all font-semibold ${isActive(link.href)
                  ? "text-white bg-white/10"
                  : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              style={{ fontWeight: 600 }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="mt-10 flex flex-col gap-3 w-full px-8">
          <Link href="/contact" className="btn-primary w-full justify-center">
            <Phone size={16} />
            Contact Us
          </Link>
        </div>
      </div>

      {/* Spacer */}
      <div className="h-[76px] lg:h-[80px]" aria-hidden="true" />
    </>
  );
}
