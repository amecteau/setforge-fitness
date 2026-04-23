<script lang="ts">
	import { siteConfig } from '$lib/site.config.js';
	import { reveal } from '$lib/shared/actions/reveal.js';
	import Hero from '$lib/features/hero/Hero.svelte';
	import FeaturesSection from '$lib/features/features-section/FeaturesSection.svelte';
	import Screenshots from '$lib/features/screenshots/Screenshots.svelte';
	import Download from '$lib/features/download/Download.svelte';
	import Privacy from '$lib/features/privacy/Privacy.svelte';
	import Footer from '$lib/features/footer/Footer.svelte';
</script>

<main>
	<Hero
		hero={siteConfig.hero}
		downloads={siteConfig.downloads}
		links={siteConfig.links}
		iconSrc={siteConfig.iconSrc}
	/>

	<div use:reveal>
		<FeaturesSection features={siteConfig.features} />
	</div>

	<div use:reveal>
		<Screenshots screenshots={siteConfig.screenshots} />
	</div>

	<div use:reveal>
		<Download
			download={siteConfig.download}
			downloads={siteConfig.downloads}
			links={siteConfig.links}
		/>
	</div>

	<div use:reveal>
		<Privacy privacy={siteConfig.privacy} />
	</div>

	<Footer
		footer={siteConfig.footer}
		links={siteConfig.links}
		appName={siteConfig.appName}
		iconSrc={siteConfig.iconSrc}
	/>
</main>
