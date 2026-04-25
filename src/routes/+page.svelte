<script lang="ts">
	import { getSiteConfig } from '$lib/site.config.js';
	import { currentLocale } from '$lib/shared/locale.svelte.js';
	import { reveal } from '$lib/shared/actions/reveal.js';
	import Hero from '$lib/features/hero/Hero.svelte';
	import FeaturesSection from '$lib/features/features-section/FeaturesSection.svelte';
	import Screenshots from '$lib/features/screenshots/Screenshots.svelte';
	import Download from '$lib/features/download/Download.svelte';
	import Privacy from '$lib/features/privacy/Privacy.svelte';
	import Footer from '$lib/features/footer/Footer.svelte';

	const config = $derived.by(() => {
		currentLocale(); // reactive dependency — re-runs getSiteConfig when locale changes
		return getSiteConfig();
	});
</script>

<main>
	<Hero
		hero={config.hero}
		downloads={config.downloads}
		links={config.links}
		iconSrc={config.iconSrc}
	/>

	<div use:reveal>
		<FeaturesSection features={config.features} />
	</div>

	<div use:reveal>
		<Screenshots screenshots={config.screenshots} />
	</div>

	<div use:reveal>
		<Download
			download={config.download}
			downloads={config.downloads}
			links={config.links}
		/>
	</div>

	<div use:reveal>
		<Privacy privacy={config.privacy} />
	</div>

	<Footer
		footer={config.footer}
		links={config.links}
		appName={config.appName}
		iconSrc={config.iconSrc}
	/>
</main>
