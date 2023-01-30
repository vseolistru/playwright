import LoginPage from '../../pages/loginPage';
import { testFixture } from '../../fixture/my_fixture';

testFixture('fixture demo', async ({ email, password, page }) => {
    await page.goto('http://192.168.1.30:3000/');
    await page.click('//header/ul/li[2]');
    const login = new LoginPage(page);
    await login.email(email);
    await login.enterPassword(password);
    await login.clickLoginButton();

    await page.waitForTimeout(2000);

})