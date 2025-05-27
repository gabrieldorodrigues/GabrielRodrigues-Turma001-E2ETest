import { defineConfig } from '@playwright/test';
import zerostep from '@zerostep/playwright'; // Import as a config object or plugin

export default defineConfig({
  ...zerostep, // Spread zerostep config if it's an object
  fullyParallel: true,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,

  use: {
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  }
});