import { test, expect } from '@playwright/test';

test('Login tradicional no The Internet', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');
  
  // Interações manuais
  await page.fill('#username', 'tomsmith');
  await page.fill('#password', 'SuperSecretPassword!');
  await page.click('button[type="submit"]');
  
  // Validações
  await expect(page).toHaveURL(/\/secure$/);
  await expect(page.locator('.flash.success')).toContainText('You logged into a secure area!');
});