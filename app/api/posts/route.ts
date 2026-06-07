import { NextRequest, NextResponse } from "next/server";
import { getSanity, postsQuery, type Post } from "@/lib/sanity";
import { SAMPLE_POSTS } from "@/lib/sampleData";

// Paginated newsfeed endpoint. The dashboard calls this to extend the feed
// downward as far as the user wants (load-more / infinite scroll).
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const start = Number(searchParams.get("start") ?? 0);
  const limit = Number(searchParams.get("limit") ?? 5);

  // No Sanity project configured yet -> serve paginated demo content so the
  // newsfeed (and "Load more") still works before credentials are added.
  const sanity = getSanity();
  if (!sanity) {
    const posts = SAMPLE_POSTS.slice(start, start + limit);
    return NextResponse.json({ posts });
  }

  try {
    const posts = await sanity.fetch<Post[]>(postsQuery, {
      start,
      end: start + limit,
    });
    return NextResponse.json({ posts });
  } catch {
    return NextResponse.json({ posts: [] as Post[] });
  }
}
