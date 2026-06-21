import {test,expect, selectors} from '@playwright/test';
test.beforeEach('navigate to application', async ({page})=> {
    await page.goto('https://www.saucedemo.com/');
    await page.waitForLoadState('domcontentloaded');
})
test.skip('using configuration testIdAttribute',async({page})=>{
   await page.getByPlaceholder('Username').fill('standard_user');
   await page.getByPlaceholder('Password').fill('secret_sauce');
   await page.getByTestId('login-button').click();
    const sauceLabsBackpack = page.getByRole('link',{name: 'Sauce Labs Backpack',exact: false}).first();
    await expect(sauceLabsBackpack).toBeVisible();
    await page.close();
})

test('using inline testIdAttribute configuration',async({page})=>{
    selectors.setTestIdAttribute('data-test');
    await page.getByPlaceholder('Username').fill('standard_user');
   await page.getByPlaceholder('Password').fill('secret_sauce');
   await page.getByTestId('login-button').click();
    const sauceLabsBackpack = page.getByRole('link',{name: 'Sauce Labs Backpack',exact: false}).first();
    await expect(sauceLabsBackpack).toBeVisible();
})
test.afterEach('Close the browser',async({page})=>{
 await page.close();
} )