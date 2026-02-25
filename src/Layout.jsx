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

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700;800&display=swap');
        body { font-family: 'Barlow', sans-serif; }
        :root {
          --pilosio-red: #e31e24;
          --pilosio-navy: #0d2b4e;
          --pilosio-blue: #1a3a6b;
        }
      `}</style>

      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16 md:h-20">
          {/* Hamburger */}
          <button
            className="flex items-center gap-2 text-[#0d2b4e] font-semibold tracking-widest uppercase text-sm"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            <span className="hidden sm:inline">Menu</span>
          </button>

          {/* Logo */}
          <Link to={createPageUrl("Home")} className="flex flex-col items-center">
            <img
              src="https://pilosio.com/wp-content/themes/theme-pilosio/build/svg/logo-pilosio.svg"
              alt="Pilosio Australia"
              className="h-10 md:h-12 object-contain"
            />
            <span className="text-[9px] md:text-[10px] tracking-widest text-[#0d2b4e] uppercase font-medium mt-0.5">
              Australia
            </span>
          </Link>

          {/* Right */}
          <div className="flex items-center gap-4 md:gap-6">
            <Link
              to={createPageUrl("Contact")}
              className="hidden sm:flex items-center gap-2 text-[#0d2b4e] font-semibold uppercase tracking-widest text-sm hover:text-[#e31e24] transition-colors"
            >
              <Phone className="w-4 h-4" />
              Contact
            </Link>
            <Search className="w-5 h-5 text-[#0d2b4e] cursor-pointer hidden sm:block" />
          </div>
        </div>

        {/* Dropdown Nav */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-[#0d2b4e] z-50 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.page}
                  to={createPageUrl(link.page)}
                  onClick={() => setMenuOpen(false)}
                  className={`text-white text-xl font-bold uppercase tracking-wider py-2 border-b border-white/10 hover:text-[#e31e24] transition-colors ${
                    currentPageName === link.page ? "text-[#e31e24]" : ""
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
      <footer className="bg-[#0d2b4e] text-white mt-auto">
        <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-1 mb-3">
              <span className="text-[#e31e24] text-2xl font-black italic">P</span>
              <span className="text-white font-black uppercase tracking-wider text-lg">PILOSIO</span>
            </div>
            <p className="text-xs uppercase tracking-widest text-white/60 mb-4">Scaffolding & Formwork Australia</p>
            <p className="text-white/70 text-sm leading-relaxed">
              Over 60 years of Italian engineering excellence, now serving the Australian construction industry.
            </p>
          </div>
          <div>
            <h4 className="font-bold uppercase tracking-wider mb-4 text-sm">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((l) => (
                <li key={l.page}>
                  <Link to={createPageUrl(l.page)} className="text-white/70 hover:text-[#e31e24] transition-colors text-sm">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold uppercase tracking-wider mb-4 text-sm">Contact Us</h4>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>📞 1800 PILOSIO</li>
              <li>✉️ info@pilosioaustralia.com.au</li>
              <li>📍 Sydney, NSW, Australia</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 text-center py-4 text-white/40 text-xs">
          © {new Date().getFullYear()} Pilosio Australia. All rights reserved.
        </div>
      </footer>
    </div>
  );
}