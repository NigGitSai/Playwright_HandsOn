import { test, expect, Locator } from '@playwright/test';

test('Handle Alerts advanced way', async ({ page }) => {
    await page.goto('https://letcode.in/alert');
    await page.waitForLoadState('domcontentloaded', { timeout: 12000 });
    const simpleAlertBtn = page.locator("#accept");

   const[dialog] = await Promise.all([
        page.waitForEvent('dialog'),
        simpleAlertBtn.click()
    ]);
    console.log(`Alert message ${dialog.message()}`);
    console.log(`Alert Type ${dialog.type()}`);
    await dialog.accept();
})