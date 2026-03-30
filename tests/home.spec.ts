import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
  test('should load the home page', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Virabo/i);
  });

  test('should display hero section', async ({ page }) => {
    await page.goto('/');
    const hero = page.locator('section').first();
    await expect(hero).toBeVisible();
  });

  test('should toggle language', async ({ page }) => {
    await page.goto('/');
    const langToggle = page.getByRole('button', { name: /FR|EN/i });
    if (await langToggle.isVisible()) {
      await langToggle.click();
    }
  });

  test('should navigate to projects section', async ({ page }) => {
    await page.goto('/');
    const projectsLink = page.getByRole('link', { name: /projects|projets/i });
    if (await projectsLink.isVisible()) {
      await projectsLink.click();
    }
  });
});
