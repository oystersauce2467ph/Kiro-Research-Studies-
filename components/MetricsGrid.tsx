"use client";

import { useEffect, useState } from "react";
import { getSupabase, type Metric } from "@/lib/supabase";

// Renders the metric cards and subscribes to Supabase realtime updates.
// When any row in the `metrics` table changes, the cards refresh automatically
// without a page reload. Falls back to the server-provided values until then.
export default function MetricsGrid({
  initialMetrics,
}: {
  initialMetrics: Metric[];
}) {
  const [metrics, setMetrics] = useState<Metric[]>(initialMetrics);
  const [live, setLive] = useState(false);

  useEffect(() => {
    const supabase = getSupabase();
    if (!supabase) return;

    const channel = supabase
      .channel("metrics-changes")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "metrics" },
        async () => {
          const { data } = await supabase.from("metrics").select("*");
          if (data) setMetrics(data as Metric[]);
        }
      )
      .subscribe((status) => {
        if (status === "SUBSCRIBED") setLive(true);
      });

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  return (
    <section>
      <div className="metrics-head">
        <h2 className="section-title">Dashboard</h2>
        <span className={live ? "live-badge on" : "live-badge"}>
          {live ? "● Live" : "○ Static"}
        </span>
      </div>
      <div className="grid">
        {metrics.map((m) => (
          <div className="card" key={m.id}>
            <div className="label">{m.label}</div>
            <div className="value">{m.value.toLocaleString()}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
