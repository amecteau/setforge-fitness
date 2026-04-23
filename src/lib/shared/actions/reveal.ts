import type { Action } from 'svelte/action';

export const reveal: Action = (node) => {
	const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

	if (prefersReduced) {
		return;
	}

	node.classList.add('reveal-hidden');

	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					node.classList.remove('reveal-hidden');
					node.classList.add('reveal-visible');
					observer.disconnect();
				}
			}
		},
		{ threshold: 0.08 }
	);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
};
