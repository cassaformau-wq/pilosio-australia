import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowUpRight } from "lucide-react";

const values = [
  {
    title: "Out-of-the-Box Innovation",
    desc: "Where others see limits, we see challenges. We tackle them with innovative design and highly qualified engineering expertise, focusing on practical solutions that meet the needs of scaffolders and builders.",
  },
  {
    title: "Simple Solutions",
    desc: "Easy and intuitive assembly, fast and safe forming operations — we consider solutions intelligent only when scaffolders and builders love to use them in their daily work.",
  },
  {
    title: "Italian Passion & Quality",
    desc: "Pilosio is synonymous with simple, solid solutions designed by highly qualified construction experts. Our passion drives us to pay close attention to the most relevant details of our products and services.",
  },
  {
    title: "Sustainability",
    desc: "The future is built on sustainability. As a long-term partner to scaffolders and builders, we share responsibility for the careful and sustainable use of local and global resources.",
  },
];

export default function About() {
  return (
    <div>
      {/* Page Header */}
      <div className="bg-[#0d2b4e] text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-white/50 text-sm mb-2">
            <Link to={createPageUrl("Home")} className="hover:text-white">Home</Link> / About Us
          </div>
          <h1 className="text-3xl md:text-5xl font-black uppercase tracking-wide">About Us</h1>
        </div>
      </div>

      {/* Intro */}
      <section className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            Pilosio is a historic Italian company founded in <strong>1961</strong> that produces scaffolding, formwork, and shielding systems 
            for construction and maintenance in the building, infrastructure, and events sectors.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Pilosio Australia is proud to bring this 60+ year legacy of quality and innovation to the Australian market. 
            With our local team and technical expertise, we deliver Italian-engineered products with Australian service and support.
          </p>
        </div>
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&q=80"
            alt="Pilosio history"
            className="w-full h-80 object-cover grayscale"
          />
          <div className="absolute -bottom-4 -right-4 bg-[#0d2b4e] text-white px-6 py-4">
            <div className="text-4xl font-black text-[#e31e24]">1961</div>
            <div className="text-xs uppercase tracking-widest font-semibold">Founded</div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#f5f7fa] py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-12">
            <span className="text-[#e31e24] text-4xl font-black italic">P</span>
            <h2 className="text-[#0d2b4e] text-2xl md:text-3xl font-black uppercase tracking-wide">Our Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((v) => (
              <div key={v.title} className="bg-white p-8 border-l-4 border-[#e31e24]">
                <h3 className="text-[#0d2b4e] font-black uppercase tracking-wide text-lg mb-3">{v.title}</h3>
                <p className="text-gray-600 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#0d2b4e] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { num: "60+", label: "Years of Experience" },
            { num: "45,000m²", label: "Production Facility" },
            { num: "90%", label: "In-house Manufacturing" },
            { num: "Global", label: "Reach & Standards" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-3xl md:text-4xl font-black text-[#e31e24] mb-2">{s.num}</div>
              <div className="text-white/70 text-sm uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Brand Evolution */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1565008576549-57569a49371d?w=700&q=80"
              alt="production"
              className="w-full h-72 object-cover"
            />
          </div>
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/699f868e9f3fb5159e286770/23f60a455_image.png" alt="P" className="h-8 w-auto" />
              <h2 className="text-[#0d2b4e] text-2xl font-black uppercase tracking-wide">A Brand in Evolution</h2>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">
              Following a significant recapitalisation, Pilosio has confirmed its commitment to providing a complete service 
              with maximum attention and customer care. Constantly pursuing perfection, it continues to uphold the values that 
              have always defined it: <strong>passion, quality, innovation</strong>, and attention to detail.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              A dedicated division has been created for the study of rack-and-pinion lifting systems, to integrate the current 
              offering with complementary equipment such as the innovative patented FLYDECK intrados floor system.
            </p>
            <Link
              to={createPageUrl("Contact")}
              className="inline-flex items-center gap-2 bg-[#e31e24] text-white px-6 py-3 font-bold uppercase tracking-wider text-sm hover:bg-[#c01a1f] transition-colors"
            >
              Get In Touch <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}