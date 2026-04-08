import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Users, Award, Target, MapPin, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About HAGEC",
  description:
    "Learn about HAGEC – Horn of African Geology and Engineering Consultant. Our history, mission, values, and multidisciplinary team of engineers and geologists based in Jigjiga.",
};

const values = [
  {
    icon: <Target size={24} />,
    title: "Technical Excellence",
    desc: "We apply international engineering standards and rigorous analysis to every project, ensuring technically sound and sustainable outcomes.",
  },
  {
    icon: <Users size={24} />,
    title: "Community Focus",
    desc: "Our solutions are designed with communities at the center — delivering water security, food security, and economic opportunity to rural populations.",
  },
  {
    icon: <Award size={24} />,
    title: "Integrity & Transparency",
    desc: "We operate with the highest standards of professional ethics, building long-term trust with every client, community, and stakeholder.",
  },
  {
    icon: <MapPin size={24} />,
    title: "Local Expertise",
    desc: "Deeply rooted in the Horn of Africa, we leverage unparalleled local knowledge of the region's hydrology, geology, climate, and socio-cultural context.",
  },
];

const milestones = [
  { year: "2010", event: "HAGEC founded in Jigjiga, Somali Region, Ethiopia" },
  { year: "2012", event: "First major FAO-funded irrigation feasibility study in the Fafen River Basin" },
  { year: "2015", event: "Expanded into geotechnical investigations and EIA services" },
  { year: "2017", event: "Delivered first UNDP-partnered solar-pump water supply system" },
  { year: "2019", event: "ISO-certified GIS and remote sensing laboratory established" },
  { year: "2021", event: "Crossed 1,000 HA of irrigation area designed milestone" },
  { year: "2023", event: "Expanded operations to Oromia and Afar regional states" },
  { year: "2025", event: "3,000+ HA designed — 15+ major projects delivered" },
];

const expertise = [
  "Irrigation Engineering & Hydraulic Structures",
  "Hydrology & Flood Analysis",
  "Groundwater Assessment & Borehole Design",
  "Geotechnical & Geological Investigations",
  "Solar-Pump System Engineering",
  "GIS, Remote Sensing & Spatial Analysis",
  "Environmental & Social Impact Assessment",
  "Construction Supervision & Quality Assurance",
  "Feasibility & Detailed Engineering Studies",
  "Land Use Planning & Resource Mapping",
];

export default function AboutPage() {
  return (
    <>
      {/* ── Page Header ─────────────────────────────────────── */}
      <section
        className="relative py-24 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0A2540 0%, #0066CC 100%)" }}
        aria-label="About page header"
      >
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/about.jpeg"
            alt=""
            fill
            className="object-cover"
            aria-hidden="true"
          />
        </div>
        <div className="relative z-10 container-custom text-white text-center">
          <span className="section-label text-[#FF6600] block mb-3">Who We Are</span>
          <h1
            className="text-[clamp(32px,5vw,58px)] font-900 leading-tight mb-5"
            style={{ fontWeight: 900, letterSpacing: "-0.025em" }}
          >
            About HAGEC
          </h1>
          <p className="text-white/75 text-[17px] max-w-2xl mx-auto leading-relaxed">
            A multidisciplinary engineering and geology consultancy delivering sustainable
            solutions for water resources, infrastructure, and the environment across the Horn of Africa.
          </p>
        </div>
      </section>

      {/* ── Mission & Vision ─────────────────────────────────── */}
      <section className="section-padding bg-white" aria-label="Mission and vision">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="section-label">Our Story</span>
              <h2 className="section-title mb-5">
                Rooted in Jigjiga. Delivering Across the Horn.
              </h2>
              <p className="text-[#475569] leading-relaxed mb-5">
                Horn of African Geology and Engineering Consultant (HAGEC) was established in
                Jigjiga, Somali Region, Ethiopia, with a mission to provide world-class engineering
                consultancy services tailored to the unique challenges of the Horn of Africa&apos;s
                arid and semi-arid landscapes.
              </p>
              <p className="text-[#475569] leading-relaxed mb-5">
                Over more than a decade, our team of certified engineers, geologists, hydrologists,
                and GIS specialists has partnered with international organizations including FAO,
                UNDP, the World Bank, and the Ethiopian government to design and supervise
                transformative infrastructure projects across water resources, irrigation, and
                renewable energy sectors.
              </p>
              <p className="text-[#475569] leading-relaxed mb-8">
                Today, HAGEC stands as one of the most trusted engineering consultancies in the
                Somali Region, with a portfolio spanning over 3,000 hectares of irrigated land,
                15+ completed projects, and an uncompromising commitment to technical excellence
                and community development.
              </p>
              <div className="flex gap-4">
                <Link href="/projects" className="btn-primary">
                  Our Projects
                  <ArrowRight size={16} />
                </Link>
                <Link href="/contact" className="btn-orange">
                  Work With Us
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-card-hover">
                <Image
                  src="/about.jpeg"
                  alt="HAGEC field team conducting an environmental survey"
                  width={600}
                  height={480}
                  className="object-cover w-full h-[440px]"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-[#0A2540] rounded-xl p-5 shadow-card-hover">
                <div className="text-[28px] font-900 text-white" style={{ fontWeight: 900 }}>
                  3,000+ <span className="text-[#FF6600]">HA</span>
                </div>
                <div className="text-white/60 text-[13px]">Irrigation Area Designed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ──────────────────────────────────────────── */}
      <section className="section-padding bg-[#F8FAFC]" aria-label="Our values">
        <div className="container-custom">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="section-label">What Drives Us</span>
            <h2 className="section-title">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {values.map((v, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 border border-[#E2E8F0] card-hover shadow-lg hover:shadow-xl h-full"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: i % 2 === 0 ? "#EFF6FF" : "#FFF7ED", color: i % 2 === 0 ? "#0066CC" : "#FF6600" }}
                >
                  {v.icon}
                </div>
                <h3 className="text-[17px] font-700 text-[#0A2540] mb-2" style={{ fontWeight: 700 }}>{v.title}</h3>
                <p className="text-[#64748B] text-[14.5px] leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Expertise areas ──────────────────────────────────── */}
      <section className="section-padding bg-white" aria-label="Areas of expertise">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div>
              <span className="section-label">What We Do</span>
              <h2 className="section-title mb-5">Areas of Technical Expertise</h2>
              <p className="section-subtitle mb-8">
                HAGEC provides a comprehensive range of engineering and consultancy services,
                integrating multiple disciplines to deliver holistic solutions.
              </p>
              <div className="grid grid-cols-1 gap-3">
                {expertise.map((e, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 size={17} className="text-[#0066CC] flex-shrink-0" />
                    <span className="text-[#475569] text-[15px]">{e}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <span className="section-label">Our History</span>
              <h2 className="section-title mb-8">Key Milestones</h2>
              <div className="relative">
                <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-[#E2E8F0]" />
                <div className="space-y-6">
                  {milestones.map((m, i) => (
                    <div key={i} className="flex gap-5 items-start">
                      <div className="relative flex-shrink-0">
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center text-[11px] font-700 text-white z-10 relative"
                          style={{ background: i % 2 === 0 ? "#0066CC" : "#FF6600", fontWeight: 700 }}
                        >
                          {m.year.slice(2)}
                        </div>
                      </div>
                      <div className="pb-4">
                        <div className="text-[13px] font-700 text-[#0066CC] mb-0.5" style={{ fontWeight: 700 }}>{m.year}</div>
                        <div className="text-[14.5px] text-[#475569]">{m.event}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────── */}
      <section
        className="py-20"
        style={{ background: "linear-gradient(135deg, #0A2540, #0066CC)" }}
        aria-label="Call to action"
      >
        <div className="container-custom text-center">
          <h2 className="text-[clamp(28px,4vw,42px)] font-800 text-white mb-5" style={{ fontWeight: 800 }}>
            Ready to Partner with HAGEC?
          </h2>
          <p className="text-white/75 max-w-xl mx-auto mb-8 text-[16px] leading-relaxed">
            Whether you need a feasibility study, detailed design, or full construction supervision —
            our team is ready to deliver excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-orange">
              Contact Our Team
              <ArrowRight size={16} />
            </Link>
            <Link href="/services" className="btn-outline">
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
