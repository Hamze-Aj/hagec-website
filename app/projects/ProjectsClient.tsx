"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Calendar, Layers, Search, Filter, ArrowRight } from "lucide-react";
import type { ProjectListItem } from "@/lib/project-types";

const categories = ["All", "Irrigation", "Hydrology", "Solar-Pump", "Geotechnical", "GIS & Surveying", "EIA", "Feasibility Study"];

export default function ProjectsClient({
  initialProjects,
}: {
  initialProjects: ProjectListItem[];
}) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = initialProjects.filter((p) => {
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
      <section className="bg-white border-b border-[#E2E8F0] py-6 sticky top-[76px] lg:top-20 z-40" aria-label="Project filters">
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
                  className={`text-[13px] font-600 px-4 py-2 rounded-full border transition-all ${activeCategory === cat
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filtered.map((project) => (
                  <Link
                    key={String(project.id)}
                    href={`/projects/${project.slug}`}
                    className="group flex flex-col h-full rounded-2xl overflow-hidden bg-white border border-[#E2E8F0] card-hover shadow-lg hover:shadow-xl"
                    id={`project-card-${project.id}`}
                  >
                    <div className="relative h-[220px] shrink-0 overflow-hidden">
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
                          className={`text-[11px] font-700 px-2.5 py-1 rounded-full ${project.status === "Completed"
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

                    <div className="p-8 flex flex-col flex-1">
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
                      <div className="mt-auto pt-4 border-t border-[#F1F5F9] flex items-center justify-between gap-3">
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
