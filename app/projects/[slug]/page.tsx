import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, Calendar, Layers, Users, CheckCircle2, ArrowLeft, ArrowRight } from "lucide-react";
import { getProjectBySlug, getAllProjectSlugs } from "@/lib/get-projects";

export const revalidate = 60;

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found | HAGEC" };
  return {
    title: project.title,
    description: project.shortDescription,
  };
}

export async function generateStaticParams() {
  const slugs = await getAllProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
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
        <div className="relative z-10 container-custom pb-14 md:pb-16 text-white w-full">
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Main content */}
            <div className="lg:col-span-2">
              <h2 className="text-[clamp(22px,2.5vw,28px)] font-700 text-[#0A2540] mb-4" style={{ fontWeight: 700 }}>
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
                    <div key={i} className="flex items-start gap-3 p-6 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0] shadow-lg hover:shadow-xl transition-shadow">
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
                  <div className="grid grid-cols-2 gap-6 mt-4">
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
              <div className="bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] p-8 shadow-lg sticky top-28">
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
