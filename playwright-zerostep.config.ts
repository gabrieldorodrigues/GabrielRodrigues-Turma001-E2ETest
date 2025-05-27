import { defineConfig } from '@playwright/test';

export default defineConfig({
  // Configuração do plugin ZeroStep (adicione as opções conforme necessário)
  // Exemplo: zerostepKey: process.env.ZEROSTEP_KEY,

  // Configurações gerais do Playwright
  fullyParallel: true,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  use: {
    trace: 'on-first-retry',
    screenshot: 'only-on-failure'
    // Adicione outras opções do Playwright aqui, se necessário
  }
});
