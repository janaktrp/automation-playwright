import { Page, Locator, expect } from '@playwright/test'
import { APP_URLS } from '../../tests/data/urls.data';

export class LoginPage {

    readonly page: Page;

    readonly signLink_practiceSite: Locator;
    readonly username_practiceSite: Locator;
    readonly password_practiceSite: Locator;
    readonly loginButton_practiceSite: Locator;

    readonly username_sauceDemoSite: Locator;
    readonly password_sauceDemoSite: Locator;
    readonly loginButton_sauceDemoSite: Locator;

    constructor(page: Page) {
        this.page = page;
        // Practice site
        this.signLink_practiceSite = page.getByRole('link', { name: 'Sign in' })
        this.username_practiceSite = page.locator('#email');
        this.password_practiceSite = page.getByRole('textbox', { name: 'Password' });
        this.loginButton_practiceSite = page.getByRole('button', { name: 'Sign in' });
        // Sauce Demo site
        this.username_sauceDemoSite = page.locator('#user-name');
        this.password_sauceDemoSite = page.locator('#password');
        this.loginButton_sauceDemoSite = page.locator('#login-button');
    }

    // add functions for actions on objects
    // practice site
    async gotoLoginPage_PracticeSite() {
        await this.page.goto(APP_URLS.practiceSite);
        await this.signLink_practiceSite.click();
    }

    async login_practiceSite(user: string, pass: string) {
        await this.username_practiceSite.fill(user);
        await this.password_practiceSite.fill(pass);
        await this.loginButton_practiceSite.click();
    }

    async verifyLoginSuccess_practiceSite() {
        await expect(this.page.getByRole('link', { name: 'Janak Sharma' })).toBeVisible();
    }

    // sauce demo site
    async gotoLoginPage_SauceDemoSite() {
        await this.page.goto(APP_URLS.sauceDemoSite);
    }

    async login_sauceDemoSite(user: string, pass: string) {
        await this.username_sauceDemoSite.fill(user);
        await this.password_sauceDemoSite.fill(pass);
        await this.loginButton_sauceDemoSite.click();
    }

    async verifyLoginSuccess_sauceDemoSite() {
        await this.page.waitForURL('https://www.saucedemo.com/inventory.html');
    }

}