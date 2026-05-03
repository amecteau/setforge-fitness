<script lang="ts">
	import type { SiteConfig } from '$lib/site.config.js';
	import Button from '$lib/shared/components/Button.svelte';
	import WindowsIcon from '$lib/shared/icons/WindowsIcon.svelte';
	import AndroidIcon from '$lib/shared/icons/AndroidIcon.svelte';
	import AppleIcon from '$lib/shared/icons/AppleIcon.svelte';
	import type { Component } from 'svelte';

	let {
		download,
		downloads
	}: {
		download: SiteConfig['download'];
		downloads: SiteConfig['downloads'];
	} = $props();

	const platformIcon: Record<string, Component<{ class?: string }>> = {
		windows: WindowsIcon,
		android: AndroidIcon,
		apple: AppleIcon
	};

	const platforms = $derived([
		{ key: 'windows' as const, ...downloads.windows },
		{ key: 'android' as const, ...downloads.android },
		{ key: 'apple' as const, ...downloads.apple }
	]);
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
						<div class="coming-soon-btn">{download.comingSoonLabel}</div>
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
