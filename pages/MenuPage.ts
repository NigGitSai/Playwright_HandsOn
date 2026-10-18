import { Locator, Page } from "@playwright/test";

export class MenuPage{
    readonly page: Page;
    readonly hambergerMenu: Locator;
    readonly logoutMenu: Locator;
    constructor(page: Page){
        this.page = page;
        this.hambergerMenu = page.getByRole('button',{name: 'Open Menu'}).first();
        this.logoutMenu = page.getByRole('button',{name: 'Logout'}).first();
        
    }

    public async logout(): Promise<void>{
        await this.hambergerMenu.click();
        await this.logoutMenu.click();

    }
}