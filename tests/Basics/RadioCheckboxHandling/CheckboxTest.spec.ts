import { test, expect } from '@playwright/test';

test('Handle checkbox', async ({ page }) => {
    await page.goto('https://letcode.in/radio');
    await page.waitForLoadState('domcontentloaded');
    const rememberMe = page.getByRole('checkbox', { name: ' Remember me ' }).first();
    await rememberMe.scrollIntoViewIfNeeded();
    await page.evaluate(()=>{
        window.scrollBy(0,500);
    })
    await rememberMe.check();
    console.log(`Remember Me checkbox after checking ${await rememberMe.isChecked()}`);
    await rememberMe.uncheck();
    console.log(`Remember Me checkbox after unchecking ${await rememberMe.isChecked()}`);

    expect(rememberMe).not.toBeChecked();


   const acceptTCCheckbox = page.getByRole('checkbox',{name: 'I agree to the', exact: false}).first();
        await acceptTCCheckbox.scrollIntoViewIfNeeded();

    await acceptTCCheckbox.check();

    await expect(acceptTCCheckbox).toBeChecked();
});