<script lang="ts">
	import type { SiteConfig } from '$lib/site.config.js';
	import Button from '$lib/shared/components/Button.svelte';
	import GitHubIcon from '$lib/shared/icons/GitHubIcon.svelte';
	import WindowsIcon from '$lib/shared/icons/WindowsIcon.svelte';
	import AndroidIcon from '$lib/shared/icons/AndroidIcon.svelte';
	import AppleIcon from '$lib/shared/icons/AppleIcon.svelte';
	import type { Component } from 'svelte';

	let {
		download,
		downloads,
		links
	}: {
		download: SiteConfig['download'];
		downloads: SiteConfig['downloads'];
		links: SiteConfig['links'];
	} = $props();

	const platformIcon: Record<string, Component<{ class?: string }>> = {
		windows: WindowsIcon,
		android: AndroidIcon,
		apple: AppleIcon
	};

	const platforms = [
		{ key: 'windows', ...downloads.windows },
		{ key: 'android', ...downloads.android },
		{ key: 'apple', ...downloads.apple }
	] as const;
</script>

<section id="download" aria-labelledby="download-headline" class="section">
	<div class="section-inner">
		<div class="mb-12 text-center">
			<h2 id="download-headline" class="mb-4 text-3xl font-semibold text-slate-100 lg:text-4xl">
				{download.headline}
			</h2>
			<p class="mx-auto max-w-[36rem] text-base text-slate-400">
				{download.subheadline}
			</p>
		</div>

		<div class="mb-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
			{#each platforms as platform (platform.key)}
				{@const Icon = platformIcon[platform.key]}
				<div class="platform-card" class:coming-soon={platform.comingSoon}>
					<div class="mb-4 flex justify-center">
						<Icon class="h-12 w-12 text-slate-300" />
					</div>
					<p class="mb-1 text-center text-xl font-semibold text-slate-100">{platform.label}</p>
					<p class="mb-6 text-center text-sm text-slate-400">{platform.sublabel}</p>

					{#if platform.comingSoon}
						<div class="coming-soon-btn">Coming Soon</div>
					{:else}
						<Button href={platform.url} variant="primary" external>{platform.label}</Button>
					{/if}

					{#if platform.key === 'android'}
						<p class="mt-3 text-center text-xs text-slate-500">{download.playStoreNote}</p>
					{:else if platform.key === 'apple'}
						<p class="mt-3 text-center text-xs text-slate-500">{download.appleNote}</p>
					{/if}
				</div>
			{/each}
		</div>

		<div class="text-center">
			<p class="mb-3 text-sm text-slate-400">{download.sourceNote}</p>
			<a
				href={links.githubRepo}
				target="_blank"
				rel="noopener noreferrer"
				class="inline-flex items-center gap-2 text-sm text-slate-300 transition-colors duration-200 hover:text-slate-100 focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 focus-visible:outline-none"
			>
				<GitHubIcon class="h-4 w-4" />
				{download.githubCta}
			</a>
		</div>
	</div>
</section>

<style>
 /* stylelint-disable-next-line at-rule-no-unknown */
	@reference "tailwindcss";

	.section {
		@apply px-4 py-24 sm:px-6 lg:px-8;
		background-color: var(--color-surface);
	}

	.section-inner {
		@apply mx-auto max-w-[48rem];
	}

	.platform-card {
		@apply rounded-xl border border-slate-700 p-8 transition-colors duration-200 hover:border-slate-500;
		background-color: var(--color-bg);
	}

	.platform-card.coming-soon {
		@apply opacity-60;
	}

	.coming-soon-btn {
		@apply w-full rounded-lg border border-slate-600 py-3 text-center text-sm font-medium text-slate-500;
	}
/* ... */
</style>
