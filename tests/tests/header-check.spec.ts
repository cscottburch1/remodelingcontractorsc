import { test, expect } from '@playwright/test';

test('header is visible', async ({ page }) => {
  await page.goto('http://127.0.0.1:3002', {
    waitUntil: 'domcontentloaded',
    timeout: 30000,
  });

  await expect(page.locator('header')).toBeVisible();
});