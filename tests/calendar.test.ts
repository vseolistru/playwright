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


    await page.click("//input[@placeholder='Start date']");
    const mmYY = page.locator("//div[@class ='datepicker-days']/table[@class = 'table-condensed']//tr/th[@class='datepicker-switch']");
    const prev = page.locator("//div[@class ='datepicker-days']/table[@class = 'table-condensed']//tr/th[@class='prev']");
    const next = page.locator("//div[@class ='datepicker-days']/table[@class = 'table-condensed']//tr/th[@class='next']");
    const date = page.locator("//td[@class = 'day'][text()='2']")

    let dateToSelect: string = 'May 2023'
    const thisMonth = moment(dateToSelect, 'MMMM YYYY').isBefore();


    while (await mmYY.textContent() != dateToSelect) {
        if(thisMonth) {
            await prev.click();
            await page.locator("//td[@class = 'day'][text()='22']").click();
        }else {
            await next.click();
            await page.locator("//td[@class = 'day'][text()='22']").click();
        }      
        
    }

    const info = page.locator("//h2[text()='Data Range Picker']")
    console.log(info.getByText);


    await date.click();
})