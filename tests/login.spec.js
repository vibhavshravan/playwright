// @ts-check
import { test, expect } from '@playwright/test';

test('Login to admin panel', async ({ page }) => {

  await page.goto('https://automationintesting.online/');
  await expect(page).toHaveTitle('Restful-booker-platform demo');
  console.log('Reached URL');

  await page.getByRole('link', { name: 'admin panel', exact: true }).click();

  await page.getByTestId('username').click();
  await page.getByTestId('username').fill('admin');

  await page.getByTestId('password').click();
  await page.getByTestId('password').fill('password');
  await page.getByTestId('submit').click();
  
  await page.getByRole('link', { name: 'B&B Booking Management' }).isVisible();
  console.log('Login successful');
});
