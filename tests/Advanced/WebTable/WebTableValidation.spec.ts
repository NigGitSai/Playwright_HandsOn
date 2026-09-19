import { test, expect } from '@playwright/test';
import path from 'path';

test.use({
    storageState: path.join(
        process.cwd(),
        'utils',
        'session',
        'authsession.json'
    )
});

test("Verify Dynamic Table Data", async ({ page }) => {

    await page.goto("https://demowebshop.tricentis.com/");
    await page.locator("//div[@class='header-links']//a[@href='/wishlist']").click();
    await page.waitForURL(/\/wishlist$/, { timeout: 5000 });

    const tableRows = page.getByRole('table').getByRole('row');

    const tableRowCount = await tableRows.count();

    for (let i = 1; i < tableRowCount; i++) {

        const row = tableRows.nth(i);

        const productTitle = await row.locator("td.product a").textContent();

        if (productTitle === "Black & White Diamond Heart") {
            await row.locator("td.remove-from-cart input[type='checkbox']").check();
            break;

        }
    }
})