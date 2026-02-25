import ProductDetailLayout from "../components/products/ProductDetailLayout";

export default function ProductMobileTowers() {
  return (
    <ProductDetailLayout
      category="Scaffolding"
      title="Mobile Towers"
      subtitle="Lightweight, mobile aluminium towers for low-height indoor and outdoor work"
      heroImg="https://images.unsplash.com/photo-1590859808308-3d2d9c515b1a?w=1200&q=80"
      breadcrumb={[{ label: "Mobile Towers" }]}
      characteristics={[
        "Mobile and lightweight aluminium structures, easy to assemble and disassemble.",
        "Fitted with lockable castors for safe repositioning on flat surfaces.",
        "Used for low-height indoor or outdoor work in construction, maintenance, and events.",
        "Compliant with Australian work-at-height regulations and EN 1004 standard.",
        "Available in multiple heights and widths to suit a range of applications.",
      ]}
      advantages={[
        "Fast repositioning without disassembly — ideal for repetitive tasks.",
        "Lightweight aluminium construction reduces manual handling risk.",
        "Lockable castors prevent movement during use for worker safety.",
        "Compact when dismantled — easy to transport in a standard van or ute.",
        "No scaffolding licence required for low-height configurations (within code).",
        "Ideal for ceilings, lighting, painting, and interior fit-out work.",
      ]}
      applications={[
        "Interior Fit-Out",
        "Ceiling & Lighting Work",
        "Painting & Decorating",
        "Maintenance & Inspection",
        "Events & Exhibitions",
        "Warehouses",
        "Schools & Institutions",
      ]}
      technicalData={[
        "Material: aluminium — lightweight and rust-resistant",
        "Platform heights: from 2m to 12m (configuration dependent)",
        "Base widths: 0.75m, 1.35m, 1.85m options available",
        "Fitted with Ø 200mm lockable castors",
        "Compliant with EN 1004 and AS/NZS 4576",
        "Maximum platform load: 200 kg",
      ]}
      relatedProducts={[
        { name: "Aluminium Scaffolding", page: "ProductAluminiumScaffolding" },
        { name: "Multidirectional Scaffolding", page: "ProductMultidirectional" },
        { name: "Event Structures", page: "ProductEventStructures" },
      ]}
    />
  );
}