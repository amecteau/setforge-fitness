<script lang="ts">
	import type { SiteConfig } from '$lib/site.config.js';

	let { screenshots }: { screenshots: SiteConfig['screenshots'] } = $props();

	let failedImages = $state(new Set<string>());

	function handleImgError(id: string) {
		failedImages = new Set([...failedImages, id]);
	}
</script>

<section id="screenshots" aria-labelledby="screenshots-headline" class="section">
	<div class="section-inner">
		<div class="mb-16 text-center">
			<h2 id="screenshots-headline" class="mb-4 text-3xl font-semibold text-slate-100 lg:text-4xl">
				{screenshots.headline}
			</h2>
			<p class="mx-auto max-w-[36rem] text-base text-slate-400">
				{screenshots.subheadline}
			</p>
		</div>

		<div class="screenshots-row">
			{#each screenshots.items as item (item.id)}
				<div class="frame-wrapper">
					<div class="device-frame">
						<div class="screen">
							{#if item.src && !failedImages.has(item.id)}
								<img
									src={item.src}
									alt={item.alt}
									class="h-full w-full object-cover"
									onerror={() => handleImgError(item.id)}
								/>
							{:else}
								<div class="placeholder">
									<span>{screenshots.placeholderLabel}</span>
								</div>
							{/if}
						</div>
					</div>
					<p class="mt-4 text-center text-sm text-slate-400">{item.caption}</p>
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

	.screenshots-row {
		@apply flex gap-8 overflow-x-auto pb-4 lg:grid lg:grid-cols-3 lg:overflow-x-visible lg:pb-0;
	}

	.frame-wrapper {
		@apply flex shrink-0 flex-col items-center;
		width: 14rem;
	}

	@media (min-width: 1024px) {
		.frame-wrapper {
			width: 18rem;
		}
	}

	.device-frame {
		@apply w-full rounded-2xl border-2 border-slate-700 bg-slate-800 p-3;
	}

	.screen {
		@apply aspect-[9/16] w-full overflow-hidden rounded-xl;
	}

	.placeholder {
		@apply flex h-full w-full items-center justify-center;
		background-color: var(--color-surface-2);
	}

	.placeholder span {
		@apply text-xs text-slate-500;
	}
</style>
