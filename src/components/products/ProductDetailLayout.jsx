import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ChevronRight, CheckCircle, ArrowUpRight } from "lucide-react";

export default function ProductDetailLayout({
  breadcrumb,       // [{label, page}]  last item is current page (no link)
  category,
  title,
  subtitle,
  heroImg,
  characteristics,  // string[]
  advantages,       // string[]
  technicalData,    // string[]
  applications,     // string[]
  highlight,        // optional badge text
  relatedProducts,  // [{name, page}]
  pilosioUrl,       // link to original pilosio.com page for reference
}) {
  return (
    <div>
      {/* Header */}
      <div className="bg-[#0d2b4e] text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-white/50 text-sm mb-3 flex flex-wrap items-center gap-1">
            <Link to={createPageUrl("Home")} className="hover:text-white">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to={createPageUrl("Products")} className="hover:text-white">Products</Link>
            {breadcrumb?.map((b) => (
              <span key={b.label} className="flex items-center gap-1">
                <ChevronRight className="w-3 h-3" />
                {b.page
                  ? <Link to={createPageUrl(b.page)} className="hover:text-white">{b.label}</Link>
                  : <span className="text-white/80">{b.label}</span>
                }
              </span>
            ))}
          </div>
          <div className="text-[#e31e24] text-xs font-bold uppercase tracking-widest mb-2">{category}</div>
          <h1 className="text-3xl md:text-5xl font-black uppercase tracking-wide">{title}</h1>
          {subtitle && <p className="text-white/70 mt-3 text-lg max-w-2xl">{subtitle}</p>}
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative h-64 md:h-96 overflow-hidden">
        <img src={heroImg} alt={title} className="w-full h-full object-cover" />
        {highlight && (
          <div className="absolute top-6 left-6 bg-[#e31e24] text-white text-sm font-bold px-4 py-2 uppercase tracking-wider">
            {highlight}
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Left Main Content */}
          <div className="lg:col-span-2 space-y-12">

            {/* Characteristics */}
            {characteristics?.length > 0 && (
              <div>
                <h2 className="text-[#0d2b4e] text-2xl font-black uppercase tracking-wide mb-6 flex items-center gap-3">
                  <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/699f868e9f3fb5159e286770/23f60a455_image.png" alt="P" className="h-7 w-auto" /> Characteristics
                </h2>
                <ul className="space-y-3">
                  {characteristics.map((c, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-600 leading-relaxed">
                      <CheckCircle className="w-5 h-5 text-[#e31e24] flex-shrink-0 mt-0.5" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Advantages */}
            {advantages?.length > 0 && (
              <div>
                <h2 className="text-[#0d2b4e] text-2xl font-black uppercase tracking-wide mb-6 flex items-center gap-3">
                  <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/699f868e9f3fb5159e286770/23f60a455_image.png" alt="P" className="h-7 w-auto" /> Advantages
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {advantages.map((a, i) => (
                    <div key={i} className="border-l-4 border-[#e31e24] pl-4 py-2 bg-[#f5f7fa]">
                      <p className="text-gray-700 text-sm leading-relaxed">{a}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Applications */}
            {applications?.length > 0 && (
              <div>
                <h2 className="text-[#0d2b4e] text-2xl font-black uppercase tracking-wide mb-6 flex items-center gap-3">
                  <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/699f868e9f3fb5159e286770/23f60a455_image.png" alt="P" className="h-7 w-auto" /> Applications
                </h2>
                <div className="flex flex-wrap gap-2">
                  {applications.map((a, i) => (
                    <span key={i} className="border border-[#0d2b4e] text-[#0d2b4e] text-xs font-bold uppercase tracking-wider px-3 py-2">
                      {a}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Sidebar */}
          <div className="space-y-8">

            {/* Technical Data */}
            {technicalData?.length > 0 && (
              <div className="bg-[#0d2b4e] text-white p-6">
                <h3 className="font-black uppercase tracking-wide text-sm mb-5 text-[#e31e24]">Technical Data</h3>
                <ul className="space-y-3">
                  {technicalData.map((t, i) => (
                    <li key={i} className="text-white/80 text-sm leading-relaxed border-b border-white/10 pb-3 last:border-0 last:pb-0">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* CTA */}
            <div className="bg-[#f5f7fa] p-6 border-l-4 border-[#e31e24]">
              <h3 className="font-black uppercase tracking-wide text-sm text-[#0d2b4e] mb-2">Request a Quote</h3>
              <p className="text-gray-500 text-sm mb-4">Get in touch with our Australian team for pricing and availability.</p>
              <Link
                to={createPageUrl("Contact")}
                className="flex items-center gap-2 bg-[#e31e24] text-white px-5 py-3 font-bold uppercase tracking-wider text-sm hover:bg-[#c01a1f] transition-colors"
              >
                Enquire Now <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Related Products */}
            {relatedProducts?.length > 0 && (
              <div>
                <h3 className="font-black uppercase tracking-wide text-sm text-[#0d2b4e] mb-4">Related Products</h3>
                <ul className="space-y-2">
                  {relatedProducts.map((r) => (
                    <li key={r.page}>
                      <Link
                        to={createPageUrl(r.page)}
                        className="flex items-center justify-between border border-gray-200 hover:border-[#e31e24] p-3 group transition-colors"
                      >
                        <span className="text-[#0d2b4e] text-sm font-semibold group-hover:text-[#e31e24] transition-colors">{r.name}</span>
                        <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-[#e31e24]" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <section className="bg-[#0d2b4e] text-white py-12 text-center px-4">
        <h2 className="text-xl md:text-3xl font-black uppercase tracking-wide mb-4">Interested in {title}?</h2>
        <p className="text-white/70 mb-8 max-w-xl mx-auto">
          Our Australian team is ready to assist with technical questions, pricing, and project planning.
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