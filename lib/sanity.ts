import { createClient } from "next-sanity";
import { createImageUrlBuilder, type SanityImageSource } from "@sanity/image-url";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "your-project-id";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});

const imageBuilder = createImageUrlBuilder({ projectId, dataset });

export function urlFor(source: SanityImageSource) {
  return imageBuilder.image(source);
}

// GROQ Queries
export const projectsQuery = `*[_type == "project"] | order(completionDate desc) {
  _id,
  title,
  slug,
  category,
  client,
  location,
  projectSize,
  completionDate,
  featuredImage,
  shortDescription,
  status,
  "isFeatured": isFeatured
}`;

export const featuredProjectsQuery = `*[_type == "project" && isFeatured == true][0..2] {
  _id,
  title,
  slug,
  category,
  client,
  location,
  projectSize,
  featuredImage,
  shortDescription,
  status
}`;

export const projectBySlugQuery = `*[_type == "project" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  category,
  client,
  location,
  projectSize,
  completionDate,
  featuredImage,
  gallery,
  shortDescription,
  fullDescription,
  keyResults,
  status
}`;

export const galleryQuery = `*[_type == "galleryImage"] | order(_createdAt desc) {
  _id,
  image,
  caption,
  category
}`;
