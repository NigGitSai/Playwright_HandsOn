import { test, expect, Locator } from '@playwright/test';


test('Handle Simple Alert', async ({ page }) => {
    await page.goto('https://letcode.in/alert');
    await page.waitForLoadState('domcontentloaded', { timeout: 12000 });
    page.once('dialog', async dialog => {

        console.log(`Alert message ${dialog.message()}`);
        console.log(`Alert Type ${dialog.type()}`);
        console.log(`Alert default value ${dialog.defaultValue()}`);

        console.log(`=======================================`);

        await dialog.accept();
    })
    const simpleAlertBtn = page.locator("#accept");
    await simpleAlertBtn.click();
})

test('Handle Confirm Alert', async ({ page }) => {
    await page.goto('https://letcode.in/alert');
    await page.waitForLoadState('domcontentloaded', { timeout: 12000 });
    page.once('dialog', async dialog => {
        console.log(`Alert type ${dialog.message()}`);
        console.log(`Alert Type ${dialog.type()}`);
        console.log(`Alert default value ${dialog.defaultValue()}`);
        console.log(`=======================================`);

        await dialog.dismiss();
    })
    const confirmAlertbtn = page.locator('#confirm');
    await confirmAlertbtn.click();
})


test('Handle Prompt alert', async ({ page }) => {
    await page.goto('https://letcode.in/alert');
    await page.waitForLoadState('domcontentloaded', { timeout: 12000 });

    page.once('dialog', async dialog => {
        console.log(`Alert type ${dialog.message()}`);
        console.log(`Alert Type ${dialog.type()}`);
        console.log(`Alert default value ${dialog.defaultValue()}`);
        console.log(`=======================================`);
        await dialog.accept('test hi');

    })
    const promptAlertbtn = page.locator('#prompt');
    await promptAlertbtn.click();
})