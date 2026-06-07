"use client";

import { useState } from "react";
import type { Post } from "@/lib/sanity";

const PAGE_SIZE = 5;

export default function Newsfeed({ initialPosts }: { initialPosts: Post[] }) {
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(initialPosts.length < PAGE_SIZE);

  async function loadMore() {
    setLoading(true);
    try {
      const res = await fetch(
        `/api/posts?start=${posts.length}&limit=${PAGE_SIZE}`
      );
      const data = (await res.json()) as { posts: Post[] };
      setPosts((prev) => [...prev, ...data.posts]);
      if (data.posts.length < PAGE_SIZE) setDone(true);
    } finally {
      setLoading(false);
    }
  }

  if (posts.length === 0) {
    return (
      <div className="empty">
        No posts yet. Add your first newsfeed post in Sanity Studio and it will
        appear here.
      </div>
    );
  }

  return (
    <div>
      {posts.map((post) => (
        <article className="post" key={post._id}>
          {post.imageUrl && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={post.imageUrl} alt={post.title} />
          )}
          <div>
            <h3>{post.title}</h3>
            {post.excerpt && <p>{post.excerpt}</p>}
          </div>
        </article>
      ))}

      {!done && (
        <button className="load-more" onClick={loadMore} disabled={loading}>
          {loading ? "Loading..." : "Load more"}
        </button>
      )}
    </div>
  );
}
