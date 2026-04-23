<script lang="ts">
	import type { SiteConfig } from '$lib/site.config.js';
	import LockIcon from '$lib/shared/icons/LockIcon.svelte';
	import EyeOffIcon from '$lib/shared/icons/EyeOffIcon.svelte';
	import CodeIcon from '$lib/shared/icons/CodeIcon.svelte';
	import type { Component } from 'svelte';

	let { privacy }: { privacy: SiteConfig['privacy'] } = $props();

	const iconMap: Record<string, Component<{ class?: string }>> = {
		lock: LockIcon,
		'eye-off': EyeOffIcon,
		code: CodeIcon
	};
</script>

<section id="privacy" aria-labelledby="privacy-headline" class="section">
	<div class="section-inner">
		<div class="mb-16 text-center">
			<h2 id="privacy-headline" class="mb-4 text-3xl font-semibold text-slate-100 lg:text-4xl">
				{privacy.headline}
			</h2>
			<p class="mx-auto max-w-[36rem] text-base text-slate-400">
				{privacy.subheadline}
			</p>
		</div>

		<div class="grid grid-cols-1 gap-8 sm:grid-cols-3">
			{#each privacy.items as item (item.id)}
				{@const Icon = iconMap[item.icon]}
				<div class="flex flex-col items-center text-center">
					{#if Icon}
						<Icon class="mb-4 h-12 w-12 text-blue-500" />
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
		background-color: var(--color-bg);
	}

	.section-inner {
		@apply mx-auto max-w-[80rem];
	}
</style>
