import type { Post } from "@/lib/sanity";

// Demo newsfeed content shown until a real Sanity project is connected.
// Once Sanity env vars are set, real posts replace these automatically.
export const SAMPLE_POSTS: Post[] = [
  {
    _id: "sample-1",
    title: "Welcome to Kiro Research Studies",
    excerpt:
      "This is demo content. Connect Sanity and your real posts will show here.",
    imageUrl:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=320&q=60",
    publishedAt: "2026-06-07T09:00:00Z",
  },
  {
    _id: "sample-2",
    title: "Live data, powered by Supabase",
    excerpt:
      "The metric cards above update in real time from your SQL database.",
    imageUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=320&q=60",
    publishedAt: "2026-06-06T14:30:00Z",
  },
  {
    _id: "sample-3",
    title: "Manage content without code",
    excerpt:
      "Edit images, videos, and posts in Sanity Studio — your admin panel.",
    imageUrl:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=320&q=60",
    publishedAt: "2026-06-05T11:15:00Z",
  },
  {
    _id: "sample-4",
    title: "Deploy in minutes with Vercel",
    excerpt: "Push to GitHub and your site goes live automatically.",
    imageUrl:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=320&q=60",
    publishedAt: "2026-06-04T16:45:00Z",
  },
  {
    _id: "sample-5",
    title: "The feed extends as far as you want",
    excerpt: 'Click "Load more" to keep scrolling through older posts.',
    imageUrl:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=320&q=60",
    publishedAt: "2026-06-03T08:20:00Z",
  },
  {
    _id: "sample-6",
    title: "Built for conversions",
    excerpt: "A clean hero, clear metrics, and a scannable feed.",
    imageUrl:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=320&q=60",
    publishedAt: "2026-06-02T13:00:00Z",
  },
  {
    _id: "sample-7",
    title: "Your project, your rules",
    excerpt: "Customize the schema, theme, and layout however you like.",
    imageUrl:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=320&q=60",
    publishedAt: "2026-06-01T10:10:00Z",
  },
];
