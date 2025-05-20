import { Page } from '@playwright/test';

export class HomePage { // Certifique-se que está exportando a classe
  constructor(private page: Page) {}

  async acceptCookiesIfVisible() {
    const button = this.page.locator('button', { hasText: 'Accept' });
    if (await button.isVisible()) {
      await button.click();
    }
  }

  async search(term: string) {
    const input = this.page.locator('input[placeholder="Search free high-resolution photos"]');
    await input.fill(term);
    await input.press('Enter');
  }

  async isFirstResultVisible() {
    return this.page.locator('figure img').first().isVisible();
  }
}