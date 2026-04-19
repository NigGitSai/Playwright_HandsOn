import { test, expect, Locator } from '@playwright/test';

test('Click and hold button', async ({ page }) => {

    await page.goto("https://letcode.in/button");
    const button1 = await page.locator('#isDisabled').nth(1);
    const buttonTextBeforeHolding = await button1.innerText();
    console.log(`Button text before holding ${buttonTextBeforeHolding}`);
    await button1.hover();
    await page.mouse.down();
    await page.waitForTimeout(3000);
    const buttonTextAfterHolding = await button1.innerText();
    console.log(`Button text after holding ${buttonTextAfterHolding}`)

})