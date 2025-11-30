// Файл: playwright.config.js (БЕЗ Mobile Safari)
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  reporter: 'html',
  
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