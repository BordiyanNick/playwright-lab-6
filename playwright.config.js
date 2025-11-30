// Файл: playwright.config.js
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  reporter: 'html',

  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
  },

  // -----------------------------
  //  ВАЖНО! Автоматический запуск http-server
  // -----------------------------
  webServer: {
    command: 'npx http-server ./public -p 3000',
    url: 'http://localhost:3000',
    reuseExistingServer: false,
    timeout: 120000
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
      testIgnore: '**/external.test.js', // игнорируем тесты внешнего сайта
    },

    {
      name: 'external-site',
      testMatch: '**/external.test.js', // запускаем только внешние тесты
      use: {
        ...devices['Desktop Firefox'],
        baseURL: 'https://playwright.dev/',
      },
    },
  ],
});
