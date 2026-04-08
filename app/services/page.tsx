import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Droplets, Sun, Mountain, BarChart3, MapPin, TreePine,
  HardHat, Award, ArrowRight, CheckCircle2
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "HAGEC provides comprehensive engineering services: irrigation design, hydrology, geotechnical studies, solar-pump systems, GIS, surveying, EIA, and construction supervision across the Horn of Africa.",
};

const services = [
  {
    icon: <Droplets size={32} />,
    title: "Irrigation System Design & Engineering",
    shortDesc: "Comprehensive irrigation scheme design serving thousands of hectares.",
    color: "#0066CC",
    image: "/hagec-website-images/photo_5947369626163416449_y.jpeg",
    deliverables: [
      "Irrigation feasibility and feasibility studies",
      "Surface irrigation system design (canal, furrow, sprinkler, drip)",
      "Hydraulic structure design (weirs, diversion dams, headworks)",
      "Irrigation network layout and sizing",
      "Pumping station design and specification",
      "Operation and maintenance manuals",
    ],
  },
  {
    icon: <BarChart3 size={32} />,
    title: "Hydrology & Water Resources",
    shortDesc: "Scientific water resource assessment for integrated basin management.",
    color: "#FF6600",
    image: "/hagec-website-images/photo_5947369626163416471_y.jpeg",
    deliverables: [
      "Hydrological data collection and analysis",
      "Flood frequency analysis and floodplain delineation",
      "Drainage basin characterisation",
      "Water balance modelling",
      "Groundwater potential assessment",
      "Streamflow measurement and rating curves",
    ],
  },
  {
    icon: <Mountain size={32} />,
    title: "Geotechnical Studies & Geological Investigations",
    shortDesc: "Site investigation, laboratory testing, and foundation engineering.",
    color: "#0A2540",
    image: "/hagec-website-images/photo_5947369626163416462_y.jpeg",
    deliverables: [
      "Field geological and geotechnical surveys",
      "Test pit, trial bore, and borehole logging",
      "Laboratory soil and rock testing",
      "Foundation engineering recommendations",
      "Slope stability analysis",
      "Construction material investigation",
    ],
  },
  {
    icon: <Sun size={32} />,
    title: "Solar-Pump Systems",
    shortDesc: "Off-grid solar-powered water pumping for irrigation and community supply.",
    color: "#FF6600",
    image: "/hagec-website-images/photo_5947369626163416453_y.jpeg",
    deliverables: [
      "Solar radiation and energy resource assessment",
      "Pump sizing and hydraulic design",
      "Photovoltaic panel system design",
      "Battery storage and control system specification",
      "Procurement and installation supervision",
      "Performance monitoring and O&M training",
    ],
  },
  {
    icon: <MapPin size={32} />,
    title: "GIS, Remote Sensing & Surveying",
    shortDesc: "Advanced spatial analysis, mapping, and topographic surveys.",
    color: "#0066CC",
    image: "/hagec-website-images/photo_5947369626163416482_y.jpeg",
    deliverables: [
      "Topographic surveys (total station, GNSS/GPS, drone)",
      "Digital Elevation Model (DEM) production",
      "Land use / land cover mapping",
      "Satellite image analysis and classification",
      "Cadastral and boundary surveying",
      "Infrastructure corridor routing",
    ],
  },
  {
    icon: <TreePine size={32} />,
    title: "Environmental Impact Assessment",
    shortDesc: "Rigorous EIA and ESMP in compliance with Ethiopian and international standards.",
    color: "#0A2540",
    image: "/hagec-website-images/photo_5947369626163416485_y.jpeg",
    deliverables: [
      "Scoping and baseline environmental surveys",
      "Environmental and Social Impact Assessment (ESIA)",
      "Environmental and Social Management Plan (ESMP)",
      "Biodiversity and ecosystem services assessment",
      "Resettlement Action Plans (RAP)",
      "Stakeholder consultation and community engagement",
    ],
  },
  {
    icon: <HardHat size={32} />,
    title: "Construction Supervision",
    shortDesc: "Qualified resident engineers ensuring quality, safety, and compliance.",
    color: "#FF6600",
    image: "/hagec-website-images/photo_5947369626163416507_y.jpeg",
    deliverables: [
      "Resident Engineer and site supervision services",
      "Construction quality assurance and control",
      "Works progress monitoring and reporting",
      "Contractor claim evaluation",
      "Environmental compliance monitoring",
      "Defects liability period inspection",
    ],
  },
  {
    icon: <Award size={32} />,
    title: "Feasibility & Detailed Design Studies",
    shortDesc: "From pre-feasibility to detailed engineering design and tender documents.",
    color: "#0066CC",
    image: "/hagec-website-images/photo_5947369626163416513_y.jpeg",
    deliverables: [
      "Pre-feasibility and feasibility studies",
      "Preliminary and detailed engineering design",
      "Design reports and technical specifications",
      "Bill of Quantities (BOQ) preparation",
      "Tender document preparation",
      "Cost estimation and economic analysis",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* ── Header ───────────────────────────────────────────── */}
      <section
        className="relative py-24 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0A2540 0%, #0066CC 100%)" }}
        aria-label="Services page header"
      >
        <div className="relative z-10 container-custom text-white text-center">
          <span className="section-label text-[#FF6600] block mb-3">Our Disciplines</span>
          <h1
            className="text-[clamp(32px,5vw,58px)] font-900 leading-tight mb-5"
            style={{ fontWeight: 900, letterSpacing: "-0.025em" }}
          >
            Engineering Services
          </h1>
          <p className="text-white/75 text-[17px] max-w-2xl mx-auto leading-relaxed">
            Eight integrated engineering disciplines delivering comprehensive solutions from
            feasibility through construction and operation.
          </p>
        </div>
      </section>

      {/* ── Services Grid ────────────────────────────────────── */}
      <section className="section-padding bg-white" aria-label="Services list">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-16 md:gap-24">
            {services.map((svc, i) => (
              <div
                key={i}
                id={`service-${i + 1}`}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                  i % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                    <Image
                      src={svc.image}
                      alt={svc.title}
                      width={600}
                      height={380}
                      className="object-cover w-full h-[320px] transition-transform duration-500 hover:scale-105"
                    />
                    <div
                      className="absolute top-4 left-4 w-12 h-12 rounded-xl flex items-center justify-center text-white"
                      style={{ background: svc.color }}
                    >
                      {svc.icon}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <div
                    className="text-[12px] font-700 uppercase tracking-widest mb-3"
                    style={{ color: svc.color, fontWeight: 700 }}
                  >
                    Service {String(i + 1).padStart(2, "0")}
                  </div>
                  <h2
                    className="text-[clamp(20px,3vw,28px)] font-800 text-[#0A2540] mb-3 leading-snug"
                    style={{ fontWeight: 800 }}
                  >
                    {svc.title}
                  </h2>
                  <p className="text-[#64748B] text-[15px] leading-relaxed mb-6">{svc.shortDesc}</p>
                  <div className="divider-brand" />
                  <h3 className="text-[13px] font-700 text-[#0A2540] uppercase tracking-wider mb-4" style={{ fontWeight: 700 }}>
                    Key Deliverables
                  </h3>
                  <div className="grid grid-cols-1 gap-2.5">
                    {svc.deliverables.map((d, j) => (
                      <div key={j} className="flex items-start gap-2.5">
                        <CheckCircle2 size={16} style={{ color: svc.color }} className="flex-shrink-0 mt-0.5" />
                        <span className="text-[14px] text-[#475569]">{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────── */}
      <section
        className="py-20"
        style={{ background: "linear-gradient(135deg, #FF6600, #0066CC)" }}
        aria-label="Services CTA"
      >
        <div className="container-custom text-center">
          <h2 className="text-[clamp(26px,4vw,40px)] font-800 text-white mb-4" style={{ fontWeight: 800 }}>
            Need a Specific Engineering Service?
          </h2>
          <p className="text-white/80 max-w-xl mx-auto text-[16px] mb-8">
            Contact our team to discuss your project requirements and let us develop a tailored
            proposal.
          </p>
          <Link href="/contact" className="btn-outline text-[15px] px-8 py-4">
            Request a Proposal
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
