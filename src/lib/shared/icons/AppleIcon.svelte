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
	<!-- Leaf -->
	<path d="M12 4c0 0 1-2 3-2" />
	<!-- Apple body -->
	<path
		d="M17.5 9C16.5 7.5 15 7 13 7c-1.5 0-2.5.5-3.5.5S7 7 5.5 9C4 11 4 13 4 15c0 4 2 7 4 7 1 0 1.5-.5 3-.5s2 .5 3 .5c2 0 4-3 4-7 0-2 0-4-1.5-6z"
	/>
</svg>
