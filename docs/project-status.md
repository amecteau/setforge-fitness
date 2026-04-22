# SetForge Fitness Website — Project Status

> Use `/status` to get a quick summary, `/next` for the next task, `/done` to mark complete.

---

## Current Phase: Phase 0 — Project Harness Documentation

**Exit criteria**: All harness docs written; `.claude/` structure matches AGENTS.md spec; team can orient from docs alone.

| # | Task | Status | Notes |
|---|---|---|---|
| 0.1 | Write `CLAUDE.md` (auto-loaded entry point) | ✅ | Points to AGENTS.md; quick reference for every session |
| 0.2a | Write `.claude/AGENTS.md` | ✅ | Full architecture rules, commands, skills documented |
| 0.2 | Write `.claude/settings.json` | ✅ | Permissions allowlist configured |
| 0.3 | Write `.claude/commands/status.md` | ✅ | |
| 0.4 | Write `.claude/commands/next.md` | ✅ | |
| 0.5 | Write `.claude/commands/done.md` | ✅ | |
| 0.6 | Write `.claude/commands/review.md` | ✅ | 13-point convention checklist |
| 0.7 | Write `.claude/commands/test.md` | ✅ | |
| 0.8 | Write `.claude/commands/deploy.md` | ✅ | GitHub Pages readiness check |
| 0.9 | Write `docs/ui-spec.md` | ✅ | Full section-by-section design spec |
| 0.10 | Write `docs/project-status.md` | ✅ | This file |
| 0.11 | Write `docs/architecture.md` | ✅ | Mermaid diagrams |
| 0.12 | Write `docs/content.md` | ✅ | All marketing copy |

---

## Phase 1 — Scaffold & Configuration

**Exit criteria**: `npm run dev` starts; `npm run build` succeeds; GitHub Pages base path works.

| # | Task | Status | Notes |
|---|---|---|---|
| 1.1 | Scaffold SvelteKit with `npm create svelte@latest` | ⬜ | TypeScript, Tailwind v4, ESLint |
| 1.2 | Configure `adapter-static` in `svelte.config.js` | ⬜ | Base path `/setforge-fitness` when `GITHUB_ACTIONS=true` |
| 1.3 | Create `static/.nojekyll` | ⬜ | Required for GitHub Pages `_app/` |
| 1.4 | Create `src/lib/site.config.ts` | ⬜ | All content, download links, metadata |
| 1.5 | Update `src/app.html` with OG tags and meta | ⬜ | Title, description, OG image |
| 1.6 | Write global `src/app.css` with design tokens | ⬜ | CSS vars, @keyframes, Tailwind base |

---

## Phase 2 — Shared Foundation

**Exit criteria**: Shared components render in isolation; icons available as Svelte components.

| # | Task | Status | Notes |
|---|---|---|---|
| 2.1 | Create `Button.svelte` shared component | ⬜ | Primary and secondary variants |
| 2.2 | Create SVG icon components | ⬜ | Barbell, Shield, Device, Download, GitHub icons |
| 2.3 | Write Vitest setup and Button smoke test | ⬜ | Validates test harness works |

---

## Phase 3 — Feature Sections

**Exit criteria**: All 6 sections render correctly at mobile (375px), tablet (768px), and desktop (1280px).

| # | Task | Status | Notes |
|---|---|---|---|
| 3.1 | Build Hero section | ⬜ | Logo, headline, sub-headline, 2 CTA buttons |
| 3.2 | Build Features grid section | ⬜ | 6 feature cards, 3-col desktop / 1-col mobile |
| 3.3 | Build Screenshots section | ⬜ | CSS device frames, 3 screens |
| 3.4 | Build Download section | ⬜ | Windows + Android CTAs, GitHub link |
| 3.5 | Build Privacy section | ⬜ | 3-col icon grid |
| 3.6 | Build Footer | ⬜ | Links, version, copyright |

---

## Phase 4 — Routing & Layout

**Exit criteria**: Single-page layout renders all sections in order with smooth scroll.

| # | Task | Status | Notes |
|---|---|---|---|
| 4.1 | Write `+layout.svelte` | ⬜ | Scroll behavior, minimal shell |
| 4.2 | Write `+page.svelte` | ⬜ | Compose all 6 feature sections |
| 4.3 | Add scroll-reveal animation | ⬜ | Intersection Observer, respects reduced motion |

---

## Phase 5 — CI/CD

**Exit criteria**: PRs trigger checks; push to main deploys to GitHub Pages automatically.

| # | Task | Status | Notes |
|---|---|---|---|
| 5.1 | Write `.github/workflows/ci.yml` | ⬜ | On PR: svelte-check, lint, vitest, build |
| 5.2 | Write `.github/workflows/deploy.yml` | ⬜ | On push to main: build → gh-pages branch |
| 5.3 | Enable GitHub Pages in repo settings | ⬜ | Source: `gh-pages` branch, root `/` |

---

## Phase 6 — Polish & Launch

**Exit criteria**: Lighthouse 90+ performance, 95+ accessibility; all real screenshots added; site live.

| # | Task | Status | Notes |
|---|---|---|---|
| 6.1 | Add real app screenshots to `static/screenshots/` | ⬜ | Manual: capture from app |
| 6.2 | Run Lighthouse audit | ⬜ | Performance 90+, Accessibility 95+ |
| 6.3 | Cross-browser smoke test | ⬜ | Chrome, Firefox, Safari, mobile Chrome |
| 6.4 | Run `/deploy` check and push to main | ⬜ | Verify live URL |
| 6.5 | Run `/review` security check via `security-review` skill | ⬜ | Before public share |

---

## Completed Milestones

| Milestone | Date |
|---|---|
| Phase 0 complete — harness documentation written | 2026-04-21 |

---

## Steering Log

> Record any significant decisions about the harness, architecture, or tooling here. Include what was decided and why.

| Date | Decision | Reason |
|---|---|---|
| 2026-04-21 | Chose SvelteKit + adapter-static over plain HTML | Mirrors app tech stack; Tailwind v4 reuse; component model scales for future pages |
| 2026-04-21 | Single-page layout (not multi-page) | Promotional sites convert better with one scroll journey; simpler GitHub Pages config |
| 2026-04-21 | All content in `site.config.ts` | Updating links/copy should never require touching component files |
| 2026-04-21 | Dark-first design | Matches app aesthetic; gym context (variable lighting); avoids glare |
| 2026-04-21 | No JS animation libraries | CSS-only animations keep bundle small and respect reduced-motion trivially |
| 2026-04-21 | CLAUDE.md + AGENTS.md dual-file pattern | CLAUDE.md auto-loads every session (entry point + quick ref); AGENTS.md is the full authoritative architecture guide. Keeps the auto-loaded file short while preserving detailed rules separately |
