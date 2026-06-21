import {test,expect} from '@playwright/test';

test('using not',async({page})=>{
await page.goto('https://www.saucedemo.com/');
const loginButton = page.getByTestId('login-button');
 await expect(loginButton).not.toBeDisabled();
 await expect(page).not.toHaveTitle('demoCart')
});