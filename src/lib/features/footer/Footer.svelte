<script lang="ts">
	import type { SiteConfig } from '$lib/site.config.js';
	import GitHubIcon from '$lib/shared/icons/GitHubIcon.svelte';

	let {
		footer,
		links,
		appName,
		iconSrc
	}: {
		footer: SiteConfig['footer'];
		links: SiteConfig['links'];
		appName: SiteConfig['appName'];
		iconSrc: string;
	} = $props();
</script>

<footer class="site-footer">
	<div class="footer-inner">
		<!-- Row 1: icon + name -->
		<div class="mb-4 flex items-center justify-center gap-2">
			<img src={iconSrc} alt="{appName} app icon" class="h-6 w-6" width="24" height="24" />
			<span class="text-sm font-semibold text-slate-300">{appName}</span>
		</div>

		<!-- Row 2: links -->
		<div class="flex flex-wrap justify-center gap-6">
			<a href={links.githubRepo} target="_blank" rel="noopener noreferrer" class="footer-link">
				<GitHubIcon class="h-4 w-4" />
				GitHub
			</a>
			<a href={links.githubIssues} target="_blank" rel="noopener noreferrer" class="footer-link">
				Support / Issues
			</a>
		</div>

		<!-- Row 3: copyright -->
		<p class="mt-6 text-xs text-slate-500">
			{footer.copyright} · Built with {footer.builtWith}
		</p>
	</div>
</footer>

<style>
	@reference "tailwindcss";

	.site-footer {
		@apply px-4 py-10;
		background-color: var(--color-surface);
		border-top: 1px solid var(--color-border);
	}

	.footer-inner {
		@apply mx-auto flex max-w-[80rem] flex-col items-center text-center;
	}

	.footer-link {
		@apply inline-flex items-center gap-1.5 text-sm text-slate-400 transition-colors duration-200 hover:text-slate-200 focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 focus-visible:outline-none;
	}
</style>
