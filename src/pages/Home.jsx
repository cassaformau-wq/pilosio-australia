import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowUpRight, ChevronRight } from "lucide-react";

const heroTiles = [
  {
    title: "Discover the Flydeck System",
    subtitle: "Innovative suspended platform solution",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
  },
  {
    title: "IXI Truss: Innovative Aluminium Beam",
    subtitle: "Precision engineered for demanding projects",
    img: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
  },
  {
    title: "Multidirectional Scaffolding",
    subtitle: "Maximum flexibility for any structure",
    img: "https://images.unsplash.com/photo-1590859808308-3d2d9c515b1a?w=800&q=80",
  },
  {
    title: "Flash 2.2.1 Aluminium Scaffolding",
    subtitle: "Already revolutionary",
    img: "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=800&q=80",
  },
];

const categories = [
  {
    label: "Scaffolding",
    img: "https://images.unsplash.com/photo-1590859808308-3d2d9c515b1a?w=600&q=80",
    page: "Products",
  },
  {
    label: "Formwork",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
    page: "Products",
  },
  {
    label: "Suspended Structures",
    img: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80",
    page: "Products",
  },
];

const products = [
  "Multidirectional Scaffolding",
  "Frame Scaffolding (Socket)",
  "Frame Scaffolding (Pin)",
  "Service Stairs",
  "Aluminium Scaffolding",
  "Suspended Structures",
  "Site Protections",
  "Tube & Coupler",
  "Roofing Systems",
  "Vertical Formwork",
  "Slab Formwork",
  "Shoring",
  "Special Formwork",
  "Mobile Scaffolding Trolley",
  "Event Structures",
  "Mobile Towers",
  "Trench Shielding",
  "Aluminium Beams",
  "Electric Scaffolding",
  "Transport Platform",
];

export default function Home() {
  return (
    <div>
      {/* Hero Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-0">
        {/* Left big brand panel */}
        <div className="relative bg-[#0d2b4e] flex items-center justify-center min-h-[340px] md:min-h-[560px] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=80"
            alt="scaffolding"
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />
          <div className="relative z-10 text-center px-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-[#e31e24] text-7xl md:text-9xl font-black italic leading-none">P</span>
            </div>
            <div className="text-white text-4xl md:text-6xl font-black uppercase tracking-widest leading-none mb-2">
              PILOSIO
            </div>
            <div className="text-white/60 text-sm tracking-widest uppercase mb-6">Australia</div>
            <div className="inline-block border border-[#e31e24] text-[#e31e24] px-5 py-2 text-xs tracking-widest uppercase font-bold">
              60+ Years Since 1961
            </div>
          </div>
        </div>

        {/* Right 2x2 tiles */}
        <div className="grid grid-cols-2 grid-rows-2">
          {heroTiles.map((tile, i) => (
            <div key={i} className="relative overflow-hidden group cursor-pointer" style={{ minHeight: "200px" }}>
              <img
                src={tile.img}
                alt={tile.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                <p className="text-white text-xs md:text-sm font-bold leading-tight">{tile.title}</p>
              </div>
              <div className="absolute top-3 right-3 bg-[#e31e24] rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="w-3 h-3 text-white" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Category Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-0">
        {categories.map((cat) => (
          <Link key={cat.label} to={createPageUrl(cat.page)} className="relative group overflow-hidden" style={{ minHeight: "260px" }}>
            <img
              src={cat.img}
              alt={cat.label}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[#0d2b4e]/60 group-hover:bg-[#0d2b4e]/70 transition-colors" />
            <div className="absolute inset-0 flex flex-col items-center justify-end pb-8">
              <div className="text-[#e31e24] text-3xl font-black italic mb-2">P</div>
              <span className="text-white font-black uppercase tracking-widest text-lg md:text-xl text-center px-4">
                {cat.label}
              </span>
              <div className="mt-3 w-8 h-0.5 bg-[#e31e24]" />
            </div>
          </Link>
        ))}
      </section>

      {/* Products Grid */}
      <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="flex items-start gap-4 mb-12">
          <span className="text-[#e31e24] text-5xl font-black italic leading-none">P</span>
          <h2 className="text-[#0d2b4e] text-3xl md:text-4xl font-black uppercase tracking-wide">Our Products</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {products.map((p) => (
            <Link
              key={p}
              to={createPageUrl("Products")}
              className="border border-gray-200 hover:border-[#e31e24] hover:bg-red-50 transition-all p-4 flex items-center justify-between group"
            >
              <span className="text-[#0d2b4e] text-sm font-semibold group-hover:text-[#e31e24] transition-colors">{p}</span>
              <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-[#e31e24] flex-shrink-0" />
            </Link>
          ))}
        </div>
      </section>

      {/* About Strip */}
      <section className="bg-[#f5f7fa] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[#e31e24] text-4xl font-black italic">P</span>
              <h2 className="text-[#0d2b4e] text-2xl md:text-3xl font-black uppercase tracking-wide">
                Italian Quality, Australian Service
              </h2>
            </div>
            <p className="text-gray-600 leading-relaxed mb-6">
              Pilosio Australia brings over 60 years of Italian engineering excellence to the Australian construction industry. 
              We supply scaffolding, formwork, and shielding systems for construction, maintenance, and events — built to meet Australian standards.
            </p>
            <Link
              to={createPageUrl("About")}
              className="inline-flex items-center gap-2 bg-[#e31e24] text-white px-6 py-3 font-bold uppercase tracking-wider text-sm hover:bg-[#c01a1f] transition-colors"
            >
              About Us <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1565008576549-57569a49371d?w=700&q=80"
              alt="construction site"
              className="w-full h-72 object-cover"
            />
            <div className="absolute -bottom-4 -left-4 bg-[#e31e24] text-white px-5 py-3">
              <div className="text-3xl font-black">60+</div>
              <div className="text-xs uppercase tracking-widest font-semibold">Years Since 1961</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-[#0d2b4e] text-white py-14 text-center px-4">
        <h2 className="text-2xl md:text-4xl font-black uppercase tracking-wide mb-4">
          Ready to Start Your Project?
        </h2>
        <p className="text-white/70 mb-8 max-w-xl mx-auto">
          Get in touch with our Australian team for product enquiries, technical support, and quotes.
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