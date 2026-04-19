import { test, expect,Locator } from "@playwright/test";

test('Get By Placeholder Locator validation',async({page})=>{
    await page.goto('https://www.testmuai.com/selenium-playground/input-form-demo/');
    await page.getByPlaceholder('Name',{exact: true}).first().fill("Varun");
    const actualInput = await page.getByPlaceholder('Name',{exact: true}).first().inputValue();
    console.log(actualInput);
})

test('Get By Role Locator validation', async ({ page }) => {
    await page.goto('https://letcode.in/button');
    await page.waitForLoadState('domcontentloaded', { timeout: 60000 });
    const goToHome = page.getByRole('button', { name: 'Goto Home and come back here using driver commanda', exact: true }).first();
    await goToHome.click();
    const actualUrl = await page.url();
    console.log(actualUrl);
    const header = await page.getByRole('heading', { name: ' LetCode with Koushik ', exact: false }).first();
    const headerText = await header.innerText();
    console.log(`Header text ${headerText}`);
    const workSpace = await page.getByRole('link', { name: 'Work-Space' });

    await workSpace.click();
    const buttonWidget: Locator = await page.locator("//p[contains(@class,'card-header-title') and contains(text(),'Button')]/../..//a[contains(text(),'Click')]").first();
    await buttonWidget.waitFor({ state: 'visible' });
    await buttonWidget.click();
    await page.waitForLoadState('domcontentloaded', { timeout: 60000 });

})

test('Get by text Locator validation ', async ({ page }) => {
    await page.goto('https://letcode.in/button');
    const whatIsMyColorBtn = await page.getByText('What is my color?').first();
    await whatIsMyColorBtn.waitFor({ state: 'visible', timeout: 60000 });
    await whatIsMyColorBtn.click();
})


test('Get by Label Locator validation ', async ({ page }) => {
    await page.goto('https://letcode.in/button');

    const whatIsMyColorBtn = await page.getByLabel('Find the color of the button');
    await whatIsMyColorBtn.click();
   const buttonText = await whatIsMyColorBtn.innerText();
   console.log(`Test Case 3 Button text ${buttonText}`);
})

