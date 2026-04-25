import { test, expect } from '@playwright/test'

test('Select Dropdown Option using filter', async ({ page }) => {
    await page.goto('https://www.testmuai.com/selenium-playground/jquery-dropdown-search-demo/');

    await page.waitForLoadState('domcontentloaded');
    const selectCountry = page.locator("#select2-country-container").locator('..').locator('..').getByRole('combobox').first();
    await selectCountry.click();

    const dropdownMenu = page.getByRole('tree').locator('li').first();
    await dropdownMenu.waitFor({state: 'visible', timeout: 10000});

   const countryToSelect = page.getByRole('treeitem').filter({hasText:'Hong Kong'}).first();

   await countryToSelect.click();

   await expect(selectCountry).toHaveText('Hong Kong');
   
})