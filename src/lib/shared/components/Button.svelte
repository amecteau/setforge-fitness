<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		href,
		variant = 'primary',
		external = false,
		children
	}: {
		href: string;
		variant?: 'primary' | 'secondary';
		external?: boolean;
		children: Snippet;
	} = $props();
</script>

<a
	{href}
	target={external ? '_blank' : undefined}
	rel={external ? 'noopener noreferrer' : undefined}
	class="btn btn-{variant}"
>
	{@render children()}
</a>

<style>
	@reference "tailwindcss";
	.btn {
		@apply inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-base font-semibold transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 focus-visible:outline-none;
	}
	.btn-primary {
		@apply bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700;
	}
	.btn-secondary {
		@apply border border-slate-600 text-slate-200 hover:border-slate-400 hover:text-white active:bg-slate-800;
	}
</style>
