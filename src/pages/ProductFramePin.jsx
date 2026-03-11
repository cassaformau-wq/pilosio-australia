import ProductDetailLayout from "../components/products/ProductDetailLayout";

export default function ProductFramePin() {
  return (
    <ProductDetailLayout
      category="Scaffolding"
      title="Frame Scaffolding (Pin)"
      subtitle="K 105-180 — Steel pin frame scaffolding for fast, safe facade work"
      heroImg="https://pilosio.com/wp-content/uploads/2022/12/K-cover2.jpg"
      breadcrumb={[{ label: "Frame Scaffolding (Pin)" }]}
      characteristics={[
        "Steel frame scaffolding with pins welded directly onto the frames, eliminating the need for separate connectors.",
        "Easy and fast to assemble — ideal for facade work where speed is critical.",
        "Pins welded on the frames simplify assembly without any special tools.",
        "Robust steel construction ensures stability and compliance with safety standards.",
        "Hot-dip galvanised for long-term durability on Australian construction sites.",
        "Wide range of accessories available for stairs, guardrails, and platform extensions.",
      ]}
      advantages={[
        "Fastest assembly of any frame scaffolding system — no loose connections.",
        "Welded pins eliminate component loss and simplify logistics.",
        "Excellent stability for high-rise and multi-storey facade applications.",
        "Reduced training time — highly intuitive system for site crews.",
        "Compatible with standard scaffold boards and safety accessories.",
        "Cost-effective choice for repetitive, straight-facade projects.",
      ]}
      applications={[
        "Facade Scaffolding",
        "Residential Construction",
        "Commercial Buildings",
        "Renovation & Restoration",
        "Industrial Construction",
        "Bridge Maintenance",
      ]}
      technicalData={[
        "Frame model: K 105-180",
        "Frame width: 105cm",
        "Frame height: 180cm standard",
        "Connection: welded pin system — no loose parts",
        "Finish: hot-dip galvanised steel",
        "Certified to EN 12810-1 & EN 12811-1 (European) and relevant AS/NZS standards",
      ]}
      relatedProducts={[
        { name: "Multidirectional Scaffolding", page: "ProductMultidirectional" },
        { name: "Frame Scaffolding (Socket)", page: "ProductFrameSocket" },
        { name: "Aluminium Scaffolding", page: "ProductAluminiumScaffolding" },
      ]}
    />
  );
}