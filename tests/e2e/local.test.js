// Файл: tests/e2e/local.test.js (ПРАВИЛЬНЫЙ КОД)
const { test, expect } = require('@playwright/test');

// ... (E2E-1)

// E2E-2: Проверка текста placeholder'а поля Ім'я користувача
test("E2E-2: Local - Проверка placeholder'а поля Ім'я користувача", async ({ page }) => {
    await page.goto('/');
    const usernameInput = page.locator('#username');
    // ВОТ ЗДЕСЬ ДОЛЖНО БЫТЬ ОЖИДАНИЕ ПРАВИЛЬНОГО ТЕКСТА
    await expect(page).toHaveTitle(/INTENTIONAL CI FAILURE/);
});
