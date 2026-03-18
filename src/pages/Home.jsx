import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowUpRight, ChevronRight } from "lucide-react";

const heroTiles = [
  {
    title: "Discover the Flydeck System",
    subtitle: "Innovative suspended platform solution",
    img: "https://pilosio.com/wp-content/uploads/2022/08/FLYDECK-cover.jpg",
    page: "ProductFlydeck",
  },
  {
    title: "IXI Truss: Innovative Aluminium Beam",
    subtitle: "Precision engineered for demanding projects",
    img: "https://pilosio.com/wp-content/uploads/2025/07/IXI-Truss-cover.jpg",
    page: "ProductIXITruss",
  },
  {
    title: "Multidirectional Scaffolding",
    subtitle: "Maximum flexibility for any structure",
    img: "https://pilosio.com/wp-content/uploads/2022/08/MP83-cover.jpg",
    page: "ProductMultidirectional",
  },
  {
    title: "Flash 2.2.1 Aluminium Scaffolding",
    subtitle: "Already revolutionary",
    img: "https://pilosio.com/wp-content/uploads/2022/09/221-cover.jpg",
    page: "ProductAluminiumScaffolding",
  },
];

const categories = [
  {
    label: "Scaffolding",
    img: "https://pilosio.com/wp-content/uploads/2022/08/MP83-cover.jpg",
    href: null,
    page: "Products",
  },
  {
    label: "Formwork",
    img: "https://pilosio.com/wp-content/uploads/2022/08/PE105180-cover.jpg",
    href: "https://cassaform.com.au",
    page: null,
    logo: "Cassaform",
    external: true,
  },
  {
    label: "Suspended Structures",
    img: "https://pilosio.com/wp-content/uploads/2022/08/FLYDECK-cover.jpg",
    href: null,
    page: "Products",
  },
];

const products = [
  { name: "Multidirectional Scaffolding", page: "ProductMultidirectional" },
  { name: "Frame Scaffolding (Socket)", page: "ProductFrameSocket" },
  { name: "Frame Scaffolding (Pin)", page: "ProductFramePin" },
  { name: "Aluminium Scaffolding", page: "ProductAluminiumScaffolding" },
  { name: "Tube & Coupler", page: "ProductTubeCoupler" },
  { name: "Mobile Towers", page: "ProductMobileTowers" },
  { name: "Flydeck System", page: "ProductFlydeck" },
  { name: "IXI Aluminium Truss", page: "ProductIXITruss" },
  { name: "Suspended Structures", page: "ProductSuspended" },
  { name: "Event Structures", page: "ProductEventStructures" },
];

export default function Home() {
  return (
    <div>
      {/* Hero Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-0">
        {/* Left big brand panel */}
        <div className="relative bg-[#0d2b4e] flex items-center justify-center min-h-[340px] md:min-h-[560px] overflow-hidden">
          <img
            src="https://pilosio.com/wp-content/uploads/2022/08/MP83-cover.jpg"
            alt="scaffolding"
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />
          <div className="relative z-10 text-center px-8">
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/699f868e9f3fb5159e286770/2ebbde9a6_image.png"
              alt="Pilosio Australia"
              className="h-48 md:h-64 w-auto object-contain mx-auto mb-4"
            />
            <div className="text-white/60 text-sm tracking-[6px] uppercase mb-6">Australia</div>
          </div>
        </div>

        {/* Right 2x2 tiles */}
        <div className="grid grid-cols-2 grid-rows-2">
          {heroTiles.map((tile, i) => {
            const inner = (
              <>
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
              </>
            );
            return tile.page ? (
              <Link key={i} to={createPageUrl(tile.page)} className="relative overflow-hidden group cursor-pointer" style={{ minHeight: "200px" }}>
                {inner}
              </Link>
            ) : (
              <div key={i} className="relative overflow-hidden group cursor-pointer" style={{ minHeight: "200px" }}>
                {inner}
              </div>
            );
          })}
        </div>
      </section>

      {/* Category Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-0">
        {categories.map((cat) => {
          const inner = (
            <div className="relative group overflow-hidden" style={{ minHeight: "260px" }}>
              <img
                src={cat.img}
                alt={cat.label}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#0d2b4e]/60 group-hover:bg-[#0d2b4e]/70 transition-colors" />
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-8">
                {cat.external ? (
                  /* Cassaform logo for Formwork */
                  <div className="bg-white mb-3 shadow-lg overflow-hidden" style={{lineHeight: 0}}>
                    <img src="https://media.base44.com/images/public/699f868e9f3fb5159e286770/85e4234e5_LogoTaglinehighresMay2024.png" alt="Cassaform" className="h-20 w-auto block" style={{display: 'block'}} />
                  </div>
                ) : (
                  <div className="text-[#e31e24] text-3xl font-black italic mb-2">P</div>
                )}
                <span className="text-white font-black uppercase tracking-widest text-lg md:text-xl text-center px-4">
                  {cat.label}
                </span>
                {cat.external && (
                  <span className="text-white/70 text-xs mt-1 tracking-wider">cassaform.com.au ↗</span>
                )}
                <div className="mt-3 w-8 h-0.5 bg-[#e31e24]" />
              </div>
            </div>
          );
          return cat.external ? (
            <a key={cat.label} href={cat.href} target="_blank" rel="noopener noreferrer" className="block">
              {inner}
            </a>
          ) : (
            <Link key={cat.label} to={createPageUrl(cat.page)}>
              {inner}
            </Link>
          );
        })}
      </section>

      {/* Products Grid */}
      <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="flex items-start gap-4 mb-12">
          <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/699f868e9f3fb5159e286770/23f60a455_image.png" alt="P" className="h-10 w-auto" />
          <h2 className="text-[#0d2b4e] text-3xl md:text-4xl font-black uppercase tracking-wide">Our Products</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {products.map((p) => (
            <Link
              key={p.name}
              to={createPageUrl(p.page)}
              className="border border-gray-200 hover:border-[#e31e24] hover:bg-red-50 transition-all p-4 flex items-center justify-between group"
            >
              <span className="text-[#0d2b4e] text-sm font-semibold group-hover:text-[#e31e24] transition-colors">{p.name}</span>
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
              <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/699f868e9f3fb5159e286770/23f60a455_image.png" alt="P" className="h-8 w-auto" />
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
              src="https://pilosio.com/wp-content/uploads/2022/08/Quick-System-cover.jpg"
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