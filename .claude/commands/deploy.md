Verify the site is ready to deploy to GitHub Pages:

1. Run `npm run build` — confirm it exits 0 with no errors
2. Check that `build/` directory exists and contains `index.html`
3. Check that `static/.nojekyll` exists
4. Check that `svelte.config.js` sets `paths.base` correctly for GITHUB_ACTIONS env
5. Check that `.github/workflows/deploy.yml` exists and targets the `gh-pages` branch
6. Check that all download URLs in `site.config.ts` are real (not placeholder `#` links)
7. Check that `app.html` has correct `<title>`, meta description, and OG tags filled in

Report each check as ✅ ready / ❌ not ready.

If all checks pass: "Site is deploy-ready. Push to main to trigger the GitHub Actions deploy workflow."
If any check fails: list what needs to be fixed before deploying.
