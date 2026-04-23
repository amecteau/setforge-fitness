<script lang="ts">
	let { class: className = '' }: { class?: string } = $props();
</script>

<!--
  Windows flag logo — 4 filled panes in perspective layout.
  Matches the Windows 10/11 logo shape at 24×24.
-->
<svg
	xmlns="http://www.w3.org/2000/svg"
	viewBox="0 0 24 24"
	fill="currentColor"
	class={className}
	aria-hidden="true"
>
	<!-- Top-left pane -->
	<path d="M0 3.449 10.8 1.948v9.552H0z" />
	<!-- Top-right pane -->
	<path d="M12 1.734 24 0v11.5H12z" />
	<!-- Bottom-left pane -->
	<path d="M0 12.5h10.8v9.552L0 20.551z" />
	<!-- Bottom-right pane -->
	<path d="M12 12.5H24V24l-12-1.734z" />
</svg>
