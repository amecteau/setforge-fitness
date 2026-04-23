<script lang="ts">
	let { class: className = '' }: { class?: string } = $props();
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	viewBox="0 0 24 24"
	fill="none"
	stroke="currentColor"
	stroke-width="2"
	stroke-linecap="round"
	stroke-linejoin="round"
	class={className}
	aria-hidden="true"
>
	<!-- Robot head / body -->
	<path d="M5 16V11a7 7 0 0 1 14 0v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z" />
	<!-- Antennae -->
	<line x1="9.5" y1="7.5" x2="7" y2="4" />
	<line x1="14.5" y1="7.5" x2="17" y2="4" />
	<!-- Legs -->
	<line x1="9" y1="17" x2="9" y2="21" />
	<line x1="15" y1="17" x2="15" y2="21" />
	<!-- Arms -->
	<line x1="5" y1="13" x2="2" y2="13" />
	<line x1="19" y1="13" x2="22" y2="13" />
</svg>
