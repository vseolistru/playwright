import {test, expect, type Page} from '@playwright/test'

test('Interact with frames', async ({page}) => {

    await page.goto('https://letcode.in/frame')
    const allFrames = await page.frames();
    console.log(allFrames.length);
    const myFrame = await page.frame("firstFr")

    await myFrame?.fill("//input[@name='fname']","SomeName")
    await myFrame?.fill("//input[@name='lname']","SomeLastName")

    // const frame = page.frameLocator("firstFr")
    // const innerFrame = frame.frameLocator("//iframe[src = 'innerFrame']")
    // await innerFrame.locator("input[name='email']").click()
})
