import { test, expect } from '@playwright/test';
import { createfakeCustomerData } from '../../tests/data/customerinfo.data';

test('create account', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.locator('#email_create').click();
  await page.locator('#email_create').fill(createfakeCustomerData().emailAddress);
  await page.getByRole('button', { name: 'Create an account' }).click();
  await page.getByRole('radio', { name: 'Mr.' }).check();
  await page.getByRole('textbox', { name: 'First name *' }).fill(createfakeCustomerData().firstName);
  await page.getByRole('textbox', { name: 'Last name *' }).fill(createfakeCustomerData().lastName);
  await page.getByRole('textbox', { name: 'Password *' }).fill(createfakeCustomerData().password);
  await page.locator('#days').selectOption(createfakeCustomerData().date);
  await page.locator('#months').selectOption(createfakeCustomerData().month);
  await page.locator('#years').selectOption(createfakeCustomerData().year);
  await page.getByRole('button', { name: 'Register' }).click();
  await page.getByText('Your account has been created.').click();
  await expect(page.getByText('Your account has been created.')).toBeVisible();
});