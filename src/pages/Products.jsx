import { useState } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ChevronRight } from "lucide-react";

const categories = ["All", "Scaffolding", "Suspended Structures"];

const products = [
  {
    name: "Multidirectional Scaffolding",
    category: "Scaffolding",
    desc: "Extremely flexible and modular system suitable for multiple applications, ensuring fast and safe assembly thanks to wedge connections and rosettes welded every 50cm.",
    img: "https://images.unsplash.com/photo-1590859808308-3d2d9c515b1a?w=600&q=80",
    highlight: "Most Popular",
    page: "ProductMultidirectional",
  },
  {
    name: "Frame Scaffolding (Socket)",
    category: "Scaffolding",
    desc: "Socket-frame scaffolding system offering a robust support structure for construction and maintenance work, ensuring safety and stability.",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
    page: "ProductFrameSocket",
  },
  {
    name: "Frame Scaffolding (Pin)",
    category: "Scaffolding",
    desc: "Steel frame scaffolding, easy and fast to assemble, ideal for facade work. Pins welded on the frames simplify assembly without special tools.",
    img: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80",
    page: "ProductFramePin",
  },
  {
    name: "Aluminium Scaffolding",
    category: "Scaffolding",
    desc: "Flash 2.2.1 — innovative aluminium frame scaffolding where assembly and disassembly must be fast, simple, and safe.",
    img: "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=600&q=80",
    highlight: "New",
    page: "ProductAluminiumScaffolding",
  },
  {
    name: "Tube & Coupler",
    category: "Scaffolding",
    desc: "Traditional scaffolding system that allows high flexibility and adaptability, suitable for complex configurations and variable work environments.",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
    page: "ProductTubeCoupler",
  },
  {
    name: "Mobile Towers",
    category: "Scaffolding",
    desc: "Mobile and lightweight structures, easy to assemble and disassemble, used for low-height indoor or outdoor work.",
    img: "https://images.unsplash.com/photo-1590859808308-3d2d9c515b1a?w=600&q=80",
    page: "ProductMobileTowers",
  },
  {
    name: "Electric Scaffolding",
    category: "Scaffolding",
    desc: "Motorised scaffolding solutions for increased productivity and safety on large-scale projects.",
    img: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80",
    page: null,
  },
  {
    name: "Service Stairs",
    category: "Scaffolding",
    desc: "Safe and compliant stair access systems integrated with scaffolding structures for efficient site access.",
    img: "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=600&q=80",
    page: null,
  },
  {
    name: "Suspended Structures",
    category: "Suspended Structures",
    desc: "Innovative suspended access and working platforms for maintenance, renovation, and event applications.",
    img: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80",
    highlight: "Innovative",
    page: "ProductSuspended",
  },
  {
    name: "Flydeck System",
    category: "Suspended Structures",
    desc: "Revolutionary patented intrados floor system that simplifies and makes it safer to set up suspended structures.",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
    highlight: "Patented",
    page: "ProductFlydeck",
  },
  {
    name: "IXI Aluminium Truss",
    category: "Suspended Structures",
    desc: "Innovative aluminium truss beam offering exceptional strength-to-weight ratio for spanning large distances.",
    img: "https://images.unsplash.com/photo-1590859808308-3d2d9c515b1a?w=600&q=80",
    page: "ProductIXITruss",
  },
  {
    name: "Event Structures",
    category: "Suspended Structures",
    desc: "Specialised temporary structures for concerts, exhibitions, and large-scale events, meeting Australian safety standards.",
    img: "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=600&q=80",
    page: "ProductEventStructures",
  },
];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? products
    : products.filter((p) => p.category === activeCategory);

  return (
    <div>
      {/* Header */}
      <div className="bg-[#0d2b4e] text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-white/50 text-sm mb-2">
            <Link to={createPageUrl("Home")} className="hover:text-white">Home</Link> / Products
          </div>
          <h1 className="text-3xl md:text-5xl font-black uppercase tracking-wide">Our Products</h1>
        </div>
      </div>

      {/* Intro */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-gray-600 max-w-2xl leading-relaxed">
            Explore Pilosio Australia's scaffolding and suspended structure solutions — 
            engineered in Italy and certified to Australian standards for safety, efficiency, and ease of assembly.
          </p>
          {/* Formwork redirect banner */}
          <a
            href="https://cassaform.com.au"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 flex items-center gap-4 border-2 border-[#0d2b4e] px-5 py-3 hover:bg-[#0d2b4e] group transition-colors"
          >
            <div className="flex flex-col">
              <span className="text-xs text-gray-400 uppercase tracking-wider group-hover:text-white/60 transition-colors">Looking for Formwork?</span>
              <span className="text-[#0d2b4e] font-black text-lg tracking-tight group-hover:text-white transition-colors">Cassaform ↗</span>
              <span className="text-xs text-gray-400 group-hover:text-white/60 transition-colors">cassaform.com.au</span>
            </div>
          </a>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="bg-[#f5f7fa] border-b border-gray-200 sticky top-[80px] z-30">
        <div className="max-w-7xl mx-auto px-4 flex gap-0 overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-4 font-bold uppercase tracking-wider text-sm whitespace-nowrap border-b-2 transition-colors ${
                activeCategory === cat
                  ? "border-[#e31e24] text-[#e31e24] bg-white"
                  : "border-transparent text-gray-500 hover:text-[#0d2b4e]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((product) => {
            const cardInner = (
              <>
                <div className="relative overflow-hidden h-44">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {product.highlight && (
                    <div className="absolute top-3 left-3 bg-[#e31e24] text-white text-xs font-bold px-2 py-1 uppercase tracking-wider">
                      {product.highlight}
                    </div>
                  )}
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="text-xs text-[#e31e24] font-bold uppercase tracking-wider mb-1">{product.category}</div>
                  <h3 className="text-[#0d2b4e] font-black uppercase tracking-wide text-sm mb-2">{product.name}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed flex-1">{product.desc}</p>
                  <div className="mt-4 flex items-center gap-1 text-[#e31e24] text-xs font-bold uppercase tracking-wider group-hover:gap-2 transition-all">
                    {product.page ? "Discover More" : "Enquire Now"} <ChevronRight className="w-3 h-3" />
                  </div>
                </div>
              </>
            );
            return product.page ? (
              <Link
                key={product.name}
                to={createPageUrl(product.page)}
                className="group border border-gray-200 hover:border-[#e31e24] hover:shadow-lg transition-all overflow-hidden bg-white flex flex-col"
              >
                {cardInner}
              </Link>
            ) : (
              <Link
                key={product.name}
                to={createPageUrl("Contact")}
                className="group border border-gray-200 hover:border-[#e31e24] hover:shadow-lg transition-all overflow-hidden bg-white flex flex-col"
              >
                {cardInner}
              </Link>
            );
          })}
        </div>
      </div>

      {/* Certifications */}
      <section className="bg-[#0d2b4e] text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/699f868e9f3fb5159e286770/23f60a455_image.png" alt="P" className="h-8 w-auto" />
            <h2 className="text-white text-xl md:text-2xl font-black uppercase tracking-wide">Certifications & Standards</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Australian Standards", desc: "All products comply with relevant Australian Standards (AS/NZS) for scaffolding and formwork safety." },
              { title: "European Certifications", desc: "Pilosio products are certified to EN 12810, EN 12811 and hold the European Quality Mark IGQ-SQ." },
              { title: "Quality Manufacturing", desc: "90% of components are manufactured in-house at Pilosio's 45,000m² facility in Udine, Italy." },
            ].map((c) => (
              <div key={c.title} className="border border-white/20 p-6">
                <h3 className="font-black uppercase tracking-wide text-sm mb-3 text-[#e31e24]">{c.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}