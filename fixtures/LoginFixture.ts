import {test as baseTest} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

type LoginFixture= {
    loginPage: LoginPage;
    
}


export const test = baseTest.extend<LoginFixture>({
    
    loginPage : async({page},use)=>{
        const loginPageObj = new LoginPage(page);
        await use(loginPageObj);
    }
})