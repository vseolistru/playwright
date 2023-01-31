import { test, expect, type Page } from '@playwright/test'
import { PortfolioHelper } from '../portfolio/portfolioHelper';
import { 
    testingPage,
    developmentPage,
    TestingPage,
    DevPage, 
    toolsPage, 
    ToolPage
 } from '../portfolio/portfolioFixture';

test('Check hiden blocks',async ({ page }) => {
    const checkSidebar = new PortfolioHelper(page); 
    const { hidenTestingBlocks, assertTestingBlocks } = TestingPage;
    const { hiddenDevBlocks, assertDevBlocks } = DevPage;
    const {hiddenToolsBlocks, assertToolsBlocks, locatorsForHiddenBlocks} = ToolPage;

    await page.goto('http://vseolif8.beget.tech/');
    //validate main
    await checkSidebar.validateMainPage();

    //validate sidebar links    
    await checkSidebar.validateSidebar()

    //goto start tetsting page -/testing
    await checkSidebar.navigate(testingPage);

    //locate portfolio__content-item extend-content scroll for locator example
    const baseLocator = await page.locator('//div[@class="portfolio__content"]/div/h2')
    await baseLocator.scrollIntoViewIfNeeded();
    
    //validate testing page
    await checkSidebar.switchHidenBlocksTestingPage(hidenTestingBlocks, assertTestingBlocks);


    //start testing page- /development
    await checkSidebar.navigate(developmentPage);
    await checkSidebar.swithHiddenBlocksDevelopmentPage(hiddenDevBlocks, assertDevBlocks);

    //start testing page- /tools         
    await checkSidebar.navigate(toolsPage);

    await checkSidebar.switchHiddenBlocksTools(
        locatorsForHiddenBlocks,
         hiddenToolsBlocks,
         assertToolsBlocks
    );
    
})