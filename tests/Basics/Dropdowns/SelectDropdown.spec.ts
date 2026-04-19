import { test, expect, Locator } from '@playwright/test'

test.beforeEach(async ({ page }) => {
    await page.goto('https://letcode.in/dropdowns');
    await page.waitForLoadState('domcontentloaded');
});

test('Select using visible text',async ({page})=>{
   const fruitsDropdown = page.locator('#fruits').first();
   await fruitsDropdown.selectOption({label:'Banana'});
   const valueSelected = await fruitsDropdown.inputValue();
   console.log(`Fruits dropdown value selected ${valueSelected}`);
})

test('Select using value',async ({page})=>{
   const superheros = page.locator('#superheros').first();
   await superheros.selectOption('ta');
   const valueSelected = await superheros.inputValue();
   console.log(`Super Heros value selected ${valueSelected}`);
})

test('Select using index',async ({page})=>{
   const language = page.locator('#lang').first();
   await language.selectOption({index: 1});
   const valueSelected = await language.inputValue();
   console.log(`Programming language value selected ${valueSelected}`);
})

test('Print all options', async ({page})=>{
   const languageDrpDown = await page.locator("#lang options");
   const allOptions = await languageDrpDown.allTextContents();
   console.log(`All language options ${JSON.stringify(allOptions)}`);
})

test('Multiselect using value',async({page})=>{
   const superheros = page.locator('#superheros').first();
   await superheros.selectOption(['am','bt']);
   const selectedOptions = await superheros.evaluate(el => Array.from((el as HTMLSelectElement).selectedOptions)
    .map(option => option.text))
    console.log(`Selected options are ${JSON.stringify(selectedOptions)}`)
})

test('Multiselect using visible text',async({page})=>{
   const superheros = page.locator('#superheros').first();
  
   await superheros.selectOption([{label:'Batwoman'},{label: 'Black Panther'},{label:'Captain America'}]);
   const selectedOptions = await superheros.evaluate(el => Array.from((el as HTMLSelectElement).selectedOptions)
    .map(option => option.text))
    console.log(`Selected options using visible text are ${JSON.stringify(selectedOptions)}`)
})