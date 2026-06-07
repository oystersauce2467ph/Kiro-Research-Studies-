# AGENTS.md

> Persistent memory file for AI agents (Kiro) working on **Kiro-Research-Studies-**.
> This file records project context, decisions, and a running log of our work together.
> **Keep this file up to date whenever new changes are made.**

---

## Project Overview

- **Repository:** `oystersauce2467ph/Kiro-Research-Studies-`
- **Purpose:** Research studies workspace (details to be expanded as the project grows).
- **Status:** Early setup — establishing project structure and memory.

## Tech Stack

_To be defined. Update this section when languages, frameworks, or tools are chosen._

## Project Structure

```
Kiro-Research-Studies-/
├── README.md       # Project title / overview
├── AGENTS.md       # This file — agent memory & context
└── SKILLS.md       # Skills & capabilities reference
```

## Conventions & Preferences

_Record coding style, naming conventions, branching strategy, and other team preferences here as they are decided._

---

## Conversation Memory / Changelog

A running log of meaningful changes and decisions. Add a new dated entry whenever
something changes so future sessions have full context.

### 2026-06-07
- Created `AGENTS.md` and `SKILLS.md` to maintain persistent memory across chat sessions.
- Established the rule: **these files must be updated whenever new changes are made** to the project.
- Discussed the **Kiro Dev Pro plan** (~$20/month, 1,000 credits/month):
  - Credits act like "fuel" for the AI; charged fractionally (0.01 increments), so simple tasks cost <1 credit and complex tasks cost more.
  - Pro plan includes: Vibe mode, Spec mode, autonomous agent, GitHub integration, steering/memory files, MCP tools, and web access.
  - Higher tiers exist: Pro+ ($40 / 2,000 credits), Power ($200 / 10,000 credits).
- Defined **IDE (Integrated Development Environment)**: an all-in-one app for writing software (editor, file explorer, run/debug, terminal, smart help). Examples: VS Code, IntelliJ, PyCharm.
- Explained how **IDE + Kiro + GitHub** work together:
  - IDE = workspace where code is edited.
  - Kiro = AI teammate that writes/fixes code and connects to GitHub (clone, branch, commit, open PRs).
  - GitHub = cloud storage with version history for storing/sharing code.
- Noted current environment is **Kiro Web** (browser-based, no file sidebar/editor); the Kiro desktop IDE provides the full local file-editing experience.
- Discussed the **10 most useful beginner MCP connectors** (see `SKILLS.md` → MCP Connectors for full pros/cons/conflicts): Filesystem, GitHub, Fetch, Brave Search, Context7, PostgreSQL/SQLite, Memory, Sequential Thinking, Playwright, and team tools (Slack/Notion/Linear).
- Key guidance: **start with ~3 connectors** (code = GitHub, knowledge = Context7/Brave Search, specialized = DB/files); too many causes token bloat and tool confusion.
- Recommended starter set for this project: **GitHub** (code), **Context7 or Brave Search** (knowledge), **Filesystem** (local editing on desktop IDE).
- Defined the **project's intended 3-connector stack** matched to specific roles:
  - **Frontend (live site + high-converting, extendable dashboard) → Vercel MCP** (`https://mcp.vercel.com`, OAuth). Alt: Netlify.
  - **Backend SQL database (continuously updating) → Supabase MCP** (`@supabase/mcp-server-supabase`, Postgres + realtime). Alt: Neon.
  - **Admin / content (pictures, videos, newsfeed) → Sanity MCP** (`https://mcp.sanity.io/mcp`, headless CMS, OAuth). Alt: Strapi / Contentful.
- Architecture: Sanity (content) + Supabase (live data) feed → Vercel (live frontend) → users. Complementary, not conflicting.
- Overlap rules: editorial media in Sanity, app/user data in Supabase; pick Vercel OR Netlify; Supabase for app-user auth, Sanity only for editor auth.
- **Added `.kiro/settings/mcp.json`** to the repo pre-configuring all 3 connectors, plus `.kiro/settings/MCP_SETUP.md` with auth steps. Connectors still require the user's own accounts + OAuth/token to activate.

---

## How to Use This File

- **At the start of a session:** Read this file to recall project context and prior decisions.
- **When making changes:** Add a dated entry to the *Conversation Memory / Changelog* section.
- **When a decision is made:** Update the relevant section (Tech Stack, Conventions, etc.).
