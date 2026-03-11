import ProductDetailLayout from "../components/products/ProductDetailLayout";

export default function ProductMultidirectional() {
  return (
    <ProductDetailLayout
      category="Scaffolding"
      title="Multidirectional Scaffolding"
      subtitle="MP — A versatile and durable solid scaffolding system"
      heroImg="https://pilosio.com/wp-content/uploads/2022/08/MP83-cover.jpg"
      highlight="Most Popular"
      breadcrumb={[{ label: "Multidirectional Scaffolding" }]}
      characteristics={[
        "Pilosio MP Multidirectional scaffolding is a very flexible system with great modularity and high capacity.",
        "Great versatility thanks to rosettes welded to vertical uprights every 50cm that allow 8 independent connections in 360°.",
        "The bolt-free connection (wedge-head and rosettes) allows quick, easy and very safe assembly and dismantling.",
        "MP system suits a wide range of applications from construction to industrial maintenance, shipyards, entertainment venues, facade applications and restoration.",
        "Availability: MP 83-250, MP 83-300 and MP 115-250.",
        "MP scaffolding is certified under European standards EN 12810-1 and EN 12811-1.",
      ]}
      advantages={[
        "Easy handling with only one hammer and level required.",
        "Quick and easy assembly — no special tools needed.",
        "Enlarged working area width for improved safety.",
        "Wide range of system accessories to meet any need.",
        "Extremely adaptable and robust for complex situations.",
        "Flexible angle set-up due to small and large connecting openings.",
        "Wide range of spans available including high-capacity MP HD towers.",
      ]}
      applications={[
        "Residential Construction",
        "Skyscrapers",
        "Industrial Construction",
        "Bridge Construction",
        "Bridge Maintenance",
        "Renovation & Restoration",
        "Oil & Gas",
        "Naval / Shipyards",
        "Events & Entertainment",
        "Stages & Grandstands",
        "Mezzanines & Load Castles",
        "Shoring Structures",
      ]}
      technicalData={[
        "Load capacity MP 83: 150 daN/m²",
        "Load capacity MP 115: 300 daN/m²",
        "Up to 8 ledgers/diagonals per level",
        "Height intervals at every 50cm",
        "Finish: hot-dip galvanised",
        "Steel tubes Ø 48.3mm — wall thickness 3.2mm (standards), 2.3mm (diagonals/ledgers)",
        "Certified: EN 12810-1 & EN 12811-1",
      ]}
      relatedProducts={[
        { name: "Frame Scaffolding (Socket)", page: "ProductFrameSocket" },
        { name: "Frame Scaffolding (Pin)", page: "ProductFramePin" },
        { name: "Aluminium Scaffolding", page: "ProductAluminiumScaffolding" },
        { name: "Tube & Coupler", page: "ProductTubeCoupler" },
      ]}
    />
  );
}