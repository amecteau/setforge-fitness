# SetForge Fitness — Claude Code Agent Instructions

You are working on the **promotional website** for SetForge, a privacy-first gym rep counter app built with Tauri v2 + SvelteKit. This website is a static SvelteKit site deployed to GitHub Pages. Read this entire file before making any changes.

---

## Project Overview

A professional, app-store-quality promotional website for SetForge — a desktop (Windows) and mobile (Android) gym rep counter application. The site is a single-page layout with smooth-scroll sections, built with SvelteKit + Tailwind CSS v4, and deployed to GitHub Pages via GitHub Actions.

**Live URL**: `https://amecteau.github.io/setforge-fitness`
**App repo**: `https://github.com/amecteau/setforge-app`

### Key Reference Files

- **docs/ui-spec.md** — What every section should look like: layout, content, interactions, responsive breakpoints, component structure. Read before building any UI section.
- **docs/project-status.md** — Where we are: current phase, task-by-task progress, and what's next. Read when the user asks for "status" or "next". Update after completing tasks.
- **docs/content.md** — All marketing copy: headlines, body text, feature descriptions, CTA labels. The single source of truth for copy. Never hardcode copy in components — always derive from `src/lib/site.config.ts`.
- **docs/architecture.md** — Mermaid diagrams of component hierarchy and data flow.

### Slash Commands

- `/status` — Show current phase and progress summary
- `/next` — Show the next task to work on and what it involves
- `/done` — Mark a task as complete and update project-status.md
- `/review` — Run all checks and verify harness conventions
- `/test` — Run the full test suite
- `/deploy` — Build and verify deployment readiness

When updating `docs/project-status.md`, change the task status emoji (⬜→🔄→✅), add notes, and update the Steering Log if any harness files were changed.

### Skills Available

| Skill | When to Use |
|---|---|
| `update-config` | Adding/changing permissions in `.claude/settings.json` or configuring hooks |
| `simplify` | After implementing a section — review for quality and reuse opportunities |
| `fewer-permission-prompts` | After first full build cycle — scan transcripts and tighten allowlist |
| `security-review` | Before first public deploy — scan for exposed keys, unsafe links |
| `review` | When opening a PR for a new section or content update |

---

## Architecture Rules

### Harness Philosophy

This site applies the same harness engineering concepts used in the SetForge app itself:

1. **Feature Folder Isolation** — each page section is a self-contained feature folder
2. **One-Way Dependency Flow** — routes → features → shared → config (never backwards)
3. **Configuration-Driven Content** — all copy/links in `site.config.ts`, never hardcoded in components
4. **Documentation-Driven** — spec and status docs are updated alongside code changes
5. **Type Safety** — strict TypeScript throughout; zero `any` tokens

### Feature Folder Structure

Each page section lives in its own isolated folder under `src/lib/features/`. A section folder contains only the component(s) for that section.

```
src/lib/features/
├── hero/
│   └── Hero.svelte
├── features-section/
│   └── FeaturesSection.svelte
├── screenshots/
│   └── Screenshots.svelte
├── download/
│   └── Download.svelte
├── privacy/
│   └── Privacy.svelte
└── footer/
    └── Footer.svelte
```

**Rule**: No section component may import from another section component. Shared logic lives in `src/lib/shared/`.

### One-Way Dependency Flow

```
src/routes/+page.svelte          ← composes sections
  ↓ imports
src/lib/features/[section]/      ← section components
  ↓ imports
src/lib/shared/                  ← reusable components, icons, utils
  ↓ imports
src/lib/site.config.ts           ← atomic content config (no imports)
```

Never import upward or sideways in this chain.

### site.config.ts — Single Source of Truth

All content, links, metadata, and download URLs live in `src/lib/site.config.ts`. Components receive this data as props or import from config — they never hardcode strings.

```typescript
// src/lib/site.config.ts
export const siteConfig = {
  appName: 'SetForge',
  tagline: 'Count Every Rep. Own Your Progress.',
  description: '...',
  githubRepo: 'https://github.com/amecteau/setforge-app',
  downloads: {
    windows: { url: '...', label: 'Download for Windows' },
    android: { url: '...', label: 'Get it on Android' },
  },
  features: [...],
  // etc.
} as const;
```

When download links or copy changes, only `site.config.ts` needs updating.

### TypeScript Rules

- `strict: true` in `tsconfig.json`
- Zero `any` tokens — use `unknown` if the type is genuinely unknown
- All exported functions have explicit return types
- No unused locals or parameters

### Styling Rules

- All sizing in `rem` (not `px`) except borders and `ring` widths
- Design tokens defined as CSS custom properties in `app.css`
- Tailwind utility classes preferred; custom CSS only for animations and complex layouts
- Dark-first design (dark mode is the primary, light mode secondary/future)
- Mobile-first responsive (`sm:`, `md:`, `lg:` breakpoints)

### Accessibility Rules

- All interactive elements have visible focus rings (`focus-visible:ring-2`)
- All images have `alt` attributes
- Semantic HTML: use `<section>`, `<nav>`, `<article>`, `<header>`, `<footer>`
- CTAs are `<a>` elements (external links), not `<button>` (buttons perform actions)
- Respect `prefers-reduced-motion` — disable animations when set

### Component Rules

- No business logic in section components — they render what they receive
- Props-first: components receive data via props, not by importing config directly
- `+page.svelte` is the only file allowed to import from `site.config.ts`
- All custom icons are Svelte components in `src/lib/shared/icons/`

---

## File Structure Reference

```
setforge-fitness/
├── .claude/
│   ├── AGENTS.md               ← this file
│   ├── settings.json           ← permissions allowlist
│   └── commands/               ← slash command definitions
│       ├── status.md
│       ├── next.md
│       ├── done.md
│       ├── review.md
│       ├── test.md
│       └── deploy.md
├── .github/
│   └── workflows/
│       ├── ci.yml              ← PR checks: test, lint, build
│       └── deploy.yml          ← push to main → deploy to gh-pages
├── docs/
│   ├── ui-spec.md              ← section-by-section design spec
│   ├── project-status.md       ← phase tracker + steering log
│   ├── architecture.md         ← Mermaid diagrams
│   └── content.md              ← all marketing copy (source of truth)
├── src/
│   ├── app.css                 ← global styles, CSS vars, @keyframes
│   ├── app.html                ← HTML shell, meta tags, OG tags
│   ├── lib/
│   │   ├── site.config.ts      ← all content, links, metadata
│   │   ├── features/           ← one folder per page section
│   │   └── shared/
│   │       ├── icons/          ← SVG icon components
│   │       └── components/
│   │           └── Button.svelte
│   └── routes/
│       ├── +layout.svelte      ← minimal shell (scroll, meta)
│       └── +page.svelte        ← composes all feature sections
├── static/
│   ├── .nojekyll               ← required for GitHub Pages _app/ dir
│   ├── favicon.png
│   ├── app-icon.svg            ← copied from setforge-app
│   └── screenshots/            ← actual app screenshots (added manually)
├── svelte.config.js
├── vite.config.ts
├── tsconfig.json
├── eslint.config.js
└── package.json
```

---

## GitHub Pages Configuration

- `svelte.config.js` uses `adapter-static`
- Base path: `/setforge-fitness` when `process.env.GITHUB_ACTIONS === 'true'`
- `static/.nojekyll` prevents GitHub from ignoring `_app/` folders
- Deploy target: `gh-pages` branch via `peaceiris/actions-gh-pages@v3`

---

## Design System

### Color Tokens

| Token | Value | Usage |
|---|---|---|
| `--color-bg` | `#0f172a` (slate-900) | Page background |
| `--color-surface` | `#1e293b` (slate-800) | Cards, nav |
| `--color-surface-2` | `#334155` (slate-700) | Hover states, dividers |
| `--color-accent` | `#3b82f6` (blue-500) | CTAs, highlights |
| `--color-accent-hover` | `#2563eb` (blue-600) | CTA hover |
| `--color-text` | `#f1f5f9` (slate-100) | Primary text |
| `--color-text-muted` | `#94a3b8` (slate-400) | Secondary text |
| `--color-success` | `#22c55e` (green-500) | Feature icons |
| `--color-border` | `#334155` (slate-700) | Subtle borders |

### Typography Scale

| Role | Tailwind Class | Notes |
|---|---|---|
| Hero headline | `text-5xl lg:text-7xl` | Bold, tight line height |
| Section headline | `text-3xl lg:text-4xl` | Semi-bold |
| Feature title | `text-xl` | Semi-bold |
| Body | `text-base` | Regular |
| Caption/label | `text-sm` | Muted color |

### Animation Rules

- Page load: `fade-in` on hero (200ms, ease-out)
- Scroll reveal: `slide-up` on section entry (via Intersection Observer)
- Hover transitions: `transition-colors duration-200`
- All animations: disabled when `prefers-reduced-motion: reduce`

---

## Convention Checklist (for /review)

1. No cross-feature imports
2. No hardcoded copy in components (everything from `site.config.ts` via props)
3. No `any` types
4. No `px` units for layout sizing
5. All `<a>` tags for external links have `target="_blank" rel="noopener noreferrer"`
6. All images have `alt` attributes
7. All interactive elements have `focus-visible:` styles
8. `prefers-reduced-motion` respected in CSS animations
9. `svelte-check` passes with zero errors
10. `eslint` passes with zero warnings
11. `npm run build` succeeds
12. `static/.nojekyll` exists
13. `site.config.ts` contains all links (no hardcoded URLs in components)
