import ProductDetailLayout from "../components/products/ProductDetailLayout";

export default function ProductFlydeck() {
  return (
    <ProductDetailLayout
      category="Suspended Structures"
      title="Flydeck System"
      subtitle="Patented soffit suspended platform — faster, safer bridge and structure maintenance"
      heroImg="https://pilosio.com/wp-content/uploads/2022/08/Viadotto-Acqualonga-1.jpg"
      highlight="Patented"
      breadcrumb={[{ label: "Flydeck System" }]}
      characteristics={[
        "The FLYDECK system is a patented and certified soffit plane designed to simplify, speed up, and make assembly of temporary suspended structures safer.",
        "Provides a perfectly horizontal work plane for any construction site where a suspended solution is required.",
        "Used in conjunction with the FLYRAIL beam, workers can operate comfortably and in complete safety.",
        "Pillars and pier-caps can be encircled and the structure continued into the next span without interruption.",
        "No limitation in width, length, or load capacity — fully modular system using beams and decks of any make, model, shape, or size.",
        "No need to interrupt road or rail routes during installation thanks to FLYRAIL beam technology.",
      ]}
      advantages={[
        "Significant reduction in set-up times using the FLYRAIL beam and high-speed connection system.",
        "No road or rail route interruption — structure can be erected from any access point.",
        "Total safety during anchorage phases — workers always on a secured platform.",
        "Safety nets can be laid during work surface creation — no sub-bridges needed.",
        "25cm aluminium truss with special X-reinforcement for high manoeuvrability and load capacity.",
        "Spring-pin connections are significantly faster than traditional screw-nut systems.",
        "Economic advantages in transport — low weight of aluminium reduces logistics costs.",
        "Storage footprint halved compared to traditional beam systems.",
      ]}
      applications={[
        "Bridge Maintenance",
        "Bridge Construction",
        "Renovation & Restoration",
        "Residential Construction",
        "Industrial Construction",
        "Events & Entertainment",
        "Viaducts & Overpasses",
      ]}
      technicalData={[
        "Load capacity: up to 150 kg/m² (tie-rods every 6m²)",
        "Load capacity: up to 300 kg/m² (tie-rods every 4m²)",
        "Beam height: 25cm aluminium truss with X-reinforcement",
        "Connection: spigot and special spring pins",
        "No width or length limitation — fully modular",
        "Compatible with FLYRAIL beam system",
        "Certified to EN standards for suspended access systems",
      ]}
      relatedProducts={[
        { name: "IXI Aluminium Truss", page: "ProductIXITruss" },
        { name: "Suspended Structures Overview", page: "ProductSuspended" },
        { name: "Event Structures", page: "ProductEventStructures" },
        { name: "Multidirectional Scaffolding", page: "ProductMultidirectional" },
      ]}
    />
  );
}
