import {Locator, Page} from '@playwright/test';

export class LoginPage {

    readonly page:Page;
    readonly userNameTxtBox: Locator;
    readonly passwordTxtBox: Locator;
    readonly loginButton: Locator;
    readonly passwordRequiredTxt: Locator;
    readonly dismissBtn: Locator;
    readonly userHasBeenLockedOutTxt: Locator;

    constructor(page: Page) {
        this.page = page;
        this.userNameTxtBox = page.getByPlaceholder('Username');
        this.passwordTxtBox = page.getByPlaceholder('Password');
        this.loginButton = page.getByRole('button',{name: "Login"});
        this.passwordRequiredTxt = page.getByRole('alert', {
  name: 'Epic sadface: Password is required'
});

    this.userHasBeenLockedOutTxt = page.locator("//h3[@role='alert' and contains(text(),'Sorry, this user has been locked out.')]");
    this.dismissBtn = page.getByRole('button', { name: 'Dismiss error' });

    }


    private async enterUserName(userName: string): Promise<void>{

        await this.userNameTxtBox.waitFor({state:'visible',timeout:5000});
        await this.userNameTxtBox.fill(userName);
    }

    private async enterPassword(password: string): Promise<void>{
        await this.passwordTxtBox.waitFor({state:'visible',timeout:5000});
        await this.passwordTxtBox.fill(password);
    }

    private async clickLoginButton(): Promise<void>{
        await this.loginButton.click();
    }

    public async verifyPasswordIsrequired(): Promise<boolean>{ 
        return await this.passwordRequiredTxt.isVisible();
    }

     public async verifyUserHasBeenLockedOutText(): Promise<boolean>{ 
        await this.userHasBeenLockedOutTxt.waitFor({state:'visible',timeout:5000});
        return await this.userHasBeenLockedOutTxt.isVisible();
    }

    public async clickDismissError(): Promise<void>{
        await this.dismissBtn.click();
    }

    public async login(userName: string, password:string):Promise<void>{
        await this.enterUserName(userName);
        await this.enterPassword(password);
        await this.clickLoginButton();
    }


    
}