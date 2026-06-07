import Newsfeed from "@/components/Newsfeed";
import { getSupabase, type Metric } from "@/lib/supabase";
import { getSanity, postsQuery, type Post } from "@/lib/sanity";
import { SAMPLE_POSTS } from "@/lib/sampleData";

export const dynamic = "force-dynamic";

const PAGE_SIZE = 5;

// Fallback metrics so the dashboard renders before Supabase is connected.
const FALLBACK_METRICS: Metric[] = [
  { id: 1, label: "Visitors", value: 1280, updated_at: "" },
  { id: 2, label: "Signups", value: 342, updated_at: "" },
  { id: 3, label: "Conversion %", value: 26, updated_at: "" },
  { id: 4, label: "Revenue", value: 8650, updated_at: "" },
];

async function getMetrics(): Promise<Metric[]> {
  const supabase = getSupabase();
  if (!supabase) return FALLBACK_METRICS;
  try {
    const { data, error } = await supabase.from("metrics").select("*");
    if (error || !data || data.length === 0) return FALLBACK_METRICS;
    return data as Metric[];
  } catch {
    return FALLBACK_METRICS;
  }
}

async function getInitialPosts(): Promise<Post[]> {
  const sanity = getSanity();
  if (!sanity) return SAMPLE_POSTS.slice(0, PAGE_SIZE);
  try {
    return await sanity.fetch<Post[]>(postsQuery, { start: 0, end: PAGE_SIZE });
  } catch {
    return SAMPLE_POSTS.slice(0, PAGE_SIZE);
  }
}

export default async function Home() {
  const [metrics, posts] = await Promise.all([
    getMetrics(),
    getInitialPosts(),
  ]);

  return (
    <main className="container">
      <section className="hero">
        <h1>Kiro Research Studies</h1>
        <p>Your live, high-converting dashboard. Data by Supabase, content by Sanity.</p>
        <a className="cta" href="#newsfeed">
          Get started
        </a>
      </section>

      <section className="grid">
        {metrics.map((m) => (
          <div className="card" key={m.id}>
            <div className="label">{m.label}</div>
            <div className="value">{m.value.toLocaleString()}</div>
          </div>
        ))}
      </section>

      <section id="newsfeed">
        <h2 className="section-title">Newsfeed</h2>
        <Newsfeed initialPosts={posts} />
      </section>

      <footer className="footer">
        Built with Next.js, Supabase, and Sanity · Deployed on Vercel
      </footer>
    </main>
  );
}
