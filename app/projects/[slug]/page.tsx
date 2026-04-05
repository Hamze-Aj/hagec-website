import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, Calendar, Layers, Users, CheckCircle2, ArrowLeft, ArrowRight } from "lucide-react";

// Static project data (replace with Sanity fetch when connected)
const projects: Record<string, {
  title: string; category: string; client: string; location: string;
  projectSize: string; completionDate: string; status: string;
  shortDescription: string; fullDescription: string[];
  keyResults: string[]; gallery: string[]; image: string;
}> = {
  "fafen-river-irrigation": {
    title: "Fafen River Irrigation Scheme",
    category: "Irrigation",
    client: "Somali Regional State Bureau of Agriculture",
    location: "Jigjiga Zone, Somali Region, Ethiopia",
    projectSize: "1,500 HA",
    completionDate: "2022",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=1200&q=85",
    shortDescription: "Feasibility study, detailed design, and construction supervision of a 1,500 HA surface irrigation scheme fed by Fafen River in the Jigjiga Zone.",
    fullDescription: [
      "The Fafen River Irrigation Scheme represents one of HAGEC's flagship projects and the largest completed irrigation development in the Somali Region. Commissioned by the Somali Regional State Bureau of Agriculture, the project covers a net irrigable area of 1,500 hectares across the Fafen River basin.",
      "HAGEC was responsible for the full project cycle: inception and scoping, topographic survey, hydrological analysis, geotechnical investigation, hydraulic design, construction supervision, and preparation of operation and maintenance manuals.",
      "The scheme utilizes a gravity-fed diversion weir on the Fafen River, feeding a primary canal network of 18 km and secondary/tertiary distribution canals totalling 64 km. The hydraulic design accommodates a peak irrigation demand of 2.8 m³/s, with an efficiency-optimized canal cross-section profile developed using HEC-RAS modelling.",
    ],
    keyResults: [
      "1,500 hectares of previously rain-fed land brought under perennial irrigation",
      "Direct benefit to over 2,400 smallholder farming households",
      "Estimated annual agricultural output increase of ETB 185 million",
      "17 km of primary canal constructed to design specifications",
      "5 major hydraulic structures designed and built (headworks, regulators, off-takes)",
      "100% project completion within budget and on schedule",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80",
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80",
      "https://images.unsplash.com/photo-1531966817680-4a1dbf9fbd72?w=800&q=80",
      "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800&q=80",
    ],
  },
  "wabe-shebelle-solar-pump": {
    title: "Wabe Shebelle Solar-Pump System",
    category: "Solar-Pump",
    client: "FAO Ethiopia",
    location: "Gode Zone, Somali Region, Ethiopia",
    projectSize: "—",
    completionDate: "2021",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&q=85",
    shortDescription: "Design and installation supervision of a 45 kW solar-pump system providing irrigation water to 200 smallholder farmers.",
    fullDescription: [
      "The Wabe Shebelle Solar-Pump System project was implemented under FAO Ethiopia's livelihoods resilience programme for conflict-affected communities in Gode Zone. HAGEC designed a solar-powered pumping system capable of lifting water from the Wabe Shebelle River to serve 200 smallholder farmers.",
      "The system comprises a 45 kW photovoltaic array, two submersible pumps, a control house, storage reservoir, and a gravity-distribution network to the field plots. HAGEC conducted solar resource analysis, hydraulic design, pump sizing, PV system design, and bill of quantities, followed by full construction supervision.",
    ],
    keyResults: [
      "45 kW solar PV system installed and operational",
      "200 farming households provided with reliable irrigation water",
      "Zero fossil-fuel dependency — completely off-grid system",
      "360 m³/hour pumping capacity at design head",
      "System designed for 25-year operational life",
      "Full O&M training delivered to community management committee",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    ],
  },
  "waberi-canal-rehabilitation": {
    title: "Waberi Canal Rehabilitation",
    category: "Irrigation",
    client: "World Bank / Somali Regional State",
    location: "Gode Zone, Somali Region, Ethiopia",
    projectSize: "800 HA",
    completionDate: "2023",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200&q=85",
    shortDescription: "Rehabilitation of primary and secondary canals of the existing 800 HA Waberi irrigation scheme, including hydraulic modelling and design.",
    fullDescription: [
      "The Waberi Canal Rehabilitation project was funded under a World Bank-supported irrigation development programme. HAGEC was engaged to rehabilitate the primary (12 km) and secondary canal network (38 km) of the existing 800 HA Waberi irrigation scheme which had fallen into disrepair.",
      "HAGEC conducted a full condition survey, hydraulic re-modelling using HEC-RAS and EPANET, and prepared a detailed rehabilitation design incorporating concrete lining of critical reaches, relief structure upgrades, and new water measurement structures.",
    ],
    keyResults: [
      "12 km primary canal and 38 km secondary canals rehabilitated",
      "Conveyance efficiency improved from 48% to 78%",
      "800 HA of agricultural land restored to full production",
      "1,100 farming households reinstated",
      "Water measurement structures installed at 24 locations",
      "Detailed O&M manual prepared for local water users association",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80",
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80",
    ],
  },
  "jigjiga-water-supply-eia": {
    title: "Jigjiga Water Supply EIA",
    category: "EIA",
    client: "Somali Urban Water Supply Authority",
    location: "Jigjiga, Somali Region, Ethiopia",
    projectSize: "—",
    completionDate: "2023",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1200&q=85",
    shortDescription: "Full Environmental Impact Assessment and Environmental and Social Management Plan for the Jigjiga municipal water supply expansion project.",
    fullDescription: [
      "HAGEC conducted a comprehensive Environmental Impact Assessment and Environmental and Social Management Plan for the expansion of the Jigjiga municipal water supply system, funded by the African Development Bank. The project scope included a new water intake on the Fafen River, a water treatment plant, and 45 km of transmission and distribution mains.",
    ],
    keyResults: [
      "Full ESIA report compliant with Ethiopian EPA and AfDB standards",
      "Baseline biodiversity and ecosystem survey completed",
      "ESMP with 48 mitigation measures developed",
      "Stakeholder consultation with 12 communities conducted",
      "Resettlement screening completed for pipeline corridor",
      "Environmental compliance monitoring programme designed",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80",
    ],
  },
  "somali-region-land-use-mapping": {
    title: "Somali Region Land Use Mapping",
    category: "GIS & Surveying",
    client: "UNDP Ethiopia",
    location: "Somali Region (Multi-zone)",
    projectSize: "—",
    completionDate: "2022",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=1200&q=85",
    shortDescription: "Satellite image-based land use and land cover mapping of five zones of the Somali Region using GIS and remote sensing analysis.",
    fullDescription: [
      "Under a UNDP-funded natural resource management programme, HAGEC produced comprehensive land use and land cover (LULC) maps for five administrative zones of Somali Region using multi-temporal Sentinel-2 satellite imagery and advanced GIS classification techniques.",
    ],
    keyResults: [
      "Land use maps produced for 5 zones at 1:50,000 scale",
      "10 land cover classes mapped with >85% overall accuracy",
      "Change detection analysis for 2010–2022 period",
      "Hotspot areas of land degradation identified and mapped",
      "GIS database and web map portal delivered to UNDP",
      "Remote sensing methodology manual produced for government staff",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800&q=80",
    ],
  },
  "erer-valley-geotechnical": {
    title: "Erer Valley Geotechnical Study",
    category: "Geotechnical",
    client: "Ministry of Water & Energy, Ethiopia",
    location: "Erer Valley, Somali Region",
    projectSize: "—",
    completionDate: "2021",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1531966817680-4a1dbf9fbd72?w=1200&q=85",
    shortDescription: "Geotechnical investigation for a proposed earth dam, including borehole drilling, laboratory testing, and foundation engineering report.",
    fullDescription: [
      "HAGEC conducted a full programme of geotechnical investigation for a proposed earth-fill dam in the Erer Valley. The investigation programme included geological mapping, test pits, rotary boreholes to 25 m depth, standard penetration testing, laboratory soil and rock testing, and seismic refraction surveys.",
    ],
    keyResults: [
      "8 boreholes drilled and logged to 25 m depth",
      "24 test pits excavated and sampled",
      "Full suite of laboratory tests performed on 142 samples",
      "Seismic refraction survey completed along 3 profiles",
      "Foundation engineering recommendations provided for dam axis",
      "Construction materials investigation report completed",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1531966817680-4a1dbf9fbd72?w=800&q=80",
    ],
  },
  "fafen-basin-hydrology": {
    title: "Fafen Basin Hydrological Study",
    category: "Hydrology",
    client: "FAO Ethiopia / Somali Regional State",
    location: "Fafen River Basin, Somali Region",
    projectSize: "—",
    completionDate: "2024",
    status: "Ongoing",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=85",
    shortDescription: "Comprehensive hydrological and water resources study of the Fafen River Basin including flood analysis, water balance, and flow rating curves.",
    fullDescription: [
      "This ongoing study commissioned by FAO Ethiopia provides a comprehensive hydrological and water resources assessment of the entire Fafen River Basin — the primary water source for the Jigjiga Zone. HAGEC is conducting multi-year streamflow monitoring, rainfall analysis, and water balance modelling to inform long-term irrigation development planning.",
    ],
    keyResults: [
      "18 stream gauging stations installed and operational",
      "25-year flood frequency analysis completed",
      "Water balance model calibrated using 30 years of data",
      "Groundwater recharge estimation completed",
      "Stage-discharge rating curves established for 8 main gauging sites",
      "Hydrogeological map of the basin produced",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    ],
  },
  "northern-somali-irrigation-feasibility": {
    title: "Northern Somali Irrigation Feasibility",
    category: "Feasibility Study",
    client: "African Development Bank",
    location: "Shinile Zone, Somali Region",
    projectSize: "2,500 HA",
    completionDate: "2025",
    status: "Ongoing",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=85",
    shortDescription: "Pre-feasibility and feasibility study for a new 2,500 HA irrigation scheme in Shinile Zone, including topographic survey and hydrological assessment.",
    fullDescription: [
      "HAGEC is currently conducting a pre-feasibility and feasibility study for a proposed 2,500 HA irrigation development in Shinile Zone, co-financed by the African Development Bank and the Somali Regional State. The study encompasses topographic survey of 4,500 HA using drone photogrammetry, hydrological analysis, geotechnical investigation, environmental scoping, and socio-economic assessment.",
    ],
    keyResults: [
      "Drone photogrammetry survey of 4,500 HA completed",
      "4 candidate irrigation command areas identified and ranked",
      "Hydrological analysis for 3 potential diversion points",
      "Socio-economic survey of 800 farming households conducted",
      "Preliminary irrigation layout design prepared",
      "Feasibility report submission expected Q4 2025",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    ],
  },
};

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects[slug];
  if (!project) return { title: "Project Not Found | HAGEC" };
  return {
    title: project.title,
    description: project.shortDescription,
  };
}

export async function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }));
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects[slug];
  if (!project) notFound();

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative h-[52vh] flex items-end overflow-hidden" aria-label="Project hero">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 container-custom pb-12 text-white w-full">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-white/70 text-[13px] hover:text-white mb-4 transition-colors"
          >
            <ArrowLeft size={14} />
            Back to Projects
          </Link>
          <div className="flex flex-wrap gap-2 mb-3">
            <span
              className={`text-[11px] font-700 px-2.5 py-1 rounded-full ${
                project.status === "Completed" ? "bg-emerald-500" : "bg-[#FF6600]"
              } text-white`}
              style={{ fontWeight: 700 }}
            >
              {project.status}
            </span>
            <span className="text-[11px] text-white/80 bg-white/15 backdrop-blur-sm px-2.5 py-1 rounded-full">
              {project.category}
            </span>
          </div>
          <h1
            className="text-[clamp(26px,4vw,48px)] font-900 leading-tight"
            style={{ fontWeight: 900, letterSpacing: "-0.02em" }}
          >
            {project.title}
          </h1>
        </div>
      </section>

      {/* ── Content ───────────────────────────────────────────── */}
      <section className="section-padding bg-white" aria-label="Project details">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2">
              <h2 className="text-[22px] font-700 text-[#0A2540] mb-4" style={{ fontWeight: 700 }}>
                Project Overview
              </h2>
              <div className="divider-brand" />
              <div className="prose-hagec space-y-4 mt-4">
                {project.fullDescription.map((para, i) => (
                  <p key={i} className="text-[#475569] leading-relaxed text-[15.5px]">{para}</p>
                ))}
              </div>

              {/* Key Results */}
              <div className="mt-10">
                <h2 className="text-[22px] font-700 text-[#0A2540] mb-4" style={{ fontWeight: 700 }}>
                  Key Results & Deliverables
                </h2>
                <div className="divider-brand" />
                <div className="grid grid-cols-1 gap-3 mt-4">
                  {project.keyResults.map((result, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0]">
                      <CheckCircle2 size={18} className="text-[#0066CC] flex-shrink-0 mt-0.5" />
                      <span className="text-[14.5px] text-[#475569]">{result}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Gallery */}
              {project.gallery.length > 0 && (
                <div className="mt-10">
                  <h2 className="text-[22px] font-700 text-[#0A2540] mb-4" style={{ fontWeight: 700 }}>
                    Project Gallery
                  </h2>
                  <div className="divider-brand" />
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    {project.gallery.map((img, i) => (
                      <div key={i} className="relative rounded-xl overflow-hidden h-[180px] group">
                        <Image
                          src={img}
                          alt={`${project.title} – Photo ${i + 1}`}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 50vw, 25vw"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div>
              <div className="bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] p-6 sticky top-24">
                <h3 className="text-[13px] font-700 uppercase tracking-widest text-[#0A2540] mb-5" style={{ fontWeight: 700 }}>
                  Project Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Users size={16} className="text-[#FF6600] flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-[11px] uppercase tracking-wide text-[#94A3B8] mb-0.5">Client</div>
                      <div className="text-[14px] text-[#0A2540] font-500">{project.client}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin size={16} className="text-[#FF6600] flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-[11px] uppercase tracking-wide text-[#94A3B8] mb-0.5">Location</div>
                      <div className="text-[14px] text-[#0A2540]">{project.location}</div>
                    </div>
                  </div>
                  {project.projectSize !== "—" && (
                    <div className="flex items-start gap-3">
                      <Layers size={16} className="text-[#FF6600] flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="text-[11px] uppercase tracking-wide text-[#94A3B8] mb-0.5">Project Size</div>
                        <div className="text-[14px] text-[#0A2540]">{project.projectSize}</div>
                      </div>
                    </div>
                  )}
                  <div className="flex items-start gap-3">
                    <Calendar size={16} className="text-[#FF6600] flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-[11px] uppercase tracking-wide text-[#94A3B8] mb-0.5">
                        {project.status === "Ongoing" ? "Expected Completion" : "Completion Year"}
                      </div>
                      <div className="text-[14px] text-[#0A2540]">{project.completionDate}</div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-[#E2E8F0]">
                  <Link href="/contact" className="btn-primary w-full justify-center text-[14px]">
                    Discuss a Similar Project
                    <ArrowRight size={15} />
                  </Link>
                  <Link href="/projects" className="mt-3 w-full text-center text-[13px] text-[#64748B] hover:text-[#0066CC] transition-colors flex items-center justify-center gap-1.5">
                    <ArrowLeft size={13} />
                    All Projects
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
