<script lang="ts">
	import { siApple } from 'simple-icons';
	let { class: className = '' }: { class?: string } = $props();
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	viewBox="0 0 24 24"
	fill="currentColor"
	class={className}
	aria-hidden="true"
>
	<path d={siApple.path} />
</svg>
