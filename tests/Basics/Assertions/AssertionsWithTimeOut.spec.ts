import {test,expect} from '@playwright/test';

test('Using inbuilt timeout',async({page})=>{
    await page.goto('https://www.saucedemo.com/');
     const userName = page.getByTestId('username');

     await expect(userName).toBeEditable({timeout:10000});
     await expect(page).toHaveURL('https://www.saucedemo.com/xyz',{timeout:10000});
})