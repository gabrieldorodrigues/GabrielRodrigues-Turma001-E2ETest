import { test, expect } from '@playwright/test';
import { ai } from '@zerostep/playwright';

test('Login com ZeroStep AI', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');
  
  // Usando comandos de IA para interagir com a página
  await ai('Preencha o campo de usuário com "tomsmith"', { page, test });
  await ai('Preencha a senha com "SuperSecretPassword!"', { page, test });
  await ai('Clique no botão de login', { page, test });
  
  // Validações
  await expect(page).toHaveURL(/\/secure$/);
  await ai('Verifique se a mensagem de sucesso está visível', { page, test });
});