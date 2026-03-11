import ProductDetailLayout from "../components/products/ProductDetailLayout";

export default function ProductAluminiumScaffolding() {
  return (
    <ProductDetailLayout
      category="Scaffolding"
      title="Aluminium Scaffolding"
      subtitle="Flash 2.2.1 & PLA — Lightweight, innovative aluminium frame scaffolding"
      heroImg="https://pilosio.com/wp-content/uploads/2022/09/221-cover.jpg"
      highlight="New"
      breadcrumb={[{ label: "Aluminium Scaffolding" }]}
      characteristics={[
        "Flash 2.2.1 is an innovative 105cm aluminium frame scaffolding for construction and maintenance works.",
        "Made with EN AW 6082 T6 special aluminium alloy with high mechanical characteristics.",
        "Metric modularity: 2-metre pitch simplifies span calculation and reduces the number of pieces to handle.",
        "1-metre wide work surface — wider and more comfortable than comparable systems on the market.",
        "Removable spigot makes frames less bulky during storage, loading, and handling.",
        "Mobile pins are only engaged when a wall-side guardrail is required — less obstruction for workers.",
        "The lower transom can be removed to allow steel planks to be removed even when the scaffold is erected.",
        "Certified to UNI EN 12810-1:2004 and 12811-1:2004.",
      ]}
      advantages={[
        "Metric 2m pitch simplifies project planning and reduces component count.",
        "Load capacity: 200 kg/m² up to 22m height; 300 kg/m² up to 12m height.",
        "Significantly lighter than steel — reduces worker fatigue and logistics costs.",
        "Removable lower transom enables planks to be swapped during the build.",
        "Horizontal brace option strengthens the structure when planks are removed.",
        "Fast assembly — intuitive design requires no specialised training.",
        "Excellent for renovation, oil & gas, naval, and residential applications.",
      ]}
      applications={[
        "Renovation & Restoration",
        "Residential Construction",
        "Oil & Gas",
        "Naval / Shipyards",
        "Bridge Construction",
        "Bridge Maintenance",
        "Industrial Construction",
      ]}
      technicalData={[
        "Frame dimensions: 100 x h 200cm",
        "Frame weight: 9.96 kg",
        "Pitch: 200cm",
        "Aluminium alloy: EN AW 6082 T6",
        "Load: 200 kg/m² (up to 22m); 300 kg/m² (up to 12m with report)",
        "Double steel or aluminium guardrail",
        "50×200cm steel planks; trapdoor plank with ladder available",
        "Toe-board: 15cm high in galvanised steel",
        "Certified: UNI EN 12810-1:2004 & 12811-1:2004",
      ]}
      relatedProducts={[
        { name: "Multidirectional Scaffolding", page: "ProductMultidirectional" },
        { name: "Frame Scaffolding (Socket)", page: "ProductFrameSocket" },
        { name: "Mobile Towers", page: "ProductMobileTowers" },
        { name: "IXI Aluminium Truss", page: "ProductIXITruss" },
      ]}
    />
  );
}