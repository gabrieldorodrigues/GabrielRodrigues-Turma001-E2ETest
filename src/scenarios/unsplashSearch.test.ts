import { test, expect } from '@playwright/test';
import { HomePage } from '../support/pages/homePage';
import data from '../support/fixtures/searchData.json';

test('Buscar imagens no Unsplash com termo do fixture', async ({ page }) => {
  const home = new HomePage(page);

  await page.goto('https://unsplash.com');
  await home.acceptCookiesIfVisible();
  await home.search(data.searchTerm);
  const resultVisible = await home.isFirstResultVisible();

  expect(resultVisible).toBeTruthy();
});