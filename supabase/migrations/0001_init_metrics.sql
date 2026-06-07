-- Kiro Research Studies — initial database schema
-- Run this in your Supabase project: SQL Editor -> New query -> paste -> Run.
-- (Or use the Supabase MCP connector / CLI to apply it.)

-- 1. Metrics table (powers the dashboard cards)
create table if not exists public.metrics (
  id          bigint generated always as identity primary key,
  label       text        not null,
  value       numeric     not null default 0,
  updated_at  timestamptz not null default now()
);

-- 2. Keep updated_at fresh on every change
create or replace function public.set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists trg_metrics_updated_at on public.metrics;
create trigger trg_metrics_updated_at
  before update on public.metrics
  for each row execute function public.set_updated_at();

-- 3. Row Level Security: allow public (anon) read-only access
alter table public.metrics enable row level security;

drop policy if exists "Public read metrics" on public.metrics;
create policy "Public read metrics"
  on public.metrics
  for select
  to anon, authenticated
  using (true);

-- 4. Enable realtime so dashboard updates live when values change
alter publication supabase_realtime add table public.metrics;

-- 5. Seed some starter data (safe to re-run; only inserts if table is empty)
insert into public.metrics (label, value)
select * from (values
  ('Visitors', 1280),
  ('Signups', 342),
  ('Conversion %', 26),
  ('Revenue', 8650)
) as seed(label, value)
where not exists (select 1 from public.metrics);
