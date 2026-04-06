import HomePageClient from "@/components/home/HomePageClient";
import { getFeaturedProjects } from "@/lib/get-projects";

export const revalidate = 60;

export default async function HomePage() {
  const featuredProjects = await getFeaturedProjects();
  return <HomePageClient featuredProjects={featuredProjects} />;
}
