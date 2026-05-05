import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  Users,
  Award,
  Target,
  MapPin,
  ArrowRight,
  Shield,
  Lightbulb,
  Leaf,
  HeartHandshake,
  Star,
  UserCheck,
  Monitor,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About HAGEC",
  description:
    "Learn about HAGEC – Horn of African Geology and Engineering Consultant. Established July 2023 in Jigjiga, our mission, vision, values, and 25-member expert team of engineers and geologists.",
};

// ─── Official 8 Core Values ───────────────────────────────────────────────────
const values = [
  {
    icon: <Award size={24} />,
    title: "Professionalism",
    desc: "We uphold the highest professional standards in every engagement, delivering technically rigorous and well-documented engineering outputs.",
  },
  {
    icon: <Lightbulb size={24} />,
    title: "Innovation",
    desc: "We embrace modern technologies and methodologies — from drone surveying to advanced GIS — to deliver smarter, more effective engineering solutions.",
  },
  {
    icon: <Leaf size={24} />,
    title: "Sustainability",
    desc: "Environmental and social sustainability is embedded in every design decision, ensuring our projects create lasting positive impact.",
  },
  {
    icon: <UserCheck size={24} />,
    title: "Client-Centered Service",
    desc: "Our clients' objectives drive everything we do. We listen, adapt, and deliver solutions precisely tailored to each project's unique needs.",
  },
  {
    icon: <Shield size={24} />,
    title: "Integrity",
    desc: "We operate with complete transparency and ethical conduct, building long-term trust with every client, community, and stakeholder.",
  },
  {
    icon: <HeartHandshake size={24} />,
    title: "Social Responsibility",
    desc: "We are committed to community development, gender equity, and improving livelihoods for rural populations across the Horn of Africa.",
  },
  {
    icon: <Star size={24} />,
    title: "Excellence",
    desc: "We set high standards and consistently exceed them — from the quality of our designs to the rigour of our construction supervision.",
  },
  {
    icon: <Users size={24} />,
    title: "Teamwork",
    desc: "Our multidisciplinary team of 25 engineers, geologists, hydrologists, and specialists collaborate seamlessly to deliver integrated solutions.",
  },
];

// ─── Accurate Milestones (post July 2023) ────────────────────────────────────
const milestones = [
  {
    year: "Jul 2023",
    event:
      "HAGEC founded in Jigjiga, Somali Region, Ethiopia (Reg. No. SM/ST/6/0012332/2015, TIN: 0084048018)",
  },
  {
    year: "2023",
    event:
      "Secured first major contract — FAO Beyahow irrigation scheme feasibility study (130 ha, Somali Region)",
  },
  {
    year: "2024",
    event:
      "Delivered UNDP-funded hydrogeophysical survey (contract value: ETB 5.2 million)",
  },
  {
    year: "2024",
    event:
      "World Bank Abakarow irrigation detailed design commissioned — 3,000 ha scheme",
  },
  {
    year: "2024",
    event:
      "Business license renewed (No. SM/ST/05/187799/4554505/2015); team grows to 25 multidisciplinary staff",
  },
  {
    year: "2025",
    event:
      "Portfolio spans 3,000+ HA irrigation area designed, 15+ projects delivered across Somali Region",
  },
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

// ─── Technical Software & Equipment ──────────────────────────────────────────
const software = [
  { name: "WaterCad", category: "Hydraulic Modelling" },
  { name: "EPANET", category: "Hydraulic Modelling" },
  { name: "SAP2000", category: "Structural Analysis" },
  { name: "ArcGIS", category: "GIS & Remote Sensing" },
  { name: "ERDAS IMAGINE", category: "GIS & Remote Sensing" },
  { name: "Global Mapper", category: "GIS & Remote Sensing" },
  { name: "AutoCAD Civil 3D", category: "Design & Drafting" },
  { name: "Prima Vera", category: "Project Scheduling" },
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

      {/* ── Our Story ────────────────────────────────────────── */}
      <section className="section-padding bg-white" aria-label="Our story">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="section-label">Our Story</span>
              <h2 className="section-title mb-5">
                Rooted in Jigjiga. Delivering Across the Horn.
              </h2>
              <p className="text-[#475569] leading-relaxed mb-5">
                Horn of African Geology and Engineering Consultant (HAGEC) was established in
                <strong> July 2023</strong> in Jigjiga, Somali Region, Ethiopia, with a mission
                to provide world-class engineering consultancy services tailored to the unique
                challenges of the Horn of Africa&apos;s arid and semi-arid landscapes.
              </p>
              <p className="text-[#475569] leading-relaxed mb-5">
                Led by <strong>Abdihadi Haji Hussein (Acting General Manager)</strong>, our team
                of certified engineers, geologists, hydrologists, and GIS specialists has
                partnered with international organizations including FAO, UNDP, the World Bank,
                and the Ethiopian government to design and supervise transformative infrastructure
                projects across water resources, irrigation, and renewable energy sectors.
              </p>
              <p className="text-[#475569] leading-relaxed mb-8">
                Today, HAGEC stands as a trusted engineering consultancy in the Somali Region,
                with a portfolio spanning over <strong>3,000 hectares</strong> of irrigated land,
                <strong> 15+ completed projects</strong>, and a growing team of <strong>25 multidisciplinary staff</strong> — with an uncompromising commitment to technical excellence and community development.
              </p>

              {/* Registration info */}
              <div className="bg-[#F8FAFC] rounded-xl border border-[#E2E8F0] p-5 mb-8 text-[13px] text-[#475569] space-y-1.5">
                <div className="font-700 text-[#0A2540] text-[12px] uppercase tracking-wider mb-2" style={{ fontWeight: 700 }}>Company Registration</div>
                <div><span className="text-[#64748B]">Reg. No.:</span> SM/ST/6/0012332/2015</div>
                <div><span className="text-[#64748B]">TIN:</span> 0084048018</div>
                <div><span className="text-[#64748B]">Business License No.:</span> SM/ST/05/187799/4554505/2015</div>
                <div><span className="text-[#64748B]">Established:</span> July 2023 · Jigjiga, Somali Region, Ethiopia</div>
              </div>

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

      {/* ── Mission & Vision ──────────────────────────────────── */}
      <section className="section-padding bg-[#F8FAFC]" aria-label="Mission and vision">
        <div className="container-custom">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="section-label">Our Purpose</span>
            <h2 className="section-title">Mission & Vision</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-white rounded-2xl p-10 border border-[#E2E8F0] shadow-lg h-full flex flex-col">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ background: "#EFF6FF", color: "#0066CC" }}
              >
                <Target size={24} />
              </div>
              <h3 className="text-[20px] font-700 text-[#0A2540] mb-4" style={{ fontWeight: 700 }}>
                Our Mission
              </h3>
              <p className="text-[#475569] leading-relaxed text-[15px]">
                To provide world-class, technically rigorous engineering and geology consultancy
                services tailored to the unique challenges of Ethiopia and the Horn of Africa —
                creating lasting impact for communities, governments, and the environment through
                innovative, sustainable, and client-centered solutions.
              </p>
            </div>
            {/* Vision */}
            <div className="bg-white rounded-2xl p-10 border border-[#E2E8F0] shadow-lg h-full flex flex-col">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ background: "#FFF7ED", color: "#FF6600" }}
              >
                <MapPin size={24} />
              </div>
              <h3 className="text-[20px] font-700 text-[#0A2540] mb-4" style={{ fontWeight: 700 }}>
                Our Vision
              </h3>
              <p className="text-[#475569] leading-relaxed text-[15px]">
                To be the <strong>leading engineering and geology consulting firm in the Horn of
                  Africa</strong>, recognized for our innovation, technical excellence, and
                unwavering commitment to sustainable development and community prosperity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Core Values ──────────────────────────────────────── */}
      <section className="section-padding bg-white" aria-label="Our core values">
        <div className="container-custom">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="section-label">What Drives Us</span>
            <h2 className="section-title">Our 8 Core Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div
                key={i}
                className="bg-[#F8FAFC] rounded-2xl p-7 border border-[#E2E8F0] card-hover shadow-lg hover:shadow-xl h-full"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{
                    background: i % 2 === 0 ? "#EFF6FF" : "#FFF7ED",
                    color: i % 2 === 0 ? "#0066CC" : "#FF6600",
                  }}
                >
                  {v.icon}
                </div>
                <h3 className="text-[15px] font-700 text-[#0A2540] mb-2" style={{ fontWeight: 700 }}>
                  {v.title}
                </h3>
                <p className="text-[#64748B] text-[13.5px] leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Expertise & Milestones ────────────────────────────── */}
      <section className="section-padding bg-[#F8FAFC]" aria-label="Areas of expertise">
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
                          className="w-10 h-10 rounded-full flex items-center justify-center text-[9px] font-700 text-white z-10 relative text-center leading-tight"
                          style={{ background: i % 2 === 0 ? "#0066CC" : "#FF6600", fontWeight: 700 }}
                        >
                          {m.year.slice(-2)}
                        </div>
                      </div>
                      <div className="pb-4">
                        <div className="text-[13px] font-700 text-[#0066CC] mb-0.5" style={{ fontWeight: 700 }}>
                          {m.year}
                        </div>
                        <div className="text-[14px] text-[#475569]">{m.event}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Technical Software & Equipment ───────────────────── */}
      <section className="section-padding bg-white" aria-label="Technical software and equipment">
        <div className="container-custom">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="section-label">Our Toolkit</span>
            <h2 className="section-title">Technical Software & Equipment</h2>
            <p className="section-subtitle mt-3">
              HAGEC uses industry-standard engineering software to deliver accurate, reliable, and
              internationally recognized outputs.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {software.map((sw, i) => (
              <div
                key={i}
                className="bg-[#F8FAFC] rounded-xl border border-[#E2E8F0] p-6 flex flex-col items-center text-center card-hover shadow hover:shadow-lg"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
                  style={{ background: i % 2 === 0 ? "#EFF6FF" : "#FFF7ED", color: i % 2 === 0 ? "#0066CC" : "#FF6600" }}
                >
                  <Monitor size={20} />
                </div>
                <div className="text-[15px] font-700 text-[#0A2540] mb-1" style={{ fontWeight: 700 }}>
                  {sw.name}
                </div>
                <div className="text-[12px] text-[#94A3B8]">{sw.category}</div>
              </div>
            ))}
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
