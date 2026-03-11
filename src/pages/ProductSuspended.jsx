import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ChevronRight, ArrowUpRight } from "lucide-react";

const systems = [
  {
    name: "Flydeck System",
    code: "FLYDECK",
    desc: "Patented and certified soffit plane for bridge and suspended structure maintenance. Dramatically reduces set-up time and improves worker safety.",
    highlight: "Patented",
    page: "ProductFlydeck",
    img: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80",
  },
  {
    name: "IXI Aluminium Truss",
    code: "IXI Truss",
    desc: "Groundbreaking modular aluminium beam — 5× lighter than steel, ringlock compatible, and suitable for bridges, large-span roofs, and elevated platforms.",
    highlight: "Innovative",
    page: "ProductIXITruss",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
  },
  {
    name: "Event Structures",
    code: "Events",
    desc: "Specialised temporary structures for concerts, exhibitions, and large-scale events. Engineered to meet Australian safety standards.",
    page: "ProductEventStructures",
    img: "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=600&q=80",
  },
];

export default function ProductSuspended() {
  return (
    <div>
      {/* Header */}
      <div className="bg-[#0d2b4e] text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-white/50 text-sm mb-2">
            <Link to={createPageUrl("Home")} className="hover:text-white">Home</Link>
            <span className="mx-1">/</span>
            <Link to={createPageUrl("Products")} className="hover:text-white">Products</Link>
            <span className="mx-1">/</span>
            <span className="text-white/80">Suspended Structures</span>
          </div>
          <div className="text-[#e31e24] text-xs font-bold uppercase tracking-widest mb-2">Suspended Structures</div>
          <h1 className="text-3xl md:text-5xl font-black uppercase tracking-wide">Suspended Systems</h1>
          <p className="text-white/70 mt-3 text-lg max-w-2xl">
            Innovative suspended access and working platform solutions for maintenance, construction, and events — engineered in Italy, built for Australia.
          </p>
        </div>
      </div>

      {/* Hero */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1400&q=80"
          alt="Suspended Structures"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      {/* Systems Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex items-center gap-3 mb-10">
          <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/699f868e9f3fb5159e286770/23f60a455_image.png" alt="P" className="h-8 w-auto" />
          <h2 className="text-[#0d2b4e] text-2xl font-black uppercase tracking-wide">Our Suspended Systems</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {systems.map((s) => (
            <Link
              key={s.page}
              to={createPageUrl(s.page)}
              className="group border border-gray-200 hover:border-[#e31e24] hover:shadow-lg transition-all overflow-hidden bg-white flex flex-col"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={s.img}
                  alt={s.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {s.highlight && (
                  <div className="absolute top-3 left-3 bg-[#e31e24] text-white text-xs font-bold px-2 py-1 uppercase tracking-wider">
                    {s.highlight}
                  </div>
                )}
              </div>
              <div className="p-5 flex flex-col flex-1">
                <div className="text-xs text-[#e31e24] font-bold uppercase tracking-wider mb-1">{s.code}</div>
                <h3 className="text-[#0d2b4e] font-black uppercase tracking-wide text-sm mb-2">{s.name}</h3>
                <p className="text-gray-500 text-xs leading-relaxed flex-1">{s.desc}</p>
                <div className="mt-4 flex items-center gap-1 text-[#e31e24] text-xs font-bold uppercase tracking-wider group-hover:gap-2 transition-all">
                  Discover More <ChevronRight className="w-3 h-3" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* CTA */}
      <section className="bg-[#0d2b4e] text-white py-12 text-center px-4">
        <h2 className="text-xl md:text-3xl font-black uppercase tracking-wide mb-4">Need a Suspended Structure Solution?</h2>
        <p className="text-white/70 mb-8 max-w-xl mx-auto">
          Our Australian team can advise on the right system for your bridge, maintenance, or event project.
        </p>
        <Link
          to={createPageUrl("Contact")}
          className="inline-flex items-center gap-2 bg-[#e31e24] text-white px-8 py-4 font-bold uppercase tracking-wider hover:bg-[#c01a1f] transition-colors"
        >
          Contact Us <ArrowUpRight className="w-5 h-5" />
        </Link>
      </section>
    </div>
  );
}