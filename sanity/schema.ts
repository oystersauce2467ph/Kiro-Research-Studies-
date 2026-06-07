// Minimal Sanity schema for newsfeed posts (images, video, text).
// Add this to your Sanity Studio's schema types. Editors use Studio as the
// admin panel; published content renders on the live dashboard.
export const post = {
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string" },
    { name: "excerpt", title: "Excerpt", type: "text" },
    {
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: { hotspot: true },
    },
    { name: "videoUrl", title: "Video URL", type: "url" },
    { name: "publishedAt", title: "Published at", type: "datetime" },
  ],
};
