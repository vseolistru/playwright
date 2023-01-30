import { Page } from "@playwright/test";

interface User {
    userName: string;
    email: string;
    password: string;
    confirm: string 
}

export default class RegisterPage {
    

    constructor(public page: Page) {
        
    }
    async enterUserName(userName: string) {        
        await this.page.locator("input[type='UserName']")
            .type(userName);
    }

    async email(email: string) {        
        await this.page.locator("input[type='email']")
            .type(email);
    }

    async enterPassword(password: string) {        
        await this.page.locator("input[type='password']")
            .type(password);
    }

    async enterConfirm(confirmPassword: string) {        
        await this.page.locator("input[type='UserName']")
            .type(confirmPassword);
    }

    async clickRegister() {
        await this.page.click('button[type="submit"]');
    }
}