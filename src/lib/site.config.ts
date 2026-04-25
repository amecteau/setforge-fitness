import { base } from '$app/paths';
import { m } from '$lib/paraglide/messages.js';

export function getSiteConfig() {
	return {
		appName: 'SetForge',
		tagline: m.tagline(),
		description: m.description(),
		longDescription: m.long_description(),

		iconSrc: `${base}/icon.png`,

		meta: {
			title: m.meta_title(),
			ogTitle: m.meta_og_title(),
			ogDescription: m.meta_og_description(),
			ogImage: `${base}/og-image.png`
		},

		links: {
			githubRepo: 'https://github.com/amecteau/setforge-app',
			githubIssues: 'https://github.com/amecteau/setforge-app/issues'
		},

		downloads: {
			windows: {
				url: 'https://github.com/amecteau/setforge-app/releases/latest',
				label: m.download_windows_label(),
				sublabel: m.download_windows_sublabel(),
				comingSoon: false
			},
			android: {
				url: 'https://github.com/amecteau/setforge-app/releases/latest',
				label: m.download_android_label(),
				sublabel: m.download_android_sublabel(),
				comingSoon: false
			},
			apple: {
				url: '',
				label: m.download_apple_label(),
				sublabel: m.download_apple_sublabel(),
				comingSoon: true
			}
		},

		hero: {
			headline: m.hero_headline(),
			subheadline: m.hero_subheadline(),
			badge: m.hero_badge(),
			ctaPrimary: m.hero_cta_primary(),
			ctaSecondary: m.hero_cta_secondary(),
			ctaTertiary: m.hero_cta_tertiary()
		},

		features: {
			headline: m.features_headline(),
			subheadline: m.features_subheadline(),
			items: [
				{
					id: 'no-account',
					icon: 'shield',
					title: m.feature_no_account_title(),
					description: m.feature_no_account_description()
				},
				{
					id: 'tap-to-count',
					icon: 'tap',
					title: m.feature_tap_to_count_title(),
					description: m.feature_tap_to_count_description()
				},
				{
					id: 'history',
					icon: 'history',
					title: m.feature_history_title(),
					description: m.feature_history_description()
				},
				{
					id: 'scales',
					icon: 'text',
					title: m.feature_scales_title(),
					description: m.feature_scales_description()
				},
				{
					id: 'custom-exercises',
					icon: 'dumbbell',
					title: m.feature_custom_exercises_title(),
					description: m.feature_custom_exercises_description()
				},
				{
					id: 'cross-platform',
					icon: 'device',
					title: m.feature_cross_platform_title(),
					description: m.feature_cross_platform_description()
				}
			]
		},

		screenshots: {
			headline: m.screenshots_headline(),
			subheadline: m.screenshots_subheadline(),
			placeholderLabel: m.screenshots_placeholder_label(),
			items: [
				{
					id: 'counter',
					src: `${base}/screenshots/counter.png`,
					alt: m.screenshot_counter_alt(),
					caption: m.screenshot_counter_caption()
				},
				{
					id: 'history',
					src: `${base}/screenshots/history.png`,
					alt: m.screenshot_history_alt(),
					caption: m.screenshot_history_caption()
				},
				{
					id: 'exercises',
					src: `${base}/screenshots/exercises.png`,
					alt: m.screenshot_exercises_alt(),
					caption: m.screenshot_exercises_caption()
				}
			]
		},

		download: {
			headline: m.download_headline(),
			subheadline: m.download_subheadline(),
			comingSoonLabel: m.download_coming_soon_label(),
			playStoreNote: m.download_play_store_note(),
			appleNote: m.download_apple_note(),
			sourceNote: m.download_source_note(),
			githubCta: m.download_github_cta()
		},

		privacy: {
			headline: m.privacy_headline(),
			subheadline: m.privacy_subheadline(),
			items: [
				{
					id: 'local-storage',
					icon: 'lock',
					title: m.privacy_local_storage_title(),
					description: m.privacy_local_storage_description()
				},
				{
					id: 'no-analytics',
					icon: 'eye-off',
					title: m.privacy_no_analytics_title(),
					description: m.privacy_no_analytics_description()
				},
				{
					id: 'open-source',
					icon: 'code',
					title: m.privacy_open_source_title(),
					description: m.privacy_open_source_description()
				}
			]
		},

		footer: {
			copyright: m.footer_copyright(),
			builtWith: m.footer_built_with(),
			githubLabel: m.footer_github_label(),
			issuesLabel: m.footer_issues_label()
		}
	};
}

export type SiteConfig = ReturnType<typeof getSiteConfig>;
