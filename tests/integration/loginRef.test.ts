import LoginPage from '../../pages/loginPage';
import { myFixtureTest } from '../../fixture/my_fixture';
import { url } from '../../fixture/my_fixture';
import AddToCart from '../../pages/addToCart';
import { myFirstProduct } from '../../fixture/my_fixture';

// myFixtureTest.use({
//     browserName:'firefox'
// })

myFixtureTest('fixture login demo', async ({ email, password, page}) => {
    const login = new LoginPage(page);
    const userCart = new AddToCart(page);
    const {size, item} = myFirstProduct[0];
    



    await page.goto(url);
    await page.click('//header/ul/li[2]');   
    
    await login.email(email);
    await login.enterPassword(password);
    await login.clickLoginButton();
    await page.waitForTimeout(500);


    await userCart.findAndAddToCart(size, item);    
    await userCart.goToCart();
    await userCart.assertationItem(item);

    await page.close();


})