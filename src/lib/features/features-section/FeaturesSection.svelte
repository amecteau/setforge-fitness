<script lang="ts">
	import type { SiteConfig } from '$lib/site.config.js';
	import ShieldIcon from '$lib/shared/icons/ShieldIcon.svelte';
	import TapIcon from '$lib/shared/icons/TapIcon.svelte';
	import HistoryIcon from '$lib/shared/icons/HistoryIcon.svelte';
	import FontSizeIcon from '$lib/shared/icons/FontSizeIcon.svelte';
	import DumbbellIcon from '$lib/shared/icons/DumbbellIcon.svelte';
	import DeviceIcon from '$lib/shared/icons/DeviceIcon.svelte';
	import type { Component } from 'svelte';

	let { features }: { features: SiteConfig['features'] } = $props();

	const iconMap: Record<string, Component<{ class?: string }>> = {
		shield: ShieldIcon,
		tap: TapIcon,
		history: HistoryIcon,
		text: FontSizeIcon,
		dumbbell: DumbbellIcon,
		device: DeviceIcon
	};
</script>

<section id="features" aria-labelledby="features-headline" class="section bg-slate-800">
	<div class="section-inner">
		<div class="mb-16 text-center">
			<h2 id="features-headline" class="mb-4 text-3xl font-semibold text-slate-100 lg:text-4xl">
				{features.headline}
			</h2>
			<p class="mx-auto max-w-[36rem] text-base text-slate-400">
				{features.subheadline}
			</p>
		</div>

		<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each features.items as item (item.id)}
				{@const Icon = iconMap[item.icon]}
				<div class="feature-card">
					{#if Icon}
						<Icon class="mb-4 h-8 w-8 text-green-500" />
					{/if}
					<h3 class="mb-2 text-lg font-semibold text-slate-100">{item.title}</h3>
					<p class="text-sm leading-relaxed text-slate-400">{item.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	@reference "tailwindcss";

	.section {
		@apply px-4 py-24 sm:px-6 lg:px-8;
	}

	.section-inner {
		@apply mx-auto max-w-[80rem];
	}

	.feature-card {
		@apply rounded-xl border border-slate-700 bg-slate-900 p-6 transition-colors duration-200 hover:border-blue-500;
	}
</style>
