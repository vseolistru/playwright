import { Page, expect } from "@playwright/test";


const TestingData = {
    firstHeader: 'Тестирование приложений',
    nextHeader:'Дымовое тестирование'
} 

const DevData = {
    firstHeader: 'Разработка.',
    firstAssert: 'Начнем с создания бекенда',
    nextAssert: 'Итак наша задача создать для заказчика возможност'

}

export class PortfolioHelper {
    
    constructor(public page : Page) {}
        //validate sidebar elements
    async validateSidebar():Promise<void> {

        await expect(this.page.locator(
            '//div[@class="portfolio__sidebar-item"]/a[@href="/testing"]'))
                .toContainText('Мои инструменты');

        await expect(this.page.locator(
            '//div[@class="portfolio__sidebar-item"]/a[@href="/development"]'))
                .toContainText('Мои инструменты разработки')

        await expect(this.page.locator(
            '//div[@class="portfolio__sidebar-item"]/a[@href="/tools"]'))
                .toContainText('Инструменты, которые,')

        
        await expect (this.page.locator(
            '//div[@class="portfolio__sidebar-item"][1]/h4'))
                .toContainText('Тестирование')   

        await expect (this.page.locator(
            '//div[@class="portfolio__sidebar-item"][2]/h4'))
                .toContainText('Разработка')  

        await expect (this.page.locator(
            '//div[@class="portfolio__sidebar-item"][3]/h4'))
                .toContainText('Другие Инструменты') 
    }

    //validate main
    async validateMainPage() {
    await expect(this.page.locator(
        '//div[@class = "portfolio__content"]/div/h2'))
            .toContainText('Привет!');
    }
    //navigate to sideBar
    async navigate (somePage: string) {
        await this.page.click(`//div[@class="portfolio__sidebar-item"]/a[@href="${somePage}"]`);
    }

    //switcher
    async switchBlocks (hidenBlocks: number[], assertBlocks: string[]) {
        for (let i = 0; i < hidenBlocks.length; i++) {
            await this.page.click (
                `//div[@class="portfolio__content"]/div/h4[${hidenBlocks[i]}]`);
            await expect(this.page.locator(
                `//div[@class="portfolio__content"]/div/div[${hidenBlocks[i]}]/p[1]`))
                .toBeVisible();    
            await expect(this.page.locator(
                `//div[@class="portfolio__content"]/div/div[${hidenBlocks[i]}]/p[1]`))
                .toContainText(assertBlocks[i])
        }  
    }

    //validate TestingPage
    async switchHidenBlocksTestingPage (hidenBlocks: number[], assertBlocks: string[]) {
        await expect(this.page.locator(
            '//div[@class="portfolio__content"]/div/h2'))
                .toContainText(TestingData.firstHeader);

        await this.page.click (`//div[@class="portfolio__content"]/div/h4[1]`);

        await expect(this.page.locator(
            '//div[@class="show-content1"]/p[1]'))
                .toContainText(TestingData.nextHeader);    
        
        await this.switchBlocks(hidenBlocks, assertBlocks)    

    }


    async swithHiddenBlocksDevelopmentPage (hidenBlocks: number[], assertBlocks: string[]) {
        await expect (this.page.locator(
            '//div[@class="portfolio__content"]/div/h2'))
                .toContainText(DevData.firstHeader)

        //locate hidden block & validate
        await expect(this.page.locator(
            '//div[@class="portfolio__content"]/div/h4[1]'))
                .toContainText(DevData.firstAssert)

        await this.page.click(
            '//div[@class="portfolio__content"]/div/h4[1]');
        await expect(this.page.locator(
            '//div[@class="show-content1"]/p[1]'))
                .toBeVisible();
                
        await expect(this.page.locator(
            '//div[@class="show-content1"]/p[1]'))
                .toContainText(DevData.nextAssert);
      
        //validate H4
        await expect(this.page.locator (
            '//div[@class="portfolio__content"]/div/h4[2]'))
            .toContainText('Хранение данных')
        await expect(this.page.locator (
            '//div[@class="portfolio__content"]/div/h4[3]'))
            .toContainText('Клиентская часть')
        await expect(this.page.locator (
            '//div[@class="portfolio__content"]/div/h4[4]'))
            .toContainText('Деплой проекта')
        
        //locate hidden block & validate
        await this.switchBlocks(hidenBlocks, assertBlocks);   
    }

    async switchHiddenBlocksTools (
        locatorsForHiddenBlocks:number[], 
        hidenBlocks: number[], 
        assertBlocks: string[]
        ) {
        expect (this.page.locator(
            '//div[@class="portfolio__content"]/div/h2'))
            .toContainText('Смежные инструменты')

        //validate h4
        await expect(this.page.locator(
            '//div[@class="portfolio__content"]/div/h4[2]'))
            .toContainText('GitHub.');
        await expect(this.page.locator(
            '//div[@class="portfolio__content"]/div/h4[3]'))
            .toContainText('Docker.');
        await expect(this.page.locator(
            '//div[@class="portfolio__content"]/div/h4[4]'))
            .toContainText('Postman');
        await expect(this.page.locator(
            '//div[@class="portfolio__content"]/div/h4[5]'))
            .toContainText('Figma');

        await expect(this.page.locator(
            '//div[@class="portfolio__content"]/div/div[1]/p[1]'))
            .toBeHidden()
        await expect(this.page.locator(
            '//div[@class="portfolio__content"]/div/div[2]/p[1]'))
            .toBeHidden()
        await expect(this.page.locator(
            '//div[@class="portfolio__content"]/div/div[3]/p[1]'))
            .toBeHidden()
        await expect(this.page.locator(
            '//div[@class="portfolio__content"]/div/div[4]/p[1]')
            ).not.toBeVisible()

        await this.switchToolsBlocks(locatorsForHiddenBlocks, hidenBlocks, assertBlocks);    

    }

    async switchToolsBlocks (locatorsForHiddenBlocks: number[], hidenBlocks: number[], assertBlocks: string[]) {
        for (let i = 0; i < hidenBlocks.length; i++) {
            await this.page.click (
                `//div[@class="portfolio__content"]/div/h4[${locatorsForHiddenBlocks[i]}]`);
            await expect(this.page.locator(
                `//div[@class="portfolio__content"]/div/div[${hidenBlocks[i]}]/p[1]`))
                .toBeVisible();    
            await expect(this.page.locator(
                `//div[@class="portfolio__content"]/div/div[${hidenBlocks[i]}]/p[1]`))
                .toContainText(assertBlocks[i])
        }  
    }


}