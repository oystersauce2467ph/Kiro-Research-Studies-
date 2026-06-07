# SKILLS.md

> Skills & capabilities reference for the **Kiro-Research-Studies-** project.
> Tracks the techniques, tools, and know-how relevant to this repository.
> **Keep this file up to date whenever new skills, tools, or workflows are added.**

---

## Purpose

This file captures reusable skills and knowledge so that any agent or contributor
can quickly understand *how* work gets done in this project.

## Skills Catalog

| Skill | Description | Status |
|-------|-------------|--------|
| Project memory keeping | Maintain `AGENTS.md` and `SKILLS.md` as living memory of the project | Active |

_Add new rows as skills are introduced (e.g., data analysis, specific frameworks, build/test workflows)._

## Tools & Workflows

_Document key commands, scripts, and workflows here as the project develops._

- _Build:_ TBD
- _Test:_ TBD
- _Run:_ TBD

---

## MCP Connectors (Beginner Guide)

> MCP (Model Context Protocol) connectors are "plugs" that let Kiro reach external
> tools — files, GitHub, databases, the web, etc. Think of them as USB ports for the AI.

**Beginner rule:** start with ~3 connectors. Too many causes slower responses, higher
token use, and tool confusion.

| # | Connector | Use For | Pros | Cons | Conflicts / Overlaps |
|---|-----------|---------|------|------|----------------------|
| 1 | Filesystem | Read/write local project files | Essential, easy, secure (folder-confined) | Risky if misconfigured; local only | Kiro built-in file tools; Desktop Commander |
| 2 | GitHub | Repos, issues, PRs, commits | Automates real dev work | Needs token; rate limits | Git MCP; Kiro native GitHub tools |
| 3 | Fetch | Read a web page | Simple, no API key | One URL at a time; no login pages | Brave Search; Kiro built-in fetch |
| 4 | Brave Search | Live web search | Current info; easy | Needs API key; quota limits | Exa/Tavily; built-in web search |
| 5 | Context7 | Up-to-date library docs | Fewer outdated suggestions | Documented libs only; extra tokens | Brave Search/Fetch for lookups |
| 6 | PostgreSQL / SQLite | Query/inspect databases | Plain-English data access | Setup intimidating; write risk | Don't run multiple DB servers at once |
| 7 | Memory | Persistent cross-session memory | Remembers facts/prefs | Can get messy | Steering files / `AGENTS.md` |
| 8 | Sequential Thinking | Step-by-step reasoning | Better on complex tasks | Slower; token-heavy | Kiro Spec mode |
| 9 | Playwright | Browser automation | Powerful for testing/scraping | Heavy setup/resources | Fetch (for simple reads) |
| 10 | Slack / Notion / Linear | Team chat, docs, tickets | Brings team context in | Permissions; data exposure | Linear vs GitHub Issues |

**Recommended starter set for this project:**
- **Code:** GitHub
- **Knowledge:** Context7 or Brave Search
- **Files:** Filesystem (desktop IDE)

**Conflict patterns to avoid:**
- Search overlap: Brave Search + Exa + Tavily + Fetch → keep one.
- Memory overlap: Memory MCP + steering/`AGENTS.md` → files already cover this.
- Repo/task overlap: GitHub + Git + Linear → pick a primary source of truth.

> Note: On **Kiro Web** MCP is configured via Powers & MCP; the desktop IDE uses a JSON config listing each server.

### This Project's Configured Stack (`.kiro/settings/mcp.json`)

| Role | Connector | Endpoint / Package | Auth |
|------|-----------|--------------------|------|
| Frontend (live dashboard site) | **Vercel** | `https://mcp.vercel.com` | OAuth |
| Backend SQL DB (live updates) | **Supabase** | `@supabase/mcp-server-supabase` | Personal Access Token |
| Admin / content (images, video, newsfeed) | **Sanity** | `https://mcp.sanity.io/mcp` | OAuth |

- Setup steps: see `.kiro/settings/MCP_SETUP.md`.
- Data ownership rule: editorial media → Sanity; app/user data → Supabase.
- The config defines the connectors; each must be authenticated with the user's own account before use. Keep real tokens out of Git.

---

## Changelog

### 2026-06-07
- Created `SKILLS.md` to track project skills, tools, and workflows.
- Initial skill recorded: maintaining persistent project memory.
- Added **MCP Connectors (Beginner Guide)** section: 10 common connectors with pros/cons/conflicts and a recommended starter set.
- Added **This Project's Configured Stack** section + `.kiro/settings/mcp.json` (Vercel + Supabase + Sanity) and `.kiro/settings/MCP_SETUP.md`.
