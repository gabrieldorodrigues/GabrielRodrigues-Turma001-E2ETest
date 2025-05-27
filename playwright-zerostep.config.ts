// playwright-zerostep.config.ts
import { defineConfig } from '@playwright/test';
import zerostepConfig from '@zerostep/playwright';

export default defineConfig({
  ...zerostepConfig,
  // Configurações base do Playwright
  fullyParallel: true,
  retries: process.env.CI ? 2 : 0, // Em CI, tenta 2 vezes se falhar
  workers: process.env.CI ? 1 : undefined, // Em CI, 1 worker para estabilidade

  // Configurações específicas do ZeroStep e outras opções do Playwright
  use: {
    // Autenticação via secret do GitHub Actions
    trace: 'on-first-retry', // Grava traces para debug
    screenshot: 'only-on-failure'
  },
});