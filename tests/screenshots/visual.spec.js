// Файл: tests/screenshots/visual.spec.js (ТОЛЬКО ОДИН СТАБИЛЬНЫЙ ТЕСТ)
const { test, expect } = require('@playwright/test');

// Screenshot-1: Скриншот формы входа (Desktop)
test('Screenshot-1: Визуальное сравнение формы входа (Desktop)', async ({ page }) => {
    await page.goto('/');
    const form = page.locator('#loginForm'); 
    expect(await form.screenshot()).toMatchSnapshot('login-form-desktop.png');
});

// УДАЛИТЕ ЛЮБОЙ ДРУГОЙ ТЕСТ В ЭТОМ ФАЙЛЕ