import {test, expect, type Page} from '@playwright/test'

test('Check hiden blocks',async ({ page }) => {
    await page.goto('http://vseolif8.beget.tech/');
    //validate main
    await expect(page.locator('//div[@class = "portfolio__content"]/div/h2')).toContainText('Привет!');
    //validate sidebar
    await expect(page.locator('//div[@class="portfolio__sidebar-item"]/a[@href="/testing"]')).toContainText('Мои инструменты');
    await expect(page.locator('//div[@class="portfolio__sidebar-item"]/a[@href="/development"]')).toContainText('Мои инструменты разработки')
    await expect(page.locator('//div[@class="portfolio__sidebar-item"]/a[@href="/tools"]')).toContainText('Инструменты, которые,')

    expect (page.locator('//div[@class="portfolio__sidebar-item"][1]/h4')).toContainText('Тестирование')      
    expect (page.locator('//div[@class="portfolio__sidebar-item"][2]/h4')).toContainText('Разработка')   
    expect (page.locator('//div[@class="portfolio__sidebar-item"][3]/h4')).toContainText('Другие Инструменты') 

    //goto start tetsting page -/testing
    await page.click('//div[@class="portfolio__sidebar-item"]/a[@href="/testing"]');
    //locate portfolio__content-item extend-content

    const baseLocator = await page.locator('//div[@class="portfolio__content"]/div/h2')
    await baseLocator.scrollIntoViewIfNeeded();
    //validate page
    await expect(page.locator('//div[@class="portfolio__content"]/div/h2')).toContainText('Тестирование приложений')

    //click firsthiddenblock & validate <p>Дымовое тестирование</p>        
    await page.click ('//div[@class="portfolio__content"]/div/h4[1]');
    await expect(page.locator('//div[@class="show-content1"]/p[1]')).toContainText('Дымовое тестирование');

    //click nextblock & validate 
    await page.click ('//div[@class="portfolio__content"]/div/h4[2]');
    await expect(page.locator('//div[@class="portfolio__content"]/div/div[2]/p[1]')).toContainText('Отличным инструментом тестирования')
    await page.click ('//div[@class="portfolio__content"]/div/h4[3]');
    await expect(page.locator('//div[@class="portfolio__content"]/div/div[3]/p[1]')).toContainText('Отличным и современным инструментом тестирования UI');
    
    //start testing page- /development
    await page.click ('//div[@class="portfolio__sidebar-item"]/a[@href="/development"]');
    expect (page.locator('//div[@class="portfolio__content"]/div/h2')).toContainText('Разработка.')
    //locate hidden block & validate
    await expect(page.locator ('//div[@class="portfolio__content"]/div/h4[1]')).toContainText('Начнем с создания бекенда')
    await page.click ('//div[@class="portfolio__content"]/div/h4[1]');
    await expect(page.locator('//div[@class="show-content1"]/p[1]')).toBeVisible();
    await expect(page.locator('//div[@class="show-content1"]/p[1]')).toContainText('Итак наша задача создать для заказчика возможност');

    //locate hidden block & validate
    await expect(page.locator ('//div[@class="portfolio__content"]/div/h4[2]')).toContainText('Хранение данных')
    await page.click ('//div[@class="portfolio__content"]/div/h4[2]');
    await expect(page.locator('//div[@class="portfolio__content"]/div/div[2]/p[1]')).toBeVisible();
    await expect(page.locator('//div[@class="portfolio__content"]/div/div[2]/p[1]')).toContainText('Да безусловно, самым популярным решением тут является SQL-server')

    //locate next hidden block & validate
    await expect(page.locator ('//div[@class="portfolio__content"]/div/h4[3]')).toContainText('Клиентская часть')
    await page.click ('//div[@class="portfolio__content"]/div/h4[3]');
    await expect(page.locator('//div[@class="portfolio__content"]/div/div[3]/p[1]')).toBeVisible()
    await expect(page.locator('//div[@class="portfolio__content"]/div/div[3]/p[1]')).toContainText('В последнее время в среде разработки и создания веб приложений ')
    
    //locate hidden block & validate
    await expect(page.locator ('//div[@class="portfolio__content"]/div/h4[4]')).toContainText('Деплой проекта')
    await page.click ('//div[@class="portfolio__content"]/div/h4[4]');
    await expect(page.locator('//div[@class="portfolio__content"]/div/div[4]/p[1]')).toBeVisible();
    await expect(page.locator('//div[@class="portfolio__content"]/div/div[4]/p[1]')).toContainText('И теперь про деплой. отлично когда у вас есть vps,')

    //start testing page /tools         
    await page.click ('//div[@class="portfolio__sidebar-item"]/a[@href="/tools"]')
    expect (page.locator('//div[@class="portfolio__content"]/div/h2')).toContainText('Смежные инструменты')

    //locate hidden block & validate
    await expect(page.locator ('//div[@class="portfolio__content"]/div/h4[2]')).toContainText('GitHub.')
    await expect(page.locator('//div[@class="portfolio__content"]/div/div[1]/p[1]')).toBeHidden()
    await page.click ('//div[@class="portfolio__content"]/div/h4[2]')
    await expect(page.locator('//div[@class="portfolio__content"]/div/div[1]/p[1]')).toBeVisible()
    await expect(page.locator('//div[@class="portfolio__content"]/div/div[1]/p[1]')).toContainText('Безусловно одним из главных инструментов')
    
    await expect(page.locator ('//div[@class="portfolio__content"]/div/h4[3]')).toContainText('Docker.')
    await expect(page.locator('//div[@class="portfolio__content"]/div/div[2]/p[1]')).toBeHidden()
    await page.click ('//div[@class="portfolio__content"]/div/h4[3]')
    await expect(page.locator('//div[@class="portfolio__content"]/div/div[2]/p[1]')).toBeVisible()
    await expect(page.locator('//div[@class="portfolio__content"]/div/div[2]/p[1]')).toContainText('Безусловно, докер прочно вошел в разработку')

    await expect(page.locator ('//div[@class="portfolio__content"]/div/h4[4]')).toContainText('Postman')
    await expect(page.locator('//div[@class="portfolio__content"]/div/div[3]/p[1]')).toBeHidden()
    await page.click ('//div[@class="portfolio__content"]/div/h4[4]')
    await expect(page.locator('//div[@class="portfolio__content"]/div/div[3]/p[1]')).toBeVisible()
    await expect(page.locator('//div[@class="portfolio__content"]/div/div[3]/p[1]')).toContainText('Отличным инструментом разработки ')

    await expect(page.locator ('//div[@class="portfolio__content"]/div/h4[5]')).toContainText('Figma')
    await expect(page.locator('//div[@class="portfolio__content"]/div/div[4]/p[1]')).not.toBeVisible()
    await page.click ('//div[@class="portfolio__content"]/div/h4[5]')
    await expect(page.locator('//div[@class="portfolio__content"]/div/div[4]/p[1]')).toBeVisible()
    await expect(page.locator('//div[@class="portfolio__content"]/div/div[4]/p[1]')).toContainText('Отличным решением для работы с макетами')
    //


})