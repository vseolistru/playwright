import { Page, expect } from "@playwright/test";

export default class AddToCart {

    constructor(public page: Page) {}

    async findAndAddToCart (size: number, item: string): Promise<void> {     
        await this.page.locator(`//div[@data-set = '${item}']//input[@value='${size}']`).click();          
        await this.page.locator(`//div[@data-set = '${item}']//a[@id='btn_buy']`).click();
    }



    async goToCart(): Promise<void> {
        await this.page.locator(`//a[@href='/cart']`).click();
    }

    async assertationItem(item: string): Promise<void> {
        await expect(this.page.locator('//h2')).toContainText(`${item}`);
    }

}