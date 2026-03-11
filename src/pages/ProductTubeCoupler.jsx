import ProductDetailLayout from "../components/products/ProductDetailLayout";

export default function ProductTubeCoupler() {
  return (
    <ProductDetailLayout
      category="Scaffolding"
      title="Tube & Coupler"
      subtitle="Traditional scaffolding with maximum adaptability for complex configurations"
      heroImg="https://pilosio.com/wp-content/uploads/2022/08/MP83-cover.jpg"
      breadcrumb={[{ label: "Tube & Coupler" }]}
      characteristics={[
        "Traditional scaffolding system offering the highest flexibility and adaptability of any scaffold type.",
        "Suitable for complex configurations, irregular facades, and variable work environments.",
        "Tubes and couplers can be joined at virtually any angle, enabling bespoke structures.",
        "Hot-dip galvanised steel tubes to Ø 48.3mm complying with AS/NZS and EN standards.",
        "Used globally for over 50 years — a proven, reliable system trusted on the most demanding sites.",
      ]}
      advantages={[
        "Unlimited configuration flexibility — adapt to any structure or geometry.",
        "No proprietary connectors required — uses industry-standard tubes and couplers.",
        "Ideal for irregular or heritage facades where modular systems cannot fit.",
        "Highly reusable components with long service life.",
        "Familiar system for experienced scaffolding crews — minimal retraining.",
        "Compatible with standard Pilosio platforms, guardrails, and accessories.",
      ]}
      applications={[
        "Complex Facade Work",
        "Heritage & Restoration",
        "Industrial Maintenance",
        "Bridge Construction",
        "Oil & Gas",
        "Naval / Shipyards",
        "Petrochemical Industry",
      ]}
      technicalData={[
        "Tube diameter: Ø 48.3mm",
        "Wall thickness: 3.2mm (standards), 2.3mm (ledgers/diagonals)",
        "Finish: hot-dip galvanised",
        "Coupler types: right-angle, swivel, sleeve, putlog",
        "Compliant with AS/NZS 1576 and EN 39 standards",
      ]}
      relatedProducts={[
        { name: "Multidirectional Scaffolding", page: "ProductMultidirectional" },
        { name: "Frame Scaffolding (Socket)", page: "ProductFrameSocket" },
        { name: "IXI Aluminium Truss", page: "ProductIXITruss" },
      ]}
    />
  );
}