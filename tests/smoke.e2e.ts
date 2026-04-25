import { test, expect } from '@playwright/test';

test.describe('SetForge smoke tests', () => {
	test('page loads with correct title', async ({ page }) => {
		await page.goto('/');
		await expect(page).toHaveTitle(/SetForge/);
	});

	test('hero section is visible with primary CTA', async ({ page }) => {
		await page.goto('/');
		await expect(page.getByText('Count Every Rep.')).toBeVisible();
		await expect(page.getByRole('link', { name: 'Download for Windows' }).first()).toBeVisible();
		await expect(page.getByRole('link', { name: 'Get it on Android' })).toBeVisible();
	});

	test('all six section headings are present', async ({ page }) => {
		await page.goto('/');
		await expect(page.getByText('Built for the Gym Floor')).toBeVisible();
		await expect(page.getByText('See It in Action')).toBeVisible();
		await expect(page.getByText('Get SetForge Free')).toBeVisible();
		await expect(page.getByText('Your Reps Stay Yours')).toBeVisible();
	});

	test('mobile viewport — hero CTA is visible at 375px', async ({ page }) => {
		await page.setViewportSize({ width: 375, height: 812 });
		await page.goto('/');
		await expect(page.getByRole('link', { name: 'Download for Windows' }).first()).toBeVisible();
	});

	test('desktop viewport — features grid renders at 1280px', async ({ page }) => {
		await page.setViewportSize({ width: 1280, height: 800 });
		await page.goto('/');
		await expect(page.getByText('No Account Required')).toBeVisible();
		await expect(page.getByRole('heading', { name: 'Tap to Count' })).toBeVisible();
		await expect(page.getByText('Cross-Platform')).toBeVisible();
	});

	test('footer is present with copyright', async ({ page }) => {
		await page.goto('/');
		await expect(page.getByText('© 2026 SetForge')).toBeVisible();
	});
});
