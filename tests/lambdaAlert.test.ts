import {test, chromium, firefox, expect, type Page} from '@playwright/test';

test('check first alert', async ({ page }) => {
    await page.goto('https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo');
    await expect(page.locator('//section[@class="mt-50"]/div/div/div/div/button')).toContainText('Click Me');

    page.on('dialog', async (alert) => {
        const firstAlert = await alert.message();
        await expect(firstAlert).toContain('I am an alert box')
        
        await alert.accept();
    })
    await page.click('//section[@class="mt-50"]/div/div/div/div/button');   
    //await page.locator("button: has-text('Click Me')").nth(0).click();
})


test('check second alert', async ({ page }) => {
    await page.goto('https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo');
    await expect (page.locator('//div[@class = "mt-30 border border-gray-90 rounded"][2]/div/p/button')).toContainText('Click Me');
    page.on('dialog', async (alert) => {
        const secondtAlert = await alert.message();
        await expect(secondtAlert).toContain('Press a button!');
        await alert.dismiss()        
    })
    await page.click('//div[@class = "mt-30 border border-gray-90 rounded"][2]/div/p/button')
    await expect (page.locator('//div[@class = "mt-30 border border-gray-90 rounded"][2]/div/p[4]')).toContainText('You pressed Cancel!')    
})

test('check third alert', async ({ page }) => {
    await page.goto('https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo');
    await expect (page.locator("//div[@class = 'mt-30 border border-gray-90 rounded'][3]/p[3]/button")).toContainText('Click Me');
    page.on('dialog', async (alert) => {
        const thirdtAlert = await alert.defaultValue();

        await alert.accept('some_name');
    })

    await page.click("//div[@class = 'mt-30 border border-gray-90 rounded'][3]/p[3]/button")
    await expect (page.locator("//div[@class = 'mt-30 border border-gray-90 rounded'][3]/p[4]")).toContainText('some_name');
});

test('check modal', async ({ page }) => {
    //
    await page.goto('https://www.lambdatest.com/selenium-playground/bootstrap-modal-demo');

    await expect(page.locator("//button[@data-target='#myModal']")).toContainText('Launch Modal')
    await page.click("//button[@data-target='#myModal']")

    const modalLocator = page.getByText('Save Changes').nth(0);

    await expect(modalLocator).toContainText('Save Changes');;
    await modalLocator.click()


})