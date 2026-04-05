import { defineField, defineType } from "sanity";

export const galleryImage = defineType({
  name: "galleryImage",
  title: "Gallery Image",
  type: "document",
  fields: [
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      validation: (R) => R.required(),
    }),
    defineField({
      name: "caption",
      title: "Caption",
      type: "string",
      validation: (R) => R.required().max(200),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Irrigation", value: "Irrigation" },
          { title: "Solar & Energy", value: "Solar & Energy" },
          { title: "Surveying & GIS", value: "Surveying & GIS" },
          { title: "Field Work", value: "Field Work" },
          { title: "Infrastructure", value: "Infrastructure" },
        ],
        layout: "radio",
      },
      validation: (R) => R.required(),
    }),
    defineField({
      name: "project",
      title: "Related Project (optional)",
      type: "reference",
      to: [{ type: "project" }],
    }),
  ],
  preview: {
    select: {
      title: "caption",
      category: "category",
      media: "image",
    },
    prepare({ title, category, media }) {
      return {
        title,
        subtitle: category,
        media,
      };
    },
  },
});
