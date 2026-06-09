import {test, expect} from '@playwright/test';

test('Locate using Has options',async({page})=>{
    await page.goto('https://www.saucedemo.com/');

    await page.waitForLoadState('domcontentloaded', {timeout: 10000});

    const userName = page.locator(".form_group",{has: page.locator("input#user-name")}).locator('input');
    await userName.fill("standard_user");

   const password = page.locator(".form_group",{hasNot:page.locator("input#user-name")}).locator('input');
   await password.fill("secret_sauce");

   await page.locator("#login-button").click();

   await page.waitForURL("**/inventory.html",{timeout:5000});

   await page.locator("//a",{hasText:'Sauce Labs Backpack'}).click();

   await page.getByRole('button',{name: 'Back to products'}).click();

   await page.locator(".inventory_item_name ",{hasNotText:/Sauce.*/}).click();

})