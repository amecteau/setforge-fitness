import { base } from '$app/paths';

export const siteConfig = {
	appName: 'SetForge',
	tagline: 'Count Every Rep. Own Your Progress.',
	description:
		'Track your reps and sets during every workout. SetForge stores everything locally — no account, no cloud, no ads. Free for Windows and Android.',
	longDescription:
		'SetForge is built for the gym floor — not a dashboard. Tap to count each rep, log the weight, save the set. Your full workout history lives on your device, searchable and private. No subscription, no account required, no data sent anywhere.',

	meta: {
		title: 'SetForge — Privacy-First Gym Rep Counter',
		ogTitle: 'SetForge — Count Every Rep. Own Your Progress.',
		ogDescription:
			'A privacy-first gym rep counter for Windows and Android. Your workout data stays on your device.',
		ogImage: `${base}/og-image.png`
	},

	links: {
		githubRepo: 'https://github.com/amecteau/setforge-app',
		githubIssues: 'https://github.com/amecteau/setforge-app/issues'
	},

	downloads: {
		windows: {
			url: 'https://github.com/amecteau/setforge-app/releases/latest',
			label: 'Download for Windows',
			sublabel: 'MSI installer — Windows 10/11'
		},
		android: {
			url: 'https://github.com/amecteau/setforge-app/releases/latest',
			label: 'Download for Android',
			sublabel: 'APK — Android 8.0+'
		}
	},

	hero: {
		headline: 'Count Every Rep.\nOwn Your Progress.',
		subheadline: 'SetForge is a privacy-first gym tracker built for your workout — not your data.',
		badge: 'Free & Open Source',
		ctaPrimary: 'Download for Windows',
		ctaSecondary: 'Get it on Android',
		ctaTertiary: 'View on GitHub'
	},

	features: {
		headline: 'Built for the Gym Floor',
		subheadline: "Everything you need to track your progress. Nothing you don't.",
		items: [
			{
				id: 'no-account',
				icon: 'shield',
				title: 'No Account Required',
				description: 'Your data lives on your device. No sign-in, no cloud sync, no ads — ever.'
			},
			{
				id: 'tap-to-count',
				icon: 'tap',
				title: 'Tap to Count',
				description:
					'One tap per rep. Built for sweaty hands, mid-set focus, and zero friction.'
			},
			{
				id: 'history',
				icon: 'history',
				title: 'Full Workout History',
				description:
					'Every set, every exercise, every session — searchable and browsable, forever.'
			},
			{
				id: 'scales',
				icon: 'text',
				title: 'Scales With You',
				description: 'Four font sizes so the rep count is readable from across the room.'
			},
			{
				id: 'custom-exercises',
				icon: 'dumbbell',
				title: 'Custom Exercises',
				description: 'Add any lift to your library, not just what we decided to include.'
			},
			{
				id: 'cross-platform',
				icon: 'device',
				title: 'Cross-Platform',
				description:
					'The same app on Windows desktop and Android. Your history goes where you go.'
			}
		]
	},

	screenshots: {
		headline: 'See It in Action',
		subheadline: "A focused interface designed for the moment you're in.",
		items: [
			{
				id: 'counter',
				src: `${base}/screenshots/counter.png`,
				alt: 'SetForge rep counter screen',
				caption: 'Tap to count. Weight entry optional. Save when your set is done.'
			},
			{
				id: 'history',
				src: `${base}/screenshots/history.png`,
				alt: 'SetForge workout history screen',
				caption: 'Browse every workout, every set, all the way back to day one.'
			},
			{
				id: 'exercises',
				src: `${base}/screenshots/exercises.png`,
				alt: 'SetForge exercise library screen',
				caption: 'Your full exercise library — default lifts plus anything you add.'
			}
		]
	},

	download: {
		headline: 'Get SetForge Free',
		subheadline: 'Available now for Windows and Android.',
		playStoreNote: 'Google Play Store listing coming soon.',
		sourceNote: 'Prefer to build from source? The full code is on GitHub.',
		githubCta: 'View Source on GitHub'
	},

	privacy: {
		headline: 'Your Reps Stay Yours',
		subheadline:
			'No account. No tracking. No cloud. SetForge stores everything locally on your device.',
		items: [
			{
				id: 'local-storage',
				icon: 'lock',
				title: 'Local Storage Only',
				description:
					'All workout data is stored in a SQLite database on your device. Nothing leaves.'
			},
			{
				id: 'no-analytics',
				icon: 'eye-off',
				title: 'No Analytics',
				description: 'Zero telemetry, zero tracking pixels, zero third-party scripts.'
			},
			{
				id: 'open-source',
				icon: 'code',
				title: 'Open Source',
				description: 'The full source code is public. Audit it, fork it, or contribute.'
			}
		]
	},

	footer: {
		copyright: '© 2026 SetForge. All rights reserved.',
		builtWith: 'SvelteKit + Tauri'
	}
} as const;

export type SiteConfig = typeof siteConfig;
