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
| 1.1 | Scaffold SvelteKit with `npx sv create` | ✅ | Minimal, TypeScript, ESLint, Prettier, Vitest, Playwright, Tailwind v4 + typography |
| 1.2 | Configure `adapter-static` in `svelte.config.js` | ✅ | Base path `/setforge-fitness` when `GITHUB_ACTIONS=true`; image 404s warn not error |
| 1.3 | Create `static/.nojekyll` | ✅ | Required for GitHub Pages `_app/` |
| 1.4 | Create `src/lib/site.config.ts` | ✅ | All content, download links, metadata; imports `base` from `$app/paths` |
| 1.5 | Update `src/app.html` with OG tags and meta | ✅ | Title, description, OG + Twitter card meta |
| 1.6 | Write global `src/app.css` with design tokens | ✅ | CSS vars, @keyframes fade-in/slide-up, reduced-motion, Tailwind base |

---

## Phase 2 — Shared Foundation

**Exit criteria**: Shared components render in isolation; icons available as Svelte components.

| # | Task | Status | Notes |
|---|---|---|---|
| 2.1 | Create `Button.svelte` shared component | ✅ | Primary and secondary variants; renders as `<a>`; external prop wires rel/target |
| 2.2 | Create SVG icon components | ✅ | Shield, Tap, History, FontSize, Dumbbell, Device, Lock, EyeOff, Code, Download, GitHub, Windows, Android, Apple (placeholder) |
| 2.3 | Write Vitest setup and Button smoke test | ✅ | `.svelte.spec.ts` written; runs in browser mode — requires task 5.4 (playwright install) |

---

## Phase 3 — Feature Sections

**Exit criteria**: All 6 sections render correctly at mobile (375px), tablet (768px), and desktop (1280px).

| # | Task | Status | Notes |
|---|---|---|---|
| 3.1 | Build Hero section | ✅ | Icon, badge, headline, sub-headline, 2 CTAs, GitHub link; fade-in animation |
| 3.2 | Build Features grid section | ✅ | 6 cards, 3-col desktop / 1-col mobile; dynamic icon map; hover border accent |
| 3.3 | Build Screenshots section | ✅ | CSS device frames, placeholder state, 3 screens |
| 3.4 | Build Download section | ✅ | Windows + Android CTAs, Apple coming-soon card, GitHub link |
| 3.5 | Build Privacy section | ✅ | 3-col icon grid, open-card style |
| 3.6 | Build Footer | ✅ | Icon + name, GitHub/Issues links, copyright |

---

## Phase 4 — Routing & Layout

**Exit criteria**: Single-page layout renders all sections in order with smooth scroll.

| # | Task | Status | Notes |
|---|---|---|---|
| 4.1 | Write `+layout.svelte` | ✅ | Skip-to-content link, app.css import |
| 4.2 | Write `+page.svelte` | ✅ | All 6 sections composed, iconSrc from site.config.ts |
| 4.3 | Add scroll-reveal animation | ✅ | Intersection Observer action in shared/actions/reveal.ts; respects reduced motion |

---

## Phase 5 — CI/CD

**Exit criteria**: PRs trigger checks; push to main deploys to GitHub Pages automatically.

| # | Task | Status | Notes |
|---|---|---|---|
| 5.1 | Write `.github/workflows/ci.yml` | ✅ | On PR: type-check, lint, unit tests, build; skips Playwright browser download |
| 5.2 | Write `.github/workflows/deploy.yml` | ✅ | On push to main: build → gh-pages branch via peaceiris/actions-gh-pages@v3 |
| 5.3 | Enable GitHub Pages in repo settings | ⬜ | Source: `gh-pages` branch, root `/` |
| 5.4 | Install Playwright browsers and write first E2E smoke test | ⬜ | `npx playwright install --with-deps`; deferred from scaffold; wire into ci.yml |

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

## Manual Steps & Next Actions

> Steps that require human action outside the codebase (GitHub UI, terminal commands, etc.)

### Step 1 — Push the current branch to GitHub (prerequisite for everything below)
```
git add .
git commit -m "Phase 3–5: all sections, routing, CI/CD workflows"
git push origin main
```
Pushing to `main` will trigger `deploy.yml` for the first time. The `gh-pages` branch will be created automatically by `peaceiris/actions-gh-pages`.

---

### Step 2 — Enable GitHub Pages in repo settings (task 5.3)
1. Go to `https://github.com/amecteau/setforge-fitness` → **Settings** → **Pages**
2. Under **Build and deployment**, set **Source** to `Deploy from a branch`
3. Set **Branch** to `gh-pages`, folder `/` (root)
4. Click **Save**

The live URL will be: `https://amecteau.github.io/setforge-fitness`

> Note: The `gh-pages` branch must exist before you can select it. It is created on the first successful run of `deploy.yml`, so push to `main` first (Step 1), wait for the Action to finish, then configure Pages.

---

### Step 3 — Install Playwright browsers locally (task 5.4, local only)
Run once in the project directory to enable local E2E testing:
```
npx playwright install --with-deps
```
This downloads Chromium, Firefox, and WebKit browser binaries (~300 MB). It is a one-time setup. CI handles its own browser install via the Playwright GitHub Action (to be added when task 5.4 is coded).

---

### Step 4 — Add real screenshots (task 6.1)
Capture three screens from the SetForge app and save as:
- `static/screenshots/counter.png` — the rep counter screen
- `static/screenshots/history.png` — the workout history screen
- `static/screenshots/exercises.png` — the exercise library screen

Recommended capture size: portrait phone ratio (~390×844 px). Once added, the placeholder cards in the Screenshots section are replaced automatically — no code changes needed.

---

### Step 5 — Add the app icon (already done partially)
`static/icon.png` and `static/favicon.png` have been added from the Tauri icons. If you want a higher-resolution icon (e.g. 512×512 for OG image), copy `src-tauri/icons/128x128@2x.png` or generate a 512px version and save as `static/og-image.png`.

---

## Completed Milestones

| Milestone | Date |
|---|---|
| Phase 0 complete — harness documentation written | 2026-04-21 |
| Phase 1 complete — scaffold, config, site.config.ts, app.html, app.css | 2026-04-22 |
| Phase 2 complete — Button, 11 SVG icons, Vitest smoke test | 2026-04-22 |
| Phase 3 complete — Hero, Features, Screenshots, Download, Privacy, Footer | 2026-04-22 |
| Phase 4 complete — layout shell, page composition, scroll-reveal action | 2026-04-22 |

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
| 2026-04-22 | Scaffold CLI is `npx sv create` (not `npm create svelte@latest`) | SvelteKit team migrated to the `sv` package; `npm create svelte@latest` is deprecated |
| 2026-04-22 | Minimal template (not Skeleton) | Skeleton template no longer exists in `sv create`; Minimal gives a bare `+page.svelte` with no demo content |
| 2026-04-22 | TypeScript, ESLint, Prettier selected at scaffold | TypeScript for type safety per AGENTS.md rules; ESLint + Prettier for consistent style |
| 2026-04-22 | Vitest selected at scaffold | Unit tests for shared components (Button smoke test in Phase 2) |
| 2026-04-22 | Playwright selected at scaffold | E2E smoke tests for page load, CTA visibility, responsive breakpoints (375px / 1280px); runs in CI via GitHub Actions using official Playwright action which handles headless browser install |
| 2026-04-22 | Tailwind CSS selected at scaffold with typography plugin only | `sv create` now offers Tailwind v4 natively, replacing planned manual install; only typography plugin needed — forms and aspect-ratio plugins not required for a promo site |
| 2026-04-22 | npm as package manager | Consistent with setforge-app; no monorepo tooling needed |
