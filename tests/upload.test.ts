import { Page, test } from "@playwright/test";

test('download-from-server', async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/generate-file-to-download-demo");
    
    await page.type('#textbox', "Hello World!");
    await page.click('#create');

    const [download] = await Promise.all([
        page.waitForEvent('download'),
        await page.click('#link-to-download'),
    ])
    const outputFile = await download.suggestedFilename();
    await download.saveAs(outputFile);
})

test('Upload to server', async ({ page }) => {
    await page.goto('https://blueimp.github.io/jQuery-File-Upload');
    await page.waitForLoadState();
    // await page.setInputFiles("//input[@type='file']", 
    //     ['uploadedItems/mobileHeader.bf9c814fd33016f1921f.png', 'uploadedItems/mobileHeader.bf9c814fd33016f1921f.png']);

    const [fileUpload] = await Promise.all([
        page.waitForEvent('filechooser'),
        await page.click("//input[@type='file']")
    ])

    const isMultiple = fileUpload.isMultiple();
    fileUpload.setFiles(['uploadedItems/mobileHeader.bf9c814fd33016f1921f.png', 'uploadedItems/mobileHeader.bf9c814fd33016f1921f.png'])


    await page.waitForTimeout(2000);    


})