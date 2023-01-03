import {test, expect, chromium} from '@playwright/test';

test.beforeEach( async () =>{
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('http://192.168.1.30:3000/')
})

