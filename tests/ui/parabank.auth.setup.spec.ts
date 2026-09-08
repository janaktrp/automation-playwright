import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import * as fs from 'fs';

import { RegisterPage } from '../../src/pages/RegisterPage';

const authFile = 'playwright/.auth/users.json';

test.beforeEach(async () => {
    if (fs.existsSync(authFile)) {
        fs.writeFileSync(authFile, '{}', 'utf-8');
        console.log('🧹 Cleared authentication file before test.');
    }
});

test('Register at Parabank', async ({ page }) => {
    const MAX_RETRIES = 3;
    const password = faker.internet.password();
    const registerPage = new RegisterPage(page);

    for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
        await registerPage.goTo();

        await registerPage.fillForm();

        const username = faker.internet.username();

        await registerPage.fillCredentials(username, password);

        await registerPage.submitForm();

        await page.waitForLoadState('networkidle');

        if (await registerPage.isErrorVisible()) {
            console.log(
                `Attempt ${attempt}: Username "${username}" already exists. Retrying...`
            );
            continue;
        }

        await registerPage.verifyAccountCreation(username);

        await page.context().storageState({
            path: authFile,
        });

        break;
    }
});