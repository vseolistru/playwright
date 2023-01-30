import {test, chromium, firefox, expect, } from '@playwright/test';
import LoginPage from '../../pages/loginPage';
import { testFixture } from '../../fixture/my_fixture';


test('Login test demo', async ({page}) =>{
        //{headless : false}
        // const browser = await firefox.launch({headless : false});
        // const context = await browser.newContext();
        //
        //
        // const page = await context.newPage();
        
        //go to page
        await page.goto('http://192.168.1.30:3000/');
        //locate & click login
        await page.click('//header/ul/li[2]');
        //locate & scroll
        const emailLocator = page.locator('//input[@name="email"]');
        await emailLocator.scrollIntoViewIfNeeded();
        //fill inputs
        await page.getByPlaceholder('Email').fill('vknseo@gmail.com');
        await page.getByPlaceholder('Password').fill('!qw2Er4Ty6');
        //click login
        await page.click('//div[@class = "row"]/button');
        //locate history
        await page.hover('//header/ul/li[2]');
        //locate & click profile
        await page.click('//header/ul/li[2]/div/a[1]');
        //await page.waitForTimeout(5000)     
       
        //assertations profileClient
        await expect(page.getByText('Profile Client')).toBeVisible();
        await expect(page.getByText('Email: vknseo@gmail.com')).toBeVisible();
        await expect(page.getByText('Phone')).toBeVisible();
        await expect(page.getByText('City')).toBeVisible();
        await expect(page.getByText('Address')).toBeVisible();
        //loguot
        await page.hover('//header/ul/li[2]');
        await page.click('//header/ul/li[2]/div/a[3]');

        await expect(page.locator('//label[1]')).toContainText('ser');
        await expect(page.locator('//label[2]')).toContainText('assw');

        //chromium test
        //and also we can create new tab in browser and also get instance of new browser
        // const chromiumBrowser = await chromium.launch({headless : false});
        // const newBrowserContext = await chromiumBrowser.newContext();
        // const page1 = await newBrowserContext.newPage();
        //
        //
        // await page1.goto('http://192.168.1.30:3000/')
        // await page1.click('//header/ul/li[2]')
        // await page1.getByPlaceholder('Email').fill('vknseo@gmail.com')
        // await page1.getByPlaceholder('Password').fill('!qw2Er4Ty6')
        // await page1.click('//div[@class = "row"]/button')
        // await page1.hover('//header/ul/li[2]')
        // await page1.click('//header/ul/li[2]/div/a[1]')
        //
        // await expect(page1.getByText('Profile Client')).toBeVisible()
        // await expect(page1.getByText('Email: vknseo@gmail.com')).toBeVisible()
        // await expect(page1.getByText('Phone')).toBeVisible()
        // await expect(page1.getByText('City')).toBeVisible()
        // await expect(page1.getByText('Address')).toBeVisible()
        // await page1.hover('//header/ul/li[2]')
        // await page1.click('//header/ul/li[2]/div/a[3]')
        // await expect(page1.locator('//label[1]')).toContainText('ser')
        // await expect(page1.locator('//label[2]')).toContainText('assw')

})

test ("loginPage", async ({ page }) => {
        await page.goto('http://192.168.1.30:3000/');
        //locate & click login
        await page.click('//header/ul/li[2]');
        const login = new LoginPage(page)
        await login.email('vknseo@gmail.com');
        await login.enterPassword('!qw2Er4Ty6');
        await login.clickLoginButton();

        await page.waitForTimeout(2000);
})




// test('Find and navigate to login page', async (page) =>{
//     await page
// })

