import { defineField, defineType } from "sanity";

export const project = defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Project Title",
      type: "string",
      validation: (R) => R.required().min(5).max(120),
    }),
    defineField({
      name: "slug",
      title: "Slug (URL)",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (R) => R.required(),
    }),
    defineField({
      name: "isFeatured",
      title: "Featured on Homepage?",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Irrigation", value: "Irrigation" },
          { title: "Hydrology", value: "Hydrology" },
          { title: "Solar-Pump", value: "Solar-Pump" },
          { title: "Geotechnical", value: "Geotechnical" },
          { title: "GIS & Surveying", value: "GIS & Surveying" },
          { title: "Environmental Impact Assessment", value: "EIA" },
          { title: "Feasibility Study", value: "Feasibility Study" },
          { title: "Construction Supervision", value: "Construction Supervision" },
        ],
        layout: "radio",
      },
      validation: (R) => R.required(),
    }),
    defineField({
      name: "client",
      title: "Client / Employer",
      type: "string",
    }),
    defineField({
      name: "location",
      title: "Project Location",
      type: "string",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "projectSize",
      title: "Project Size (e.g. 1,500 HA)",
      type: "string",
    }),
    defineField({
      name: "completionDate",
      title: "Completion Year",
      type: "string",
      placeholder: "2023",
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "Completed", value: "Completed" },
          { title: "Ongoing", value: "Ongoing" },
        ],
        layout: "radio",
      },
      initialValue: "Completed",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "featuredImage",
      title: "Featured Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alternative Text",
          type: "string",
          validation: (R) => R.required(),
        }),
      ],
      validation: (R) => R.required(),
    }),
    defineField({
      name: "gallery",
      title: "Photo Gallery",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({
              name: "alt",
              title: "Alternative Text",
              type: "string",
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "shortDescription",
      title: "Short Description (Card Summary)",
      type: "text",
      rows: 3,
      validation: (R) => R.required().max(280),
    }),
    defineField({
      name: "fullDescription",
      title: "Full Project Description",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "keyResults",
      title: "Key Results & Deliverables",
      type: "array",
      of: [{ type: "block" }],
    }),
  ],
  preview: {
    select: {
      title: "title",
      category: "category",
      status: "status",
      media: "featuredImage",
    },
    prepare({ title, category, status, media }) {
      return {
        title,
        subtitle: `${category ?? "—"} | ${status ?? "—"}`,
        media,
      };
    },
  },
  orderings: [
    {
      title: "Completion Date (Newest First)",
      name: "completionDateDesc",
      by: [{ field: "completionDate", direction: "desc" }],
    },
  ],
});
