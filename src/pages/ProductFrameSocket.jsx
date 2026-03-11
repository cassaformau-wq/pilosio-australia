import ProductDetailLayout from "../components/products/ProductDetailLayout";

export default function ProductFrameSocket() {
  return (
    <ProductDetailLayout
      category="Scaffolding"
      title="Frame Scaffolding (Socket)"
      subtitle="PE — High performance frame scaffolding with bushes"
      heroImg="https://pilosio.com/wp-content/uploads/2022/08/PE105180-cover.jpg"
      breadcrumb={[{ label: "Frame Scaffolding (Socket)" }]}
      characteristics={[
        "The PE bushing-type frame scaffolding is a high-performance system engineered for robust support structures.",
        "Socket (bushing) connections provide a secure and stable interface between frames and ledgers.",
        "Designed for facade work, construction, and maintenance applications requiring consistent strength.",
        "Compatible with a wide range of accessories to customise for any site condition.",
        "Hot-dip galvanised finish for maximum corrosion resistance in Australian conditions.",
      ]}
      advantages={[
        "High stability due to bushing connections that lock securely in place.",
        "Fast assembly with no special tools required — simple push-and-lock system.",
        "Proven in high-rise and complex facade applications.",
        "Wide accessory range for stairways, guardrails, toe-boards, and platforms.",
        "Excellent load-bearing capacity suitable for heavy construction tasks.",
        "Lightweight steel components reduce fatigue and handling time on site.",
      ]}
      applications={[
        "Residential Construction",
        "Facade Scaffolding",
        "Industrial Construction",
        "Renovation & Restoration",
        "Bridge Maintenance",
        "Oil & Gas",
      ]}
      technicalData={[
        "Frame model: PE 105-180",
        "Frame width: 105cm",
        "Frame heights: 180cm standard",
        "Finish: hot-dip galvanised steel",
        "Certified to European and Australian scaffolding standards",
        "Compatible with standard 50cm platforms and safety accessories",
      ]}
      relatedProducts={[
        { name: "Multidirectional Scaffolding", page: "ProductMultidirectional" },
        { name: "Frame Scaffolding (Pin)", page: "ProductFramePin" },
        { name: "Aluminium Scaffolding", page: "ProductAluminiumScaffolding" },
      ]}
    />
  );
}