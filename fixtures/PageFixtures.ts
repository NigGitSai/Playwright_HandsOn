import {test as baseTest} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

type MyPageFixture= {
    loginPage: LoginPage;
}

export const test = baseTest.extend<MyPageFixture>({
    
    loginPage : async({page},use)=>{
        const loginPage = new LoginPage(page);
        await use(loginPage);
    }
})