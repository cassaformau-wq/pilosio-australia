import { useState } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    product: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await fetch("https://formspree.io/f/xwvrwgwp", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(form),
    });
    setLoading(false);
    if (res.ok) setSent(true);
  };

  return (
    <div>
      {/* Header */}
      <div className="bg-[#0d2b4e] text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-white/50 text-sm mb-2">
            <Link to={createPageUrl("Home")} className="hover:text-white">Home</Link> / Contact
          </div>
          <h1 className="text-3xl md:text-5xl font-black uppercase tracking-wide">Contact Us</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Contact Info */}
        <div className="lg:col-span-1 space-y-8">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/699f868e9f3fb5159e286770/23f60a455_image.png" alt="P" className="h-8 w-auto" />
              <h2 className="text-[#0d2b4e] text-xl font-black uppercase tracking-wide">Get In Touch</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Our Australian team is ready to help with product enquiries, technical support, quotes, and project planning.
            </p>
          </div>

          <div className="space-y-5">
            {[
              { icon: Phone, label: "Phone", value: "1300 745 674" },
              { icon: Mail, label: "Email", value: "contact@pilosio.com.au" },
              { icon: MapPin, label: "Office", value: "9 Barclay Rd, Derrimut VIC 3026" },
              { icon: Clock, label: "Hours", value: "Mon–Fri, 8am – 5pm AEST" },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-start gap-4">
                <div className="bg-[#e31e24] p-2.5 flex-shrink-0">
                  <Icon className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider font-semibold">{label}</div>
                  <div className="text-[#0d2b4e] font-semibold">{value}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-[#f5f7fa] p-6 border-l-4 border-[#e31e24]">
            <h3 className="text-[#0d2b4e] font-black uppercase text-sm tracking-wide mb-2">Products We Supply</h3>
            <ul className="text-gray-600 text-sm space-y-1">
              <li>• Scaffolding Systems</li>
              <li>• Formwork Solutions</li>
              <li>• Suspended Structures</li>
              <li>• Site Protections</li>
              <li>• Event Structures</li>
            </ul>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2">
          {sent ? (
            <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center">
              <CheckCircle className="w-16 h-16 text-[#e31e24] mb-6" />
              <h2 className="text-2xl font-black uppercase tracking-wide text-[#0d2b4e] mb-3">Enquiry Sent!</h2>
              <p className="text-gray-600 max-w-md">
                Thank you for reaching out. Our Australian team will get back to you within 1–2 business days.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <h2 className="text-[#0d2b4e] text-xl font-black uppercase tracking-wide mb-6">Send an Enquiry</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">
                    Full Name *
                  </label>
                  <input
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-[#e31e24] text-sm"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">
                    Email *
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-[#e31e24] text-sm"
                    placeholder="john@company.com.au"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">
                    Phone
                  </label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-[#e31e24] text-sm"
                    placeholder="04XX XXX XXX"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">
                    Company
                  </label>
                  <input
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-[#e31e24] text-sm"
                    placeholder="Your Company Pty Ltd"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">
                  Product of Interest
                </label>
                <select
                  name="product"
                  value={form.product}
                  onChange={handleChange}
                  className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-[#e31e24] text-sm bg-white"
                >
                  <option value="">Select a product category...</option>
                  <option value="Scaffolding">Scaffolding</option>
                  <option value="Formwork">Formwork</option>
                  <option value="Suspended Structures">Suspended Structures</option>
                  <option value="Site Protections">Site Protections</option>
                  <option value="Event Structures">Event Structures</option>
                  <option value="General Enquiry">General Enquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">
                  Message *
                </label>
                <textarea
                  name="message"
                  required
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-[#e31e24] text-sm resize-none"
                  placeholder="Tell us about your project or product requirements..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#e31e24] text-white py-4 font-black uppercase tracking-widest hover:bg-[#c01a1f] transition-colors disabled:opacity-60"
              >
                {loading ? "Sending..." : "Send Enquiry"}
              </button>

              <p className="text-xs text-gray-400 text-center">
                We respond within 1–2 business days (AEST)
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}