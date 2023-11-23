import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/');
  await page.getByRole('img', { name: 'First slide' }).click();
  await page.locator('.card > a').first().click();
  await page.getByRole('link', { name: 'Add to cart' }).click();
  await page.getByRole('link', { name: 'Cart', exact: true }).click();
  await page.getByRole('button', { name: 'Place Order' }).click();
  await page.getByLabel('Total:').click();
  await page.getByLabel('Total:').fill('Rob');
  await page.getByLabel('Country:').click();
  await page.getByLabel('Country:').fill('BE');
  await page.getByLabel('City:').click();
  await page.getByLabel('City:').fill('Tongeren');
  await page.getByLabel('Credit card:').click();
  await page.getByLabel('Month:').click();
  await page.getByLabel('Month:').fill('12');
  await page.getByLabel('Year:').click();
  await page.getByLabel('Year:').fill('2024');
  await page.getByLabel('Credit card:').click();
  await page.getByLabel('Credit card:').fill('5438545825283');
  await page.getByRole('button', { name: 'Purchase' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
});