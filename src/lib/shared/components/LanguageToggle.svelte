<script lang="ts">
	import { currentLocale, switchLocale } from '$lib/shared/locale.svelte.js';
</script>

<div class="lang-toggle" role="group" aria-label="Language selection">
	<button
		onclick={() => switchLocale('en')}
		class="lang-btn"
		class:active={currentLocale() === 'en'}
		aria-pressed={currentLocale() === 'en'}
	>
		EN
	</button>
	<span class="lang-sep" aria-hidden="true">|</span>
	<button
		onclick={() => switchLocale('es')}
		class="lang-btn"
		class:active={currentLocale() === 'es'}
		aria-pressed={currentLocale() === 'es'}
	>
		ES
	</button>
</div>

<style>
	@reference "tailwindcss";

	.lang-toggle {
		@apply inline-flex items-center gap-1 text-xs text-slate-500;
	}

	.lang-sep {
		@apply text-slate-700;
	}

	.lang-btn {
		@apply cursor-pointer rounded px-1.5 py-0.5 font-medium transition-colors duration-150 hover:text-slate-300 focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-1 focus-visible:ring-offset-slate-900 focus-visible:outline-none;
	}

	.lang-btn.active {
		@apply text-slate-200;
	}
</style>
