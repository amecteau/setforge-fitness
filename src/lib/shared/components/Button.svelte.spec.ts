import { render } from 'vitest-browser-svelte';
import { expect, test } from 'vitest';
import { createRawSnippet } from 'svelte';
import Button from './Button.svelte';

const label = createRawSnippet(() => ({ render: () => '<span>Download</span>' }));

test('renders as an anchor with the given href', async () => {
	const { getByRole } = render(Button, { props: { href: '/test', children: label } });
	await expect.element(getByRole('link')).toHaveAttribute('href', '/test');
});

test('external links get target="_blank" and rel="noopener noreferrer"', async () => {
	const { getByRole } = render(Button, {
		props: { href: 'https://example.com', external: true, children: label }
	});
	const link = getByRole('link');
	await expect.element(link).toHaveAttribute('target', '_blank');
	await expect.element(link).toHaveAttribute('rel', 'noopener noreferrer');
});

test('internal links omit target and rel', async () => {
	const { getByRole } = render(Button, {
		props: { href: '/about', external: false, children: label }
	});
	const link = getByRole('link');
	await expect.element(link).not.toHaveAttribute('target');
	await expect.element(link).not.toHaveAttribute('rel');
});
