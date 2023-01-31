import { Page } from "@playwright/test";


export default class LoginPage {    

    constructor(public page: Page) { }

    async email(email: string) {        
        await this.page.locator("input[type='email']")
            .fill(email);
    }

    async enterPassword(password: string) {        
        await this.page.locator("input[type='password']")
            .fill(password);
    }

    async clickLoginButton() {
        await this.page.locator("button[type='submit']")
           .click();
    }
}



