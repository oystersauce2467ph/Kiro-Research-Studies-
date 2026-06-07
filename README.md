# Kiro Research Studies

A live, high-converting dashboard website with an extendable newsfeed — powered by:

- 🟦 **Vercel** — hosts the live site (Next.js 14, App Router)
- 🟩 **Supabase** — backend SQL database with live updates
- 🟧 **Sanity** — admin panel for content (images, videos, newsfeed posts)

---

## 🚀 Quick Start

**New here? Start with the [📘 User Manual](./USER_MANUAL.md)** — a beginner-friendly,
step-by-step guide to getting everything online.

The short version:

1. **Database** — In [Supabase](https://supabase.com), run the SQL in
   [`supabase/migrations/0001_init_metrics.sql`](./supabase/migrations/0001_init_metrics.sql),
   then copy your **Project URL** + **anon key**.
2. **Content** — In [Sanity](https://sanity.io), create a project and copy your **Project ID**.
3. **Deploy** — In [Vercel](https://vercel.com), import this repo, add the 5 environment
   variables (see below), and click **Deploy**.

### Run locally

```bash
npm install      # download dependencies
npm run dev      # start the site at http://localhost:3000
npm run studio   # open the Sanity admin panel
```

### Environment variables

Copy [`.env.example`](./.env.example) to `.env.local` and fill in your values:

| Variable | Source |
|----------|--------|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase → Settings → API |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase → Settings → API |
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Sanity → project settings |
| `NEXT_PUBLIC_SANITY_DATASET` | usually `production` |
| `NEXT_PUBLIC_SANITY_API_VERSION` | e.g. `2024-01-01` |

> Never commit `.env.local` — it's already in `.gitignore`.

---

## 📂 Project structure

```
app/                     Next.js pages & API
  page.tsx               Dashboard (hero + metrics + newsfeed)
  api/posts/route.ts     Paginated newsfeed endpoint
components/Newsfeed.tsx  "Load more" newsfeed (extends down)
lib/supabase.ts          Supabase (SQL) client
lib/sanity.ts            Sanity (content) client + query
sanity/                  Sanity Studio config & schema
supabase/migrations/     Database schema (SQL)
.kiro/settings/          MCP connector config + setup guide
```

---

## 🔌 Kiro & MCP connectors

This repo is pre-configured for 3 Kiro MCP connectors (Vercel, Supabase, Sanity).
See [`.kiro/settings/MCP_SETUP.md`](./.kiro/settings/MCP_SETUP.md) to activate them.

## 📝 Project memory

- [`AGENTS.md`](./AGENTS.md) — project context & decision log
- [`SKILLS.md`](./SKILLS.md) — skills, tools & MCP reference
