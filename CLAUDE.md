## Project Configuration

- **Language**: TypeScript
- **Package Manager**: npm
- **Add-ons**: prettier, eslint, vitest, tailwindcss, playwright

---

# SetForge Fitness — Claude Code Entry Point

This is the **auto-loaded** Claude Code instruction file. Claude Code reads this file automatically at the start of every conversation.

---

## What This Project Is

A professional GitHub Pages promotional website for **SetForge** — a privacy-first gym rep counter app for Windows and Android. Built with SvelteKit + Tailwind CSS v4, deployed via GitHub Actions.

- **Live site**: `https://setforge.fitness`
- **App repo**: `https://github.com/amecteau/setforge-app`

---

## Read Next

**Before making any changes, read `.claude/AGENTS.md`.**

`AGENTS.md` is the full architecture guide — harness rules, feature structure, dependency flow, design system, convention checklist, and slash command reference. This file (`CLAUDE.md`) is the entry point; `AGENTS.md` is the authoritative source.

The relationship between these files:

| File                    | Loaded By                                  | Purpose                                                      |
| ----------------------- | ------------------------------------------ | ------------------------------------------------------------ |
| `CLAUDE.md` (this file) | Claude Code — automatically, every session | Entry point: orient quickly, point to full rules             |
| `.claude/AGENTS.md`     | Claude — read manually per instructions    | Full architecture: harness rules, conventions, design system |

---

## Quick Reference

### Key Docs

- `.claude/AGENTS.md` — architecture rules, harness conventions, all slash commands
- `docs/ui-spec.md` — section-by-section design spec (read before building UI)
- `docs/project-status.md` — phase tracker; update after completing tasks
- `docs/content.md` — all marketing copy; single source of truth for text

### Slash Commands

- `/status` — current phase and task progress
- `/next` — next task with details and confirmation
- `/done` — mark task complete, update project-status.md
- `/review` — run all checks and verify harness conventions
- `/test` — full test suite
- `/deploy` — GitHub Pages readiness check

### Never Do

- Import one feature section from another
- Hardcode copy or URLs in components (use `site.config.ts`)
- Use `any` types
- Use `px` units for layout sizing
- Import `site.config.ts` anywhere except `+page.svelte`
- Create or edit files without ensuring `npx prettier --check .` passes (run `npx prettier --write .` to fix)
