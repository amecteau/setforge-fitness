# SetForge Fitness Website — UI Specification

> This file defines what every section must look like and how it behaves.
> Read this before building any UI section. Update when design decisions change.

---

## Global Layout

- **Layout type**: Single-page with smooth scroll (`scroll-behavior: smooth`)
- **Max content width**: `1280px` centered with `mx-auto`
- **Section padding**: `py-24 px-4 sm:px-6 lg:px-8`
- **Background**: `--color-bg` (`#0f172a`) full page
- **Font**: System sans-serif stack (Tailwind default)
- **Base font size**: `16px`

### Responsive Breakpoints

| Name    | Width                    | Behavior                               |
| ------- | ------------------------ | -------------------------------------- |
| Mobile  | < 640px (`sm`)           | Single column, stacked layout          |
| Tablet  | 640px–1024px (`md`/`lg`) | 2-col grids                            |
| Desktop | > 1024px (`lg`)          | Full 3-col grids, side-by-side layouts |

### Scroll Reveal

All sections below the hero animate in on scroll:

- Animation: `slide-up` — translate Y from `2rem` to `0`, opacity `0` to `1`
- Duration: `500ms`, easing: `ease-out`
- Trigger: Intersection Observer, `threshold: 0.1`
- Disabled when `prefers-reduced-motion: reduce`

---

## Section 1: Hero

**File**: `src/lib/features/hero/Hero.svelte`

### Layout

- Full viewport height (`min-h-screen`)
- Vertically and horizontally centered content (`flex flex-col items-center justify-center`)
- Subtle radial gradient background (dark slate center, slightly lighter edges) — CSS only
- Optional: faint grid pattern overlay at 5% opacity (CSS background-image)

### Content (top to bottom)

1. **App icon** — `app-icon.svg`, `4rem` × `4rem`, centered, `mb-6`
2. **Badge** — pill label: "Free & Open Source", `text-sm`, accent-colored border, `mb-8`
3. **Headline** — two lines: "Count Every Rep." / "Own Your Progress."
   - `text-5xl sm:text-6xl lg:text-7xl font-bold`
   - `leading-tight tracking-tight`
   - Text: `--color-text`
   - `mb-6`
4. **Sub-headline** — one sentence from content.md
   - `text-lg sm:text-xl`
   - Color: `--color-text-muted`
   - Max width: `36rem`, centered
   - `mb-10`
5. **CTA Button row** — horizontal flex, `gap-4`, wraps on mobile
   - **Primary**: "Download for Windows" — filled blue button, `px-6 py-3`
   - **Secondary**: "Get it on Android" — outlined blue button, `px-6 py-3`
6. **GitHub link** — text link below buttons: "View on GitHub →", `text-sm`, muted color

### Animations

- Hero content fades in on page load: `opacity-0` → `opacity-100`, `200ms`, `ease-out`
- No scroll-triggered animation (it's already visible)

### Interactions

- Both CTA buttons open in a new tab (`target="_blank"`)
- Hover: buttons darken/lighten with `transition-colors duration-200`
- Focus: `focus-visible:ring-2 ring-offset-2 ring-blue-500`

---

## Section 2: Features Grid

**File**: `src/lib/features/features-section/FeaturesSection.svelte`

### Layout

- Background: `--color-surface` (`#1e293b`) — subtle contrast from hero
- Section headline + sub-headline centered, `mb-16`
- Feature grid: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6`

### Feature Card

Each of the 6 feature cards:

- Background: `--color-bg` (darker than section bg)
- Border: `1px solid --color-border`, `rounded-xl`
- Padding: `p-6`
- Icon: SVG icon component, `2rem` × `2rem`, `--color-success` (green), `mb-4`
- Title: `text-lg font-semibold`, `--color-text`, `mb-2`
- Description: `text-sm`, `--color-text-muted`, `leading-relaxed`
- Hover: `border-color` transitions to `--color-accent`, `200ms`

### Content

6 cards from `site.config.ts` features array (see `docs/content.md`).

---

## Section 3: Screenshots

**File**: `src/lib/features/screenshots/Screenshots.svelte`

### Layout

- Background: `--color-bg`
- Section headline + sub-headline centered, `mb-16`
- Screenshots row: `flex gap-8 overflow-x-auto` on mobile, `grid grid-cols-3 gap-8` on `lg:`
- Each device frame: centered, with caption below

### Device Frame (CSS only, no images of frames)

- Outer: `rounded-2xl border-2 border-slate-700 bg-slate-800 p-3`
- Screen area: `rounded-xl overflow-hidden aspect-[9/16]` (portrait phone ratio) or `aspect-[16/9]` (landscape desktop)
- Screenshot image fills the screen area: `object-cover w-full h-full`
- Frame width: `14rem` on mobile, `18rem` on desktop

### Caption

- Below each frame: `text-sm text-center --color-text-muted mt-4`
- Content from `site.config.ts` screenshots array (see `docs/content.md`)

### Placeholder State

Until real screenshots are added, show a placeholder:

- Solid `--color-surface-2` fill in screen area
- Centered text: "Screenshot coming soon" in `--color-text-muted`

---

## Section 4: Download

**File**: `src/lib/features/download/Download.svelte`

### Layout

- Background: `--color-surface` — alternates with surrounding sections
- Content centered, max width `48rem`
- Section headline + sub-headline, `mb-12`
- Platform cards: `grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10`
- Below grid: GitHub source link (text, centered)

### Platform Card

- Background: `--color-bg`
- Border: `1px solid --color-border`, `rounded-xl`
- Padding: `p-8`
- Platform icon: `3rem` × `3rem`, centered, `mb-4`
- Platform name: `text-xl font-semibold`, `mb-1`
- System requirement: `text-sm --color-text-muted`, `mb-6`
- CTA button: full width, primary style
- Sub-note (e.g. "Play Store coming soon"): `text-xs --color-text-muted mt-3 text-center`

### Interactions

- Download buttons open GitHub Releases in new tab
- Hover: card border brightens, `transition-colors 200ms`

---

## Section 5: Privacy Promise

**File**: `src/lib/features/privacy/Privacy.svelte`

### Layout

- Background: `--color-bg`
- Section headline + sub-headline centered, `mb-16`
- Pillar grid: `grid grid-cols-1 sm:grid-cols-3 gap-8`

### Privacy Pillar Card

- No border (open card style — content only, no box)
- Icon: SVG, `3rem` × `3rem`, `--color-accent` (blue), centered, `mb-4`
- Title: `text-lg font-semibold`, centered, `mb-2`
- Description: `text-sm --color-text-muted`, centered, `leading-relaxed`

### Content

3 pillars from `site.config.ts` (see `docs/content.md`).

---

## Section 6: Footer

**File**: `src/lib/features/footer/Footer.svelte`

### Layout

- Background: `--color-surface`
- Top border: `1px solid --color-border`
- Padding: `py-10 px-4`
- Content: two rows, centered

### Row 1

- App icon (small, `1.5rem`) + app name inline, `mb-4`

### Row 2

- Links (horizontal flex, `gap-6`, wrap on mobile): GitHub, Issues/Support
- All links: `text-sm --color-text-muted`, hover `--color-text`, `transition-colors`
- All external links: `target="_blank" rel="noopener noreferrer"`

### Row 3

- Copyright line: `text-xs --color-text-muted mt-6`
- "Built with SvelteKit + Tauri" (no link needed)

---

## Shared Components

### Button.svelte

Props:

```typescript
{
  variant: 'primary' | 'secondary';
  href: string;            // always an <a> element
  target?: '_blank';
  rel?: string;
  class?: string;          // for layout overrides
}
```

Styles:

- **Primary**: `bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg px-6 py-3`
- **Secondary**: `border border-blue-500 text-blue-400 hover:bg-blue-500/10 font-semibold rounded-lg px-6 py-3`
- Both: `transition-colors duration-200 focus-visible:ring-2 ring-offset-2 ring-blue-500 inline-flex items-center gap-2`
- Renders as `<a>` (not `<button>`) because all CTAs navigate somewhere

### SVG Icons

All icons are Svelte components in `src/lib/shared/icons/`. They accept `size` (default `'1.5rem'`) and `class` props.

Required icons:

- `BarbellIcon.svelte` — app branding
- `ShieldIcon.svelte` — privacy / no account
- `TapIcon.svelte` — tap to count (hand with ripple)
- `HistoryIcon.svelte` — workout history (clock/list)
- `TextSizeIcon.svelte` — font scaling
- `DumbbellIcon.svelte` — custom exercises
- `DevicesIcon.svelte` — cross-platform
- `LockIcon.svelte` — local storage
- `EyeOffIcon.svelte` — no analytics
- `CodeIcon.svelte` — open source
- `WindowsIcon.svelte` — Windows platform
- `AndroidIcon.svelte` — Android platform
- `GitHubIcon.svelte` — GitHub link

---

## Accessibility Requirements

- All sections have `id` attributes for potential anchor linking (`#hero`, `#features`, `#download`, etc.)
- All images: non-empty `alt`
- Interactive elements: `focus-visible:ring-2` always
- Color contrast: all text must meet WCAG AA (4.5:1 for body, 3:1 for large)
- Semantic structure: `<main>` wraps all sections, each section is `<section>` with `aria-labelledby` pointing to its headline
- Skip-to-content link at top of page (visually hidden, visible on focus)

---

## Performance Targets

- Lighthouse Performance: 90+
- Lighthouse Accessibility: 95+
- No JavaScript-heavy animation libraries (CSS only)
- Total JS bundle: < 50KB gzipped
- Images: WebP format, lazy loaded, explicit `width` and `height`
- No external font requests (system font stack)
