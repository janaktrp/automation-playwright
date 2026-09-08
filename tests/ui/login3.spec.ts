import { test } from '@playwright/test';
import { LoginPage } from '../../src/pages/LoginPage';
import * as LoginCredentials from '../../tests/data/user.credential';

test('LOGIN Sauce Demo', async ({ page }) => {

   const loginPage = new LoginPage(page);

   await loginPage.gotoLoginPage_SauceDemoSite();
   await loginPage.login_sauceDemoSite(LoginCredentials.getSauceUserLogin().username, LoginCredentials.getSauceUserLogin().password)
   await loginPage.verifyLoginSuccess_sauceDemoSite();

});
