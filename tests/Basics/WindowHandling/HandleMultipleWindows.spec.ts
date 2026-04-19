import { test, expect, Locator } from '@playwright/test';

test('Handle Multiple Windows based on page title', async ({ page }) => {

    await page.goto('https://letcode.in/window');

    await page.waitForLoadState('domcontentloaded', { timeout: 60000 });

    const context = page.context();
    const existingPages = context.pages();

    await page.locator('#multi').click();

    await expect.poll(() => context.pages().length).toBeGreaterThan(existingPages.length);

    const allPages = context.pages();

    const newPages = allPages.slice(existingPages.length);
    let targetPage;
    for (const p of newPages) {
        await p.waitForLoadState();
        const title = await p.title();
        if(title.includes('Dropdowns | LetCode with Koushik')){
            targetPage = p;
            break;
        }
    }
    await targetPage?.bringToFront();
   const url =  await targetPage?.url();
   console.log(url);

})