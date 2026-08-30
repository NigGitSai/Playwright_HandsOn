import {test,expect} from '@playwright/test';
import path from 'path';

test ("Login DemoWeb Shop ",async ({page})=>{
    await page.goto('https://demowebshop.tricentis.com/');
    await page.locator("//a[text()='Log in']").click();
    await page.waitForURL(/\/login$/, {timeout: 5000});
    await page.locator("#Email").fill("testA1.1@gmail.com");
    await page.locator("#Password").fill("Tosca123!");
    await page.locator("//input[@value='Log in']").click();

   const userNameAfterLogin=  page.locator("//div[@class='header-links']//a[@class='account']");

   await expect(userNameAfterLogin).toHaveText("testA1.1@gmail.com",{timeout: 5000});

   const authFilePath =  path.join(process.cwd(),'utils','session','authsession.json');

   await page.context().storageState({
    path: authFilePath
});
})