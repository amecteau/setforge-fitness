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
	<rect x="2" y="4" width="14" height="11" rx="1" />
	<path d="M12 19v2" />
	<path d="M8 21h8" />
	<rect x="18" y="9" width="4" height="8" rx="1" />
	<path d="M20 17v1" />
</svg>
