import ProjectsClient from "./ProjectsClient";
import { getProjectsList } from "@/lib/get-projects";

export const revalidate = 60;

export default async function ProjectsPage() {
  const projects = await getProjectsList();
  return <ProjectsClient initialProjects={projects} />;
}
