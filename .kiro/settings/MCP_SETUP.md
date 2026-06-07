# MCP Setup Guide

This project is pre-configured with **3 MCP connectors** in `mcp.json`. The config
file *defines* the connectors, but each one needs **your account + authentication**
before it will work. Follow the steps below.

> ⚠️ The config alone does not give Kiro access to your accounts. You must complete
> the auth step for each connector. Never commit real tokens to Git.

---

## The 3 Connectors

| Role | Connector | Endpoint / Package | Auth |
|------|-----------|--------------------|------|
| Frontend (live site / dashboard) | **Vercel** | `https://mcp.vercel.com` (remote) | OAuth (browser login) |
| Backend SQL database (live updates) | **Supabase** | `@supabase/mcp-server-supabase` (npx) | Personal Access Token |
| Admin / content (images, video, newsfeed) | **Sanity** | `https://mcp.sanity.io/mcp` (remote) | OAuth (browser login) |

---

## Setup Steps

### 1. Vercel (frontend)
1. Create a free account at https://vercel.com and connect your GitHub repo.
2. On first use, Kiro will open an OAuth login in your browser — approve access.
3. No token needed in the config (OAuth handles it).

### 2. Supabase (database)
1. Create a project at https://supabase.com.
2. Go to **Account → Access Tokens → New Token**, copy it (shown once).
3. **Recommended:** set it as an environment variable instead of hard-coding:
   - `export SUPABASE_ACCESS_TOKEN=sbp_xxx` (macOS/Linux)
   - Then remove the placeholder value in `mcp.json` and leave `env` empty.
4. If you must put it in `mcp.json`, replace `REPLACE_WITH_YOUR_SUPABASE_PERSONAL_ACCESS_TOKEN`
   — but do **NOT** commit that change to Git.

### 3. Sanity (admin/content)
1. Create a project at https://sanity.io.
2. On first use, Kiro opens an OAuth login — approve access.
3. No token needed in the config (OAuth handles it).

---

## Notes

- **Kiro desktop IDE:** reads this `.kiro/settings/mcp.json` automatically. Reconnect
  servers from the MCP panel after editing.
- **Kiro Web:** MCP is managed via the Powers & MCP interface; use the same server
  details above when adding them.
- `mcp-remote` is a small proxy that lets local MCP clients talk to remote OAuth
  servers (Vercel, Sanity). It is fetched automatically by `npx`.

## Security
- Keep real tokens out of version control (use environment variables).
- Consider adding `.kiro/settings/mcp.json` to `.gitignore` if you ever store a real
  token in it.
