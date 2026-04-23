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
	<path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
	<path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2" />
	<path
		d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8a6 6 0 0 0 6 6h2a6 6 0 0 0 6-6v-3a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"
	/>
</svg>
