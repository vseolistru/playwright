import {test, chromium, firefox, expect} from '@playwright/test';
import * as assert from "assert";

test('Login test demo', async () =>{
        //{headless : false}
        const browser = await firefox.launch({headless : true});
        const context = await browser.newContext();

        //and also we can create new tab in browser and also get instance of new browser
        //const browser = await chromium.launch({headless : true});
        //const context = await browser.newContext();
        //const page1 = await newContext.newPage();
        //await page1.goto('http://192.168.1.30:3000/')
        //we get new tab with navigate to same address

        const page = await context.newPage();
        await page.goto('http://192.168.1.30:3000/')
        await page.click('//header/ul/li[2]')
        await page.getByPlaceholder('Email').fill('vknseo@gmail.com')
        await page.getByPlaceholder('Password').fill('!qw2Er4Ty6')
        await page.click('//div[@class = "row"]/button')
        await page.hover('//header/ul/li[2]')
        await page.click('//header/ul/li[2]/div/a[1]')


        await expect(page.getByText('Profile Client')).toBeVisible()
        await expect(page.getByText('Email: vknseo@gmail.com')).toBeVisible()
        await expect(page.getByText('Phone')).toBeVisible()
        await expect(page.getByText('City')).toBeVisible()
        await expect(page.getByText('Address')).toBeVisible()
        await page.hover('//header/ul/li[2]')
        await page.click('//header/ul/li[2]/div/a[3]')

        await expect(page.locator('//label[1]')).toContainText('ser')
        await expect(page.locator('//label[2]')).toContainText('assw')


})

// test('Find and navigate to login page', async (page) =>{
//     await page
// })

