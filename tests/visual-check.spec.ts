import { test, expect } from '@playwright/test';

test('homepage visual check', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1000 });

  await page.goto('http://127.0.0.1:3002', {
    waitUntil: 'domcontentloaded',
    timeout: 30000,
  });

  await expect(page.locator('body')).toBeVisible();

  await page.screenshot({
    path: 'test-results/homepage-check.png',
    fullPage: true,
  });
});