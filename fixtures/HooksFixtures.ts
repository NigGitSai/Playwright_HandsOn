import {test as baseTest} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import sauceDemoLoginData from '../testdata/sauceDemo_LoginData.json';
import { MenuPage } from '../pages/MenuPage';


type HooksFixture= {
    loginPage: LoginPage;
    menuPage: MenuPage;
}

export const test = baseTest.extend<HooksFixture>({
    
    loginPage : async({page},use)=>{
        await page.goto('https://www.saucedemo.com/');
        const loginPageObj = new LoginPage(page);
        await loginPageObj.login(sauceDemoLoginData.username,sauceDemoLoginData.password);
        await use(loginPageObj);
    },
    menuPage: async({page,loginPage},use)=>{
        const menuPageObj = new MenuPage(page);
        await use(menuPageObj);
        await menuPageObj.logout();
    }

})

export {expect} from '@playwright/test';