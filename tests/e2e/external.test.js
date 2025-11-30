// Файл: tests/e2e/external.test.js
const { test, expect } = require('@playwright/test');

// Використовуємо проект 'external-site', де baseURL = 'https://playwright.dev/'
test.use({ project: 'external-site' });

// E2E-3: Проверка заголовка Playwright.dev
test('E2E-3: External - Проверка заголовка документа', async ({ page }) => {
    await page.goto('/'); 
    await expect(page).toHaveTitle(/Playwright/); 
});

// E2E-4: Проверка навигации (переход на раздел Docs)
test('E2E-4: External - Переход на раздел Docs', async ({ page }) => {
    await page.goto('/');
    await page.click('text=Docs'); 
    await expect(page).toHaveURL(/.*docs\/intro/);
});

// E2E-5: Проверка наличия кнопки "Get started"
test('E2E-5: External - Проверка наличия кнопки "Get started"', async ({ page }) => {
    await page.goto('/');
    const button = page.locator('text=Get started');
    await expect(button).toBeVisible(); 
});