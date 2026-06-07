# 📘 User Manual — Activating Your Site with the 3 MCP Connectors

> Written for beginners. Follow the steps in order. You do **not** need to be a
> developer — just copy, paste, and click. Estimated time: ~30–45 minutes.

---

## 🧩 What you're building

A live website with three parts working together:

| Part | Tool (MCP connector) | What it does for you |
|------|----------------------|----------------------|
| 🟦 **Frontend** | **Vercel** | Puts your website live on the internet |
| 🟩 **Database** | **Supabase** | Stores live data (the dashboard numbers) |
| 🟧 **Admin / content** | **Sanity** | Where you add pictures, videos, and newsfeed posts |

```
   You edit content        Data updates
   in Sanity Studio         in Supabase
          │                      │
          ▼                      ▼
        ┌──────────────────────────┐
        │   Your live site (Vercel) │
        └──────────────────────────┘
                    │
                    ▼
                Visitors
```

---

## ✅ Before you start (one-time)

1. A **GitHub account** (you already have this — the project lives there).
2. Create **free accounts** at:
   - Vercel → https://vercel.com  (sign up with GitHub)
   - Supabase → https://supabase.com  (sign up with GitHub)
   - Sanity → https://sanity.io  (sign up with GitHub)
3. Install **Node.js** (version 18 or newer) → https://nodejs.org  (only needed to run things on your own computer).

> 💡 Tip: signing up with GitHub everywhere keeps logins simple.

---

## STEP 1 — 🟩 Set up the database (Supabase)

1. Go to https://supabase.com → **New project**. Give it a name, set a password, pick a region close to you.
2. Wait ~2 minutes for it to finish creating.
3. In the left menu open **SQL Editor** → **New query**.
4. Open the file `supabase/migrations/0001_init_metrics.sql` from this project, copy **all** of it, paste it into the editor, and click **Run**.
   - This creates the `metrics` table, turns on live updates, and adds sample numbers.
5. Get your keys: left menu → **Project Settings → API**. Copy these two values:
   - **Project URL**
   - **anon public** key

Keep these two handy for Step 4. ✅

---

## STEP 2 — 🟧 Set up the admin / content panel (Sanity)

1. Go to https://sanity.io → **Create new project**. Name it, and keep the dataset name as **production**.
2. Find your **Project ID**: it's shown in the project's **API / Settings** page (a short code like `ab12cd34`).
3. (Optional, to add content from your computer) In a terminal, inside this project folder, run:
   ```bash
   npm install
   npm run studio
   ```
   This opens **Sanity Studio** in your browser — your admin panel. Here you can add **Posts** with a title, image, video URL, and text. Click **Publish** on each one.

Keep your **Project ID** handy for Step 4. ✅

---

## STEP 3 — 🟦 Put the site online (Vercel)

1. Go to https://vercel.com → **Add New… → Project**.
2. Choose to **Import** your GitHub repo `Kiro-Research-Studies-`.
3. Vercel auto-detects Next.js — don't change the build settings.
4. Before clicking **Deploy**, open **Environment Variables** and add the values from Steps 1 & 2 (see the exact names in Step 4 below).
5. Click **Deploy**. After ~1 minute you'll get a live URL like `your-project.vercel.app`. 🎉

> Every time changes are pushed to GitHub, Vercel automatically re-deploys. No manual work.

---

## STEP 4 — 🔑 The environment variables (the "keys")

These connect your site to Supabase and Sanity. Add them in **two places**:
**(A)** on Vercel (Settings → Environment Variables), and **(B)** locally in a file
named `.env.local` (copy `.env.example` and fill it in).

| Variable name | Where to get it | Example |
|---------------|-----------------|---------|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase → Settings → API → Project URL | `https://abcd.supabase.co` |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase → Settings → API → anon public | `eyJhbGci...` |
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Sanity → project settings | `ab12cd34` |
| `NEXT_PUBLIC_SANITY_DATASET` | usually just `production` | `production` |
| `NEXT_PUBLIC_SANITY_API_VERSION` | leave as the default date | `2024-01-01` |

> ⚠️ Never share or commit these into Git. The `.gitignore` already blocks `.env.local`.

After adding variables on Vercel, click **Redeploy** so they take effect.

---

## STEP 5 — 🔌 Connect the 3 MCP connectors to Kiro (optional but powerful)

This lets **Kiro** manage your site, database, and content by chat. The connectors
are already defined in `.kiro/settings/mcp.json`. You just authenticate them:

| Connector | How to activate |
|-----------|-----------------|
| **Vercel** | First time Kiro uses it, a browser window opens — log in and approve (OAuth). |
| **Sanity** | Same — a browser login opens, approve it (OAuth). |
| **Supabase** | Create a token: Supabase → Account → **Access Tokens → New Token**. Put it in your environment as `SUPABASE_ACCESS_TOKEN` (don't paste real tokens into Git). |

See `.kiro/settings/MCP_SETUP.md` for the detailed version.

> 📝 In **Kiro Web** (browser), add these through the Powers & MCP panel using the
> same details. In the **Kiro desktop IDE**, the `mcp.json` file is read automatically.

---

## ▶️ Running it on your own computer (to preview before going live)

```bash
npm install        # one time — downloads everything
npm run dev        # starts the site locally
```
Then open the local address it prints (usually `http://localhost:3000`).

To open the content admin panel:
```bash
npm run studio
```

---

## 🧪 How to check it's working

- **Site loads** with a hero banner and four metric cards → frontend ✅
- **Metric numbers** match what's in your Supabase `metrics` table → database ✅
- **Newsfeed shows posts** you published in Sanity, and **"Load more"** brings older ones → content ✅
- Change a number in Supabase → the dashboard reflects it → live updates ✅

---

## ❓ Common beginner problems

| Problem | Fix |
|--------|-----|
| Cards all show `0` | Supabase variables missing/wrong, or the SQL wasn't run. Re-check Step 1 & 4. |
| Newsfeed is empty | No published posts in Sanity, or the Project ID is wrong. Add a post and check Step 2 & 4. |
| Changes not showing online | On Vercel, click **Redeploy** after editing environment variables. |
| `npm` command not found | Install Node.js (Step 0) and reopen your terminal. |

---

## 🗺️ Quick recap

1. **Supabase** → run the SQL, copy URL + anon key.
2. **Sanity** → create project, copy Project ID, add posts.
3. **Vercel** → import repo, add the 5 environment variables, deploy.
4. (Optional) **Kiro MCP** → log in to each connector to manage everything by chat.

That's it — your live, content-managed, auto-updating dashboard is online. 🚀
