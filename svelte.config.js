import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	compilerOptions: {
		runes: ({ filename }) => (filename.split(/[/\\]/).includes('node_modules') ? undefined : true)
	},
	kit: {
		adapter: adapter(),
		prerender: {
			handleHttpError: ({ path, message }) => {
				// Static assets (og-image, screenshots, favicon) are added in Phase 6 — ignore their 404s
				if (/\.(png|jpg|jpeg|svg|webp|ico)$/.test(path)) return;
				throw new Error(message);
			}
		}
	}
};

export default config;
