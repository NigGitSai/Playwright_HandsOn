import {test,expect} from '@playwright/test';

test('URL pattern',async({page})=>{
    await page.goto("https://www.saucedemo.com/");
    await page.getByTestId('username').fill('standard_user');
    await page.getByTestId('password').fill('secret_sauce');
    await page.getByTestId('login-button').click();
    //const pattern = new URLPattern({pathname:'/inventory.html'})
   // await expect(page).toHaveURL(url=>pattern.test(url));
   await expect(page).toHaveURL(/.*\/inventory\.html/);
})