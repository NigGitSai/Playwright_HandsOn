import { test, expect } from '@playwright/test';

test('Handle checkbox', async ({ page }) => {
    await page.goto('https://letcode.in/radio');
    await page.waitForLoadState('domcontentloaded');
    
    await page.evaluate(()=>{
        window.scrollBy(0,500);
    })

   const rememberMeCheckbox = page.getByLabel(' Remember me ').first();

   await rememberMeCheckbox.click();
   await expect(rememberMeCheckbox).not.toBeChecked();

   const fooRadio = page.getByLabel(' Foo ').first();
   await fooRadio.click();

   await expect(fooRadio).toBeChecked();
});