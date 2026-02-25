import ProductDetailLayout from "../components/products/ProductDetailLayout";

export default function ProductIXITruss() {
  return (
    <ProductDetailLayout
      category="Suspended Structures"
      title="IXI Aluminium Truss"
      subtitle="Groundbreaking modular aluminium beam for bridges, large-span roofs, and elevated platforms"
      heroImg="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80"
      highlight="Innovative"
      breadcrumb={[{ label: "IXI Aluminium Truss" }]}
      characteristics={[
        "The IXI Truss beam is a groundbreaking solution for projects requiring lightweight, adaptable, and robust structural elements.",
        "Designed from aluminium for optimal performance in all weather conditions — rust-resistant and durable.",
        "Fully modular beam available in 1m, 2m, and 3m sections — combine to any length required.",
        "Vertical tubes positioned every 1m for maximum adaptability and connection options.",
        "Ringlock compatible — integrates seamlessly with Pilosio's multidirectional scaffolding system.",
        "5 times lighter than equivalent steel beams — dramatic reduction in logistics and handling costs.",
        "Ideal for bridges, large-span roofs, walkways, elevated platform support, and material scaffolding.",
      ]}
      advantages={[
        "Reduced logistics costs — easily transportable and stackable; over 300m fits in a standard container.",
        "Fast assembly — no special tools or skills required; can be assembled on the ground or in the air.",
        "Durability — rust-resistant aluminium is ideal for harsh Australian outdoor environments.",
        "5× lighter than steel equivalents — reduces crane requirements and manual handling risk.",
        "Ringlock compatible — works directly with Pilosio MP multidirectional scaffolding.",
        "Increased efficiency — rapid assembly saves time and enhances project competitiveness.",
        "Modular lengths allow custom spans without cutting or fabrication.",
      ]}
      applications={[
        "Bridge Construction",
        "Bridge Maintenance",
        "Large-Span Roofs",
        "Walkways & Platforms",
        "Elevated Material Scaffolding",
        "Renovation & Restoration",
        "Oil & Gas",
        "Events",
        "Skyscrapers",
        "Industrial Construction",
      ]}
      technicalData={[
        "Weight: 18.5 kg/m",
        "Modular lengths: 1m, 2m, 3m sections",
        "Vertical tubes every 1m for adaptability",
        "Ringlock compatible",
        "5× lighter than equivalent steel beams",
        "Over 300m storable in a standard 20ft container",
        "Material: high-strength aluminium alloy",
        "Can be assembled on the ground or at height",
      ]}
      relatedProducts={[
        { name: "Flydeck System", page: "ProductFlydeck" },
        { name: "Suspended Structures Overview", page: "ProductSuspended" },
        { name: "Multidirectional Scaffolding", page: "ProductMultidirectional" },
        { name: "Aluminium Scaffolding", page: "ProductAluminiumScaffolding" },
      ]}
    />
  );
}