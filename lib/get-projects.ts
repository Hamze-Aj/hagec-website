import { client, urlFor, projectsQuery, featuredProjectsQuery, projectBySlugQuery } from "@/lib/sanity";
import type { SanityImageSource } from "@sanity/image-url";
import { STATIC_PROJECTS_LIST } from "@/lib/static-projects-list";
import { staticProjectsBySlug } from "@/lib/static-project-details";
import type { ProjectDetail, ProjectListItem } from "@/lib/project-types";
import { blocksToParagraphs } from "@/lib/portable-text";

function sanityConfigured(): boolean {
  const id = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  return Boolean(id && id !== "your-project-id");
}

function mapListItem(p: Record<string, unknown>): ProjectListItem | null {
  const slugVal = p.slug as { current?: string } | string | undefined;
  const slug = typeof slugVal === "string" ? slugVal : slugVal?.current;
  if (!slug) return null;
  const img = p.featuredImage as SanityImageSource | undefined;
  const image = img ? urlFor(img).width(900).height(600).quality(85).url() : "";
  return {
    id: (p._id as string) ?? slug,
    title: p.title as string,
    slug,
    category: p.category as string,
    client: (p.client as string) ?? "",
    location: p.location as string,
    projectSize: (p.projectSize as string) ?? "—",
    completionDate: (p.completionDate as string) ?? "",
    status: p.status as ProjectListItem["status"],
    isFeatured: Boolean(p.isFeatured),
    image,
    shortDescription: p.shortDescription as string,
  };
}

export async function getProjectsList(): Promise<ProjectListItem[]> {
  if (!sanityConfigured()) return STATIC_PROJECTS_LIST;
  try {
    const data = await client.fetch<Record<string, unknown>[]>(projectsQuery);
    if (!data?.length) return STATIC_PROJECTS_LIST;
    const mapped = data.map(mapListItem).filter(Boolean) as ProjectListItem[];
    return mapped.length ? mapped : STATIC_PROJECTS_LIST;
  } catch {
    return STATIC_PROJECTS_LIST;
  }
}

export async function getFeaturedProjects(): Promise<ProjectListItem[]> {
  if (!sanityConfigured()) {
    return STATIC_PROJECTS_LIST.filter((p) => p.isFeatured).slice(0, 3);
  }
  try {
    const data = await client.fetch<Record<string, unknown>[]>(featuredProjectsQuery);
    if (!data?.length) {
      return STATIC_PROJECTS_LIST.filter((p) => p.isFeatured).slice(0, 3);
    }
    const mapped = data.map(mapListItem).filter(Boolean) as ProjectListItem[];
    return mapped.slice(0, 3);
  } catch {
    return STATIC_PROJECTS_LIST.filter((p) => p.isFeatured).slice(0, 3);
  }
}

function mapSanityDetail(raw: Record<string, unknown>): ProjectDetail | null {
  const img = raw.featuredImage as SanityImageSource | undefined;
  const image = img ? urlFor(img).width(1600).height(900).quality(88).url() : "";
  const galleryRaw = raw.gallery as SanityImageSource[] | undefined;
  const gallery =
    galleryRaw?.map((g) => urlFor(g).width(1000).height(700).quality(85).url()).filter(Boolean) ?? [];

  const fullDescription = blocksToParagraphs(raw.fullDescription);
  const keyResults = blocksToParagraphs(raw.keyResults);

  return {
    title: raw.title as string,
    category: raw.category as string,
    client: (raw.client as string) ?? "",
    location: raw.location as string,
    projectSize: (raw.projectSize as string) ?? "—",
    completionDate: (raw.completionDate as string) ?? "",
    status: raw.status as ProjectDetail["status"],
    shortDescription: raw.shortDescription as string,
    fullDescription,
    keyResults,
    gallery,
    image,
  };
}

export async function getProjectBySlug(slug: string): Promise<ProjectDetail | null> {
  const fallback = staticProjectsBySlug[slug] ?? null;
  if (!sanityConfigured()) return fallback;

  try {
    const raw = await client.fetch<Record<string, unknown> | null>(projectBySlugQuery, { slug });
    if (!raw) return fallback;
    const mapped = mapSanityDetail(raw);
    if (!mapped?.title) return fallback;

    if (!fallback) {
      return mapped.image ? mapped : null;
    }

    const merged: ProjectDetail = {
      ...fallback,
      ...mapped,
      title: mapped.title,
      category: mapped.category,
      client: mapped.client || fallback?.client || "",
      location: mapped.location || fallback?.location || "",
      projectSize: mapped.projectSize ?? fallback?.projectSize ?? "—",
      completionDate: mapped.completionDate || fallback?.completionDate || "",
      status: mapped.status,
      shortDescription: mapped.shortDescription || fallback?.shortDescription || "",
      image: mapped.image || fallback?.image || "",
      fullDescription:
        mapped.fullDescription.length > 0 ? mapped.fullDescription : fallback?.fullDescription ?? [],
      keyResults: mapped.keyResults.length > 0 ? mapped.keyResults : fallback?.keyResults ?? [],
      gallery: mapped.gallery.length > 0 ? mapped.gallery : fallback?.gallery ?? [],
    };
    return merged;
  } catch {
    return fallback;
  }
}

export async function getAllProjectSlugs(): Promise<string[]> {
  const fromStatic = Object.keys(staticProjectsBySlug);
  if (!sanityConfigured()) return fromStatic;
  try {
    const q = `*[_type == "project"].slug.current`;
    const slugs = await client.fetch<string[]>(q);
    if (slugs?.length) return [...new Set([...fromStatic, ...slugs])];
  } catch {
    /* use static */
  }
  return fromStatic;
}
