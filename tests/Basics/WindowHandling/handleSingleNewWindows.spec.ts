import { test, expect } from '@playwright/test';

test('Single new tab handling', async ({ page }) => {
  await page.goto('https://letcode.in/window');
  const [newTab] = await Promise.all([
    page.context().waitForEvent('page'),
    page.getByRole('button', { name: 'home' }).first().click()
  ]);

  const newTabTitle = await newTab.title();
  console.log(`New Tab title ${newTabTitle}`);
  const newTabUrl = await newTab.url();
  console.log(`New Tab Url: ${newTabUrl}`);
  const headingInNewTab = newTab.getByRole('heading', { level: 1 }).first();
  const heading = await headingInNewTab.innerText();
  console.log(`Heading in new tab ${heading}`);
});