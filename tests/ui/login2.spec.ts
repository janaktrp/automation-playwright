import { test, expect } from '@playwright/test';
import { LoginPage } from '../../src/pages/LoginPage';
import * as LoginCredentials from '../../tests/data/user.credential';


test('Login Practice Site', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.gotoLoginPage_PracticeSite();
  await loginPage.login_practiceSite(LoginCredentials.getStandardUserLogin().username, LoginCredentials.getStandardUserLogin().password);
  await loginPage.verifyLoginSuccess_practiceSite();
});