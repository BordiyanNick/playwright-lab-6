// Файл: playwright.config.js
// ...
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
      testIgnore: '**/playwright_dev.test.js', // <-- Повинен ігнорувати Playwright.dev
    },
    {
      name: 'Mobile Safari',
      use: { ...devices['iPhone 13'] }, 
      testIgnore: '**/playwright_dev.test.js', // <-- Повинен ігнорувати Playwright.dev
    },
    {
      name: 'playwright-site',
      testMatch: '**/playwright_dev.test.js', // <-- Запускає ТІЛЬКИ Playwright.dev
      use: {
        ...devices['Desktop Firefox'],
        baseURL: 'https://playwright.dev/', 
      },
    },
  ],
// ...