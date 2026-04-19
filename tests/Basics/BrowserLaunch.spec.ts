import { test, chromium, expect } from "@playwright/test";

test('open google',async()=>{
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://www.google.com/");
    await page.waitForLoadState("domcontentloaded");
    await page.waitForTimeout(10000);
    const actualtitle = await page.title();
    await expect(actualtitle).toBe('Google');
    await page.close();
})