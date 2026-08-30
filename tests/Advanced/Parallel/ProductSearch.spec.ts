import { test, expect } from "@playwright/test"

test.describe.configure({
    mode: 'serial'
});

test('Search Computers', async ({ page }) => {
    await page.goto('https://demowebshop.tricentis.com/');
    await page.locator("#small-searchterms").fill("Build");
    await page.press('#small-searchterms', 'Enter');


    let desktopCompImg = page.getByRole('img', { name: "Build", exact: false });
    await desktopCompImg.nth(0).waitFor({
        state: "visible",
        timeout: 5000
    })
    await expect(desktopCompImg).toHaveCount(3);

    const searchKeyword = page.locator("#Q");
    await expect(searchKeyword).toHaveValue('Build');

})

test('Search Books', async ({ page }) => {
    await page.goto('https://demowebshop.tricentis.com/');
    await page.locator("#small-searchterms").fill("Fiction");
    await page.press('#small-searchterms', 'Enter');


    let fictionBooks = page.getByRole('img', { name: "Fiction", exact: false });
    await fictionBooks.nth(0).waitFor({
        state: "visible",
        timeout: 5000
    })
    await expect(fictionBooks).toHaveCount(2);

    const searchKeyword = page.locator("#Q");
    await expect(searchKeyword).toHaveValue('Fiction');

})