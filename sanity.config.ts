import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { project } from "./sanity/schemas/project";
import { galleryImage } from "./sanity/schemas/galleryImage";

export default defineConfig({
  name: "hagec-studio",
  title: "HAGEC Content Studio",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "your-project-id",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  basePath: "/studio",
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("HAGEC Content")
          .items([
            S.listItem()
              .title("Projects")
              .schemaType("project")
              .child(S.documentTypeList("project").title("All Projects")),
            S.listItem()
              .title("Gallery Images")
              .schemaType("galleryImage")
              .child(S.documentTypeList("galleryImage").title("Gallery Images")),
          ]),
    }),
    visionTool(),
  ],
  schema: {
    types: [project, galleryImage],
  },
});
