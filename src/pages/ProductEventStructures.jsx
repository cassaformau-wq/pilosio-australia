import ProductDetailLayout from "../components/products/ProductDetailLayout";

export default function ProductEventStructures() {
  return (
    <ProductDetailLayout
      category="Suspended Structures"
      title="Event Structures"
      subtitle="Specialised temporary structures for concerts, exhibitions, and large-scale events"
      heroImg="https://pilosio.com/wp-content/uploads/2022/08/PALCHi-cover.jpg"
      breadcrumb={[{ label: "Event Structures" }]}
      characteristics={[
        "Specialised temporary structures engineered for events, concerts, exhibitions, and public gatherings.",
        "Built using the Pilosio MP Multidirectional scaffolding system — maximum flexibility for custom event configurations.",
        "Structures can be configured as stages, grandstands, audio-video towers, and covered event areas.",
        "All structures are engineered and certified to meet Australian safety standards for public events.",
        "Fast assembly and disassembly to meet tight event turnaround schedules.",
        "Available with bespoke structural engineering reports for local authority approval.",
      ]}
      advantages={[
        "Rapid setup and strike — critical for back-to-back event schedules.",
        "Modular MP system adapts to any venue layout, indoor or outdoor.",
        "Certified load capacities for audience platforms and equipment loading.",
        "Compatible with lighting rigs, audio towers, and LED screen supports.",
        "Experienced Pilosio Australia team supports design, engineering, and supply.",
        "Meets AS/NZS requirements for temporary structures at public events.",
      ]}
      applications={[
        "Concerts & Festivals",
        "Sporting Events",
        "Exhibitions & Trade Shows",
        "Corporate Events",
        "Stages & Grandstands",
        "Audio-Video Towers",
        "Temporary Covered Structures",
      ]}
      technicalData={[
        "System: Pilosio MP Multidirectional scaffolding base",
        "Custom configuration — no standard size limitations",
        "Load-bearing platforms engineered to client specification",
        "Structural calculations available for council/authority approval",
        "Certified to relevant Australian Standards (AS/NZS 1576, 4576)",
        "Assembly by trained Pilosio-certified crews",
      ]}
      relatedProducts={[
        { name: "Multidirectional Scaffolding", page: "ProductMultidirectional" },
        { name: "Flydeck System", page: "ProductFlydeck" },
        { name: "Mobile Towers", page: "ProductMobileTowers" },
        { name: "IXI Aluminium Truss", page: "ProductIXITruss" },
      ]}
    />
  );
}