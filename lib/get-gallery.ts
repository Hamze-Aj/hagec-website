import { client, urlFor, galleryQuery } from "@/lib/sanity";
import { STATIC_GALLERY_ITEMS, type StaticGalleryItem } from "@/lib/static-gallery";

export type GalleryItem = StaticGalleryItem;

function sanityConfigured(): boolean {
  const id = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  return Boolean(id && id !== "your-project-id");
}

export async function getGalleryItems(): Promise<GalleryItem[]> {
  if (!sanityConfigured()) return STATIC_GALLERY_ITEMS;
  try {
    const data = await client.fetch<
      { _id: string; image: Parameters<typeof urlFor>[0]; caption: string; category: string }[]
    >(galleryQuery);
    if (!data?.length) return STATIC_GALLERY_ITEMS;
    const mapped: GalleryItem[] = data.map((row, i) => ({
      id: i + 1,
      src: urlFor(row.image).width(900).height(700).quality(85).url(),
      caption: row.caption,
      category: row.category,
    }));
    return mapped.length ? mapped : STATIC_GALLERY_ITEMS;
  } catch {
    return STATIC_GALLERY_ITEMS;
  }
}
