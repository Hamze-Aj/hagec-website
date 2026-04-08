import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Globe, ChevronRight } from "lucide-react";

// Inline SVG brand icons (lucide-react no longer ships these)
const LinkedinIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TwitterIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const FacebookIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const quickLinks = [
  { label: "About HAGEC", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "Projects Portfolio", href: "/projects" },
  { label: "Photo Gallery", href: "/gallery" },
  { label: "Our Team", href: "/team" },
  { label: "Clients & Partners", href: "/clients" },
  { label: "Contact Us", href: "/contact" },
  { label: "Content Studio", href: "/studio" },
];

const services = [
  "Irrigation Design & Engineering",
  "Hydrology & Water Resources",
  "Geotechnical Studies",
  "Solar-Pump Systems",
  "GIS & Surveying",
  "Environmental Impact Assessment",
  "Construction Supervision",
];

export default function Footer() {
  return (
    <footer className="bg-[#0A2540] text-white">
      {/* CTA Band */}
      <div
        className="py-16 md:py-20"
        style={{ background: "linear-gradient(135deg, #0066CC 0%, #FF6600 100%)" }}
      >
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-800 text-white leading-tight" style={{ fontWeight: 800 }}>
                Ready to Start Your Next Project?
              </h2>
              <p className="text-white/85 mt-2 text-base">
                Our multidisciplinary team is ready to deliver world-class engineering solutions.
              </p>
            </div>
            <div className="flex gap-3 flex-shrink-0">
              <Link href="/contact" className="btn-outline text-[14px]">
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-custom pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-14">
          {/* About column */}
          <div>
            <div className="mb-4">
              <div className="flex items-center gap-3">
                <div className="relative h-14 w-14 shrink-0">
                  <Image
                    src="/Image.png"
                    alt="HAGEC Logo"
                    fill
                    className="object-contain"
                    sizes="56px"
                  />
                </div>
                <div>
                  <div className="text-[22px] font-800 text-white leading-tight" style={{ fontWeight: 800 }}>
                    HAGEC
                  </div>
                  <div className="text-[11px] text-white/50 uppercase tracking-widest">
                    Engineering Consultancy
                  </div>
                </div>
              </div>
            </div>
            <div className="divider-brand mb-4" />
            <p className="text-white/65 text-[14px] leading-relaxed">
              Horn of African Geology and Engineering Consultant — delivering sustainable,
              multidisciplinary engineering solutions across the Horn of Africa since 2010.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#0066CC] transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={16} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#0066CC] transition-colors"
                aria-label="Twitter"
              >
                <TwitterIcon size={16} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#0066CC] transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[14px] font-700 uppercase tracking-widest text-white mb-5" style={{ fontWeight: 700 }}>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/65 text-[14px] hover:text-[#FF6600] transition-colors flex items-center gap-2 group"
                  >
                    <ChevronRight
                      size={14}
                      className="text-[#FF6600] opacity-0 group-hover:opacity-100 transition-opacity -ml-1"
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[14px] font-700 uppercase tracking-widest text-white mb-5" style={{ fontWeight: 700 }}>
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="text-white/65 text-[14px] flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF6600] flex-shrink-0 mt-[6px]" />
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[14px] font-700 uppercase tracking-widest text-white mb-5" style={{ fontWeight: 700 }}>
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3 items-start">
                <MapPin size={16} className="text-[#FF6600] flex-shrink-0 mt-0.5" />
                <span className="text-white/65 text-[14px] leading-relaxed">
                  Jigjiga, Somali Region,<br />
                  Ethiopia
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone size={16} className="text-[#FF6600] flex-shrink-0" />
                <a href="tel:+251900000000" className="text-white/65 text-[14px] hover:text-[#FF6600] transition-colors">
                  +251 90 000 0000
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <Mail size={16} className="text-[#FF6600] flex-shrink-0" />
                <a href="mailto:info@hagec.et" className="text-white/65 text-[14px] hover:text-[#FF6600] transition-colors">
                  info@hagec.et
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <Globe size={16} className="text-[#FF6600] flex-shrink-0" />
                <a href="https://hagec.et" className="text-white/65 text-[14px] hover:text-[#FF6600] transition-colors">
                  www.hagec.et
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-6">
        <div className="container-custom flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-[13px]">
            © {new Date().getFullYear()} HAGEC – Horn of African Geology and Engineering Consultant. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/about" className="text-white/40 text-[13px] hover:text-white/70 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/about" className="text-white/40 text-[13px] hover:text-white/70 transition-colors">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
