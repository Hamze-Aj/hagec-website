export interface Project {
  _id: string;
  title: string;
  slug: { current: string };
  category: string;
  client?: string;
  location: string;
  projectSize?: string;
  completionDate?: string;
  featuredImage?: SanityImage;
  gallery?: SanityImage[];
  shortDescription: string;
  fullDescription?: PortableTextBlock[];
  keyResults?: PortableTextBlock[];
  status: "Completed" | "Ongoing";
  isFeatured?: boolean;
}

export interface GalleryImage {
  _id: string;
  image: SanityImage;
  caption: string;
  category: string;
}

export interface SanityImage {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
  alt?: string;
}

export interface PortableTextBlock {
  _type: string;
  _key?: string;
  style?: string;
  children?: { _type: string; text: string; marks?: string[] }[];
  listItem?: string;
  markDefs?: unknown[];
}
