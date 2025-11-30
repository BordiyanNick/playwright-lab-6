// файл: playwright.config.js (БЕЗ Mobile Safari)
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  reporter: 'html',

  // *** ДОДАННЯ БЛОКУ webServer ДЛЯ CI ***
  webServer: {
    // Команда для запуску вашого сервера (взято з package.json)
    command: 'npm run start', 
    // URL, на якому Playwright очікує побачити ваш сервер
    url: 'http://localhost:3000', 
    // Час очікування запуску сервера (в мілісекундах)
    timeout: 120 * 1000, 
    // Забороняє повторно використовувати сервер, якщо ми в CI-середовищі
    reuseExistingServer: !process.env.CI, 
  },
  // ***************************************
  
  use: {
    baseURL: 'http://localhost:3000', 
    trace: 'on-first-retry',
  },
  
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
      // Игнорируем внешние тесты
      testIgnore: '**/external.test.js', 
    },
    // *** БЛОК MOBILE SAFARI УДАЛЕН ***

    // Проект для внешнего сайта Playwright.dev
    {
      name: 'external-site',
      testMatch: '**/external.test.js', // Запускаем ТОЛЬКО внешние тесты
      use: {
        ...devices['Desktop Firefox'],
        baseURL: 'https://playwright.dev/', 
      },
    },
  ],
});
