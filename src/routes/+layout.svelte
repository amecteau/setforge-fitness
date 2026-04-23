<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<a href="#hero" class="skip-link">Skip to content</a>

{@render children()}

<style>
	.skip-link {
		position: absolute;
		top: -100%;
		left: 1rem;
		z-index: 100;
		padding: 0.5rem 1rem;
		background: #3b82f6;
		color: #fff;
		font-size: 0.875rem;
		font-weight: 600;
		border-radius: 0 0 0.5rem 0.5rem;
		text-decoration: none;
		transition: top 0.2s;
	}

	.skip-link:focus-visible {
		top: 0;
		outline: 2px solid #fff;
		outline-offset: 2px;
	}
</style>
