"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Droplets,
  Sun,
  Mountain,
  MapPin,
  BarChart3,
  TreePine,
  HardHat,
  Award,
  CheckCircle2,
  ChevronRight,
  Play,
} from "lucide-react";
import type { ProjectListItem } from "@/lib/project-types";

// ─── Stats ───────────────────────────────────────────────────────────────────
const stats = [
  { value: 3000, suffix: "+ HA", label: "Irrigated Area Designed" },
  { value: 15, suffix: "+", label: "Projects Completed" },
  { value: 10, suffix: "+", label: "Years of Experience" },
  { value: 8, suffix: "", label: "Service Disciplines" },
];

// ─── Services preview ────────────────────────────────────────────────────────
const services = [
  {
    icon: <Droplets size={26} />,
    title: "Irrigation & Water Supply",
    desc: "Comprehensive design of irrigation schemes, water supply networks, and hydraulic structures serving thousands of hectares across the Somali Region.",
    color: "#0066CC",
  },
  {
    icon: <Sun size={26} />,
    title: "Solar-Pump Systems",
    desc: "End-to-end design and supervision of solar-powered pump systems for off-grid irrigation and water supply in remote communities.",
    color: "#FF6600",
  },
  {
    icon: <Mountain size={26} />,
    title: "Geotechnical Studies",
    desc: "Site investigation, soil testing, foundation engineering, and geological assessments for infrastructure and dam projects.",
    color: "#0A2540",
  },
  {
    icon: <BarChart3 size={26} />,
    title: "Hydrology & Water Resources",
    desc: "Hydrological analysis, flood studies, groundwater assessment, and water balance modelling for integrated river basin management.",
    color: "#0066CC",
  },
  {
    icon: <MapPin size={26} />,
    title: "GIS & Surveying",
    desc: "Topographic surveys, cadastral mapping, and advanced GIS analysis for land use planning, natural resource management, and infrastructure routing.",
    color: "#FF6600",
  },
  {
    icon: <TreePine size={26} />,
    title: "Environmental Impact Assessment",
    desc: "Rigorous EIA and environmental management plans in compliance with Ethiopian and international standards, aligned with FAO/UNDP requirements.",
    color: "#0A2540",
  },
  {
    icon: <HardHat size={26} />,
    title: "Construction Supervision",
    desc: "Qualified resident engineers and site supervision for civil works, dam construction, and irrigation infrastructure ensuring quality and safety.",
    color: "#0066CC",
  },
  {
    icon: <Award size={26} />,
    title: "Feasibility & Design Studies",
    desc: "Pre-feasibility, feasibility, and detailed engineering design studies for agro-industrial, water, and infrastructure development projects.",
    color: "#FF6600",
  },
];

// ─── Clients ─────────────────────────────────────────────────────────────────
const clients = [
  { name: "FAO Ethiopia", abbr: "FAO" },
  { name: "UNDP Ethiopia", abbr: "UNDP" },
  { name: "World Bank", abbr: "WB" },
  { name: "JICA Ethiopia", abbr: "JICA" },
  { name: "Somali Regional State", abbr: "SRS" },
  { name: "Ministry of Agriculture", abbr: "MoA" },
];

// ─── Why HAGEC ────────────────────────────────────────────────────────────────
const reasons = [
  "Multidisciplinary team of certified engineers & geologists",
  "Deep knowledge of the Horn of Africa's hydrological context",
  "Proven track record across FAO, UNDP, and World Bank-funded projects",
  "Integrated approach: from feasibility to construction supervision",
  "State-of-the-art GIS, remote sensing, and CAD capabilities",
  "Committed to community development and environmental sustainability",
];

// ─── Counter hook ─────────────────────────────────────────────────────────────
function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

// ─── Stat Item ────────────────────────────────────────────────────────────────
function StatItem({ stat, start }: { stat: (typeof stats)[0]; start: boolean }) {
  const count = useCountUp(stat.value, 2200, start);
  return (
    <div className="text-center">
      <div
        className="text-[48px] font-900 leading-none mb-2 text-white"
        style={{ fontWeight: 900 }}
      >
        {count}
        <span className="text-[#FF6600]">{stat.suffix}</span>
      </div>
      <div className="text-white/70 text-[14px] font-500">{stat.label}</div>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function HomePageClient({
  featuredProjects,
}: {
  featuredProjects: ProjectListItem[];
}) {
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsVisible(true); },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  // Animate on scroll
  useEffect(() => {
    const els = document.querySelectorAll(".animate-on-scroll");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.12 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section
        className="relative min-h-[88vh] lg:min-h-[92vh] flex flex-col justify-center overflow-hidden pt-24 pb-20"
        aria-label="Hero"
      >
        {/* BG Image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=85"
            alt="Irrigation canals in the Somali Region of Ethiopia"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>

        {/* Content */}
        <div className="relative z-10 container-custom text-white text-center">
          <div className="badge mb-7 inline-flex text-white border-white/30 bg-white/10 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#FF6600]" />
            Jigjiga, Somali Region · Ethiopia
          </div>

          <h1
            className="text-[clamp(34px,6vw,72px)] font-900 leading-[1.06] sm:leading-[1.1] mb-6 max-w-5xl mx-auto"
            style={{ fontWeight: 900, letterSpacing: "-0.025em", textShadow: "0 2px 16px rgba(0,0,0,0.3)" }}
          >
            Sustainable Engineering Solutions for{" "}
            <span className="block sm:inline" />
            <span className="block sm:inline" style={{ color: "#FF6600" }}>
              Water Resources & Infrastructure
            </span>
            <span className="block sm:inline" />
            <span className="block sm:inline">in the Horn of Africa</span>
          </h1>

          <p className="text-[16px] sm:text-[18px] text-white/85 max-w-2xl mx-auto mb-10 md:mb-12 leading-relaxed">
            HAGEC delivers multidisciplinary engineering consultancy — from irrigation design and
            hydrological studies to geotechnical investigations and solar-pump systems — across
            Ethiopia and the Horn of Africa.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/projects" className="btn-primary text-[15px] px-7 py-4" id="hero-explore-projects">
              Explore Projects
              <ArrowRight size={18} />
            </Link>
            <Link href="/contact" className="btn-outline text-[15px] px-7 py-4" id="hero-get-in-touch">
              Get In Touch
            </Link>
          </div>

          {/* Scroll indicator */}
          <div className="hidden md:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-2 opacity-60">
            <span className="text-white text-[12px] tracking-widest uppercase">Scroll</span>
            <div className="w-px h-12 bg-white/40" />
          </div>
        </div>
      </section>

      {/* ── Stats ─────────────────────────────────────────────── */}
      <section
        ref={statsRef}
        className="bg-[#0A2540] py-20 md:py-24"
        aria-label="Key statistics"
      >
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {stats.map((stat, i) => (
              <StatItem key={i} stat={stat} start={statsVisible} />
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" aria-hidden="true" />

      {/* ── About snippet ────────────────────────────────────── */}
      <section className="section-padding bg-white" aria-label="About HAGEC">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <div className="relative animate-on-scroll">
              <div className="relative rounded-2xl overflow-hidden shadow-card-hover">
                <Image
                  src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80"
                  alt="HAGEC engineers conducting a field survey in the Somali Region"
                  width={600}
                  height={450}
                  className="object-cover w-full h-[420px]"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-card-hover p-5 flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-white"
                  style={{ background: "linear-gradient(135deg, #0066CC, #FF6600)" }}
                >
                  <Award size={22} />
                </div>
                <div>
                  <div className="text-[20px] font-800 text-[#0A2540]" style={{ fontWeight: 800 }}>
                    10+
                  </div>
                  <div className="text-[13px] text-[#64748B]">Years of Excellence</div>
                </div>
              </div>
            </div>

            {/* Text */}
            <div className="animate-on-scroll" style={{ animationDelay: "0.15s" }}>
              <span className="section-label">About HAGEC</span>
              <h2 className="section-title mb-5">
                Engineering Expertise Rooted in the Horn of Africa
              </h2>
              <p className="section-subtitle mb-6">
                Established in Jigjiga, Somali Region, HAGEC is a multidisciplinary engineering and
                geology consultancy with deep expertise in water resources engineering, irrigation
                system design, geotechnical investigations, and infrastructure development across
                the Horn of Africa.
              </p>
              <p className="text-[#64748B] leading-relaxed mb-8">
                Our team of seasoned engineers and geologists has collaborated with international
                organizations including FAO, UNDP, and the World Bank, delivering technically
                rigorous, community-focused solutions that create lasting impact for smallholder
                farmers and rural communities.
              </p>
              <div className="space-y-3 mb-8">
                {reasons.slice(0, 4).map((r) => (
                  <div key={r} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-[#0066CC] flex-shrink-0 mt-0.5" />
                    <span className="text-[#475569] text-[15px]">{r}</span>
                  </div>
                ))}
              </div>
              <Link href="/about" className="btn-primary" id="home-about-cta">
                Learn More About HAGEC
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ─────────────────────────────────────────── */}
      <section className="section-padding bg-[#F8FAFC]" aria-label="Our services">
        <div className="container-custom flex flex-col gap-12 md:gap-16">
          <div className="text-center max-w-3xl mx-auto animate-on-scroll">
            <span className="section-label">What We Do</span>
            <h2 className="section-title mb-4">
              Comprehensive Engineering & Consultancy Services
            </h2>
            <p className="section-subtitle mx-auto">
              From feasibility studies to construction supervision — HAGEC provides end-to-end
              engineering solutions across 8 key disciplines.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {services.map((svc, i) => (
              <div
                key={i}
                className="service-card bg-white rounded-2xl p-8 md:p-10 border border-[#E2E8F0] card-hover group animate-on-scroll h-full flex flex-col shadow-lg hover:shadow-xl"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <div
                  className="service-icon-wrap mb-4"
                  style={{ color: svc.color }}
                >
                  {svc.icon}
                </div>
                <h3 className="text-[16px] font-700 text-[#0A2540] mb-2 leading-snug" style={{ fontWeight: 700 }}>
                  {svc.title}
                </h3>
                <p className="text-[13.5px] text-[#64748B] leading-relaxed">{svc.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/services" className="btn-primary" id="home-services-cta">
              View All Services
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Featured Projects ─────────────────────────────────── */}
      <section className="section-padding bg-white" aria-label="Featured projects">
        <div className="container-custom">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-12 md:mb-16">
            <div className="animate-on-scroll">
              <span className="section-label">Our Work</span>
              <h2 className="section-title">Featured Projects</h2>
            </div>
            <Link
              href="/projects"
              className="text-[#0066CC] font-600 text-[14px] flex items-center gap-1.5 hover:text-[#FF6600] transition-colors"
              id="home-view-all-projects"
              style={{ fontWeight: 600 }}
            >
              View All Projects
              <ChevronRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, i) => (
              <Link
                key={String(project.id)}
                href={`/projects/${project.slug}`}
                className="group flex flex-col h-full rounded-2xl overflow-hidden bg-white border border-[#E2E8F0] card-hover animate-on-scroll shadow-lg hover:shadow-xl"
                style={{ animationDelay: `${i * 0.1}s` }}
                id={`featured-project-${project.id}`}
              >
                <div className="relative h-[240px] shrink-0 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/60 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span
                      className={`text-[11px] font-700 px-3 py-1 rounded-full ${project.status === "Completed"
                          ? "bg-emerald-500 text-white"
                          : "bg-[#FF6600] text-white"
                        }`}
                      style={{ fontWeight: 700 }}
                    >
                      {project.status}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="text-[11px] text-white/80 bg-white/15 backdrop-blur-sm px-2 py-0.5 rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <h3
                    className="text-[17px] font-700 text-[#0A2540] mb-3 group-hover:text-[#0066CC] transition-colors"
                    style={{ fontWeight: 700 }}
                  >
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-[13px] text-[#64748B] mb-1">
                    <MapPin size={13} className="text-[#FF6600]" />
                    {project.location}
                  </div>
                  {project.projectSize !== "—" && (
                    <div className="text-[12px] text-[#0066CC] font-600 mt-2" style={{ fontWeight: 600 }}>
                      Area: {project.projectSize}
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why HAGEC ─────────────────────────────────────────── */}
      <section
        className="section-padding"
        style={{ background: "linear-gradient(135deg, #0A2540 0%, #0066CC 100%)" }}
        aria-label="Why choose HAGEC"
      >
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="animate-on-scroll">
              <span className="text-[#FF6600] text-[13px] font-700 uppercase tracking-widest block mb-3" style={{ fontWeight: 700 }}>
                Why HAGEC
              </span>
              <h2
                className="text-[clamp(28px,4vw,42px)] font-800 text-white leading-tight mb-5"
                style={{ fontWeight: 800, letterSpacing: "-0.02em" }}
              >
                Your Trusted Partner for Engineering Excellence in the Horn of Africa
              </h2>
              <p className="text-white/75 text-[16px] leading-relaxed mb-8">
                We combine technical rigor with local knowledge, international standards with
                on-the-ground community engagement — delivering engineering solutions that stand
                the test of time and support sustainable development goals.
              </p>
              <Link href="/about" className="btn-outline" id="why-hagec-learn-more">
                Discover Our Approach
                <ArrowRight size={16} />
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-5 animate-on-scroll" style={{ animationDelay: "0.15s" }}>
              {reasons.map((reason, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/15"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#FF6600] flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 size={16} className="text-white" />
                  </div>
                  <span className="text-white/90 text-[14.5px] leading-snug">{reason}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Clients ───────────────────────────────────────────── */}
      <section className="section-padding bg-white" aria-label="Our clients and partners">
        <div className="container-custom">
          <div className="text-center mb-14 md:mb-16 animate-on-scroll max-w-3xl mx-auto">
            <span className="section-label">Trusted By</span>
            <h2 className="section-title">Our Clients & Partners</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
            {clients.map((client, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center p-8 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] hover:border-[#0066CC] shadow-lg hover:shadow-xl transition-all group animate-on-scroll min-h-[120px]"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <div
                  className="text-[22px] font-800 text-[#E2E8F0] group-hover:text-[#0066CC] transition-colors"
                  style={{ fontWeight: 800 }}
                >
                  {client.abbr}
                </div>
                <div className="text-[11px] text-[#94A3B8] text-center mt-1">{client.name}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/clients" className="text-[#0066CC] font-600 text-[14px] hover:text-[#FF6600] transition-colors flex items-center gap-1 justify-center" style={{ fontWeight: 600 }}>
              View All Clients
              <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Gallery teaser ───────────────────────────────────── */}
      <section className="section-padding bg-[#F8FAFC]" aria-label="Photo gallery preview">
        <div className="container-custom">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-12 md:mb-14">
            <div className="animate-on-scroll">
              <span className="section-label">Gallery</span>
              <h2 className="section-title">Work in the Field</h2>
            </div>
            <Link href="/gallery" className="text-[#0066CC] font-600 text-[14px] flex items-center gap-1.5 hover:text-[#FF6600] transition-colors" style={{ fontWeight: 600 }}>
              View Full Gallery
              <ChevronRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { src: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80", alt: "Solar irrigation pump installation", span: "md:col-span-2 md:row-span-2" },
              { src: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&q=80", alt: "Irrigation canal in Ethiopia", span: "" },
              { src: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&q=80", alt: "Field survey team", span: "" },
              { src: "https://images.unsplash.com/photo-1531966817680-4a1dbf9fbd72?w=600&q=80", alt: "GIS mapping and analysis", span: "" },
              { src: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=600&q=80", alt: "Water pump infrastructure", span: "" },
            ].map((img, i) => (
              <div
                key={i}
                className={`relative overflow-hidden rounded-xl group ${img.span} animate-on-scroll`}
                style={{ minHeight: i === 0 ? "320px" : "150px", animationDelay: `${i * 0.07}s` }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-[#0A2540]/0 group-hover:bg-[#0A2540]/30 transition-colors flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/0 group-hover:bg-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                    <Play size={20} className="text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
