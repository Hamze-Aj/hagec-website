import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Mail, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the multidisciplinary team of engineers, geologists, and specialists at HAGEC delivering world-class engineering consultancy across the Horn of Africa.",
};

const team = [
  {
    name: "Eng. Ahmed Hassan",
    title: "Managing Director & Principal Irrigation Engineer",
    bio: "Over 18 years of experience in irrigation system design, hydraulic engineering, and water resources management. MSc in Hydraulic Engineering from Addis Ababa University. Led FAO and World Bank-funded irrigation projects across the Somali and Oromia Regions.",
    expertise: ["Irrigation Design", "Hydraulic Structures", "Project Management"],
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
  },
  {
    name: "Dr. Faisal Abdullahi",
    title: "Senior Geologist & Geotechnical Expert",
    bio: "PhD in Geology from Haramaya University with 15 years of field experience in geotechnical investigations, geological mapping, and dam foundation engineering across the Horn of Africa. Member of the Ethiopian Geologists Association.",
    expertise: ["Geotechnical Investigation", "Geological Mapping", "Foundation Engineering"],
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
  },
  {
    name: "Eng. Safia Mohamed",
    title: "Senior Hydrologist & Water Resources Engineer",
    bio: "MSc in Water Resources Engineering, 12 years specializing in hydrological analysis, groundwater assessment, and water balance modelling in arid and semi-arid environments. Technical lead for the Fafen Basin Hydrological Study.",
    expertise: ["Hydrology", "Groundwater", "Water Balance Modelling"],
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
  },
  {
    name: "Eng. Omar Yusuf",
    title: "Solar Energy & Renewable Systems Engineer",
    bio: "BSc Electrical Engineering with specialization in photovoltaic systems and off-grid energy solutions. 10 years designing and commissioning solar-pump systems for agricultural and municipal water supply in remote communities.",
    expertise: ["Solar PV Systems", "Pump Engineering", "Off-grid Power"],
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80",
  },
  {
    name: "Khadija Ibrahim",
    title: "GIS & Remote Sensing Specialist",
    bio: "MSc in Geographic Information Science. Expert in satellite image classification, digital elevation modelling, drone photogrammetry, and spatial analysis. Manages HAGEC's GIS laboratory and delivers spatial data services across all project disciplines.",
    expertise: ["GIS Analysis", "Remote Sensing", "Drone Surveying"],
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
  },
  {
    name: "Eng. Abdirahman Osman",
    title: "Environmental & Social Specialist",
    bio: "MSc in Environmental Management with 11 years of experience in environmental impact assessment, environmental monitoring, and community consultation for large-scale infrastructure projects in Ethiopia. Certified Ethiopian EPA lead assessor.",
    expertise: ["Environmental Impact Assessment", "ESMP", "Stakeholder Engagement"],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
  {
    name: "Eng. Haleemo Ali",
    title: "Resident Engineer & Construction Supervisor",
    bio: "15 years on-site experience supervising civil works, irrigation infrastructure, and earth dam construction. MSc in Civil Engineering. Skilled in contractor management, quality assurance, and progress reporting for World Bank and FAO-funded projects.",
    expertise: ["Construction Supervision", "Quality Assurance", "Contract Management"],
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
  },
  {
    name: "Muna Hassan",
    title: "Socio-Economic Analyst & Community Liaison",
    bio: "MA in Development Studies. Specializes in socio-economic baseline surveys, resettlement action planning, gender analysis, and community consultation for infrastructure and natural resource management projects.",
    expertise: ["Socio-economic Analysis", "RAP", "Community Engagement"],
    image: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=400&q=80",
  },
];

const disciplines = [
  { label: "Total Staff", count: "25" },
  { label: "Engineers", count: "12+" },
  { label: "Geologists", count: "4+" },
  { label: "GIS & Environmental", count: "5+" },
];

export default function TeamPage() {
  return (
    <>
      {/* ── Header ───────────────────────────────────────────── */}
      <section
        className="relative py-24 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0A2540 0%, #0066CC 100%)" }}
        aria-label="Team page header"
      >
        <div className="relative z-10 container-custom text-white text-center">
          <span className="section-label text-[#FF6600] block mb-3">The Experts</span>
          <h1
            className="text-[clamp(32px,5vw,58px)] font-900 leading-tight mb-5"
            style={{ fontWeight: 900, letterSpacing: "-0.025em" }}
          >
            Our Team
          </h1>
          <p className="text-white/75 text-[17px] max-w-2xl mx-auto leading-relaxed">
            A multidisciplinary team of <strong>25 certified engineers, geologists, hydrologists, and
              specialists</strong> led by Acting General Manager <strong>Abdihadi Haji Hussein</strong>,
            with deep roots in the Horn of Africa.
          </p>

          {/* Discipline stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-2xl mx-auto">
            {disciplines.map((d, i) => (
              <div key={i} className="text-center">
                <div className="text-[32px] font-900 text-white" style={{ fontWeight: 900 }}>
                  {d.count}
                </div>
                <div className="text-white/60 text-[13px]">{d.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team Grid ─────────────────────────────────────────── */}
      <section className="section-padding bg-[#F8FAFC]" aria-label="Team members">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl overflow-hidden border border-[#E2E8F0] card-hover group shadow-lg hover:shadow-xl h-full flex flex-col"
                id={`team-member-${i + 1}`}
              >
                {/* Photo */}
                <div className="relative h-[220px] overflow-hidden">
                  <Image
                    src={member.image}
                    alt={`${member.name} – ${member.title}`}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  {/* Hover social */}
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <a
                      href="#"
                      className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-[#0066CC] transition-colors"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <ExternalLink size={16} />
                    </a>
                    <a
                      href="#"
                      className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-[#FF6600] transition-colors"
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail size={16} />
                    </a>
                  </div>
                </div>

                {/* Info */}
                <div className="p-8 flex flex-col flex-1">
                  <h2
                    className="text-[15px] font-700 text-[#0A2540] leading-snug"
                    style={{ fontWeight: 700 }}
                  >
                    {member.name}
                  </h2>
                  <p className="text-[12.5px] text-[#FF6600] font-600 mt-0.5 mb-3 leading-snug" style={{ fontWeight: 600 }}>
                    {member.title}
                  </p>
                  <p className="text-[13px] text-[#64748B] leading-relaxed mb-4 line-clamp-3">
                    {member.bio}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {member.expertise.map((e) => (
                      <span
                        key={e}
                        className="text-[11px] bg-[#EFF6FF] text-[#0066CC] px-2.5 py-0.5 rounded-full font-500"
                      >
                        {e}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Join us ─────────────────────────────────────────── */}
      <section
        className="py-20"
        style={{ background: "linear-gradient(135deg, #0A2540, #0066CC)" }}
        aria-label="Join the team"
      >
        <div className="container-custom text-center">
          <h2 className="text-[clamp(26px,4vw,40px)] font-800 text-white mb-4" style={{ fontWeight: 800 }}>
            Join the HAGEC Team
          </h2>
          <p className="text-white/75 max-w-xl mx-auto text-[16px] mb-8">
            We are always looking for talented engineers, geologists, GIS specialists, and
            environmental scientists to join our growing team.
          </p>
          <Link href="/contact" className="btn-orange">
            Get In Touch
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
