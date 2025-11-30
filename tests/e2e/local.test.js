// Файл: tests/e2e/local.test.js
const { test, expect } = require('@playwright/test');

// E2E-4: Проверка видимости кнопки "Увійти"
test('E2E-4: Local - Проверка видимости кнопки Увійти', async ({ page }) => {
    await page.goto('/'); // Переход к baseURL: http://localhost:3000
    const button = page.locator('#loginButton');
    await expect(button).toBeVisible();
});

// E2E-5: Проверка текста placeholder'а
test("E2E-5: Local - Проверка placeholder'а поля Ім'я користувача", async ({ page }) => {
    await page.goto('/');
    const usernameInput = page.locator('#username');
    // УСПЕШНЫЙ РЕЗУЛЬТАТ
    await expect(usernameInput).toHaveAttribute('placeholder', "Ім'я користувача");
});