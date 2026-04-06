import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Clients & Partners",
  description:
    "HAGEC has partnered with leading international organizations including FAO, UNDP, the World Bank, and Ethiopian government agencies on water resources and engineering projects.",
};

const clients = [
  {
    name: "FAO Ethiopia",
    fullName: "Food and Agriculture Organization of the United Nations – Ethiopia",
    category: "International Organization",
    description:
      "Long-standing collaboration on rural water supply, irrigation feasibility studies, and solar-pump system projects targeting food security for smallholder farmers in the Somali Region.",
    engagements: ["Wabe Shebelle Solar-Pump System", "Fafen River Irrigation (Phase 1)", "Fafen Basin Hydrological Study"],
    logo: null,
    color: "#0066CC",
  },
  {
    name: "UNDP Ethiopia",
    fullName: "United Nations Development Programme – Ethiopia",
    category: "International Organization",
    description:
      "Partnership on land use mapping, natural resource management, and environmental baseline studies for livelihoods resilience programmes in Somali and SNNPR regions.",
    engagements: ["Somali Region Land Use Mapping (5 zones)", "Natural Resource Baseline Assessment"],
    logo: null,
    color: "#009EDB",
  },
  {
    name: "World Bank",
    fullName: "International Bank for Reconstruction and Development",
    category: "Multilateral Financier",
    description:
      "Engaged on World Bank-funded irrigation rehabilitation and water supply projects as consulting engineer, responsible for detailed design and construction supervision.",
    engagements: ["Waberi Canal Rehabilitation", "Jigjiga Water Supply Expansion (Design Review)"],
    logo: null,
    color: "#0066CC",
  },
  {
    name: "African Development Bank",
    fullName: "African Development Bank Group",
    category: "Multilateral Financier",
    description:
      "Lead consulting engineer for AfDB-financed pre-feasibility and feasibility studies for new irrigation development in Shinile Zone, Somali Region.",
    engagements: ["Northern Somali Irrigation Feasibility Study"],
    logo: null,
    color: "#FF6600",
  },
  {
    name: "Somali Regional State",
    fullName: "Somali Regional State Government of Ethiopia",
    category: "Government Client",
    description:
      "Primary government client. HAGEC has served as consulting engineer for the Bureau of Agriculture, Bureau of Water Resources, and other regional line ministries on numerous projects.",
    engagements: ["Fafen River Irrigation Scheme (Phase 1 & 2)", "EIA – Regional Water Infrastructure", "Topographic Surveys"],
    logo: null,
    color: "#0A2540",
  },
  {
    name: "Ministry of Water & Energy",
    fullName: "Ministry of Water and Energy – Federal Government of Ethiopia",
    category: "Government Client",
    description:
      "Engaged by the federal Ministry of Water and Energy on geotechnical investigation and dam foundation engineering studies in the Somali and Afar Regions.",
    engagements: ["Erer Valley Dam Geotechnical Study", "Groundwater Survey – Shinile Zone"],
    logo: null,
    color: "#0066CC",
  },
  {
    name: "JICA Ethiopia",
    fullName: "Japan International Cooperation Agency – Ethiopia",
    category: "Bilateral Organization",
    description:
      "Technical service provider on JICA-funded agricultural water management and rural infrastructure development studies in the Somali Region.",
    engagements: ["Agricultural Water Management Study"],
    logo: null,
    color: "#FF6600",
  },
  {
    name: "Somali Urban Water Supply Authority",
    fullName: "Somali Regional State Urban Water Supply Authority",
    category: "Government Client",
    description:
      "Environmental and engineering consulting services for urban water supply expansion and rehabilitation projects in Jigjiga and secondary towns.",
    engagements: ["Jigjiga Water Supply EIA", "Kebridahar Water Supply Scoping"],
    logo: null,
    color: "#0A2540",
  },
];

const testimonials = [
  {
    quote:
      "HAGEC consistently delivers technically sound, well-documented studies that meet FAO's rigorous quality standards. Their local knowledge of the Somali Region's hydrology is unmatched.",
    author: "Dr. T. Bekele",
    role: "FAO Ethiopia – Land & Water Division",
  },
  {
    quote:
      "The Waberi Canal Rehabilitation project was delivered on time, within budget, and to a very high standard. HAGEC's site supervision team was professional and rigorous throughout.",
    author: "W. Tesfaye",
    role: "Somali Regional State Bureau of Agriculture",
  },
  {
    quote:
      "HAGEC's GIS and remote sensing outputs for our land use mapping programme exceeded expectations. The accuracy, spatial resolution, and documentation quality were excellent.",
    author: "M. Abdow",
    role: "UNDP Ethiopia – Livelihoods Programme",
  },
];

export default function ClientsPage() {
  return (
    <>
      {/* ── Header ───────────────────────────────────────────── */}
      <section
        className="relative py-24 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0A2540 0%, #0066CC 100%)" }}
        aria-label="Clients page header"
      >
        <div className="relative z-10 container-custom text-white text-center">
          <span className="section-label text-[#FF6600] block mb-3">Who Trusts Us</span>
          <h1
            className="text-[clamp(32px,5vw,58px)] font-900 leading-tight mb-5"
            style={{ fontWeight: 900, letterSpacing: "-0.025em" }}
          >
            Clients & Partners
          </h1>
          <p className="text-white/75 text-[17px] max-w-2xl mx-auto leading-relaxed">
            Trusted by international organizations, bilateral agencies, and Ethiopian government
            bodies to deliver technically rigorous engineering solutions.
          </p>
        </div>
      </section>

      {/* ── Clients Grid ─────────────────────────────────────── */}
      <section className="section-padding bg-white" aria-label="Client list">
        <div className="container-custom">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="section-label">Our Partners</span>
            <h2 className="section-title">Organizations We Serve</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {clients.map((client, i) => (
              <div
                key={i}
                className="bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] p-8 card-hover group shadow-lg hover:shadow-xl h-full flex flex-col"
                id={`client-${i + 1}`}
              >
                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 text-white text-[16px] font-800"
                    style={{ background: client.color, fontWeight: 800 }}
                  >
                    {client.name.split(" ")[0].slice(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <div className="text-[11px] font-600 text-[#FF6600] uppercase tracking-wider mb-0.5" style={{ fontWeight: 600 }}>
                      {client.category}
                    </div>
                    <h2 className="text-[17px] font-700 text-[#0A2540] leading-snug" style={{ fontWeight: 700 }}>
                      {client.name}
                    </h2>
                    <p className="text-[12px] text-[#94A3B8] leading-tight">{client.fullName}</p>
                  </div>
                </div>

                <p className="text-[14px] text-[#475569] leading-relaxed mb-4">{client.description}</p>

                {/* Projects */}
                <div>
                  <div className="text-[11px] font-700 uppercase tracking-wider text-[#0A2540] mb-2 flex items-center gap-1.5" style={{ fontWeight: 700 }}>
                    <Globe size={12} className="text-[#0066CC]" />
                    Selected Engagements
                  </div>
                  <div className="space-y-1.5">
                    {client.engagements.map((eng, j) => (
                      <div key={j} className="flex items-center gap-2">
                        <CheckCircle2 size={13} style={{ color: client.color }} className="flex-shrink-0" />
                        <span className="text-[13px] text-[#64748B]">{eng}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────── */}
      <section className="section-padding bg-[#F8FAFC]" aria-label="Client testimonials">
        <div className="container-custom">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="section-label">What Clients Say</span>
            <h2 className="section-title">Client Testimonials</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-[#E2E8F0] p-8 shadow-lg hover:shadow-xl transition-shadow relative h-full flex flex-col"
              >
                <div className="text-[56px] leading-none text-[#0066CC] opacity-15 font-serif select-none mb-3">
                  &ldquo;
                </div>
                <p className="text-[15px] text-[#475569] leading-relaxed italic mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-[#F1F5F9]">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0066CC] to-[#FF6600] flex items-center justify-center text-white text-[14px] font-700" style={{ fontWeight: 700 }}>
                    {t.author.split(" ")[0][0]}
                  </div>
                  <div>
                    <div className="text-[14px] font-700 text-[#0A2540]" style={{ fontWeight: 700 }}>{t.author}</div>
                    <div className="text-[12px] text-[#94A3B8]">{t.role}</div>
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
        aria-label="Partner CTA"
      >
        <div className="container-custom text-center">
          <h2 className="text-[clamp(26px,4vw,40px)] font-800 text-white mb-4" style={{ fontWeight: 800 }}>
            Ready to Partner with HAGEC?
          </h2>
          <p className="text-white/80 max-w-xl mx-auto text-[16px] mb-8">
            Join our growing list of international, bilateral, and government clients across the
            Horn of Africa.
          </p>
          <Link href="/contact" className="btn-outline text-[15px] px-8">
            Contact Our Team
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
