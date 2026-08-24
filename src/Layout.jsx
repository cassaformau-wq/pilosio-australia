import { useState } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Menu, X, Phone, Search } from "lucide-react";

export default function Layout({ children, currentPageName }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", page: "Home" },
    { label: "About Us", page: "About" },
    { label: "Products", page: "Products" },
    { label: "Contact", page: "Contact" },
  ];

  const certifications = [
    "AS/NZS Standards",
    "EN 12810 / EN 12811",
    "IGQ-SQ Quality Mark",
    "90% In-house Manufacturing",
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700;800&display=swap');
        body { font-family: 'Barlow', sans-serif; }
        :root {
          --pilosio-blue: #023569;
        }
      `}</style>

      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16 md:h-20">
          {/* Hamburger */}
          <button
            className="flex items-center gap-2 text-[#023569] font-semibold tracking-widest uppercase text-sm"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            <span className="hidden sm:inline">Menu</span>
          </button>

          {/* Logo */}
          <Link to={createPageUrl("Home")} className="flex items-center gap-3 group">
            <img
              src="https://base44.app/api/apps/699f868e9f3fb5159e286770/files/mp/public/699f868e9f3fb5159e286770/ec2792553_PILOSIO-AU.png"
              alt="Pilosio Australia"
              className="h-12 md:h-14 w-auto object-contain"
            />
            <img
              src="https://base44.app/api/apps/699f868e9f3fb5159e286770/files/mp/public/699f868e9f3fb5159e286770/7ec8ebba8_60.png"
              alt="60+ Years"
              className="h-10 md:h-12 w-auto object-contain hidden sm:block"
            />
          </Link>

          {/* Right */}
          <div className="flex items-center gap-4 md:gap-6">
            <Link
              to={createPageUrl("Contact")}
              className="hidden sm:flex items-center gap-2 text-[#023569] font-semibold uppercase tracking-widest text-sm hover:text-[#012a52] transition-colors"
            >
              <Phone className="w-4 h-4" />
              Contact
            </Link>
            <Search className="w-5 h-5 text-[#023569] cursor-pointer hidden sm:block" />
          </div>
        </div>

        {/* Dropdown Nav */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-[#023569] z-50 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.page}
                  to={createPageUrl(link.page)}
                  onClick={() => setMenuOpen(false)}
                  className={`text-xl font-bold uppercase tracking-wider py-2 border-b border-white/10 transition-colors ${
                    currentPageName === link.page ? "text-white" : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Page Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-[#023569] text-white mt-auto">
        <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <img
                src="https://base44.app/api/apps/699f868e9f3fb5159e286770/files/mp/public/699f868e9f3fb5159e286770/0cd0cfb30_p-rossa.png"
                alt="Pilosio"
                className="h-14 w-auto object-contain"
              />
              <img
                src="https://base44.app/api/apps/699f868e9f3fb5159e286770/files/mp/public/699f868e9f3fb5159e286770/97e35d78c_60bianco.png"
                alt="60+ Years"
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Over 60 years of Italian engineering excellence, now serving the Australian construction industry.
            </p>
          </div>
          <div>
            <h4 className="font-bold uppercase tracking-wider mb-4 text-sm">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((l) => (
                <li key={l.page}>
                  <Link to={createPageUrl(l.page)} className="text-white/70 hover:text-white transition-colors text-sm">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold uppercase tracking-wider mb-4 text-sm">Contact Us</h4>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>📞 1300 745 674</li>
              <li>✉️ contact@pilosio.com.au</li>
              <li>📍 9 Barclay Rd, Derrimut VIC 3026</li>
            </ul>
            <div className="mt-4 pt-4 border-t border-white/10">
              <p className="text-white/40 text-xs mb-1">Formwork solutions by</p>
              <a href="https://cassaform.com.au" target="_blank" rel="noopener noreferrer" className="text-white font-bold hover:text-white/80 transition-colors text-sm">
                Cassaform ↗
              </a>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex items-center gap-3 mb-4">
              <img src="https://base44.app/api/apps/699f868e9f3fb5159e286770/files/mp/public/699f868e9f3fb5159e286770/0cd0cfb30_p-rossa.png" alt="P" className="h-6 w-auto" />
              <h4 className="font-bold uppercase tracking-wider text-sm">Product Certifications</h4>
            </div>
            <div className="flex flex-wrap gap-3">
              {certifications.map((c) => (
                <span key={c} className="border border-white/30 text-white/80 text-xs font-semibold uppercase tracking-wider px-3 py-2">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 text-center py-4 text-white/40 text-xs">
          © {new Date().getFullYear()} Pilosio Australia. All rights reserved.
        </div>
      </footer>
    </div>
  );
}