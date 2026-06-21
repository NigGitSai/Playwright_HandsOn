import {test,expect} from '@playwright/test';

test('using not',async({page})=>{
    await page.goto('https://www.saucedemo.com/');
    const loginButton = page.getByTestId('login-button');
     await expect(loginButton).toHaveCount(1);
     await expect.soft(loginButton).toBeHidden();
     await expect(loginButton).toHaveId('login-button');
    await expect(loginButton).toHaveClass('submit-button btn_action');

});