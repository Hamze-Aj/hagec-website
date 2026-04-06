export type StaticGalleryItem = {
  id: number;
  src: string;
  caption: string;
  category: string;
  wide?: boolean;
  tall?: boolean;
};

export const STATIC_GALLERY_ITEMS: StaticGalleryItem[] = [
  { id: 1, src: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80", caption: "Fafen River main canal, Jigjiga Zone", category: "Irrigation", wide: true },
  { id: 2, src: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80", caption: "Solar-pump PV array, Gode Zone", category: "Solar & Energy" },
  { id: 3, src: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80", caption: "Topographic survey team in the field", category: "Field Work" },
  { id: 4, src: "https://images.unsplash.com/photo-1531966817680-4a1dbf9fbd72?w=800&q=80", caption: "GIS land use mapping analysis", category: "Surveying & GIS", tall: true },
  { id: 5, src: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800&q=80", caption: "Satellite imagery classification, Somali Region", category: "Surveying & GIS" },
  { id: 6, src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80", caption: "Stream gauging station, Fafen Basin", category: "Field Work" },
  { id: 7, src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80", caption: "Headworks construction supervision", category: "Infrastructure", wide: true },
  { id: 8, src: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80", caption: "Water treatment plant EIA site visit", category: "Infrastructure" },
  { id: 9, src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80", caption: "Detailed engineering design workshop", category: "Field Work" },
  { id: 10, src: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=700&q=80", caption: "GIS cartography output — Shinile Zone", category: "Surveying & GIS" },
  { id: 11, src: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=700&q=80", caption: "Secondary canal distribution system", category: "Irrigation" },
  { id: 12, src: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=700&q=80", caption: "Solar water pump installation — Fik Zone", category: "Solar & Energy" },
];