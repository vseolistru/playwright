import { expect, Page, test } from "@playwright/test";
import moment from "moment";

test('calendar-test', async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo");
    let date = '2010-04-16';
    await page.fill("id=birthday", date);
    await page.waitForTimeout(3000);

})

test('calendar demo using moment', async ({ page }) => {


    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo");


    let month: string = 'May 2023'
    
    type DateCalendar = {
        dateStart: number,
        dateEnd: number,
        month: string,
    }
    

    const selectDate = async  <DateCalendar>(dateStart:DateCalendar, dateEnd:DateCalendar, month:DateCalendar): Promise<void> => {       

        await page.click("//input[@placeholder='Start date']");
        const mmYY = page.locator("//div[@class ='datepicker-days']/table[@class = 'table-condensed']//tr/th[@class='datepicker-switch']");
        const prev = page.locator("//div[@class ='datepicker-days']/table[@class = 'table-condensed']//tr/th[@class='prev']");
        const next = page.locator("//div[@class ='datepicker-days']/table[@class = 'table-condensed']//tr/th[@class='next']");
        const date = page.locator(`//td[@class = 'day'][text()='${dateStart}']`);

        const thisMonth = moment(month, 'MMMM YYYY').isBefore();

        while (await mmYY.textContent() != month) {
            if(thisMonth) {
                await prev.click();
                //await page.locator(`//td[@class = 'day'][text()='${dateEnd}']`).click();
            }else {
                await next.click();
                //
            }      
            
        }        
        await page.locator(`//td[@class = 'day'][text()='${dateEnd}']`).click();
        await date.click();
    }

    await selectDate(5, 24, 'July 2023');
    page.reload();
    await selectDate(4, 23, 'July 2022');

    //const info = page.locator("//h2[text()='Data Range Picker']");


    
})