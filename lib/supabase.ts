import { createClient, type SupabaseClient } from "@supabase/supabase-js";

// Backend SQL database (Postgres) with realtime updates.
// Created lazily so the app builds/runs before credentials are added.
// getSupabase() returns null until env vars are set.
let client: SupabaseClient | null = null;

export function getSupabase(): SupabaseClient | null {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !anonKey) return null;

  if (!client) {
    client = createClient(url, anonKey);
  }
  return client;
}

export type Metric = {
  id: number;
  label: string;
  value: number;
  updated_at: string;
};
