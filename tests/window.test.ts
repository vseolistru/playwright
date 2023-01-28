import  {test, Page, expect } from "@playwright/test";
let facebookPage: Page;

test("window-tab", async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/window-popup-modal-demo");

    const [ newWindow ] = await Promise.all([
        page.waitForEvent("popup"),
        page.click("//div[@class='w-8/12 smtablet:w-full']/div/a[2]")               
    ])
    console.log(newWindow.url());
    await page.waitForLoadState();
    newWindow.click("//a[@aria-label='Log in']");
    newWindow.waitForTimeout(2000);

    const [ multiplePage ] = await Promise.all([
        page.waitForEvent("popup"),
        page.click("//a[@title='Follow @Lambdatesting']")
    ]);

    await page.waitForLoadState();
    const pages = multiplePage.context().pages();
    console.log(pages.length);
    pages.forEach(item => console.log(item.url()));

    

    for (let i = 0; i < pages.length; i++) {
        const url = pages[i].url();
        if(url ==='https://www.facebook.com/lambdatest/') {
            facebookPage = pages[i]
        }
    }
    const h1Text = await facebookPage.textContent("//h1");
        console.log(h1Text);

})