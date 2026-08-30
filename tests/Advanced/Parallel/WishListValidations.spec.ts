import { test, expect } from '@playwright/test';

test.describe.configure({
    mode: 'serial'
})
test('Add To Wishlist', async ({ page }) => {
    await page.goto("https://demowebshop.tricentis.com/");

    await page.locator("//a[@href='/jewelry']").nth(0).click();

    await page.waitForURL(/\/jewelry$/, { timeout: 5000 });

    await page.locator("//h2[@class='product-title']//a[@href='/black-white-diamond-heart']").click();

    await page.waitForURL(/\/black-white-diamond-heart$/, { timeout: 5000 });

    await page.locator("//div[@class='product-name']/*[ contains(text(),'Black & White Diamond Heart')]/../..//input[@value='Add to wishlist']").click();

    const actualSuccessMessage = await page.locator("//div[@id='bar-notification']/p").textContent();
    await expect(actualSuccessMessage).toContain("The product has been added to your ");

    await page.locator("//div[@class='header-links']//a[@href='/wishlist']").click();

    await page.waitForURL(/\/wishlist$/, { timeout: 5000 });

    let jewelryInWishlist = page.locator("//tr[@class='cart-item-row']/td[@class='product']/a[@href='/black-white-diamond-heart']");

    await expect(jewelryInWishlist).toBeVisible();


})

test('Remove from Wishlist', async ({ page }) => {
    await page.goto("https://demowebshop.tricentis.com/");

    await page.locator("//div[@class='header-links']//a[@href='/wishlist']").click();
    await page.waitForURL(/\/wishlist$/, { timeout: 5000 });

    await page.locator('td:has-text("Remove:")').getByRole('checkbox').click();

    await page.locator("//input[@name='updatecart']").click();

   const actualWishListQty = await page.locator("//span[@class='wishlist-qty']").textContent();
   await expect(actualWishListQty).toEqual("(0)");
})