import { createClient, type SanityClient } from "@sanity/client";

// Admin / content layer (images, video, newsfeed posts).
// Editors manage this content in Sanity Studio; it renders on the live site.
//
// The client is created lazily so the app builds and runs even before a Sanity
// project is configured. getSanity() returns null until env vars are set.
let client: SanityClient | null = null;

export function getSanity(): SanityClient | null {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  if (!projectId) return null;

  if (!client) {
    client = createClient({
      projectId,
      dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
      apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2024-01-01",
      useCdn: true,
    });
  }
  return client;
}

export type Post = {
  _id: string;
  title: string;
  excerpt?: string;
  imageUrl?: string;
  publishedAt?: string;
};

// GROQ query: newest posts first, with pagination via slice [start...end].
export const postsQuery = `*[_type == "post"] | order(publishedAt desc) [$start...$end] {
  _id,
  title,
  excerpt,
  "imageUrl": mainImage.asset->url,
  publishedAt
}`;
