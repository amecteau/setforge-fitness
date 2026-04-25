<script lang="ts">
	import Button from '$lib/shared/components/Button.svelte';
	import GitHubIcon from '$lib/shared/icons/GitHubIcon.svelte';
	import type { SiteConfig } from '$lib/site.config.js';

	let {
		hero,
		downloads,
		links,
		iconSrc
	}: {
		hero: SiteConfig['hero'];
		downloads: SiteConfig['downloads'];
		links: SiteConfig['links'];
		iconSrc: string;
	} = $props();

	const headlineLines = $derived(hero.headline.split('\n'));
</script>

<section id="hero" aria-labelledby="hero-headline" class="hero-section">
	<div class="hero-content">
		<!-- App icon -->
		<img src={iconSrc} alt="SetForge app icon" class="mb-6 h-16 w-16" width="64" height="64" />

		<!-- Badge -->
		<span class="badge mb-8">{hero.badge}</span>

		<!-- Headline -->
		<h1
			id="hero-headline"
			class="mb-6 text-5xl leading-tight font-bold tracking-tight text-slate-100 sm:text-6xl lg:text-7xl"
		>
			{#each headlineLines as line, i (i)}
				{line}{#if i < headlineLines.length - 1}<br />{/if}
			{/each}
		</h1>

		<!-- Sub-headline -->
		<p class="mb-10 max-w-[36rem] text-lg leading-relaxed text-slate-400 sm:text-xl">
			{hero.subheadline}
		</p>

		<!-- CTA buttons -->
		<div class="mb-6 flex flex-wrap items-center justify-center gap-4">
			<Button href={downloads.windows.url} variant="primary" external>
				{hero.ctaPrimary}
			</Button>
			<Button href={downloads.android.url} variant="secondary" external>
				{hero.ctaSecondary}
			</Button>
		</div>

		<!-- GitHub text link -->
		<a
			href={links.githubRepo}
			target="_blank"
			rel="noopener noreferrer"
			class="inline-flex items-center gap-1.5 text-sm text-slate-400 transition-colors duration-200 hover:text-slate-200 focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 focus-visible:outline-none"
		>
			<GitHubIcon class="h-4 w-4" />
			{hero.ctaTertiary} →
		</a>
	</div>
</section>

<style>
	@reference "tailwindcss";

	.hero-section {
		@apply relative flex min-h-screen flex-col items-center justify-center px-4 py-24 sm:px-6 lg:px-8;
		background: radial-gradient(ellipse at center, #1e293b 0%, #0f172a 70%);
	}

	.hero-content {
		@apply mx-auto flex max-w-4xl flex-col items-center text-center;
		animation: fade-in 200ms ease-out;
	}

	.badge {
		@apply inline-flex items-center rounded-full border border-blue-500/50 px-3 py-1 text-sm font-medium text-blue-400;
	}
</style>
