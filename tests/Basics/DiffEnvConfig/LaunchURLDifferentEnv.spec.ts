import { test, chromium, expect } from "@playwright/test";

test('Launch browser and print url', async ({ page }) => {
    await page.goto('/Login');
    const url = await page.url();
    console.log(`Url : ${url}`);
})