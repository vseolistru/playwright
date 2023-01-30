import { Page } from "@playwright/test";

interface User {
    email: string;
    password: string;

}

export default class LoginPage {
    

    constructor(public page: Page) {
        
    }
    async email(email: string) {        
        await this.page.locator("input[type='email']")
            .type(email);
    }

    async enterPassword(password: string) {        
        await this.page.locator("input[type='password']")
            .type(password);
    }

    async clickLoginButton() {
        await this.page.locator("button[type='submit']")
           .click();
    }

}



