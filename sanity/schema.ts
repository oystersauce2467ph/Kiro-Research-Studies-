import { defineType, defineField } from "sanity";

// Minimal Sanity schema for newsfeed posts (images, video, text).
// Editors use Studio as the admin panel; published content renders on the
// live dashboard.
export const post = defineType({
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "excerpt", title: "Excerpt", type: "text" }),
    defineField({
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({ name: "videoUrl", title: "Video URL", type: "url" }),
    defineField({ name: "publishedAt", title: "Published at", type: "datetime" }),
  ],
});
