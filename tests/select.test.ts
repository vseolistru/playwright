import {test, expect, type Page} from '@playwright/test'

test('Select test', async ({page}) => {
    await page.goto('https://www.lambdatest.com/selenium-playground/select-dropdown-demo')
    await page.locator("//select[@id='select-demo']").click()

    await expect(page.locator("//select[@id='select-demo']/option[3]")).toContainText('Monday')
    await page.locator("//select[@id='select-demo']/option[3]").click

    await expect(page.locator("//select[@id='select-demo']/option[3]")).toContainText('Monday')
    

    await page.selectOption('#select-demo', {
        //label: 'Tuesday',
        value: 'Monday',
        //index: 5,
    })
    //await expect(page.locator("//select[@id='select-demo']/option[3]")).toContainText('Monday')
    await page.waitForTimeout(2000);

    await page.selectOption('#multi-select', [{
        label: 'California'
    },{
        index: 2
    }, {
        value: 'New York'
    }])

})

test('jQuery Bootstrap selector combobox', async ({page}) => {

    await page.goto('https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo');
    

    const selectCountry = async (countryName) => {
        await page.click('#country+span')
        await page.locator("ul#select2-country-results")
        .locator("li",{
             hasText: countryName
        }).click()
    }

    await selectCountry('Japan');
    await selectCountry('Denmark');
    await selectCountry('Australia');

    
})