import GalleryClient from "./GalleryClient";
import { getGalleryItems } from "@/lib/get-gallery";

export const revalidate = 60;

export default async function GalleryPage() {
  const items = await getGalleryItems();
  return <GalleryClient initialItems={items} />;
}
