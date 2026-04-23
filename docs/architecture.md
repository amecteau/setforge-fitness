# SetForge Fitness Website — Architecture

---

## Component Hierarchy

```mermaid
graph TD
    A["+page.svelte (route)"] --> B["Hero.svelte"]
    A --> C["FeaturesSection.svelte"]
    A --> D["Screenshots.svelte"]
    A --> E["Download.svelte"]
    A --> F["Privacy.svelte"]
    A --> G["Footer.svelte"]

    B --> H["Button.svelte"]
    B --> I["BarbellIcon.svelte"]
    C --> J["FeatureCard (inline)"]
    C --> K["[Feature Icons]"]
    D --> L["DeviceFrame (inline)"]
    E --> M["PlatformCard (inline)"]
    E --> H
    E --> N["WindowsIcon.svelte"]
    E --> O["AndroidIcon.svelte"]
    F --> P["PrivacyPillar (inline)"]
    F --> Q["[Privacy Icons]"]
    G --> I
    G --> R["GitHubIcon.svelte"]

    subgraph "src/lib/shared"
        H
        I
        K
        N
        O
        Q
        R
    end

    subgraph "src/lib/features/hero"
        B
    end

    subgraph "src/lib/features/features-section"
        C
        J
    end

    subgraph "src/lib/features/screenshots"
        D
        L
    end

    subgraph "src/lib/features/download"
        E
        M
    end

    subgraph "src/lib/features/privacy"
        F
        P
    end

    subgraph "src/lib/features/footer"
        G
    end
```

---

## Data Flow

```mermaid
graph LR
    Config["site.config.ts\n(content, links, metadata)"]
    Page["+page.svelte"]
    Hero["Hero.svelte"]
    Features["FeaturesSection.svelte"]
    Screenshots["Screenshots.svelte"]
    Download["Download.svelte"]
    Privacy["Privacy.svelte"]
    Footer["Footer.svelte"]

    Config -->|"imported once"| Page
    Page -->|"props"| Hero
    Page -->|"props"| Features
    Page -->|"props"| Screenshots
    Page -->|"props"| Download
    Page -->|"props"| Privacy
    Page -->|"props"| Footer
```

**Rule**: `site.config.ts` is imported in **one place only** — `+page.svelte`. All other files receive data as props. This ensures content is never scattered across the codebase.

---

## Dependency Flow (One-Way)

```
+page.svelte (route layer)
  │
  ▼  imports from
src/lib/features/[section]/  (feature layer)
  │
  ▼  imports from
src/lib/shared/              (shared layer)
  │
  ▼  imports from
src/lib/site.config.ts       (config layer — no imports)
```

Forbidden flows (ESLint enforced):

- Feature → Feature (sections never import each other)
- Shared → Feature (shared is atomic, never pulls from features)
- Config → Anything (config has zero imports)

---

## Build & Deploy Pipeline

```mermaid
graph LR
    Dev["Developer\npushes to main"] --> CI["GitHub Actions\ndeploy.yml"]
    CI --> Build["npm run build\n(adapter-static)"]
    Build --> Output["build/ directory\n(static HTML/CSS/JS)"]
    Output --> GHPages["gh-pages branch"]
    GHPages --> Live["github.io/setforge-fitness\n(GitHub Pages CDN)"]

    PR["Pull Request"] --> CICheck["GitHub Actions\nci.yml"]
    CICheck --> Tests["svelte-check\nvitest\neslint\nnpm build"]
    Tests --> Pass["✅ Required to merge"]
```

---

## Module Boundary Rules

```mermaid
graph TD
    subgraph "ALLOWED"
        A1["+page.svelte"] -->|import| B1["features/hero/Hero.svelte"]
        B1 -->|import| C1["shared/components/Button.svelte"]
        C1 -->|nothing| D1["(no further imports)"]
        A1 -->|import| E1["site.config.ts"]
    end

    subgraph "FORBIDDEN"
        A2["features/hero/Hero.svelte"] -.-x|"❌ cross-feature"| B2["features/download/Download.svelte"]
        C2["shared/Button.svelte"] -.-x|"❌ upward import"| D2["features/hero/Hero.svelte"]
        E2["site.config.ts"] -.-x|"❌ never imports"| F2["anything"]
        G2["features/hero/Hero.svelte"] -.-x|"❌ bypass props"| H2["site.config.ts"]
    end
```

---

## GitHub Pages Path Resolution

When deployed to GitHub Pages (repo name as path: `/setforge-fitness`):

```
svelte.config.js:
  kit.paths.base = process.env.GITHUB_ACTIONS ? '/setforge-fitness' : ''

All internal links use $app/paths:
  import { base } from '$app/paths';
  <img src="{base}/app-icon.svg" />
```

This ensures all asset URLs resolve correctly whether running locally (`localhost:5173`) or on GitHub Pages (`amecteau.github.io/setforge-fitness`).
