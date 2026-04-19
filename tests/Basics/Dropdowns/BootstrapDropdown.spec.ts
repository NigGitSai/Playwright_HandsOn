import { test, expect, Locator } from '@playwright/test'


test.beforeEach(async ({ page }) => {
    await page.goto('https://www.testmuai.com/selenium-playground/jquery-dropdown-search-demo/');
    await page.waitForLoadState('domcontentloaded');
});

test('Select options from ul li list',async ({page})=>{
  const selectStateDropdown =  page.getByRole('combobox').nth(1);
  await selectStateDropdown.click();
  const state = page.getByRole('treeitem').filter({hasText: 'California'});
  await state.click();
  const stateSelectedLocator = page.locator('.select2-selection__choice').first();
  const stateSelected =    await stateSelectedLocator.innerText();
  console.log(`State Selected value is ${stateSelected}`);
})