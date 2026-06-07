import { NextRequest, NextResponse } from "next/server";
import { getSanity, postsQuery, type Post } from "@/lib/sanity";

// Paginated newsfeed endpoint. The dashboard calls this to extend the feed
// downward as far as the user wants (load-more / infinite scroll).
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const start = Number(searchParams.get("start") ?? 0);
  const limit = Number(searchParams.get("limit") ?? 5);

  // No Sanity project configured yet -> return empty so the UI degrades gracefully.
  const sanity = getSanity();
  if (!sanity) {
    return NextResponse.json({ posts: [] as Post[] });
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
