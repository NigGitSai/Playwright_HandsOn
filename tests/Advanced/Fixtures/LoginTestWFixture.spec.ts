import {expect} from '@playwright/test'
import {test} from '../../../fixtures/LoginFixture';
import sauceDemoLoginData from '../../../testdata/sauceDemo_LoginData.json';

test('Login with valid credentials',async({page,loginPage})=>{
    await page.goto('https://www.saucedemo.com/');
    await loginPage.login(sauceDemoLoginData.username,sauceDemoLoginData.password);
    await expect(page).toHaveURL(/www\.saucedemo\.com\/inventory\.html/);
})

test('Login with in-valid credentials',async({page,loginPage})=>{
    await page.goto('https://www.saucedemo.com/');
    await loginPage.login(sauceDemoLoginData.lockedOut_Username,sauceDemoLoginData.password);
    expect(await loginPage.verifyUserHasBeenLockedOutText()).toBe(true);
})

