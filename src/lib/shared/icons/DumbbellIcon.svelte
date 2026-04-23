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
	<line x1="6" y1="12" x2="18" y2="12" />
	<path d="M6 8v8" />
	<path d="M18 8v8" />
	<rect x="3" y="9" width="3" height="6" rx="1" />
	<rect x="18" y="9" width="3" height="6" rx="1" />
</svg>
