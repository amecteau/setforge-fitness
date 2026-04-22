Review current changes against conventions defined in .claude/AGENTS.md:

1. Run `npx svelte-check --tsconfig ./tsconfig.json` and report any type errors
2. Run `npx eslint src/ --max-warnings 0` and report violations
3. Run `npm run build` and report any build errors
4. Check that no component hardcodes copy (all text from site.config.ts via props)
5. Check that no section imports from another section folder
6. Check that all `<a>` tags opening external links have `target="_blank" rel="noopener noreferrer"`
7. Check that all images have non-empty `alt` attributes
8. Check that all interactive elements have `focus-visible:` styles
9. Check that `prefers-reduced-motion` is respected in app.css animations
10. Check that no `any` types exist in the TypeScript codebase
11. Check that no `px` units are used for layout sizing (borders excluded)
12. Verify `static/.nojekyll` exists
13. Verify `site.config.ts` contains all download/external URLs (none hardcoded in components)

Summarize findings as ✅ pass / ❌ fail with details on any failures.
