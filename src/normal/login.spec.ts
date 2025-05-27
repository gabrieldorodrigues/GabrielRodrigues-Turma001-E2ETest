import { test, expect } from '@playwright/test';

test('Login tradicional no The Internet', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');
  await page.fill('#username', 'tomsmith');
  await page.fill('#password', 'SuperSecretPassword!');
  await page.click('button[type="submit"]');
  await expect(page).toHaveURL(/\/secure$/);
});