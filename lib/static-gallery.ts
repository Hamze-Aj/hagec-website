export type StaticGalleryItem = {
  id: number;
  src: string;
  caption: string;
  category: string;
  wide?: boolean;
  tall?: boolean;
};

export const STATIC_GALLERY_ITEMS: StaticGalleryItem[] = [
  { id: 1, src: "/hagec-website-images/photo_5947369626163416470_y.jpeg", caption: "Fafen River main canal, Jigjiga Zone", category: "Irrigation", wide: true },
  { id: 2, src: "/hagec-website-images/photo_5947369626163416471_y.jpeg", caption: "Solar-pump PV array, Gode Zone", category: "Solar & Energy" },
  { id: 3, src: "/hagec-website-images/photo_5947369626163416472_y.jpeg", caption: "Topographic survey team in the field", category: "Field Work" },
  { id: 4, src: "/hagec-website-images/photo_5947369626163416473_y.jpeg", caption: "GIS land use mapping analysis", category: "Surveying & GIS", tall: true },
  { id: 5, src: "/hagec-website-images/photo_5947369626163416482_y.jpeg", caption: "Satellite imagery classification, Somali Region", category: "Surveying & GIS" },
  { id: 6, src: "/hagec-website-images/photo_5947369626163416483_y.jpeg", caption: "Stream gauging station, Fafen Basin", category: "Field Work" },
  { id: 7, src: "/hagec-website-images/photo_5947369626163416484_y.jpeg", caption: "Headworks construction supervision", category: "Infrastructure", wide: true },
  { id: 8, src: "/hagec-website-images/photo_5947369626163416485_y.jpeg", caption: "Water treatment plant EIA site visit", category: "Infrastructure" },
  { id: 9, src: "/hagec-website-images/photo_5947369626163416486_y.jpeg", caption: "Detailed engineering design workshop", category: "Field Work" },
  { id: 10, src: "/hagec-website-images/photo_5947369626163416487_y.jpeg", caption: "GIS cartography output — Shinile Zone", category: "Surveying & GIS" },
  { id: 11, src: "/hagec-website-images/photo_5947369626163416498_y.jpeg", caption: "Secondary canal distribution system", category: "Irrigation" },
  { id: 12, src: "/hagec-website-images/photo_5947369626163416499_y.jpeg", caption: "Solar water pump installation — Fik Zone", category: "Solar & Energy" },
];