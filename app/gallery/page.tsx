"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ZoomIn, Filter } from "lucide-react";

const categories = ["All", "Irrigation", "Solar & Energy", "Surveying & GIS", "Field Work", "Infrastructure"];

const galleryItems = [
  { id: 1, src: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80", caption: "Fafen River main canal, Jigjiga Zone", category: "Irrigation", wide: true },
  { id: 2, src: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80", caption: "Solar-pump PV array, Gode Zone", category: "Solar & Energy" },
  { id: 3, src: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80", caption: "Topographic survey team in the field", category: "Field Work" },
  { id: 4, src: "https://images.unsplash.com/photo-1531966817680-4a1dbf9fbd72?w=800&q=80", caption: "GIS land use mapping analysis", category: "Surveying & GIS", tall: true },
  { id: 5, src: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800&q=80", caption: "Satellite imagery classification, Somali Region", category: "Surveying & GIS" },
  { id: 6, src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80", caption: "Stream gauging station, Fafen Basin", category: "Field Work" },
  { id: 7, src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80", caption: "Headworks construction supervision", category: "Infrastructure", wide: true },
  { id: 8, src: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80", caption: "Water treatment plant EIA site visit", category: "Infrastructure" },
  { id: 9, src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80", caption: "Detailed engineering design workshop", category: "Field Work" },
  { id: 10, src: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=700&q=80", caption: "GIS cartography output — Shinile Zone", category: "Surveying & GIS" },
  { id: 11, src: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=700&q=80", caption: "Secondary canal distribution system", category: "Irrigation" },
  { id: 12, src: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=700&q=80", caption: "Solar water pump installation — Fik Zone", category: "Solar & Energy" },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxImg, setLightboxImg] = useState<null | (typeof galleryItems)[0]>(null);

  const filtered = galleryItems.filter(
    (img) => activeCategory === "All" || img.category === activeCategory
  );

  return (
    <>
      {/* ── Header ───────────────────────────────────────────── */}
      <section
        className="relative py-24 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0A2540 0%, #0066CC 100%)" }}
        aria-label="Gallery page header"
      >
        <div className="relative z-10 container-custom text-white text-center">
          <span className="section-label text-[#FF6600] block mb-3">Visual Portfolio</span>
          <h1
            className="text-[clamp(32px,5vw,58px)] font-900 leading-tight mb-5"
            style={{ fontWeight: 900, letterSpacing: "-0.025em" }}
          >
            Photo Gallery
          </h1>
          <p className="text-white/75 text-[17px] max-w-xl mx-auto leading-relaxed">
            A visual record of HAGEC&apos;s engineering work — from the drawing board to the field
            across the Horn of Africa.
          </p>
        </div>
      </section>

      {/* ── Filters ──────────────────────────────────────────── */}
      <section className="bg-white border-b border-[#E2E8F0] py-5 sticky top-[72px] z-40" aria-label="Gallery filters">
        <div className="container-custom">
          <div className="flex items-center gap-2 flex-wrap" role="group" aria-label="Filter by category">
            <Filter size={15} className="text-[#94A3B8] flex-shrink-0 mr-1" />
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
                id={`gallery-filter-${cat.replace(/\s+/g, "-").toLowerCase()}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Masonry Grid ─────────────────────────────────────── */}
      <section className="section-padding bg-[#F8FAFC]" aria-label="Photo gallery grid">
        <div className="container-custom">
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
            {filtered.map((img) => (
              <div
                key={img.id}
                className="relative break-inside-avoid rounded-xl overflow-hidden group cursor-pointer shadow-card hover:shadow-card-hover transition-all"
                onClick={() => setLightboxImg(img)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") setLightboxImg(img); }}
                aria-label={`View: ${img.caption}`}
                id={`gallery-item-${img.id}`}
              >
                <Image
                  src={img.src}
                  alt={img.caption}
                  width={600}
                  height={img.tall ? 520 : img.wide ? 360 : 280}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[#0A2540]/0 group-hover:bg-[#0A2540]/55 transition-all flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/20 backdrop-blur-sm rounded-full p-4">
                    <ZoomIn size={24} className="text-white" />
                  </div>
                </div>
                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#0A2540]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-white text-[13px] font-500 leading-snug">{img.caption}</p>
                  <span className="text-[11px] text-[#FF6600] font-600 mt-0.5 block" style={{ fontWeight: 600 }}>
                    {img.category}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <div className="text-5xl mb-4">📸</div>
              <p className="text-[#64748B]">No photos in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* ── Lightbox ─────────────────────────────────────────── */}
      {lightboxImg && (
        <div
          className="lightbox-overlay"
          onClick={() => setLightboxImg(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          <button
            className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/15 flex items-center justify-center text-white hover:bg-white/25 transition-colors z-10"
            onClick={() => setLightboxImg(null)}
            aria-label="Close lightbox"
            id="lightbox-close"
          >
            <X size={22} />
          </button>
          <div
            className="relative max-w-4xl max-h-[85vh] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightboxImg.src}
              alt={lightboxImg.caption}
              width={1200}
              height={800}
              className="rounded-xl object-contain max-h-[75vh]"
              style={{ width: "auto", height: "auto" }}
            />
            <div className="mt-4 text-center">
              <p className="text-white font-500 text-[15px]">{lightboxImg.caption}</p>
              <span className="text-[#FF6600] text-[13px]">{lightboxImg.category}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
