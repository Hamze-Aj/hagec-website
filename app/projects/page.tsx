"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Calendar, Layers, Search, Filter, ArrowRight } from "lucide-react";

const categories = ["All", "Irrigation", "Hydrology", "Solar-Pump", "Geotechnical", "GIS & Surveying", "EIA", "Feasibility Study"];

const projects = [
  {
    id: 1,
    title: "Fafen River Irrigation Scheme",
    slug: "fafen-river-irrigation",
    category: "Irrigation",
    client: "Somali Regional State Bureau of Agriculture",
    location: "Jigjiga Zone, Somali Region",
    projectSize: "1,500 HA",
    completionDate: "2022",
    status: "Completed",
    isFeatured: true,
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=700&q=80",
    shortDescription: "Feasibility study, detailed design, and construction supervision of a 1,500 HA surface irrigation scheme fed by Fafen River in the Jigjiga Zone.",
  },
  {
    id: 2,
    title: "Wabe Shebelle Solar-Pump System",
    slug: "wabe-shebelle-solar-pump",
    category: "Solar-Pump",
    client: "FAO Ethiopia",
    location: "Gode Zone, Somali Region",
    projectSize: "—",
    completionDate: "2021",
    status: "Completed",
    isFeatured: true,
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=700&q=80",
    shortDescription: "Design and installation supervision of a 45 kW solar-pump system providing irrigation water to 200 smallholder farmers.",
  },
  {
    id: 3,
    title: "Waberi Canal Rehabilitation",
    slug: "waberi-canal-rehabilitation",
    category: "Irrigation",
    client: "World Bank / Somali Regional State",
    location: "Gode Zone, Somali Region",
    projectSize: "800 HA",
    completionDate: "2023",
    status: "Completed",
    isFeatured: false,
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=700&q=80",
    shortDescription: "Rehabilitation of primary and secondary canals of the existing 800 HA Waberi irrigation scheme, including hydraulic modelling and design.",
  },
  {
    id: 4,
    title: "Jigjiga Water Supply EIA",
    slug: "jigjiga-water-supply-eia",
    category: "EIA",
    client: "Somali Urban Water Supply Authority",
    location: "Jigjiga, Somali Region",
    projectSize: "—",
    completionDate: "2023",
    status: "Completed",
    isFeatured: false,
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=700&q=80",
    shortDescription: "Full Environmental Impact Assessment and Environmental and Social Management Plan for the Jigjiga municipal water supply expansion project.",
  },
  {
    id: 5,
    title: "Somali Region Land Use Mapping",
    slug: "somali-region-land-use-mapping",
    category: "GIS & Surveying",
    client: "UNDP Ethiopia",
    location: "Somali Region (Multi-zone)",
    projectSize: "—",
    completionDate: "2022",
    status: "Completed",
    isFeatured: false,
    image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=700&q=80",
    shortDescription: "Satellite image-based land use and land cover mapping of five zones of the Somali Region using GIS and remote sensing analysis.",
  },
  {
    id: 6,
    title: "Erer Valley Geotechnical Study",
    slug: "erer-valley-geotechnical",
    category: "Geotechnical",
    client: "Ministry of Water & Energy, Ethiopia",
    location: "Erer Valley, Somali Region",
    projectSize: "—",
    completionDate: "2021",
    status: "Completed",
    isFeatured: false,
    image: "https://images.unsplash.com/photo-1531966817680-4a1dbf9fbd72?w=700&q=80",
    shortDescription: "Geotechnical investigation for a proposed earth dam, including borehole drilling, laboratory testing, and foundation engineering report.",
  },
  {
    id: 7,
    title: "Fafen Basin Hydrological Study",
    slug: "fafen-basin-hydrology",
    category: "Hydrology",
    client: "FAO Ethiopia / Somali Regional State",
    location: "Fafen River Basin, Somali Region",
    projectSize: "—",
    completionDate: "2024",
    status: "Ongoing",
    isFeatured: true,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80",
    shortDescription: "Comprehensive hydrological and water resources study of the Fafen River Basin including flood analysis, water balance, and flow rating curves.",
  },
  {
    id: 8,
    title: "Northern Somali Irrigation Feasibility",
    slug: "northern-somali-irrigation-feasibility",
    category: "Feasibility Study",
    client: "African Development Bank",
    location: "Shinile Zone, Somali Region",
    projectSize: "2,500 HA",
    completionDate: "2025",
    status: "Ongoing",
    isFeatured: false,
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&q=80",
    shortDescription: "Pre-feasibility and feasibility study for a new 2,500 HA irrigation scheme in Shinile Zone, including topographic survey and hydrological assessment.",
  },
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = projects.filter((p) => {
    const matchesCat = activeCategory === "All" || p.category === activeCategory;
    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.client.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <>
      {/* ── Header ───────────────────────────────────────────── */}
      <section
        className="relative py-24 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0A2540 0%, #0066CC 100%)" }}
        aria-label="Projects page header"
      >
        <div className="relative z-10 container-custom text-white text-center">
          <span className="section-label text-[#FF6600] block mb-3">Our Portfolio</span>
          <h1
            className="text-[clamp(32px,5vw,58px)] font-900 leading-tight mb-5"
            style={{ fontWeight: 900, letterSpacing: "-0.025em" }}
          >
            Projects Portfolio
          </h1>
          <p className="text-white/75 text-[17px] max-w-xl mx-auto leading-relaxed">
            Delivering technically rigorous engineering projects across irrigation, water resources,
            geotechnical, and renewable energy sectors.
          </p>
        </div>
      </section>

      {/* ── Filters ──────────────────────────────────────────── */}
      <section className="bg-white border-b border-[#E2E8F0] py-6 sticky top-[72px] z-40" aria-label="Project filters">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-72">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#94A3B8]" />
              <input
                type="search"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-[#E2E8F0] text-[14px] text-[#0A2540] bg-[#F8FAFC] focus:outline-none focus:border-[#0066CC] focus:ring-1 focus:ring-[#0066CC] transition-all"
                id="project-search"
                aria-label="Search projects"
              />
            </div>

            {/* Category filters */}
            <div className="flex items-center gap-2 flex-wrap" role="group" aria-label="Filter by category">
              <Filter size={15} className="text-[#94A3B8] flex-shrink-0" />
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-[13px] font-600 px-4 py-2 rounded-full border transition-all ${
                    activeCategory === cat
                      ? "bg-[#0066CC] text-white border-[#0066CC]"
                      : "bg-white text-[#64748B] border-[#E2E8F0] hover:border-[#0066CC] hover:text-[#0066CC]"
                  }`}
                  style={{ fontWeight: 600 }}
                  aria-pressed={activeCategory === cat}
                  id={`filter-${cat.replace(/\s+/g, "-").toLowerCase()}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Projects Grid ─────────────────────────────────────── */}
      <section className="section-padding bg-[#F8FAFC]" aria-label="Projects grid">
        <div className="container-custom">
          {filtered.length === 0 ? (
            <div className="text-center py-24">
              <div className="text-5xl mb-4">🔍</div>
              <h2 className="text-[20px] font-700 text-[#0A2540] mb-2" style={{ fontWeight: 700 }}>
                No projects found
              </h2>
              <p className="text-[#64748B]">Try adjusting your search or filter.</p>
            </div>
          ) : (
            <>
              <p className="text-[13px] text-[#94A3B8] mb-8">
                Showing {filtered.length} project{filtered.length !== 1 ? "s" : ""}
                {activeCategory !== "All" ? ` in "${activeCategory}"` : ""}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                {filtered.map((project) => (
                  <Link
                    key={project.id}
                    href={`/projects/${project.slug}`}
                    className="group block rounded-2xl overflow-hidden bg-white border border-[#E2E8F0] card-hover"
                    id={`project-card-${project.id}`}
                  >
                    <div className="relative h-[220px] overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/50 to-transparent" />
                      {/* Status */}
                      <div className="absolute top-3 left-3 flex gap-2">
                        <span
                          className={`text-[11px] font-700 px-2.5 py-1 rounded-full ${
                            project.status === "Completed"
                              ? "bg-emerald-500 text-white"
                              : "bg-[#FF6600] text-white"
                          }`}
                          style={{ fontWeight: 700 }}
                        >
                          {project.status}
                        </span>
                        {project.isFeatured && (
                          <span className="text-[11px] font-700 px-2.5 py-1 rounded-full bg-[#0066CC] text-white" style={{ fontWeight: 700 }}>
                            Featured
                          </span>
                        )}
                      </div>
                      {/* Category */}
                      <div className="absolute bottom-3 left-3">
                        <span className="text-[11px] text-white/85 bg-white/15 backdrop-blur-sm px-2.5 py-0.5 rounded-full">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-5">
                      <h2
                        className="text-[16px] font-700 text-[#0A2540] mb-2 leading-snug group-hover:text-[#0066CC] transition-colors"
                        style={{ fontWeight: 700 }}
                      >
                        {project.title}
                      </h2>
                      <p className="text-[13px] text-[#64748B] leading-relaxed mb-3 line-clamp-2">
                        {project.shortDescription}
                      </p>
                      <div className="flex flex-col gap-1.5 text-[12.5px] text-[#94A3B8]">
                        <div className="flex items-center gap-1.5">
                          <MapPin size={12} className="text-[#FF6600]" />
                          {project.location}
                        </div>
                        {project.projectSize !== "—" && (
                          <div className="flex items-center gap-1.5">
                            <Layers size={12} className="text-[#0066CC]" />
                            {project.projectSize}
                          </div>
                        )}
                        <div className="flex items-center gap-1.5">
                          <Calendar size={12} className="text-[#94A3B8]" />
                          {project.completionDate}
                          {project.status === "Ongoing" ? " (Ongoing)" : ""}
                        </div>
                      </div>
                      <div className="mt-4 pt-4 border-t border-[#F1F5F9] flex items-center justify-between">
                        <span className="text-[12px] text-[#94A3B8] truncate max-w-[60%]">{project.client}</span>
                        <span className="text-[13px] text-[#0066CC] font-600 flex items-center gap-1 group-hover:text-[#FF6600] transition-colors" style={{ fontWeight: 600 }}>
                          View Details
                          <ArrowRight size={13} />
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}
