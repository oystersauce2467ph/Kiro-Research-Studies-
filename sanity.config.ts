import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./sanity/schemaTypes";

// Sanity Studio = your admin panel for content (images, video, newsfeed posts).
// Run it locally with:  npm run studio
// projectId/dataset are read from env vars (see .env.example / SANITY_STUDIO_*).
export default defineConfig({
  name: "default",
  title: "Kiro Research Studies",
  projectId:
    process.env.SANITY_STUDIO_PROJECT_ID ||
    process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ||
    "your-project-id",
  dataset:
    process.env.SANITY_STUDIO_DATASET ||
    process.env.NEXT_PUBLIC_SANITY_DATASET ||
    "production",
  plugins: [structureTool(), visionTool()],
  schema: { types: schemaTypes },
});
